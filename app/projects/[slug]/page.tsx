import { notFound } from 'next/navigation';

const projects = [
  {
    slug: 'internal-ai-tool',
    title: 'Internal AI Desktop Tool',
    summary:
      'An internal prototype exploring on-device retrieval, human-in-the-loop workflows, and pragmatic UX for knowledge work.',

    problem:
      'Internal teams needed a way to query and reason over private documents without sending data to external AI services, while still keeping the interface usable for non-technical users.',

    constraints: [
      'Data could not leave the local machine or approved internal environments',
      'UX had to be simple enough for non-technical stakeholders',
      'Unclear and evolving product requirements',
      'Limited time to validate usefulness before wider rollout',
    ],

    approach:
      'I designed and implemented a desktop UI that paired a local retrieval pipeline with a focused, minimal interface. I worked closely with backend and data science teammates to shape the UX around real usage patterns, iterating quickly based on feedback rather than over-engineering upfront.',

    outcome:
      'The prototype was successfully piloted internally and demonstrated that on-device retrieval could support real workflows. Stakeholders were able to test concrete use cases, which helped clarify both the value and the limitations of the approach.',

    improvements:
      'With more time, I would invest in better document ingestion tooling, clearer affordances around model limitations, and more robust evaluation metrics to guide future iterations.',
  },

  {
    slug: 'portfolio-site',
    title: 'Personal Portfolio (This Site)',
    summary:
      'A deliberately simple Next.js portfolio focused on clarity, iteration, and long-term ownership.',

    problem:
      'I wanted a personal site that clearly represented how I think and work, without the overhead or performative polish of most developer portfolios.',

    constraints: [
      'Limited time alongside job search and other commitments',
      'Desire to avoid over-designing or premature abstraction',
      'Content needed to evolve over time without rewrites',
    ],

    approach:
      'I used Next.js App Router with a minimal component set and clear content structure. I prioritized readable code, explicit routing, and honest copy over visual complexity, treating the site as a living project rather than a static artifact.',

    outcome:
      'The result is a clean, flexible foundation that I can iterate on gradually. It already supports case studies, writing, and future expansion without needing structural changes.',

    improvements:
      'I plan to deepen individual project write-ups, add writing over time, and potentially introduce light visual enhancements once the content matures.',
  },

  {
    slug: 'experimental-wip',
    title: 'Experimental Side Project (WIP)',
    summary:
      'A placeholder for prototypes and learning projects that aren’t ready for a full case study yet.',

    problem:
      'I often explore ideas that are useful learning experiences but don’t immediately warrant a polished case study or public release.',

    constraints: [
      'Incomplete or rapidly changing ideas',
      'Limited validation or real-world usage',
      'Not all experiments are meant to ship',
    ],

    approach:
      'I treat this as a sandbox for experimentation—building small prototypes, testing assumptions, and learning new tools or techniques without pressure to over-polish.',

    outcome:
      'Some experiments inform larger projects, while others simply sharpen my thinking or technical range.',

    improvements:
      'Over time, successful experiments may graduate into full projects with dedicated case studies.',
  },
] as const;

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <main className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">{project.title}</h1>
        <p className="text-muted-foreground">{project.summary}</p>
      </header>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Problem</h2>
        <p className="text-muted-foreground">{project.problem}</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Constraints</h2>
        <ul className="text-muted-foreground list-disc pl-5">
          {project.constraints.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Approach</h2>
        <p className="text-muted-foreground">{project.approach}</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Outcome</h2>
        <p className="text-muted-foreground">{project.outcome}</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">What I’d improve</h2>
        <p className="text-muted-foreground">{project.improvements}</p>
      </section>
    </main>
  );
}
