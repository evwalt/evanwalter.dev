import Link from 'next/link';
import { notFound } from 'next/navigation';
import { writingPosts } from '@/content/writing-posts';

export default async function WritingPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const post = writingPosts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <main className="space-y-8">
      <div className="space-y-2">
        <Link className="mb-2 inline-block text-sm underline underline-offset-4" href="/writing">
          ← Writing
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight">{post.title}</h1>
        <p className="text-muted-foreground text-sm">{post.date}</p>
      </div>

      <article className="prose prose-neutral dark:prose-invert max-w-none">{post.body}</article>
    </main>
  );
}
