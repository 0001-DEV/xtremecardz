import { getAsset } from '../assets/assetUrl';
import React, { useState, useEffect, useRef } from 'react';
import { Star, Sparkles } from 'lucide-react';
import globeImg from '../assets/globe.png';
import cloudImg from '../assets/cloud.png';

// Brand client pairs with real high-resolution brand logos from Framer
const LOGO_PAIRS = [
  {
    from: { name: 'Seplat Energy', img: getAsset('logo-seplat-energy.png') },
    to: { name: 'Nova Bank', img: getAsset('logo-nova-bank.png') }
  },
  {
    from: { name: 'Invera Energy', img: getAsset('logo-invera-energy.png') },
    to: { name: 'Optiva Capital', img: getAsset('logo-optiva-capital.png') }
  },
  {
    from: { name: 'Guinness Nigeria', img: getAsset('logo-guinness-nigeria.png') },
    to: { name: 'Rainoil Limited', img: getAsset('logo-rainoil.png') }
  },
  {
    from: { name: 'Ikeja Electric', img: getAsset('logo-ikeja-electric.png') },
    to: { name: 'Sapetro Oil', img: getAsset('logo-sapetro-oil.webp') }
  },
  {
    from: { name: 'TVC Communications', img: getAsset('logo-tvc-communications.png') },
    to: { name: 'IOGC Petroleum', img: getAsset('logo-iogc-petroleum.png') }
  },
  {
    from: { name: 'Sterling Capital', img: getAsset('logo-sterling-capital.png') },
    to: { name: 'Horizon Group', img: getAsset('logo-horizon-group.svg') }
  },
  {
    from: { name: 'NECA Nigeria', img: getAsset('logo-neca-nigeria.png') },
    to: { name: 'Apex Synergy', img: getAsset('logo-apex-synergy.png') }
  },
  {
    from: { name: 'Falcon Oil', img: getAsset('logo-falcon-oil.png') },
    to: { name: 'Credit Direct', img: getAsset('logo-credit-direct.png') }
  }
];

const AVATAR_SLOTS = [
  { id: 'tariq', name: 'Tariq Al-Mansoor', avatar: getAsset('avatar-tariq-al-mansoor.jpg') },
  { id: 'elena', name: 'Elena Rostova', avatar: getAsset('avatar-elena-rostova.png') },
  { id: 'marcus', name: 'Marcus Sterling', avatar: getAsset('avatar-marcus-sterling.jpeg') }
];

