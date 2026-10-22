import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';

gsap.registerPlugin(ScrollTrigger);

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

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
      <ScrollToTop />

      {/* Navigation Bar */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Main Routed Content */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage onOpenQuote={handleOpenQuote} />} />
          <Route path="/products" element={<ProductsPage onOpenQuote={handleOpenQuote} />} />
          {/* Fallback route */}
          <Route path="*" element={<HomePage onOpenQuote={handleOpenQuote} />} />
        </Routes>
      </main>

      {/* Shared Footer */}
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
