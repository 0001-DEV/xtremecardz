import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';

export default function Navbar({ onOpenQuote }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Staged animation state:
  // 0 = Initial compact pill (centered, contains Xtreme cards & Make enquiries)
  // 1 = Shifts to the left (left edge aligns with the 'E' in 'Every')
  // 2 = Expands width to 871px to the right (middle opens)
  // 3 = Features glide gracefully into place in an arranged staggered sequence
  const [navStage, setNavStage] = useState(0);

  useEffect(() => {
    // Initial entrance from above on newly loading the website
    const timer = setTimeout(() => setMounted(true), 80);

    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Orchestrate the multi-phase scroll choreography matching the sample
  useEffect(() => {
    let t1 = null;
    let t2 = null;

    if (scrolled || location.pathname === '/products') {
      // Step 1: Container shifts to the left first (only on homepage)
      if (location.pathname === '/') {
        setNavStage(1);
        t1 = setTimeout(() => {
          setNavStage(2);
        }, 350);
        t2 = setTimeout(() => {
          setNavStage(3);
        }, 650);
      } else {
        // On /products, expand immediately and show features
        setNavStage(3);
      }
    } else {
      // Return to compact centered state on homepage top
      setNavStage(0);
    }

    return () => {
      if (t1) clearTimeout(t1);
      if (t2) clearTimeout(t2);
    };
  }, [scrolled, location.pathname]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Elite Pass', href: '#metal-showcase' },
    { label: 'About us', href: '#features' },
    { label: 'Contact us', href: '#contact' },
    { label: 'Blog', href: '#services' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === '#contact') {
      onOpenQuote('Navbar Link: Contact us');
      return;
    }

    if (href === '/products') {
      if (location.pathname !== '/products') {
        navigate('/products');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (href === '/' || href === '#hero') {
      if (location.pathname !== '/') {
        navigate('/');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    // Anchor link (e.g. #metal-showcase, #features, #services)
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/' + href);
      } else {
        const elem = document.querySelector(href);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const isExpanded = navStage >= 2 || location.pathname === '/products';
  const isShifted = navStage === 1 && location.pathname === '/';

  const currentTransform = isShifted ? 'translateX(-230.5px)' : 'translateX(0)';
  const currentWidth = isExpanded ? '871px' : '410px';

  return (
    <>
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
          transition: 'transform 0.85s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.85s ease'
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
            backgroundColor: 'rgba(237, 237, 237, 0.75)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.32)',
            borderRadius: '24px',
            padding: '10px 14px 10px 22px',
            boxShadow: '0px 8px 32px 0px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.35)',
            transition: 'width 0.55s cubic-bezier(0.22, 1, 0.36, 1), transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)',
            pointerEvents: 'auto'
          }}
        >
          {/* Brand Logo: Xtreme cards */}
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

          {/* Center Desktop Navigation Features (replicated from Framer sample) */}
          <nav
            style={{
              alignItems: 'center',
              gap: '24px',
              margin: '0 16px'
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
                  className="nav-feature-item"
                  style={{
                    fontSize: '15px',
                    fontWeight: 500,
                    fontFamily: 'var(--font-heading)',
                    color: '#494d4d',
                    textDecoration: 'underline',
                    textDecorationColor: 'transparent',
                    textUnderlineOffset: '4px',
                    textDecorationThickness: '1.5px',
                    padding: '4px 2px',
                    whiteSpace: 'nowrap',
                    display: 'inline-block',
                    transform: isRevealed ? 'translateY(0)' : 'translateY(-14px)',
                    opacity: isRevealed ? 1 : 0,
                    transition:
                      'color 0.3s ease, text-decoration-color 0.3s ease, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.45s ease',
                    transitionDelay: isRevealed ? `${idx * 0.05}s` : '0s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#131515';
                    e.currentTarget.style.textDecorationColor = '#131515';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#494d4d';
                    e.currentTarget.style.textDecorationColor = 'transparent';
                  }}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right CTA Button & Hamburger */}
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
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
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
                backgroundColor: 'rgba(0, 0, 0, 0.06)',
                border: '1px solid rgba(0, 0, 0, 0.12)',
                color: '#131515',
                transition: 'all 0.25s ease'
              }}
              className="mobile-toggle"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop & Opened Card (Matching Framer Phone - Open sample) */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(19, 21, 21, 0.25)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              zIndex: 998,
              animation: 'fadeIn 0.25s ease'
            }}
          />

          {/* Crisp White Opened Menu Card */}
          <div
            style={{
              position: 'fixed',
              top: '76px',
              left: '16px',
              right: '16px',
              maxWidth: '420px',
              margin: '0 auto',
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              padding: '20px',
              boxShadow: '0 20px 50px rgba(19, 21, 21, 0.18), 0 4px 12px rgba(19, 21, 21, 0.05)',
              border: '1px solid rgba(19, 21, 21, 0.08)',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              animation: 'fadeIn 0.25s ease'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    fontSize: '15.5px',
                    fontWeight: 500,
                    fontFamily: 'var(--font-heading)',
                    color: '#131515',
                    padding: '11px 14px',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'background-color 0.2s ease, color 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(19, 21, 21, 0.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={14} color="#686d6d" />
                </a>
              ))}
            </div>

            <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid rgba(19, 21, 21, 0.06)' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote('Mobile Menu Enquiry');
                }}
                style={{
                  width: '100%',
                  padding: '13px',
                  backgroundColor: '#000000',
                  color: '#ffffff',
                  borderRadius: '50px',
                  fontWeight: 600,
                  fontSize: '14.5px',
                  fontFamily: 'var(--font-heading)',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)'
                }}
              >
                <span>Make enquiries</span>
                <ArrowUpRight size={15} />
              </button>
            </div>
          </div>
        </>
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
    </>
  );
}
