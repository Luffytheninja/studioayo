'use client';

import { use } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Footer from '@/components/ui/Footer';
import { PROJECTS } from '@/content/projects';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Film,
  Box,
  CheckCircle2,
  Sparkles,
  Layers,
  Code2,
  Palette,
  Lightbulb,
} from 'lucide-react';

const ModelViewer3D = dynamic(() => import('@/components/works/ModelViewer3D'), {
  ssr: false,
  loading: () => (
    <div className="relative w-full aspect-[4/3] bg-[#0A0A0C] border border-white/10 flex items-center justify-center">
      <div className="w-10 h-10 rounded-full border-2 border-white/10 border-t-[#FF4D4D] animate-spin" />
    </div>
  ),
});

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const resolvedParams = use(params);
  const currentIndex = PROJECTS.findIndex((p) => p.slug === resolvedParams.slug);

  if (currentIndex === -1) {
    notFound();
  }

  const project = PROJECTS[currentIndex];
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : PROJECTS[0];

  const isLightPage = project.slug === 'ountodun';
  const isMobileApp = project.slug === 'hachi';
  const hasVideo = !!project.videoUrl;
  const hasModel = !!project.modelUrl;

  return (
    <div
      className={`pt-28 sm:pt-36 pb-20 px-6 sm:px-10 md:px-16 min-h-screen transition-colors duration-500 ${
        isLightPage ? 'bg-[#F5EAD8] text-[#1C120C]' : 'bg-[#070708] text-[#F4F1EA]'
      }`}
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Top Navigation / Breadcrumbs ── */}
        <div className="flex items-center justify-between gap-4 mb-10 pb-6 border-b border-current/10">
          <Link
            href="/works"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity"
            data-cursor-text="Back"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Works</span>
          </Link>

          <div className="flex items-center gap-3">
            {project.status && (
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono uppercase tracking-widest rounded-full border ${
                  project.status.toLowerCase().includes('live')
                    ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                    : project.status.toLowerCase().includes('mvp')
                    ? 'border-sky-500/30 bg-sky-500/10 text-sky-400'
                    : 'border-amber-500/30 bg-amber-500/10 text-amber-500'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    project.status.toLowerCase().includes('live')
                      ? 'bg-emerald-400 animate-pulse'
                      : project.status.toLowerCase().includes('mvp')
                      ? 'bg-sky-400 animate-pulse'
                      : 'bg-amber-400'
                  }`}
                />
                {project.status}
              </span>
            )}
            <span className="text-xs font-mono opacity-40">
              {String(currentIndex + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* ── Editorial Case Study Header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 items-start">
          
          {/* Left: Title, Subtitle, Overview & Live Link */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF4D4D] block mb-3">
                Case Study · {project.client || project.title}
              </span>
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-normal tracking-tight leading-[1.02] font-brand">
                {project.title}
              </h1>
            </motion.div>

            {project.subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-xl sm:text-2xl font-light opacity-90 leading-snug font-serif italic"
              >
                {project.subtitle}
              </motion.p>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg opacity-85 font-light leading-relaxed max-w-2xl space-y-4"
            >
              <p>{project.overview || project.description}</p>
            </motion.div>

            {project.oneLiner && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className={`p-4 rounded-xl border-l-2 border-[#FF4D4D] text-sm font-mono tracking-wide ${
                  isLightPage ? 'bg-[#1C120C]/5 text-[#1C120C]' : 'bg-[#F4F1EA]/5 text-[#F4F1EA]'
                }`}
              >
                {project.oneLiner}
              </motion.div>
            )}

            {project.liveUrl && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="pt-2"
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono uppercase tracking-widest font-semibold transition-all shadow-lg ${
                    isLightPage
                      ? 'bg-[#1C120C] text-[#F5EAD8] hover:bg-black'
                      : 'bg-[#F4F1EA] text-[#070708] hover:bg-white shadow-[0_10px_30px_rgba(244,241,234,0.15)]'
                  }`}
                >
                  <span>Visit Live Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            )}
          </div>

          {/* Right: Project Metadata Specification Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`lg:col-span-5 p-8 rounded-2xl border shadow-2xl ${
              isLightPage
                ? 'bg-white border-[#1C120C]/15 text-[#1C120C]'
                : 'bg-[#0E0E12] border-white/10 text-[#F4F1EA]'
            }`}
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-current/10">
              <h2 className="text-xl font-normal tracking-tight font-brand">Project Details</h2>
              <span className="text-xs font-mono opacity-50">{project.year}</span>
            </div>

            <div className="divide-y divide-current/10 text-xs font-light">
              {project.client && (
                <div className="py-3 flex items-center justify-between">
                  <span className="font-mono uppercase tracking-wider opacity-60">Client / Org</span>
                  <span className="font-medium text-right">{project.client}</span>
                </div>
              )}

              {project.role && (
                <div className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="font-mono uppercase tracking-wider opacity-60">Role</span>
                  <span className="font-medium text-right">{project.role}</span>
                </div>
              )}

              {project.platform && (
                <div className="py-3 flex items-center justify-between">
                  <span className="font-mono uppercase tracking-wider opacity-60">Platform</span>
                  <span className="font-mono font-medium">{project.platform}</span>
                </div>
              )}

              {project.status && (
                <div className="py-3 flex items-center justify-between">
                  <span className="font-mono uppercase tracking-wider opacity-60">Status</span>
                  <span className="font-mono font-medium">{project.status}</span>
                </div>
              )}

              {project.scope && project.scope.length > 0 && (
                <div className="py-3">
                  <span className="block font-mono uppercase tracking-wider opacity-60 mb-2">Scope</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.scope.map((s, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[10px] font-mono rounded-md border border-current/15 opacity-80"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.tools && project.tools.length > 0 && (
                <div className="py-3">
                  <span className="block font-mono uppercase tracking-wider opacity-60 mb-2">Tools</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[10px] font-mono rounded-md border border-[#FF4D4D]/30 text-[#FF4D4D] font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.deliverables && project.deliverables.length > 0 && (
                <div className="py-3">
                  <span className="block font-mono uppercase tracking-wider opacity-60 mb-2">Deliverables</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.deliverables.map((d, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[10px] font-mono rounded-md border border-current/15 opacity-80"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.credits && project.credits.length > 0 && (
                <div className="py-3">
                  <span className="block font-mono uppercase tracking-wider opacity-60 mb-2">Creative Team</span>
                  <div className="space-y-1.5">
                    {project.credits.map((credit, idx) => (
                      <div key={idx} className="flex justify-between items-center opacity-85 text-[11px]">
                        <span className="opacity-70">{credit.role}</span>
                        <span className="font-medium">{credit.person}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* ── Hero Media Block: Video / 3D Model / Cover ── */}
        <section className="mb-24 space-y-16">
          {hasVideo && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border ${
                isLightPage ? 'border-[#1C120C]/20 bg-black/10' : 'border-white/10 bg-neutral-900'
              }`}
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
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 text-white text-[10px] font-mono uppercase tracking-widest flex items-center gap-2 pointer-events-none select-none">
                <Film className="w-3 h-3 text-[#FF4D4D]" />
                <span>Original Motion Render</span>
              </div>
            </motion.div>
          )}

          {hasModel && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4 opacity-60">
                <Box className="w-4 h-4" />
                <span className="text-xs font-mono uppercase tracking-widest">Interactive 3D Model</span>
              </div>
              <ModelViewer3D modelUrl={project.modelUrl!} />
            </motion.div>
          )}

          {/* If no video and no 3D model, showcase banner */}
          {!hasVideo && !hasModel && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border shadow-2xl ${
                isLightPage ? 'border-[#1C120C]/20' : 'border-white/10'
              }`}
            >
              <Image
                src={project.bannerImage || project.thumbnail}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </motion.div>
          )}
        </section>

        {/* ── Case Study Narrative Chapters ── */}
        {project.sections && project.sections.length > 0 && (
          <section className="mb-28 max-w-4xl mx-auto space-y-16">
            <div className="border-t border-current/15 pt-12 mb-8">
              <span className="font-mono text-xs uppercase tracking-widest text-[#FF4D4D] block mb-2">
                Project Narrative
              </span>
              <h2 className="text-3xl sm:text-5xl font-normal tracking-tight font-brand">
                The Story Behind the Work.
              </h2>
            </div>

            <div className="space-y-16">
              {project.sections.map((section, idx) => (
                <motion.article
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7 }}
                  className="space-y-4"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-xs font-mono text-[#FF4D4D]">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div>
                      {section.subtitle && (
                        <span className="text-xs font-mono uppercase tracking-widest opacity-50 block mb-1">
                          {section.subtitle}
                        </span>
                      )}
                      <h3 className="text-2xl sm:text-3xl font-normal tracking-tight font-brand">
                        {section.title}
                      </h3>
                    </div>
                  </div>

                  <div className="pl-7 space-y-4 text-base sm:text-lg font-light leading-relaxed opacity-85">
                    {Array.isArray(section.content) ? (
                      section.content.map((p, pIdx) => {
                        // Check if paragraph contains bullet points
                        if (p.includes('\n•') || p.startsWith('•')) {
                          const lines = p.split('\n');
                          return (
                            <div key={pIdx} className="space-y-2 py-1">
                              {lines.map((line, lIdx) => (
                                <p
                                  key={lIdx}
                                  className={line.startsWith('•') ? 'pl-4 font-normal' : ''}
                                >
                                  {line}
                                </p>
                              ))}
                            </div>
                          );
                        }
                        return <p key={pIdx}>{p}</p>;
                      })
                    ) : (
                      <p>{section.content}</p>
                    )}

                    {section.items && section.items.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                        {section.items.map((item, itemIdx) => (
                          <div
                            key={itemIdx}
                            className={`p-4 rounded-xl border text-sm ${
                              isLightPage
                                ? 'bg-white/60 border-[#1C120C]/10'
                                : 'bg-[#121216] border-white/10'
                            }`}
                          >
                            <span className="text-[#FF4D4D] font-mono text-xs mr-2 font-bold">•</span>
                            <span className="leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
        )}

        {/* ── Role & Scope Breakdown ── */}
        {project.roleBreakdown && project.roleBreakdown.length > 0 && (
          <section className="mb-28 max-w-5xl mx-auto">
            <div className="border-t border-current/15 pt-12 mb-10">
              <span className="font-mono text-xs uppercase tracking-widest text-[#FF4D4D] block mb-2">
                Execution Matrix
              </span>
              <h2 className="text-3xl sm:text-5xl font-normal tracking-tight font-brand mb-4">
                What I Worked On.
              </h2>
              <p className="text-base opacity-70 font-light max-w-2xl">
                A multidisciplinary contribution spanning structural research, design systems, and frontend engineering.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.roleBreakdown.map((block, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className={`p-6 rounded-2xl border flex flex-col justify-between ${
                    isLightPage
                      ? 'bg-white border-[#1C120C]/15 shadow-sm'
                      : 'bg-[#121216] border-white/10 shadow-xl'
                  }`}
                >
                  <div>
                    <span className="text-xs font-mono text-[#FF4D4D] block mb-2">
                      0{idx + 1} / DISCIPLINE
                    </span>
                    <h3 className="text-lg font-medium font-brand mb-4">{block.category}</h3>
                    <ul className="space-y-2 text-xs font-light opacity-80">
                      {block.tasks.map((task, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2">
                          <span className="text-[#FF4D4D] mt-0.5">•</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* ── Key Takeaways & Lessons Learned ── */}
        {project.keyTakeaways && project.keyTakeaways.length > 0 && (
          <section className="mb-28 max-w-5xl mx-auto">
            <div className="border-t border-current/15 pt-12 mb-10">
              <span className="font-mono text-xs uppercase tracking-widest text-[#FF4D4D] block mb-2">
                Retrospective
              </span>
              <h2 className="text-3xl sm:text-5xl font-normal tracking-tight font-brand mb-4">
                What I Learned.
              </h2>
              <p className="text-base opacity-70 font-light max-w-2xl">
                Key product insights, system learnings, and architectural principles distilled from the project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.keyTakeaways.map((takeaway, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`p-8 rounded-2xl border flex flex-col justify-between ${
                    isLightPage
                      ? 'bg-white border-[#1C120C]/15'
                      : 'bg-[#121216] border-white/10'
                  }`}
                >
                  <div>
                    <span className="text-2xl font-light text-[#FF4D4D] font-mono block mb-3">
                      {takeaway.number || `0${idx + 1}`}
                    </span>
                    <h3 className="text-xl font-normal font-brand mb-3 leading-snug">
                      {takeaway.title}
                    </h3>
                    <p className="text-sm font-light opacity-80 leading-relaxed">
                      {takeaway.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* ── Project Visual Gallery / App Screen Feed ── */}
        <section className="mb-28 space-y-12">
          <div className="border-t border-current/15 pt-12 mb-8 max-w-5xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF4D4D] block mb-2">
              Visual Archive
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight font-brand">
              {isMobileApp ? 'App Interface Flows & Mobile Architecture' : 'Selected Visual Assets'}
            </h2>
          </div>

          {isMobileApp ? (
            /* Mobile app screens grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {project.galleryImages?.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="relative aspect-[9/19.5] rounded-2xl bg-[#0E0E11] border border-white/10 hover:border-[#FF4D4D] transition-colors shadow-2xl overflow-hidden"
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
          ) : (
            /* Stacked visual showcase */
            <div className="space-y-12 sm:space-y-20 max-w-5xl mx-auto">
              {project.galleryImages && project.galleryImages.length > 0 ? (
                project.galleryImages.map((img, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={`w-full rounded-2xl border overflow-hidden bg-neutral-900/40 shadow-2xl ${
                      isLightPage ? 'border-[#1C120C]/15' : 'border-white/10'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Gallery Asset ${idx + 1}`}
                      width={0}
                      height={0}
                      sizes="(max-width: 768px) 100vw, 80vw"
                      className="w-full h-auto block hover:scale-[1.01] transition-transform duration-700"
                    />
                  </motion.div>
                ))
              ) : null}
            </div>
          )}
        </section>

        {/* ── Typography & Color Palette Block ── */}
        {(project.typography || project.colorPalette) && (
          <section className="mb-28 max-w-5xl mx-auto border-t border-current/15 pt-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF4D4D] block mb-2">
              Design System Tokens
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight font-brand mb-10">
              Identity Specifications
            </h2>

            {project.colorPalette && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-center mb-12">
                {project.colorPalette.map((color, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-3">
                    <div
                      className={`w-full aspect-[3/4] max-w-[160px] rounded-xl shadow-2xl border ${
                        isLightPage ? 'border-[#1C120C]/15' : 'border-white/10'
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
            )}
          </section>
        )}

        {/* ── Testimonial Block ── */}
        {project.review && (
          <section className="mb-28 py-16 border-t border-current/15 max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl sm:text-4xl font-light leading-relaxed italic mb-8 font-serif">
              &ldquo;{project.review.quote}&rdquo;
            </blockquote>
            <cite className="block not-italic font-mono text-xs uppercase tracking-widest opacity-70">
              — {project.review.author} • <span className="text-[#FF4D4D]">{project.review.title}</span>
            </cite>
          </section>
        )}

        {/* ── Next / Prev Project Navigation ── */}
        <div className="border-t border-current/15 pt-12 flex flex-col sm:flex-row items-center justify-between gap-8">
          <Link
            href={`/works/${prevProject.slug}`}
            className="group flex flex-col items-start gap-1"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest opacity-50 flex items-center gap-1.5 group-hover:text-[#FF4D4D] transition-colors">
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
              Previous Case Study
            </span>
            <span className="text-xl sm:text-2xl font-normal font-brand group-hover:underline">
              {prevProject.title}
            </span>
          </Link>

          <Link
            href="/works"
            className="px-6 py-3 rounded-full border border-current/20 hover:border-current text-xs font-mono uppercase tracking-widest transition-all"
          >
            All Works
          </Link>

          <Link
            href={`/works/${nextProject.slug}`}
            className="group flex flex-col items-end gap-1 text-right"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest opacity-50 flex items-center gap-1.5 group-hover:text-[#FF4D4D] transition-colors">
              Next Case Study
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="text-xl sm:text-2xl font-normal font-brand group-hover:underline">
              {nextProject.title}
            </span>
          </Link>
        </div>

      </div>

      <Footer />
    </div>
  );
}
