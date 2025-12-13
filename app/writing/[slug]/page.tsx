import { notFound } from 'next/navigation';

const posts = [{ slug: 'hydration-mismatches', title: 'Hydration mismatches in Next.js' }] as const;

type Params = { slug: string };

export default function PostPage({ params }: { params: Params }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight">{post.title}</h1>
      <p className="text-muted-foreground">(Draft content goes here. Move to MDX later.)</p>
    </main>
  );
}
