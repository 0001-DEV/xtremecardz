import React, { useState, useEffect } from 'react';
import { Star, Sparkles } from 'lucide-react';
import globeImg from '../assets/globe.png';

// Brand client pairs with real high-resolution brand logos from Framer
const LOGO_PAIRS = [
  {
    from: { name: 'Seplat Energy', img: 'https://framerusercontent.com/images/GCV570Tb0ZmpDoHGXAY3N5Vh2r8.png?width=537&height=337' },
    to: { name: 'Nova Bank', img: 'https://framerusercontent.com/images/8tmvtGfhOVVmIrVAUqs9waQExg.png?width=412&height=146' }
  },
  {
    from: { name: 'Invera Energy', img: 'https://framerusercontent.com/images/0XbuTevuBnHJYx9DKL1GRkOBUUk.png?width=495&height=407' },
    to: { name: 'Optiva Capital', img: 'https://framerusercontent.com/images/iQfFipkw27K0IjyZCHm5vGnKvEU.png?width=1025&height=116' }
  },
  {
    from: { name: 'Guinness Nigeria', img: 'https://framerusercontent.com/images/8pDoOBBJyHWiSaN0gG2rWYKGH0Y.png?width=513&height=388' },
    to: { name: 'Rainoil Limited', img: 'https://framerusercontent.com/images/RU1WIInwLchX3hRsYaT6E9XkvtU.png?width=447&height=177' }
  },
  {
    from: { name: 'Ikeja Electric', img: 'https://framerusercontent.com/images/os1wVdf5rrzlyBNvLKxIACOR7ro.png?width=542&height=128' },
    to: { name: 'Sapetro Oil', img: 'https://framerusercontent.com/images/e0aRnbXw3kKmPWRS3NxYiBsxF5Y.webp?width=2501&height=759' }
  },
  {
    from: { name: 'TVC Communications', img: 'https://framerusercontent.com/images/q1yIUKqwDkzVb854iBSHW4lZ6P8.png?width=3178&height=864' },
    to: { name: 'IOGC Petroleum', img: 'https://framerusercontent.com/images/GSIRRGf14EqnjS1zcX49ww1I.png?width=306&height=306' }
  },
  {
    from: { name: 'Sterling Capital', img: 'https://framerusercontent.com/images/itQitqLAZDWH9DHhSPoPvVF5kO8.png?width=270&height=136' },
    to: { name: 'Horizon Group', img: 'https://framerusercontent.com/images/9F5Oaz0bZ86BRoJu0YMQjUtGo.svg?width=904&height=243' }
  },
  {
    from: { name: 'NECA Nigeria', img: 'https://framerusercontent.com/images/9JkqgOhzgaW97POoV3QJBN6OKhw.png?width=362&height=128' },
    to: { name: 'Apex Synergy', img: 'https://framerusercontent.com/images/Hc2wclYvwfkHy84Cgubp1aCMUM.png?width=720&height=362' }
  },
  {
    from: { name: 'Falcon Oil', img: 'https://framerusercontent.com/images/JyVElSfsuVxHhfLB88jM9BNonk.png?width=396&height=224' },
    to: { name: 'Credit Direct', img: 'https://framerusercontent.com/images/dtEewob0v5vfGEgiK3rQ5sytVk.png?width=482&height=118' }
  }
];

const AVATAR_SLOTS = [
  { id: 'tariq', name: 'Tariq Al-Mansoor', avatar: 'https://framerusercontent.com/images/blsE8ntgNC0myl9MVfRRUmf9o.jpg?width=120' },
  { id: 'elena', name: 'Elena Rostova', avatar: 'https://framerusercontent.com/images/H7g08OdB1d2NhCmSTZz4iFHV2F4.png?width=120' },
  { id: 'marcus', name: 'Marcus Sterling', avatar: 'https://framerusercontent.com/images/ljF2u5K5KRhABVThBcOFz5BdXKg.jpeg?width=120' }
];

