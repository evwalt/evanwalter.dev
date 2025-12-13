import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight">Not found</h1>
      <Link className="underline" href="/">
        Go home
      </Link>
    </main>
  );
}
