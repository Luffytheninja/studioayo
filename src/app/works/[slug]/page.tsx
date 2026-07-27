'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Footer from '@/components/ui/Footer';
import { PROJECTS } from '@/content/projects';
import { ArrowLeft, Play, Film } from 'lucide-react';

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const resolvedParams = use(params);
  const project = PROJECTS.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const isLightPage = project.slug === 'ountodun';
  const isMobileApp = project.slug === 'hachi';
  const hasVideo = !!project.videoUrl;

  return (
    <div
      className={`pt-32 pb-16 px-6 md:px-12 min-h-screen transition-colors duration-500 ${
        isLightPage ? 'bg-[#F5EAD8] text-[#1C120C]' : 'bg-[#070708] text-[#F4F1EA]'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Back Link */}
        <Link
          href="/works"
          className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity mb-8"
          data-cursor-text="Back"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Works</span>
        </Link>

        {/* Dynamic Editorial Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-20 items-start">
          
          {/* Left Column: Title & Description */}
          <div className="lg:col-span-7 space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl md:text-8xl font-normal tracking-tight leading-none"
            >
              {project.title}
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg opacity-85 font-light leading-relaxed max-w-2xl space-y-4"
            >
              <p>{project.overview || project.description}</p>
              {project.slug === 'ountodun' && (
                <p className="italic text-sm opacity-70">
                  Every asset has been selected to convey luxury, craftsmanship, and the heritage of African design in a modern format.
                </p>
              )}
              {project.slug === 'hachi' && (
                <p className="italic text-sm opacity-70">
                  The retro-futuristic styling focuses on high usability and dynamic feedback loops suitable for everyday banking.
                </p>
              )}
            </motion.div>
          </div>

          {/* Right Column: Sharp Metadata Detail Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`lg:col-span-5 p-8 rounded-none border shadow-2xl ${
              isLightPage 
                ? 'bg-white border-[#1C120C] text-[#1C120C]' 
                : 'bg-[#0D0D0F] border-[#F4F1EA]/10 text-[#F4F1EA]'
            }`}
          >
            <h2 className="text-2xl font-normal mb-6 tracking-tight">Project Details</h2>
            
            <div className={`border-t border-b divide-y text-sm font-light py-2 ${
              isLightPage 
                ? 'border-[#1C120C]/15 divide-[#1C120C]/10' 
                : 'border-white/15 divide-white/10'
            }`}>
              <div className="py-3 flex items-center justify-between">
                <span className="font-semibold text-base">Client</span>
                <span>{project.client || project.title}</span>
              </div>
              <div className="py-3 flex items-center justify-between">
                <span className="font-semibold text-base">Timeline / Year</span>
                <span className="font-mono">{project.year}</span>
              </div>
              <div className="py-3 flex flex-wrap gap-2 items-center justify-between">
                <span className="font-semibold text-base">Categories</span>
                <div className="flex flex-wrap gap-1.5 justify-end">
                  {project.categories.map((cat, idx) => (
                    <span key={idx} className={`px-2 py-0.5 text-xs font-mono border ${
                      isLightPage ? 'border-[#1C120C]/35' : 'border-white/20'
                    }`}>
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
              <div className="py-3">
                <span className="block font-semibold text-base mb-2">Creative Team</span>
                <div className="space-y-1">
                  {project.credits.map((credit, idx) => (
                    <div key={idx} className="flex justify-between opacity-80 text-xs">
                      <span>{credit.role}</span>
                      <span className="font-medium">{credit.person}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Media Block: Prioritize media in original format */}
        <section className="mb-24 space-y-16">
          {/* 1. Core looping video (widescreen player) */}
          {hasVideo && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[16/9] bg-neutral-900 border border-[#1C120C]/20 dark:border-white/10 shadow-2xl overflow-hidden"
            >
              <video
                src={project.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                controls
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-none border border-white/10 text-white text-[10px] font-mono uppercase tracking-widest flex items-center gap-2 pointer-events-none select-none">
                <Film className="w-3 h-3 text-[#FF4D4D]" />
                <span>Original Video Render</span>
              </div>
            </motion.div>
          )}

          {/* 2. Project Gallery Section */}
          {isMobileApp ? (
            /* Mobile app screenshots grid: original portrait aspect ratios */
            <div>
              <div className="text-center mb-10">
                <h3 className="text-xl font-normal">App Interface Flow</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                {project.galleryImages?.map((img, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="relative aspect-[9/19.5] bg-[#0E0E11] border border-[#F4F1EA]/10 hover:border-[#FF4D4D] transition-colors shadow-2xl overflow-hidden"
                  >
                    <Image
                      src={img}
                      alt={`App Screen ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 240px"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            /* Stacked visual feed: each image in its true aspect ratio */
            <div className="space-y-12 sm:space-y-20 max-w-5xl mx-auto">
              {project.galleryImages && project.galleryImages.length > 0 ? (
                project.galleryImages.map((img, idx) => {
                  // Determine layout classes based on index to create interest
                  const isWide = img.includes('banner') || idx === 0;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className={`relative w-full border overflow-hidden bg-neutral-900/40 ${
                        isWide ? 'aspect-[16/9]' : 'aspect-square md:aspect-[4/3] max-w-3xl mx-auto'
                      } ${isLightPage ? 'border-[#1C120C]' : 'border-white/10 shadow-2xl'}`}
                    >
                      <Image
                        src={img}
                        alt={`Gallery Asset ${idx + 1}`}
                        fill
                        className="object-cover hover:scale-[1.02] transition-transform duration-1000"
                        sizes="100vw"
                      />
                    </motion.div>
                  );
                })
              ) : (
                /* Fallback if no gallery images listed */
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`relative w-full aspect-[16/9] border overflow-hidden ${
                    isLightPage ? 'border-[#1C120C]' : 'border-white/10 shadow-2xl'
                  }`}
                >
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </motion.div>
              )}
            </div>
          )}
        </section>

        {/* Color Palette Spec Block */}
        {project.colorPalette && (
          <section className={`py-12 border-t mb-24 max-w-5xl mx-auto ${
            isLightPage ? 'border-[#1C120C]/15' : 'border-white/15'
          }`}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-center">
              {project.colorPalette.map((color, idx) => (
                <div key={idx} className="flex flex-col items-center gap-3">
                  <div
                    className={`w-full aspect-[2/3] max-w-[140px] shadow-2xl border ${
                      isLightPage ? 'border-[#1C120C]' : 'border-white/10'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="text-center font-mono text-xs uppercase tracking-widest">
                    <span className="block font-semibold">{color.name}</span>
                    <span className="opacity-60">{color.hex}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Retrospective / Testimonial Block */}
        {project.review && (
          <section className={`py-16 border-t max-w-4xl mx-auto text-center ${
            isLightPage ? 'border-[#1C120C]/15' : 'border-white/15'
          }`}>
            <blockquote className="text-2xl sm:text-3xl font-light leading-relaxed italic mb-8">
              &quot;{project.review.quote}&quot;
            </blockquote>
            <cite className="block not-italic font-mono text-xs uppercase tracking-widest opacity-70">
              — {project.review.author} • <span className="text-[#FF4D4D]">{project.review.title}</span>
            </cite>
          </section>
        )}

      </div>

      <Footer />
    </div>
  );
}
