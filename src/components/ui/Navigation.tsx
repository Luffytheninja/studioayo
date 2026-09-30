'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const NAV_ITEMS = [
  { label: 'Works', href: '/works' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Shop', href: '/shop' },
  { label: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === '/';
  const isLightPage = pathname === '/about' || pathname.startsWith('/works/');

  // On homepage, reveal top navigation once user scrolls past the top hero
  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 120) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const showNav = !isHome || scrolled;

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-5 md:px-10 py-4 md:py-5 pointer-events-none transition-all duration-500 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className={`pointer-events-auto transition-all duration-500 ${
            showNav ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
          aria-label="Studio Ayo – Home"
          data-cursor-text="Home"
          tabIndex={showNav ? 0 : -1}
        >
          <div className="relative h-8 w-36 md:w-44">
            <Image
              src={isLightPage ? '/media/images/studio-ayo-logo-black.png' : '/media/images/studio-ayo-logo-white.png'}
              alt="Studio Ayo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Pill Nav */}
        <div
          className={`hidden md:block transition-all duration-500 ${
            showNav ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <nav
            className={`flex items-center gap-1 px-5 py-2 rounded-full pointer-events-auto border backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.35)] transition-all ${
              isLightPage
                ? 'bg-[#F5EAD8]/80 border-[#1C120C]/15 text-[#1C120C]'
                : 'bg-[#121214]/80 border-[#F4F1EA]/15 text-[#F4F1EA]'
            }`}
            style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
            aria-label="Main Navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              const isLightBg = isLightPage;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-1.5 text-sm font-medium tracking-wide transition-colors duration-200 rounded-full ${
                    isActive
                      ? isLightBg
                        ? 'text-white'
                        : 'text-[#070708]'
                      : isLightBg
                      ? 'text-[#1C120C]/80 hover:text-[#1C120C]'
                      : 'text-[#F4F1EA]/80 hover:text-[#F4F1EA]'
                  }`}
                  data-cursor-text={item.label}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className={`absolute inset-0 rounded-full -z-10 ${
                        isLightBg ? 'bg-[#1C120C]' : 'bg-[#F4F1EA]'
                      }`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <div
          className={`md:hidden transition-all duration-500 ${
            showNav ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`pointer-events-auto p-2.5 rounded-full backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center gap-1.5 w-11 h-11 border transition-all ${
              isLightPage
                ? 'bg-[#F5EAD8]/85 border-[#1C120C]/15 text-[#1C120C]'
                : 'bg-[#121214]/85 border-[#F4F1EA]/15 text-[#F4F1EA]'
            }`}
            style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
            aria-label="Toggle Navigation"
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={`block w-5 h-0.5 transition-transform duration-300 origin-center ${
                isLightPage ? 'bg-[#1C120C]' : 'bg-[#F4F1EA]'
              } ${mobileMenuOpen ? 'rotate-45 translate-y-[4px]' : ''}`}
            />
            <span
              className={`block w-5 h-0.5 transition-transform duration-300 origin-center ${
                isLightPage ? 'bg-[#1C120C]' : 'bg-[#F4F1EA]'
              } ${mobileMenuOpen ? '-rotate-45 -translate-y-[4px]' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer with Glassmorphism */}
      <AnimatePresence>
        {mobileMenuOpen && showNav && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className={`md:hidden pointer-events-auto mt-3 mx-4 p-5 rounded-2xl flex flex-col gap-1.5 shadow-[0_24px_64px_rgba(0,0,0,0.65)] border transition-all ${
              isLightPage
                ? 'bg-[#F5EAD8]/90 border-[#1C120C]/15 text-[#1C120C]'
                : 'bg-[#0E0E11]/90 border-[#F4F1EA]/15 text-[#F4F1EA]'
            }`}
            style={{
              backdropFilter: 'blur(28px)',
              WebkitBackdropFilter: 'blur(28px)',
            }}
          >
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium tracking-wide py-3 px-3.5 rounded-xl flex items-center justify-between transition-colors ${
                    isActive
                      ? isLightPage
                        ? 'bg-[#1C120C]/10 text-[#1C120C] font-semibold'
                        : 'bg-white/10 text-[#F4F1EA] font-semibold'
                      : isLightPage
                      ? 'text-[#1C120C]/75 hover:bg-[#1C120C]/5 hover:text-[#1C120C]'
                      : 'text-[#F4F1EA]/75 hover:bg-white/5 hover:text-[#F4F1EA]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D4D]" />}
                </Link>
              );
            })}

            <div className="pt-3 mt-2 border-t border-[#F4F1EA]/10 flex items-center justify-between px-1">
              <span className="text-[10px] font-mono text-[#F4F1EA]/40 uppercase tracking-widest">
                Lagos · Worldwide
              </span>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-mono uppercase tracking-widest text-[#FF4D4D] hover:underline font-semibold"
              >
                Start a Project →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
