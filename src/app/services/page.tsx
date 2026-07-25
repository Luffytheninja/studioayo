'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import Footer from '@/components/ui/Footer';
import ContactFormModal from '@/components/contact/ContactFormModal';
import { SERVICES } from '@/content/services';
import { STUDIO_INFO } from '@/content/studio';

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Discover',
    desc: 'Understanding your business, audience, goals, and challenges.'
  },
  {
    num: '02',
    title: 'Research',
    desc: 'Competitor analysis, user insights, market positioning, and cultural references.'
  },
  {
    num: '03',
    title: 'Strategy',
    desc: 'Defining creative direction, messaging, user journeys, and success metrics.'
  },
  {
    num: '04',
    title: 'Exploration',
    desc: 'Concept development through sketches, moodboards, wireframes, and prototypes.'
  },
  {
    num: '05',
    title: 'Production',
    desc: 'Design, development, photography, motion, illustration, or 3D execution.'
  },
  {
    num: '06',
    title: 'Presentation',
    desc: 'Collaborative reviews with polished mockups, prototypes, and rationale.'
  },
  {
    num: '07',
    title: 'Delivery',
    desc: 'Production-ready assets, documentation, launch support, and ongoing partnership.'
  }
];

const SERVICES_FAQS = [
  {
    question: 'How long does a project take?',
    answer: 'Most projects take between two and twelve weeks depending on scope and complexity.'
  },
  {
    question: 'Do you work internationally?',
    answer: 'Yes. We work with clients across Nigeria and around the world.'
  },
  {
    question: 'Do you develop websites as well?',
    answer: 'Yes. We design and build production-ready websites or collaborate directly with your development team.'
  },
  {
    question: 'Can I hire Studio AYO monthly?',
    answer: 'Absolutely. Our retainers provide ongoing design, branding, product, and creative support.'
  },
  {
    question: 'Do you offer custom quotes?',
    answer: 'Every project is tailored to your goals, timeline, and requirements. We\'ll recommend the right scope after an initial discovery call.'
  }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#F4F1EA]/10 py-5 transition-all duration-300">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left text-lg sm:text-xl font-light hover:text-[#FF4D4D] transition-colors"
      >
        <span>{question}</span>
        <span className="ml-4 text-xs font-mono">
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
            <p className="text-base text-[#F4F1EA]/70 leading-relaxed font-light">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-16 px-6 md:px-12 bg-[#070708] min-h-screen text-[#F4F1EA]">
      <div className="max-w-7xl mx-auto">
        
        {/* Title & Intro Section */}
        <div className="mb-28">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl sm:text-8xl md:text-9xl font-normal tracking-tight mb-8"
          >
            Services
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start max-w-5xl"
          >
            <div className="md:col-span-5 text-xl sm:text-2xl font-normal text-[#FF4D4D]">
              We design brands people remember.
            </div>
            <div className="md:col-span-7 text-base sm:text-lg text-[#F4F1EA]/80 font-light leading-relaxed space-y-4">
              <p>
                Studio AYO partners with ambitious startups, growing businesses, creators, and cultural organizations to craft memorable brands, digital experiences, and visual stories.
              </p>
              <p>
                Whether we're creating a visual identity, designing a digital product, directing a campaign, or producing imagery, every project begins with strategy and ends with work that feels intentional, timeless, and commercially effective.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Process Section */}
        <section className="py-16 border-t border-[#F4F1EA]/15 mb-28">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-12">
            <div>
              <span className="block font-mono text-xs uppercase tracking-widest text-[#FF4D4D] mb-3">Workflow</span>
              <h2 className="text-4xl sm:text-5xl font-normal tracking-tight">Our Process</h2>
            </div>
            <p className="max-w-md text-base sm:text-lg text-[#F4F1EA]/60 font-light">
              Every engagement follows the same structured framework to ensure exceptional results from discovery to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white border border-[#1C120C] p-6 rounded-none text-[#1C120C] shadow-[8px_8px_24px_rgba(28,18,12,0.06)] flex flex-col justify-between h-[200px]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono text-[#FF4D4D]">{step.num}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]"></span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1C120C] mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-[#1C120C]/70 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Services Breakdown List */}
        <div className="space-y-32 mb-32">
          {SERVICES.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pt-16 border-t border-[#F4F1EA]/15"
            >
              {/* Left Column: Title & Description */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight mb-6 text-white leading-tight">
                    {cat.title}
                  </h2>
                  <p className="text-base sm:text-lg text-[#F4F1EA]/75 font-light leading-relaxed mb-8 max-w-lg">
                    {cat.description}
                  </p>
                  
                  {/* Best For labels/badges */}
                  {cat.bestForItems && (
                    <div className="mb-8">
                      <span className="block text-xs font-mono uppercase tracking-widest text-[#FF4D4D] mb-3">
                        {cat.bestForLabel || 'Ideal For'}
                      </span>
                      <div className="flex flex-wrap gap-2 max-w-md">
                        {cat.bestForItems.map((item) => (
                          <span
                            key={item}
                            className="text-xs font-normal px-3 py-1 bg-white/5 border border-white/10 text-white rounded-full tracking-wide"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-4">
                  <button
                    onClick={() => setSelectedService(cat.title)}
                    className="inline-flex items-center gap-2 text-lg md:text-xl font-normal text-[#FF4D4D] hover:text-white underline underline-offset-8 transition-colors cursor-pointer"
                    data-cursor-text="Book"
                  >
                    <span>Book a Call</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Chips & Pricing & Case Study Preview */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  {/* Includes List as Chips */}
                  {cat.includesItems && (
                    <div className="mb-6">
                      <span className="block text-xs font-mono uppercase tracking-widest text-[#F4F1EA]/40 mb-3">
                        {cat.includesLabel || 'Includes'}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {cat.includesItems.map((item) => (
                          <span
                            key={item}
                            className="text-xs font-mono px-3 py-1.5 bg-[#161619] border border-white/10 text-[#F4F1EA]/80 rounded-none hover:border-[#FF4D4D] transition-colors"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Deliverables List if applicable */}
                  {cat.deliverablesItems && (
                    <div className="mb-8">
                      <span className="block text-xs font-mono uppercase tracking-widest text-[#F4F1EA]/40 mb-3">
                        {cat.deliverablesLabel || 'Deliverables'}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {cat.deliverablesItems.map((item) => (
                          <span
                            key={item}
                            className="text-xs font-mono px-3 py-1.5 bg-[#161619] border border-[#25D366]/30 text-[#25D366] rounded-none hover:border-[#25D366] transition-colors"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Pricing row(s) */}
                  <div className="border-t border-[#F4F1EA]/10 pt-6 mt-6 space-y-4">
                    {cat.pricing.map((price, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <span className="text-sm font-mono text-[#F4F1EA]/50 uppercase tracking-widest">
                          {price.label}
                        </span>
                        <div className="flex gap-4 items-center">
                          {price.ranges.map((range, rangeIdx) => (
                            <span
                              key={rangeIdx}
                              className="font-mono text-base sm:text-lg text-[#25D366] bg-[#25D366]/5 px-3 py-1 border border-[#25D366]/20"
                            >
                              {range.amount}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Signature Case Study Preview Image */}
                {cat.signatureImage && (
                  <div className="mt-12">
                    <Link
                      href={`/works/${cat.signatureProject || '#'}`}
                      className="group block relative w-full aspect-[21/9] overflow-hidden bg-zinc-900 border border-white/10 select-none cursor-pointer"
                      data-cursor-text="View Project"
                    >
                      <Image
                        src={cat.signatureImage}
                        alt={`${cat.title} Case Study Preview`}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-100"
                        sizes="(max-width: 1024px) 100vw, 750px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                        <div className="flex items-center justify-between w-full">
                          <div>
                            <span className="block font-mono text-[9px] uppercase tracking-widest text-[#FF4D4D] mb-1">
                              Signature Project
                            </span>
                            <span className="text-sm font-medium text-white group-hover:underline decoration-[#FF4D4D] underline-offset-4">
                              View Case Study: {STUDIO_INFO.trustedClients.find(c => c.toLowerCase().includes(cat.signatureProject || '')) || 'Ountodun Concept Store'}
                            </span>
                          </div>
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

        {/* Selected Clients & Industries Strip */}
        <section className="py-12 border-t border-b border-[#F4F1EA]/10 mb-28 overflow-hidden select-none bg-white/[0.02]">
          <div className="relative w-full overflow-hidden flex items-center">
            {/* Sliding text block */}
            <div className="animate-marquee whitespace-nowrap flex gap-8 items-center text-sm font-mono uppercase tracking-widest text-[#F4F1EA]/40">
              <span>{STUDIO_INFO.trustedClients.join('  •  ')}  •  Startups  •  Luxury Brands  •  Fashion & Apparel  •  Fintech & Banking  •  E-Commerce  •  Creative Culture  •  Art & Music</span>
              <span className="text-[#FF4D4D]">  •  </span>
              <span>{STUDIO_INFO.trustedClients.join('  •  ')}  •  Startups  •  Luxury Brands  •  Fashion & Apparel  •  Fintech & Banking  •  E-Commerce  •  Creative Culture  •  Art & Music</span>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto mb-32">
          <div className="text-center mb-16">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-[#FF4D4D] mb-3">FAQ</span>
            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight">Frequently Asked Questions</h2>
          </div>
          
          <div className="border-t border-[#F4F1EA]/10 divide-y divide-[#F4F1EA]/5">
            {SERVICES_FAQS.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>

        {/* Final CTA Block */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full bg-white border border-[#1C120C] p-12 sm:p-20 rounded-none text-center flex flex-col items-center justify-center shadow-2xl relative overflow-hidden text-[#1C120C]"
          >
            <h2 className="text-4xl sm:text-6xl font-normal tracking-tight mb-6 max-w-3xl leading-tight text-[#1C120C]">
              Let's build something people won't forget.
            </h2>
            <p className="text-base sm:text-lg text-[#1C120C]/75 font-light leading-relaxed max-w-xl mb-12">
              Whether you're launching a startup, refreshing an established brand, designing a product, or creating a campaign, we'd love to hear what you're building.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button
                onClick={() => setSelectedService('Website')}
                className="px-8 py-4 rounded-none bg-[#1C120C] text-white font-medium hover:bg-[#FF4D4D] transition-colors cursor-pointer w-full sm:w-auto text-center"
              >
                Book a Discovery Call
              </button>
              
              <Link
                href="/contact"
                className="px-8 py-4 rounded-none border border-[#1C120C] text-[#1C120C] font-medium hover:bg-[#1C120C] hover:text-white transition-colors cursor-pointer w-full sm:w-auto text-center"
              >
                Start Your Project
              </Link>
            </div>
          </motion.div>
        </section>

      </div>

      {/* Book a Call Form Modal */}
      <ContactFormModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        defaultService={selectedService || 'Website'}
      />

      <Footer />
    </div>
  );
}
