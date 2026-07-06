import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onReserveClick: () => void;
}

export default function Navbar({ onReserveClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Le Menu', href: '#menu' },
    { name: 'L\'Étoile Special', href: '#chef-special' },
    { name: 'The Gallery', href: '#gallery' },
    { name: 'Guest Reviews', href: '#testimonials' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-black/85 backdrop-blur-md border-b border-gold-300/10 py-4 shadow-xl'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 rounded-none border border-gold-300 flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:rotate-180">
              <Sparkles className="w-4 h-4 text-gold-300" />
              <div className="absolute inset-0 bg-gold-300/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-[0.2em] uppercase text-white group-hover:text-gold-300 transition-colors duration-300">
                L'Étoile Dorée
              </span>
              <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-gold-400">
                Haute Gastronomie
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-xs tracking-widest uppercase text-gray-400 hover:text-gold-300 transition-colors duration-300 relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-300 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Reserve Button */}
          <div className="hidden lg:block">
            <button
              onClick={onReserveClick}
              className="px-6 py-2.5 rounded-none border border-gold-300/30 text-gold-300 font-sans text-xs tracking-widest uppercase hover:bg-gold-300 hover:text-black hover:border-gold-300 transition-all duration-300 shadow-lg shadow-gold-300/5 hover:shadow-gold-300/20"
            >
              Reserve Table
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-300 hover:text-gold-300 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-0 pt-24 pb-8 bg-black/95 backdrop-blur-xl border-b border-gold-300/20 z-40 lg:hidden px-6 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif text-lg text-gray-300 hover:text-gold-300 py-2 border-b border-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onReserveClick();
              }}
              className="mt-4 px-6 py-3 rounded-none border border-gold-300 text-gold-300 text-center font-sans text-xs tracking-widest uppercase hover:bg-gold-300 hover:text-black transition-all"
            >
              Reserve Table
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
