import React from 'react';
import { BAKERY_INFO, BAKERY_IMAGES } from '../data/bakeryData';
import { ScrollFloat, FloatingImageContainer } from './ScrollFloat';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-16 sm:py-20 bg-[#F3F4F6] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-5 relative">
            <FloatingImageContainer delay={0.1} className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-200">
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
            </FloatingImageContainer>

            {/* Accent Badge */}
            <ScrollFloat delay={0.3} direction="up" distance={30} floatOnHover className="absolute -bottom-6 -right-4 sm:-right-6 z-10">
              <div className="bg-[#3D2B1F] text-[#FDFBF7] p-5 rounded-xl shadow-md border border-[#D4A373] max-w-[210px]">
                <div className="text-3xl font-serif font-bold text-[#D4A373]">38+ Years</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-stone-300 mt-1">Baking for Coaldale & Southern Alberta</div>
              </div>
            </ScrollFloat>
          </div>

          {/* Right Copy Column */}
          <div className="lg:col-span-7 space-y-6">
            
            <ScrollFloat delay={0.1} direction="up" distance={20}>
              <div className="inline-block px-3 py-1 bg-[#D4A373]/10 text-[#D4A373] text-[10px] font-bold uppercase tracking-widest rounded-full">
                Our Family Heritage
              </div>
            </ScrollFloat>

            <ScrollFloat delay={0.2} direction="up" distance={25}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#3D2B1F] tracking-tighter leading-tight">
                European Style Baked Goods & Dutch Imports Since 1986
              </h2>
            </ScrollFloat>

            <ScrollFloat delay={0.3} direction="up" distance={20}>
              <p className="text-base text-stone-600 leading-relaxed font-sans">
                The Coaldale Bakery has been providing Southern Alberta, Canada with European style baked goods and Dutch imports since 1986.
              </p>
            </ScrollFloat>

            <ScrollFloat delay={0.4} direction="up" distance={20}>
              <p className="text-base text-stone-600 leading-relaxed font-sans">
                We offer a wide variety of quality, fresh baked goods daily. We are known for our use of real whipping cream in our delicious cakes and pastries, an extensive variety of specialty breads and buns, fresh daily made donuts as well as beautiful detailing on wedding and event cakes and catering options.
              </p>
            </ScrollFloat>

            <ScrollFloat delay={0.5} direction="up" distance={20}>
              <p className="text-base text-stone-600 leading-relaxed font-sans">
                Whether you have been an avid customer of Coaldale Bakery for years, or you have just heard about us recently, We guarantee you will not be disappointed.
              </p>
            </ScrollFloat>

            <ScrollFloat delay={0.6} direction="up" distance={20}>
              <p className="text-base text-stone-600 leading-relaxed font-sans font-medium text-[#3D2B1F]">
                Consider Coaldale Bakery the next time your looking for a fast, fresh Breakfast, Lunch or Snack, We look forward to serving you soon!
              </p>
            </ScrollFloat>

          </div>

        </div>

      </div>
    </section>
  );
};
