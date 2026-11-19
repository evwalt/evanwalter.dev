import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPost } from '@/lib/writing';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    robots: post.unlisted ? { index: false } : undefined,
  };
}

export default async function WritingPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const post = getPost(slug);
  if (!post) return notFound();

  return (
    <main className="space-y-8">
      <div className="space-y-2">
        <Link
          href="/writing"
          className="hover:text-primary text-muted-foreground mb-3 inline-block text-sm underline underline-offset-4"
        >
          ← Writing
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight">{post.title}</h1>
        <p className="text-muted-foreground text-sm">{post.date}</p>
      </div>

      {/* Trusted content: Markdown files committed to this repo. */}
      <article
        className="prose prose-neutral dark:prose-invert prose-code:before:content-none prose-code:after:content-none max-w-none"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </main>
  );
}
