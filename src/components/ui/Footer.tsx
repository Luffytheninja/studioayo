'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const isLightBg = pathname === '/about' || pathname === '/cv' || pathname.startsWith('/works/');

  return (
    <footer
      className={`w-full py-8 px-6 md:px-12 border-t font-mono text-xs flex flex-col md:flex-row items-center justify-between gap-4 transition-colors duration-300 ${
        isLightBg
          ? 'border-[#1C120C]/10 text-[#1C120C]/50 bg-transparent'
          : 'border-[#F4F1EA]/10 text-[#F4F1EA]/50'
      }`}
    >
      <Link
        href="/terms"
        className={`transition-colors duration-200 ${
          isLightBg ? 'hover:text-[#1C120C]' : 'hover:text-[#F4F1EA]'
        }`}
        data-cursor-text="Terms"
      >
        Terms of Services
      </Link>
      <span>© 2026 Studio Ayo</span>
      <Link
        href="/privacy"
        className={`transition-colors duration-200 ${
          isLightBg ? 'hover:text-[#1C120C]' : 'hover:text-[#F4F1EA]'
        }`}
        data-cursor-text="Privacy"
      >
        Privacy Policy
      </Link>
    </footer>
  );
}

