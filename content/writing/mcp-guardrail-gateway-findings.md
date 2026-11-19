---
title: Prompt guardrails are requests. Put the security below the model.
description: 'What held up when I red-teamed an LLM agent''s tool calls: session binding, resolving SSRF checks, and deterministic tests where a compromised model still gets blocked.'
date: '2026-11-19'
---

A system prompt that says "only access the current user's data" is a request to a probabilistic model, not a guarantee. Indirect prompt injection, malicious text planted in data the agent reads, can talk the model out of it. Once that happens, any defense that lived only in the prompt is gone.

I built [MCP Guardrail Gateway](https://github.com/evwalt/mcp-guardrail-gateway) to test what holds up instead. It is a small Python layer that sits between an LLM agent and its tools, and it runs as a real MCP server over stdio using the official `mcp` SDK. The agent has two tools over a SQLite customer store: `query_customer_records` and `fetch_external_doc`. Every call goes through one choke point that checks the call before the tool runs and cleans the output after.

## How I tested it

Each attack is tested twice: once with the gateway off, asserting the exploit succeeds, and once with it on, asserting it is blocked. A green suite therefore means the attack was real and the fix works. The tests run offline with a deterministic mock model, including a "compromised" mock that obeys the injection. That is the point: the model does what the attacker asks, and the gateway still refuses.

Four vectors are covered: cross-tenant reads (BOLA/IDOR), indirect prompt injection, SSRF to the cloud metadata endpoint, and secret exfiltration. CI runs the red-team suite as a merge gate alongside Semgrep, Gitleaks, and pip-audit.

## What I found

**Prompt-level and action-level guardrails are not substitutes.** Wrapping tool output in `<untrusted_data>` tags lowers the chance the model follows an injection, but cannot make it zero. In the injection test, a poisoned support note tells the agent to read the admin's record and fetch `169.254.169.254`. The mock model emits both calls. The authorization and egress checks block both anyway, because they do not care what the model decided.

**Session binding beats input validation for BOLA.** The obvious fix is to validate the `user_id` argument. But that argument comes from the model, so it is attacker-influenced. Validating it only confirms the attacker's chosen id is well-formed. The gateway takes the identity from the verified JWT `sub` claim and blocks a mismatched id instead of silently overriding it, so the attempt is not hidden.

**SSRF defense has to resolve, not pattern-match.** Blocking the string `169.254.169.254` is easy to bypass: decimal (`2852039166`) and hex encodings, IPv4-mapped IPv6 (`[::ffff:169.254.169.254]`), userinfo tricks like `http://example.com@169.254.169.254/`, and redirects. The gateway resolves the host and rejects private, loopback, and link-local addresses, rejects IP literals outright, and never follows redirects. One gap remains and is documented in the threat model: a time-of-check to time-of-use window between DNS resolution and the tool's own connection. The next step is to pin the resolved IP for the request.

**Redaction is a backstop, not a primary control.** Pattern-based scrubbing of API keys, JWTs, and SSNs catches known shapes and will miss new ones. It earns its place for secrets an authorized user may read but that should never be echoed into a model's context.

**Determinism is what makes it testable.** Every control is plain synchronous Python with injectable dependencies, so each attack has a fast, repeatable test that never flakes on a model sampling differently. The controls add about 30-40 microseconds per call (p50) on a 2017 laptop.

The STRIDE threat model and the full test table are in the [repo](https://github.com/evwalt/mcp-guardrail-gateway).
