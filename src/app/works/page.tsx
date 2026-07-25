'use client';

import ProjectCard from '@/components/works/ProjectCard';
import ProcessSection from '@/components/works/ProcessSection';
import Footer from '@/components/ui/Footer';
import { PROJECTS } from '@/content/projects';
import { motion } from 'framer-motion';

export default function WorksPage() {
  return (
    <div className="pt-32 pb-16 px-6 md:px-12 bg-[#070708] min-h-screen text-[#F4F1EA]">
      <div className="max-w-7xl mx-auto">
        {/* Header Title Section */}
        <div className="mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl sm:text-8xl md:text-9xl font-normal text-[#F4F1EA] tracking-tight mb-8"
          >
            Works
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#F4F1EA]/70 text-base sm:text-lg font-light leading-relaxed max-w-5xl"
          >
            <p>
              some detailed case studies showing how we go about designing your products, from the research, to ideation, design and presentation
            </p>
            <p>
              some detailed case studies showing how we go about designing your products, from the research, to ideation, design and presentation
            </p>
          </motion.div>
        </div>

        {/* Project Cards List */}
        <div className="space-y-20 md:space-y-28">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {/* Process Section */}
        <ProcessSection />
      </div>

      <Footer />
    </div>
  );
}
