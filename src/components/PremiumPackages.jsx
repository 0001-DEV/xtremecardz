import React, { useEffect, useRef, useState } from 'react';

function CircularProgress({
  size = 80,
  strokeWidth = 8,
  percentage = 100,
  barColor = 'rgb(255, 152, 3)',
  fontSize = '18px',
  animationDelay = 0.25
}) {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [strokeProgress, setStrokeProgress] = useState(0);
  const [displayValue, setDisplayValue] = useState(0);

  const radius = (size - strokeWidth) / 2;
  const center = size / 2;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (strokeProgress / 100) * circumference;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
          setStrokeProgress(0);
          setDisplayValue(0);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return undefined;

    let intervalId = null;
    const timeoutId = setTimeout(() => {
      setStrokeProgress(percentage);

      const totalSteps = 60;
      const stepValue = percentage / totalSteps;
      let currentStep = 0;

      intervalId = setInterval(() => {
        currentStep += 1;
        const nextVal = Math.min(stepValue * currentStep, percentage);
        setDisplayValue(Math.round(nextVal));
        if (currentStep >= totalSteps || nextVal >= percentage) {
          clearInterval(intervalId);
          setDisplayValue(Math.round(percentage));
        }
      }, 25);
    }, animationDelay * 1000);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [inView, percentage, animationDelay]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: `${size}px`,
        height: `${size}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        marginBottom: '12px'
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${size} ${size}`}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          transform: 'rotate(-90deg)'
        }}
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={barColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          style={{
            transition: inView ? 'stroke-dashoffset 1.5s ease-in-out' : 'none'
          }}
        />
      </svg>
      <span
        style={{
          position: 'relative',
          zIndex: 1,
          fontFamily: 'var(--font-heading)',
          fontSize,
          fontWeight: 500,
          letterSpacing: '-0.01em',
          lineHeight: '1em',
          color: '#ffffff',
          opacity: inView ? 1 : 0.4,
          transform: inView ? 'scale(1)' : 'scale(0.85)',
          transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
        }}
      >
        {displayValue}%
      </span>
    </div>
  );
}

