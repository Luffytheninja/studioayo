'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnterInteractive = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      setIsHovered(true);
      const text = target.getAttribute('data-cursor-text') || '';
      setHoverText(text);
    };

    const onMouseLeaveInteractive = () => {
      setIsHovered(false);
      setHoverText('');
    };

    window.addEventListener('mousemove', onMouseMove);

    const updateInteractiveListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, [data-cursor-interactive]');
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', onMouseEnterInteractive as EventListener);
        el.addEventListener('mouseleave', onMouseLeaveInteractive as EventListener);
      });
    };

    updateInteractiveListeners();
    const observer = new MutationObserver(updateInteractiveListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Small Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#F4F1EA] rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: mousePosition.x < 0 ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
      />

      {/* Trailing Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-40 flex items-center justify-center border border-[#F4F1EA]/40 backdrop-blur-[2px]"
        animate={{
          x: mousePosition.x - (isHovered ? 32 : 16),
          y: mousePosition.y - (isHovered ? 32 : 16),
          width: isHovered ? 64 : 32,
          height: isHovered ? 64 : 32,
          backgroundColor: isHovered ? 'rgba(244, 241, 234, 0.12)' : 'rgba(244, 241, 234, 0)',
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.2 }}
      >
        {hoverText && (
          <span className="text-[9px] font-mono tracking-widest text-[#F4F1EA] uppercase whitespace-nowrap px-1">
            {hoverText}
          </span>
        )}
      </motion.div>
    </>
  );
}
