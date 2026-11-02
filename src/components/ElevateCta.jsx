import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, QrCode } from 'lucide-react';
import cloudImg from '../assets/cloud.png';

export default function ElevateCta({ onOpenQuote }) {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll position inside this sticky pinned section
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return;
          const rect = sectionRef.current.getBoundingClientRect();
          const totalDistance = rect.height - window.innerHeight;
          if (totalDistance > 0) {
            const currentOffset = -rect.top;
            const progress = Math.min(Math.max(currentOffset / totalDistance, 0), 1);
            setScrollProgress(progress);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Compute staggered emergence progress for the 3 sequential contents
  // 1st comes out first (0.05 -> 0.35)
  const p1 = Math.min(Math.max((scrollProgress - 0.05) / 0.30, 0), 1);
  // 2nd comes out second (0.35 -> 0.65)
  const p2 = Math.min(Math.max((scrollProgress - 0.35) / 0.30, 0), 1);
  // 3rd comes out third (0.65 -> 0.95)
  const p3 = Math.min(Math.max((scrollProgress - 0.65) / 0.30, 0), 1);

  return (
    <section
      ref={sectionRef}
      id="elevate-cta"
      style={{
        position: 'relative',
        height: '280vh', // Provides the scrolling runway to freeze the section
        backgroundColor: '#fbfbfb',
        overflow: 'visible'
      }}
    >
      <style>{`
        /* Floating cloud micro-animations */
        @keyframes cloudFloatLeft {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(-14px, -10px) scale(1.02);
          }
        }

        @keyframes cloudFloatRight {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(16px, -12px) scale(1.03);
          }
        }

        @keyframes cloudFloatCenter {
          0%, 100% {
            transform: translate(-50%, 0px) scale(1);
          }
          50% {
            transform: translate(-50%, -10px) scale(1.015);
          }
        }

        @keyframes cardGentleHover {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(0.8deg);
          }
        }

        .elevate-content-grid {
          display: grid;
          grid-template-columns: 1.1fr 1.15fr 0.95fr;
          gap: 40px;
          align-items: center;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        @media (max-width: 1024px) {
          .elevate-content-grid {
            grid-template-columns: 1fr;
            gap: 36px;
            text-align: center;
            overflow-y: auto;
            max-height: 85vh;
            padding: 20px 0;
          }
        }
      `}</style>

      {/* ============================================================== */}
      {/* STICKY FROZEN VIEWPORT: Stays locked in view while scrolling   */}
      {/* ============================================================== */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 24px'
        }}
      >
        {/* Ambient background sky & subtle radial warm glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 50% 60%, rgba(207, 163, 75, 0.08) 0%, rgba(2, 131, 167, 0.04) 40%, transparent 75%)',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />

        {/* ============================================================== */}
        {/* CLOUD LAYERS (Animated Clouds framing the bottom & sides)     */}
        {/* ============================================================== */}
        {/* Cloud Layer 1: Left Background Cloud */}
        <div
          style={{
            position: 'absolute',
            bottom: '-40px',
            left: '-60px',
            width: 'clamp(360px, 42vw, 620px)',
            pointerEvents: 'none',
            zIndex: 4,
            animation: 'cloudFloatLeft 9s ease-in-out infinite',
            opacity: 0.92,
            filter: 'drop-shadow(0 15px 35px rgba(0,0,0,0.06))'
          }}
        >
          <img
            src={cloudImg}
            alt="Atmospheric Cloud"
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
          />
        </div>

        {/* Cloud Layer 2: Right Background Cloud */}
        <div
          style={{
            position: 'absolute',
            bottom: '-50px',
            right: '-60px',
            width: 'clamp(400px, 46vw, 750px)',
            pointerEvents: 'none',
            zIndex: 4,
            animation: 'cloudFloatRight 11s ease-in-out infinite',
            opacity: 0.94,
            filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.08))'
          }}
        >
          <img
            src={cloudImg}
            alt="Atmospheric Cloud"
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain', transform: 'scaleX(-1)' }}
          />
        </div>

        {/* Cloud Layer 3: Center Bottom Horizon Cloud using image named cloud */}
        <div
          style={{
            position: 'absolute',
            bottom: '-50px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'clamp(580px, 72vw, 1100px)',
            pointerEvents: 'none',
            zIndex: 15, // Sits in front of the emerging base of the card
            animation: 'cloudFloatCenter 10s ease-in-out infinite',
            opacity: 0.98,
            filter: 'drop-shadow(0 20px 45px rgba(0,0,0,0.09)) drop-shadow(0 6px 16px rgba(0,0,0,0.05))'
          }}
        >
          <img
            src={cloudImg}
            alt="Foreground Cumulus Cloud"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Soft bottom edge blend */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '110px',
            background: 'linear-gradient(to top, rgba(251, 251, 251, 0.95) 15%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 18
          }}
        />

        {/* ============================================================== */}
        {/* 3 SEQUENTIAL CONTENTS EMERGING FROM THE CLOUD                 */}
        {/* ============================================================== */}
        <div className="elevate-content-grid">
          {/* ------------------------------------------------------------ */}
          {/* 1ST CONTENT: Elevate Your Brand + Subtitle + 2 Buttons       */}
          {/* Comes out first                                              */}
          {/* ------------------------------------------------------------ */}
          <div
            style={{
              opacity: p1,
              transform: `translateY(${(1 - p1) * 80}px) scale(${0.92 + p1 * 0.08})`,
              transition: 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.15s ease',
              willChange: 'transform, opacity'
            }}
          >
            {/* Headline */}
            <h2
              style={{
                fontSize: 'clamp(34px, 3.8vw, 50px)',
                fontWeight: 800,
                color: '#131515',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                marginBottom: '16px'
              }}
            >
              Elevate Your Brand's First Impression
            </h2>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(15px, 1.4vw, 17px)',
                color: '#494d4d',
                lineHeight: 1.6,
                marginBottom: '32px',
                maxWidth: '460px'
              }}
            >
              Upgrade to premium metal business cards. Create lasting connection effortlessly
            </p>

            {/* Buttons Row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                flexWrap: 'wrap'
              }}
            >
              {/* Black button: Get a quote */}
              <a
                href="https://www.apple.com/in/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (onOpenQuote) {
                    e.preventDefault();
                    onOpenQuote('Get a quote');
                  }
                }}
                style={{
                  backgroundColor: '#131515',
                  color: '#ffffff',
                  borderRadius: '100px',
                  padding: '14px 28px',
                  fontSize: '15px',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 16px rgba(19, 21, 21, 0.3), 0 10px 30px rgba(19, 21, 21, 0.15)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 22px rgba(19, 21, 21, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(19, 21, 21, 0.3)';
                }}
              >
                <span>Get a quote</span>
                <ArrowRight size={16} />
              </a>

              {/* Glassmorphism button: Make enquiries */}
              <a
                href="https://play.google.com/store/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (onOpenQuote) {
                    e.preventDefault();
                    onOpenQuote('Make enquiries');
                  }
                }}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.65)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  color: '#131515',
                  border: '1px solid rgba(19, 21, 21, 0.12)',
                  borderRadius: '100px',
                  padding: '14px 26px',
                  fontSize: '15px',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
                  transition: 'transform 0.2s ease, background-color 0.2s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.65)';
                }}
              >
                <span>Make enquiries</span>
              </a>
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* 2ND CONTENT: The Premium Metal Card                           */}
          {/* Comes out second, rising up from inside the cloud            */}
          {/* ------------------------------------------------------------ */}
          <div
            style={{
              opacity: p2,
              transform: `translateY(${(1 - p2) * 140}px) scale(${0.86 + p2 * 0.14})`,
              transition: 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.15s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              zIndex: 10,
              willChange: 'transform, opacity'
            }}
          >
            {/* Metal Card graphic with gentle ambient hover */}
            <div
              style={{
                width: '100%',
                maxWidth: '430px',
                animation: p2 > 0.85 ? 'cardGentleHover 6s ease-in-out infinite' : 'none',
                filter: 'drop-shadow(0 20px 45px rgba(0,0,0,0.18)) drop-shadow(0 6px 18px rgba(0,0,0,0.1))'
              }}
            >
              <img
                src="https://framerusercontent.com/images/zC4jLN8Gl7PEI1dnMBZtqihqGI.png?width=1127&height=1025"
                alt="Xtreme Premium Metal Business Card"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'contain'
                }}
              />
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* 3RD CONTENT: Get Your Custom Quote Instantly + QR Code Picture */}
          {/* Comes out third                                              */}
          {/* ------------------------------------------------------------ */}
          <div
            style={{
              opacity: p3,
              transform: `translateY(${(1 - p3) * 80}px) scale(${0.92 + p3 * 0.08})`,
              transition: 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.15s ease',
              display: 'flex',
              justifyContent: 'center',
              willChange: 'transform, opacity'
            }}
          >
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '26px',
                padding: '30px 26px',
                textAlign: 'center',
                maxWidth: '310px',
                width: '100%',
                border: '1px solid rgba(19, 21, 21, 0.08)',
                boxShadow: '0 16px 40px rgba(19, 21, 21, 0.06), 0 4px 12px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '18px'
              }}
            >
              {/* Title */}
              <h3
                style={{
                  fontSize: 'clamp(18px, 1.8vw, 22px)',
                  fontWeight: 700,
                  color: '#131515',
                  lineHeight: 1.25,
                  margin: 0,
                  letterSpacing: '-0.015em'
                }}
              >
                Get Your Custom Quote Instantly
              </h3>

              {/* QR Code Picture from Framer */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '18px',
                  padding: '12px',
                  border: '1px solid rgba(19, 21, 21, 0.06)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                  width: '170px',
                  height: '170px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}
              >
                <img
                  src="https://framerusercontent.com/images/xMdWyxvX8jT2RJqub8GPYlnweA.png?width=480&height=480"
                  alt="Instant Quote QR Code"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                />
              </div>

              <span
                style={{
                  fontSize: '13px',
                  color: '#595e5e',
                  fontWeight: 500
                }}
              >
                Scan with any phone camera
              </span>
            </div>
          </div>
        </div>

        {/* Scroll Progress Indicator Pill (Subtle feedback at top right of section) */}
        <div
          style={{
            position: 'absolute',
            top: '28px',
            right: '32px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '50px',
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(19, 21, 21, 0.08)',
            fontSize: '12px',
            fontWeight: 600,
            color: '#595e5e',
            zIndex: 25,
            opacity: scrollProgress > 0.02 && scrollProgress < 0.98 ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}
        >
          <Sparkles size={13} color="#cfa34b" />
          <span>
            {p3 >= 0.9
              ? 'Ready to connect'
              : p2 >= 0.9
              ? 'Card revealed'
              : p1 >= 0.9
              ? 'Scroll to reveal card'
              : 'Scroll to explore'}
          </span>
        </div>
      </div>
    </section>
  );
}
