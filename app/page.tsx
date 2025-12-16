import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="space-y-10">
      <section className="space-y-3">
        <h1 className="text-primary text-3xl font-semibold tracking-tight">Hey, I’m Evan.</h1>
        <p className="text-muted-foreground text-lg">
          {`I’m a software engineer who enjoys turning ambiguous problems into clear, well-structured solutions—balancing product thinking with technical depth.`}
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <Link
          href="/projects"
          className="hover:bg-muted/40 hover:border-primary/90 group rounded-lg border p-4 transition-colors"
        >
          <div className="group-hover:text-primary font-medium">Projects</div>
          <div className="text-muted-foreground text-sm">Selected work and case studies.</div>
        </Link>

        <Link
          href="/writing"
          className="group hover:bg-muted/40 hover:border-primary/90 rounded-lg border p-4 transition-colors"
        >
          <div className="group-hover:text-primary font-medium">Writing</div>
          <div className="text-muted-foreground text-sm">
            Notes on building, learning, and decisions.
          </div>
        </Link>

        <Link
          href="/about"
          className="group hover:bg-muted/40 hover:border-primary/90 rounded-lg border p-4 transition-colors"
        >
          <div className="group-hover:text-primary font-medium">About</div>
          <div className="text-muted-foreground text-sm">
            Background, values, and what I’m optimizing for.
          </div>
        </Link>
      </section>

      <section className="rounded-lg border p-5">
        <div className="flex items-start justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Featured project</h2>
            <p className="text-muted-foreground">
              An internal AI desktop tool exploring on-device retrieval, human-in-the-loop
              workflows, and pragmatic UX for knowledge work.
            </p>
          </div>

          <Link href="/projects/internal-ai-tool" className="hover:text-primary shrink-0 underline">
            View →
          </Link>
        </div>
      </section>
    </main>
  );
}
