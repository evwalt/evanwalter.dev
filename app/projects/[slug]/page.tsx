import { notFound } from 'next/navigation';

const projects = [
  { slug: 'taskfusionlite', title: 'TaskFusionLite' },
  { slug: 'rag-desktop', title: 'On-device RAG Desktop UI' },
] as const;

type Params = { slug: string };

export default function ProjectDetailPage({ params }: { params: Params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <main className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">{project.title}</h1>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Problem</h2>
        <p className="text-muted-foreground">(1–3 sentences.)</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Approach</h2>
        <p className="text-muted-foreground">(Tradeoffs + what you built.)</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Result</h2>
        <p className="text-muted-foreground">(Impact + learnings.)</p>
      </section>
    </main>
  );
}
