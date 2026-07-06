import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Sparkles, SlidersHorizontal, Info, Heart } from 'lucide-react';
import { MENU_ITEMS } from '../data';
import { MenuCategory, MenuItem } from '../types';

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('Mains');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'signature' | 'dietary'>('all');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const categories: MenuCategory[] = ['Appetizers', 'Mains', 'Desserts', 'Cellar & Bar'];

  // Filter items
  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (!matchesCategory || !matchesSearch) return false;

    if (activeFilter === 'signature') {
      return item.isSpecial === true || item.tags?.includes('Signature');
    }
    if (activeFilter === 'dietary') {
      return item.tags?.some(tag => tag.toLowerCase().includes('gluten free') || tag.toLowerCase().includes('vegan'));
    }
    return true;
  });

  return (
    <section id="menu" className="py-24 bg-gradient-to-b from-[#0b0b0c] to-[#121214] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-300/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none border border-gold-300/20 bg-gold-300/5 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-300" />
            <span className="font-mono text-[10px] tracking-[0.2em] text-gold-300 uppercase">La Carte</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">Discover the Menu</h2>
          <p className="font-sans text-sm text-gray-400">
            Every dish is designed by our master chefs, blending traditional French haute techniques with globally sourced rare elements.
          </p>
        </div>

        {/* Filter and Search Bar Controls */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12 pb-6 border-b border-white/5">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start w-full lg:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setActiveFilter('all');
                }}
                className={`px-5 py-2.5 rounded-none text-xs font-sans tracking-widest uppercase transition-all duration-300 relative ${
                  selectedCategory === cat
                    ? 'text-black bg-gold-300 font-semibold shadow-lg shadow-gold-300/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5 border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input and Subfilters */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search culinary items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-none py-2.5 pl-10 pr-4 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-gold-300 transition-colors"
              />
            </div>

            {/* Filter Toggle Buttons */}
            <div className="flex gap-2 bg-black/40 p-1 border border-white/10 rounded-none">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-1.5 rounded-none text-[10px] font-sans tracking-wider uppercase transition-all ${
                  activeFilter === 'all' ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveFilter('signature')}
                className={`px-4 py-1.5 rounded-none text-[10px] font-sans tracking-wider uppercase transition-all ${
                  activeFilter === 'signature' ? 'bg-gold-300/25 text-gold-300' : 'text-gray-400 hover:text-white'
                }`}
              >
                Signatures
              </button>
              <button
                onClick={() => setActiveFilter('dietary')}
                className={`px-4 py-1.5 rounded-none text-[10px] font-sans tracking-wider uppercase transition-all ${
                  activeFilter === 'dietary' ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                Dietary
              </button>
            </div>
          </div>
        </div>

        {/* Menu Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer bg-white/[0.02] hover:bg-white/[0.04] p-6 rounded-none border border-white/5 hover:border-gold-300/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                   {/* Top line Name & Price */}
                  <div className="flex justify-between items-baseline gap-4 mb-2">
                    <h3 className="font-serif text-lg md:text-xl text-white group-hover:text-gold-300 transition-colors flex items-center gap-2">
                      {item.name}
                      {item.isSpecial && (
                        <span className="w-1.5 h-1.5 rounded-none bg-gold-300 inline-block animate-pulse" />
                      )}
                    </h3>
                    <div className="h-[1px] flex-grow border-b border-dashed border-white/10 self-center hidden sm:block" />
                    <span className="font-mono text-sm md:text-base text-gold-300 font-semibold">
                      ${item.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-xs text-gray-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Tags and Action */}
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags?.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[9px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-none ${
                          tag === 'Signature'
                            ? 'bg-gold-300/10 text-gold-300 border border-gold-300/20'
                            : 'bg-white/5 text-gray-400'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-gold-400/60 group-hover:text-gold-300 transition-colors flex items-center gap-1">
                    Details <Info className="w-3 h-3" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <div className="col-span-2 text-center py-20 bg-white/[0.02] rounded-none border border-dashed border-white/10">
              <p className="font-sans text-sm text-gray-500">No dishes match your active filter criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveFilter('all');
                }}
                className="mt-4 font-mono text-xs text-gold-300 hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </motion.div>

        {/* Pairing Recommendation Segment */}
        <div className="mt-16 bg-gradient-to-r from-gold-900/10 via-gold-800/10 to-gold-900/10 border border-gold-300/10 rounded-none p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h4 className="font-serif text-lg md:text-xl text-gold-100 flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-gold-300" />
              Curated Sommeliers Vault
            </h4>
            <p className="font-sans text-xs text-gray-400 leading-relaxed">
              We offer exclusive wine and culinary pairings designed by Master Sommelier Luc Laurent. Let us tailor an exquisite liquid accompaniment to elevate each plate. Mention your pairing preferences on booking.
            </p>
          </div>
          <a
            href="#reservation"
            className="px-6 py-3 rounded-none bg-white/5 border border-white/10 hover:border-gold-300 text-white font-sans text-[10px] tracking-widest uppercase transition-colors whitespace-nowrap"
          >
            Inquire About Pairing
          </a>
        </div>
      </div>

      {/* Item Details Lightbox / Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative w-full max-w-lg bg-[#141417] border border-gold-300/20 rounded-none overflow-hidden p-8 z-10 shadow-2xl"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-gold-400">
                    {selectedItem.category}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl text-white mt-1">
                    {selectedItem.name}
                  </h3>
                </div>
                <span className="font-mono text-xl text-gold-300 font-semibold">
                  ${selectedItem.price}
                </span>
              </div>

              {/* Culinary description */}
              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="text-[10px] font-mono tracking-wider uppercase text-gray-500 mb-1">
                    Composition
                  </h4>
                  <p className="font-sans text-sm text-gray-300 leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-[10px] font-mono tracking-wider uppercase text-gray-500 mb-1.5">
                    Dietary Accents
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedItem.tags?.map((t) => (
                      <span key={t} className="text-[10px] font-mono bg-white/5 text-gray-400 px-2.5 py-0.5 rounded-none border border-white/5">
                        {t}
                      </span>
                    )) || <span className="text-xs text-gray-500 italic">No custom attributes specified</span>}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex gap-4">
                  <div className="flex-1 bg-white/[0.02] p-3 rounded-none border border-white/5">
                    <span className="text-[9px] font-mono uppercase text-gold-300 block mb-0.5">Chef's Suggestion</span>
                    <span className="text-xs text-gray-400 leading-normal">
                      Best appreciated as a second sequence, paired with chilled Grand Cru.
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="flex-1 py-3 rounded-none bg-gold-300 text-black font-sans text-xs tracking-widest uppercase font-semibold hover:bg-white transition-colors"
                >
                  Return to Menu
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
