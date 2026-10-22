import React from 'react';

import Hero from '../components/Hero';
import MarqueeTickers from '../components/MarqueeTickers';
import Organizations from '../components/Organizations';
import MetalShowcase from '../components/MetalShowcase';
import FeaturesBento from '../components/FeaturesBento';
import DeliveryStreak from '../components/DeliveryStreak';
import SmartIdFormula from '../components/SmartIdFormula';
import PremiumPackages from '../components/PremiumPackages';
import WhatMakesItXtreme from '../components/WhatMakesItXtreme';
import ConnectAndIdentify from '../components/ConnectAndIdentify';
import ClientShowcase from '../components/ClientShowcase';
import OurServices from '../components/OurServices';
import MetalCardsDarkSection from '../components/MetalCardsDarkSection';
import FaqAccordion from '../components/FaqAccordion';
import ElevateCta from '../components/ElevateCta';

export default function HomePage({ onOpenQuote }) {
  return (
    <>
      {/* 1. Hero with 3D Ring Carousel */}
      <Hero onOpenQuote={onOpenQuote} />

      {/* 2. Dual Horizontal Marquee Tickers */}
      <MarqueeTickers onSelectType={(type) => onOpenQuote(`Inquiry: ${type}`)} />

      {/* 3. Organizations Social Proof */}
      <Organizations onOpenQuote={onOpenQuote} />

      {/* 4. Interactive Metal Showcase & GT AI Assistant */}
      <MetalShowcase onOpenQuote={onOpenQuote} />

      {/* 5. Features Bento Grid */}
      <FeaturesBento onOpenQuote={onOpenQuote} />

      {/* 6. Delivery Streak Timeline */}
      <DeliveryStreak onOpenQuote={onOpenQuote} />

      {/* 7. Smart ID Formula & Lifestyle Integration */}
      <SmartIdFormula onOpenQuote={onOpenQuote} />

      {/* 8. Premium Packages Slider (Swiper) */}
      <PremiumPackages onOpenQuote={onOpenQuote} />

      {/* 9. What Makes It Xtreme (Dark Section + Stats) */}
      <WhatMakesItXtreme onOpenQuote={onOpenQuote} />

      {/* 10. Connect & Identify (Upgrade Feature Grid) */}
      <ConnectAndIdentify onOpenQuote={onOpenQuote} />

      {/* 11. Clients Showcase & Testimonials */}
      <ClientShowcase onOpenQuote={onOpenQuote} />

      {/* 12. Our Services */}
      <OurServices onOpenQuote={onOpenQuote} />

      {/* 13. AI Suggestions & Dark Metal Cards Section */}
      <MetalCardsDarkSection onOpenQuote={onOpenQuote} />

      {/* 14. FAQs Accordion */}
      <FaqAccordion onOpenQuote={onOpenQuote} />

      {/* 15. Elevate Brand First Impression Banner & QR Connect */}
      <ElevateCta onOpenQuote={onOpenQuote} />
    </>
  );
}