export default function ClientShowcase() {
  // Top right counter ticker: rolls through 50, 51, 52 ... 59 (0123456789)
  const [digit, setDigit] = useState(0);
  const [slots, setSlots] = useState(AVATAR_SLOTS);
  const [isGliding, setIsGliding] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);

  const incomingLogo = slots[2];

  // Digit ticker + Avatar conveyor effect
  useEffect(() => {
    let glideTimer, pulseTimer;
    const interval = setInterval(() => {
      setIsGliding(true);

      glideTimer = setTimeout(() => {
        setSlots(prev => [prev[2], prev[0], prev[1]]);
        setIsGliding(false);
        setDigit(d => (d + 1) % 10);
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
          100% { transform: translateX(calc(-50% - 14px)); }
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

        /* 3D Rotating & Evolving Map Globe */
        @keyframes globeMapFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes globeContinuousSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes mapContinentsScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-340px);
          }
        }

        @keyframes globeAtmosphereAura {
          0%, 100% {
            filter: drop-shadow(0 0 25px rgba(2, 132, 199, 0.5)) drop-shadow(0 18px 36px rgba(0, 0, 0, 0.25));
          }
          50% {
            filter: drop-shadow(0 0 45px rgba(2, 132, 199, 0.75)) drop-shadow(0 24px 48px rgba(0, 0, 0, 0.35));
          }
        }

        @keyframes cloudGentleFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-3px) scale(1.015); }
        }

        @keyframes digitTickRoll {
          0% { transform: translateY(-5px); opacity: 0.3; }
          100% { transform: translateY(0); opacity: 1; }
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
            {/* Pill with Logos + Black BG rolling counter */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '7px 10px 7px 14px',
                backgroundColor: '#ffffff',
                borderRadius: '50px',
                border: '1px solid rgba(19, 21, 21, 0.08)',
                boxShadow: '0 6px 20px rgba(19, 21, 21, 0.05)',
                overflow: 'hidden'
              }}
            >
              {/* Conveyor of Logos */}
              <div
                style={{
                  position: 'relative',
                  width: '82px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                {/* Incoming Logo: Glides from Slot -1 to Slot 0 */}
                <div
                  style={{
                    position: 'absolute',
                    left: '-22px',
                    zIndex: 1,
                    transform: isGliding ? 'translateX(22px) scale(1)' : 'translateX(0) scale(0.6)',
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
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid #ffffff',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.12)'
                    }}
                  />
                </div>

                {/* Slot 0 (left: 0px) */}
                <div
                  style={{
                    position: 'absolute',
                    left: '0px',
                    zIndex: 2,
                    transform: isGliding ? 'translateX(22px)' : 'translateX(0)',
                    transition: isGliding ? 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)' : 'none',
                    pointerEvents: 'none'
                  }}
                >
                  <img
                    src={slots[0].avatar}
                    alt={slots[0].name}
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid #ffffff',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.12)'
                    }}
                  />
                </div>

                {/* Slot 1 (left: 22px) */}
                <div
                  style={{
                    position: 'absolute',
                    left: '22px',
                    zIndex: 3,
                    transform: isGliding ? 'translateX(22px)' : 'translateX(0)',
                    transition: isGliding ? 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)' : 'none',
                    pointerEvents: 'none'
                  }}
                >
                  <img
                    src={slots[1].avatar}
                    alt={slots[1].name}
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid #ffffff',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.12)'
                    }}
                  />
                </div>

                {/* Slot 2 (left: 44px) -> enters black bg box */}
                <div
                  style={{
                    position: 'absolute',
                    left: '44px',
                    zIndex: 4,
                    transform: isGliding ? 'translateX(34px) scale(0.2)' : 'translateX(0) scale(1)',
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
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid #ffffff',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.12)'
                    }}
                  />
                </div>
              </div>

              {/* Black BG Number Container with rolling digit (0-9) */}
              <div
                style={{
                  backgroundColor: '#131515',
                  color: '#ffffff',
                  padding: '6px 14px',
                  borderRadius: '12px',
                  fontWeight: 800,
                  fontSize: '16px',
                  letterSpacing: '-0.02em',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '54px',
                  boxShadow: isPulsing
                    ? '0 0 20px rgba(207, 163, 75, 0.8), 0 4px 10px rgba(0,0,0,0.3)'
                    : '0 2px 8px rgba(19, 21, 21, 0.2)',
                  transform: isPulsing ? 'scale(1.14)' : 'scale(1)',
                  transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  border: isPulsing ? '1px solid #cfa34b' : '1px solid rgba(255,255,255,0.12)',
                  position: 'relative',
                  zIndex: 10
                }}
              >
                <span>+5</span>
                <span
                  key={digit}
                  style={{
                    display: 'inline-block',
                    animation: 'digitTickRoll 0.24s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
                  }}
                >
                  {digit}
                </span>
              </div>
            </div>

            {/* Under it: 5 gold Stars */}
            <div style={{ display: 'flex', gap: '3px', color: '#ff9803', marginTop: '2px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="#ff9803" color="#ff9803" />
              ))}
            </div>

            {/* Under this: Trusted worldwide */}
            <span
              style={{
                fontSize: '13.5px',
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
      <div
        style={{
          width: '100%',
          overflow: 'hidden',
          padding: '20px 0',
          position: 'relative',
          marginBottom: '56px'
        }}
      >
        {/* Soft edge gradient fades */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: '120px',
            background: 'linear-gradient(to right, var(--color-bg, #fbfbfb) 10%, transparent 100%)',
            zIndex: 3,
            pointerEvents: 'none'
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            width: '120px',
            background: 'linear-gradient(to left, var(--color-bg, #fbfbfb) 10%, transparent 100%)',
            zIndex: 3,
            pointerEvents: 'none'
          }}
        />

        {/* Straight Line Infinite Marquee Track */}
        <div
          style={{
            display: 'flex',
            width: 'max-content',
            animation: 'clientMarqueeStraight 32s linear infinite',
            gap: '28px'
          }}
        >
          {/* Twin duplicated sets for zero-break seamless loop */}
          {[...LOGO_PAIRS, ...LOGO_PAIRS].map((pair, idx) => {
            const staggerDelay = (idx % LOGO_PAIRS.length) * 0.55;

            return (
              <div
                key={idx}
                style={{
                  position: 'relative',
                  width: '190px',
                  height: '76px',
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  border: '1px solid rgba(19, 21, 21, 0.08)',
                  boxShadow: '0 4px 18px rgba(19, 21, 21, 0.04)',
                  overflow: 'hidden',
                  flexShrink: 0
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
                  {/* Slot 0: Old Logo (from) */}
                  <div
                    style={{
                      height: '76px',
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '0 20px',
                      flexShrink: 0
                    }}
                  >
                    <img
                      src={pair.from.img}
                      alt={pair.from.name}
                      style={{
                        maxWidth: '136px',
                        maxHeight: '38px',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain'
                      }}
                    />
                  </div>

                  {/* Slot 1: New Logo (to) - Slides IN from below while old logo slides UP */}
                  <div
                    style={{
                      height: '76px',
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '0 20px',
                      flexShrink: 0
                    }}
                  >
                    <img
                      src={pair.to.img}
                      alt={pair.to.name}
                      style={{
                        maxWidth: '136px',
                        maxHeight: '38px',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain'
                      }}
                    />
                  </div>

                  {/* Slot 2: Duplicate Old Logo (from) - Slides IN from below to close the loop smoothly */}
                  <div
                    style={{
                      height: '76px',
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '0 20px',
                      flexShrink: 0
                    }}
                  >
                    <img
                      src={pair.from.img}
                      alt={pair.from.name}
                      style={{
                        maxWidth: '136px',
                        maxHeight: '38px',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
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

        {/* ============================================================== */}
        {/* 4. MAP GLOBE EVOLVING / ROTATING WITH HALF SITTED IN A CLOUD    */}
        {/* ============================================================== */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '560px',
            height: 'clamp(360px, 48vw, 460px)',
            margin: '0 auto 40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Ambient Azure & Gold Planetary Atmosphere Glow behind the Map Globe */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              width: 'clamp(300px, 42vw, 420px)',
              height: 'clamp(300px, 42vw, 420px)',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(2, 132, 199, 0.45) 0%, rgba(207, 163, 75, 0.18) 55%, transparent 75%)',
              filter: 'blur(45px)',
              pointerEvents: 'none'
            }}
          />

          {/* 3D Rotating & Floating Map Globe Image */}
          <div
            style={{
              position: 'absolute',
              top: '12px',
              zIndex: 1,
              animation: 'globeMapFloat 6s ease-in-out infinite, globeAtmosphereAura 4s ease-in-out infinite',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img
              src={globeImg}
              alt="Global Client Network"
              style={{
                width: 'clamp(280px, 38vw, 380px)',
                height: 'clamp(280px, 38vw, 380px)',
                objectFit: 'contain',
                filter: 'drop-shadow(0 20px 45px rgba(2, 132, 199, 0.4))',
                userSelect: 'none',
                pointerEvents: 'none',
                animation: 'globeContinuousSpin 35s linear infinite'
              }}
            />
          </div>

          {/* The Cloud Nestling / Covering the Lower Half of the Map Globe */}
          <div
            style={{
              position: 'absolute',
              bottom: '0px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 'clamp(340px, 48vw, 520px)',
              zIndex: 3,
              animation: 'cloudGentleFloat 5s ease-in-out infinite',
              filter: 'drop-shadow(0 18px 36px rgba(19, 21, 21, 0.1)) drop-shadow(0 6px 18px rgba(2, 132, 199, 0.22))',
              pointerEvents: 'none'
            }}
          >
            <svg
              width="100%"
              height="auto"
              viewBox="0 0 270 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: 'block' }}
            >
              <defs>
                {/* Back Cloud Puff Gradient */}
                <linearGradient id="cloudBackGrad" x1="135" y1="10" x2="135" y2="120" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                  <stop offset="40%" stopColor="#f8fafc" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.95" />
                </linearGradient>

                {/* Fore Cloud Puff Gradient */}
                <linearGradient id="cloudForeGrad" x1="135" y1="30" x2="135" y2="120" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="60%" stopColor="#f8fafc" />
                  <stop offset="100%" stopColor="#edf2f7" />
                </linearGradient>

                {/* Azure Reflection from the Map Globe bouncing on the Cloud */}
                <radialGradient id="cloudGlobeReflection" cx="50%" cy="10%" r="55%">
                  <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.75" />
                  <stop offset="60%" stopColor="#e0f2fe" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Layer 1: Back Cloud Crests */}
              <circle cx="90" cy="58" r="40" fill="url(#cloudBackGrad)" />
              <circle cx="180" cy="58" r="40" fill="url(#cloudBackGrad)" />
              <circle cx="135" cy="48" r="46" fill="url(#cloudBackGrad)" />

              {/* Layer 2: Main Fore Cumulus Cloudscape (nestling the globe lower half) */}
              <path
                d="M42 98 C26 98 15 86 15 72 C15 58 25 48 38 47 C43 33 56 23 72 23 C80 23 88 27 94 32 C101 19 117 10 135 10 C154 10 170 20 177 34 C182 30 190 27 198 27 C215 27 228 38 231 54 C244 55 255 66 255 80 C255 94 242 106 226 106 L42 106 Z"
                fill="url(#cloudForeGrad)"
              />

              {/* Ambient Planetary Azure Light Bouncing onto the Cloud Crest */}
              <ellipse cx="135" cy="38" rx="58" ry="26" fill="url(#cloudGlobeReflection)" />

              {/* Gentle Cloud Crest Highlights */}
              <path
                d="M74 34 C85 31 114 25 135 25 C158 25 182 33 192 36"
                stroke="#ffffff"
                strokeWidth="3.5"
                strokeLinecap="round"
                opacity="0.9"
              />
            </svg>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 5. 3 COLUMNS STATS BLOCK: + and % in red color, big font size  */}
        {/* ============================================================== */}
        <div
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '36px',
            alignItems: 'start'
          }}
        >
          {/* Column 1: 98% with % in red */}
          <div
            style={{
              padding: '24px 20px',
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              border: '1px solid rgba(19, 21, 21, 0.08)',
              boxShadow: '0 10px 30px rgba(19, 21, 21, 0.04)'
            }}
          >
            <div
              style={{
                fontSize: 'clamp(44px, 4.8vw, 62px)',
                fontWeight: 850,
                color: '#131515',
                letterSpacing: '-0.03em',
                lineHeight: 1,
                marginBottom: '14px'
              }}
            >
              98<span style={{ color: '#e53935', marginLeft: '2px' }}>%</span>
            </div>
            <p
              style={{
                fontSize: '15.5px',
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
          <div
            style={{
              padding: '24px 20px',
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              border: '1px solid rgba(19, 21, 21, 0.08)',
              boxShadow: '0 10px 30px rgba(19, 21, 21, 0.04)'
            }}
          >
            <div
              style={{
                fontSize: 'clamp(44px, 4.8vw, 62px)',
                fontWeight: 850,
                color: '#131515',
                letterSpacing: '-0.03em',
                lineHeight: 1,
                marginBottom: '14px'
              }}
            >
              3.5
            </div>
            <p
              style={{
                fontSize: '15.5px',
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
          <div
            style={{
              padding: '24px 20px',
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              border: '1px solid rgba(19, 21, 21, 0.08)',
              boxShadow: '0 10px 30px rgba(19, 21, 21, 0.04)'
            }}
          >
            <div
              style={{
                fontSize: 'clamp(44px, 4.8vw, 62px)',
                fontWeight: 850,
                color: '#131515',
                letterSpacing: '-0.03em',
                lineHeight: 1,
                marginBottom: '14px'
              }}
            >
              15<span style={{ color: '#e53935', marginLeft: '2px' }}>+</span>
            </div>
            <p
              style={{
                fontSize: '15.5px',
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
