'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const NAV_ITEMS = [
  { label: 'C.V', href: '/cv' },
  { label: 'Works', href: '/works' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHome = pathname === '/';
  const isLightPage = pathname === '/about' || pathname.startsWith('/works/') || pathname === '/cv';

  // On homepage the nav pill is embedded inside HeroOverlay; only show top-left logo.
  // On inner pages, show a single logo and a lightweight pill nav.

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-5 md:px-10 py-5 pointer-events-none transition-all duration-500 bg-transparent">

      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo — top-left always */}
        <Link
          href="/"
          className={`pointer-events-auto transition-all duration-500 ${
            isHome ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          aria-label="Studio Ayo – Home"
          data-cursor-text="Home"
          tabIndex={isHome ? -1 : 0}
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

        {/* Desktop Pill Nav — hidden on homepage */}
        {!isHome && (
          <nav
            className={`hidden md:flex items-center gap-1 px-5 py-2.5 rounded-full pointer-events-auto border border-transparent bg-transparent shadow-[0_6px_24px_rgba(0,0,0,0.16)] ${
              isLightPage ? 'text-[#1C120C]' : 'text-[#F4F1EA]'
            }`}
            aria-label="Main Navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              const isLightBg =
                pathname === '/about' ||
                pathname.startsWith('/works/') ||
                pathname === '/cv';
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
        )}

        {/* Mobile Menu Button — on inner pages */}
        {!isHome && (
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden pointer-events-auto p-2.5 rounded-full bg-transparent shadow-[0_6px_24px_rgba(0,0,0,0.16)] flex flex-col justify-center gap-1.5 w-10 h-10 border border-transparent ${
              isLightPage ? 'text-[#1C120C]' : 'text-[#F4F1EA]'
            }`}
            aria-label="Toggle Navigation"
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={`block w-5 h-0.5 transition-transform duration-300 origin-center ${
                isLightPage ? 'bg-[#1C120C]' : 'bg-[#F4F1EA]'
              } ${mobileMenuOpen ? 'rotate-45 translate-y-[3px]' : ''}`}
            />
            <span
              className={`block w-5 h-0.5 transition-transform duration-300 origin-center ${
                isLightPage ? 'bg-[#1C120C]' : 'bg-[#F4F1EA]'
              } ${mobileMenuOpen ? '-rotate-45 -translate-y-[3px]' : ''}`}
            />
          </button>
        )}
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && !isHome && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className={`md:hidden pointer-events-auto mt-4 mx-4 p-6 rounded-2xl bg-transparent flex flex-col gap-3 border border-transparent shadow-[0_6px_24px_rgba(0,0,0,0.16)] ${
              isLightPage ? 'text-[#1C120C]' : 'text-[#F4F1EA]'
            }`}
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-medium tracking-wide py-2 border-b border-black/10 last:border-b-0 ${
                  pathname === item.href ? (isLightPage ? 'text-[#1C120C]' : 'text-[#F4F1EA]') : isLightPage ? 'text-[#1C120C]/70' : 'text-[#F4F1EA]/70'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
