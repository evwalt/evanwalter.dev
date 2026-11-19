import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="space-y-10">
      <section className="space-y-3">
        <h1 className="text-4xl font-semibold tracking-tight">Evan Walter</h1>
        <h2 className="text-3xl font-semibold tracking-tight">
          Full-Stack Software &amp; Product Security Engineer
        </h2>
        <p className="text-muted-foreground text-lg">
          {`I build secure, production-grade AI systems, developer tools, and full-stack cloud applications. I focus on the seams where AI agents and real systems meet the things that break them: access control, untrusted input, and secrets.`}
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Projects</h2>
        <div className="rounded-lg border p-5">
          <div className="flex items-center gap-2">
            <h3 className="font-medium">MCP Guardrail Gateway</h3>
            <span className="text-muted-foreground rounded-full border px-2 py-0.5 text-xs">
              Open source
            </span>
          </div>
          <p className="text-muted-foreground mt-2 text-sm">
            {`A deterministic security layer that wraps an LLM agent's tool calls: JWT session binding against cross-tenant access, SSRF defense, and secret/PII redaction, with a red-team suite mapped to the OWASP Top 10 for LLMs and SAST/SCA/secret-scanning CI.`}
          </p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <a
              href="https://github.com/evwalt/mcp-guardrail-gateway"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline"
            >
              github.com/evwalt/mcp-guardrail-gateway
            </a>
            <Link href="/writing/mcp-guardrail-gateway-findings" className="text-primary underline">
              Read the write-up
            </Link>
          </div>
        </div>
        <div className="rounded-lg border p-5">
          <div className="flex items-center gap-2">
            <h3 className="font-medium">RLS Guard</h3>
            <span className="text-muted-foreground rounded-full border px-2 py-0.5 text-xs">
              Active
            </span>
          </div>
          <p className="text-muted-foreground mt-2 text-sm">
            {`A developer security tool that audits Supabase/Postgres databases for broken access control (missing or misconfigured Row-Level Security) and generates ready-to-run remediation SQL, with detection running entirely client-side.`}
          </p>
          <a
            href="https://rls-guard.evanwalter.dev"
            target="_blank"
            rel="noreferrer"
            className="text-primary mt-3 inline-block text-sm underline"
          >
            rls-guard.evanwalter.dev
          </a>
        </div>
        <div className="rounded-lg border p-5">
          <div className="flex items-center gap-2">
            <h3 className="font-medium">GenaWatt</h3>
            <span className="text-muted-foreground rounded-full border px-2 py-0.5 text-xs">
              Client project
            </span>
          </div>
          <p className="text-muted-foreground mt-2 text-sm">
            {`A client-commissioned web app that lets California electricity customers upload an SDG&E bill, see if they're overpaying, and pay to be moved to a better rate plan. OAuth-scoped SharePoint uploads, server-side Stripe pricing, and a signature-verified payment webhook.`}
          </p>
          <a
            href="https://genawatt.com"
            target="_blank"
            rel="noreferrer"
            className="text-primary mt-3 inline-block text-sm underline"
          >
            genawatt.com
          </a>
        </div>
      </section>

      {/* <section className="grid gap-4 sm:grid-cols-3"> */}
      {/*   <Link */}
      {/*     href="/projects" */}
      {/*     className="hover:bg-muted/40 hover:border-primary/90 group rounded-lg border p-4 transition-colors" */}
      {/*   > */}
      {/*     <div className="group-hover:text-primary font-medium">Projects</div> */}
      {/*     <div className="text-muted-foreground text-sm">Selected work and case studies.</div> */}
      {/*   </Link> */}
      {/**/}
      {/*   <Link */}
      {/*     href="/writing" */}
      {/*     className="group hover:bg-muted/40 hover:border-primary/90 rounded-lg border p-4 transition-colors" */}
      {/*   > */}
      {/*     <div className="group-hover:text-primary font-medium">Writing</div> */}
      {/*     <div className="text-muted-foreground text-sm"> */}
      {/*       Notes on building, learning, and decisions. */}
      {/*     </div> */}
      {/*   </Link> */}
      {/**/}
      {/*   <Link */}
      {/*     href="/about" */}
      {/*     className="group hover:bg-muted/40 hover:border-primary/90 rounded-lg border p-4 transition-colors" */}
      {/*   > */}
      {/*     <div className="group-hover:text-primary font-medium">About</div> */}
      {/*     <div className="text-muted-foreground text-sm"> */}
      {/*       Background, values, and what I’m optimizing for. */}
      {/*     </div> */}
      {/*   </Link> */}
      {/* </section> */}
    </main>
  );
}
