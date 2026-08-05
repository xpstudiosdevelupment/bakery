import React, { useState } from 'react';
import { MapPin, Phone, Globe, Clock, Navigation, Copy, Check, ExternalLink, AlertCircle } from 'lucide-react';
import { BAKERY_INFO, BUSINESS_HOURS } from '../data/bakeryData';
import { getStoreStatus, getCurrentDayName } from '../utils/timeUtils';
import { ScrollFloat } from './ScrollFloat';

export const LocationHoursSection: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [activeMapView, setActiveMapView] = useState<'map' | 'satellite'>('map');
  const status = getStoreStatus();
  const currentDay = getCurrentDayName();

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BAKERY_INFO.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  return (
    <section id="location" className="py-16 sm:py-20 bg-[#FDFBF7] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <ScrollFloat delay={0.1} direction="up" distance={25} className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-block px-3 py-1 bg-[#D4A373]/10 text-[#D4A373] text-[10px] font-bold uppercase tracking-widest rounded-full">
            Visit Coaldale Bakery
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#3D2B1F] tracking-tighter">
            Location, Hours & Directions
          </h2>
          <p className="text-sm sm:text-base text-stone-500 font-sans">
            Conveniently located at <strong>1907 20th Ave, Coaldale, AB</strong>. Ample storefront parking and fast takeout pickup available.
          </p>
        </ScrollFloat>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Info & Hours Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Store Status Banner */}
            <div className={`p-4 rounded-2xl border flex items-center justify-between gap-3 shadow-2xs ${
              status.isOpen 
                ? 'bg-emerald-50/60 border-emerald-200 text-emerald-950' 
                : 'bg-amber-50/60 border-amber-200 text-amber-950'
            }`}>
              <div className="flex items-center gap-3">
                <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${status.isOpen ? 'bg-emerald-600 animate-pulse' : 'bg-amber-600'}`} />
                <div>
                  <div className="font-bold text-xs uppercase tracking-wider">{status.statusText}</div>
                  <div className="text-[11px] text-stone-500 font-sans">{status.timeDetail}</div>
                </div>
              </div>
              <span className="bg-white px-2.5 py-1 rounded-md text-[9px] font-bold uppercase tracking-widest border border-stone-200">
                Takeout Active
              </span>
            </div>

            {/* Address & Contact Box */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs space-y-4">
              <h3 className="font-serif font-bold text-xl text-[#3D2B1F] border-b border-stone-200 pb-3">
                Contact & Details
              </h3>

              <div className="space-y-3 text-sm font-sans">
                
                {/* Full Address */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FDFBF7] text-[#D4A373] flex items-center justify-center shrink-0 border border-stone-200">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-[#3D2B1F] text-xs uppercase tracking-wider">Bakery Address</div>
                    <div className="text-xs text-stone-500 mt-0.5">{BAKERY_INFO.address}</div>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={handleCopyAddress}
                        id="copy-address-btn"
                        className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold text-[#D4A373] hover:underline"
                      >
                        {copiedAddress ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedAddress ? 'Address Copied!' : 'Copy Address'}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FDFBF7] text-[#D4A373] flex items-center justify-center shrink-0 border border-stone-200">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[#3D2B1F] text-xs uppercase tracking-wider">Call Store / Takeout</div>
                    <a
                      href={`tel:${BAKERY_INFO.phone.replace(/[^0-9]/g, '')}`}
                      className="text-xs text-[#D4A373] font-bold font-mono hover:underline"
                    >
                      {BAKERY_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FDFBF7] text-[#D4A373] flex items-center justify-center shrink-0 border border-stone-200">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[#3D2B1F] text-xs uppercase tracking-wider">Official Website</div>
                    <a
                      href={`https://${BAKERY_INFO.website}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-[#D4A373] font-bold hover:underline inline-flex items-center gap-1"
                    >
                      <span>{BAKERY_INFO.website}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </div>

              <div className="pt-2 border-t border-stone-200 flex gap-2">
                <a
                  href={BAKERY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  id="get-directions-btn"
                  className="w-full bg-[#3D2B1F] hover:bg-[#5A4030] text-[#FDFBF7] py-3 rounded-xl font-bold text-xs uppercase tracking-widest shadow-2xs flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4 text-[#D4A373]" />
                  <span>Open Directions in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Business Hours Table */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs space-y-3">
              <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                <h3 className="font-serif font-bold text-lg text-[#3D2B1F] flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#D4A373]" /> Operating Hours
                </h3>
                <span className="text-[9px] font-bold text-[#D4A373] bg-[#FDFBF7] uppercase tracking-widest px-2.5 py-1 rounded border border-stone-200">
                  Tue-Sat Fresh Baking
                </span>
              </div>

              <div className="space-y-1.5 text-xs font-sans">
                {BUSINESS_HOURS.map((h) => {
                  const isToday = h.day === currentDay;

                  return (
                    <div
                      key={h.day}
                      className={`flex justify-between items-center px-3 py-2 rounded-lg font-medium transition-colors ${
                        isToday
                          ? 'bg-[#3D2B1F] text-[#FDFBF7] font-bold shadow-2xs'
                          : 'hover:bg-[#FDFBF7] text-[#3D2B1F]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{h.day}</span>
                        {isToday && (
                          <span className="bg-[#D4A373] text-[#3D2B1F] text-[9px] uppercase font-extrabold px-1.5 py-0.2 rounded">
                            Today
                          </span>
                        )}
                      </div>
                      <span className={h.isClosed ? 'text-rose-600 font-bold' : ''}>
                        {h.isClosed ? 'Closed' : `${h.open} - ${h.close}`}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Google Map Container */}
          <div className="lg:col-span-7 bg-white p-4 sm:p-6 rounded-2xl border border-stone-200 shadow-2xs space-y-4">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-3">
              <div>
                <h3 className="font-serif font-bold text-xl text-[#3D2B1F]">
                  Interactive Location Map
                </h3>
                <p className="text-xs text-stone-500 font-sans">
                  1907 20th Ave, Coaldale, Alberta, T1M 1M9
                </p>
              </div>

              <div className="flex items-center gap-1.5 bg-[#FDFBF7] p-1 rounded-lg border border-stone-200 text-xs">
                <button
                  onClick={() => setActiveMapView('map')}
                  className={`px-3 py-1 rounded-md text-[10px] uppercase tracking-wider font-bold transition-all ${
                    activeMapView === 'map' ? 'bg-[#3D2B1F] text-[#FDFBF7]' : 'text-stone-500'
                  }`}
                >
                  Map View
                </button>
                <button
                  onClick={() => setActiveMapView('satellite')}
                  className={`px-3 py-1 rounded-md text-[10px] uppercase tracking-wider font-bold transition-all ${
                    activeMapView === 'satellite' ? 'bg-[#3D2B1F] text-[#FDFBF7]' : 'text-stone-500'
                  }`}
                >
                  Satellite
                </button>
              </div>
            </div>

            {/* Embedded Google Map iframe with exact Coaldale coordinates */}
            <div className="relative rounded-xl overflow-hidden border border-stone-200 h-[400px] sm:h-[480px] bg-stone-100">
              <iframe
                title="Coaldale Bakery Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.118228308479!2d-112.61332012351225!3d49.722622971462085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x536e8648c68832a7%3A0xb308a09f8cb64445!2s1907%2020th%20Ave%2C%20Coaldale%2C%20AB%20T1M%201M9!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={`w-full h-full transition-opacity ${activeMapView === 'satellite' ? 'opacity-90 contrast-125' : ''}`}
              />

              {/* Custom Map Overlay Card */}
              <div className="absolute top-3 left-3 bg-[#3D2B1F]/95 text-[#FDFBF7] p-3.5 rounded-xl shadow-md border border-[#D4A373]/30 max-w-[260px] text-xs space-y-1 backdrop-blur-xs">
                <div className="font-serif font-bold text-sm text-[#D4A373]">Coaldale Bakery</div>
                <div className="text-stone-300 text-[11px] font-sans">1907 20th Ave, Coaldale, AB</div>
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[9px] uppercase tracking-widest pt-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Storefront Parking Available
                </div>
              </div>

            </div>

            <div className="bg-[#FDFBF7] p-3 rounded-xl border border-stone-200 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-600 font-sans gap-2">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-[#D4A373] shrink-0" />
                <span>Driving from Lethbridge? Just 12 minutes East along Crowsnest Highway (Hwy 3).</span>
              </div>
              <a
                href={BAKERY_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-[#D4A373] hover:underline uppercase tracking-wider text-[10px] whitespace-nowrap"
              >
                Get Route →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
