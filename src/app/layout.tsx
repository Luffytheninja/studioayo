import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/ui/Navigation';
import SmoothScroll from '@/components/ui/SmoothScroll';
import CustomCursor from '@/components/ui/CustomCursor';

export const metadata: Metadata = {
  title: 'Studio Ayo — Multidisciplinary Digital Design Studio',
  description:
    'Designing products, brands & digital experiences that people remember. Boutique multidisciplinary digital design studio based in Lagos.',
  keywords: ['design studio', 'branding', 'web design', 'UI UX', 'digital experience', 'Studio Ayo'],
  openGraph: {
    title: 'Studio Ayo — Multidisciplinary Digital Design Studio',
    description: 'Designing products, brands & digital experiences that people remember.',
    url: 'https://studioayo.com',
    siteName: 'Studio Ayo',
    images: [
      {
        url: '/media/images/hero-main-background.png',
        width: 1200,
        height: 630,
        alt: 'Studio Ayo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio Ayo',
    description: 'Designing products, brands & digital experiences that people remember.',
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
