import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Sparkles, MessageSquare, Check } from 'lucide-react';
import { TESTIMONIALS } from '../data';
import { Testimonial } from '../types';

export default function TestimonialSection() {
  const [reviews, setReviews] = useState<Testimonial[]>([]);
  const [author, setAuthor] = useState('');
  const [role, setRole] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  const [showThankYou, setShowThankYou] = useState(false);

  // Load reviews on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('etoile_reviews');
      if (stored) {
        setReviews(JSON.parse(stored));
      } else {
        setReviews(TESTIMONIALS);
      }
    } catch (e) {
      console.error(e);
      setReviews(TESTIMONIALS);
    }
  }, []);

  const handlePostReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !comment) return;

    const newReview: Testimonial = {
      id: 'rev-' + Date.now(),
      author,
      role: role || 'Gourmet Patron',
      comment,
      rating,
    };

    const updated = [newReview, ...reviews];
    setReviews(updated);
    localStorage.setItem('etoile_reviews', JSON.stringify(updated));

    // Clear form
    setAuthor('');
    setRole('');
    setComment('');
    setRating(5);

    // Show Thank you
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 4000);
  };

  return (
    <section id="testimonials" className="py-24 bg-[#121214] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold-300/[0.015] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none border border-gold-300/20 bg-gold-300/5 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-300" />
            <span className="font-mono text-[10px] tracking-[0.2em] text-gold-300 uppercase">Evaluations</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">The Guest Book</h2>
          <p className="font-sans text-sm text-gray-400">
            Hear from distinguished connoisseurs, gastronomy editors, and returning diners who have savored our candlelight tables.
          </p>
        </div>

        {/* Two-Column Grid: Left: Reviews ledger, Right: Write a Review Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Reviews List */}
          <div className="col-span-1 lg:col-span-8 space-y-6">
            <AnimatePresence mode="popLayout">
              {reviews.map((rev) => (
                <motion.div
                  key={rev.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-black/35 border border-white/5 p-6 md:p-8 rounded-none flex flex-col md:flex-row justify-between gap-6 hover:border-gold-300/10 transition-colors"
                >
                  <div className="flex-1">
                    {/* Stars bar */}
                    <div className="flex items-center gap-1 text-gold-300 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${i < rev.rating ? 'fill-gold-300 text-gold-300' : 'text-gray-600'}`}
                        />
                      ))}
                    </div>

                    {/* Comment text */}
                    <p className="font-serif italic text-base text-gray-300 leading-relaxed mb-4">
                      "{rev.comment}"
                    </p>

                    {/* Author block */}
                    <div className="flex items-center gap-3">
                      <div>
                        <h4 className="font-serif text-sm text-white font-medium">{rev.author}</h4>
                        <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block mt-0.5">{rev.role}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Feedback / Review form */}
          <div className="col-span-1 lg:col-span-4 bg-black/45 border border-white/5 rounded-none p-6 md:p-8">
            <h3 className="font-serif text-xl text-white mb-2 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-gold-300" />
              Sign our Guest Book
            </h3>
            <p className="font-sans text-[11px] text-gray-400 mb-6 leading-relaxed">
              Have you dined under our golden arches? Share your critical evaluation or dining memory.
            </p>

            <form onSubmit={handlePostReview} className="space-y-4">
              <div>
                <label className="block text-[10px] font-mono tracking-wider uppercase text-gray-400 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="E.g., Charlotte Belmont"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full bg-black/60 border border-white/10 rounded-none px-4 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-gold-300 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono tracking-wider uppercase text-gray-400 mb-1.5">
                  Your Title / Role
                </label>
                <input
                  type="text"
                  placeholder="E.g., Epicurean Enthusiast"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-black/60 border border-white/10 rounded-none px-4 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-gold-300 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono tracking-wider uppercase text-gray-400 mb-1.5">
                  Rating Selection
                </label>
                <div className="flex gap-1.5">
                  {[1, 2, 3, 4, 5].map((stars) => (
                    <button
                      key={stars}
                      type="button"
                      onClick={() => setRating(stars)}
                      className="text-gold-300 hover:scale-110 transition-transform"
                    >
                      <Star className={`w-6 h-6 ${stars <= rating ? 'fill-gold-300 text-gold-300' : 'text-gray-600'}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono tracking-wider uppercase text-gray-400 mb-1.5">
                  Your Experience
                </label>
                <textarea
                  required
                  placeholder="Describe the plating, service level, or custom paired wines..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full bg-black/60 border border-white/10 rounded-none px-4 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-gold-300 transition-colors h-24 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-none bg-gold-300 hover:bg-white text-black font-sans text-xs tracking-widest uppercase font-semibold transition-colors duration-300"
              >
                Sign Guest Book
              </button>
            </form>

            {/* Thank you modal toast */}
            <AnimatePresence>
              {showThankYou && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 p-3 bg-gold-300/10 border border-gold-300/20 rounded-none text-center flex items-center justify-center gap-2 text-gold-300"
                >
                  <Check className="w-4 h-4 shrink-0" />
                  <span className="font-mono text-[10px] tracking-wider uppercase">Review appended to the ledger!</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
