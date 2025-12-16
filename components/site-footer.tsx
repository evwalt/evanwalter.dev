import Link from 'next/link';
import { Container } from '@/components/container';

export function SiteFooter() {
  return (
    <footer className="border-t">
      <Container className="flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Evan Walter</p>

        <div className="flex items-center gap-4 text-sm">
          <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
            Home
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
            href="https://www.linkedin.com/in/-evanwalter"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </Container>
    </footer>
  );
}
