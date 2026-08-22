'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import {
  PEEP_ITEMS,
  PeepItem,
  FloatingPeepCard,
  PeepTrigger,
} from './PeepPreview';

/* ─── Logo font-cycling stages ──────────────────────────────────────────── */
// Danfo = display serif (regular)
// Instrument Serif italic = claw-like expressive
// Hanken Grotesk 900 = comb-like bold condensed
// Final = actual PNG logo
const LOGO_STAGES = [
  {
    id: 'danfo',
    text: 'STUDIO AYO',
    style: {
      fontFamily: "'Danfo', Georgia, serif",
      fontWeight: 400,
      letterSpacing: '0.06em',
      fontSize: 'clamp(18px, 4vw, 28px)',
    },
  },
  {
    id: 'claw',
    text: 'STUDIO AYO',
    style: {
      fontFamily: "'Instrument Serif', Georgia, serif",
      fontWeight: 400,
      fontStyle: 'italic',
      letterSpacing: '0.04em',
      fontSize: 'clamp(18px, 4vw, 28px)',
    },
  },
  {
    id: 'comb',
    text: 'STUDIO AYO',
    style: {
      fontFamily: "'Hanken Grotesk', system-ui, sans-serif",
      fontWeight: 900,
      letterSpacing: '0.18em',
      fontSize: 'clamp(14px, 3vw, 22px)',
    },
  },
  {
    id: 'final',
    text: null, // render the PNG
    style: {},
  },
] as const;

