'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onComplete?: () => void;
}

/* ── SVG constants ─────────────────────────────────────────────────────── */
const VW = 200; // viewBox width
const VH = 200; // viewBox height
const AMP = 7;  // wave amplitude (px in viewBox units)
const WAVE_PERIOD = 2200; // ms for one full horizontal oscillation

/**
 * Build the SVG path for the wave-filled area.
 * fillY  – y-coordinate of the wave baseline (VH = empty, 0 = full)
 * phase  – 0..1, horizontal offset of the wave (drives oscillation)
 */
function buildWavePath(fillY: number, phase: number): string {
  // Clamp guards
  if (fillY >= VH + AMP + 2) return ''; // nothing filled yet
  if (fillY <= -AMP - 2) {
    // Fully filled — flat rectangle
    return `M 0,0 L ${VW},0 L ${VW},${VH} L 0,${VH} Z`;
  }

  // We draw extra on both sides so the translated wave has no visible gaps.
  const EXTRA = VW * 0.6;
  const totalW = VW + EXTRA * 2;
  const numCycles = 3; // repetitions of the sine across totalW
  const cycleW = totalW / numCycles;

  // Phase shifts the wave left, creating oscillation
  const offsetX = -EXTRA + phase * cycleW;

  // Start one full cycle to the left so there's always coverage on the left edge
  const startX = offsetX - cycleW;

  let d = `M ${startX},${fillY}`;

  // Each cycle: one sine arch using two cubic bezier segments
  for (let i = 0; i < numCycles + 2; i++) {
    const x0 = startX + i * cycleW;
    const xMid = x0 + cycleW / 2;
    const x1 = x0 + cycleW;
    // Up arc
    d += ` C ${x0 + cycleW * 0.25},${fillY - AMP}`;
    d += ` ${xMid - cycleW * 0.05},${fillY - AMP}`;
    d += ` ${xMid},${fillY}`;
    // Down arc
    d += ` C ${xMid + cycleW * 0.05},${fillY + AMP}`;
    d += ` ${x1 - cycleW * 0.25},${fillY + AMP}`;
    d += ` ${x1},${fillY}`;
  }

  // Close the shape by going down-right, across the bottom, up-left
  d += ` L ${startX + (numCycles + 2) * cycleW},${VH + 4}`;
  d += ` L ${startX},${VH + 4} Z`;

  return d;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [isFinished, setIsFinished] = useState(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  // Refs for direct SVG DOM mutation (no re-renders during animation)
  const clipPathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    let rafId: number;
    let startTime: number | null = null;
    const FILL_DURATION = 3400; // ms from 0 % to 100 %

    const tick = (now: number) => {
      if (!startTime) startTime = now;
      const elapsed = now - startTime;

      // Linear fill — slow and precise
      const fillPct = Math.min(1, elapsed / FILL_DURATION);

      // Wave baseline in viewBox coords: starts at VH (bottom), ends at 0 (top)
      const fillY = VH - fillPct * VH;

      // Horizontal oscillation phase (0..1 loops every WAVE_PERIOD ms)
      const phase = (elapsed % WAVE_PERIOD) / WAVE_PERIOD;

      // Directly mutate the SVG path — no React state, no re-renders
      const d = buildWavePath(fillY, phase);
      if (clipPathRef.current && d) {
        clipPathRef.current.setAttribute('d', d);
      }

      if (fillPct < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        // Briefly hold at full before exiting
        setTimeout(() => {
          setIsFinished(true);
          onCompleteRef.current?.();
        }, 550);
      }
    };

    // Small hold before kicking off
    const startDelay = setTimeout(() => {
      rafId = requestAnimationFrame(tick);
    }, 250);

    return () => {
      clearTimeout(startDelay);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#070708]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* ── Mascot container ── */}
          <div className="relative w-44 h-44 md:w-56 md:h-56">
            <svg
              viewBox={`0 0 ${VW} ${VH}`}
              className="w-full h-full"
              style={{ overflow: 'visible' }}
              aria-hidden="true"
            >
              <defs>
                {/* Wave-shaped clip path — path updated imperatively each frame */}
                <clipPath id="loader-wave-clip" clipPathUnits="userSpaceOnUse">
                  <path ref={clipPathRef} d="" />
                </clipPath>
              </defs>

              {/* Dim grayscale silhouette — always visible as the "empty" state */}
              <image
                href="/media/images/studio-mascot.png"
                x="0"
                y="0"
                width={VW}
                height={VH}
                preserveAspectRatio="xMidYMid meet"
                opacity="0.18"
                style={{ filter: 'grayscale(1)' }}
              />

              {/* Full-colour image revealed by rising wave clip — no glow, no shadow */}
              <image
                href="/media/images/studio-mascot.png"
                x="0"
                y="0"
                width={VW}
                height={VH}
                preserveAspectRatio="xMidYMid meet"
                clipPath="url(#loader-wave-clip)"
              />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
