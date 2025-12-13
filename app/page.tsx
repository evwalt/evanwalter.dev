import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Evan Walter</h1>
      <p className="text-muted-foreground">
        {`Frontend-focused full-stack engineer. I build clear, durable UI with strong UX taste and pragmatic engineering.`}
      </p>

      <nav className="flex gap-4">
        <Link className="underline" href="/projects">
          Projects
        </Link>
        <Link className="underline" href="/writing">
          Writing
        </Link>
        <Link className="underline" href="/about">
          About
        </Link>
      </nav>
    </main>
  );
}
