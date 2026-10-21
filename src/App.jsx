import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeTickers from './components/MarqueeTickers';
import Organizations from './components/Organizations';
import MetalShowcase from './components/MetalShowcase';
import FeaturesBento from './components/FeaturesBento';
import DeliveryStreak from './components/DeliveryStreak';
import SmartIdFormula from './components/SmartIdFormula';
import PremiumPackages from './components/PremiumPackages';
import WhatMakesItXtreme from './components/WhatMakesItXtreme';
import ConnectAndIdentify from './components/ConnectAndIdentify';
import ClientShowcase from './components/ClientShowcase';
import OurServices from './components/OurServices';
import MetalCardsDarkSection from './components/MetalCardsDarkSection';
import FaqAccordion from './components/FaqAccordion';
import ElevateCta from './components/ElevateCta';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [initialCardType, setInitialCardType] = useState('Metal Business Card');

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2
    });

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateTicker);
    };
  }, []);

  const handleOpenQuote = (cardType = 'General Custom Quote') => {
    setInitialCardType(cardType);
    setQuoteModalOpen(true);
  };

  return (
    <div className="app-wrapper">
      {/* Navigation */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Main Page Flow */}
      <main>
        {/* 1. Hero with 3D Ring Carousel */}
        <Hero onOpenQuote={handleOpenQuote} />

        {/* 2. Dual Horizontal Marquee Tickers */}
        <MarqueeTickers onSelectType={(type) => handleOpenQuote(`Inquiry: ${type}`)} />

        {/* 3. Organizations Social Proof */}
        <Organizations onOpenQuote={handleOpenQuote} />

        {/* 4. Interactive Metal Showcase & GT AI Assistant */}
        <MetalShowcase onOpenQuote={handleOpenQuote} />

        {/* 5. Features Bento Grid */}
        <FeaturesBento onOpenQuote={handleOpenQuote} />

        {/* 6. Delivery Streak Timeline */}
        <DeliveryStreak onOpenQuote={handleOpenQuote} />

        {/* 7. Smart ID Formula & Lifestyle Integration */}
        <SmartIdFormula onOpenQuote={handleOpenQuote} />

        {/* 8. Premium Packages Slider (Swiper) */}
        <PremiumPackages onOpenQuote={handleOpenQuote} />

        {/* 9. What Makes It Xtreme (Dark Section + Stats) */}
        <WhatMakesItXtreme onOpenQuote={handleOpenQuote} />

        {/* 10. Connect & Identify (Upgrade Feature Grid) */}
        <ConnectAndIdentify onOpenQuote={handleOpenQuote} />

        {/* 11. Clients Showcase & Testimonials */}
        <ClientShowcase onOpenQuote={handleOpenQuote} />

        {/* 12. Our Services */}
        <OurServices onOpenQuote={handleOpenQuote} />

        {/* 13. AI Suggestions & Dark Metal Cards Section */}
        <MetalCardsDarkSection onOpenQuote={handleOpenQuote} />

        {/* 14. FAQs Accordion */}
        <FaqAccordion onOpenQuote={handleOpenQuote} />

        {/* 15. Elevate Brand First Impression Banner & QR Connect */}
        <ElevateCta onOpenQuote={handleOpenQuote} />
      </main>

      {/* 16. Footer with Newsletter & Quick Links */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Interactive Quote Request Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialCardType={initialCardType}
      />
    </div>
  );
}
