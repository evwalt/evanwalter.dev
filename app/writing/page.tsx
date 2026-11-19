import Link from 'next/link';
import { getListedPosts } from '@/lib/writing';

export default function WritingPage() {
  const posts = getListedPosts();

  return (
    <main className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Writing</h1>
        <p className="text-muted-foreground">Notes on security, AI systems, and shipping.</p>
      </header>

      <ul className="space-y-6">
        {posts.map((p) => (
          <li key={p.slug} className="rounded-lg border p-5">
            <Link
              className="hover:text-primary font-medium underline underline-offset-4"
              href={`/writing/${p.slug}`}
            >
              {p.title}
            </Link>
            <p className="text-muted-foreground mt-2 text-sm">{p.description}</p>
            <p className="text-muted-foreground mt-2 text-xs">{p.date}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
