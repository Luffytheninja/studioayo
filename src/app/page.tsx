'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Sparkles,
  Palette,
  Box,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Globe,
  Layers,
  Smartphone,
} from 'lucide-react';
import Loader from '@/components/ui/Loader';
import Hero2D5Canvas from '@/components/hero/Hero2D5Canvas';
import HeroOverlay from '@/components/hero/HeroOverlay';
import ContactFormModal from '@/components/contact/ContactFormModal';
import Footer from '@/components/ui/Footer';
import { PROJECTS } from '@/content/projects';
import { STUDIO_INFO } from '@/content/studio';

export default function Home() {
  const [loadingFinished, setLoadingFinished] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactService, setContactService] = useState('Web Design & Engineering');

  // Featured client websites
  const featuredProjects = PROJECTS.filter((p) =>
    ['faem', 'a-century-flame', 'ountodun'].includes(p.slug)
  );

  const hachiProject = PROJECTS.find((p) => p.slug === 'hachi');

  const handleOpenContact = (service: string = 'Web Design & Engineering') => {
    setContactService(service);
    setIsContactOpen(true);
  };

  return (
    <>
      {/* ── Initial Exhibition Loader ── */}
      <Loader onComplete={() => setLoadingFinished(true)} />

      {/* ── 1. Hero Viewport: full-screen 2.5D scene ── */}
      <section
        className="relative w-full h-screen overflow-hidden bg-[#070708]"
        aria-label="Studio Ayo Hero"
      >
        <Hero2D5Canvas />
        <HeroOverlay />
      </section>

      {/* ── 2. Studio Positioning Statement & Credibility Bar ── */}
      <section
        id="about-intro"
        className="relative z-20 py-24 sm:py-32 px-6 sm:px-10 md:px-16 bg-[#070708] border-t border-[#F4F1EA]/10 text-[#F4F1EA]"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Subtitle */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FF4D4D] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#F4F1EA]/60">
              The Digital Studio · Est. 2024
            </span>
          </div>

          {/* Bold Core Manifesto */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-20">
            <h2 className="lg:col-span-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight font-brand">
              We design &amp; engineer{' '}
              <span className="text-[#F4F1EA] italic font-serif">meaningful websites</span>{' '}
              that turn ambitious visitors into lifelong clients.
            </h2>
            <div className="lg:col-span-4 flex flex-col gap-5 text-sm sm:text-base text-[#F4F1EA]/70 font-light leading-relaxed">
              <p>
                Too many websites are either functional but generic, or artistic but unoptimized.
                Studio Ayo bridges this divide. We combine strategic art direction, modern frontend engineering,
                editorial illustration, and subtle 3D into digital experiences that command authority.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => handleOpenContact('Web Design & Engineering')}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF4D4D] hover:text-white transition-colors"
                >
                  <span>Work with Studio Ayo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Credibility & Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-10 border-t border-[#F4F1EA]/10">
            <div className="flex flex-col gap-1">
              <span className="text-3xl sm:text-4xl md:text-5xl font-light text-[#F4F1EA] font-brand">60%+</span>
              <span className="text-xs font-mono uppercase tracking-wider text-[#F4F1EA]/50">
                Mobile-First Focus
              </span>
              <p className="text-[11px] text-[#F4F1EA]/40 leading-snug mt-1">
                Optimized for fast mobile views and high-end desktop screens.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl sm:text-4xl md:text-5xl font-light text-[#F4F1EA] font-brand">100%</span>
              <span className="text-xs font-mono uppercase tracking-wider text-[#F4F1EA]/50">
                Bespoke Architecture
              </span>
              <p className="text-[11px] text-[#F4F1EA]/40 leading-snug mt-1">
                Zero generic templates. Next.js 15, React 19, custom design systems.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl sm:text-4xl md:text-5xl font-light text-[#F4F1EA] font-brand">4</span>
              <span className="text-xs font-mono uppercase tracking-wider text-[#F4F1EA]/50">
                Focused Strengths
              </span>
              <p className="text-[11px] text-[#F4F1EA]/40 leading-snug mt-1">
                Web Design, Web Dev, Illustration, and Occasional 3D.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl sm:text-4xl md:text-5xl font-light text-[#F4F1EA] font-brand">&lt;24h</span>
              <span className="text-xs font-mono uppercase tracking-wider text-[#F4F1EA]/50">
                Inquiry Response
              </span>
              <p className="text-[11px] text-[#F4F1EA]/40 leading-snug mt-1">
                Direct consultation with studio leads on scope &amp; strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Featured Client Websites Showcase ── */}
      <section
        id="featured-works"
        className="relative z-20 py-24 sm:py-32 px-6 sm:px-10 md:px-16 bg-[#0B0B0E] border-t border-[#F4F1EA]/10 text-[#F4F1EA]"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#FF4D4D] block mb-3">
                Selected Client Work
              </span>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight font-brand">
                Websites Built for Impact
              </h2>
            </div>
            <Link
              href="/works"
              className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-[#F4F1EA]/70 hover:text-[#F4F1EA] transition-colors"
            >
              <span>Explore All Works ({PROJECTS.length})</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Projects Cards Grid */}
          <div className="flex flex-col gap-20 sm:gap-28">
            {featuredProjects.map((project, idx) => (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center group"
              >
                {/* Visual Media Container */}
                <div className="lg:col-span-7">
                  <Link
                    href={`/works/${project.slug}`}
                    className="block relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-[#121215] border border-[#F4F1EA]/15 shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:border-[#FF4D4D]/50"
                  >
                    <Image
                      src={project.bannerImage || project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 65vw"
                    />

                    {/* Auto-playing or Hover Video if available */}
                    {project.videoUrl && (
                      <video
                        src={project.videoUrl}
                        muted
                        loop
                        autoPlay
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#070708]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-[#F4F1EA]/80 backdrop-blur-md bg-black/40 px-4 py-2 rounded-full border border-white/10">
                      <span>{project.client}</span>
                      <span>{project.year}</span>
                    </div>
                  </Link>
                </div>

                {/* Editorial Information */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.categories.map((cat) => (
                        <span
                          key={cat}
                          className="px-3 py-1 text-[11px] font-mono uppercase tracking-wider bg-[#F4F1EA]/5 border border-[#F4F1EA]/15 rounded-full text-[#F4F1EA]/80"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>

                    <Link href={`/works/${project.slug}`}>
                      <h3 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight font-brand mb-4 group-hover:text-[#FF4D4D] transition-colors">
                        {project.title}
                      </h3>
                    </Link>

                    <p className="text-sm sm:text-base text-[#F4F1EA]/70 font-light leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {project.review && (
                      <div className="p-4 rounded-xl bg-[#F4F1EA]/5 border-l-2 border-[#FF4D4D] mb-6">
                        <p className="text-xs sm:text-sm italic font-serif text-[#F4F1EA]/90 leading-relaxed mb-2">
                          &ldquo;{project.review.quote}&rdquo;
                        </p>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#F4F1EA]/50 block">
                          — {project.review.author}, {project.review.title}
                        </span>
                      </div>
                    )}
                  </div>

                  <div>
                    <Link
                      href={`/works/${project.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#F4F1EA] hover:text-[#FF4D4D] transition-colors group-hover:translate-x-1 duration-300"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Proprietary Studio Products Spotlight: HACHI ── */}
      {hachiProject && (
        <section
          id="hachi-spotlight"
          className="relative z-20 py-24 sm:py-32 px-6 sm:px-10 md:px-16 bg-[#070708] border-t border-[#F4F1EA]/10 text-[#F4F1EA]"
        >
          <div className="max-w-7xl mx-auto">
            <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-b from-[#121215] to-[#0A0A0C] border border-[#F4F1EA]/15 shadow-[0_24px_80px_rgba(0,0,0,0.7)] relative overflow-hidden">
              {/* Subtle background glow */}
              <div
                className="absolute top-0 right-0 w-96 h-96 bg-[#3897F0]/15 rounded-full blur-[100px] pointer-events-none"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                {/* Left: Product Manifesto */}
                <div className="lg:col-span-6 flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-[#3897F0]/20 text-[#3897F0] border border-[#3897F0]/30 font-semibold">
                      Studio Products &amp; Ventures
                    </span>
                    <span className="text-xs font-mono text-[#F4F1EA]/50">Built by Studio Ayo</span>
                  </div>

                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight font-brand">
                    Hachi — A Shared Grocery System for People Who Live Together.
                  </h2>

                  <p className="text-sm sm:text-base text-[#F4F1EA]/75 font-light leading-relaxed">
                    We don’t just design websites for clients; we incubate and engineer our own digital products.
                    Hachi is a personal product experiment and launching-soon PWA built around a simple problem:
                    keeping track of household groceries without turning coordination into another chore.
                    From real-time shared state to tactile UI feedback, Hachi proves our ability to take an idea from
                    research and UX to a functional working product.
                  </p>

                  <div className="grid grid-cols-2 gap-4 py-3 border-y border-[#F4F1EA]/10 text-xs font-mono">
                    <div>
                      <span className="text-[#3897F0] block font-semibold">ROLE</span>
                      <span className="text-[#F4F1EA]/70">Product Design, UX/UI &amp; PWA Dev</span>
                    </div>
                    <div>
                      <span className="text-[#3897F0] block font-semibold">STATUS</span>
                      <span className="text-[#F4F1EA]/70">Working MVP · Launching Soon</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <Link
                      href="/works/hachi"
                      className="px-6 py-3 rounded-full bg-[#3897F0] hover:bg-[#3897F0]/90 text-white text-xs font-mono uppercase tracking-widest transition-all font-semibold shadow-lg shadow-[#3897F0]/20"
                    >
                      Explore Hachi Case Study →
                    </Link>
                    <button
                      onClick={() => handleOpenContact('Digital Products (Hachi / Venture)')}
                      className="px-6 py-3 rounded-full glass-nav border border-white/20 text-[#F4F1EA] hover:text-white hover:bg-white/10 text-xs font-mono uppercase tracking-widest transition-all"
                    >
                      Build a Product With Us
                    </button>
                  </div>
                </div>

                {/* Right: Mobile Screens Showcase */}
                <div className="lg:col-span-6 relative">
                  <div className="grid grid-cols-2 gap-4 max-w-md mx-auto sm:max-w-none">
                    <div className="relative aspect-[9/19] rounded-2xl overflow-hidden border border-white/15 shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                      <Image
                        src="/media/images/hachi-home-screen.png"
                        alt="Hachi Home Screen UI"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative aspect-[9/19] rounded-2xl overflow-hidden border border-white/15 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 mt-6 sm:mt-10">
                      <Image
                        src="/media/images/hachi-sign-in-screen.png"
                        alt="Hachi Sign In Screen UI"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 5. Streamlined Core Strengths (4 Pillars) ── */}
      <section
        id="capabilities"
        className="relative z-20 py-24 sm:py-32 px-6 sm:px-10 md:px-16 bg-[#0B0B0E] border-t border-[#F4F1EA]/10 text-[#F4F1EA]"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF4D4D] block mb-3">
              Streamlined Offerings
            </span>
            <h2 className="text-4xl sm:text-6xl font-normal tracking-tight font-brand mb-6">
              Our Core Strengths.
            </h2>
            <p className="text-base sm:text-lg text-[#F4F1EA]/70 font-light leading-relaxed">
              We focus only on what we excel at and what clients actually need to dominate online.
              No bloated retainers or unneeded extras.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
            {/* Pillar 1: Web Design */}
            <div className="p-8 rounded-2xl bg-[#121215] border border-[#F4F1EA]/10 flex flex-col justify-between hover:border-[#FF4D4D]/40 transition-colors group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#FF4D4D]">
                  <Palette className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-[#F4F1EA]/40 uppercase tracking-widest block mb-1">01 / DISCIPLINE</span>
                <h3 className="text-2xl sm:text-3xl font-normal font-brand mb-3">
                  Web Design &amp; Art Direction
                </h3>
                <p className="text-sm text-[#F4F1EA]/70 font-light leading-relaxed mb-6">
                  Bespoke visual identity translation, strategic information architecture, responsive layouts,
                  editorial typography, and interactive Figma prototyping engineered to build immediate client trust.
                </p>
              </div>
              <ul className="text-xs font-mono text-[#F4F1EA]/60 space-y-1.5 pt-4 border-t border-white/10">
                <li>• UI/UX Discovery &amp; Wireframing</li>
                <li>• Interactive Clickable Prototypes</li>
                <li>• Responsive Mobile-First Design Systems</li>
              </ul>
            </div>

            {/* Pillar 2: Web Development */}
            <div className="p-8 rounded-2xl bg-[#121215] border border-[#F4F1EA]/10 flex flex-col justify-between hover:border-[#FF4D4D]/40 transition-colors group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#25D366]">
                  <Code2 className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-[#F4F1EA]/40 uppercase tracking-widest block mb-1">02 / ENGINEERING</span>
                <h3 className="text-2xl sm:text-3xl font-normal font-brand mb-3">
                  Web Development &amp; Code
                </h3>
                <p className="text-sm text-[#F4F1EA]/70 font-light leading-relaxed mb-6">
                  Clean, production-grade frontend engineering using Next.js 15, TypeScript, and Tailwind CSS.
                  Silky 60fps Framer Motion transitions, sub-second load times, and airtight SEO.
                </p>
              </div>
              <ul className="text-xs font-mono text-[#F4F1EA]/60 space-y-1.5 pt-4 border-t border-white/10">
                <li>• Next.js 15 &amp; React 19 Strict</li>
                <li>• Lenis Smooth Physics &amp; Micro-Interactions</li>
                <li>• Technical SEO &amp; Core Web Vitals 95+</li>
              </ul>
            </div>

            {/* Pillar 3: Illustration */}
            <div className="p-8 rounded-2xl bg-[#121215] border border-[#F4F1EA]/10 flex flex-col justify-between hover:border-[#FF4D4D]/40 transition-colors group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#EC7320]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-[#F4F1EA]/40 uppercase tracking-widest block mb-1">03 / ORIGINAL ART</span>
                <h3 className="text-2xl sm:text-3xl font-normal font-brand mb-3">
                  Bespoke Editorial Illustration
                </h3>
                <p className="text-sm text-[#F4F1EA]/70 font-light leading-relaxed mb-6">
                  Original custom artwork created by Alex for your digital platform. Hero visuals, custom iconography,
                  and narrative graphics that make your brand unmistakable and culturally resonant.
                </p>
              </div>
              <ul className="text-xs font-mono text-[#F4F1EA]/60 space-y-1.5 pt-4 border-t border-white/10">
                <li>• Editorial Hero Artworks</li>
                <li>• Custom Brand Iconography Suites</li>
                <li>• Scalable Vector &amp; Digital Painting Assets</li>
              </ul>
            </div>

            {/* Pillar 4: Occasional 3D */}
            <div className="p-8 rounded-2xl bg-[#121215] border border-[#F4F1EA]/10 flex flex-col justify-between hover:border-[#FF4D4D]/40 transition-colors group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#3897F0]">
                  <Box className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-[#F4F1EA]/40 uppercase tracking-widest block mb-1">04 / SPATIAL ACCENTS</span>
                <h3 className="text-2xl sm:text-3xl font-normal font-brand mb-3">
                  Occasional 3D Design &amp; Motion
                </h3>
                <p className="text-sm text-[#F4F1EA]/70 font-light leading-relaxed mb-6">
                  Tactile 3D product visualization, Blender material simulation, and interactive WebGL assets by Mosa.
                  Brought in selectively when a product website needs physical presence and depth.
                </p>
              </div>
              <ul className="text-xs font-mono text-[#F4F1EA]/60 space-y-1.5 pt-4 border-t border-white/10">
                <li>• Interactive Three.js WebGL Models</li>
                <li>• Photorealistic Tactile CGI</li>
                <li>• Product Launch Motion Sequences</li>
              </ul>
            </div>
          </div>

          {/* Direct CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 rounded-2xl bg-[#121215] border border-white/10 gap-4">
            <div>
              <h4 className="text-lg font-medium font-brand">Need a tailored website scope or retainer?</h4>
              <p className="text-xs sm:text-sm text-[#F4F1EA]/60 font-light">
                View our complete scope breakdown, deliverables, and transparent investment tiers.
              </p>
            </div>
            <Link
              href="/services"
              className="px-6 py-3 rounded-full bg-[#F4F1EA] text-[#070708] hover:bg-white text-xs font-mono uppercase tracking-widest font-semibold transition-all shrink-0"
            >
              View Services &amp; Pricing →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. The Studio Ayo Client Process (4 Clear Steps) ── */}
      <section
        id="process"
        className="relative z-20 py-24 sm:py-32 px-6 sm:px-10 md:px-16 bg-[#070708] border-t border-[#F4F1EA]/10 text-[#F4F1EA]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF4D4D] block mb-3">
              How We Work
            </span>
            <h2 className="text-4xl sm:text-6xl font-normal tracking-tight font-brand mb-6">
              A Streamlined, High-Trust Process.
            </h2>
            <p className="text-base sm:text-lg text-[#F4F1EA]/70 font-light leading-relaxed">
              We eliminate guesswork. You get complete transparency from day one with structured sprints,
              interactive milestones, and direct communication.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#0D0D10] border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-2xl font-light text-[#FF4D4D] font-mono block mb-4">01</span>
                <h4 className="text-xl font-normal font-brand mb-2">Discovery &amp; Strategy</h4>
                <p className="text-xs sm:text-sm text-[#F4F1EA]/70 font-light leading-relaxed">
                  We audit your brand, analyze your highest-value clients, map user journeys, and establish
                  the exact architectural roadmap.
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#F4F1EA]/40 uppercase tracking-widest mt-6 pt-4 border-t border-white/10">
                Phase 1 · Days 1–5
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-[#0D0D10] border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-2xl font-light text-[#FF4D4D] font-mono block mb-4">02</span>
                <h4 className="text-xl font-normal font-brand mb-2">Art Direction &amp; Prototype</h4>
                <p className="text-xs sm:text-sm text-[#F4F1EA]/70 font-light leading-relaxed">
                  We craft the visual universe — editorial typography, bespoke palettes, custom illustrations,
                  and an interactive Figma prototype.
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#F4F1EA]/40 uppercase tracking-widest mt-6 pt-4 border-t border-white/10">
                Phase 2 · Weeks 1–2
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-[#0D0D10] border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-2xl font-light text-[#FF4D4D] font-mono block mb-4">03</span>
                <h4 className="text-xl font-normal font-brand mb-2">Modern Engineering</h4>
                <p className="text-xs sm:text-sm text-[#F4F1EA]/70 font-light leading-relaxed">
                  We write clean, production-grade Next.js and TypeScript. We tune 60fps micro-interactions
                  and rigorously test across 10+ mobile &amp; PC viewports.
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#F4F1EA]/40 uppercase tracking-widest mt-6 pt-4 border-t border-white/10">
                Phase 3 · Weeks 2–4
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-[#0D0D10] border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-2xl font-light text-[#FF4D4D] font-mono block mb-4">04</span>
                <h4 className="text-xl font-normal font-brand mb-2">Launch &amp; Evolution</h4>
                <p className="text-xs sm:text-sm text-[#F4F1EA]/70 font-light leading-relaxed">
                  Zero-downtime deployment, technical SEO verification, analytics setup, and continuous
                  support or retainer upgrades for post-launch growth.
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#F4F1EA]/40 uppercase tracking-widest mt-6 pt-4 border-t border-white/10">
                Phase 4 · Launch Day &amp; Beyond
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Client Social Proof & Testimonials ── */}
      <section
        id="testimonials"
        className="relative z-20 py-24 sm:py-32 px-6 sm:px-10 md:px-16 bg-[#0B0B0E] border-t border-[#F4F1EA]/10 text-[#F4F1EA]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#FF4D4D] block mb-3">
                Client Trust
              </span>
              <h2 className="text-4xl sm:text-6xl font-normal tracking-tight font-brand">
                What Our Clients Say.
              </h2>
            </div>
            <span className="text-xs font-mono text-[#F4F1EA]/50 uppercase tracking-wider">
              Selected Endorsements
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="p-8 rounded-2xl bg-[#121215] border border-white/10 flex flex-col justify-between">
              <p className="text-base font-serif italic text-[#F4F1EA]/90 leading-relaxed mb-6">
                &ldquo;Studio Ayo elevated our concept store into a global luxury benchmark. The brand identity
                and Shopify experience captured our heritage with unmatched sophistication.&rdquo;
              </p>
              <div className="pt-4 border-t border-white/10">
                <span className="text-sm font-medium text-[#F4F1EA] block">Ountodun Leadership</span>
                <span className="text-xs font-mono text-[#F4F1EA]/50">Founder &amp; Creative Lead</span>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#121215] border border-white/10 flex flex-col justify-between">
              <p className="text-base font-serif italic text-[#F4F1EA]/90 leading-relaxed mb-6">
                &ldquo;The website instantly set our universe apart from every traditional record label.
                It moves, breathes, and sounds like an authentic dark artistic universe.&rdquo;
              </p>
              <div className="pt-4 border-t border-white/10">
                <span className="text-sm font-medium text-[#F4F1EA] block">FAËM Management</span>
                <span className="text-xs font-mono text-[#F4F1EA]/50">Record Label &amp; Sound Studio</span>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#121215] border border-white/10 flex flex-col justify-between">
              <p className="text-base font-serif italic text-[#F4F1EA]/90 leading-relaxed mb-6">
                &ldquo;Studio Ayo built a digital gallery experience that matched the soul of our clothing
                collection. Customer engagement and dwell time doubled after the redesign.&rdquo;
              </p>
              <div className="pt-4 border-t border-white/10">
                <span className="text-sm font-medium text-[#F4F1EA] block">Lanre</span>
                <span className="text-xs font-mono text-[#F4F1EA]/50">Creative Director · A Century Flame</span>
              </div>
            </div>
          </div>

          {/* Client Logos Row */}
          <div className="pt-10 border-t border-white/10 flex flex-wrap items-center justify-between gap-8 opacity-75">
            {STUDIO_INFO.trustedClients.map((client) => (
              <span
                key={client}
                className="text-xs font-mono uppercase tracking-widest text-[#F4F1EA]/60 hover:text-[#F4F1EA] transition-colors"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. High-Converting Project Inquiry / "Hire Us" CTA Banner ── */}
      <section
        id="hire-us"
        className="relative z-20 py-24 sm:py-36 px-6 sm:px-10 md:px-16 bg-[#070708] border-t border-[#F4F1EA]/10 text-[#F4F1EA] text-center"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FF4D4D] block mb-4">
            Initiate a Project
          </span>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight font-brand mb-6 leading-tight">
            Ready to build a website that commands respect?
          </h2>

          <p className="text-base sm:text-xl text-[#F4F1EA]/70 font-light leading-relaxed max-w-2xl mb-10">
            We are currently onboarding selected clients for upcoming quarters. Tell us about your vision,
            and we’ll show you how we can bring it to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
            <button
              onClick={() => handleOpenContact('Web Design & Engineering')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#F4F1EA] text-[#070708] hover:bg-white text-sm font-mono uppercase tracking-widest font-semibold transition-all shadow-[0_10px_35px_rgba(244,241,234,0.15)] active:scale-95"
            >
              Start Your Project →
            </button>
            <a
              href="mailto:contactstudioayo@gmail.com"
              className="w-full sm:w-auto px-8 py-4 rounded-full glass-nav border border-[#F4F1EA]/20 text-[#F4F1EA] hover:text-white hover:bg-white/10 text-sm font-mono uppercase tracking-widest transition-all"
            >
              contactstudioayo@gmail.com
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#F4F1EA]/40 tracking-wider">
            <span>✓ Bespoke Architecture</span>
            <span>✓ 60fps Mobile Performance</span>
            <span>✓ Direct Founder Sprints</span>
            <span>✓ 24hr Inquiry Turnaround</span>
          </div>
        </div>
      </section>

      {/* ── 9. Global Studio Footer ── */}
      <Footer />

      {/* ── Contact Form Modal ── */}
      <ContactFormModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        defaultService={contactService}
      />
    </>
  );
}
