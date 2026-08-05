import React from 'react';
import {
  Accessibility,
  ShoppingBag,
  Coffee,
  UtensilsCrossed,
  Sparkles,
  Zap,
  CreditCard,
  Car,
  Check
} from 'lucide-react';

interface AmenityCategory {
  title: string;
  icon: React.ReactNode;
  items: string[];
}

export const AmenitiesSection: React.FC = () => {
  const categories: AmenityCategory[] = [
    {
      title: 'Accessibility',
      icon: <Accessibility className="w-5 h-5 text-[#D4A373]" />,
      items: [
        'Wheelchair-accessible entrance',
        'Wheelchair-accessible parking lot',
      ],
    },
    {
      title: 'Service Options',
      icon: <ShoppingBag className="w-5 h-5 text-[#D4A373]" />,
      items: [
        'In-store pickup',
        'In-store shopping',
        'Onsite services',
        'Takeout',
        'Delivery',
      ],
    },
    {
      title: 'Offerings',
      icon: <Coffee className="w-5 h-5 text-[#D4A373]" />,
      items: ['Coffee'],
    },
    {
      title: 'Dining Options',
      icon: <UtensilsCrossed className="w-5 h-5 text-[#D4A373]" />,
      items: ['Breakfast'],
    },
    {
      title: 'Amenities',
      icon: <Sparkles className="w-5 h-5 text-[#D4A373]" />,
      items: ['Washroom'],
    },
    {
      title: 'Planning',
      icon: <Zap className="w-5 h-5 text-[#D4A373]" />,
      items: ['Quick visit'],
    },
    {
      title: 'Payments',
      icon: <CreditCard className="w-5 h-5 text-[#D4A373]" />,
      items: ['Credit cards', 'Debit cards'],
    },
    {
      title: 'Parking',
      icon: <Car className="w-5 h-5 text-[#D4A373]" />,
      items: [
        'Free parking lot',
        'Free street parking',
        'Paid parking lot',
      ],
    },
  ];

  return (
    <section id="amenities" className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title & Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-block px-3 py-1 bg-[#D4A373]/10 text-[#D4A373] text-[10px] font-bold uppercase tracking-widest rounded-full">
            Bakery Details & Features
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#3D2B1F] tracking-tighter">
            Amenities & Services
          </h2>
          <p className="text-sm sm:text-base text-stone-500 font-sans">
            Everything you need to know for a comfortable visit to Coaldale Bakery.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              id={`amenity-card-${cat.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div>
                <div className="flex items-center gap-3 mb-4 border-b border-stone-100 pb-3">
                  <div className="p-2.5 rounded-xl bg-[#FDFBF7] border border-stone-200/60">
                    {cat.icon}
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#3D2B1F]">
                    {cat.title}
                  </h3>
                </div>

                <ul className="space-y-2.5">
                  {cat.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="flex items-center gap-2.5 text-sm text-stone-700"
                    >
                      <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[#D4A373]/15 text-[#D4A373] flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
