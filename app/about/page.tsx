export default function AboutPage() {
  return (
    <main className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-primary text-3xl font-semibold tracking-tight">About</h1>
        <p className="text-muted-foreground">Context that doesn’t belong in a case study.</p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Background</h2>
        <p>
          {`I’m a software engineer with a frontend focus, working across React, TypeScript, and modern web tooling, with experience spanning full-stack development and internal product work.`}
        </p>
        <p>
          {`Much of my work has been on internal tools and early-stage systems—places where requirements are fuzzy, constraints matter, and design decisions need to hold up under change.`}
        </p>
        <p>
          {`I’m most interested in work that sits at the intersection of engineering and product: building software that’s useful, understandable, and maintainable over time.`}
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">How I like to work</h2>
        <p>
          {`I value clarity over cleverness. I try to make decisions explicit, surface tradeoffs early, and leave systems easier to understand than I found them.`}
        </p>
        <p>
          {`I work best in collaborative environments where engineers have ownership and are trusted to make judgment calls, not just execute tickets.`}
        </p>
        <p>
          {`When things go wrong, I’m biased toward understanding the system and improving it—not assigning blame.`}
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">What I care about</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Quality:</strong> code that’s readable, testable, and durable
          </li>
          <li>
            <strong>Usability:</strong> interfaces that reduce cognitive load and explain themselves
          </li>
          <li>
            <strong>Integrity:</strong> honest communication about risks and tradeoffs
          </li>
          <li>
            <strong>Learning:</strong> improving systems and skills over time, not chasing novelty
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium">What I’m drawn to</h2>
        <p>
          {`I’m most engaged by teams that care about maintainability, product clarity, and long-term outcomes.`}
        </p>
        <p>
          {`I do my best work in environments with real constraints, open discussion of tradeoffs, and shared ownership of systems.`}
        </p>
      </section>
    </main>
  );
}
