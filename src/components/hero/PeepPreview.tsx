'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

/* ─── Peep Data ────────────────────────────────────────────────────────────── */
export interface PeepItem {
  keyword: string;          // The word rendered in the headline
  label: string;            // Display label inside the card
  category: string;         // Small mono tag
  thumbnail: string;        // Image path
  href: string;             // Optional link
  accentColor: string;      // Border / glow accent
}

export const PEEP_ITEMS: PeepItem[] = [
  {
    keyword: 'products',
    label: 'Hachi',
    category: 'Web App Design',
    thumbnail: '/media/images/hachi-thumbnail.png',
    href: '/works/hachi',
    accentColor: '#3897F0',
  },
  {
    keyword: 'brands',
    label: 'Ountodun',
    category: 'Visual Identity',
    thumbnail: '/media/images/ountodun-thumbnail.png',
    href: '/works/ountodun',
    accentColor: '#EC7320',
  },
  {
    keyword: 'experiences',
    label: 'A Century Flame',
    category: 'Web Design',
    thumbnail: '/media/images/a-century-flame-thumbnail.png',
    href: '/works/a-century-flame',
    accentColor: '#F4F1EA',
  },
];

/* ─── Hook: smooth magnetic cursor tracking ─────────────────────────────── */
function useMagneticCursor() {
  const pos = useRef({ x: 0, y: 0 });
  const smoothPos = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);
  const [renderPos, setRenderPos] = useState({ x: 0, y: 0 });

  const onMove = useCallback((e: MouseEvent) => {
    pos.current = { x: e.clientX, y: e.clientY };
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', onMove, { passive: true });

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      smoothPos.current.x = lerp(smoothPos.current.x, pos.current.x, 0.14);
      smoothPos.current.y = lerp(smoothPos.current.y, pos.current.y, 0.14);
      setRenderPos({ x: smoothPos.current.x, y: smoothPos.current.y });
      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [onMove]);

  return renderPos;
}

/* ─── Floating Card (portal-level, top of z-stack) ──────────────────────── */
interface FloatingPeepCardProps {
  item: PeepItem | null;
  cursorPos: { x: number; y: number };
}

const CARD_W = 200; // px – card width
const CARD_H = 148; // px – approx card height
const OFFSET_X = 20; // px – horizontal offset from cursor
const OFFSET_Y = -24; // px – vertical offset from cursor

