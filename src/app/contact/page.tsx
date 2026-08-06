'use client';

import { useState, Suspense } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Send, Plus, Minus } from 'lucide-react';
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
    question: 'How long does a project take?',
    answer: 'Most projects take between 2 and 8 weeks depending on scope.'
  },
  {
    question: 'Do you work internationally?',
    answer: 'Yes. We work remotely with clients worldwide.'
  },
  {
    question: 'Do you require a deposit?',
    answer: 'Yes. We require a 50% upfront deposit before work begins.'
  },
  {
    question: 'Can you help if I don\'t know exactly what I need?',
    answer: 'Absolutely. Our discovery process helps define the right solution before any design work begins.'
  }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#F4F1EA]/10 py-4 transition-all duration-300">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left text-base sm:text-lg font-light hover:text-[#FF4D4D] transition-colors"
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
            animate={{ height: 'auto', opacity: 1, marginTop: '0.75rem' }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-sm text-[#F4F1EA]/70 leading-relaxed font-light">
              {answer}
            </p>
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
      service: artwork ? 'Illustration' : 'Website',
      budget: 'Under $1,000 / ₦1,000,000',
      message: artwork 
        ? `Hello! I am interested in purchasing the original artwork "${artwork}" by Alex. Please let me know its availability and shipping details.` 
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

  return (
    <div className="pt-32 pb-16 px-6 md:px-12 bg-[#070708] min-h-screen text-[#F4F1EA]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-24">
          
          {/* Left Column: Content & Info */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Header Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl sm:text-8xl font-normal tracking-tight mb-8"
              >
                Start a Project.
              </motion.h1>

              {/* Intro paragraphs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6 text-base sm:text-lg text-[#F4F1EA]/80 font-light leading-relaxed max-w-xl mb-12"
              >
                <p>
                  Whether you're launching a new business, refreshing an existing brand, building a digital product, or producing a creative campaign, we'd love to hear about it.
                </p>
                <p>
                  Every project begins with a conversation. Tell us what you're building, where you're headed, and what challenges you're facing. We'll review your enquiry and get back to you with the next steps.
                </p>
                <p className="text-sm font-mono text-[#25D366] uppercase tracking-wider">
                  We typically respond within 1–2 business days.
                </p>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="border-t border-[#F4F1EA]/15 pt-8 mb-12 space-y-4 max-w-xl"
              >
                <h3 className="text-lg font-normal tracking-tight text-white mb-2">
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-light text-[#F4F1EA]/70">
                  <div>
                    <span className="text-white font-medium">Studio AYO</span>
                  </div>
                  <div>
                    <a href={`mailto:${STUDIO_INFO.email}`} className="text-white hover:text-[#FF4D4D] transition-colors underline underline-offset-4">
                      {STUDIO_INFO.email}
                    </a>
                  </div>
                  <div>
                    <span className="text-white">{STUDIO_INFO.phone}</span>
                  </div>
                  <div>
                    <span className="text-white">{STUDIO_INFO.location}</span>
                  </div>
                </div>
                <div className="pt-2 text-xs font-mono text-[#F4F1EA]/50">
                  {STUDIO_INFO.clientsLocations}
                </div>
              </motion.div>
            </div>

            {/* Short FAQ Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="border-t border-[#F4F1EA]/15 pt-8"
            >
              <div className="mb-4 text-sm font-mono uppercase tracking-wider text-[#F4F1EA]/60">FAQ</div>
              <div className="divide-y divide-[#F4F1EA]/5">
                {CONTACT_FAQS.map((faq, idx) => (
                  <FAQItem key={idx} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white border border-[#1C120C] p-8 sm:p-12 rounded-none text-[#1C120C] shadow-[8px_8px_24px_rgba(28,18,12,0.12)] relative overflow-hidden"
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
                    <h3 className="text-3xl font-normal tracking-tight mb-3 text-[#1C120C]">Enquiry Sent</h3>
                    <p className="text-[#1C120C]/70 max-w-md mb-8 font-light text-sm leading-relaxed">
                      Thank you for reaching out to Studio AYO. We have received your project details and typically get back to you with the next steps within 1–2 business days.
                    </p>
                    <button
                      onClick={handleReset}
                      className="px-8 py-3 rounded-none bg-[#1C120C] text-white font-medium hover:bg-[#FF4D4D] transition-colors"
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
                    <h2 className="text-2xl sm:text-3xl font-normal tracking-tight mb-8 text-[#1C120C]">
                      Project Enquiry
                    </h2>
                    
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      {/* Name and Company */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Name */}
                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider text-[#1C120C]/60 mb-2">
                            Name *
                          </label>
                          <input
                            {...register('name')}
                            type="text"
                            placeholder="Ayo Adebayo"
                            className="w-full bg-[#F9F9FB] border border-[#1C120C]/30 rounded-none px-4 py-3 text-sm text-[#1C120C] focus:outline-none focus:border-[#1C120C] transition-colors"
                          />
                          {errors.name && (
                            <p className="text-xs text-[#FF4D4D] mt-1 font-mono">{errors.name.message}</p>
                          )}
                        </div>

                        {/* Company / Brand */}
                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider text-[#1C120C]/60 mb-2">
                            Company / Brand
                          </label>
                          <input
                            {...register('company')}
                            type="text"
                            placeholder="My Brand Name"
                            className="w-full bg-[#F9F9FB] border border-[#1C120C]/30 rounded-none px-4 py-3 text-sm text-[#1C120C] focus:outline-none focus:border-[#1C120C] transition-colors"
                          />
                        </div>
                      </div>

                      {/* Email and Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Email */}
                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider text-[#1C120C]/60 mb-2">
                            Email Address *
                          </label>
                          <input
                            {...register('email')}
                            type="email"
                            placeholder="hello@brand.com"
                            className="w-full bg-[#F9F9FB] border border-[#1C120C]/30 rounded-none px-4 py-3 text-sm text-[#1C120C] focus:outline-none focus:border-[#1C120C] transition-colors"
                          />
                          {errors.email && (
                            <p className="text-xs text-[#FF4D4D] mt-1 font-mono">{errors.email.message}</p>
                          )}
                        </div>

                        {/* Phone (Optional) */}
                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider text-[#1C120C]/60 mb-2">
                            Phone (Optional)
                          </label>
                          <input
                            {...register('phone')}
                            type="tel"
                            placeholder="+234 XXX XXX XXXX"
                            className="w-full bg-[#F9F9FB] border border-[#1C120C]/30 rounded-none px-4 py-3 text-sm text-[#1C120C] focus:outline-none focus:border-[#1C120C] transition-colors"
                          />
                        </div>
                      </div>

                      {/* Service Interests */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#1C120C]/60 mb-3">
                          What service are you interested in? *
                        </label>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          {[
                            'Brand Identity',
                            'Website',
                            'UI/UX',
                            '3D',
                            'Photography & Film',
                            'Illustration',
                            'Development',
                            'Not sure yet'
                          ].map((srv) => (
                            <label
                              key={srv}
                              className="flex items-center gap-3 cursor-pointer p-3 bg-white hover:bg-zinc-50 border border-[#1C120C]/20 rounded-none select-none text-[#1C120C] transition-colors"
                            >
                              <input
                                {...register('service')}
                                type="radio"
                                value={srv}
                                className="accent-[#FF4D4D] focus:ring-0 w-4 h-4 cursor-pointer"
                              />
                              <span className="text-[#1C120C]">{srv}</span>
                            </label>
                          ))}
                        </div>
                        {errors.service && (
                          <p className="text-xs text-[#FF4D4D] mt-1 font-mono">{errors.service.message}</p>
                        )}
                      </div>

                      {/* Budget */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#1C120C]/60 mb-2">
                          Estimated Budget *
                        </label>
                        <select
                          {...register('budget')}
                          className="w-full bg-[#F9F9FB] border border-[#1C120C]/30 rounded-none px-4 py-3 text-sm text-[#1C120C] focus:outline-none focus:border-[#1C120C] transition-colors"
                        >
                          <option value="Under $1,000 / ₦1,000,000">Under $1,000 / ₦1,000,000</option>
                          <option value="$1,000 - $3,000 / ₦1,000,000 - ₦3,000,000">$1,000 - $3,000 / ₦1,000,000 - ₦3,000,000</option>
                          <option value="$3,000 - $6,000 / ₦3,000,000 - ₦6,000,000">$3,000 - $6,000 / ₦3,000,000 - ₦6,000,000</option>
                          <option value="$6,000 - $10,000 / ₦6,000,000 - ₦10,000,000">$6,000 - $10,000 / ₦6,000,000 - ₦10,000,000</option>
                          <option value="$10,000+ / ₦10,000,000+">$10,000+ / ₦10,000,000+</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#1C120C]/60 mb-2">
                          Tell us about your project... *
                        </label>
                        <textarea
                          {...register('message')}
                          rows={4}
                          placeholder="Tell us what you're building, where you're headed, and what challenges you're facing..."
                          className="w-full bg-[#F9F9FB] border border-[#1C120C]/30 rounded-none px-4 py-3 text-sm text-[#1C120C] focus:outline-none focus:border-[#1C120C] transition-colors resize-none"
                        />
                        {errors.message && (
                          <p className="text-xs text-[#FF4D4D] mt-1 font-mono">{errors.message.message}</p>
                        )}
                      </div>

                      {/* Server Error */}
                      {serverError && (
                        <p className="text-xs text-[#FF4D4D] font-mono bg-[#FF4D4D]/10 border border-[#FF4D4D]/30 px-4 py-3 leading-relaxed">
                          {serverError}
                        </p>
                      )}

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-none bg-[#1C120C] text-white font-medium flex items-center justify-center gap-2 hover:bg-[#FF4D4D] transition-colors disabled:opacity-50 cursor-pointer"
                      >
                        {isSubmitting ? (
                          'Sending...'
                        ) : (
                          <>
                            <span>Send Enquiry</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
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
        <div className="text-lg opacity-70">Loading Form...</div>
      </div>
    }>
      <ContactFormContent />
    </Suspense>
  );
}
