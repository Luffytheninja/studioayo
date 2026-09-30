'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import Footer from '@/components/ui/Footer';
import ContactFormModal from '@/components/contact/ContactFormModal';
import { SERVICES } from '@/content/services';
import { STUDIO_INFO } from '@/content/studio';

const PROCESS_STEPS = [
  { num: '01', title: 'Discovery Call', desc: 'We learn your business, audience, goals, and challenges in a focused 30-minute call.' },
  { num: '02', title: 'Strategy & Scope', desc: 'We draft a precise project roadmap with clear deliverables, milestones, and investment transparency.' },
  { num: '03', title: 'Art Direction', desc: 'We craft the visual universe — editorial moodboards, typography systems, and wireframe prototypes.' },
  { num: '04', title: 'Design & Engineering', desc: 'Figma to production-grade Next.js. Mobile-first, 60fps, Lighthouse 95+ performance standard.' },
  { num: '05', title: 'Review & Refinement', desc: 'Two structured revision rounds with detailed rationale, no guesswork.' },
  { num: '06', title: 'Launch & Handoff', desc: 'Zero-downtime deployment, SEO verification, analytics setup, and full asset documentation.' },
];

const SERVICES_FAQS = [
  {
    question: 'How long does a web design & development project take?',
    answer: 'A full flagship website typically takes 4–8 weeks. Design-only scopes are 2–3 weeks. Larger builds with custom illustration or 3D elements may extend to 10–12 weeks. We always agree timelines upfront.',
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Yes. We are based in Lagos but partner with clients in London, New York, Toronto, and globally. All collaboration is remote-first via Figma, Notion, Loom, and direct comms.',
  },
  {
    question: 'Do you design AND develop, or just design?',
    answer: 'Both. We design in Figma and engineer in Next.js/TypeScript, so you get one unified studio that owns the entire process from wireframe to live website.',
  },
  {
    question: 'What is the minimum investment for a project?',
    answer: 'Our smallest standalone engagements start at $2,500 / ₦2,500,000. Full flagship websites with development are typically $5,000–$12,000+. All pricing is transparent and agreed before any work begins.',
  },
  {
    question: 'Can I hire Studio Ayo on a monthly retainer?',
    answer: 'Yes. Our dedicated studio retainer is ideal for funded startups and growing brands that need continuous web evolution, illustration, and performance tuning without building an in-house team.',
  },
  {
    question: 'Do you build Shopify or CMS-powered stores?',
    answer: 'Yes. We design and build custom Shopify experiences and integrate with headless CMS platforms. Ountodun is a live example of a Studio Ayo Shopify identity + e-commerce build.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-[#F4F1EA]/10 py-5 transition-all duration-300">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left text-base sm:text-lg font-light hover:text-[#FF4D4D] transition-colors"
      >
        <span>{question}</span>
        <span className="ml-4 flex-shrink-0">
          {isOpen ? <Minus className="w-4 h-4 text-[#FF4D4D]" /> : <Plus className="w-4 h-4 text-[#F4F1EA]/50" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1, marginTop: '1rem' }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-sm sm:text-base text-[#F4F1EA]/70 leading-relaxed font-light">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <div className="pt-28 sm:pt-32 pb-16 px-6 md:px-12 bg-[#070708] min-h-screen text-[#F4F1EA]">
      <div className="max-w-7xl mx-auto">

        {/* ── Hero Header ── */}
        <div className="mb-24 sm:mb-32">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FF4D4D] block mb-4">
            What We Build
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-7xl md:text-8xl font-normal tracking-tight mb-8 leading-tight"
          >
            Services &amp;<br />Pricing
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start max-w-5xl"
          >
            <div className="md:col-span-5 text-xl sm:text-2xl font-normal text-[#FF4D4D] leading-snug">
              Focused on web. Built for impact.
            </div>
            <div className="md:col-span-7 text-base sm:text-lg text-[#F4F1EA]/75 font-light leading-relaxed space-y-4">
              <p>
                We concentrate our entire creative and technical energy on web design, web development,
                bespoke illustration, and selective 3D design. No agency bloat.
                Every service is precisely scoped, priced transparently, and executed to a global benchmark.
              </p>
              <p>
                We also build our own software products — Hachi is our proprietary fintech platform,
                and the proof of concept for what we can ship for ambitious clients.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── Services Breakdown ── */}
        <div className="space-y-28 sm:space-y-36 mb-32">
          {SERVICES.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 pt-16 border-t border-[#F4F1EA]/15"
            >
              {/* Left: Title, Description, Tags */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-[#F4F1EA]/40 uppercase tracking-widest block mb-2">
                    0{index + 1} / Service
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight mb-5 text-[#F4F1EA] leading-tight">
                    {cat.title}
                  </h2>
                  <p className="text-base text-[#F4F1EA]/75 font-light leading-relaxed mb-8 max-w-md">
                    {cat.description}
                  </p>

                  {cat.bestForItems && (
                    <div className="mb-8">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#F4F1EA]/40 block mb-3">
                        {cat.bestForLabel || 'Ideal For'}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {cat.bestForItems.map((item) => (
                          <span
                            key={item}
                            className="text-xs font-normal px-3 py-1.5 bg-[#F4F1EA]/5 border border-[#F4F1EA]/15 text-[#F4F1EA]/90 rounded-full tracking-wide"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setSelectedService(cat.title)}
                  className="inline-flex items-center gap-2 text-base font-normal text-[#FF4D4D] hover:text-[#F4F1EA] underline underline-offset-4 transition-colors cursor-pointer mt-4"
                >
                  <span>Start a Conversation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              {/* Right: Deliverables + Pricing + Preview */}
              <div className="lg:col-span-7 flex flex-col gap-6">

                {/* Includes Chips */}
                {cat.includesItems && (
                  <div>
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-[#F4F1EA]/40 mb-3">
                      {cat.includesLabel || 'What We Deliver'}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {cat.includesItems.map((item) => (
                        <span
                          key={item}
                          className="text-xs font-mono px-3 py-1.5 bg-[#0D0D10] border border-[#F4F1EA]/12 text-[#F4F1EA]/80 hover:border-[#FF4D4D]/40 transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Deliverables Chips */}
                {cat.deliverablesItems && (
                  <div>
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-[#F4F1EA]/40 mb-3">
                      {cat.deliverablesLabel || 'Final Deliverables'}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {cat.deliverablesItems.map((item) => (
                        <span
                          key={item}
                          className="text-xs font-mono px-3 py-1.5 bg-[#0D0D10] border border-[#25D366]/25 text-[#25D366] hover:border-[#25D366]/60 transition-colors flex items-center gap-1.5"
                        >
                          <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Pricing */}
                <div className="border-t border-[#F4F1EA]/10 pt-6 space-y-4">
                  {cat.pricing.map((price, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <span className="text-xs font-mono text-[#F4F1EA]/50 uppercase tracking-widest">
                        {price.label}
                      </span>
                      <div className="flex flex-wrap gap-3 items-center">
                        {price.ranges.map((range, ri) => (
                          <span
                            key={ri}
                            className="font-mono text-sm sm:text-base text-[#25D366] bg-[#25D366]/8 px-4 py-1.5 border border-[#25D366]/20"
                          >
                            {range.amount}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Signature Case Study Preview */}
                {cat.signatureImage && (
                  <div className="mt-4">
                    <Link
                      href={`/works/${cat.signatureProject || '#'}`}
                      className="group block relative w-full aspect-[21/9] overflow-hidden bg-[#0A0A0C] border border-[#F4F1EA]/10 select-none cursor-pointer"
                      data-cursor-text="View Project"
                    >
                      <Image
                        src={cat.signatureImage}
                        alt={`${cat.title} Case Study Preview`}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-50 group-hover:opacity-100"
                        sizes="(max-width: 1024px) 100vw, 750px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                        <div className="flex items-center justify-between w-full">
                          <span className="text-sm font-medium text-white group-hover:underline decoration-[#FF4D4D] underline-offset-4">
                            View Case Study →
                          </span>
                          <ArrowUpRight className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Our Process ── */}
        <section className="py-20 border-t border-[#F4F1EA]/15 mb-28">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#FF4D4D] block mb-3">How It Works</span>
              <h2 className="text-4xl sm:text-6xl font-normal tracking-tight">Our Process</h2>
            </div>
            <p className="max-w-sm text-base text-[#F4F1EA]/60 font-light leading-relaxed">
              Structured, transparent, and obsessively quality-controlled at every phase.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className="bg-[#0D0D10] border border-[#F4F1EA]/10 p-7 flex flex-col justify-between min-h-[200px] hover:border-[#FF4D4D]/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-mono text-[#FF4D4D]">{step.num}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#F4F1EA] mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-[#F4F1EA]/65 font-light leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Marquee Clients Strip ── */}
        <section className="py-10 border-t border-b border-[#F4F1EA]/10 mb-28 overflow-hidden select-none bg-[#F4F1EA]/[0.02]">
          <div className="relative w-full overflow-hidden flex items-center">
            <div className="animate-marquee whitespace-nowrap flex gap-8 items-center text-xs font-mono uppercase tracking-widest text-[#F4F1EA]/40">
              <span>{STUDIO_INFO.trustedClients.join('  •  ')}  •  Startups  •  Luxury Brands  •  Fashion & Apparel  •  Fintech & Banking  •  E-Commerce  •  Creative Culture  •  Art & Music</span>
              <span className="text-[#FF4D4D]">  •  </span>
              <span>{STUDIO_INFO.trustedClients.join('  •  ')}  •  Startups  •  Luxury Brands  •  Fashion & Apparel  •  Fintech & Banking  •  E-Commerce  •  Creative Culture  •  Art & Music</span>
            </div>
          </div>
        </section>

        {/* ── FAQ Section ── */}
        <section className="max-w-4xl mx-auto mb-32">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight">Frequently Asked Questions</h2>
          </div>
          <div className="border-t border-[#F4F1EA]/10">
            {SERVICES_FAQS.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full bg-[#F4F1EA] border border-[#1C120C]/10 p-12 sm:p-20 text-center flex flex-col items-center justify-center relative overflow-hidden text-[#1C120C]"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF4D4D] block mb-4">
              Let&apos;s Build
            </span>
            <h2 className="text-4xl sm:text-6xl font-normal tracking-tight mb-6 max-w-3xl leading-tight text-[#1C120C]">
              Ready to build a website that works as hard as you do?
            </h2>
            <p className="text-base text-[#1C120C]/70 font-light leading-relaxed max-w-xl mb-10">
              Tell us what you&apos;re building, and we&apos;ll respond within one business day with a clear scope and investment.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => setSelectedService('Web Design & Engineering')}
                className="px-8 py-4 bg-[#1C120C] text-white font-mono text-xs uppercase tracking-widest hover:bg-[#FF4D4D] transition-colors cursor-pointer w-full sm:w-auto"
              >
                Start a Project
              </button>
              <Link
                href="/works"
                className="px-8 py-4 border border-[#1C120C] text-[#1C120C] font-mono text-xs uppercase tracking-widest hover:bg-[#1C120C] hover:text-white transition-colors w-full sm:w-auto text-center inline-flex items-center justify-center gap-2"
              >
                <span>View Our Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </section>

      </div>

      <ContactFormModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        defaultService={selectedService || 'Web Design & Engineering'}
      />

      <Footer />
    </div>
  );
}
