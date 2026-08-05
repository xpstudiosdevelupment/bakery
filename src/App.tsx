/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StorySection } from './components/StorySection';
import { MenuSection } from './components/MenuSection';
import { DailySpecials } from './components/DailySpecials';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationHoursSection } from './components/LocationHoursSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { TakeoutDrawer } from './components/TakeoutDrawer';
import { Footer } from './components/Footer';

import { MenuItem, TakeoutCartItem } from './types';

export default function App() {
  const [cart, setCart] = useState<TakeoutCartItem[]>(() => {
    const saved = localStorage.getItem('coaldale_bakery_cart');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return [];
  });

  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Save cart to local storage
  useEffect(() => {
    localStorage.setItem('coaldale_bakery_cart', JSON.stringify(cart));
  }, [cart]);

  // Handle Add To Cart
  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((i) => i.menuItem.id === item.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [...prev, { menuItem: item, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.menuItem.id === itemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as TakeoutCartItem[];
    });
  };

  const handleRemoveItem = (itemId: string) => {
    setCart((prev) => prev.filter((item) => item.menuItem.id !== itemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Smooth Navigation
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#3D2B1F] font-sans flex flex-col selection:bg-[#D4A373]/30">
      
      {/* Header Bar */}
      <Header
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigate={scrollToSection}
        activeSection={activeSection}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        <Hero
          onExploreMenu={() => scrollToSection('menu')}
          onOpenTakeout={() => setIsCartOpen(true)}
          onNavigateToLocation={() => scrollToSection('location')}
        />

        <StorySection />

        <MenuSection
          onAddToCart={handleAddToCart}
          cartItemIds={cart.map((c) => c.menuItem.id)}
        />

        <AmenitiesSection />

        <DailySpecials onAddToCart={handleAddToCart} />

        <ReviewsSection />

        <LocationHoursSection />
      </main>

      {/* Takeout Cart Slide-over Drawer */}
      <TakeoutDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

    </div>
  );
}
