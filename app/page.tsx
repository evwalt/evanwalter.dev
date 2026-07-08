import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="space-y-10">
      <section className="space-y-3">
        <h1 className="text-4xl font-semibold tracking-tight">Evan Walter</h1>
        <h2 className="text-3xl font-semibold tracking-tight">
          Software Engineer, Independent Builder
        </h2>
        <p className="text-muted-foreground text-lg">
          {`I’m an independent software developer building AI-powered applications, developer tools, and SaaS products. I also bring several years of production engineering experience across React, TypeScript, and full-stack systems—and I’m open to full-time software engineering roles where that depth would be valuable.`}
        </p>
      </section>

      {/* <section className="space-y-4"> */}
      {/*   <h2 className="text-xl font-semibold">Current Projects</h2> */}
      {/*   <div className="rounded-lg border p-5"> */}
      {/*     <div className="flex items-start justify-between gap-6"> */}
      {/*       <div className="space-y-2"> */}
      {/*         <div className="flex items-center gap-2"> */}
      {/*           <h3 className="font-medium">RLS Guard</h3> */}
      {/*           <span className="text-muted-foreground rounded-full border px-2 py-0.5 text-xs"> */}
      {/*             Active */}
      {/*           </span> */}
      {/*         </div> */}
      {/*         <p className="text-muted-foreground text-sm"> */}
      {/*           {`A developer tool for managing and auditing Postgres Row-Level Security policies, built to make RLS easier to reason about and safer to ship. Currently in active development.`} */}
      {/*         </p> */}
      {/*       </div> */}
      {/*     </div> */}
      {/*   </div> */}
      {/* </section> */}
      {/**/}
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
