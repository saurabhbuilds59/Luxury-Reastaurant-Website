import { motion } from 'motion/react';
import { Calendar, Compass, ArrowDown } from 'lucide-react';
import { RESTAURANT_IMAGES } from '../data';

interface HeroProps {
  onReserveClick: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onReserveClick, onExploreClick }: HeroProps) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={RESTAURANT_IMAGES.hero}
          alt="L'Étoile Dorée Salon"
          className="w-full h-full object-cover object-center opacity-40 scale-105 animate-[pulse_10s_infinite_alternate]"
          referrerPolicy="no-referrer"
        />
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_20%,#000_100%] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0c] via-transparent to-black/70 pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Small Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="h-[1px] w-8 bg-gold-400" />
          <span className="font-mono text-xs md:text-sm uppercase tracking-[0.4em] text-gold-300">
            A Michelin-Star Journey
          </span>
          <span className="h-[1px] w-8 bg-gold-400" />
        </motion.div>

        {/* Brand Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-5xl md:text-8xl tracking-tight text-white mb-6 leading-none"
        >
          L'Étoile Dorée
        </motion.h1>

        {/* Subtitle / Philosophy statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-serif italic text-lg md:text-2xl text-gray-300 max-w-2xl mb-12 font-light leading-relaxed"
        >
          "Where light meets taste, and gastronomy ascends to art."
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={onReserveClick}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-none bg-gold-300 text-black font-sans text-xs tracking-[0.2em] uppercase font-semibold hover:bg-white transition-all duration-300 shadow-xl shadow-gold-300/10 hover:shadow-white/10"
          >
            <Calendar className="w-4 h-4" />
            Book a Table
          </button>
          
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-none border border-white/20 text-white font-sans text-xs tracking-[0.2em] uppercase hover:bg-white/5 hover:border-gold-300 transition-all duration-300"
          >
            <Compass className="w-4 h-4 text-gold-300" />
            Discover Menu
          </button>
        </motion.div>
      </div>

      {/* Downward Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gold-400 cursor-pointer"
        onClick={onExploreClick}
      >
        <span className="font-mono text-[9px] tracking-[0.2em] uppercase">Scroll to Discover</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinite }}
        >
          <ArrowDown className="w-4 h-4 text-gold-300" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// Quick helper to bypass Infinite TS warning if needed (standard Infinite is represented by Infinity in js)
const Infinite = Infinity;
