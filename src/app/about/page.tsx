'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Footer from '@/components/ui/Footer';
import { STUDIO_INFO } from '@/content/studio';
import { ArrowRight } from 'lucide-react';

// Core capabilities we highlight without full team roster
const CAPABILITIES = [
  {
    label: 'Web Design & Art Direction',
    desc: 'Editorial UI/UX, typography systems, interactive Figma prototypes, and mobile-first conversion design.',
    accent: '#FF4D4D',
  },
  {
    label: 'Web Development & Engineering',
    desc: 'Next.js 15, TypeScript, Tailwind CSS v4, Framer Motion, Lenis — production-grade code at every layer.',
    accent: '#25D366',
  },
  {
    label: 'Bespoke Editorial Illustration',
    desc: 'Original digital painting, editorial hero artworks, character design, and custom iconography systems.',
    accent: '#EC7320',
  },
  {
    label: 'Occasional 3D Design & Motion',
    desc: 'Blender CGI, tactile material simulation, WebGL product showcases, and interactive Three.js scenes.',
    accent: '#3897F0',
  },
  {
    label: 'Proprietary Digital Products',
    desc: 'We incubate our own software. Hachi — our shared grocery coordination PWA — is proof of our full-stack product capability.',
    accent: '#B264F4',
  },
];

function renderBrandLogo(client: string) {
  if (client.includes('Ountodun')) {
    return (
      <div className="text-center font-sans">
        <div className="font-extrabold tracking-[0.25em] text-xs text-[#1C120C]">OUNTODUN</div>
        <div className="font-editorial italic text-xs text-[#1C120C]/60 mt-0.5">concept store</div>
      </div>
    );
  }
  if (client.includes('FAËM') || client.includes('Faem')) {
    return (
      <div className="text-center font-serif">
        <div className="font-editorial italic text-3xl text-[#1C120C] tracking-wide leading-none">FĀËM</div>
        <div className="font-sans font-light tracking-[0.3em] text-[9px] uppercase text-[#1C120C]/50 mt-1">DUO / UNIVERSE</div>
      </div>
    );
  }
  if (client.includes('Century')) {
    return (
      <div className="text-center font-mono">
        <div className="font-light tracking-[0.1em] text-xs uppercase text-[#1C120C]">A CENTURY FLAME</div>
      </div>
    );
  }
  if (client.includes('Hachi')) {
    return (
      <div className="text-center font-sans">
        <div className="font-black tracking-tight text-xl uppercase text-[#1C120C]">HACHI</div>
        <div className="font-sans font-light tracking-[0.2em] text-[9px] uppercase text-[#1C120C]/60">GROCERY PWA</div>
      </div>
    );
  }
  if (client.includes('American Spirit')) {
    return (
      <div className="text-center font-serif">
        <div className="font-editorial italic text-2xl text-[#1C120C] leading-none">Natural</div>
        <div className="font-sans font-bold tracking-[0.15em] text-[9px] uppercase text-[#1C120C]/80 mt-0.5">AMERICAN SPIRIT</div>
      </div>
    );
  }
  return (
    <div className="text-center text-xs font-mono uppercase tracking-widest text-[#1C120C]">{client}</div>
  );
}

