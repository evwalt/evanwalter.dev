import Link from 'next/link';
import { Container } from '@/components/container';
import { ModeToggle } from '@/components/mode-toggle';

const nav = [
  { href: '/projects', label: 'Projects' },
  { href: '/writing', label: 'Writing' },
  { href: '/about', label: 'About' },
];

export function SiteHeader() {
  return (
    <header className="border-b">
      <Container className="flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          Evan Walter
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <ModeToggle />
      </Container>
    </header>
  );
}
