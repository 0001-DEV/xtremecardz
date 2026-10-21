import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';

export default function Navbar({ onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Staged animation state:
  // 0 = Initial compact pill (centered, contains Xtreme cards & Make enquiries)
  // 1 = Shifts to the left (left edge aligns with the 'E' in 'Every')
  // 2 = Expands width to 871px to the right (middle open, no text yet)
  // 3 = Features drop down from above with measured, luxurious pacing
  const [navStage, setNavStage] = useState(0);

  useEffect(() => {
    // Initial entrance from above on newly loading the website
    const timer = setTimeout(() => setMounted(true), 100);

    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Orchestrate the multi-phase scroll choreograhy
  useEffect(() => {
    let t1 = null;
    let t2 = null;

    if (scrolled) {
      // Step 1: The container with the two texts first shifts to the left
      setNavStage(1);

      // Step 2: Then it expands outward to its normal width (871px) with middle open
      t1 = setTimeout(() => {
        setNavStage(2);
      }, 550);

      // Step 3: Then the remaining features fall down in place in an un-rushed, luxurious cadence
      t2 = setTimeout(() => {
        setNavStage(3);
      }, 1200);
    } else {
      // Scrolling back up: smoothly return to initial compact centered pill
      setNavStage(0);
    }

    return () => {
      if (t1) clearTimeout(t1);
      if (t2) clearTimeout(t2);
    };
  }, [scrolled]);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Products', href: '#products' },
    { label: 'Elite Pass', href: '#products' },
    { label: 'About us', href: '#features' },
    { label: 'Contact us', href: '#faq' },
    { label: 'Blog', href: '#services' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Determine width and transform based on navStage:
  // Stage 0: Initial compact pill centered in the middle (transform: translateX(0))
  // Stage 1: Shifts to the left first by 230.5px so its left edge aligns with the 'E' in 'Every'
  // Stage 2 & 3: Expands outward to the right to 871px (transform: translateX(0), left edge stays at the 'E' in 'Every')
  const isExpanded = navStage >= 2;
  const isShifted = navStage === 1;

  const currentTransform = isShifted ? 'translateX(-230.5px)' : 'translateX(0)';
  const currentWidth = isExpanded ? '871px' : '410px';

  return (
    <header
      style={{
        position: 'fixed',
        top: '24px',
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 16px',
        pointerEvents: 'none',
        transform: mounted ? 'translateY(0)' : 'translateY(-75px)',
        opacity: mounted ? 1 : 0,
        transition: 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.9s ease'
      }}
    >
      <div
        className={`nav-pill-container ${isExpanded ? 'nav-expanded' : 'nav-compact'}`}
        style={{
          position: 'relative',
          transform: currentTransform,
          width: currentWidth,
          maxWidth: 'calc(100vw - 32px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          // Permanent transparent frosted glassmorphism that does not darken on scroll
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.28)',
          borderRadius: '24px',
          padding: '10px 14px 10px 22px',
          boxShadow: '0px 8px 32px 0px rgba(0, 0, 0, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
          transition: 'width 0.65s cubic-bezier(0.22, 1, 0.36, 1), transform 0.55s cubic-bezier(0.25, 1, 0.5, 1)',
          pointerEvents: 'auto',
          overflow: 'hidden'
        }}
      >
        {/* Brand Logo: Xtreme cards (black text) */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            flexShrink: 0
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '22px',
              color: '#000000',
              letterSpacing: '-0.03em',
              lineHeight: 1,
              whiteSpace: 'nowrap'
            }}
          >
            Xtreme cards
          </span>
        </a>

        {/* Center Desktop Navigation Links (black text):
            Hidden in compact pill so both texts are clearly visible;
            Once the bar expands to 871px, links drop down gently from above without rushing */}
        <nav
          style={{
            alignItems: 'center',
            gap: '16px',
            margin: '0 12px'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link, idx) => {
            const isRevealed = navStage === 3;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  fontSize: '15px',
                  fontWeight: 500,
                  color: '#000000',
                  padding: '6px 8px',
                  whiteSpace: 'nowrap',
                  display: 'inline-block',
                  transform: isRevealed ? 'translateY(0)' : 'translateY(-30px)',
                  opacity: isRevealed ? 1 : 0,
                  transition: 'transform 0.62s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.55s ease, color 0.2s ease',
                  transitionDelay: isRevealed ? `${idx * 0.08}s` : '0s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#cfa34b')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#000000')}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button: Make enquiries (both logo and button are fully visible when newly loaded) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          <button
            onClick={() => onOpenQuote('Navbar CTA')}
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            style={{
              backgroundColor: '#000000',
              color: '#ffffff',
              padding: '8px 16px',
              borderRadius: '66px',
              fontSize: '14px',
              fontWeight: 600,
              fontFamily: 'var(--font-heading)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              transition: 'all 0.25s ease',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.2)',
              height: '38px',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            {btnHovered ? (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', animation: 'fadeIn 0.2s ease' }}>
                <MessageCircle size={15} />
                <span>Send a message</span>
              </span>
            ) : (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <span>Make enquiries</span>
                <ArrowUpRight size={15} />
              </span>
            )}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: 'rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(0, 0, 0, 0.15)',
              color: '#000000',
              transition: 'all 0.25s ease'
            }}
            className="mobile-toggle"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '68px',
            left: '20px',
            right: '20px',
            backgroundColor: 'rgba(20, 24, 28, 0.95)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: '24px',
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.35)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            pointerEvents: 'auto',
            animation: 'fadeIn 0.2s ease'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                fontSize: '15.5px',
                fontWeight: 600,
                color: '#ffffff',
                padding: '8px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ marginTop: '10px' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote('Mobile Menu Enquiry');
              }}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#ffffff',
                color: '#131515',
                borderRadius: '50px',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Make enquiries
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 860px) {
          .nav-expanded .desktop-nav {
            display: flex !important;
          }
          .nav-compact .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 859px) {
          .nav-pill-container {
            width: calc(100vw - 32px) !important;
            left: 0 !important;
            transform: none !important;
          }
          .desktop-nav {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
