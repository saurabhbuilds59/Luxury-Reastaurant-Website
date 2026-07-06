import { Sparkles, Award, UtensilsCrossed } from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import ChefFeature from './components/ChefFeature';
import GallerySection from './components/GallerySection';
import ReservationSection from './components/ReservationSection';
import TestimonialSection from './components/TestimonialSection';
import Footer from './components/Footer';

export default function App() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F3F4F6] font-sans antialiased overflow-x-hidden selection:bg-gold-300 selection:text-black">
      {/* Dynamic Header */}
      <Navbar onReserveClick={() => scrollToSection('reservation')} />

      {/* Hero Welcome Segment */}
      <Hero 
        onReserveClick={() => scrollToSection('reservation')} 
        onExploreClick={() => scrollToSection('menu')} 
      />

      {/* Restaurant Philosophy Block */}
      <section id="philosophy" className="py-24 bg-black relative">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center p-3 rounded-none bg-gold-300/10 border border-gold-300/20 text-gold-300 mb-8"
          >
            <UtensilsCrossed className="w-5 h-5" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-3xl md:text-5xl text-white mb-8 tracking-tight"
          >
            A Symphony of Light & Haute Gastronomy
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-sans text-sm md:text-base text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            At <span className="text-gold-300">L'Étoile Dorée</span>, dining is elevated to a spiritual sequence. Led by three-star Michelin master Jean-Luc Dupont, we invite guests to an intimate theatre where rare ingredients, warm candlelight, and discrete hospitality coalesce. From our custom caviar selections to the signature gold-infused desserts, each moment is calibrated for absolute elegance.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/5">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center"
            >
              <Award className="w-6 h-6 text-gold-300 mb-2" />
              <h3 className="font-serif text-sm text-white font-medium uppercase tracking-wider">Michelin Rank</h3>
              <p className="font-sans text-xs text-gray-500 mt-1">Voted as Three Star excellence by guide inspecteurs</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <Sparkles className="w-6 h-6 text-gold-300 mb-2" />
              <h3 className="font-serif text-sm text-white font-medium uppercase tracking-wider">Caviar & Truffle Bar</h3>
              <p className="font-sans text-xs text-gray-500 mt-1">Direct morning sourcing from Baltic and Alba soils</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center"
            >
              <UtensilsCrossed className="w-6 h-6 text-gold-300 mb-2" />
              <h3 className="font-serif text-sm text-white font-medium uppercase tracking-wider">Twelve Tables</h3>
              <p className="font-sans text-xs text-gray-500 mt-1">Unrivaled exclusivity focusing on personalized focus</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Culinary Menu segment */}
      <MenuSection />

      {/* Chef story spotlight */}
      <ChefFeature />

      {/* Photo Gallery Masonry and Lightbox */}
      <GallerySection />

      {/* Stored reviews guestbook */}
      <TestimonialSection />

      {/* Intelligent scheduler coordination */}
      <ReservationSection />

      {/* Luxury Brand Footer block */}
      <Footer />
    </div>
  );
}
