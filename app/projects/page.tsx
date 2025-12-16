import Link from 'next/link';

const projects = [
  {
    slug: 'internal-ai-tool',
    title: 'Internal AI Desktop Tool',
    blurb: 'Early-stage internal product focused on RAG, UX, and constrained environments.',
  },
  {
    slug: 'portfolio-site',
    title: 'Personal Portfolio (This Site)',
    blurb:
      'A deliberately simple Next.js site focused on clarity, iteration, and long-term ownership.',
  },
  {
    slug: 'experimental-wip',
    title: 'Experimental Side Project (WIP)',
    blurb: 'A space for exploration—learning, prototypes, and ideas still forming.',
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-primary text-3xl font-semibold tracking-tight">Projects</h1>
        <p className="text-muted-foreground">
          A small selection of work that reflects how I think about problems, constraints, and
          tradeoffs.
        </p>
      </header>

      <ul className="space-y-6">
        {projects.map((p) => (
          <li key={p.slug} className="rounded-lg border p-5">
            <Link href={`/projects/${p.slug}`} className="hover:text-primary font-medium underline">
              {p.title}
            </Link>
            <p className="text-muted-foreground mt-2 text-sm">{p.blurb}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
