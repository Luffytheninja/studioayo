'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const isLightBg = pathname === '/about' || pathname.startsWith('/works/');

  return (
    <footer
      className={`w-full py-8 px-6 md:px-12 border-t font-mono text-xs transition-colors duration-300 ${
        isLightBg
          ? 'border-[#1C120C]/10 text-[#1C120C]/50 bg-transparent'
          : 'border-[#F4F1EA]/10 text-[#F4F1EA]/50 bg-[#070708]'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Mobile: Center-aligned */}
        <div className="sm:hidden flex flex-col items-center justify-center gap-3 text-center">
          <span className="text-opacity-80">© 2026 Studio Ayo — Digital Web Studio</span>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/terms"
              className={`transition-colors duration-200 ${
                isLightBg ? 'hover:text-[#1C120C]' : 'hover:text-[#F4F1EA]'
              }`}
              data-cursor-text="Terms"
            >
              Terms of Services
            </Link>
            <span className="opacity-30">·</span>
            <Link
              href="/privacy"
              className={`transition-colors duration-200 ${
                isLightBg ? 'hover:text-[#1C120C]' : 'hover:text-[#F4F1EA]'
              }`}
              data-cursor-text="Privacy"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Desktop: 3-column layout */}
        <div className="hidden sm:grid sm:grid-cols-3 items-center">
          <div className="flex items-center justify-start">
            <Link
              href="/terms"
              className={`transition-colors duration-200 ${
                isLightBg ? 'hover:text-[#1C120C]' : 'hover:text-[#F4F1EA]'
              }`}
              data-cursor-text="Terms"
            >
              Terms of Services
            </Link>
          </div>
          <div className="text-center">
            <span>© 2026 Studio Ayo — Digital Web Studio</span>
          </div>
          <div className="flex items-center justify-end">
            <Link
              href="/privacy"
              className={`transition-colors duration-200 ${
                isLightBg ? 'hover:text-[#1C120C]' : 'hover:text-[#F4F1EA]'
              }`}
              data-cursor-text="Privacy"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
