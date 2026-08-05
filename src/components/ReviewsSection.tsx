import React, { useState } from 'react';
import { Star, MessageSquarePlus, CheckCircle, ThumbsUp, Filter } from 'lucide-react';
import { CUSTOMER_REVIEWS, BAKERY_INFO } from '../data/bakeryData';
import { Review } from '../types';
import { ScrollFloat } from './ScrollFloat';

export const ReviewsSection: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<Review[]>(CUSTOMER_REVIEWS);
  const [filterTopic, setFilterTopic] = useState<string>('all');
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  // New review form states
  const [authorName, setAuthorName] = useState('');
  const [userLocation, setUserLocation] = useState('Coaldale, AB');
  const [starRating, setStarRating] = useState(5);
  const [reviewText, setReviewText] = useState('');
  const [favItem, setFavItem] = useState('');

  const filteredReviews = reviewsList.filter((r) => {
    if (filterTopic === 'all') return true;
    return r.favoriteItem?.toLowerCase().includes(filterTopic.toLowerCase());
  });

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName || !reviewText) return;

    const newRev: Review = {
      id: `r-new-${Date.now()}`,
      author: authorName,
      location: userLocation || 'Coaldale, AB',
      rating: starRating,
      date: 'Just now',
      content: reviewText,
      favoriteItem: favItem || 'Coaldale Bakery Specialty',
      verifiedCustomer: true,
    };

    setReviewsList([newRev, ...reviewsList]);
    setModalOpen(false);
    setAuthorName('');
    setReviewText('');
    setFavItem('');
  };

  return (
    <section id="reviews" className="py-16 sm:py-20 bg-[#FDFBF7] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollFloat delay={0.1} direction="up" distance={25} className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-block px-3 py-1 bg-[#D4A373]/10 text-[#D4A373] text-[10px] font-bold uppercase tracking-widest rounded-full">
            Loved By Coaldale & Southern Alberta
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#3D2B1F] tracking-tighter">
            4.8-Star Rated Across 490+ Customer Reviews
          </h2>
          <p className="text-sm sm:text-base text-stone-500 font-sans">
            Read genuine experiences from neighbors, daily regulars, and travelers stopping by for fresh bread and Dutch pastries.
          </p>
        </ScrollFloat>

        {/* Rating Overview Grid */}
        <ScrollFloat delay={0.2} direction="up" distance={25} floatOnHover className="mb-10">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-2xs grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-5 text-center md:text-left space-y-2 border-b md:border-b-0 md:border-r border-stone-200 pb-6 md:pb-0 md:pr-8">
              <div className="text-5xl font-serif font-bold text-[#3D2B1F]">4.8</div>
              <div className="flex justify-center md:justify-start text-[#D4A373] gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D4A373] text-[#D4A373]" />
                ))}
              </div>
              <div className="text-xs text-stone-400 font-bold uppercase tracking-widest">
                Based on 492 Google Reviews
              </div>
              <p className="text-xs text-stone-500 font-sans">
                Coaldale Bakery is top-rated in Lethbridge County for friendly service, quality scratch baking, and clean store environment.
              </p>
            </div>

            <div className="md:col-span-7 space-y-2 text-xs font-sans">
              <div className="flex items-center gap-3">
                <span className="w-12 font-bold text-[#3D2B1F]">5 Stars</span>
                <div className="flex-1 h-2.5 bg-[#FDFBF7] rounded-full overflow-hidden border border-stone-200">
                  <div className="h-full bg-[#D4A373] rounded-full w-[92%]" />
                </div>
                <span className="w-10 text-right font-medium text-stone-400">92%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-12 font-bold text-[#3D2B1F]">4 Stars</span>
                <div className="flex-1 h-2.5 bg-[#FDFBF7] rounded-full overflow-hidden border border-stone-200">
                  <div className="h-full bg-[#D4A373]/80 rounded-full w-[6%]" />
                </div>
                <span className="w-10 text-right font-medium text-stone-400">6%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-12 font-bold text-[#3D2B1F]">3 Stars</span>
                <div className="flex-1 h-2.5 bg-[#FDFBF7] rounded-full overflow-hidden border border-stone-200">
                  <div className="h-full bg-[#D4A373]/50 rounded-full w-[2%]" />
                </div>
                <span className="w-10 text-right font-medium text-stone-400">2%</span>
              </div>
            </div>

          </div>
        </ScrollFloat>

        {/* Filter & Add Review Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto text-xs">
            <span className="text-stone-400 font-bold uppercase text-[10px] tracking-widest flex items-center gap-1 shrink-0">
              <Filter className="w-3.5 h-3.5 text-[#D4A373]" /> Filter:
            </span>
            {[
              { id: 'all', label: 'All Reviews' },
              { id: 'Sausage Roll', label: '🥐 Sausage Rolls' },
              { id: 'Cake', label: '🎂 Custom Cakes' },
              { id: 'Bread', label: '🍞 Artisan Breads' },
              { id: 'Donut', label: '🍩 Dutch Donuts' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilterTopic(f.id)}
                className={`px-3 py-1.5 rounded-md text-[10px] uppercase tracking-wider font-bold transition-colors whitespace-nowrap ${
                  filterTopic === f.id
                    ? 'bg-[#3D2B1F] text-[#FDFBF7]'
                    : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setModalOpen(true)}
            id="write-review-btn"
            className="w-full sm:w-auto bg-[#3D2B1F] hover:bg-[#5A4030] text-[#FDFBF7] px-5 py-2.5 rounded-lg text-xs uppercase tracking-widest font-bold shadow-2xs flex items-center justify-center gap-2"
          >
            <MessageSquarePlus className="w-4 h-4 text-[#D4A373]" />
            <span>Leave a Customer Review</span>
          </button>

        </div>

        {/* Reviews Cards Masonry */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev, i) => (
            <ScrollFloat key={rev.id} delay={(i % 3) * 0.1} floatOnHover className="h-full">
              <div
                className="bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs hover:border-[#D4A373] transition-colors flex flex-col justify-between space-y-4 h-full"
              >
                <div className="space-y-3">
                  
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex text-[#D4A373]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#D4A373] text-[#D4A373]" />
                      ))}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">{rev.date}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#3D2B1F] leading-relaxed italic font-serif">
                    "{rev.content}"
                  </p>

                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2 text-xs">
                  <div>
                    <div className="font-serif font-bold text-[#3D2B1F]">{rev.author}</div>
                    <div className="text-[10px] text-stone-400 uppercase tracking-wider font-semibold">{rev.location}</div>
                  </div>

                  {rev.favoriteItem && (
                    <span className="bg-[#FDFBF7] text-[#D4A373] text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-md border border-stone-200 max-w-[130px] truncate">
                      ❤️ {rev.favoriteItem}
                    </span>
                  )}
                </div>

              </div>
            </ScrollFloat>
          ))}
        </div>

      </div>

      {/* Leave Review Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[#FDFBF7] max-w-md w-full rounded-2xl p-6 border border-stone-200 shadow-2xl space-y-4">
            
            <div className="flex justify-between items-center border-b border-stone-200 pb-3">
              <h3 className="font-serif font-bold text-xl text-[#3D2B1F]">Write a Review for Coaldale Bakery</h3>
              <button
                onClick={() => setModalOpen(false)}
                className="text-xs font-bold text-stone-400 hover:text-[#3D2B1F]"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddReview} className="space-y-4 text-xs font-sans">
              <div>
                <label className="block text-[10px] font-bold text-[#3D2B1F] uppercase tracking-widest mb-1">Star Rating</label>
                <div className="flex gap-1 text-[#D4A373]">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setStarRating(s)}
                      className="p-1 hover:scale-125 transition-transform"
                    >
                      <Star className={`w-6 h-6 ${s <= starRating ? 'fill-[#D4A373] text-[#D4A373]' : 'text-stone-300'}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] font-bold text-[#3D2B1F] uppercase tracking-widest mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah M."
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white border border-stone-200 text-xs text-[#3D2B1F]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-[#3D2B1F] uppercase tracking-widest mb-1">Your Town/City</label>
                  <input
                    type="text"
                    placeholder="e.g. Coaldale, AB"
                    value={userLocation}
                    onChange={(e) => setUserLocation(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white border border-stone-200 text-xs text-[#3D2B1F]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-[#3D2B1F] uppercase tracking-widest mb-1">Favorite Item (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g., Dutch Sausage Roll, Tijgerbrood, Cream Donut"
                  value={favItem}
                  onChange={(e) => setFavItem(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-white border border-stone-200 text-xs text-[#3D2B1F]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-[#3D2B1F] uppercase tracking-widest mb-1">Your Review *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Share your experience with our fresh bread, pastries, or staff..."
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-white border border-stone-200 text-xs text-[#3D2B1F]"
                />
              </div>

              <button
                type="submit"
                id="submit-review-btn"
                className="w-full bg-[#3D2B1F] text-[#FDFBF7] py-3 rounded-xl text-xs uppercase tracking-widest font-bold shadow-2xs hover:bg-[#5A4030]"
              >
                Post Review
              </button>
            </form>

          </div>
        </div>
      )}

    </section>
  );
};
