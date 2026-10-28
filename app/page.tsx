import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="space-y-10">
      <section className="space-y-3">
        <h1 className="text-4xl font-semibold tracking-tight">Evan Walter</h1>
        <h2 className="text-3xl font-semibold tracking-tight">
          Independent Builder, Software Engineer
        </h2>
        <p className="text-muted-foreground text-lg">
          {`I build software products, currently shipping developer tools and AI-powered applications as an independent maker. Previously, I built production software for enterprise customers as a software engineer.`}
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Projects</h2>
        <div className="rounded-lg border p-5">
          <div className="flex items-center gap-2">
            <h3 className="font-medium">Ambler</h3>
            <span className="text-muted-foreground rounded-full border px-2 py-0.5 text-xs">
              Active
            </span>
          </div>
          <p className="text-muted-foreground mt-2 text-sm">
            {`A walking app in the works that plans a loop from where you are, for however long you want to walk, past the quiet streets, parks and small sights nearby.`}
          </p>
          <a
            href="https://ambler.website"
            target="_blank"
            rel="noreferrer"
            className="text-primary mt-3 inline-block text-sm underline"
          >
            ambler.website
          </a>
        </div>
        <div className="rounded-lg border p-5">
          <div className="flex items-center gap-2">
            <h3 className="font-medium">GenaWatt</h3>
            <span className="text-muted-foreground rounded-full border px-2 py-0.5 text-xs">
              Active
            </span>
          </div>
          <p className="text-muted-foreground mt-2 text-sm">
            {`A client-commissioned web app that lets California electricity customers upload an SDG&E bill, see if they're overpaying, and pay to be moved to a better rate plan.`}
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
        <div className="rounded-lg border p-5">
          <div className="flex items-center gap-2">
            <h3 className="font-medium">RLS Guard</h3>
            <span className="text-muted-foreground rounded-full border px-2 py-0.5 text-xs">
              Active
            </span>
          </div>
          <p className="text-muted-foreground mt-2 text-sm">
            {`A developer tool that scans Postgres databases for Row-Level Security gaps and generates ready-to-run remediation SQL.`}
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
            <h3 className="font-medium">Family Follow-Through</h3>
            <span className="text-muted-foreground rounded-full border px-2 py-0.5 text-xs">
              Active
            </span>
          </div>
          <p className="text-muted-foreground mt-2 text-sm">
            {`A personally delivered 14-day pilot that helps an independently living parent follow through on walks they already want to take.`}
          </p>
          <a
            href="https://followthrough.evanwalter.dev"
            target="_blank"
            rel="noreferrer"
            className="text-primary mt-3 inline-block text-sm underline"
          >
            followthrough.evanwalter.dev
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
