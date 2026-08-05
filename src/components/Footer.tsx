import React, { useState } from 'react';
import { Phone, MapPin, Globe, Clock, Heart, ArrowRight, Check, Instagram } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryData';
import logoImg from '../assets/images/coaldale_logo_exact_1785891207590.jpg';
import { ScrollFloat } from './ScrollFloat';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 3000);
  };

  return (
    <footer className="bg-[#3D2B1F] text-[#FDFBF7] pt-16 pb-12 border-t border-[#D4A373]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollFloat delay={0.1} direction="up" distance={25}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/10">
            
            {/* Brand Col */}
            <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={logoImg} 
                alt="Coaldale Bakery Logo" 
                referrerPolicy="no-referrer"
                className="h-12 w-auto object-contain bg-white/90 p-1 rounded-md border border-[#D4A373]/40"
              />
              <div>
                <h3 className="font-serif text-2xl font-bold text-white leading-none">Coaldale Bakery</h3>
                <span className="text-[10px] text-[#D4A373] font-bold uppercase tracking-widest">
                  Coaldale, Alberta • Est. 1986
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-sm font-sans">
              Locally loved family bakery bringing authentic scratch baking, artisan sourdoughs, Dutch treats, famous sausage rolls, and custom celebration cakes to Southern Alberta.
            </p>

            <div className="pt-2 text-xs text-[#D4A373] font-bold uppercase tracking-widest flex items-center gap-2">
              <Heart className="w-4 h-4 fill-[#D4A373]" />
              <span>4.8 Stars with 490+ Google Customer Reviews</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3 font-sans">
            <h4 className="font-serif font-bold text-sm text-[#D4A373] uppercase tracking-widest">
              Explore
            </h4>
            <ul className="space-y-2 text-xs font-medium text-stone-300">
              <li>
                <button onClick={() => onNavigate('menu')} className="hover:text-[#D4A373] transition-colors">
                  Full Bakery Menu
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('amenities')} className="hover:text-[#D4A373] transition-colors">
                  Amenities & Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('reviews')} className="hover:text-[#D4A373] transition-colors">
                  Customer Reviews
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('location')} className="hover:text-[#D4A373] transition-colors">
                  Location & Map
                </button>
              </li>
            </ul>
          </div>

          {/* Store Info */}
          <div className="lg:col-span-3 space-y-3 font-sans">
            <h4 className="font-serif font-bold text-sm text-[#D4A373] uppercase tracking-widest">
              Store Info & Takeout
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4A373] shrink-0 mt-0.5" />
                <span>{BAKERY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4A373] shrink-0" />
                <a href={`tel:${BAKERY_INFO.phone.replace(/[^0-9]/g, '')}`} className="hover:text-[#D4A373] font-mono font-bold">
                  {BAKERY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#D4A373] shrink-0" />
                <a href={`https://${BAKERY_INFO.website}`} target="_blank" rel="noreferrer" className="hover:text-[#D4A373]">
                  {BAKERY_INFO.website}
                </a>
              </li>
              <li className="flex items-center gap-2 pt-1">
                <Instagram className="w-4 h-4 text-[#D4A373] shrink-0" />
                <a 
                  href={BAKERY_INFO.instagramUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-[#D4A373] transition-colors flex items-center gap-1"
                  id="footer-instagram-link"
                >
                  <span>Follow @coaldale_bakery</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1 border-t border-white/10 text-stone-400">
                <Clock className="w-4 h-4 text-[#D4A373] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white uppercase text-[10px] tracking-wider">Hours of Operation:</div>
                  <div>Tue - Sat: 7:00 AM - 6:00 PM</div>
                  <div className="text-rose-400 font-semibold">Sun & Mon: Closed</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-3 space-y-3 font-sans">
            <h4 className="font-serif font-bold text-sm text-[#D4A373] uppercase tracking-widest">
              Fresh Oven Alerts
            </h4>
            <p className="text-xs text-stone-300">
              Join our local community email list for weekly special discounts and holiday Dutch baking announcements!
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/15 text-xs text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-[#D4A373]"
              />
              <button
                type="submit"
                id="footer-subscribe-btn"
                className="w-full bg-[#D4A373] hover:bg-[#C29263] text-[#3D2B1F] py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-1.5 shadow-2xs"
              >
                {subscribed ? (
                  <>
                    <Check className="w-4 h-4" /> Subscribed!
                  </>
                ) : (
                  <>
                    <span>Get Fresh Special Alerts</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
        </ScrollFloat>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-stone-400 gap-4 font-sans">
          <div>
            © {new Date().getFullYear()} Coaldale Bakery. All Rights Reserved. 1907 20th Ave, Coaldale, AB.
          </div>
          <div className="flex items-center gap-4">
            <span>Takeout Available</span>
            <span>•</span>
            <span>Scratch Baked Daily</span>
            <span>•</span>
            <a href="#hero" className="hover:text-white transition-colors">Back to Top ↑</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
