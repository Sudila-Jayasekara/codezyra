import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'Codezyra | Innovative Software Solutions',
    template: '%s | Codezyra',
  },
  description: 'Codezyra specializes in research and creating innovative software solutions to real-world problems.',
  keywords: ['software solutions', 'software development', 'research', 'innovation', 'technology'],
  creator: 'Codezyra',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://codezyra.com',
    title: 'Codezyra | Innovative Software Solutions',
    description: 'Codezyra specializes in research and creating innovative software solutions to real-world problems.',
    siteName: 'Codezyra',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Codezyra | Innovative Software Solutions',
    description: 'Codezyra specializes in research and creating innovative software solutions to real-world problems.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}