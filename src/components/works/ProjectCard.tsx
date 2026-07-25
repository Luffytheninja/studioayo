'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-[#F4F1EA]/10 pb-16 lg:pb-24"
    >
      {/* Left Media Container */}
      <div
        className="lg:col-span-6 group relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#121214] border border-[#F4F1EA]/10 shadow-2xl cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-cursor-text="Explore"
      >
        <Link href={`/works/${project.slug}`}>
          {/* Base Image */}
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className={`object-cover transition-transform duration-700 ease-out ${
              isHovered ? 'scale-105' : 'scale-100'
            }`}
          />

          {/* Hover Video Preview if present */}
          {project.videoUrl && (
            <video
              ref={videoRef}
              src={project.videoUrl}
              muted
              loop
              playsInline
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>
      </div>

      {/* Right Editorial Info */}
      <div className="lg:col-span-6 flex flex-col justify-between py-2">
        <div>
          {/* Title */}
          <Link
            href={`/works/${project.slug}`}
            className="inline-block group"
            data-cursor-text="View"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#F4F1EA] tracking-tight hover:underline underline-offset-8 transition-all">
              {project.title}
            </h2>
          </Link>

          {/* Year */}
          <p className="text-sm font-mono text-[#F4F1EA]/60 mt-3 pb-3 border-b border-[#F4F1EA]/10">
            {project.year}
          </p>

          {/* Categories & Credits List */}
          <ul className="mt-4 space-y-2 text-sm text-[#F4F1EA]/80 font-light">
            {project.categories.map((cat, idx) => (
              <li key={idx} className="pb-1 border-b border-[#F4F1EA]/05">
                {cat}
              </li>
            ))}
            {project.credits.map((credit, idx) => (
              <li key={idx} className="pb-1 border-b border-[#F4F1EA]/05 text-[#F4F1EA]/60">
                {credit.role} by {credit.person}
              </li>
            ))}
          </ul>
        </div>

        {/* Read More Link */}
        <div className="mt-8">
          <Link
            href={`/works/${project.slug}`}
            className="inline-flex items-center gap-3 text-xl md:text-2xl font-normal text-[#F4F1EA] underline underline-offset-8 hover:text-white transition-colors"
            data-cursor-text="Case Study"
          >
            Read More
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
