import React from 'react';
import { Star, Phone, MapPin, ShoppingBag, ArrowRight, Instagram } from 'lucide-react';
import { BAKERY_INFO, BAKERY_IMAGES } from '../data/bakeryData';
import { ScrollFloat, FloatingImageContainer } from './ScrollFloat';

interface HeroProps {
  onExploreMenu: () => void;
  onOpenTakeout: () => void;
  onNavigateToLocation: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreMenu,
  onOpenTakeout,
  onNavigateToLocation
}) => {
  return (
    <section id="hero" className="relative overflow-hidden pt-12 pb-16 lg:pb-24 border-b border-stone-200 min-h-[600px] flex items-center">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={BAKERY_IMAGES.storefront}
          alt="Coaldale Bakery storefront exterior"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Dark Warm Gradient Overlay for optimal text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A1B12]/92 via-[#3D2B1F]/80 to-[#2A1B12]/55 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Main Grid Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Trust Badge / Eyebrow */}
            <ScrollFloat delay={0.05} direction="up" distance={20}>
              <div className="inline-block px-3.5 py-1.5 bg-[#D4A373]/20 border border-[#D4A373]/40 text-[#E8C29D] text-[11px] font-bold uppercase tracking-widest rounded-full w-fit backdrop-blur-xs">
                Est. 1986 — Coaldale, Alberta • Local Favorite
              </div>
            </ScrollFloat>

            {/* Main Headline */}
            <ScrollFloat delay={0.15} direction="up" distance={30}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#FDFBF7] tracking-tighter leading-[1.05] drop-shadow-sm">
                A Touch of <span className="italic text-[#D4A373]">Dutch</span>
              </h1>
            </ScrollFloat>

            {/* Subheading */}
            <ScrollFloat delay={0.25} direction="up" distance={25}>
              <p className="text-lg sm:text-xl text-stone-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans font-medium drop-shadow-xs">
                Coaldale Bakery
              </p>
            </ScrollFloat>

            {/* CTAs */}
            <ScrollFloat delay={0.35} direction="up" distance={25}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <button
                  onClick={onExploreMenu}
                  id="hero-explore-menu-btn"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#D4A373] hover:bg-[#C29263] text-[#3D2B1F] px-7 py-3.5 text-xs uppercase tracking-widest font-bold shadow-md hover:shadow-lg transition-all rounded-lg"
                >
                  <ShoppingBag className="w-4 h-4 text-[#3D2B1F]" />
                  <span>Explore Full Menu</span>
                  <ArrowRight className="w-4 h-4 ml-1 text-[#3D2B1F]" />
                </button>

                <a
                  href={`tel:${BAKERY_INFO.phone.replace(/[^0-9]/g, '')}`}
                  id="hero-call-btn"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-[#FDFBF7] border border-white/30 px-6 py-3.5 text-xs uppercase tracking-widest font-bold shadow-sm transition-all rounded-lg backdrop-blur-xs"
                >
                  <Phone className="w-4 h-4 text-[#D4A373]" />
                  <span>Call Us (403) 345-3322</span>
                </a>

                <a
                  href={BAKERY_INFO.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  id="hero-instagram-btn"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-[#FDFBF7] border border-white/30 px-6 py-3.5 text-xs uppercase tracking-widest font-bold shadow-sm transition-all rounded-lg backdrop-blur-xs"
                >
                  <Instagram className="w-4 h-4 text-[#D4A373]" />
                  <span>Instagram</span>
                </a>
              </div>
            </ScrollFloat>

            {/* Review Badge */}
            <ScrollFloat delay={0.45} direction="up" distance={20}>
              <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-left">
                <div className="flex items-center gap-4 bg-white/95 p-4 border border-stone-200 rounded-xl shadow-md backdrop-blur-sm">
                  <div className="text-3xl font-serif font-bold text-[#3D2B1F]">4.8</div>
                  <div className="h-8 w-px bg-stone-200" />
                  <div>
                    <div className="flex text-[#D4A373] mb-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#D4A373] text-[#D4A373]" />
                      ))}
                    </div>
                    <p className="text-[10px] text-stone-500 font-bold uppercase tracking-widest">Nearly 500 Google Reviews</p>
                  </div>
                </div>

                <div className="text-left space-y-0.5 text-white">
                  <div className="text-xs font-bold text-[#FDFBF7]">1907 20th Ave, Coaldale</div>
                  <div className="text-[11px] text-stone-300 uppercase tracking-wider font-semibold">Fresh Oven Drops Daily at 7 AM</div>
                </div>
              </div>
            </ScrollFloat>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Banner Image */}
              <FloatingImageContainer delay={0.2} className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
                <img
                  src={BAKERY_IMAGES.hero}
                  alt="Coaldale Bakery artisan breads and pastries display"
                  className="w-full h-[360px] sm:h-[420px] lg:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D2B1F]/90 via-[#3D2B1F]/30 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="bg-[#D4A373] text-[#3D2B1F] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-2">
                    Locally Loved Specialty
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#FDFBF7]">Artisan Breads & Dutch Classics</h3>
                  <p className="text-xs text-stone-300 mt-1 font-sans">
                    Baked fresh every morning at 4:00 AM in Coaldale, Alberta
                  </p>
                </div>
              </FloatingImageContainer>

              {/* Floating Location Card */}
              <ScrollFloat delay={0.3} direction="down" distance={25} floatOnHover className="absolute -top-4 -right-2 sm:-right-4 z-10">
                <button
                  onClick={onNavigateToLocation}
                  className="bg-[#3D2B1F] text-[#FDFBF7] p-3 rounded-xl shadow-xl border border-[#D4A373]/40 flex items-center gap-2.5 hover:scale-105 transition-transform text-left"
                  id="hero-floating-location-btn"
                >
                  <MapPin className="w-4 h-4 text-[#D4A373] shrink-0" />
                  <div className="text-xs">
                    <div className="font-bold text-white text-[11px] uppercase tracking-wider">Visit Coaldale Bakery</div>
                    <div className="text-stone-300 text-[10px]">1907 20th Ave • Takeout Ready</div>
                  </div>
                </button>
              </ScrollFloat>

            </div>
          </div>

        </div>

        {/* 4 Feature Cards Row */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <ScrollFloat delay={0.1} floatOnHover>
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl border border-white/30 shadow-md hover:border-[#D4A373] transition-colors h-full">
              <div className="text-xs uppercase tracking-widest font-bold text-[#D4A373] mb-2 flex items-center gap-1">
                <span>🥐</span> Pure Heritage
              </div>
              <h4 className="font-serif font-bold text-lg text-[#3D2B1F]">Scratch Baked Daily</h4>
              <p className="text-xs text-stone-500 mt-2 leading-relaxed">Real butter, unbleached flour, and traditional recipes with no shortcuts or preservatives.</p>
            </div>
          </ScrollFloat>

          <ScrollFloat delay={0.2} floatOnHover>
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl border border-white/30 shadow-md hover:border-[#D4A373] transition-colors h-full">
              <div className="text-xs uppercase tracking-widest font-bold text-[#D4A373] mb-2 flex items-center gap-1">
                <span>🇳🇱</span> Authentic Dutch
              </div>
              <h4 className="font-serif font-bold text-lg text-[#3D2B1F]">Dutch Treats & Pastries</h4>
              <p className="text-xs text-stone-500 mt-2 leading-relaxed">From Stroopwafels to Almond Banket log, Tompouce cream slices, and Tijgerbrood.</p>
            </div>
          </ScrollFloat>

          <ScrollFloat delay={0.3} floatOnHover>
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl border border-white/30 shadow-md hover:border-[#D4A373] transition-colors h-full">
              <div className="text-xs uppercase tracking-widest font-bold text-[#D4A373] mb-2 flex items-center gap-1">
                <span>🎂</span> Made To Order
              </div>
              <h4 className="font-serif font-bold text-lg text-[#3D2B1F]">Custom Celebration Cakes</h4>
              <p className="text-xs text-stone-500 mt-2 leading-relaxed">Handcrafted birthday, anniversary, and wedding cakes made to order with real cream.</p>
            </div>
          </ScrollFloat>

          <ScrollFloat delay={0.4} floatOnHover>
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl border border-white/30 shadow-md hover:border-[#D4A373] transition-colors h-full">
              <div className="text-xs uppercase tracking-widest font-bold text-[#D4A373] mb-2 flex items-center gap-1">
                <span>🛍️</span> Fast & Easy
              </div>
              <h4 className="font-serif font-bold text-lg text-[#3D2B1F]">Convenient Takeout</h4>
              <p className="text-xs text-stone-500 mt-2 leading-relaxed">Call (403) 345-3322 or order online for fast, easy storefront pickup in Coaldale.</p>
            </div>
          </ScrollFloat>
        </div>

      </div>
    </section>
  );
};
