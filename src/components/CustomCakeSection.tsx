import React, { useState } from 'react';
import { Cake, Calendar, User, Phone, Mail, CheckCircle2, Sparkles, Send } from 'lucide-react';
import { CakeQuoteRequest } from '../types';

export const CustomCakeSection: React.FC = () => {
  const [size, setSize] = useState('8" Round (8-12 Servings)');
  const [flavor, setFlavor] = useState('Vanilla Bean Sponge');
  const [filling, setFilling] = useState('Dutch Bavarian Cream');
  const [inscription, setInscription] = useState('Happy Birthday!');
  const [eventDate, setEventDate] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const cakeSizes = [
    { name: '8" Round (8-12 Servings)', basePrice: 38.00 },
    { name: '10" Round (14-18 Servings)', basePrice: 52.00 },
    { name: '1/4 Sheet Cake (20-25 Servings)', basePrice: 68.00 },
    { name: '1/2 Sheet Cake (40-50 Servings)', basePrice: 110.00 },
    { name: 'Full Sheet Cake (80-100 Servings)', basePrice: 195.00 },
  ];

  const cakeFlavors = [
    'Vanilla Bean Sponge',
    'Rich Dutch Chocolate',
    'Marble Swirl',
    'Red Velvet Velvet',
    'Old Fashioned Carrot Spice'
  ];

  const cakeFillings = [
    'Dutch Bavarian Cream',
    'Strawberry Compote & Whipped Cream',
    'Chocolate Fudge Ganache',
    'Raspberry & Cream',
    'Salted Caramel Buttercream'
  ];

  const currentSizeObj = cakeSizes.find(s => s.name === size) || cakeSizes[0];
  const estimatedTotal = currentSizeObj.basePrice;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setIsSubmitted(true);
  };

  return (
    <section id="cakes" className="py-16 sm:py-20 bg-[#FDFBF7] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-block px-3 py-1 bg-[#D4A373]/10 text-[#D4A373] text-[10px] font-bold uppercase tracking-widest rounded-full">
            Celebrations & Custom Cakes
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#3D2B1F] tracking-tighter">
            Handcrafted Custom Cakes for Every Special Moment
          </h2>
          <p className="text-sm sm:text-base text-stone-500 font-sans">
            Birthdays, weddings, anniversaries, and family milestones. Build your custom cake order below or call us at <a href="tel:4033453322" className="font-bold underline text-[#D4A373]">(403) 345-3322</a>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Info & Gallery Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#3D2B1F] text-[#FDFBF7] p-6 sm:p-8 rounded-2xl shadow-md border border-[#D4A373]/30 space-y-4">
              <span className="bg-[#D4A373] text-[#3D2B1F] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                Made Fresh to Order
              </span>
              <h3 className="font-serif text-2xl font-bold">Scratch-Baked Celebration Slabs & Rounds</h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
                Our cakes are renowned throughout Southern Alberta for their light, moist texture, real cream fillings, and elegant hand-piped decorations.
              </p>

              <div className="space-y-3 pt-2 text-xs border-t border-white/10 font-sans">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4A373]" />
                  <span>Notice: Please submit cake orders at least 48 hours in advance.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4A373]" />
                  <span className="font-semibold text-amber-200">Note: At this time we are only able to do up to a 2 tier cake.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4A373]" />
                  <span>Real butter, fresh whip cream, and custom icing inscriptions included.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4A373]" />
                  <span>Edible photo printing & photo slabs available upon request.</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Direct Cake Hotline</div>
                  <div className="font-bold text-lg text-[#D4A373] font-mono">(403) 345-3322</div>
                </div>
                <a
                  href="tel:4033453322"
                  className="bg-[#D4A373] text-[#3D2B1F] hover:bg-[#C29263] px-4 py-2.5 rounded-lg text-xs uppercase tracking-widest font-bold transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Cake Showcase Image */}
            <div className="rounded-2xl overflow-hidden shadow-xs border border-stone-200 bg-white">
              <img
                src="https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80"
                alt="Custom decorated birthday cake Coaldale Bakery"
                className="w-full h-60 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Interactive Custom Cake Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-2xs">
            
            {isSubmitted ? (
              <div className="text-center py-10 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#3D2B1F]">Cake Quote Request Received!</h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto font-sans">
                  Thank you, <strong>{name}</strong>! Our baker will review your order details for <strong>{size}</strong> on <strong>{eventDate || 'your event date'}</strong> and call you at <strong>{phone}</strong> to confirm design details.
                </p>
                <div className="bg-[#FDFBF7] p-4 rounded-xl text-xs text-stone-500 inline-block border border-stone-200">
                  Custom Quote Request: <strong className="text-[#3D2B1F] text-sm font-sans">{size}</strong>
                </div>
                <div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 bg-[#3D2B1F] text-[#FDFBF7] px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-widest"
                  >
                    Build Another Custom Cake Quote
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="border-b border-stone-200 pb-4 flex justify-between items-center">
                  <div>
                    <h3 className="font-serif font-bold text-xl text-[#3D2B1F]">Build Your Cake Quote</h3>
                    <p className="text-xs text-stone-500 font-sans">Select size, flavor, filling and options below.</p>
                  </div>
                  <div className="bg-[#FDFBF7] px-3.5 py-2 rounded-xl border border-stone-200 text-right">
                    <div className="text-[10px] text-[#D4A373] uppercase font-bold tracking-widest">Custom Cake</div>
                    <div className="font-serif font-bold text-xs text-[#3D2B1F]">Made To Order</div>
                  </div>
                </div>

                {/* Cake Size Selection */}
                <div>
                  <label className="block text-[10px] font-bold text-[#3D2B1F] uppercase tracking-widest mb-2">
                    1. Choose Cake Size & Servings
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {cakeSizes.map((s) => (
                      <button
                        type="button"
                        key={s.name}
                        onClick={() => setSize(s.name)}
                        className={`p-3 rounded-xl text-left border text-xs font-medium transition-all ${
                          size === s.name
                            ? 'bg-[#3D2B1F] text-[#FDFBF7] border-[#3D2B1F] shadow-2xs'
                            : 'bg-[#FDFBF7] text-[#3D2B1F] border-stone-200 hover:border-[#D4A373]'
                        }`}
                      >
                        <div className="font-bold">{s.name}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sponge & Filling Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-[#3D2B1F] uppercase tracking-widest mb-1.5">
                      2. Sponge Flavor
                    </label>
                    <select
                      value={flavor}
                      onChange={(e) => setFlavor(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-[#FDFBF7] border border-stone-200 text-xs text-[#3D2B1F] font-medium focus:ring-1 focus:ring-[#D4A373]"
                    >
                      {cakeFlavors.map((f) => (
                        <option key={f} value={f}>{f}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-[#3D2B1F] uppercase tracking-widest mb-1.5">
                      3. Premium Filling
                    </label>
                    <select
                      value={filling}
                      onChange={(e) => setFilling(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-[#FDFBF7] border border-stone-200 text-xs text-[#3D2B1F] font-medium focus:ring-1 focus:ring-[#D4A373]"
                    >
                      {cakeFillings.map((fil) => (
                        <option key={fil} value={fil}>{fil}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Inscription & Event Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-[#3D2B1F] uppercase tracking-widest mb-1.5">
                      Custom Cake Message
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Happy 50th Anniversary John & Mary!"
                      value={inscription}
                      onChange={(e) => setInscription(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-[#FDFBF7] border border-stone-200 text-xs text-[#3D2B1F] focus:ring-1 focus:ring-[#D4A373]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-[#3D2B1F] uppercase tracking-widest mb-1.5">
                      Pickup / Event Date
                    </label>
                    <input
                      type="date"
                      required
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-[#FDFBF7] border border-stone-200 text-xs text-[#3D2B1F] focus:ring-1 focus:ring-[#D4A373]"
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="pt-2 border-t border-stone-200 space-y-3">
                  <label className="block text-[10px] font-bold text-[#3D2B1F] uppercase tracking-widest">
                    4. Your Contact Information
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Full Name *"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-[#FDFBF7] border border-stone-200 text-xs text-[#3D2B1F]"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number * (e.g. 403-555-0199)"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-[#FDFBF7] border border-stone-200 text-xs text-[#3D2B1F]"
                    />
                  </div>
                  <textarea
                    rows={2}
                    placeholder="Special design instructions, colors, theme, or dietary notes..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-[#FDFBF7] border border-stone-200 text-xs text-[#3D2B1F]"
                  />
                </div>

                <button
                  type="submit"
                  id="submit-cake-quote-btn"
                  className="w-full bg-[#3D2B1F] hover:bg-[#5A4030] text-[#FDFBF7] py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest shadow-xs transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#D4A373]" />
                  <span>Submit Custom Cake Quote Request</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
