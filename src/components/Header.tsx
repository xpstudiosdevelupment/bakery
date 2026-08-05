import React, { useState } from 'react';
import { Phone, MapPin, Clock, ShoppingBag, Menu as MenuIcon, X, Sparkles, ChevronRight } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryData';
import { getStoreStatus } from '../utils/timeUtils';
import { TakeoutCartItem } from '../types';
import logoImg from '../assets/images/coaldale_logo_exact_1785891207590.jpg';

interface HeaderProps {
  cart: TakeoutCartItem[];
  onOpenCart: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  cart,
  onOpenCart,
  onNavigate,
  activeSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const status = getStoreStatus();
  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navItems = [
    { id: 'menu', label: 'Bakery Menu' },
    { id: 'amenities', label: 'Amenities' },
    { id: 'reviews', label: 'Reviews (4.8★)' },
    { id: 'location', label: 'Location & Hours' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FDFBF7]">
      {/* Top Info Banner */}
      <div className="bg-[#3D2B1F] text-[#FDFBF7] text-xs py-2 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start text-[11px] uppercase tracking-widest font-semibold">
            <a 
              href={`tel:${BAKERY_INFO.phone.replace(/[^0-9]/g, '')}`} 
              className="flex items-center gap-1.5 hover:text-[#D4A373] transition-colors"
              id="header-phone-link"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4A373]" />
              <span>{BAKERY_INFO.phone}</span>
            </a>
            <span className="hidden md:inline text-white/20">•</span>
            <a 
              href={BAKERY_INFO.googleMapsUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-1.5 hover:text-[#D4A373] transition-colors text-white/80"
              id="header-address-link"
            >
              <MapPin className="w-3.5 h-3.5 text-[#D4A373]" />
              <span className="truncate max-w-[280px] sm:max-w-none">{BAKERY_INFO.address}</span>
            </a>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/10 text-[10px] uppercase tracking-wider font-bold">
              <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
              <span>{status.statusText}</span>
              <span className="text-white/60 hidden sm:inline">({status.timeDetail})</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Navigation */}
      <div className="bg-[#FDFBF7]/95 backdrop-blur-md border-b border-stone-200 px-4 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center gap-3 group text-left"
            id="header-logo-button"
          >
            <img 
              src={logoImg} 
              alt="Coaldale Bakery Logo" 
              referrerPolicy="no-referrer"
              className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div>
              <div className="font-serif text-xl sm:text-2xl font-bold text-[#3D2B1F] tracking-tighter uppercase leading-none group-hover:text-[#D4A373] transition-colors">
                Coaldale Bakery
              </div>
              <div className="text-[10px] text-stone-500 font-bold tracking-widest uppercase mt-1">
                Coaldale, Alberta • Est. 1986
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                id={`nav-item-${item.id}`}
                className={`px-3.5 py-2 text-xs uppercase tracking-widest font-bold transition-all ${
                  activeSection === item.id
                    ? 'text-[#3D2B1F] border-b-2 border-[#D4A373]'
                    : 'text-stone-500 hover:text-[#3D2B1F]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${BAKERY_INFO.phone.replace(/[^0-9]/g, '')}`}
              id="header-call-us-btn"
              className="flex items-center gap-2 bg-[#3D2B1F] hover:bg-[#5A4030] text-[#FDFBF7] px-5 py-2.5 text-xs uppercase tracking-widest font-bold transition-all shadow-xs active:scale-95"
            >
              <Phone className="w-4 h-4 text-[#D4A373]" />
              <span>Call Us</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#3D2B1F] hover:bg-stone-100 rounded-md transition-colors"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FDFBF7] border-b border-stone-200 px-4 py-4 space-y-2 shadow-md animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              id={`mobile-nav-${item.id}`}
              className={`w-full flex items-center justify-between px-4 py-3 text-left text-xs uppercase tracking-widest font-bold transition-colors border-b border-stone-100 ${
                activeSection === item.id
                  ? 'bg-[#3D2B1F] text-[#FDFBF7]'
                  : 'text-[#3D2B1F] hover:bg-stone-100'
              }`}
            >
              <span>{item.label}</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </button>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`tel:${BAKERY_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="w-full flex items-center justify-center gap-2 bg-[#3D2B1F] text-[#FDFBF7] py-3 text-xs uppercase tracking-widest font-bold"
              id="mobile-menu-call-btn"
            >
              <Phone className="w-4 h-4 text-[#D4A373]" />
              <span>Call (403) 345-3322</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
