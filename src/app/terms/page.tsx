import { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/ui/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service — Studio Ayo',
  description: 'Terms of service for Studio Ayo, the multidisciplinary digital design studio.',
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-16 px-6 md:px-12 bg-[#070708] min-h-screen text-[#F4F1EA]">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl sm:text-7xl font-normal tracking-tight mb-12">Terms of Service</h1>

        <div className="space-y-10 text-[#F4F1EA]/80 font-light leading-relaxed text-base sm:text-lg">
          <p className="text-sm font-mono text-[#F4F1EA]/40 uppercase tracking-wider">
            Last updated: August 2026
          </p>

          <section className="space-y-4">
            <h2 className="text-xl font-normal text-white">1. Services</h2>
            <p>
              Studio Ayo provides creative and design services including, but not limited to, brand identity, website design and development, UI/UX design, 3D visualization, photography, film, and illustration. The scope of each project is agreed upon in a separate written agreement or statement of work.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-normal text-white">2. Payment</h2>
            <p>
              All projects require a 50% deposit before work begins. The remaining balance is due upon project completion and before final files are delivered. Payment terms specific to each engagement will be outlined in your project agreement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-normal text-white">3. Intellectual Property</h2>
            <p>
              Upon receipt of final payment, all approved deliverables and rights thereto are transferred to the client. Studio Ayo retains the right to display the work in its portfolio, case studies, and marketing materials unless otherwise agreed in writing.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-normal text-white">4. Revisions</h2>
            <p>
              Each project includes a defined number of revision rounds as agreed upon in the project scope. Additional revisions beyond this scope will be billed at our standard hourly rate.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-normal text-white">5. Confidentiality</h2>
            <p>
              Studio Ayo treats all client information as confidential and will not disclose project details, business information, or materials to third parties without explicit consent, except where required by law.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-normal text-white">6. Limitation of Liability</h2>
            <p>
              Studio Ayo&apos;s liability in connection with any project is limited to the fees paid for the specific project. We are not liable for any indirect, consequential, or incidental damages.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-normal text-white">7. Contact</h2>
            <p>
              Questions about these terms?{' '}
              <a href="mailto:contactstudioayo@gmail.com" className="text-white underline underline-offset-4 hover:text-[#FF4D4D] transition-colors">
                contactstudioayo@gmail.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-[#F4F1EA]/10">
          <Link href="/" className="text-sm font-mono text-[#F4F1EA]/40 hover:text-[#F4F1EA] transition-colors">
            ← Back to Studio Ayo
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
