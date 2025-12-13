import Link from 'next/link';

const projects = [
  {
    slug: 'taskfusionlite',
    title: 'TaskFusionLite',
    blurb: 'Electron app UX with Vim-style workflows.',
  },
  {
    slug: 'rag-desktop',
    title: 'On-device RAG Desktop UI',
    blurb: 'Search + citations UI for internal LLM workflows.',
  },
];

export default function ProjectsPage() {
  return (
    <main className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>

      <ul className="space-y-3">
        {projects.map((p) => (
          <li key={p.slug} className="space-y-1">
            <Link className="underline" href={`/projects/${p.slug}`}>
              {p.title}
            </Link>
            <p className="text-muted-foreground text-sm">{p.blurb}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
