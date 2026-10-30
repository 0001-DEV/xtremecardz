import React from 'react';

import Hero from '../components/Hero';
import MarqueeTickers from '../components/MarqueeTickers';
import Organizations from '../components/Organizations';
import MetalShowcase from '../components/MetalShowcase';
import FeaturesBento from '../components/FeaturesBento';
import IdentifyStructure from '../components/IdentifyStructure';
import PremiumShowcaseBanner from '../components/PremiumShowcaseBanner';
import PremiumPackages from '../components/PremiumPackages';
import ClientShowcase from '../components/ClientShowcase';
import XtremeMetalSection from '../components/XtremeMetalSection';
import OurServices from '../components/OurServices';
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

      {/* 6. Identify With Structure & Material Showcase */}
      <IdentifyStructure onOpenQuote={onOpenQuote} />

      {/* 7. Premium Packages Showcase Banner */}
      <PremiumShowcaseBanner onOpenQuote={onOpenQuote} />

      {/* 8. Premium Packages (Unified with Card At A Glance & Identity Done Differently) */}
      <PremiumPackages onOpenQuote={onOpenQuote} />

      {/* 8. Global Clients & Animated Counter */}
      <ClientShowcase onOpenQuote={onOpenQuote} />

      {/* 9. Premium Identity, Elevated Prestige (Xtreme Metal Business Cards) */}
      <XtremeMetalSection onOpenQuote={onOpenQuote} />

      {/* 10. Our Services */}
      <OurServices onOpenQuote={onOpenQuote} />

      {/* 11. FAQs Accordion */}
      <FaqAccordion onOpenQuote={onOpenQuote} />

      {/* 15. Elevate Brand First Impression Banner & QR Connect */}
      <ElevateCta onOpenQuote={onOpenQuote} />
    </>
  );
}
