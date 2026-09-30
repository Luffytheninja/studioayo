'use client';

import { useState, Suspense } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Send, Plus, Minus, ArrowUpRight } from 'lucide-react';
import Footer from '@/components/ui/Footer';
import { STUDIO_INFO } from '@/content/studio';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  company: z.string().optional(),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().min(1, 'Please select a budget range'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const CONTACT_FAQS = [
  {
    question: 'How quickly do you respond to enquiries?',
    answer: 'We respond to all project enquiries within one business day. For urgent scopes, email us directly and mention your timeline.',
  },
  {
    question: 'Do you require a deposit?',
    answer: 'Yes. We require a 50% upfront deposit before work begins, with the balance due on final delivery. This protects both parties and ensures dedicated studio time on your project.',
  },
  {
    question: 'Can you help if I have no idea where to start?',
    answer: 'Absolutely. Our discovery process is specifically designed for clients who know their goals but need strategic clarity. We help define the right scope before any design work begins.',
  },
  {
    question: 'Do you work internationally?',
    answer: 'Yes. We are based in Lagos and partner with clients remotely across London, New York, Toronto, Dubai, and globally. Our entire workflow is remote-optimised.',
  },
  {
    question: 'What happens after the website launches?',
    answer: 'We offer a dedicated studio retainer for ongoing evolution — new features, performance tuning, content updates, and continuous design refinement. Many clients start with a project and move to a retainer.',
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
            animate={{ height: 'auto', opacity: 1, marginTop: '0.75rem' }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-sm text-[#F4F1EA]/70 leading-relaxed font-light">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ContactFormContent() {
  const searchParams = useSearchParams();
  const artwork = searchParams.get('artwork');

  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      service: artwork ? 'Bespoke Illustration' : 'Web Design & Engineering',
      budget: '$5,000 – $10,000 / ₦5,000,000 – ₦10,000,000',
      message: artwork
        ? `Hello! I'm interested in the original artwork "${artwork}" by Alex. Please let me know its availability and shipping details.`
        : '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setServerError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || 'Something went wrong. Please try again.');
      }
      setSubmitted(true);
    } catch (err: unknown) {
      setServerError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setServerError(null);
    reset();
  };

  const services = [
    'Web Design & Engineering (Full Flagship)',
    'Web Design & Art Direction (UI/UX Only)',
    'Web Development (Next.js / Frontend Only)',
    'Bespoke Illustration & Brand Art',
    '3D Design & Tactile Motion',
    'Digital Products (Hachi / Incubator)',
    'Dedicated Studio Retainer (Monthly)',
    'Custom Scope / Inquire',
  ];

  return (
    <div className="pt-28 sm:pt-32 pb-16 px-6 md:px-12 bg-[#070708] min-h-screen text-[#F4F1EA]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-24">

          {/* ── Left Column: Content & Info ── */}
          <div className="lg:col-span-5 flex flex-col">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#FF4D4D] block mb-4">
                Start a Project
              </span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl sm:text-7xl font-normal tracking-tight mb-8 leading-tight"
              >
                Let&apos;s Build Something Exceptional.
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4 text-base text-[#F4F1EA]/75 font-light leading-relaxed max-w-md mb-12"
              >
                <p>
                  We are currently onboarding selected clients for upcoming projects. Tell us about your vision and
                  we&apos;ll respond within one business day with a clear scope, timeline, and investment outline.
                </p>
                <p>
                  No generic proposals. No unnecessary meetings. Just a direct, structured
                  conversation about what you&apos;re building and how we can help.
                </p>
                <p className="text-sm font-mono text-[#25D366] uppercase tracking-wider">
                  ✓ We respond within 24 hours
                </p>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="border-t border-[#F4F1EA]/15 pt-8 mb-12 space-y-5"
              >
                <h3 className="text-sm font-mono uppercase tracking-widest text-[#F4F1EA]/50 mb-4">Direct Contact</h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-mono text-[#F4F1EA]/40 uppercase tracking-widest w-16 flex-shrink-0 pt-0.5">Email</span>
                    <a
                      href={`mailto:${STUDIO_INFO.email}`}
                      className="text-sm text-[#F4F1EA] hover:text-[#FF4D4D] transition-colors underline underline-offset-4"
                    >
                      {STUDIO_INFO.email}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-mono text-[#F4F1EA]/40 uppercase tracking-widest w-16 flex-shrink-0 pt-0.5">Base</span>
                    <span className="text-sm text-[#F4F1EA]">{STUDIO_INFO.location}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-mono text-[#F4F1EA]/40 uppercase tracking-widest w-16 flex-shrink-0 pt-0.5">Socials</span>
                    <div className="flex gap-4">
                      {STUDIO_INFO.socials.slice(1).map((s) => (
                        <a
                          key={s.name}
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono text-[#F4F1EA]/70 hover:text-[#F4F1EA] transition-colors uppercase tracking-widest"
                        >
                          {s.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-mono text-[#F4F1EA]/40 uppercase tracking-widest w-16 flex-shrink-0 pt-0.5">Reach</span>
                    <span className="text-xs font-mono text-[#F4F1EA]/60">{STUDIO_INFO.clientsLocations}</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="border-t border-[#F4F1EA]/15 pt-8"
            >
              <div className="mb-6 text-xs font-mono uppercase tracking-wider text-[#F4F1EA]/50">
                Quick Answers
              </div>
              <div>
                {CONTACT_FAQS.map((faq, idx) => (
                  <FAQItem key={idx} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right Column: Project Inquiry Form ── */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-[#F4F1EA] border border-[#1C120C]/10 p-8 sm:p-12 text-[#1C120C] shadow-[0_24px_80px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-16 flex flex-col items-center text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="w-16 h-16 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mb-6"
                    >
                      <CheckCircle className="w-10 h-10" />
                    </motion.div>
                    <h3 className="text-3xl font-normal tracking-tight mb-3 text-[#1C120C]">
                      Enquiry Received
                    </h3>
                    <p className="text-[#1C120C]/70 max-w-sm mb-8 font-light text-sm leading-relaxed">
                      Thank you for reaching out. We have your project details and will respond
                      with next steps within one business day.
                    </p>
                    <button
                      onClick={handleReset}
                      className="px-8 py-3 bg-[#1C120C] text-white font-mono text-xs uppercase tracking-widest hover:bg-[#FF4D4D] transition-colors"
                    >
                      Send Another Enquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="mb-8">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#1C120C]/50 block mb-1">
                        Project Inquiry Form
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-[#1C120C]">
                        Tell us what you&apos;re building
                      </h2>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                      {/* Name and Company */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-[10px] font-mono uppercase tracking-wider text-[#1C120C]/60 mb-2">
                            Your Name *
                          </label>
                          <input
                            {...register('name')}
                            type="text"
                            placeholder="Ayo Adebayo"
                            className="w-full bg-white border border-[#1C120C]/25 px-4 py-3 text-sm text-[#1C120C] focus:outline-none focus:border-[#1C120C] transition-colors"
                          />
                          {errors.name && (
                            <p className="text-xs text-[#FF4D4D] mt-1 font-mono">{errors.name.message}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-[10px] font-mono uppercase tracking-wider text-[#1C120C]/60 mb-2">
                            Company / Brand
                          </label>
                          <input
                            {...register('company')}
                            type="text"
                            placeholder="My Brand"
                            className="w-full bg-white border border-[#1C120C]/25 px-4 py-3 text-sm text-[#1C120C] focus:outline-none focus:border-[#1C120C] transition-colors"
                          />
                        </div>
                      </div>

                      {/* Email and Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-[10px] font-mono uppercase tracking-wider text-[#1C120C]/60 mb-2">
                            Email Address *
                          </label>
                          <input
                            {...register('email')}
                            type="email"
                            placeholder="hello@brand.com"
                            className="w-full bg-white border border-[#1C120C]/25 px-4 py-3 text-sm text-[#1C120C] focus:outline-none focus:border-[#1C120C] transition-colors"
                          />
                          {errors.email && (
                            <p className="text-xs text-[#FF4D4D] mt-1 font-mono">{errors.email.message}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-[10px] font-mono uppercase tracking-wider text-[#1C120C]/60 mb-2">
                            Phone (Optional)
                          </label>
                          <input
                            {...register('phone')}
                            type="tel"
                            placeholder="+234 XXX XXX XXXX"
                            className="w-full bg-white border border-[#1C120C]/25 px-4 py-3 text-sm text-[#1C120C] focus:outline-none focus:border-[#1C120C] transition-colors"
                          />
                        </div>
                      </div>

                      {/* Service Selection — Radio Grid */}
                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-wider text-[#1C120C]/60 mb-3">
                          What service are you interested in? *
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
                          {services.map((srv) => (
                            <label
                              key={srv}
                              className="flex items-center gap-3 cursor-pointer p-3 bg-white hover:bg-[#F4F1EA] border border-[#1C120C]/20 select-none text-[#1C120C] transition-colors has-[:checked]:border-[#1C120C] has-[:checked]:bg-[#1C120C]/5"
                            >
                              <input
                                {...register('service')}
                                type="radio"
                                value={srv}
                                className="accent-[#1C120C] focus:ring-0 w-4 h-4 cursor-pointer flex-shrink-0"
                              />
                              <span className="text-xs leading-tight">{srv}</span>
                            </label>
                          ))}
                        </div>
                        {errors.service && (
                          <p className="text-xs text-[#FF4D4D] mt-2 font-mono">{errors.service.message}</p>
                        )}
                      </div>

                      {/* Budget */}
                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-wider text-[#1C120C]/60 mb-2">
                          Estimated Budget *
                        </label>
                        <select
                          {...register('budget')}
                          className="w-full bg-white border border-[#1C120C]/25 px-4 py-3 text-sm text-[#1C120C] focus:outline-none focus:border-[#1C120C] transition-colors"
                        >
                          <option value="$2,500 – $5,000 / ₦2,500,000 – ₦5,000,000">$2,500 – $5,000 / ₦2,500,000 – ₦5,000,000</option>
                          <option value="$5,000 – $10,000 / ₦5,000,000 – ₦10,000,000">$5,000 – $10,000 / ₦5,000,000 – ₦10,000,000</option>
                          <option value="$10,000 – $20,000 / ₦10,000,000 – ₦20,000,000">$10,000 – $20,000 / ₦10,000,000 – ₦20,000,000</option>
                          <option value="$20,000+ / ₦20,000,000+ (Flagship)">$20,000+ / ₦20,000,000+ (Flagship)</option>
                          <option value="Custom / Undecided">Custom / Undecided</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-wider text-[#1C120C]/60 mb-2">
                          Tell us about your project *
                        </label>
                        <textarea
                          {...register('message')}
                          rows={5}
                          placeholder="What are you building? Who is your target audience? What is your main goal for the website or product? Include anything you think is relevant..."
                          className="w-full bg-white border border-[#1C120C]/25 px-4 py-3 text-sm text-[#1C120C] focus:outline-none focus:border-[#1C120C] transition-colors resize-none"
                        />
                        {errors.message && (
                          <p className="text-xs text-[#FF4D4D] mt-1 font-mono">{errors.message.message}</p>
                        )}
                      </div>

                      {serverError && (
                        <p className="text-xs text-[#FF4D4D] font-mono bg-[#FF4D4D]/10 border border-[#FF4D4D]/30 px-4 py-3 leading-relaxed">
                          {serverError}
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-[#1C120C] text-white font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#FF4D4D] transition-colors disabled:opacity-50 cursor-pointer"
                      >
                        {isSubmitting ? (
                          'Sending...'
                        ) : (
                          <>
                            <span>Send Project Enquiry</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>

                      <p className="text-[10px] font-mono text-[#1C120C]/50 text-center leading-relaxed">
                        We respond within 24 hours · 50% deposit required to begin · All scopes agreed before any work starts
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="pt-32 pb-16 px-6 md:px-12 bg-[#070708] min-h-screen text-[#F4F1EA] flex items-center justify-center">
        <div className="text-lg opacity-70">Loading...</div>
      </div>
    }>
      <ContactFormContent />
    </Suspense>
  );
}