export default function PremiumPackages({ onOpenQuote }) {
  return (
    <section
      id="packages"
      style={{
        paddingTop: '30px',
        paddingBottom: '80px',
        position: 'relative'
      }}
    >
      <div className="container" style={{ position: 'relative' }}>
        {/* Two Containers Side by Side */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
            gap: '30px',
            alignItems: 'stretch'
          }}
        >
          {/* Container 1 (Left Container): Your corporate card at a glance */}
          <div
            style={{
              backgroundColor: '#1a1d1f',
              borderRadius: '26px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.25)',
              padding: '38px 32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '22px',
              transition: 'all 0.3s ease'
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: 'clamp(22px, 2.4vw, 28px)',
                  fontWeight: 700,
                  color: '#ffffff',
                  lineHeight: 1.25,
                  marginBottom: '12px'
                }}
              >
                Your corporate card at a glance
              </h3>

              <p
                style={{
                  fontSize: '14.5px',
                  color: 'rgba(255, 255, 255, 0.72)',
                  lineHeight: 1.6,
                  marginBottom: '26px'
                }}
              >
                A smarter way to represent your organization, combining
                <br />
                premium design, exquisite finishes, and production excellence.
              </p>

              {/* Black Container: What makes it Xtreme + 3 100% Circles */}
              <div
                style={{
                  backgroundColor: '#0c0e0e',
                  borderRadius: '22px',
                  padding: '28px 22px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.25)',
                  marginBottom: '20px'
                }}
              >
                <div
                  style={{
                    textAlign: 'center',
                    fontSize: '15px',
                    fontWeight: 600,
                    color: '#ffffff',
                    marginBottom: '26px',
                    letterSpacing: '-0.01em'
                  }}
                >
                  What makes it Xtreme
                </div>

                {/* 3 Circles Row: Yellow, Wider Purple, Orange */}
                <div
                  className="xtreme-circles-row"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '14px',
                    alignItems: 'end',
                    justifyItems: 'center'
                  }}
                >
                  {/* 1. Smart Cards — Amber/Yellow Clockwise Circle */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center'
                    }}
                  >
                    <CircularProgress
                      size={80}
                      strokeWidth={8}
                      percentage={100}
                      barColor="rgb(255, 152, 3)"
                      fontSize="18px"
                      animationDelay={0.2}
                    />
                    <span
                      style={{
                        fontSize: '13px',
                        color: 'rgba(255, 255, 255, 0.85)',
                        lineHeight: 1.35
                      }}
                    >
                      Smart Cards
                    </span>
                  </div>

                  {/* 2. Premium Quality — Wider Purple Clockwise Circle */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center'
                    }}
                  >
                    <CircularProgress
                      size={120}
                      strokeWidth={8}
                      percentage={100}
                      barColor="rgb(144, 0, 255)"
                      fontSize="22px"
                      animationDelay={0.3}
                    />
                    <span
                      style={{
                        fontSize: '13px',
                        color: 'rgba(255, 255, 255, 0.9)',
                        lineHeight: 1.35
                      }}
                    >
                      Premium Quality
                    </span>
                  </div>

                  {/* 3. Precision Finish — Orange Clockwise Circle */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center'
                    }}
                  >
                    <CircularProgress
                      size={80}
                      strokeWidth={8}
                      percentage={100}
                      barColor="rgb(255, 76, 0)"
                      fontSize="18px"
                      animationDelay={0.4}
                    />
                    <span
                      style={{
                        fontSize: '13px',
                        color: 'rgba(255, 255, 255, 0.85)',
                        lineHeight: 1.35
                      }}
                    >
                      Precision Finish
                    </span>
                  </div>
                </div>
              </div>

              {/* Two Deep Gray Glassmorphism Containers arranged in columns */}
              <div
                className="xtreme-stats-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                  gap: '14px'
                }}
              >
                {/* Deep Gray Glass Container 1: Cards delivered / 10K+ / Organisations equipped */}
                <div
                  style={{
                    backgroundColor: 'rgba(28, 31, 33, 0.86)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    borderRadius: '20px',
                    padding: '22px 22px 20px',
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                    boxShadow: '0 10px 28px rgba(0, 0, 0, 0.16)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '144px',
                    color: '#ffffff'
                  }}
                >
                  {/* Top Row: Cards delivered on left, 10K+ on right */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      gap: '10px',
                      width: '100%',
                      marginBottom: '16px'
                    }}
                  >
                    <div
                      style={{
                        fontSize: '15px',
                        fontWeight: 500,
                        color: '#ffffff',
                        lineHeight: 1.3,
                        fontFamily: 'var(--font-heading)'
                      }}
                    >
                      Cards delivered
                    </div>
                    <div
                      style={{
                        fontSize: 'clamp(24px, 2.4vw, 30px)',
                        fontWeight: 700,
                        color: '#ffffff',
                        letterSpacing: '-0.02em',
                        lineHeight: 1,
                        fontFamily: 'var(--font-heading)',
                        flexShrink: 0
                      }}
                    >
                      10K+
                    </div>
                  </div>

                  {/* Bottom Row: Organisations equipped */}
                  <div
                    style={{
                      fontSize: '13.5px',
                      color: 'rgba(255, 255, 255, 0.68)',
                      lineHeight: 1.4,
                      fontFamily: 'var(--font-body)'
                    }}
                  >
                    Organisations equipped
                  </div>
                </div>

                {/* Deep Gray Glass Container 2: Premium / 100% / Connect & identify */}
                <div
                  style={{
                    backgroundColor: 'rgba(28, 31, 33, 0.86)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    borderRadius: '20px',
                    padding: '22px 22px 20px',
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                    boxShadow: '0 10px 28px rgba(0, 0, 0, 0.16)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '144px',
                    color: '#ffffff'
                  }}
                >
                  {/* Top Row: Premium on left, 100% on right */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      gap: '10px',
                      width: '100%',
                      marginBottom: '16px'
                    }}
                  >
                    <div
                      style={{
                        fontSize: '15px',
                        fontWeight: 500,
                        color: '#ffffff',
                        lineHeight: 1.3,
                        fontFamily: 'var(--font-heading)'
                      }}
                    >
                      Premium
                    </div>
                    <div
                      style={{
                        fontSize: 'clamp(24px, 2.4vw, 30px)',
                        fontWeight: 700,
                        color: '#ffffff',
                        letterSpacing: '-0.02em',
                        lineHeight: 1,
                        fontFamily: 'var(--font-heading)',
                        flexShrink: 0
                      }}
                    >
                      100%
                    </div>
                  </div>

                  {/* Bottom Row: Connect & identify */}
                  <div
                    style={{
                      fontSize: '13.5px',
                      color: 'rgba(255, 255, 255, 0.68)',
                      lineHeight: 1.4,
                      fontFamily: 'var(--font-body)'
                    }}
                  >
                    Connect &amp; identify
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Container 2 (Right Container Beside It): Identity, done differently. */}
          <div
            style={{
              backgroundColor: '#1a1d1f',
              borderRadius: '26px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.25)',
              padding: '38px 32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '22px',
              transition: 'all 0.3s ease'
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: 'clamp(22px, 2.4vw, 28px)',
                  fontWeight: 700,
                  color: '#ffffff',
                  lineHeight: 1.25,
                  marginBottom: '12px'
                }}
              >
                Identity, done differently.
              </h3>

              <p
                style={{
                  fontSize: '14.5px',
                  color: 'rgba(255, 255, 255, 0.72)',
                  lineHeight: 1.6,
                  marginBottom: '26px'
                }}
              >
                Premium material cards designed to look, feel and
                <br />
                function like your organization means business.
              </p>
            </div>

            {/* Inner Showcase Stage: 2 Moving Background Text Container Rows + Centered Dark Glassmorphism Card */}
            <div
              style={{
                position: 'relative',
                flex: 1,
                minHeight: '420px',
                borderRadius: '22px',
                backgroundColor: '#0c0e0e',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '28px 20px'
              }}
            >
              {/* Background Two Moving Rows of Text Containers */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '22px',
                  pointerEvents: 'none',
                  zIndex: 1,
                  opacity: 0.55
                }}
              >
                {/* Row 1: Moving Right */}
                <div style={{ overflow: 'hidden', width: '100%' }}>
                  <div className="identity-marquee-track identity-marquee-right">
                    {[
                      'Executive Metal Cards',
                      '24K Gold Finish',
                      'Smart NFC Tap',
                      'Laser Engraving',
                      'Custom Brand Identity',
                      'VIP Access Pass',
                      'Brushed Titanium',
                      'Executive Metal Cards',
                      '24K Gold Finish',
                      'Smart NFC Tap',
                      'Laser Engraving',
                      'Custom Brand Identity',
                      'VIP Access Pass',
                      'Brushed Titanium'
                    ].map((txt, idx) => (
                      <div
                        key={`r1-${idx}`}
                        style={{
                          padding: '14px 22px',
                          borderRadius: '14px',
                          backgroundColor: 'rgba(255, 255, 255, 0.06)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: 'rgba(255, 255, 255, 0.78)',
                          fontSize: '13.5px',
                          fontWeight: 500,
                          whiteSpace: 'nowrap',
                          flexShrink: 0
                        }}
                      >
                        {txt}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Row 2: Moving Left */}
                <div style={{ overflow: 'hidden', width: '100%' }}>
                  <div className="identity-marquee-track identity-marquee-left">
                    {[
                      'Contactless Sharing',
                      'Precision Cutouts',
                      'Matte Stealth Black',
                      'Corporate Prestige',
                      'Encrypted Credentials',
                      'Signature Luster',
                      'Hybrid Smart Pass',
                      'Contactless Sharing',
                      'Precision Cutouts',
                      'Matte Stealth Black',
                      'Corporate Prestige',
                      'Encrypted Credentials',
                      'Signature Luster',
                      'Hybrid Smart Pass'
                    ].map((txt, idx) => (
                      <div
                        key={`r2-${idx}`}
                        style={{
                          padding: '14px 22px',
                          borderRadius: '14px',
                          backgroundColor: 'rgba(255, 255, 255, 0.06)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: 'rgba(255, 255, 255, 0.78)',
                          fontSize: '13.5px',
                          fontWeight: 500,
                          whiteSpace: 'nowrap',
                          flexShrink: 0
                        }}
                      >
                        {txt}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Foreground Centered Dark Glassmorphism Card */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 2,
                  width: '100%',
                  maxWidth: '400px',
                  backgroundColor: 'rgba(20, 23, 25, 0.72)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  borderRadius: '22px',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  boxShadow: '0 20px 45px rgba(0, 0, 0, 0.45)',
                  padding: '32px 26px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                <span
                  style={{
                    fontSize: '11.5px',
                    fontWeight: 600,
                    color: '#cfa34b',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '12px'
                  }}
                >
                  IDENTITY UPGRADE
                </span>

                <h4
                  style={{
                    fontSize: 'clamp(20px, 2.2vw, 24px)',
                    fontWeight: 700,
                    color: '#ffffff',
                    lineHeight: 1.25,
                    marginBottom: '12px'
                  }}
                >
                  It&apos;s time for better Identity cards
                </h4>

                <p
                  style={{
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.75)',
                    lineHeight: 1.55,
                    margin: '0 0 24px 0'
                  }}
                >
                  Custom design. Premium
                  <br />
                  materials. Smart technology
                </p>

                {/* Two Buttons Side by Side: Get a quote (white) & Upgrade ID (black) */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    flexWrap: 'wrap',
                    width: '100%'
                  }}
                >
                  <button
                    onClick={() => onOpenQuote?.('Get a quote - Identity Upgrade')}
                    style={{
                      padding: '11px 22px',
                      borderRadius: '50px',
                      backgroundColor: '#ffffff',
                      color: '#131515',
                      border: '1px solid #ffffff',
                      fontSize: '13.5px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 4px 14px rgba(255, 255, 255, 0.12)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#f1f3f5';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#ffffff';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    Get a quote
                  </button>

                  <button
                    onClick={() => onOpenQuote?.('Upgrade ID')}
                    style={{
                      padding: '11px 22px',
                      borderRadius: '50px',
                      backgroundColor: '#0c0e0e',
                      color: '#ffffff',
                      border: '1px solid rgba(255, 255, 255, 0.18)',
                      fontSize: '13.5px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.35)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#1c2022';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#0c0e0e';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    Upgrade ID
                  </button>
                </div>
              </div>

              <style>{`
                @keyframes identityScrollLeft {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                @keyframes identityScrollRight {
                  0% { transform: translateX(-50%); }
                  100% { transform: translateX(0); }
                }
                .identity-marquee-track {
                  display: flex;
                  gap: 14px;
                  width: max-content;
                }
                .identity-marquee-right {
                  animation: identityScrollRight 28s linear infinite;
                }
                .identity-marquee-left {
                  animation: identityScrollLeft 28s linear infinite;
                }
                @media (max-width: 400px) {
                  .xtreme-circles-row {
                    gap: 6px !important;
                    transform: scale(0.85);
                    transform-origin: center;
                    margin: -10px 0;
                  }
                }
                @media (max-width: 480px) {
                  .xtreme-stats-grid {
                    grid-template-columns: 1fr !important;
                    gap: 12px !important;
                  }
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
