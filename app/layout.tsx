import type { Metadata } from 'next';
import { Geist_Mono, Noto_Sans } from 'next/font/google';
import './globals.css';

import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Container } from '@/components/container';

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const notoSans = Noto_Sans({
  variable: '--font-noto-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Evan Walter',
  description: 'Frontend Software Engineer | AI-Driven Web Apps',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistMono.variable} ${notoSans.variable} antialiased`}
      >
        <div className="flex min-h-dvh flex-col">
          <SiteHeader />

          <main className="flex-1 py-10">
            <Container>{children}</Container>
          </main>

          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
