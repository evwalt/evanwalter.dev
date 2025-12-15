import type { Metadata } from 'next';
import { Geist_Mono, Noto_Sans } from 'next/font/google';
import './globals.css';

import { ThemeProvider } from '@/components/theme-provider';
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistMono.variable} ${notoSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-dvh flex-col">
            <SiteHeader />

            <main className="flex-1 py-10">
              <Container>{children}</Container>
            </main>

            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
