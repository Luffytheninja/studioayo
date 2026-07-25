'use client';

import { motion } from 'framer-motion';

export default function ProcessSection() {
  return (
    <section className="py-24 border-t border-[#F4F1EA]/10">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-5xl sm:text-7xl md:text-8xl font-normal text-[#F4F1EA] tracking-tight mb-12"
      >
        Process
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 text-[#F4F1EA]/70 text-base md:text-lg leading-relaxed font-light">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="mb-6">
            Our design process is rooted in deep inquiry, architectural restraint, and relentless obsession with visual craft. We begin every project by stripping away surface noise to discover the foundational core of the brand.
          </p>
          <p>
            From initial research and creative direction to 3D spatial modeling, kinetic typography, and production engineering, every step is executed with precision and intention.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="mb-6">
            We don&apos;t build generic templates or follow transient trends. We engineer bespoke digital environments where motion has weight, typography speaks with authority, and every interaction feels physically responsive.
          </p>
          <p>
            The result is a digital museum piece — a product experience that endures, resonates, and elevates brands to global reference standards.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
