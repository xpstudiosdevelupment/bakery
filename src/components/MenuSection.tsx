import React, { useState, useMemo } from 'react';
import { Search, Filter, Plus, Check, ShoppingBag, Info, Clock, Sparkles, Phone } from 'lucide-react';
import { MENU_ITEMS } from '../data/bakeryData';
import { MenuItem, MenuItemCategory } from '../types';
import { ScrollFloat } from './ScrollFloat';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
  cartItemIds: string[];
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart, cartItemIds }) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuItemCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDietary, setSelectedDietary] = useState<string>('all');
  const [activeItemModal, setActiveItemModal] = useState<MenuItem | null>(null);
  const [addedAnimationId, setAddedAnimationId] = useState<string | null>(null);

  const categories: { id: MenuItemCategory; label: string; icon: string }[] = [
    { id: 'all', label: 'All Items', icon: '✨' },
    { id: 'buns-bread', label: 'Buns and Bread', icon: '🍞' },
    { id: 'cakes-pastries', label: 'Cakes and Pastries', icon: '🎂' },
    { id: 'catering', label: 'Catering', icon: '🍽️' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category check
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Dietary check
      if (selectedDietary !== 'all') {
        if (!item.dietary || !item.dietary.includes(selectedDietary as any)) {
          return false;
        }
      }
      // Search check
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDutch = item.dutchName ? item.dutchName.toLowerCase().includes(query) : false;
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesTag = item.tags.some((t) => t.toLowerCase().includes(query));
        return matchesName || matchesDutch || matchesDesc || matchesTag;
      }

      return true;
    });
  }, [selectedCategory, searchQuery, selectedDietary]);

  const handleAddWithFeedback = (item: MenuItem, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(item);
    setAddedAnimationId(item.id);
    setTimeout(() => setAddedAnimationId(null), 1200);
  };

  const renderCard = (item: MenuItem) => {
    return (
      <ScrollFloat key={item.id} floatOnHover distance={25} className="h-full">
        <div
          onClick={() => setActiveItemModal(item)}
          className="group bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs hover:border-[#D4A373] hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer h-full"
        >
          <div>
            {/* Item Image & Badges */}
            <div className="relative h-48 overflow-hidden bg-[#FDFBF7]">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D2B1F]/60 via-transparent to-transparent" />
              
              {/* Top Badges */}
              <div className="absolute top-3 left-3 right-3 flex justify-between items-start gap-2">
                {item.isPopular ? (
                  <span className="bg-[#D4A373] text-[#3D2B1F] text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Popular
                  </span>
                ) : item.freshOutTime ? (
                  <span className="bg-[#3D2B1F] text-[#D4A373] text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {item.freshOutTime}
                  </span>
                ) : <div />}

                {item.unit && (
                  <span className="bg-white/95 text-[#3D2B1F] font-sans font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-lg shadow-xs border border-stone-200">
                    {item.unit}
                  </span>
                )}
              </div>

              {/* Dutch Original Name Tag */}
              {item.dutchName && (
                <div className="absolute bottom-2 left-3 bg-[#3D2B1F]/90 text-[#D4A373] text-[10px] uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-md backdrop-blur-xs">
                  🇳🇱 {item.dutchName}
                </div>
              )}
            </div>

            {/* Card Content */}
            <div className="p-5 space-y-2.5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-serif font-bold text-lg text-[#3D2B1F] group-hover:text-[#D4A373] transition-colors leading-snug">
                  {item.name}
                </h3>
              </div>

              <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed font-sans">
                {item.description}
              </p>

              {/* Options Pill */}
              {item.options && item.options.length > 0 && (
                <div className="text-[11px] font-medium text-[#3D2B1F] bg-[#D4A373]/10 px-2.5 py-1 rounded-md border border-[#D4A373]/30 inline-block">
                  Available in: {item.options.join(', ')}
                </div>
              )}

              {/* Tags & Dietary Chips */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {item.tags.map((tag, idx) => (
                  <span key={idx} className="bg-[#FDFBF7] text-stone-500 text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded border border-stone-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card Footer CTA */}
          <div className="p-4 mt-auto border-t border-stone-100">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveItemModal(item);
              }}
              id={`view-details-${item.id}`}
              className="w-full py-2 text-xs uppercase tracking-widest font-bold text-[#3D2B1F] bg-stone-100 hover:bg-[#3D2B1F] hover:text-[#FDFBF7] rounded-lg transition-all flex items-center justify-center gap-1.5"
            >
              <Info className="w-3.5 h-3.5 text-[#D4A373]" /> View Item Details
            </button>
          </div>

        </div>
      </ScrollFloat>
    );
  };

  return (
    <section id="menu" className="py-16 sm:py-20 bg-[#FDFBF7] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <ScrollFloat delay={0.1} direction="up" distance={25} className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-block px-3 py-1 bg-[#D4A373]/10 text-[#D4A373] text-[10px] font-bold uppercase tracking-widest rounded-full">
            Scratch Baked Bakery Menu
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#3D2B1F] tracking-tighter">
            Fresh Breads, Pastries & Dutch Favorites
          </h2>
          <p className="text-sm sm:text-base text-stone-500 font-sans">
            Baked fresh every morning in Coaldale. Call <a href="tel:4033453322" className="underline font-bold text-[#D4A373]">(403) 345-3322</a> to place an order or inquire about fresh batch availability.
          </p>
        </ScrollFloat>

        {/* Filter Controls Row */}
        <div className="space-y-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none snap-x">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                id={`menu-cat-${cat.id}`}
                className={`snap-start flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs uppercase tracking-widest font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#3D2B1F] text-[#FDFBF7] shadow-xs'
                    : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Search & Dietary Filters */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-3.5 rounded-xl border border-stone-200 shadow-2xs">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder="Search sourdough, sausage roll, donuts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                id="menu-search-input"
                className="w-full pl-9 pr-4 py-2 rounded-lg bg-[#FDFBF7] border border-stone-200 text-xs text-[#3D2B1F] placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#D4A373]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-[#3D2B1F]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Dietary Tags Pill Filters */}
            <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto text-xs">
              <span className="text-stone-400 font-bold uppercase text-[10px] tracking-widest mr-1 flex items-center gap-1 shrink-0">
                <Filter className="w-3 h-3 text-[#D4A373]" /> Filter:
              </span>
              {[
                { id: 'all', label: 'All' },
                { id: 'Authentic Dutch', label: '🇳🇱 Authentic Dutch' },
                { id: 'Vegetarian', label: '🌱 Vegetarian' },
                { id: 'Nut-Free', label: '🥜 Nut-Free' },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedDietary(filter.id)}
                  id={`dietary-filter-${filter.id.replace(/\s+/g, '-').toLowerCase()}`}
                  className={`px-3 py-1.5 rounded-md text-[10px] uppercase tracking-wider font-bold transition-colors whitespace-nowrap ${
                    selectedDietary === filter.id
                      ? 'bg-[#D4A373] text-[#3D2B1F]'
                      : 'bg-[#FDFBF7] text-stone-600 hover:bg-stone-100 border border-stone-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

          </div>

        </div>

        {/* Advance Order Callout Banner */}
        <div className="bg-[#3D2B1F] text-[#FDFBF7] p-5 sm:p-6 rounded-2xl border border-[#D4A373]/40 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="space-y-1 text-center md:text-left">
            <div className="font-serif font-bold text-lg sm:text-xl text-[#D4A373] flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-[#D4A373]" /> Please order your baking in advance to avoid disappointment!
            </div>
            <p className="text-xs sm:text-sm text-stone-300 font-sans">
              Scratch-baked fresh daily in Coaldale. Place your orders early to ensure your favorite loaves and buns are ready.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="tel:4033453322"
              className="bg-[#D4A373] hover:bg-[#C29263] text-[#3D2B1F] px-4 py-2.5 rounded-lg font-mono font-bold text-xs uppercase tracking-wider transition-colors shadow-xs"
            >
              📞 (403) 345-3322
            </a>
            <a
              href="mailto:coaldalebakery@gmail.com"
              className="bg-white/10 hover:bg-white/20 text-[#FDFBF7] px-4 py-2.5 rounded-lg font-sans text-xs font-semibold border border-white/20 transition-colors"
            >
              ✉️ coaldalebakery@gmail.com
            </a>
          </div>
        </div>

        {/* Catering Information Callout if Catering selected */}
        {(selectedCategory === 'catering' || selectedCategory === 'all') && (
          <div className="bg-amber-50/90 border border-[#D4A373]/50 rounded-2xl p-6 mb-8 text-[#3D2B1F] space-y-4 shadow-xs">
            <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-[#D4A373]/30">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🍽️</span>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#3D2B1F]">
                  Coaldale Bakery Quality Catering Services
                </h3>
              </div>
              <a
                href="tel:4033453322"
                className="inline-flex items-center gap-1.5 bg-[#3D2B1F] text-[#D4A373] hover:bg-[#5A4030] px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-wider transition-all"
              >
                📞 Book Catering: (403) 345-3322
              </a>
            </div>

            <p className="text-sm text-stone-700 font-sans leading-relaxed">
              At Coaldale Bakery we are very pleased to offer quality, fresh foods for catering. We offer many different types of trays to suit your function. Hot or Cold they will be ready to pick up when you need them.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
              <div className="bg-white/80 p-4 rounded-xl border border-stone-200 space-y-2">
                <div className="font-bold uppercase tracking-wider text-[#3D2B1F] flex items-center gap-1.5 text-xs">
                  ✨ Buffet Style Service & Disposable Supplies
                </div>
                <p className="text-stone-600 leading-relaxed">
                  All of our meals are served buffet style, and include disposable dishes, cutlery, and napkins if you would like them. Below you will find a list of our menu choices (GST not included).
                </p>
              </div>

              <div className="bg-white/80 p-4 rounded-xl border border-stone-200 space-y-2">
                <div className="font-bold uppercase tracking-wider text-[#3D2B1F] flex items-center gap-1.5 text-xs">
                  ⏰ Notice & Booking Policy
                </div>
                <p className="text-stone-600 leading-relaxed">
                  We recommend booking catering for your event well in advance as we are limited as to the number of events we can accommodate on any given date.
                </p>
              </div>
            </div>

            <div className="bg-[#3D2B1F] text-[#FDFBF7] p-4 rounded-xl text-xs space-y-2">
              <div className="font-bold text-[#D4A373] uppercase tracking-widest text-[11px] flex items-center gap-2">
                📌 Main Dish Catering Options Notice:
              </div>
              <p className="text-stone-300 leading-relaxed">
                Minimum of 20 servings for main dish catering options. Comes family style, either hot and ready to serve immediately or you can pick it up cold and heat for when it is needed. As much notice as possible is appreciated but we need a minimum of 48 hours notice (keeping in mind we are closed Sundays and Mondays).
              </p>
              <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-stone-300 font-mono text-[11px]">
                <span>📞 Call: (403) 345-3322</span>
                <span>✉️ Email: coaldalebakery@gmail.com</span>
              </div>
            </div>
          </div>
        )}

        {/* Cake Sizing Guide Callout if Cakes & Pastries selected */}
        {(selectedCategory === 'cakes-pastries') && (
          <div className="bg-amber-50/80 border border-[#D4A373]/40 rounded-2xl p-5 sm:p-6 mb-8 text-[#3D2B1F] space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="font-serif font-bold text-lg sm:text-xl text-[#3D2B1F]">
                🎂 Specialization in Fine Baking & Custom Cake Sizing
              </h3>
              <span className="text-xs bg-[#3D2B1F] text-[#D4A373] px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                Up to 2 Tier Cakes Available
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
              We specialize in baking and decorating our cakes with only the highest quality ingredients.
            </p>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-stone-500 mb-2">
                Cake Sizes & Approximate Number of People Served
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 text-xs font-mono font-semibold">
                <div className="bg-white p-2.5 rounded-xl border border-stone-200 text-center">
                  <div className="text-[#D4A373] font-bold">8" Round</div>
                  <div className="text-[10px] text-stone-500 font-sans">Serves 10</div>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-stone-200 text-center">
                  <div className="text-[#D4A373] font-bold">8" x 8"</div>
                  <div className="text-[10px] text-stone-500 font-sans">Serves 12-16</div>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-stone-200 text-center">
                  <div className="text-[#D4A373] font-bold">8" x 12"</div>
                  <div className="text-[10px] text-stone-500 font-sans">Serves 20-24</div>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-stone-200 text-center">
                  <div className="text-[#D4A373] font-bold">8" x 16"</div>
                  <div className="text-[10px] text-stone-500 font-sans">Serves 28-32</div>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-stone-200 text-center">
                  <div className="text-[#D4A373] font-bold">12" x 16"</div>
                  <div className="text-[10px] text-stone-500 font-sans">Serves 40-48</div>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-stone-200 text-center">
                  <div className="text-[#D4A373] font-bold">16" x 24"</div>
                  <div className="text-[10px] text-stone-500 font-sans">Serves 80-96</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Menu Grid / Subcategory Layout */}
        {filteredItems.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-stone-200 space-y-3">
            <div className="text-4xl">🍞</div>
            <h3 className="font-serif text-xl font-bold text-[#3D2B1F]">No baking matches found</h3>
            <p className="text-xs text-stone-400">Try searching for something else or clearing your filters.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setSelectedDietary('all');
              }}
              className="mt-2 bg-[#3D2B1F] text-[#FDFBF7] px-4 py-2 rounded-md text-xs uppercase tracking-widest font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {/* If items have subcategories or all/category is selected, group them cleanly */}
            {(selectedCategory === 'buns-bread' || selectedCategory === 'cakes-pastries' || selectedCategory === 'catering' || (selectedCategory === 'all' && !searchQuery)) ? (
              (() => {
                const subCategoryOrder = [
                  'Continental Breakfast / Coffee Break',
                  'Soup & Sandwich Luncheon',
                  'Catering Main Dishes',
                  'Catering Side Dishes',
                  'Catering Salads',
                  'Savory Bakery Favorites',
                  'Specialty Cakes',
                  'Pastries & Slices',
                  'Whole Grain Bread',
                  'Rye Bread',
                  'Bagels',
                  'More Bread Selections',
                  'Buns (most available in white or 60%)'
                ];

                const itemsWithSubcat = filteredItems.filter(i => i.subCategory);
                const itemsWithoutSubcat = filteredItems.filter(i => !i.subCategory);

                // Find active subcategories in order
                const activeSubcats = subCategoryOrder.filter(subcat => 
                  itemsWithSubcat.some(i => i.subCategory === subcat)
                );

                return (
                  <>
                    {activeSubcats.map((subcat) => {
                      const groupItems = itemsWithSubcat.filter(i => i.subCategory === subcat);
                      return (
                        <div key={subcat} className="space-y-4">
                          <div className="border-b border-[#D4A373]/30 pb-2 flex items-center justify-between">
                            <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#3D2B1F] flex items-center gap-2">
                              <span className="text-[#D4A373]">🍞</span> {subcat}
                            </h3>
                            <span className="text-xs font-mono font-semibold text-stone-400">
                              {groupItems.length} {groupItems.length === 1 ? 'item' : 'items'}
                            </span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {groupItems.map((item) => renderCard(item))}
                          </div>
                        </div>
                      );
                    })}

                    {itemsWithoutSubcat.length > 0 && (
                      <div className="space-y-4 pt-4">
                        {activeSubcats.length > 0 && (
                          <div className="border-b border-[#D4A373]/30 pb-2">
                            <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#3D2B1F]">
                              Other Bakery Favorites
                            </h3>
                          </div>
                        )}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                          {itemsWithoutSubcat.map((item) => renderCard(item))}
                        </div>
                      </div>
                    )}
                  </>
                );
              })()
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => renderCard(item))}
              </div>
            )}
          </div>
        )}

      </div>

      {/* Item Details Modal */}
      {activeItemModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[#FDFBF7] max-w-lg w-full rounded-2xl overflow-hidden shadow-2xl border border-stone-200 space-y-4 max-h-[90vh] overflow-y-auto">
            
            <div className="relative h-64 bg-[#3D2B1F]">
              <img
                src={activeItemModal.image}
                alt={activeItemModal.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setActiveItemModal(null)}
                className="absolute top-3 right-3 bg-black/60 hover:bg-black text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                {activeItemModal.dutchName && (
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#D4A373]">
                    🇳🇱 Authentic Dutch: {activeItemModal.dutchName}
                  </span>
                )}
                <h3 className="text-2xl font-serif font-bold text-[#3D2B1F]">{activeItemModal.name}</h3>
              </div>

              <p className="text-sm text-stone-600 leading-relaxed font-sans">
                {activeItemModal.description}
              </p>

              {activeItemModal.freshOutTime && (
                <div className="bg-white p-3.5 rounded-xl border border-stone-200 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#D4A373] shrink-0" />
                  <div className="text-xs text-[#3D2B1F]">
                    <span className="font-bold">Fresh Oven Drop:</span> Comes hot out of our ovens daily around <strong className="text-[#D4A373]">{activeItemModal.freshOutTime}</strong>.
                  </div>
                </div>
              )}

              <div className="pt-2">
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-2">Baking Highlights & Dietary</h4>
                <div className="flex flex-wrap gap-2">
                  {activeItemModal.tags.map((t, i) => (
                    <span key={i} className="bg-white text-[#3D2B1F] text-xs px-2.5 py-1 rounded-md border border-stone-200 font-medium">
                      {t}
                    </span>
                  ))}
                  {activeItemModal.dietary?.map((d, i) => (
                    <span key={i} className="bg-[#D4A373]/10 text-[#D4A373] text-xs px-2.5 py-1 rounded-md border border-[#D4A373]/30 font-bold">
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveItemModal(null)}
                  className="text-xs font-bold text-stone-500 uppercase tracking-widest hover:text-[#3D2B1F]"
                >
                  Close
                </button>

                <a
                  href="tel:4033453322"
                  className="bg-[#3D2B1F] hover:bg-[#5A4030] text-[#FDFBF7] px-5 py-2.5 rounded-md text-xs uppercase tracking-widest font-bold flex items-center gap-2 shadow-xs"
                >
                  <Phone className="w-4 h-4 text-[#D4A373]" /> Call (403) 345-3322
                </a>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