export default function ClientShowcase() {
  // Top right counter ticker: rolls 51 -> 52 -> 53 -> 54, then 1 rolls back from top and continues
  const [digit, setDigit] = useState(1);
  const [slots, setSlots] = useState(AVATAR_SLOTS);
  const [isGliding, setIsGliding] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  const incomingLogo = slots[2];

  // Digit ticker + Avatar conveyor effect
  useEffect(() => {
    let glideTimer, pulseTimer;
    const interval = setInterval(() => {
      setIsGliding(true);

      glideTimer = setTimeout(() => {
        setSlots((prev) => [prev[2], prev[0], prev[1]]);
        setIsGliding(false);
        setDigit((d) => (d >= 4 ? 1 : d + 1));
        setIsPulsing(true);

        pulseTimer = setTimeout(() => {
          setIsPulsing(false);
        }, 260);
      }, 600);
    }, 1800);

    return () => {
      clearInterval(interval);
      clearTimeout(glideTimer);
      clearTimeout(pulseTimer);
    };
  }, []);

  // Trigger number slot/reveal animation once when scrolled into view
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="clients"
      style={{
        paddingTop: '60px',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <style>{`
        /* Infinite Marquee Track */
        @keyframes clientMarqueeStraight {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Vertical Slide-Up Roller Twist:
           The old logo slides UP and leaves while the new logo slides IN from below to take its place
        */
        @keyframes clientLogoSlideUp {
          0%, 38% {
            transform: translateY(0%);
          }
          46% {
            /* Old logo slides UP and leaves, New logo slides IN from below */
            transform: translateY(-33.333333%);
          }
          50%, 88% {
            /* New logo sits steadily in view */
            transform: translateY(-33.333333%);
          }
          96%, 100% {
            /* New logo slides UP and leaves, Duplicate logo slides IN from below */
            transform: translateY(-66.666666%);
          }
        }

        /* 3D Rotating & Evolving Map Globe - Perfectly Centered */
        @keyframes globeMapFloat {
          0%, 100% {
            transform: translateX(-50%) translateY(0px);
          }
          50% {
            transform: translateX(-50%) translateY(-10px);
          }
        }

        @keyframes globeWestToEastScroll {
          0% {
            background-position: 0px center;
          }
          100% {
            background-position: 200% center;
          }
        }
        @keyframes globeAtmosphereAura {
          0%, 100% {
            filter: drop-shadow(0 16px 36px rgba(0, 0, 0, 0.07));
          }
          50% {
            filter: drop-shadow(0 22px 45px rgba(0, 0, 0, 0.1));
          }
        }

        @keyframes cloudGentleFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-3px) scale(1.015); }
        }

        @keyframes digitTickRollUp {
          0% { transform: translateY(100%); opacity: 0.2; }
          100% { transform: translateY(0%); opacity: 1; }
        }

        @keyframes digitTickRollDown {
          0% { transform: translateY(-100%); opacity: 0.2; }
          100% { transform: translateY(0%); opacity: 1; }
        }
      `}</style>

      <div className="container">
        {/* ============================================================== */}
        {/* 1. TOP BAR: Left Title vs Right Animated Counter Badge Cluster */}
        {/* ============================================================== */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '30px',
            marginBottom: '46px'
          }}
        >
          {/* Left Hand Side: Our Xtreme clients doing it the Xtreme way */}
          <div style={{ flex: '1 1 380px', maxWidth: '640px' }}>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.8vw, 44px)',
                fontWeight: 800,
                color: '#131515',
                lineHeight: 1.2,
                letterSpacing: '-0.025em',
                margin: 0
              }}
            >
              Our Xtreme clients doing it the Xtreme way
            </h2>
          </div>

          {/* Right Hand Side: +50(0-9) counter, 5 gold Stars, Trusted worldwide */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '8px'
            }}
          >
            {/* Unboxed Overlapping Circles Cluster (3 Avatars + Circular +50..54 Counter) */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                position: 'relative',
                padding: '4px 0'
              }}
            >
              {/* Conveyor of 3 Overlapping Avatar Circles + Circular Number Circle */}
              <div
                style={{
                  position: 'relative',
                  width: '146px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                {/* Incoming Logo: Glides from Slot -1 to Slot 0 */}
                <div
                  style={{
                    position: 'absolute',
                    left: '-32px',
                    zIndex: 1,
                    transform: isGliding ? 'translateX(32px) scale(1)' : 'translateX(0) scale(0.6)',
                    opacity: isGliding ? 1 : 0,
                    transition: isGliding
                      ? 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.6s ease'
                      : 'none',
                    pointerEvents: 'none'
                  }}
                >
                  <img
                    src={incomingLogo.avatar}
                    alt={incomingLogo.name}
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid #131515',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.14)',
                      display: 'block'
                    }}
                  />
                </div>

                {/* Slot 0 (left: 0px) */}
                <div
                  style={{
                    position: 'absolute',
                    left: '0px',
                    zIndex: 2,
                    transform: isGliding ? 'translateX(32px)' : 'translateX(0)',
                    transition: isGliding ? 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)' : 'none',
                    pointerEvents: 'none'
                  }}
                >
                  <img
                    src={slots[0].avatar}
                    alt={slots[0].name}
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid #131515',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.14)',
                      display: 'block'
                    }}
                  />
                </div>

                {/* Slot 1 (left: 32px) */}
                <div
                  style={{
                    position: 'absolute',
                    left: '32px',
                    zIndex: 3,
                    transform: isGliding ? 'translateX(32px)' : 'translateX(0)',
                    transition: isGliding ? 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)' : 'none',
                    pointerEvents: 'none'
                  }}
                >
                  <img
                    src={slots[1].avatar}
                    alt={slots[1].name}
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid #131515',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.14)',
                      display: 'block'
                    }}
                  />
                </div>

                {/* Slot 2 (left: 64px) -> glides into the circular counter */}
                <div
                  style={{
                    position: 'absolute',
                    left: '64px',
                    zIndex: 4,
                    transform: isGliding ? 'translateX(32px) scale(0.3)' : 'translateX(0) scale(1)',
                    opacity: isGliding ? 0 : 1,
                    transition: isGliding
                      ? 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.55s ease'
                      : 'none',
                    pointerEvents: 'none'
                  }}
                >
                  <img
                    src={slots[2].avatar}
                    alt={slots[2].name}
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid #131515',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.14)',
                      display: 'block'
                    }}
                  />
                </div>

                {/* Overlapping Circular Counter Badge (+50 to +54) at left: 96px */}
                <div
                  style={{
                    position: 'absolute',
                    left: '96px',
                    zIndex: 10,
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    backgroundColor: '#131515',
                    color: '#ffffff',
                    border: '2px solid #131515',
                    fontWeight: 700,
                    fontSize: '15px',
                    letterSpacing: '-0.02em',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(19, 21, 21, 0.22)',
                    transform: isPulsing ? 'scale(1.08)' : 'scale(1)',
                    transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    overflow: 'hidden'
                  }}
                >
                  <span>+5</span>
                  <span
                    style={{
                      display: 'inline-flex',
                      overflow: 'hidden',
                      height: '18px',
                      alignItems: 'center'
                    }}
                  >
                    <span
                      key={digit}
                      style={{
                        display: 'inline-block',
                        lineHeight: '18px',
                        animation: `${digit === 1 ? 'digitTickRollDown' : 'digitTickRollUp'} 0.36s cubic-bezier(0.22, 1, 0.36, 1) forwards`
                      }}
                    >
                      {digit}
                    </span>
                  </span>
                </div>
              </div>
            </div>
            {/* Under it: 5 gold Stars (Increased size) */}
            <div style={{ display: 'flex', gap: '4px', color: '#ff9803', marginTop: '4px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="#ff9803" color="#ff9803" />
              ))}
            </div>

            {/* Under this: Trusted worldwide (Increased size) */}
            <span
              style={{
                fontSize: '17px',
                fontWeight: 600,
                color: '#595e5e',
                letterSpacing: '0.01em'
              }}
            >
              Trusted worldwide
            </span>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. THE CLIENT LOGOS MOVING ON A STRAIGHT LINE (WITH TWIST)      */}
      {/* ============================================================== */}
      <div className="container" style={{ position: 'relative', marginBottom: '56px' }}>
        <div
          style={{
            width: '100%',
            overflow: 'hidden',
            padding: '20px 0',
            position: 'relative'
          }}
        >
          {/* Soft edge gradient fades - seamlessly emerging from and fading into page background */}
          <div
            style={{
              position: 'absolute',
              top: '-10px',
              bottom: '-10px',
              left: '-10px',
              width: 'clamp(100px, 12vw, 160px)',
              background: 'linear-gradient(90deg, #f9f8f6 0%, rgba(249, 248, 246, 0.85) 40%, rgba(249, 248, 246, 0) 100%)',
              zIndex: 3,
              pointerEvents: 'none'
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '-10px',
              bottom: '-10px',
              right: '-10px',
              width: 'clamp(100px, 12vw, 160px)',
              background: 'linear-gradient(270deg, #f9f8f6 0%, rgba(249, 248, 246, 0.85) 40%, rgba(249, 248, 246, 0) 100%)',
              zIndex: 3,
              pointerEvents: 'none'
            }}
          />

        {/* Straight Line Infinite Marquee Track matching About Us page */}
        <div
          style={{
            display: 'flex',
            width: 'max-content',
            gap: '64px',
            animation: 'clientMarqueeStraight 32s linear infinite',
            alignItems: 'center'
          }}
        >
          {/* Twin duplicated sets for zero-break seamless loop */}
          {[...LOGO_PAIRS, ...LOGO_PAIRS].map((pair, idx) => {
            const staggerDelay = (idx % LOGO_PAIRS.length) * 0.55;

            return (
              <div
                key={idx}
                style={{
                  width: '182px',
                  padding: '36px 24px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(6px)',
                  WebkitBackdropFilter: 'blur(6px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <div
                  style={{
                    width: '134px',
                    height: '36px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}
                >
                  {/* 3-Slot Vertical Roller: Slot 0 (Logo A) -> Slot 1 (Logo B) -> Slot 2 (Logo A) */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '100%',
                      height: '300%',
                      animation: 'clientLogoSlideUp 4.8s cubic-bezier(0.77, 0, 0.175, 1) infinite',
                      animationDelay: `${staggerDelay}s`
                    }}
                  >
                    {[pair.from, pair.to, pair.from].map((logo, lIdx) => (
                      <div
                        key={lIdx}
                        style={{
                          width: '134px',
                          height: '36px',
                          flexShrink: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <img
                          src={logo.img}
                          alt={logo.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            display: 'block'
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </div>

      <div className="container" style={{ textAlign: 'center' }}>
        {/* ============================================================== */}
        {/* 3. CENTERED CONTENT: Button, Heading & 300,000+               */}
        {/* ============================================================== */}
        <div style={{ maxWidth: '820px', margin: '0 auto 40px' }}>
          {/* Transparent button with radius */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 22px',
              backgroundColor: 'rgba(255, 255, 255, 0.75)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderRadius: '50px',
              border: '1px solid rgba(19, 21, 21, 0.1)',
              boxShadow: '0 4px 18px rgba(19, 21, 21, 0.04)',
              fontSize: '13.5px',
              fontWeight: 650,
              color: '#131515',
              marginBottom: '20px',
              letterSpacing: '0.01em'
            }}
          >
            <Sparkles size={14} color="#cfa34b" />
            <span>Luxury corporate card design, real business impact</span>
          </div>

          {/* How modern brands leave a lasting impression */}
          <h3
            style={{
              fontSize: 'clamp(26px, 3.5vw, 40px)',
              fontWeight: 750,
              color: '#131515',
              lineHeight: 1.25,
              letterSpacing: '-0.025em',
              marginBottom: '18px'
            }}
          >
            How modern brands leave a lasting impression
          </h3>

          {/* 300,000+ Big Font Size */}
          <div
            style={{
              fontSize: 'clamp(54px, 7.5vw, 88px)',
              fontWeight: 850,
              color: '#131515',
              letterSpacing: '-0.04em',
              lineHeight: 1,
              marginTop: '10px'
            }}
          >
            300,000+
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 4. VERY BIG ROTATING GLOBE WITH FULL-WIDTH CLOUD COVERING HALF */}
      {/* ============================================================== */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 'clamp(520px, 60vw, 680px)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          margin: '20px 0 0',
          pointerEvents: 'none'
        }}
      >
        {/* 3D Spherical Globe rotating West-to-East while keeping a perfectly circular sphere outline */}
        <div
          style={{
            position: 'absolute',
            top: '15px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 2,
            animation: 'globeMapFloat 6s ease-in-out infinite, globeAtmosphereAura 4s ease-in-out infinite',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div
            role="img"
            aria-label="Global Client Network"
            style={{
              width: 'clamp(480px, 56vw, 660px)',
              height: 'clamp(480px, 56vw, 660px)',
              borderRadius: '50%',
              overflow: 'hidden',
              position: 'relative',
              backgroundColor: '#034c8c',
              backgroundImage: `url(${globeImg})`,
              backgroundRepeat: 'repeat-x',
              backgroundSize: '115% 115%',
              animation: 'globeWestToEastScroll 28s linear infinite',
              boxShadow:
                'inset -42px -28px 80px rgba(0, 12, 32, 0.72), inset 28px 24px 60px rgba(255, 255, 255, 0.35), 0 20px 40px rgba(0, 0, 0, 0.1)'
            }}
          />
        </div>
        {/* Solid Body Background Block covering exactly the bottom 50% (half) of the globe */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '50%',
            backgroundColor: 'var(--bg-page, #f9f8f6)',
            zIndex: 4,
            pointerEvents: 'none'
          }}
        />

        {/* Full-width Cloud Layer sitting across the halfway horizon line */}
        <div
          style={{
            position: 'absolute',
            bottom: '0px',
            left: '0px',
            right: '0px',
            width: '100%',
            height: '62%',
            zIndex: 5,
            animation: 'cloudGentleFloat 5s ease-in-out infinite',
            pointerEvents: 'none',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center'
          }}
        >
          {/* Panoramic Cloud Image stretching full width across the screen */}
          <img
            src={cloudImg}
            alt="Atmospheric Cloud Horizon"
            style={{
              position: 'relative',
              zIndex: 2,
              width: '100%',
              maxWidth: 'none',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block'
            }}
          />
        </div>
      </div>
      {/* ============================================================== */}
      {/* 5. 3 COLUMNS STATS BLOCK: No container, numbers emerge & stay  */}
      {/* ============================================================== */}
      <div
        ref={statsRef}
        className="container"
        style={{ textAlign: 'center', marginTop: '-160px', position: 'relative', zIndex: 10 }}
      >
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '36px',
            alignItems: 'start'
          }}
        >
          {/* Column 1: 98% with % in red */}
          <div style={{ padding: '12px 10px' }}>
            <div
              style={{
                overflow: 'hidden',
                display: 'inline-flex',
                alignItems: 'baseline',
                justifyContent: 'center',
                marginBottom: '14px',
                padding: '4px 2px'
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  fontSize: 'clamp(50px, 5.2vw, 68px)',
                  fontWeight: 850,
                  color: '#131515',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                  transform: statsVisible ? 'translateY(0%)' : 'translateY(115%)',
                  opacity: statsVisible ? 1 : 0,
                  transition:
                    'transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.05s, opacity 0.65s ease 0.05s',
                  willChange: 'transform, opacity'
                }}
              >
                98<span style={{ color: '#e53935', marginLeft: '2px' }}>%</span>
              </span>
            </div>
            <p
              style={{
                fontSize: '21px',
                lineHeight: 1.5,
                color: '#595e5e',
                fontWeight: 600,
                margin: 0
              }}
            >
              Premium brand<br />retention rate
            </p>
          </div>

          {/* Column 2: 3.5 with bigger font size */}
          <div style={{ padding: '12px 10px' }}>
            <div
              style={{
                overflow: 'hidden',
                display: 'inline-flex',
                alignItems: 'baseline',
                justifyContent: 'center',
                marginBottom: '14px',
                padding: '4px 2px'
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  fontSize: 'clamp(50px, 5.2vw, 68px)',
                  fontWeight: 850,
                  color: '#131515',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                  transform: statsVisible ? 'translateY(0%)' : 'translateY(115%)',
                  opacity: statsVisible ? 1 : 0,
                  transition:
                    'transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, opacity 0.65s ease 0.2s',
                  willChange: 'transform, opacity'
                }}
              >
                3.5
              </span>
            </div>
            <p
              style={{
                fontSize: '21px',
                lineHeight: 1.5,
                color: '#595e5e',
                fontWeight: 600,
                margin: 0
              }}
            >
              Faster production<br />and delivery timeline
            </p>
          </div>

          {/* Column 3: 15+ with + in red */}
          <div style={{ padding: '12px 10px' }}>
            <div
              style={{
                overflow: 'hidden',
                display: 'inline-flex',
                alignItems: 'baseline',
                justifyContent: 'center',
                marginBottom: '14px',
                padding: '4px 2px'
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  fontSize: 'clamp(50px, 5.2vw, 68px)',
                  fontWeight: 850,
                  color: '#131515',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                  transform: statsVisible ? 'translateY(0%)' : 'translateY(115%)',
                  opacity: statsVisible ? 1 : 0,
                  transition:
                    'transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.35s, opacity 0.65s ease 0.35s',
                  willChange: 'transform, opacity'
                }}
              >
                15<span style={{ color: '#e53935', marginLeft: '2px' }}>+</span>
              </span>
            </div>
            <p
              style={{
                fontSize: '21px',
                lineHeight: 1.5,
                color: '#595e5e',
                fontWeight: 600,
                margin: 0
              }}
            >
              Countries with<br />active Xtreme<br />Cardz professionals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
