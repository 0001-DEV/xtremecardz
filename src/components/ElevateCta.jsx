import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { getAsset } from '../assets/assetUrl';
import cloudImg from '../assets/cloud.webp';

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
          const vh = window.innerHeight || document.documentElement.clientHeight;
          const totalDistance = rect.height - vh;
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
    window.addEventListener('touchmove', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
    };
  }, []);

  // Compute cloud parting progress (0 = closed curtain, 1 = fully parted open)
  const openAmount = Math.min(Math.max(scrollProgress / 0.65, 0), 1);

  // Compute staggered emergence progress for the 3 sequential contents as the clouds part
  // 1st comes out first (0.06 -> 0.36)
  const p1 = Math.min(Math.max((scrollProgress - 0.06) / 0.30, 0), 1);
  // 2nd comes out second (0.24 -> 0.60)
  const p2 = Math.min(Math.max((scrollProgress - 0.24) / 0.36, 0), 1);
  // 3rd comes out third (0.44 -> 0.82)
  const p3 = Math.min(Math.max((scrollProgress - 0.44) / 0.38, 0), 1);

  return (
    <section
      ref={sectionRef}
      id="elevate-cta"
      style={{
        position: 'relative',
        height: '240vh',
        backgroundColor: 'var(--bg-page, #fcfbf9)',
        overflow: 'visible'
      }}
    >
      <style>{`
        /* Continuous floating micro-animations across all devices */
        @keyframes cloudFloatLeft {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(-12px, -8px) scale(1.02);
          }
        }

        @keyframes cloudFloatRight {
          0%, 100% {
            transform: scaleX(-1) translate(0px, 0px) scale(1);
          }
          50% {
            transform: scaleX(-1) translate(14px, -10px) scale(1.025);
          }
        }

        @keyframes cloudFloatCenter {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(0px, -8px) scale(1.015);
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

        .elevate-sticky-viewport {
          position: sticky;
          top: 0;
          height: 100vh;
          height: 100dvh;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 clamp(16px, 4vw, 48px);
          box-sizing: border-box;
        }

        /* 3-column desktop and tablet presentation */
        .elevate-content-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr 0.95fr;
          gap: clamp(20px, 2.8vw, 44px);
          align-items: center;
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        .elevate-col-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .elevate-cta-buttons {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
        }

        .elevate-btn-primary {
          background-color: #131515;
          color: #ffffff;
          border-radius: 100px;
          padding: 13px 26px;
          font-size: 14.5px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
          box-shadow: 0 4px 16px rgba(19, 21, 21, 0.22), 0 10px 28px rgba(19, 21, 21, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.12);
          cursor: pointer;
          transition: transform 0.22s ease, box-shadow 0.22s ease, background-color 0.22s ease;
          font-family: var(--font-heading);
        }
        .elevate-btn-primary:hover {
          transform: translateY(-2px);
          background-color: #242828;
          box-shadow: 0 8px 24px rgba(19, 21, 21, 0.32);
        }

        .elevate-btn-secondary {
          background-color: #ffffff;
          color: #131515;
          border-radius: 100px;
          padding: 13px 24px;
          font-size: 14.5px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          border: 1px solid rgba(19, 21, 21, 0.14);
          box-shadow: 0 2px 8px rgba(0,0,0,0.03);
          cursor: pointer;
          transition: transform 0.22s ease, border-color 0.22s ease, background-color 0.22s ease;
          font-family: var(--font-heading);
        }
        .elevate-btn-secondary:hover {
          transform: translateY(-2px);
          border-color: rgba(19, 21, 21, 0.35);
          background-color: #f7f6f3;
        }

        .elevate-col-card {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .elevate-card-wrap {
          width: 100%;
          max-width: 420px;
          filter: drop-shadow(0 22px 48px rgba(0,0,0,0.18)) drop-shadow(0 8px 20px rgba(0,0,0,0.1));
          transition: transform 0.3s ease;
        }

        .elevate-col-qr {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .elevate-qr-box {
          background-color: #ffffff;
          border-radius: 24px;
          padding: clamp(20px, 2.4vw, 30px);
          text-align: center;
          max-width: 335px;
          width: 100%;
          border: 1px solid rgba(19, 21, 21, 0.08);
          box-shadow: 0 16px 40px rgba(19, 21, 21, 0.06), 0 4px 14px rgba(0,0,0,0.03);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          box-sizing: border-box;
        }

        .elevate-qr-img-wrap {
          background-color: #ffffff;
          border-radius: 18px;
          padding: 12px;
          border: 1px solid rgba(19, 21, 21, 0.06);
          box-shadow: 0 6px 20px rgba(0,0,0,0.05);
          width: clamp(135px, 15vw, 170px);
          height: clamp(135px, 15vw, 170px);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Medium screens / Tablets (769px - 1024px) */
        @media (min-width: 769px) and (max-width: 1024px) {
          .elevate-content-grid {
            grid-template-columns: 1.1fr 1fr 0.95fr;
            gap: 16px;
          }
          .elevate-card-wrap {
            max-width: 300px;
          }
          .elevate-qr-box {
            max-width: 260px;
            padding: 18px 14px;
          }
          .elevate-qr-img-wrap {
            width: 120px;
            height: 120px;
          }
        }

        /* Seamless, perfectly proportioned animation on all smartphones & iOS/Android:
           Clouds part open, card floats & shines, sequential emergence p1 -> p2 -> p3 */
        @media (max-width: 820px) {
          #elevate-cta {
            height: 175vh !important;
            padding: 0 !important;
          }
          .elevate-sticky-viewport {
            position: sticky !important;
            top: 0 !important;
            height: 100vh !important;
            height: 100dvh !important;
            padding: 0 16px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            overflow: hidden !important;
          }
          .elevate-content-grid {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            text-align: center !important;
            gap: clamp(8px, 1.8vh, 16px) !important;
            width: 100% !important;
            max-width: 440px !important;
            margin: 0 auto !important;
            padding: 10px 0 !important;
          }
          .elevate-col-text {
            align-items: center !important;
            text-align: center !important;
            width: 100% !important;
          }
          .elevate-col-text h2 {
            font-size: clamp(20px, 5.2vw, 26px) !important;
            line-height: 1.18 !important;
            margin-bottom: 6px !important;
          }
          .elevate-col-text p {
            font-size: clamp(12.5px, 3.2vw, 14.5px) !important;
            line-height: 1.35 !important;
            margin-bottom: 12px !important;
            max-width: 360px !important;
          }
          .elevate-cta-buttons {
            justify-content: center !important;
            gap: 8px !important;
          }
          .elevate-btn-primary, .elevate-btn-secondary {
            padding: 9px 18px !important;
            font-size: 13px !important;
          }
          .elevate-card-wrap {
            max-width: clamp(170px, 46vw, 220px) !important;
            width: 100% !important;
            margin: 0 auto !important;
          }
          .elevate-qr-box {
            padding: 12px 18px !important;
            max-width: 310px !important;
            gap: 14px !important;
            border-radius: 20px !important;
            flex-direction: row !important;
            align-items: center !important;
            text-align: left !important;
          }
          .elevate-qr-box h3 {
            font-size: 14.5px !important;
            line-height: 1.25 !important;
            margin: 0 0 4px 0 !important;
          }
          .elevate-qr-box span {
            font-size: 12px !important;
            line-height: 1.2 !important;
          }
          .elevate-qr-img-wrap {
            width: 68px !important;
            height: 68px !important;
            padding: 5px !important;
            border-radius: 12px !important;
            flex-shrink: 0 !important;
          }
          .elevate-cloud-layer {
            display: block !important;
            opacity: 0.95 !important;
          }
        }

        /* Short height screens (e.g. landscape or small phones <= 620px height) */
        @media (max-height: 620px) {
          .elevate-content-grid {
            display: grid !important;
            grid-template-columns: 1.15fr 1fr 0.95fr !important;
            align-items: center;
            gap: clamp(6px, 1.8vw, 14px);
            max-width: 100%;
          }
          .elevate-col-text h2 {
            font-size: 18px !important;
            margin-bottom: 2px !important;
          }
          .elevate-col-text p {
            font-size: 11px !important;
            margin-bottom: 6px !important;
          }
          .elevate-btn-primary, .elevate-btn-secondary {
            padding: 6px 12px !important;
            font-size: 11.5px !important;
          }
          .elevate-card-wrap {
            max-width: 140px !important;
          }
          .elevate-qr-box {
            padding: 6px 10px !important;
            max-width: 180px !important;
            gap: 4px !important;
          }
          .elevate-qr-img-wrap {
            width: 60px !important;
            height: 60px !important;
          }
          .elevate-qr-box span {
            font-size: 10px !important;
          }
        }
      `}</style>

      {/* ============================================================== */}
      {/* STICKY PINNED VIEWPORT: Stays locked in view while scrolling   */}
      {/* ============================================================== */}
      <div className="elevate-sticky-viewport">
        {/* Ambient background sky & subtle warm radial aura */}
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
        {/* CLOUD LAYERS (Clouds part open on scroll down, close on up)     */}
        {/* ============================================================== */}
        {/* Cloud Layer 1: Left Curtain Cloud (parts outward to the left) */}
        <div
          className="elevate-cloud-layer"
          style={{
            position: 'absolute',
            bottom: `${30 - openAmount * 90}px`,
            left: '-6%',
            width: 'clamp(440px, 64vw, 980px)',
            pointerEvents: 'none',
            zIndex: 16,
            transform: `translate3d(${-openAmount * 44}vw, ${openAmount * 65}px, 0) scale(${1.18 - openAmount * 0.18})`,
            transition: 'transform 0.12s ease-out, bottom 0.12s ease-out',
            willChange: 'transform',
            opacity: 0.98
          }}
        >
          <img
            src={cloudImg}
            alt="Atmospheric Cloud Left Curtain"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              objectFit: 'contain',
              animation: 'cloudFloatLeft 9s ease-in-out infinite'
            }}
          />
        </div>

        {/* Cloud Layer 2: Right Curtain Cloud (parts outward to the right) */}
        <div
          className="elevate-cloud-layer"
          style={{
            position: 'absolute',
            bottom: `${25 - openAmount * 90}px`,
            right: '-6%',
            width: 'clamp(440px, 64vw, 980px)',
            pointerEvents: 'none',
            zIndex: 16,
            transform: `translate3d(${openAmount * 44}vw, ${openAmount * 65}px, 0) scale(${1.18 - openAmount * 0.18})`,
            transition: 'transform 0.12s ease-out, bottom 0.12s ease-out',
            willChange: 'transform',
            opacity: 0.98
          }}
        >
          <img
            src={cloudImg}
            alt="Atmospheric Cloud Right Curtain"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              objectFit: 'contain',
              animation: 'cloudFloatRight 11s ease-in-out infinite'
            }}
          />
        </div>

        {/* Cloud Layer 3: Center Horizon Cloud (settles gracefully to bottom) */}
        <div
          className="elevate-cloud-layer"
          style={{
            position: 'absolute',
            bottom: `${80 - openAmount * 135}px`,
            left: '50%',
            width: 'clamp(600px, 86vw, 1300px)',
            pointerEvents: 'none',
            zIndex: 15,
            transform: `translate3d(-50%, ${openAmount * 50}px, 0) scale(${1.22 - openAmount * 0.22})`,
            transition: 'transform 0.12s ease-out, bottom 0.12s ease-out',
            willChange: 'transform',
            opacity: 1
          }}
        >
          <img
            src={cloudImg}
            alt="Foreground Cumulus Cloud"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              animation: 'cloudFloatCenter 10s ease-in-out infinite'
            }}
          />
        </div>

        {/* ============================================================== */}
        {/* 3 SEQUENTIAL CONTENTS EMERGING FROM CLOUDS (Same on all screens)*/}
        {/* ============================================================== */}
        <div className="elevate-content-grid">
          {/* ------------------------------------------------------------ */}
          {/* 1ST CONTENT: Elevate Your Brand + Subtitle + 2 Buttons       */}
          {/* Emerges first                                                */}
          {/* ------------------------------------------------------------ */}
          <div
            className="elevate-part elevate-part-1"
            style={{
              opacity: p1,
              transform: `translateX(${(1 - p1) * -80}px) scale(${0.94 + p1 * 0.06})`,
              transition: 'transform 0.18s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.18s ease',
              willChange: 'transform, opacity'
            }}
          >
            <div className="elevate-col-text">
              <h2
                style={{
                  fontSize: 'clamp(32px, 3.6vw, 48px)',
                  fontWeight: 800,
                  color: '#131515',
                  lineHeight: 1.15,
                  letterSpacing: '-0.025em',
                  margin: '0 0 14px 0',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                Elevate Your Brand's First Impression
              </h2>

              <p
                style={{
                  fontSize: 'clamp(14.5px, 1.2vw, 16.5px)',
                  color: '#595e5e',
                  lineHeight: 1.5,
                  margin: '0 0 24px 0',
                  maxWidth: '430px',
                  fontWeight: 400,
                  fontFamily: 'var(--font-body)'
                }}
              >
                Upgrade to premium metal business cards. Create lasting connection effortlessly.
              </p>

              <div className="elevate-cta-buttons">
                <button
                  type="button"
                  onClick={() => {
                    if (typeof onOpenQuote === 'function') {
                      onOpenQuote();
                    } else {
                      window.location.href = '/quote';
                    }
                  }}
                  className="elevate-btn-primary"
                >
                  <span>Request a Quote</span>
                  <ArrowRight size={15} />
                </button>

                <a
                  href="#cards"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('cards') || document.querySelector('.card-showcase-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else window.location.href = '/#cards';
                  }}
                  className="elevate-btn-secondary"
                >
                  View card gallery
                </a>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* 2ND CONTENT: Floating 3D Metal Card Graphic                  */}
          {/* Emerges second with depth & horizontal breath                 */}
          {/* ------------------------------------------------------------ */}
          <div
            className="elevate-part elevate-part-2"
            style={{
              opacity: p2,
              transform: `scale(${0.88 + p2 * 0.12})`,
              transition: 'transform 0.18s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.18s ease',
              display: 'flex',
              justifyContent: 'center',
              willChange: 'transform, opacity'
            }}
          >
            <div className="elevate-col-card">
              <div
                className="elevate-card-wrap"
                style={{
                  animation: p2 > 0.85 ? 'cardGentleHover 6s ease-in-out infinite' : 'none'
                }}
              >
                <img
                  src={getAsset('card-elevate-cta-floating.png')}
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
          </div>

          {/* ------------------------------------------------------------ */}
          {/* 3RD CONTENT: Get Your Custom Quote Instantly + QR Code Box   */}
          {/* Emerges third from right side horizontally                   */}
          {/* ------------------------------------------------------------ */}
          <div
            className="elevate-part elevate-part-3"
            style={{
              opacity: p3,
              transform: `translateX(${(1 - p3) * 80}px) scale(${0.94 + p3 * 0.06})`,
              transition: 'transform 0.18s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.18s ease',
              display: 'flex',
              justifyContent: 'center',
              willChange: 'transform, opacity'
            }}
          >
            <div className="elevate-col-qr">
              <div className="elevate-qr-box">
                <h3
                  style={{
                    fontSize: 'clamp(18px, 1.8vw, 22px)',
                    fontWeight: 700,
                    color: '#131515',
                    lineHeight: 1.25,
                    margin: 0,
                    letterSpacing: '-0.015em',
                    fontFamily: 'var(--font-heading)'
                  }}
                >
                  Get Your Custom Quote Instantly
                </h3>

                <div className="elevate-qr-img-wrap">
                  <img
                    src={getAsset('qr-code-quote-scanner.png')}
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
                    fontSize: '13.5px',
                    color: '#595e5e',
                    fontWeight: 500,
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  Scan with any phone camera
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Progress Indicator Pill (Subtle feedback at top right of section) */}
        <div
          style={{
            position: 'absolute',
            top: 'clamp(14px, 3vh, 24px)',
            right: 'clamp(14px, 3vw, 28px)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '7px',
            padding: '5px 13px',
            borderRadius: '50px',
            backgroundColor: 'rgba(255, 255, 255, 0.88)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(19, 21, 21, 0.08)',
            fontSize: 'clamp(11px, 2.4vw, 12px)',
            fontWeight: 600,
            color: '#595e5e',
            zIndex: 25,
            opacity: scrollProgress > 0.02 && scrollProgress < 0.98 ? 1 : 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: 'none'
          }}
        >
          <Sparkles size={12} color="#cfa34b" />
          <span>
            {p3 >= 0.85
              ? 'Ready to connect'
              : p2 >= 0.85
              ? 'Card revealed'
              : p1 >= 0.85
              ? 'Scroll to reveal card'
              : 'Scroll to explore'}
          </span>
        </div>
      </div>
    </section>
  );
}