function LogoCycler() {
  const [stageIndex, setStageIndex] = useState(0);

  useEffect(() => {
    if (stageIndex >= LOGO_STAGES.length - 1) return;
    // Each stage holds for ~380ms before flipping
    const t = setTimeout(() => setStageIndex((i) => i + 1), 380);
    return () => clearTimeout(t);
  }, [stageIndex]);

  const isFinal = stageIndex === LOGO_STAGES.length - 1;
  const stage = LOGO_STAGES[stageIndex];

  return (
    <div className="relative flex items-center justify-center" style={{ height: '2.75rem', width: '12rem' }}>
      <AnimatePresence mode="popLayout">
        {!isFinal ? (
          <motion.span
            key={stage.id}
            initial={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            className="absolute text-[#F4F1EA] whitespace-nowrap"
            style={stage.id !== 'final' ? { ...stage.style } : {}}
          >
            {'text' in stage ? stage.text : null}
          </motion.span>
        ) : (
          <motion.div
            key="final"
            initial={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            <Image
              src="/media/images/studio-ayo-logo-white.png"
              alt="STUDIO AYO"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function useSmoothCursor() {
  const raw = useRef({ x: 0, y: 0 });
  const smooth = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      raw.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const tick = () => {
      smooth.current.x = lerp(smooth.current.x, raw.current.x, 0.13);
      smooth.current.y = lerp(smooth.current.y, raw.current.y, 0.13);
      setPos({ x: smooth.current.x, y: smooth.current.y });
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return pos;
}

/* ─── Nav items ─────────────────────────────────────────────────────────── */
const NAV_ITEMS = [
  { label: 'C.V', href: '/cv' },
  { label: 'Works', href: '/works' },
  { label: 'Services', href: '/services' },
  { label: 'Shop', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

/* ─── Framer animation variants ─────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

/* ─── The headline, broken into trigger-aware segments ──────────────────── */
interface HeadlineProps {
  onEnter: (item: PeepItem) => void;
  onLeave: () => void;
}

function InteractiveHeadline({ onEnter, onLeave }: HeadlineProps) {
  const byKeyword = Object.fromEntries(PEEP_ITEMS.map((p) => [p.keyword, p]));

  const trigger = (keyword: string) => {
    const item = byKeyword[keyword];
    if (!item) return <>{keyword}</>;
    return (
      <PeepTrigger item={item} onEnter={onEnter} onLeave={onLeave}>
        {keyword}
      </PeepTrigger>
    );
  };

  return (
    <>
      Designing {trigger('products')}, {trigger('brands')} &amp; digital
      <br />
      {trigger('experiences')} that people remember.
    </>
  );
}

/* ─── Main overlay ───────────────────────────────────────────────────────── */
export default function HeroOverlay() {
  const [activeItem, setActiveItem] = useState<PeepItem | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const cursorPos = useSmoothCursor();

  const handleEnter = useCallback((item: PeepItem) => setActiveItem(item), []);
  const handleLeave = useCallback(() => setActiveItem(null), []);

  /* Portal: render the floating card at document.body level so it always
     stays above every z-index layer without fighting stacking contexts. */
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <motion.div
      className="absolute inset-0 z-10 w-full h-full flex flex-col pointer-events-none select-none"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* ── Floating cursor card — portal mounted once document is ready ── */}
      {mounted &&
        createPortal(
          <FloatingPeepCard item={activeItem} cursorPos={cursorPos} />,
          document.body,
        )}

      {/* ── Studio Ayo Logo — font-cycling reveal ── */}
      <motion.div
        variants={itemVariants}
        className="flex justify-center pt-8 md:pt-10"
      >
        <LogoCycler />
      </motion.div>

      {/* ── Spacer pushes headline block toward the bottom ── */}
      <div className="flex-1" />

      {/* ── Headline + Pill Nav — bottom, centered ── */}
      <div className="flex flex-col items-center gap-5 md:gap-6 px-6 sm:px-10 md:px-16 lg:px-24 text-center">
        <motion.h1
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight leading-[1.05] text-[#F4F1EA] drop-shadow-[0_6px_18px_rgba(0,0,0,0.7)] max-w-xl md:max-w-2xl text-center font-brand pointer-events-auto"
          style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif" }}
        >
          <InteractiveHeadline onEnter={handleEnter} onLeave={handleLeave} />
        </motion.h1>

        {/* ── Pill Nav (Desktop) ── */}
        <motion.div variants={itemVariants} className="hidden md:block">
          <nav
            className="pointer-events-auto flex items-center gap-1 px-5 py-3 rounded-full glass-nav border border-[#F4F1EA]/20 shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
            aria-label="Hero Navigation"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-1.5 text-sm font-medium tracking-wide text-[#F4F1EA]/90 hover:text-[#F4F1EA] transition-colors duration-200 rounded-full hover:bg-white/10"
                data-cursor-text={item.label}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </motion.div>

        {/* ── View More Button (Mobile Only) ── */}
        <motion.div variants={itemVariants} className="md:hidden">
          <button
            onClick={() => setMenuOpen(true)}
            className="pointer-events-auto px-6 py-2.5 text-sm font-medium tracking-wide text-[#F4F1EA]/90 hover:text-[#F4F1EA] transition-all duration-200 rounded-full glass-nav border border-[#F4F1EA]/20 shadow-[0_10px_40px_rgba(0,0,0,0.6)] hover:bg-white/10 active:scale-95"
            data-cursor-text="View Menu"
          >
            View More
          </button>
        </motion.div>
      </div>

      {/* ── Footer Bar — full width, sits at the very bottom ── */}
      <motion.div
        variants={itemVariants}
        className="w-full flex items-center justify-between text-[11px] md:text-xs text-[#F4F1EA]/50 font-mono pointer-events-auto tracking-wider px-6 sm:px-10 md:px-16 pt-8 md:pt-10 pb-6 md:pb-8"
      >
        <Link
          href="/terms"
          className="hover:text-[#F4F1EA] transition-colors"
          data-cursor-text="Terms"
        >
          Terms of Services
        </Link>
        <span>© 2026 Studio Ayo</span>
        <Link
          href="/privacy"
          className="hover:text-[#F4F1EA] transition-colors"
          data-cursor-text="Privacy"
        >
          Privacy Policy
        </Link>
      </motion.div>

      {/* ── Fullscreen Mobile Menu Overlay ── */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="fixed inset-0 z-50 flex flex-col justify-between p-8 pointer-events-auto select-none bg-[#070708]/98 backdrop-blur-2xl"
              >
                {/* Header: Logo & Close Button */}
                <div className="flex items-center justify-between">
                  <div className="relative h-8 w-36">
                    <Image
                      src="/media/images/studio-ayo-logo-white.png"
                      alt="Studio Ayo"
                      fill
                      className="object-contain object-left"
                      priority
                    />
                  </div>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="w-10 h-10 rounded-full flex items-center justify-center border border-[#F4F1EA]/10 hover:border-[#F4F1EA]/30 bg-[#F4F1EA]/5 hover:bg-[#F4F1EA]/10 transition-all duration-200 cursor-pointer active:scale-90"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5 text-[#F4F1EA]" />
                  </button>
                </div>

                {/* Menu Links */}
                <div className="flex flex-col gap-6 my-auto pl-4">
                  {NAV_ITEMS.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 30 }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.08,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="text-4xl sm:text-5xl font-light tracking-wide text-[#F4F1EA]/90 hover:text-[#FF4D4D] transition-colors duration-200 block"
                        style={{ fontFamily: "'Hanken Grotesk', system-ui, sans-serif" }}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Footer / Socials */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 border-t border-[#F4F1EA]/10 pt-8 text-xs font-mono text-[#F4F1EA]/50 tracking-wider">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-[#F4F1EA]/30 uppercase tracking-widest">Get in touch</span>
                    <a href="mailto:contactstudioayo@gmail.com" className="text-[#F4F1EA] hover:text-[#FF4D4D] transition-colors text-sm">
                      contactstudioayo@gmail.com
                    </a>
                  </div>
                  <div className="flex gap-4">
                    <a href="https://x.com/studioayodesign" target="_blank" rel="noopener noreferrer" className="hover:text-[#F4F1EA] transition-colors">
                      TWITTER / X
                    </a>
                    <a href="https://www.instagram.com/studi.oayo" target="_blank" rel="noopener noreferrer" className="hover:text-[#F4F1EA] transition-colors">
                      INSTAGRAM
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </motion.div>
  );
}
