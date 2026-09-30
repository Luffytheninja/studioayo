import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/ui/Navigation';
import SmoothScroll from '@/components/ui/SmoothScroll';
import CustomCursor from '@/components/ui/CustomCursor';

export const metadata: Metadata = {
  metadataBase: new URL('https://studioayo.com'),
  title: 'Studio Ayo — Digital Web Design Studio · Lagos',
  description:
    'Studio Ayo is an independent digital studio designing and engineering beautiful, high-converting websites for ambitious brands. Web Design, Web Development, Editorial Illustration & 3D. Based in Lagos, working worldwide.',
  keywords: [
    'web design studio Lagos',
    'web development Nigeria',
    'digital design studio',
    'UI UX design agency',
    'Studio Ayo',
    'Next.js web design',
    'brand website design',
    'editorial illustration',
    'bespoke website design',
    'Faemous web design',
    'Hachi PWA',
  ],
  openGraph: {
    title: 'Studio Ayo — Digital Web Design Studio',
    description: 'Designing & engineering beautiful, meaningful websites for ambitious brands. Lagos · Worldwide.',
    url: 'https://studioayo.com',
    siteName: 'Studio Ayo',
    images: [
      {
        url: '/media/images/hero-main-background.png',
        width: 1200,
        height: 630,
        alt: 'Studio Ayo — Digital Web Design Studio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio Ayo — Digital Web Design Studio',
    description: 'Designing & engineering beautiful, meaningful websites for ambitious brands. Lagos · Worldwide.',
    images: ['/media/images/hero-main-background.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&family=Instrument+Serif:ital@0;1&family=Danfo&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="bg-[#070708] text-[#F4F1EA] antialiased"
        style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif" }}
      >
        <SmoothScroll>
          <CustomCursor />
          <Navigation />
          <main className="min-h-screen relative">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