export default function AboutPage() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  const duplicatedClients = [
    ...STUDIO_INFO.trustedClients,
    ...STUDIO_INFO.trustedClients,
    ...STUDIO_INFO.trustedClients,
  ];

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div className="pt-28 sm:pt-32 pb-16 px-6 md:px-12 bg-[#F5EAD8] text-[#1C120C] min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* ── Page Header ── */}
        <div className="mb-20 sm:mb-28">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FF4D4D] block mb-4">
            Studio Ayo — Est. 2024
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-7xl md:text-9xl font-normal tracking-tight mb-10 leading-tight"
          >
            About the Studio
          </motion.h1>

          {/* Studio Manifesto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base sm:text-lg font-light leading-relaxed opacity-90 max-w-5xl"
          >
            {STUDIO_INFO.aboutText.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </motion.div>
        </div>

        {/* ── Core Capabilities ── */}
        <section className="mb-28 sm:mb-36">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-[#1C120C]/15">
            <h2 className="text-4xl sm:text-6xl font-normal tracking-tight">What We Do</h2>
            <p className="text-sm text-[#1C120C]/65 font-light max-w-xs leading-relaxed">
              Focused strengths. No agency bloat. Just the disciplines we excel at.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAPABILITIES.map((cap, idx) => (
              <motion.div
                key={cap.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.07 }}
                className="p-7 bg-white border border-[#1C120C]/10 shadow-[4px_4px_0_rgba(28,18,12,0.06)] hover:shadow-[8px_8px_0_rgba(28,18,12,0.1)] transition-shadow"
              >
                <div
                  className="w-2 h-2 rounded-full mb-5"
                  style={{ background: cap.accent }}
                />
                <h3 className="text-lg font-medium text-[#1C120C] mb-3 leading-tight">{cap.label}</h3>
                <p className="text-sm text-[#1C120C]/70 font-light leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Trusted By Section ── */}
        <section className="py-16 border-t border-[#1C120C]/15 mb-20 overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight">Trusted By</h2>
            <span className="text-xs font-mono text-[#1C120C]/50 uppercase tracking-widest">
              Selected Clients & Partners
            </span>
          </div>

          <div className="relative w-full">
            <motion.div
              ref={carouselRef}
              className="cursor-grab active:cursor-grabbing overflow-hidden w-full"
            >
              <motion.div
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                className="flex gap-6 py-4 px-2 select-none w-max"
              >
                {duplicatedClients.map((client, idx) => (
                  <motion.div
                    key={`${client}-${idx}`}
                    className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-white border border-[#1C120C]/10 flex items-center justify-center p-4 shadow-[4px_4px_16px_rgba(28,18,12,0.06)] flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    {renderBrandLogo(client)}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── Studio Ethos / Quick Stats ── */}
        <section className="mb-28 grid grid-cols-2 sm:grid-cols-4 gap-6 py-16 border-t border-[#1C120C]/15">
          <div className="flex flex-col gap-1">
            <span className="text-4xl sm:text-5xl font-light text-[#1C120C]">2024</span>
            <span className="text-xs font-mono uppercase tracking-wider text-[#1C120C]/55">Founded</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-4xl sm:text-5xl font-light text-[#1C120C]">Lagos</span>
            <span className="text-xs font-mono uppercase tracking-wider text-[#1C120C]/55">HQ</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-4xl sm:text-5xl font-light text-[#1C120C]">Global</span>
            <span className="text-xs font-mono uppercase tracking-wider text-[#1C120C]/55">Client Reach</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-4xl sm:text-5xl font-light text-[#1C120C]">4</span>
            <span className="text-xs font-mono uppercase tracking-wider text-[#1C120C]/55">Core Disciplines</span>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="mb-16">
          <div className="p-10 sm:p-16 bg-[#1C120C] text-[#F5EAD8] flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-5xl font-normal tracking-tight mb-4 leading-tight">
                Let&apos;s build your digital flagship.
              </h2>
              <p className="text-base text-[#F5EAD8]/70 font-light leading-relaxed">
                We partner with ambitious brands to design and engineer websites that command authority and convert visitors into clients.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[#FF4D4D] hover:bg-white hover:text-[#1C120C] text-white font-mono text-xs uppercase tracking-widest font-semibold transition-all text-center flex items-center justify-center gap-2"
              >
                Start a Project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/works"
                className="px-8 py-4 border border-[#F5EAD8]/30 hover:border-[#F5EAD8] text-[#F5EAD8] hover:bg-[#F5EAD8]/10 font-mono text-xs uppercase tracking-widest transition-all text-center"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}
