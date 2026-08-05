import React from 'react';
import { Heart, CheckCircle2, Award, Clock, Users, Coffee } from 'lucide-react';
import { BAKERY_INFO, BAKERY_IMAGES } from '../data/bakeryData';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-16 sm:py-20 bg-[#FDFBF7] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-200">
              <img
                src={BAKERY_IMAGES.interior}
                alt="Inside Coaldale Bakery shop in Coaldale AB"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D2B1F]/90 via-[#3D2B1F]/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-[#D4A373] font-script text-3xl font-bold">Warm & Welcoming</span>
                <h3 className="font-serif text-xl font-bold text-[#FDFBF7]">1907 20th Ave, Coaldale</h3>
                <p className="text-xs text-stone-300 font-sans">Where friends and neighbors gather for warm bread and friendly smiles.</p>
              </div>
            </div>

            {/* Accent Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#3D2B1F] text-[#FDFBF7] p-5 rounded-xl shadow-md border border-[#D4A373] max-w-[210px]">
              <div className="text-3xl font-serif font-bold text-[#D4A373]">38+ Years</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-stone-300 mt-1">Baking for Coaldale & Southern Alberta</div>
            </div>
          </div>

          {/* Right Copy Column */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-block px-3 py-1 bg-[#D4A373]/10 text-[#D4A373] text-[10px] font-bold uppercase tracking-widest rounded-full">
              Our Family Heritage
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#3D2B1F] tracking-tighter leading-tight">
              A Local Tradition Built on Scratch Baking & Family Warmth
            </h2>

            <p className="text-base text-stone-500 leading-relaxed font-sans">
              At <strong className="text-[#3D2B1F]">Coaldale Bakery</strong>, baking isn't just a business—it's a lifelong passion. Located in the heart of Coaldale, Alberta, our family-oriented bakery has been bringing the warmth of freshly baked artisan breads and authentic Dutch treats to Southern Alberta homes for decades.
            </p>

            <p className="text-base text-stone-500 leading-relaxed font-sans">
              We believe in doing things the right way. Every morning long before sunrise, our master bakers weigh raw ingredients by hand, ferment wild sourdoughs, laminate rich butter puff pastry, and prepare our famous Dutch sausage rolls according to time-honored European recipes.
            </p>

            {/* Core Values Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-stone-200">
                <CheckCircle2 className="w-5 h-5 text-[#D4A373] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#3D2B1F] text-xs uppercase tracking-wider">100% From Scratch</h4>
                  <p className="text-xs text-stone-500 mt-0.5">No pre-mixed powders—only pure flour, real butter, and fresh eggs.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-stone-200">
                <CheckCircle2 className="w-5 h-5 text-[#D4A373] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#3D2B1F] text-xs uppercase tracking-wider">Authentic Dutch Recipes</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Traditional Stroopwafels, Banket, Tompouce, and Tijgerbrood.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-stone-200">
                <CheckCircle2 className="w-5 h-5 text-[#D4A373] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#3D2B1F] text-xs uppercase tracking-wider">Famous Sausage Rolls</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Warm lean Alberta pork wrapped in crisp, buttery flaky pastry.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-stone-200">
                <CheckCircle2 className="w-5 h-5 text-[#D4A373] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#3D2B1F] text-xs uppercase tracking-wider">Welcoming Community</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Friendly service with a warm smile for every customer who walks through our door.</p>
                </div>
              </div>
            </div>

            {/* Quote Box */}
            <div className="bg-white p-6 rounded-xl border-l-4 border-l-[#D4A373] border border-stone-200 italic text-[#3D2B1F] text-sm font-serif">
              "When you smell the fresh bread and coffee walking into Coaldale Bakery, you know you're family."
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
