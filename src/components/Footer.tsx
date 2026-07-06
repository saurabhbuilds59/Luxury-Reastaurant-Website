import { MapPin, Phone, Mail, Sparkles, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-500 py-16 border-t border-white/5 relative overflow-hidden">
      {/* Visual Ambient Bottom Corner Glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold-400/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/5">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-none border border-gold-300 flex items-center justify-center text-gold-300">
                <Sparkles className="w-3 h-3" />
              </div>
              <span className="font-serif text-base tracking-[0.15em] uppercase text-white">
                L'Étoile Dorée
              </span>
            </div>
            <p className="font-sans text-xs text-gray-400 leading-relaxed">
              Curating exceptional multi-sensory culinary voyages under candlelight. Experience the peak of modern French Gastronomy.
            </p>
          </div>

          {/* Opening Hours Col */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm text-white tracking-widest uppercase">
              Heures d'Ouverture
            </h4>
            <ul className="space-y-2 font-sans text-xs text-gray-400">
              <li className="flex justify-between">
                <span>Wednesday – Friday</span>
                <span className="font-mono text-gold-300">17:00 – 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday – Sunday</span>
                <span className="font-mono text-gold-300">17:00 – 00:00</span>
              </li>
              <li className="flex justify-between text-gray-600">
                <span>Monday – Tuesday</span>
                <span className="font-mono">Private Vault events</span>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm text-white tracking-widest uppercase">
              Direct Contact
            </h4>
            <ul className="space-y-3 font-sans text-xs text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-300 shrink-0" />
                <span>15 Rue de l'Étoile, 75017 Paris, France</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold-300 shrink-0" />
                <span>+33 1 45 63 20 20</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold-300 shrink-0" />
                <span>concierge@etoile-doree.com</span>
              </li>
            </ul>
          </div>

          {/* Accolades Col */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm text-white tracking-widest uppercase">
              Gastronomy Ranks
            </h4>
            <div className="flex gap-1 bg-white/[0.02] border border-white/5 p-4 rounded-none items-start gap-3">
              <Clock className="w-5 h-5 text-gold-300 shrink-0 mt-0.5" />
              <div>
                <span className="font-mono text-[9px] text-gold-300 uppercase tracking-wider block">Notice</span>
                <p className="font-sans text-[11px] text-gray-400 leading-relaxed mt-0.5">
                  Due to our seating policy, we strictly require jacket dress-code. Children under 12 by custom vault reservation only.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Bottom line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-[11px] text-gray-600">
          <p>© {new Date().getFullYear()} L'Étoile Dorée. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold-300 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-gold-300 transition-colors">Michelin Guidelines</a>
            <span>•</span>
            <a href="#" className="hover:text-gold-300 transition-colors">Dress Code Accordance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
