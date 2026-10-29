import React, { useState, useEffect } from 'react';

const LOGOS = [
  {
    id: 'tariq',
    name: 'Tariq Al-Mansoor',
    avatar: 'https://framerusercontent.com/images/blsE8ntgNC0myl9MVfRRUmf9o.jpg?width=120'
  },
  {
    id: 'elena',
    name: 'Elena Rostova',
    avatar: 'https://framerusercontent.com/images/H7g08OdB1d2NhCmSTZz4iFHV2F4.png?width=120'
  },
  {
    id: 'marcus',
    name: 'Marcus Sterling',
    avatar: 'https://framerusercontent.com/images/ljF2u5K5KRhABVThBcOFz5BdXKg.jpeg?width=120'
  }
];

export default function ClientShowcase() {
  // slots[0] = back (Slot 0), slots[1] = middle (Slot 1), slots[2] = front (Slot 2)
  const [slots, setSlots] = useState(LOGOS);
  const [count, setCount] = useState(51);
  const [isGliding, setIsGliding] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);

  // The incoming logo that enters from behind at Slot -1 is identical to the one currently at Slot 2
  const incomingLogo = slots[2];

  useEffect(() => {
    let glideTimer, pulseTimer;

    const interval = setInterval(() => {
      // 1. Trigger unified simultaneous glide for all 4 items
      setIsGliding(true);

      // 2. Exactly when glide finishes (600ms):
      glideTimer = setTimeout(() => {
        // Shift slots: the one entering the number becomes the first from behind (index 0)
        setSlots(prev => [prev[2], prev[0], prev[1]]);

        // Instant reset of transform without animation jump
        setIsGliding(false);

        // Increment number and pulse black box
        setCount(c => (c >= 54 ? 51 : c + 1));
        setIsPulsing(true);

        pulseTimer = setTimeout(() => {
          setIsPulsing(false);
        }, 250);
      }, 600);

    }, 1800); // 600ms glide + 1200ms rest = buttery smooth rhythm

    return () => {
      clearInterval(interval);
      clearTimeout(glideTimer);
      clearTimeout(pulseTimer);
    };
  }, []);

  return (
    <section
      id="client-metrics"
      style={{
        paddingTop: '20px',
        paddingBottom: '30px',
        position: 'relative'
      }}
    >
      <style>{`
        @keyframes digitTick {
          0% { transform: translateY(-4px) scale(0.92); opacity: 0.4; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
      `}</style>

      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}
      >
        {/* Clean Pill with Logos before the Number - Aligned to right */}
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
          {/* Continuous Conveyor Queue */}
          <div
            style={{
              position: 'relative',
              width: '82px',
              height: '36px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {/* 1. Incoming Logo: Glides from offstage Slot -1 (-22px) into Slot 0 (0px) */}
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

            {/* 2. Slot 0 (left: 0px): Glides to Slot 1 (+22px) */}
            <div
              style={{
                position: 'absolute',
                left: '0px',
                zIndex: 2,
                transform: isGliding ? 'translateX(22px)' : 'translateX(0)',
                transition: isGliding
                  ? 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
                  : 'none',
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

            {/* 3. Slot 1 (left: 22px): Glides to Slot 2 (+22px) */}
            <div
              style={{
                position: 'absolute',
                left: '22px',
                zIndex: 3,
                transform: isGliding ? 'translateX(22px)' : 'translateX(0)',
                transition: isGliding
                  ? 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
                  : 'none',
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

            {/* 4. Slot 2 (left: 44px): Glides into the Black BG Number Box (+34px, shrinks & fades) */}
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

          {/* Black BG Number Container */}
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
              minWidth: '52px',
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
            <span
              key={count}
              style={{
                display: 'inline-block',
                animation: 'digitTick 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
              }}
            >
              +{count}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
