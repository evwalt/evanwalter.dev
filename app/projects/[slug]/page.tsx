import { notFound } from 'next/navigation';

const projects = [
  {
    slug: 'internal-ai-tool',
    title: 'Internal AI Desktop Tool',
    summary:
      'An internal prototype exploring on-device retrieval, human-in-the-loop workflows, and pragmatic UX for knowledge work.',
  },
  {
    slug: 'portfolio-site',
    title: 'Personal Portfolio (This Site)',
    summary: 'A minimal Next.js portfolio focused on clarity, iteration, and long-term ownership.',
  },
  {
    slug: 'experimental-wip',
    title: 'Experimental Side Project (WIP)',
    summary:
      'A placeholder for prototypes and learning projects that aren’t ready for a full case study yet.',
  },
] as const;

type Params = { slug: string };

export default function ProjectDetailPage({ params }: { params: Params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <main className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">{project.title}</h1>
        <p className="text-muted-foreground">{project.summary}</p>
      </header>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Problem</h2>
        <p className="text-muted-foreground">(1–3 sentences.)</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Constraints</h2>
        <ul className="text-muted-foreground list-disc pl-5">
          <li>(Time / scope / technical constraints.)</li>
          <li>(Any notable tradeoffs.)</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Approach</h2>
        <p className="text-muted-foreground">(Tradeoffs + what you built.)</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Outcome</h2>
        <p className="text-muted-foreground">(What shipped + learnings.)</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">What I’d improve</h2>
        <p className="text-muted-foreground">(What you’d change with hindsight.)</p>
      </section>
    </main>
  );
}
