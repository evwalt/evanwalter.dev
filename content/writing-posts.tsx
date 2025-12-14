import type { ReactNode } from 'react';

export type WritingPost = {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  body: ReactNode;
};

export const writingPosts: WritingPost[] = [
  {
    slug: 'how-i-think-about-building-software',
    title: 'How I think about building software',
    description:
      'Ambiguity → constraints → tradeoffs. A practical mental model for real-world engineering.',
    date: '2025-12-13',
    body: (
      <div className="space-y-4">
        <p>
          Most real-world software problems don’t start with clear requirements. They start with
          ambiguity: partial context, competing priorities, and uncertainty about what “good”
          actually means.
        </p>

        <p>
          Over time, I’ve learned that my job as an engineer isn’t to eliminate ambiguity—it’s to
          <strong> turn ambiguity into something the team can act on</strong>.
        </p>

        <p className="font-medium">The loop I come back to looks like this:</p>

        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>Ambiguity →</strong> clarify goals, risks, and what failure would look like
          </li>
          <li>
            <strong>Constraints →</strong> time, reliability, performance, security, people, tools
          </li>
          <li>
            <strong>Tradeoffs →</strong> choose what to optimize for—and name what you’re not
          </li>
        </ul>

        <p>
          Good engineering decisions don’t come from chasing ideal systems. They come from making
          the <em>right</em> decision given the constraints, then documenting and owning the
          tradeoffs.
        </p>

        <p>
          I’m skeptical of “best practices” in isolation. Practices only matter inside context. What
          I care about are decisions that produce durable outcomes: systems that are understandable,
          operable, and easy to evolve when requirements change.
        </p>

        <p>
          When software stays clear under change, teams move faster—and trust compounds over time.
        </p>
      </div>
    ),
  },
  {
    slug: 'why-clarity-beats-cleverness',
    title: 'Why clarity beats cleverness',
    description: 'Durable systems come from boring, intentional decisions—not clever abstractions.',
    date: '2025-12-13',
    body: (
      <div className="space-y-4">
        <p>
          Clever abstractions can feel satisfying in the moment. They often reduce code in the short
          term and make an engineer feel productive.
        </p>

        <p>
          The cost shows up later: onboarding, debugging, and making changes under pressure. Most of
          a codebase’s life is spent being read, modified, and operated—not initially written.
        </p>

        <p>
          Because of that, I optimize for <strong>clarity first</strong>, even when it means writing
          a little more code or deferring abstraction.
        </p>

        <p className="font-medium">In practice, clarity looks like:</p>

        <ul className="list-disc space-y-1 pl-5">
          <li>Intent-first naming and straightforward data flow</li>
          <li>State living where it’s actually used</li>
          <li>File and component structure that matches how the product is described</li>
        </ul>

        <p>When I’m unsure whether something is “too simple,” I ask one question:</p>

        <p className="italic">
          “If someone joined this team tomorrow, what would confuse them first?”
        </p>

        <p>
          That question almost always reveals where complexity is hiding unnecessarily. Reducing
          that confusion is one of the highest-leverage improvements an engineer can make.
        </p>

        <p>
          Clear systems scale teams, not just features. That’s why clarity beats cleverness in the
          long run.
        </p>
      </div>
    ),
  },
  {
    slug: 'what-im-optimizing-for',
    title: 'What I’m optimizing for as a software engineer',
    description:
      'Craft, usability, ownership, and long-term thinking—and the teams I work best with.',
    date: '2025-12-13',
    body: (
      <div className="space-y-4">
        <p>
          I’m most energized by work that sits at the intersection of product and engineering:
          building things people actually use, with systems teams can maintain and trust.
        </p>

        <p className="font-medium">What I actively optimize for:</p>

        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>Craft:</strong> readable code, good structure, and healthy defaults
          </li>
          <li>
            <strong>Usability:</strong> clear UX, strong affordances, and fewer sharp edges
          </li>
          <li>
            <strong>Ownership:</strong> reliability, operability, and low support burden
          </li>
          <li>
            <strong>Long-term thinking:</strong> making future changes cheaper, not harder
          </li>
        </ul>

        <p>
          I value teams that make tradeoffs explicit, care about clarity, and treat engineering as a
          discipline of judgment—not just output.
        </p>

        <p>
          I work best in environments where engineers are trusted to think, where feedback loops are
          short, and where quality and delivery are treated as complementary rather than opposing
          forces.
        </p>

        <p>When those conditions are present, good software—and healthy teams—tend to follow.</p>
      </div>
    ),
  },
];

export function getWritingPost(slug: string) {
  return writingPosts.find((p) => p.slug === slug);
}
