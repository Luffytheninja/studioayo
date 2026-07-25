'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';
import { ArrowLeft, Download, ExternalLink } from 'lucide-react';
import { TEAM } from '@/content/team';

export default function CVPage() {
  return (
    <div className="pt-32 pb-16 px-6 md:px-12 bg-[#070708] min-h-screen text-[#F4F1EA]">
      <div className="max-w-5xl mx-auto">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity mb-8"
          data-cursor-text="Home"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#F4F1EA]/15 mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF4D4D] block mb-2">
              Studio Curriculum Vitae
            </span>
            <h1 className="text-5xl sm:text-7xl font-normal tracking-tight">
              Studio Ayo — C.V
            </h1>
          </div>
          <div>
            <a
              href="/media/studio-dossier.pdf"
              download
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#F4F1EA] text-[#070708] font-medium hover:bg-white transition-colors"
              data-cursor-text="Download"
            >
              <span>Download Studio Dossier</span>
              <Download className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Core Capabilities */}
        <section className="mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#F4F1EA]/50 mb-6">
            Core Disciplines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-none bg-white border border-[#1C120C] text-[#1C120C] shadow-[8px_8px_24px_rgba(28,18,12,0.12)]">
              <h3 className="text-2xl font-normal mb-3 text-[#1C120C]">Creative Direction</h3>
              <p className="text-sm text-[#1C120C]/80 font-light leading-relaxed">
                Brand design systems, editorial visual identities, luxury typography, and spatial art direction.
              </p>
            </div>
            <div className="p-6 rounded-none bg-white border border-[#1C120C] text-[#1C120C] shadow-[8px_8px_24px_rgba(28,18,12,0.12)]">
              <h3 className="text-2xl font-normal mb-3 text-[#1C120C]">Frontend Architecture</h3>
              <p className="text-sm text-[#1C120C]/80 font-light leading-relaxed">
                Next.js 15, TypeScript, Tailwind CSS v4, WebGL / Three.js 2.5D rendering, and Lenis physics.
              </p>
            </div>
            <div className="p-6 rounded-none bg-white border border-[#1C120C] text-[#1C120C] shadow-[8px_8px_24px_rgba(28,18,12,0.12)]">
              <h3 className="text-2xl font-normal mb-3 text-[#1C120C]">3D & Motion</h3>
              <p className="text-sm text-[#1C120C]/80 font-light leading-relaxed">
                Tactile product modeling, Blender material synthesis, kinetic typography, and R3F interactive scenes.
              </p>
            </div>
          </div>
        </section>

        {/* Team Roster */}
        <section className="mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#F4F1EA]/50 mb-6">
            Leadership & Roster
          </h2>
          <div className="divide-y divide-[#F4F1EA]/10 border-t border-b border-[#F4F1EA]/10">
            {TEAM.map((member) => (
              <div key={member.id} className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-normal">{member.name}</h3>
                  <p className="text-sm text-[#FF4D4D] font-light">{member.role}</p>
                </div>
                <div className="text-sm text-[#F4F1EA]/70 max-w-md font-light">
                  {member.bio}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Stack */}
        <section className="mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#F4F1EA]/50 mb-6">
            Technical Stack & Standards
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              'Next.js 15 App Router',
              'React 19',
              'TypeScript Strict',
              'Tailwind CSS v4',
              'React Three Fiber (R3F)',
              'Three.js',
              'Framer Motion',
              'GSAP / ScrollTrigger',
              'Lenis Smooth Scroll',
              'Zod Validation',
              'React Hook Form',
              'W3C ARIA Accessibility',
            ].map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full border border-[#F4F1EA]/15 text-xs font-mono text-[#F4F1EA]/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
