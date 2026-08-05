import React, { useState } from 'react';
import { Sparkles, Clock, Flame, Tag, ArrowRight, Check } from 'lucide-react';
import { DAILY_SPECIALS, MENU_ITEMS } from '../data/bakeryData';
import { getCurrentDayName } from '../utils/timeUtils';
import { MenuItem } from '../types';

interface DailySpecialsProps {
  onAddToCart: (item: MenuItem) => void;
}

export const DailySpecials: React.FC<DailySpecialsProps> = ({ onAddToCart }) => {
  const currentDay = getCurrentDayName();
  const [activeDay, setActiveDay] = useState<string>(
    currentDay === 'Sunday' || currentDay === 'Monday' ? 'Tuesday' : currentDay
  );

  const activeSpecial = DAILY_SPECIALS.find((s) => s.day === activeDay) || DAILY_SPECIALS[0];

  const ovenDrops = [
    { time: '7:00 AM', item: 'Fresh Artisan Breads & Cinnamon Swirls', desc: 'Crispy Sourdough Boules, Tijgerbrood, and hot cinnamon rolls.' },
    { time: '8:30 AM', item: 'Glazed Donut Drop & Fritters', desc: 'Bavarian cream donuts, apple fritters, and maple bacon donuts.' },
    { time: '10:00 AM', item: 'Coaldale Famous Dutch Sausage Rolls', desc: 'Hot out of the oven! Flaky puff pastry with seasoned lean pork.' },
    { time: '11:30 AM', item: 'Warm Beef Meat Pies & Savory Turnovers', desc: 'Alberta beef pies, cheese turnovers, and lunch savories.' },
    { time: '1:30 PM', item: 'Dutch Cream Pastries & Fresh Cakes', desc: 'Tompouce cream slices, Stroopwafels, and custom celebration slabs.' },
  ];

  return (
    <section id="specials" className="py-16 sm:py-20 bg-[#FDFBF7] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-block px-3 py-1 bg-[#D4A373]/10 text-[#D4A373] text-[10px] font-bold uppercase tracking-widest rounded-full">
            Oven Fresh Daily Specials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#3D2B1F] tracking-tighter">
            Daily Bakery Deals & Oven Schedule
          </h2>
          <p className="text-sm sm:text-base text-stone-500 font-sans">
            Every day brings something special at Coaldale Bakery. Check out today's featured discount and know exactly when your favorite baked goods come hot out of the oven.
          </p>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8">
          {DAILY_SPECIALS.map((special) => {
            const isToday = special.day === currentDay;
            const isSelected = special.day === activeDay;

            return (
              <button
                key={special.day}
                onClick={() => setActiveDay(special.day)}
                id={`special-day-tab-${special.day.toLowerCase()}`}
                className={`relative px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all flex flex-col items-center gap-0.5 whitespace-nowrap min-w-[100px] border ${
                  isSelected
                    ? 'bg-[#3D2B1F] text-[#FDFBF7] border-[#3D2B1F] shadow-xs'
                    : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-100'
                }`}
              >
                {isToday && (
                  <span className="absolute -top-2 bg-[#D4A373] text-[#3D2B1F] text-[9px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-full shadow-2xs">
                    TODAY
                  </span>
                )}
                <span>{special.day}</span>
                <span className={`text-[10px] font-semibold ${isSelected ? 'text-[#D4A373]' : 'text-stone-400'}`}>
                  {special.dutchHighlight}
                </span>
              </button>
            );
          })}
        </div>

        {/* Featured Special Card */}
        <div className="bg-white rounded-2xl border border-stone-200 shadow-2xs overflow-hidden p-6 sm:p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#D4A373]">
                <Tag className="w-4 h-4" />
                {activeDay} Featured Deal
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#3D2B1F]">
                {activeSpecial.title}
              </h3>

              {activeSpecial.discountText && (
                <div className="bg-[#FDFBF7] p-4 rounded-xl border border-stone-200 text-[#3D2B1F] font-semibold text-sm sm:text-base flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[#D4A373] shrink-0 mt-0.5" />
                  <span>{activeSpecial.discountText}</span>
                </div>
              )}

              <p className="text-xs sm:text-sm text-stone-500 leading-relaxed font-sans">
                Visit us at 1907 20th Ave in Coaldale or call ahead at (403) 345-3322 to reserve your order before items sell out!
              </p>
            </div>

            {/* Special Items Showcase */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-3">
              <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
                Featured Items Included in Deal:
              </div>
              {activeSpecial.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#FDFBF7] p-3 rounded-xl border border-stone-200 flex items-center justify-between gap-3 hover:border-[#D4A373] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-lg object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="font-serif font-bold text-sm text-[#3D2B1F]">{item.name}</div>
                      {item.unit && <div className="text-xs text-stone-500 font-sans">{item.unit}</div>}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Oven Drop Schedule Timeline */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-4">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3D2B1F]">
                Fresh Out Of The Oven Drop Times
              </h3>
              <p className="text-xs text-stone-500 font-sans">
                Plan your visit to catch items when they are warmest and freshest!
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#3D2B1F] bg-[#FDFBF7] px-3.5 py-2 rounded-lg border border-stone-200">
              <Clock className="w-4 h-4 text-[#D4A373]" /> Open Tuesday-Sat at 7:00 AM
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {ovenDrops.map((drop, i) => (
              <div
                key={i}
                className="bg-[#FDFBF7] p-4 rounded-xl border border-stone-200 shadow-2xs flex flex-col justify-between space-y-2 hover:border-[#D4A373] transition-colors"
              >
                <div>
                  <span className="bg-[#3D2B1F] text-[#D4A373] text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded inline-block mb-2">
                    {drop.time}
                  </span>
                  <h4 className="font-serif font-bold text-sm text-[#3D2B1F] leading-snug">
                    {drop.item}
                  </h4>
                  <p className="text-[11px] text-stone-500 mt-1 leading-normal font-sans">
                    {drop.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
