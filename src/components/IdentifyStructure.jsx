import React, { useState, useEffect } from 'react';
import { Sparkles, Flame, Palette, Cpu, Check, CheckCircle2, Package, Truck, ShoppingBag, FileSpreadsheet } from 'lucide-react';

const DELIVERY_STEPS = [
  { name: 'Design & Proof', icon: Palette },
  { name: 'Production', icon: Cpu },
  { name: 'Quality Check', icon: CheckCircle2 },
  { name: 'Packaging', icon: Package },
  { name: 'Delivery', icon: Truck },
  { name: 'Order', icon: ShoppingBag },
  { name: 'Data Submission', icon: FileSpreadsheet }
];

const FORMULA_ITEMS = ['Material', 'Design', 'Finish', 'Identity', 'Security', 'Smart', 'Experience'];
const FORMULA_ROW_HEIGHT = 60;

export default function IdentifyStructure({ onOpenQuote }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setEnableTransition(true);
      setStepIndex((prev) => prev + 1);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (stepIndex === FORMULA_ITEMS.length) {
      const timeout = setTimeout(() => {
        setEnableTransition(false);
        setStepIndex(0);
      }, 650);
      return () => clearTimeout(timeout);
    }
  }, [stepIndex]);

  return (
    <section
      id="identify-structure"
      style={{
        paddingTop: '70px',
        paddingBottom: '80px',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Header Block: Split Left & Right */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '32px',
            marginBottom: '44px'
          }}
        >
          {/* Left Column */}
          <div style={{ flex: '1 1 420px', maxWidth: '560px' }}>
            {/* Glassmorphism Button */}
            <button
              onClick={() => onOpenQuote?.('Identify with structure')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 20px',
                borderRadius: '50px',
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(19, 21, 21, 0.1)',
                boxShadow: '0 4px 14px rgba(19, 21, 21, 0.04)',
                fontSize: '13.5px',
                fontWeight: 600,
                color: '#131515',
                marginBottom: '18px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                outline: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#131515';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.borderColor = '#131515';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.75)';
                e.currentTarget.style.color = '#131515';
                e.currentTarget.style.borderColor = 'rgba(19, 21, 21, 0.1)';
              }}
            >
              <span>Identify with structure</span>
            </button>

            {/* Bold Text Under It */}
            <h2
              className="identify-bold-heading"
              style={{
                fontSize: 'clamp(28px, 3.6vw, 42px)',
                lineHeight: 1.2,
                color: '#131515',
                margin: 0
              }}
            >
              Premium material
              <br />
              cards that preserves
              <br />
              your prestige.
            </h2>
          </div>

          {/* Right Column */}
          <div style={{ flex: '1 1 360px', maxWidth: '520px' }}>
            <p
              style={{
                fontSize: 'clamp(19px, 1.8vw, 21px)',
                lineHeight: 1.65,
                color: '#52575c',
                margin: 0
              }}
            >
              Xtremecardz brings clarity to your identity
              <br />
              with clean cards, realistic personality,
              <br />
              and prestige that adapts to your day.
            </p>
          </div>
        </div>

        {/* Two Cards Under Them: Left and Right (height: 800px, width: 580px) */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch',
            gap: '36px',
            flexWrap: 'wrap'
          }}
        >
          {/* CARD 1: Delivery Streak Card */}
          <div
            className="identify-card"
            style={{
              backgroundColor: '#e4e6e8',
              borderRadius: '28px',
              border: '1px solid rgba(19, 21, 21, 0.08)',
              boxShadow: '0 16px 40px rgba(19, 21, 21, 0.05)',
              padding: '44px 36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Header Text at the left side */}
            <div style={{ textAlign: 'left' }}>
              <h3
                style={{
                  fontSize: 'clamp(24px, 2.5vw, 28px)',
                  fontWeight: 700,
                  color: '#131515',
                  marginBottom: '12px',
                  lineHeight: 1.2
                }}
              >
                Our delivery streak
              </h3>
              <p
                style={{
                  fontSize: '15.5px',
                  color: '#595e5e',
                  lineHeight: 1.6,
                  margin: 0
                }}
              >
                Our delivery timeline never changes from design concept to product delivery.
              </p>
            </div>

            {/* Container with light gray bg and border radius: Streak Fire Icon & Text */}
            <div
              className="identify-streak-box"
              style={{
                backgroundColor: '#f4f5f6',
                borderRadius: '24px',
                padding: '64px 28px',
                minHeight: '320px',
                border: '1px solid rgba(19, 21, 21, 0.06)',
                boxShadow: '0 8px 24px rgba(19, 21, 21, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                margin: 'auto 0'
              }}
            >
              <div
                style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 107, 0, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px'
                }}
              >
                <Flame size={36} color="#ff6b00" fill="#ff9800" />
              </div>
              <span
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#131515',
                  letterSpacing: '-0.01em'
                }}
              >
                7 Day Delivery Streak Active
              </span>
            </div>

            {/* Moving Buttons Ticker on a single line */}
            <div style={{ width: '100%', paddingTop: '10px' }}>
              <div
                style={{
                  overflow: 'hidden',
                  width: '100%',
                  position: 'relative'
                }}
              >
                <div className="delivery-ticker-track">
                  {[...DELIVERY_STEPS, ...DELIVERY_STEPS, ...DELIVERY_STEPS].map((step, idx) => {
                    const Icon = step.icon;
                    return (
                      <div
                        key={idx}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '11px 20px',
                          borderRadius: '50px',
                          backgroundColor: '#ffffff',
                          border: '1px solid rgba(19, 21, 21, 0.08)',
                          boxShadow: '0 2px 10px rgba(19, 21, 21, 0.03)',
                          fontSize: '13.5px',
                          fontWeight: 600,
                          color: '#131515',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        <Icon size={15} color="#0283a7" />
                        <span>{step.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: Smart ID Formula Card (Grass Footmat Color Background) */}
          <div
            className="identify-card"
            style={{
              borderRadius: '28px',
              background:
                'radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.04) 0%, transparent 50%), linear-gradient(145deg, #2d4c2b 0%, #1e351d 55%, #162815 100%)',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.18)',
              padding: '44px 36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              gap: '24px',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Subtle Turf Footmat Texture Pattern Overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage:
                  'radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px), radial-gradient(rgba(0, 0, 0, 0.18) 1px, transparent 1px)',
                backgroundSize: '6px 6px',
                backgroundPosition: '0 0, 3px 3px',
                pointerEvents: 'none'
              }}
            />

            {/* Top Part (no container): heading + description directly on the grass footmat background */}
            <div
              style={{
                position: 'relative',
                zIndex: 2
              }}
            >
              <h3
                style={{
                  fontSize: 'clamp(22px, 2.3vw, 26px)',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '10px',
                  lineHeight: 1.2
                }}
              >
                Smart ID formula
              </h3>
              <p
                style={{
                  fontSize: '14.5px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: 1.55,
                  margin: 0,
                  maxWidth: '440px'
                }}
              >
                A simple view that shows how we structure corporate cards to match your organization's prestige and personality.
              </p>
            </div>

            {/* Dark Glassmorphism Container: Premium Formula header + formula items, separated by lines */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                backgroundColor: 'rgba(15, 20, 16, 0.62)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.14)',
                boxShadow: '0 16px 36px rgba(0, 0, 0, 0.32)',
                overflow: 'hidden',
                width: '100%'
              }}
            >
              {/* The Xtremecardz Premium Formula! header row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '18px 24px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
                  position: 'relative',
                  zIndex: 2
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(207, 163, 75, 0.22)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Sparkles size={22} color="#cfa34b" />
                </div>
                <span
                  style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    color: '#ffffff'
                  }}
                >
                  The Xtremecardz Premium Formula!
                </span>
              </div>

              {/* Animated step-by-step vertical ticker of formula rows */}
              <div
                style={{
                  height: `${FORMULA_ROW_HEIGHT * FORMULA_ITEMS.length}px`,
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    transform: `translateY(-${stepIndex * FORMULA_ROW_HEIGHT}px)`,
                    transition: enableTransition
                      ? 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
                      : 'none',
                    willChange: 'transform'
                  }}
                >
                  {[...FORMULA_ITEMS, ...FORMULA_ITEMS].map((item, idx) => {
                    const isActiveUp =
                      idx === stepIndex ||
                      (stepIndex === FORMULA_ITEMS.length && idx === 0);
                    return (
                      <div
                        key={`${item}-${idx}`}
                        style={{
                          height: `${FORMULA_ROW_HEIGHT}px`,
                          padding: '0 24px',
                          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                          backgroundColor: isActiveUp
                            ? 'rgba(34, 197, 94, 0.24)'
                            : 'transparent',
                          transition: 'background-color 0.35s ease',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          color: '#ffffff',
                          boxSizing: 'border-box'
                        }}
                      >
                        {/* Solid full-green check circle */}
                        <span
                          style={{
                            width: '22px',
                            height: '22px',
                            borderRadius: '50%',
                            backgroundColor: '#22c55e',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            boxShadow: '0 2px 8px rgba(34, 197, 94, 0.35)'
                          }}
                        >
                          <Check size={13} color="#ffffff" strokeWidth={3} />
                        </span>
                        <span style={{ fontSize: '15px', fontWeight: 500 }}>{item}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CSS for Gentle Continuous Marquee moving on a single line */}
        <style>{`
          @keyframes deliveryMarquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .delivery-ticker-track {
            display: flex;
            gap: 12px;
            width: max-content;
            animation: deliveryMarquee 24s linear infinite;
          }
          .identify-bold-heading {
            font-weight: 700 !important;
            font-synthesis: weight;
          }
          .delivery-ticker-track:hover {
            animation-play-state: paused;
          }
          .identify-card {
            width: 580px;
            max-width: 100%;
            min-height: 760px;
          }
          @media (max-width: 991px), (max-height: 750px) {
            .identify-card {
              width: 100% !important;
              min-height: auto !important;
              height: auto !important;
              padding: 32px 20px !important;
            }
            .identify-streak-box {
              padding: 36px 20px !important;
              min-height: 200px !important;
              margin: 24px 0 !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