export function FloatingPeepCard({ item, cursorPos }: FloatingPeepCardProps) {
  // Flip card if it would overflow the viewport edges
  const [flip, setFlip] = useState({ x: false, y: false });

  useEffect(() => {
    if (!item) return;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const x = cursorPos.x + OFFSET_X;
    const y = cursorPos.y + OFFSET_Y;
    setFlip({
      x: x + CARD_W > vw - 16,
      y: y + CARD_H > vh - 16,
    });
  }, [cursorPos, item]);

  const left = flip.x
    ? cursorPos.x - CARD_W - OFFSET_X
    : cursorPos.x + OFFSET_X;
  const top = flip.y
    ? cursorPos.y - CARD_H - Math.abs(OFFSET_Y)
    : cursorPos.y + OFFSET_Y;

  return (
    <AnimatePresence mode="wait">
      {item && (
        <motion.div
          key={item.keyword}
          className="peep-card-portal"
          style={{
            position: 'fixed',
            left,
            top,
            zIndex: 9999,
            pointerEvents: 'none',
            width: CARD_W,
            willChange: 'transform, opacity',
          }}
          initial={{ opacity: 0, scale: 0.82, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 8 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="peep-card"
            style={{
              background: 'rgba(12, 12, 14, 0.82)',
              backdropFilter: 'blur(18px)',
              WebkitBackdropFilter: 'blur(18px)',
              border: `1px solid ${item.accentColor}30`,
              borderRadius: 14,
              overflow: 'hidden',
              boxShadow: `0 8px 32px rgba(0,0,0,0.55), 0 0 0 1px ${item.accentColor}18, inset 0 1px 0 rgba(255,255,255,0.07)`,
            }}
          >
            {/* Thumbnail */}
            <div style={{ position: 'relative', width: '100%', height: 110, overflow: 'hidden' }}>
              <Image
                src={item.thumbnail}
                alt={item.label}
                fill
                sizes="200px"
                className="object-cover"
                style={{
                  transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)',
                }}
              />
              {/* Gradient overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: `linear-gradient(to bottom, transparent 40%, rgba(12,12,14,0.6) 100%)`,
                  pointerEvents: 'none',
                }}
              />
              {/* Accent glow line at top */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: `linear-gradient(90deg, transparent, ${item.accentColor}80, transparent)`,
                }}
              />
            </div>

            {/* Meta row */}
            <div
              style={{
                padding: '8px 12px 10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 6,
              }}
            >
              <span
                style={{
                  fontFamily: 'Hanken Grotesk, system-ui, sans-serif',
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                  color: '#F4F1EA',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {item.label}
              </span>
              <span
                style={{
                  fontFamily: 'monospace',
                  fontSize: 9,
                  letterSpacing: '0.08em',
                  color: item.accentColor,
                  opacity: 0.85,
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                {item.category}
              </span>
            </div>
          </div>

          {/* Viewfinder corner notch */}
          <svg
            style={{
              position: 'absolute',
              bottom: -6,
              left: flip.x ? 'auto' : 10,
              right: flip.x ? 10 : 'auto',
              opacity: 0.5,
            }}
            width="12"
            height="6"
            viewBox="0 0 12 6"
            fill="none"
          >
            <path d="M0 0L6 6L12 0" fill={item.accentColor} fillOpacity="0.35" />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── Keyword Trigger span ────────────────────────────────────────────────── */
interface PeepTriggerProps {
  item: PeepItem;
  onEnter: (item: PeepItem) => void;
  onLeave: () => void;
  children: React.ReactNode;
}

export function PeepTrigger({ item, onEnter, onLeave, children }: PeepTriggerProps) {
  return (
    <span
      className="peep-trigger"
      onMouseEnter={() => onEnter(item)}
      onMouseLeave={onLeave}
      style={{
        cursor: 'crosshair',
        position: 'relative',
        display: 'inline-block',
        color: 'inherit',
      }}
    >
      {children}
      {/* Subtle animated underline */}
      <span
        className="peep-underline"
        style={{
          position: 'absolute',
          bottom: 1,
          left: 0,
          right: 0,
          height: 1,
          background: `linear-gradient(90deg, transparent, ${item.accentColor}90, transparent)`,
          transform: 'scaleX(0)',
          transformOrigin: 'center',
          transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)',
        }}
      />
      <style>{`
        .peep-trigger:hover .peep-underline {
          transform: scaleX(1) !important;
        }
        .peep-trigger:hover {
          color: rgba(244,241,234,1) !important;
        }
      `}</style>
    </span>
  );
}

/* ─── Main Peep Preview orchestrator (place near root of hero) ───────────── */
export default function PeepPreview() {
  const [activeItem, setActiveItem] = useState<PeepItem | null>(null);
  const cursorPos = useMagneticCursor();

  return (
    <>
      <FloatingPeepCard item={activeItem} cursorPos={cursorPos} />
      {/* This component doesn't render visible DOM — triggers are injected via HeroOverlay */}
    </>
  );
}

/* ─── Context to wire triggers from the headline ─────────────────────────── */
import { createContext, useContext } from 'react';

interface PeepContextValue {
  setActiveItem: (item: PeepItem | null) => void;
  cursorPos: { x: number; y: number };
}

export const PeepContext = createContext<PeepContextValue>({
  setActiveItem: () => {},
  cursorPos: { x: 0, y: 0 },
});

export function usePeep() {
  return useContext(PeepContext);
}
