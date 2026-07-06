import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, ChevronLeft, ChevronRight, X, Image as ImageIcon } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<'All' | GalleryItem['category']>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: ('All' | GalleryItem['category'])[] = ['All', 'Atmosphere', 'Plating'];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'All') return true;
    return item.category === activeFilter;
  });

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const nextIndex = lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1;
    setLightboxIndex(nextIndex);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const nextIndex = lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1;
    setLightboxIndex(nextIndex);
  };

  return (
    <section id="gallery" className="py-24 bg-[#0b0b0c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-mono text-xs text-gold-300 tracking-[0.3em] uppercase mb-2 block">
              Curated Atmosphere
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-white">
              The Salon & Gallery
            </h2>
          </div>

          {/* Filters */}
          <div className="flex gap-2 bg-black/40 p-1 border border-white/5 rounded-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveFilter(cat);
                  setLightboxIndex(null);
                }}
                className={`px-5 py-2 rounded-none text-[10px] font-sans tracking-widest uppercase transition-all ${
                  activeFilter === cat
                    ? 'bg-gold-300 text-black font-semibold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onClick={() => setLightboxIndex(index)}
              className="group cursor-pointer relative overflow-hidden rounded-none aspect-[4/3] border border-white/5 bg-[#141417]"
            >
              <img
                src={item.url}
                alt={item.caption}
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Blur backdrop on overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-300 flex flex-col justify-end p-6" />

              {/* Action Circle */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-none bg-gold-300 text-black flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <Eye className="w-5 h-5" />
                </div>
              </div>

              {/* Caption Bottom overlay */}
              <div className="absolute bottom-0 inset-x-0 p-5 transform translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none text-left">
                <span className="font-mono text-[8px] tracking-widest text-gold-300 uppercase block mb-1">
                  {item.category}
                </span>
                <p className="font-serif text-xs italic text-gray-200 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery Footer Note */}
        <div className="mt-12 text-center flex items-center justify-center gap-2">
          <ImageIcon className="w-4 h-4 text-gold-300" />
          <span className="font-mono text-[10px] tracking-widest uppercase text-gray-500">
            Click on any plate to view the culinary details
          </span>
        </div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md">
            {/* Close button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 z-50 p-3 bg-white/5 rounded-none border border-white/10 text-white hover:text-gold-300 transition-colors hover:bg-white/10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left selector */}
            <button
              onClick={handlePrev}
              className="absolute left-6 z-40 p-4 bg-white/5 rounded-none border border-white/10 text-white hover:text-gold-300 transition-colors hover:bg-white/10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Center Slider content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-4xl w-full px-6 flex flex-col items-center justify-center gap-6"
            >
              <div className="relative rounded-none overflow-hidden border border-gold-300/10 shadow-2xl bg-black max-h-[70vh]">
                <img
                  src={filteredItems[lightboxIndex].url}
                  alt={filteredItems[lightboxIndex].caption}
                  className="max-w-full max-h-[70vh] object-contain mx-auto"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Bottom Details panel */}
              <div className="text-center max-w-xl">
                <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-gold-300 mb-2 block">
                  {filteredItems[lightboxIndex].category}
                </span>
                <p className="font-serif italic text-lg text-white leading-relaxed">
                  "{filteredItems[lightboxIndex].caption}"
                </p>
                <div className="mt-4 text-gray-500 font-mono text-[10px] uppercase tracking-widest">
                  Image {lightboxIndex + 1} of {filteredItems.length}
                </div>
              </div>
            </motion.div>

            {/* Right selector */}
            <button
              onClick={handleNext}
              className="absolute right-6 z-40 p-4 bg-white/5 rounded-none border border-white/10 text-white hover:text-gold-300 transition-colors hover:bg-white/10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
