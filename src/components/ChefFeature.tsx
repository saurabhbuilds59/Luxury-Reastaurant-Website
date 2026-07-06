import { motion } from 'motion/react';
import { Award, Sparkles, ChevronRight, Eye } from 'lucide-react';
import { RESTAURANT_IMAGES } from '../data';

export default function ChefFeature() {
  return (
    <section id="chef-special" className="py-24 bg-black relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-gold-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Chef Signature Art & Image Frame */}
          <div className="col-span-1 lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative rounded-none overflow-hidden aspect-[4/3] shadow-2xl border border-gold-300/15"
            >
              <img
                src={RESTAURANT_IMAGES.menuFeature}
                alt="Signature Chef Plating"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Subtle gold gradient over top */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              
              {/* Overlay Label */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div>
                  <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-gold-300 block mb-0.5">Tonight's Composition</span>
                  <h4 className="font-serif text-lg text-white font-medium">L'Éclipse de Bœuf et Caviar</h4>
                </div>
                <div className="w-10 h-10 rounded-none bg-gold-300/90 flex items-center justify-center text-black">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
            </motion.div>

            {/* Floating Detail Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 bg-[#141417]/95 backdrop-blur-md border border-gold-300/10 p-5 rounded-none hidden md:flex items-center gap-4 max-w-xs shadow-xl"
            >
              <div className="p-3 rounded-none bg-gold-300/10 text-gold-300">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-[9px] tracking-widest text-gold-400 uppercase block">Accolade</span>
                <p className="font-sans text-xs text-gray-300 leading-normal font-medium mt-0.5">
                  Voted Top 10 Plated Arts of the Century by Guide Gault&Millau.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Biography, Story, Philosophy */}
          <div className="col-span-1 lg:col-span-6 flex flex-col justify-center">
            <span className="font-mono text-xs text-gold-300 tracking-[0.3em] uppercase mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> The Chef's Vision
            </span>
            <h3 className="font-serif text-3xl md:text-5xl text-white mb-6 leading-tight">
              Crafting Fleeting Masterpieces
            </h3>

            <div className="space-y-6 font-sans text-sm text-gray-400 leading-relaxed mb-8">
              <p>
                Executive Chef <strong className="text-white font-serif">Jean-Luc Dupont</strong> views gastronomy not merely as nourishment, but as a multi-sensory symphony designed to elicit genuine emotion. Having spent a decade in Paris's three-star establishments, his arrival at <span className="text-gold-300">L'Étoile Dorée</span> heralds a golden age of culinary modernism.
              </p>
              <blockquote className="border-l-2 border-gold-300 pl-6 italic text-gray-300 font-serif text-base py-1">
                "An exceptional plate must excite the eyes first, intrigue the scent next, and finally deliver a sensory crescendo upon the tongue that feels entirely new yet deeply comforting."
              </blockquote>
              <p>
                Every menu is curated around seasonal migration patterns of rare ingredients — white truffles from Alba, Japanese Wagyu from Miyazaki, and wild caviar from the cold Baltic.
              </p>
            </div>

            {/* Highlight stats or milestones */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-white/5 mb-8">
              <div>
                <span className="font-serif text-2xl md:text-3xl text-gold-300 block mb-1">03</span>
                <span className="font-mono text-[9px] tracking-widest uppercase text-gray-500">Michelin Stars</span>
              </div>
              <div>
                <span className="font-serif text-2xl md:text-3xl text-gold-300 block mb-1">100%</span>
                <span className="font-mono text-[9px] tracking-widest uppercase text-gray-500">Organic Sourcing</span>
              </div>
              <div>
                <span className="font-serif text-2xl md:text-3xl text-gold-300 block mb-1">12</span>
                <span className="font-mono text-[9px] tracking-widest uppercase text-gray-500">Tables Nightly</span>
              </div>
            </div>

            <a
              href="#reservation"
              className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-gold-300 hover:text-white transition-colors duration-300 group self-start"
            >
              Book an Intimate Kitchen View Table
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
