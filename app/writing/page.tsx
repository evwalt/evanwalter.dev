import Link from 'next/link';

const posts = [
  {
    slug: 'hydration-mismatches',
    title: 'Hydration mismatches in Next.js: what actually happened',
  },
];

export default function WritingPage() {
  return (
    <main className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Writing</h1>
      <p className="text-muted-foreground">
        Notes on frontend engineering, product decisions, and shipping.
      </p>

      <ul className="space-y-3">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link className="underline" href={`/writing/${p.slug}`}>
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
