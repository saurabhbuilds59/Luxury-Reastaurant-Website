import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, Users, Sofa, Check, Ticket, Sparkles, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Reservation } from '../types';

export default function ReservationSection() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(2);
  const [tablePreference, setTablePreference] = useState<Reservation['tablePreference']>('Standard');
  const [specialRequests, setSpecialRequests] = useState('');
  const [confirmedReservation, setConfirmedReservation] = useState<Reservation | null>(null);

  // Load existing reservations from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('etoile_reservations');
      if (stored) {
        setReservations(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to parse reservations:', e);
    }
  }, []);

  // Save reservation
  const handleReserve = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !date || !time) return;

    const newReservation: Reservation = {
      id: 'etoile-' + Math.floor(100000 + Math.random() * 900000),
      name,
      email,
      phone,
      date,
      time,
      guests,
      tablePreference,
      specialRequests: specialRequests || undefined,
      createdAt: new Date().toISOString(),
    };

    const updated = [newReservation, ...reservations];
    setReservations(updated);
    localStorage.setItem('etoile_reservations', JSON.stringify(updated));

    // Clear form
    setName('');
    setEmail('');
    setPhone('');
    setDate('');
    setTime('');
    setGuests(2);
    setTablePreference('Standard');
    setSpecialRequests('');

    // Trigger ticket preview
    setConfirmedReservation(newReservation);
  };

  // Cancel / Delete reservation
  const handleCancelReservation = (id: string) => {
    const updated = reservations.filter((r) => r.id !== id);
    setReservations(updated);
    localStorage.setItem('etoile_reservations', JSON.stringify(updated));
  };

  // Static options
  const times = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'];
  const preferences: { name: Reservation['tablePreference']; desc: string }[] = [
    { name: 'Standard', desc: 'Elegant seating in our quiet main lounge' },
    { name: 'Window View', desc: 'Overlooking our candlelit lavender terrace' },
    { name: 'Chef\'s Table', desc: 'Direct view into our high-energy culinary theatre' },
    { name: 'Private Room', desc: 'Elite separated chamber with personal assistant' },
  ];

  return (
    <section id="reservation" className="py-24 bg-[#111113] border-t border-white/5 relative overflow-hidden">
      {/* Visual Ambient Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-400/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Reservation Form */}
          <div className="col-span-1 lg:col-span-7 bg-black/40 border border-white/5 rounded-none p-6 md:p-10 backdrop-blur-md">
            <span className="font-mono text-xs text-gold-300 tracking-[0.3em] uppercase mb-2 block">
              Reservation Coordinator
            </span>
            <h3 className="font-serif text-3xl md:text-4xl text-white mb-6">
              Secure Your Table
            </h3>
            <p className="font-sans text-xs text-gray-400 mb-8 leading-relaxed">
              Kindly complete the booking coordination form. Due to our limited seating of 12 tables nightly, we highly advise securing reservations up to 14 days in advance.
            </p>

            <form onSubmit={handleReserve} className="space-y-6">
              {/* Guest Counter */}
              <div>
                <label className="block text-[10px] font-mono tracking-wider uppercase text-gray-400 mb-3">
                  Number of Guests
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setGuests(num)}
                      className={`w-10 h-10 rounded-none font-mono text-xs transition-all ${
                        guests === num
                          ? 'bg-gold-300 text-black font-semibold'
                          : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              {/* Personal Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[10px] font-mono tracking-wider uppercase text-gray-400 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="E.g., Lord Sterling"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 rounded-none px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-gold-300 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono tracking-wider uppercase text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@luxury.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 rounded-none px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-gold-300 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono tracking-wider uppercase text-gray-400 mb-2">
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 0192"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 rounded-none px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-gold-300 transition-all"
                  />
                </div>
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono tracking-wider uppercase text-gray-400 mb-2">
                    Reservation Date
                  </label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-300 pointer-events-none" />
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-black/60 border border-white/10 rounded-none pl-10 pr-4 py-3 text-xs text-white focus:outline-none focus:border-gold-300 transition-all [color-scheme:dark]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-mono tracking-wider uppercase text-gray-400 mb-2">
                    Seating Time
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-300 pointer-events-none" />
                    <select
                      required
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-black/60 border border-white/10 rounded-none pl-10 pr-4 py-3 text-xs text-white focus:outline-none focus:border-gold-300 transition-all appearance-none"
                    >
                      <option value="" disabled>Select Dinner Seating</option>
                      {times.map((t) => (
                        <option key={t} value={t}>{t} PM</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Table Seating Preference */}
              <div>
                <label className="block text-[10px] font-mono tracking-wider uppercase text-gray-400 mb-3">
                  Seating / Room Preference
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {preferences.map((pref) => (
                    <div
                      key={pref.name}
                      onClick={() => setTablePreference(pref.name)}
                      className={`cursor-pointer p-4 rounded-none border text-left transition-all duration-300 flex items-start gap-3 ${
                        tablePreference === pref.name
                          ? 'border-gold-300 bg-gold-300/10'
                          : 'border-white/5 bg-black/30 hover:bg-black/50 hover:border-white/10'
                      }`}
                    >
                      <div className={`p-1.5 rounded-none ${tablePreference === pref.name ? 'bg-gold-300 text-black' : 'bg-white/5 text-gold-300'}`}>
                        <Sofa className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-sans text-xs font-semibold text-white">{pref.name}</h4>
                        <p className="font-sans text-[10px] text-gray-400 mt-0.5">{pref.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special Notes */}
              <div>
                <label className="block text-[10px] font-mono tracking-wider uppercase text-gray-400 mb-2">
                  Special Notes or Allergies (Optional)
                </label>
                <textarea
                  placeholder="E.g., Nut allergy, celebrating our silver anniversary, require discrete table..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full bg-black/60 border border-white/10 rounded-none px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-gold-300 transition-all h-20 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-none bg-gold-300 hover:bg-white text-black font-sans text-xs tracking-widest uppercase font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Request Dinner Invitation
              </button>
            </form>
          </div>

          {/* Side Content: Active Reservations or Ticket Confirmed */}
          <div className="col-span-1 lg:col-span-5 space-y-8 lg:sticky lg:top-24">
            
            {/* Active booking receipt preview */}
            <AnimatePresence mode="wait">
              {confirmedReservation ? (
                <motion.div
                  key="ticket"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="relative bg-gradient-to-b from-[#1c1c20] to-[#121214] border border-gold-300/20 rounded-none overflow-hidden p-6 shadow-2xl"
                >
                  {/* Gold sparkles top crown */}
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500" />
                  
                  <div className="text-center pt-4 pb-6 border-b border-white/10">
                    <div className="w-12 h-12 rounded-none bg-gold-300/10 flex items-center justify-center text-gold-300 mx-auto mb-3">
                      <Ticket className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-gold-300">Invitation Confirmed</span>
                    <h4 className="font-serif text-2xl text-white mt-1">L'Étoile Dinner Pass</h4>
                    <span className="font-mono text-[10px] bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-none mt-3 inline-block">
                      Invitation Code: {confirmedReservation.id}
                    </span>
                  </div>

                  <div className="py-6 space-y-4 text-xs border-b border-white/10 border-dashed">
                    <div className="flex justify-between">
                      <span className="text-gray-500 font-mono uppercase">Guest of Honor</span>
                      <span className="text-white font-medium">{confirmedReservation.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 font-mono uppercase">Party Size</span>
                      <span className="text-white font-medium">{confirmedReservation.guests} Persons</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 font-mono uppercase">Date & Time</span>
                      <span className="text-gold-300 font-medium">{confirmedReservation.date} @ {confirmedReservation.time} PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 font-mono uppercase">Placing Preference</span>
                      <span className="text-white font-medium">{confirmedReservation.tablePreference}</span>
                    </div>
                    {confirmedReservation.specialRequests && (
                      <div className="bg-black/30 p-3 rounded-none border border-white/5 mt-2">
                        <span className="text-[9px] font-mono text-gold-300 uppercase block mb-1">Special Accordance</span>
                        <p className="text-gray-400 text-[11px] leading-relaxed italic">"{confirmedReservation.specialRequests}"</p>
                      </div>
                    )}
                  </div>

                  {/* House Rules */}
                  <div className="pt-6 space-y-2">
                    <h5 className="font-mono text-[9px] tracking-widest uppercase text-gray-400 mb-2">Important Directives</h5>
                    <div className="flex items-start gap-2 text-[11px] text-gray-400 leading-normal">
                      <Check className="w-3.5 h-3.5 text-gold-300 shrink-0 mt-0.5" />
                      <span>Dress Accord: Cocktail Elegant. Black jackets and formal wear are highly encouraged.</span>
                    </div>
                    <div className="flex items-start gap-2 text-[11px] text-gray-400 leading-normal">
                      <Check className="w-3.5 h-3.5 text-gold-300 shrink-0 mt-0.5" />
                      <span>Seating Grace: Reservations are held for 15 minutes. Kindly arrive 10 minutes early.</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setConfirmedReservation(null)}
                    className="mt-6 w-full py-2.5 rounded-none bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold-300/30 text-white font-mono text-[10px] tracking-widest uppercase transition-all"
                  >
                    Create Another Request
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="house-info"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-black/20 border border-white/5 p-6 md:p-8 rounded-none"
                >
                  <h4 className="font-serif text-lg text-white mb-4">Elite Guest Service</h4>
                  <p className="font-sans text-xs text-gray-400 leading-relaxed mb-6">
                    Our concierge is available at all hours to assist with transport, security coordination, private menus, or custom vintage selections from our vaults.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-none bg-gold-300/10 flex items-center justify-center text-gold-300 shrink-0">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="font-sans text-xs text-white font-semibold">Concierge Line</h5>
                        <p className="font-mono text-[11px] text-gray-400">+1 (800) L-ETOILE</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Existing reservations list (Local browser persistent ledger) */}
            {reservations.length > 0 && (
              <div className="bg-[#17171a] border border-white/5 p-6 rounded-none">
                <h4 className="font-serif text-sm text-white mb-4 flex items-center justify-between">
                  <span>Your Stored Reservations</span>
                  <span className="font-mono text-[10px] bg-gold-300/15 text-gold-300 px-2 py-0.5 rounded-none">
                    {reservations.length} Active
                  </span>
                </h4>
                
                <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                  {reservations.map((res) => (
                    <div
                      key={res.id}
                      className="p-4 rounded-none bg-black/40 border border-white/5 flex items-center justify-between gap-4 group"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-sans text-xs font-semibold text-white truncate">{res.name}</span>
                          <span className="font-mono text-[9px] text-gold-300 shrink-0">{res.time} PM</span>
                        </div>
                        <p className="font-mono text-[10px] text-gray-500 mt-1">
                          {res.date} • {res.guests} guests • {res.tablePreference}
                        </p>
                      </div>

                      <button
                        onClick={() => handleCancelReservation(res.id)}
                        className="text-gray-500 hover:text-red-400 transition-colors shrink-0 p-1 rounded-none hover:bg-white/5"
                        title="Cancel Reservation"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
