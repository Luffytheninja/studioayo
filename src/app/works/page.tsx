'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/ui/Footer';
import { PROJECTS } from '@/content/projects';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current?.play().catch(() => {});
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    videoRef.current?.pause();
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center border-b border-[#F4F1EA]/10 pb-20 lg:pb-28"
    >
      {/* Media Container */}
      <div
        className="lg:col-span-6 group relative aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-[#121215] border border-[#F4F1EA]/12 shadow-[0_20px_60px_rgba(0,0,0,0.6)] cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-cursor-text="Explore"
      >
        <Link href={`/works/${project.slug}`} className="block w-full h-full">
          <Image
            src={project.bannerImage || project.thumbnail}
            alt={project.title}
            fill
            className={`object-cover transition-transform duration-700 ease-out ${isHovered ? 'scale-105' : 'scale-100'}`}
            sizes="(max-width: 1024px) 100vw, 55vw"
          />

          {project.videoUrl && (
            <video
              ref={videoRef}
              src={project.videoUrl}
              muted
              loop
              playsInline
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

          <div className="absolute bottom-4 left-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-xs font-mono text-white bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
              View Case Study →
            </span>
          </div>
        </Link>
      </div>

      {/* Editorial Info */}
      <div className="lg:col-span-6 flex flex-col justify-between py-1">
        <div>
          {/* Category Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.categories.map((cat, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-[10px] font-mono uppercase tracking-widest bg-[#F4F1EA]/5 border border-[#F4F1EA]/12 rounded-full text-[#F4F1EA]/70"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Title */}
          <Link href={`/works/${project.slug}`} data-cursor-text="View" className="block group mb-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-normal text-[#F4F1EA] tracking-tight group-hover:text-[#FF4D4D] transition-colors duration-300">
              {project.title}
            </h2>
          </Link>

          {/* Year + Client */}
          <p className="text-xs font-mono text-[#F4F1EA]/50 mb-4 pb-4 border-b border-[#F4F1EA]/10">
            {project.year} · {project.client}
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#F4F1EA]/70 font-light leading-relaxed mb-6 max-w-md">
            {project.description}
          </p>

          {/* Review Quote (if available) */}
          {project.review && (
            <div className="p-4 rounded-xl bg-[#F4F1EA]/5 border-l-2 border-[#FF4D4D] mb-6">
              <p className="text-xs sm:text-sm italic font-serif text-[#F4F1EA]/85 leading-relaxed mb-1.5">
                &ldquo;{project.review.quote}&rdquo;
              </p>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#F4F1EA]/45">
                — {project.review.author}
              </span>
            </div>
          )}
        </div>

        <Link
          href={`/works/${project.slug}`}
          className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-[#F4F1EA]/80 hover:text-[#FF4D4D] transition-colors group"
          data-cursor-text="Case Study"
        >
          <span>Explore Case Study</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.article>
  );
}

// Separate the client work from the 3D/illustration explorations
const CLIENT_PROJECTS = PROJECTS.filter(
  (p) => !['retro-camera', 'cosmetic-container', 'vietnam-cities', 'selected-illustrations', 'want-magazine'].includes(p.slug)
);
const STUDIO_EXPLORATIONS = PROJECTS.filter(
  (p) => ['retro-camera', 'cosmetic-container', 'vietnam-cities', 'selected-illustrations', 'want-magazine'].includes(p.slug)
);

export default function WorksPage() {
  return (
    <div className="pt-28 sm:pt-32 pb-16 px-6 md:px-12 bg-[#070708] min-h-screen text-[#F4F1EA]">
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div className="mb-20 sm:mb-28">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FF4D4D] block mb-4">
            Client Work & Studio Projects
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl md:text-8xl font-normal text-[#F4F1EA] tracking-tight mb-8 leading-tight"
          >
            Selected Works
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#F4F1EA]/70 text-base sm:text-lg font-light leading-relaxed max-w-4xl"
          >
            <p>
              A curated collection of websites, digital products, editorial illustrations, and 3D work
              built by Studio Ayo. Each project is a case study in how thoughtful design and clean engineering
              intersect to create lasting impact.
            </p>
            <p>
              We work with brands, startups, creative collectives, and artists who believe
              their digital presence should reflect the full quality of what they do.
            </p>
          </motion.div>
        </div>

        {/* ── Featured Client Websites ── */}
        <div className="mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-[#F4F1EA]/40 block mb-12">
            Client Websites &amp; Digital Experiences
          </span>
          <div className="space-y-20 sm:space-y-32">
            {CLIENT_PROJECTS.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* ── Studio Explorations ── */}
        {STUDIO_EXPLORATIONS.length > 0 && (
          <div className="mt-28 sm:mt-36">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 pt-16 border-t border-[#F4F1EA]/10">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#F4F1EA]/40 block mb-2">
                  Studio Explorations
                </span>
                <h2 className="text-3xl sm:text-5xl font-normal tracking-tight">Illustration &amp; 3D Studies</h2>
              </div>
              <p className="text-sm text-[#F4F1EA]/55 font-light max-w-xs leading-relaxed">
                Experimental work, editorial illustration commissions, and 3D design explorations from the studio.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {STUDIO_EXPLORATIONS.map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.07 }}
                >
                  <Link href={`/works/${project.slug}`} className="group block">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#121215] border border-[#F4F1EA]/10 mb-4 shadow-lg group-hover:border-[#FF4D4D]/40 transition-colors">
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-normal text-[#F4F1EA] group-hover:text-[#FF4D4D] transition-colors mb-1">
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-1.5">
                          {project.categories.slice(0, 2).map((cat) => (
                            <span key={cat} className="text-[10px] font-mono text-[#F4F1EA]/50 uppercase tracking-wider">
                              {cat}
                            </span>
                          ))}
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#F4F1EA]/40 group-hover:text-[#FF4D4D] transition-colors flex-shrink-0 mt-1" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* ── CTA Strip ── */}
        <div className="mt-28 sm:mt-36 pt-16 border-t border-[#F4F1EA]/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-4xl font-normal font-brand mb-2">
              Want to be our next case study?
            </h3>
            <p className="text-sm text-[#F4F1EA]/60 font-light">
              We&apos;re onboarding select clients for Q4 2026 and beyond.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-[#F4F1EA] text-[#070708] hover:bg-white font-mono text-xs uppercase tracking-widest font-semibold transition-all shrink-0 flex items-center gap-2 shadow-lg"
          >
            Start a Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      <Footer />
    </div>
  );
}
