'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Footer from '@/components/ui/Footer';
import { ARTWORKS } from '@/content/artworks';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export default function ShopPage() {
  return (
    <div className="pt-32 pb-16 px-6 md:px-12 bg-[#070708] min-h-screen text-[#F4F1EA]">
      <div className="max-w-7xl mx-auto">
        {/* Header Title Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-4 text-[#FF4D4D] font-mono text-sm uppercase tracking-widest"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Studio Store</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl sm:text-8xl md:text-9xl font-normal text-[#F4F1EA] tracking-tight mb-8"
          >
            Artworks
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#F4F1EA]/70 text-base sm:text-lg font-light leading-relaxed max-w-5xl"
          >
            <p>
              A curated collection of original physical works on paper and fine art drawings by Alex. Each piece is unique, signed, and shipped globally from our Lagos studio.
            </p>
            <p>
              Click any artwork to open an inquiry. Prices exclude shipping and taxes, which are calculated upon receipt of your delivery details.
            </p>
          </motion.div>
        </div>

        {/* Artworks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-24">
          {ARTWORKS.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col border border-[#F4F1EA]/10 bg-[#0D0D0F] overflow-hidden group hover:border-[#FF4D4D]/50 transition-colors duration-500"
            >
              {/* Image Container */}
              <div 
                className="relative aspect-square sm:aspect-[4/5] w-full overflow-hidden bg-[#121214] cursor-pointer"
                data-cursor-text="Inquire"
              >
                <Link href={`/contact?artwork=${encodeURIComponent(artwork.title)}`}>
                  <Image
                    src={artwork.image}
                    alt={artwork.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                  {/* Subtle Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </div>

              {/* Editorial Details */}
              <div className="p-8 flex flex-col justify-between flex-1 border-t border-[#F4F1EA]/10">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-white group-hover:text-[#FF4D4D] transition-colors">
                      {artwork.title}
                    </h2>
                    <span className="font-mono text-sm text-[#F4F1EA]/50">{artwork.year}</span>
                  </div>
                  
                  <div className="text-sm font-mono text-[#F4F1EA]/60 mb-6 uppercase tracking-wider">
                    {artwork.medium}
                  </div>

                  <p className="text-sm text-[#F4F1EA]/80 font-light leading-relaxed mb-8">
                    {artwork.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#F4F1EA]/05">
                  {/* Pricing */}
                  <div className="font-mono text-xl sm:text-2xl text-white">
                    <span>${artwork.priceUSD}</span>
                    <span className="text-sm text-[#F4F1EA]/40 mx-2">/</span>
                    <span className="text-lg text-[#F4F1EA]/80">₦{artwork.priceNGN.toLocaleString()}</span>
                  </div>

                  {/* Purchase Link */}
                  <Link
                    href={`/contact?artwork=${encodeURIComponent(artwork.title)}`}
                    className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-[#FF4D4D] hover:text-white transition-colors group/btn"
                    data-cursor-text="Inquire"
                  >
                    <span>Inquire to Buy</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
