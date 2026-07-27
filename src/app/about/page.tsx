'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Footer from '@/components/ui/Footer';
import { TEAM } from '@/content/team';
import { STUDIO_INFO } from '@/content/studio';

function TeamCard({ member }: { member: typeof TEAM[0] }) {
  return (
    <div className="w-full bg-white border border-[#1C120C] shadow-[8px_8px_24px_rgba(28,18,12,0.12)] flex flex-col rounded-none overflow-hidden">
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>
      <div className="border-t border-[#1C120C] py-5 px-4 text-center">
        <h3 className="text-xl font-normal text-[#1C120C] mb-1">{member.name}</h3>
        <p className="text-sm font-normal text-[#1C120C]/70 tracking-wide">{member.role}</p>
      </div>
    </div>
  );
}

function renderBrandLogo(client: string) {
  if (client.includes('Ountodun')) {
    return (
      <div className="text-center font-sans">
        <div className="font-extrabold tracking-[0.25em] text-xs text-[#1C120C]">OUNTODUN</div>
        <div className="font-editorial italic text-xs text-[#1C120C]/60 mt-0.5">concept store</div>
      </div>
    );
  }
  if (client.includes('FAËM')) {
    return (
      <div className="text-center font-serif">
        <div className="font-editorial italic text-3xl text-[#1C120C] tracking-wide leading-none">FAËM</div>
        <div className="font-sans font-light tracking-[0.3em] text-[9px] uppercase text-[#1C120C]/50 mt-1">RECORDS</div>
      </div>
    );
  }
  if (client.includes('Century')) {
    return (
      <div className="text-center font-mono">
        <div className="font-light tracking-[0.1em] text-xs uppercase text-[#1C120C]">A CENTURY FLAME</div>
      </div>
    );
  }
  if (client.includes('Hachi')) {
    return (
      <div className="text-center font-sans">
        <div className="font-black tracking-tight text-xl uppercase text-[#1C120C]">HACHI</div>
        <div className="font-sans font-light tracking-[0.2em] text-[9px] uppercase text-[#1C120C]/60">TECHNOLOGIES</div>
      </div>
    );
  }
  if (client.includes('American Spirit')) {
    return (
      <div className="text-center font-serif">
        <div className="font-editorial italic text-2xl text-[#1C120C] leading-none">Natural</div>
        <div className="font-sans font-bold tracking-[0.15em] text-[9px] uppercase text-[#1C120C]/80 mt-0.5">AMERICAN SPIRIT</div>
      </div>
    );
  }
  return (
    <div className="text-center text-xs font-mono uppercase tracking-widest text-[#1C120C]">
      {client}
    </div>
  );
}

export default function AboutPage() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  const duplicatedClients = [
    ...STUDIO_INFO.trustedClients,
    ...STUDIO_INFO.trustedClients,
    ...STUDIO_INFO.trustedClients,
  ];

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div className="pt-32 pb-16 px-6 md:px-12 bg-[#F5EAD8] text-[#1C120C] min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl sm:text-8xl md:text-9xl font-normal tracking-tight mb-8"
        >
          About Us
        </motion.h1>

        {/* Manifesto Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 text-base sm:text-lg font-light leading-relaxed max-w-4xl opacity-90 mb-24"
        >
          {STUDIO_INFO.aboutText.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </motion.div>

        {/* Team alternating grid */}
        <div className="flex flex-col gap-24 md:gap-36 mb-28">
          {TEAM.map((member, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center"
              >
                {/* Card Container */}
                <div
                  className={`w-full max-w-[340px] mx-auto ${
                    isEven ? 'md:ml-0 md:mr-auto' : 'md:mr-0 md:ml-auto md:order-2'
                  }`}
                >
                  <TeamCard member={member} />
                </div>

                {/* Bio Container */}
                <div
                  className={`text-left max-w-[400px] mx-auto ${
                    isEven ? 'md:ml-0 md:mr-auto' : 'md:mr-0 md:ml-auto md:order-1'
                  }`}
                >
                  <p className="text-lg md:text-xl font-light leading-relaxed text-[#1C120C] opacity-90 mb-6">
                    {member.bio}
                  </p>
                  
                  {member.skills && member.skills.length > 0 && (
                    <div className="pt-6 border-t border-[#1C120C]/15">
                      <h4 className="text-xs font-mono uppercase tracking-widest text-[#1C120C]/60 mb-3">
                        Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs font-normal px-3 py-1 bg-white border border-[#1C120C] text-[#1C120C] shadow-[2px_2px_0px_rgba(28,18,12,1)] tracking-wide"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trusted By Section */}
        <section className="py-16 border-t border-[#1C120C]/15 mb-16 overflow-hidden">
          <h2 className="text-4xl sm:text-5xl font-normal tracking-tight mb-12">
            Trusted By:
          </h2>
          <div className="relative w-full">
            <motion.div
              ref={carouselRef}
              className="cursor-grab active:cursor-grabbing overflow-hidden w-full"
            >
              <motion.div
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                className="flex gap-8 py-4 px-2 select-none w-max"
              >
                {duplicatedClients.map((client, idx) => (
                  <motion.div
                    key={`${client}-${idx}`}
                    className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-white border border-[#1C120C]/10 flex items-center justify-center p-4 shadow-[4px_4px_16px_rgba(28,18,12,0.06)] flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    {renderBrandLogo(client)}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

