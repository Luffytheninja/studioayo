'use client';

import { useState } from 'react';
import Loader from '@/components/ui/Loader';
import Hero2D5Canvas from '@/components/hero/Hero2D5Canvas';
import HeroOverlay from '@/components/hero/HeroOverlay';

export default function Home() {
  const [loadingFinished, setLoadingFinished] = useState(false);

  return (
    <>
      {/* ── Initial Exhibition Loader ── */}
      <Loader onComplete={() => setLoadingFinished(true)} />

      {/* ── Hero Viewport: full-screen 2.5D scene ── */}
      <section
        className="relative w-full h-screen overflow-hidden bg-[#070708]"
        aria-label="Studio Ayo Hero"
      >
        {/* R3F 2.5D layered scene */}
        <Hero2D5Canvas />
        {/* Overlay: logo, tagline, pill nav, footer bar */}
        <HeroOverlay />
      </section>
    </>
  );
}
