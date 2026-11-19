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
        <Link
          href="/"
          className="hover:text-primary font-semibold tracking-tight whitespace-nowrap"
        >
          Evan Walter
        </Link>

        <div className="flex items-center gap-3 sm:gap-5">
          <div className="flex items-center gap-3 text-sm sm:gap-4">
            <Link
              href="/"
              className="text-muted-foreground hover:text-primary hidden transition-colors sm:inline"
            >
              Home
            </Link>
            <Link
              href="/writing"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Writing
            </Link>
            <a
              href="https://github.com/evwalt"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/evanwalterdev"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          </div>
          {/* <nav className="flex items-center gap-4 text-sm"> */}
          {/*   {nav.map((item) => ( */}
          {/*     <Link */}
          {/*       key={item.href} */}
          {/*       href={item.href} */}
          {/*       className="text-muted-foreground hover:text-primary transition-colors" */}
          {/*     > */}
          {/*       {item.label} */}
          {/*     </Link> */}
          {/*   ))} */}
          {/* </nav> */}
          <ModeToggle />
        </div>
      </Container>
    </header>
  );
}
