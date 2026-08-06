import { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/ui/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy — Studio Ayo',
  description: 'Privacy policy for Studio Ayo, the multidisciplinary digital design studio.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-16 px-6 md:px-12 bg-[#070708] min-h-screen text-[#F4F1EA]">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl sm:text-7xl font-normal tracking-tight mb-12">Privacy Policy</h1>

        <div className="space-y-10 text-[#F4F1EA]/80 font-light leading-relaxed text-base sm:text-lg">
          <p className="text-sm font-mono text-[#F4F1EA]/40 uppercase tracking-wider">
            Last updated: August 2026
          </p>

          <section className="space-y-4">
            <h2 className="text-xl font-normal text-white">1. Information We Collect</h2>
            <p>
              When you submit a project enquiry through our website, we collect the information you provide: your name, company or brand name, email address, phone number (optional), service interest, budget range, and project description. We do not collect any information automatically beyond standard web server logs.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-normal text-white">2. How We Use Your Information</h2>
            <p>
              The information you provide is used solely to respond to your enquiry, discuss your project, and communicate with you throughout our working relationship. We do not sell, rent, or share your personal information with third parties for marketing purposes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-normal text-white">3. Data Storage</h2>
            <p>
              Enquiry submissions are delivered directly to our studio email inbox and are stored within our Google Workspace environment. We retain project correspondence for the duration of the client relationship and up to two years thereafter for accounting and legal compliance.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-normal text-white">4. Cookies</h2>
            <p>
              This website does not use tracking cookies, analytics cookies, or advertising cookies. We do not use any third-party tracking scripts.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-normal text-white">5. Your Rights</h2>
            <p>
              You have the right to request access to, correction of, or deletion of any personal information we hold about you. To make such a request, please contact us directly at the email address below.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-normal text-white">6. Contact</h2>
            <p>
              If you have questions about this privacy policy or how we handle your data, please contact us at{' '}
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
