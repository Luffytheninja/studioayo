'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Send } from 'lucide-react';

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

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function ContactFormModal({ isOpen, onClose, defaultService = 'Website' }: ContactFormModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  // Map incoming service title to dropdown value if needed
  const normalizedService = (() => {
    if (!defaultService) return 'Web Design & Engineering';
    if (defaultService.includes('Dev') || defaultService.includes('Code')) return 'Web Development';
    if (defaultService.includes('Design') && !defaultService.includes('3D')) return 'Web Design';
    if (defaultService.includes('Product') || defaultService.includes('Hachi')) return 'Digital Products (Hachi / Venture)';
    if (defaultService.includes('3D') || defaultService.includes('Motion')) return '3D Design & Motion';
    if (defaultService.includes('Illustration')) return 'Bespoke Illustration';
    if (defaultService.includes('Retainer')) return 'Dedicated Studio Retainer';
    return 'Web Design & Engineering';
  })();

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
      service: normalizedService,
      budget: '$5,000 – $10,000 / ₦5,000,000 – ₦10,000,000',
      message: '',
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
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white border border-[#1C120C] rounded-none p-6 sm:p-10 text-[#1C120C] shadow-2xl overflow-hidden z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-none bg-white border border-[#1C120C] text-[#1C120C] hover:bg-zinc-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-16 h-16 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mb-6"
                >
                  <CheckCircle className="w-10 h-10" />
                </motion.div>
                <h3 className="text-3xl font-normal tracking-tight mb-2 text-[#1C120C]">Message Sent</h3>
                <p className="text-[#1C120C]/75 max-w-md mb-8 font-light leading-relaxed">
                  Thank you for reaching out to Studio AYO. We typically respond within 1–2 business days.
                </p>
                <button
                  onClick={handleReset}
                  className="px-8 py-3 rounded-none bg-[#1C120C] text-white font-medium hover:bg-[#FF4D4D] transition-colors"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-3xl sm:text-4xl font-normal tracking-tight mb-2 text-[#1C120C]">Start a Project</h3>
                <p className="text-sm text-[#1C120C]/65 mb-8 font-light">
                  Tell us what you're building, where you're headed, and what challenges you're facing.
                </p>

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

                  {/* Service and Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Service */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#1C120C]/60 mb-2">
                        What service are you interested in? *
                      </label>
                      <select
                        {...register('service')}
                        className="w-full bg-[#F9F9FB] border border-[#1C120C]/30 rounded-none px-4 py-3 text-sm text-[#1C120C] focus:outline-none focus:border-[#1C120C] transition-colors"
                      >
                        <option value="Web Design & Engineering">Web Design & Engineering (Full Flagship)</option>
                        <option value="Web Design">Web Design & Art Direction (UI/UX)</option>
                        <option value="Web Development">Web Development (Next.js / Frontend)</option>
                        <option value="Bespoke Illustration">Bespoke Illustration & Brand Art</option>
                        <option value="3D Design & Motion">3D Design & Tactile Motion</option>
                        <option value="Digital Products (Hachi / Venture)">Digital Products (Hachi / Incubator)</option>
                        <option value="Dedicated Studio Retainer">Dedicated Studio Retainer (Monthly)</option>
                        <option value="Custom Scope / Other">Custom Scope / Inquire</option>
                      </select>
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
                        <option value="$2,500 – $5,000 / ₦2,500,000 – ₦5,000,000">$2,500 – $5,000 / ₦2,500,000 – ₦5,000,000</option>
                        <option value="$5,000 – $10,000 / ₦5,000,000 – ₦10,000,000">$5,000 – $10,000 / ₦5,000,000 – ₦10,000,000</option>
                        <option value="$10,000 – $20,000 / ₦10,000,000 – ₦20,000,000">$10,000 – $20,000 / ₦10,000,000 – ₦20,000,000</option>
                        <option value="$20,000+ / ₦20,000,000+">$20,000+ / ₦20,000,000+ (High-Ticket Flagship)</option>
                        <option value="Custom / Undecided">Custom / Undecided</option>
                      </select>
                    </div>
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
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
