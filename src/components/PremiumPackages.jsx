import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

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
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
            alignItems: 'stretch'
          }}
        >
          {/* Container 1 (Left Container): Your corporate card at a glance */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '26px',
              border: '1px solid rgba(19, 21, 21, 0.08)',
              boxShadow: '0 16px 40px rgba(19, 21, 21, 0.05)',
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
                  color: '#131515',
                  lineHeight: 1.25,
                  marginBottom: '12px'
                }}
              >
                Your corporate card at a glance
              </h3>

              <p
                style={{
                  fontSize: '14.5px',
                  color: '#595e5e',
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
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '14px',
                    alignItems: 'end',
                    justifyItems: 'center'
                  }}
                >
                  {/* 1. Smart Cards — Yellow Circle */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center'
                    }}
                  >
                    <div
                      style={{
                        width: '88px',
                        height: '88px',
                        borderRadius: '50%',
                        border: '3px solid #eab308',
                        backgroundColor: 'rgba(234, 179, 8, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '12px',
                        boxShadow: '0 0 20px rgba(234, 179, 8, 0.15)'
                      }}
                    >
                      <span
                        style={{
                          fontSize: '19px',
                          fontWeight: 700,
                          color: '#ffffff'
                        }}
                      >
                        100%
                      </span>
                    </div>
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

                  {/* 2. Premium Quality — Wider Purple Circle */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center'
                    }}
                  >
                    <div
                      style={{
                        width: '112px',
                        height: '112px',
                        borderRadius: '50%',
                        border: '4px solid #a855f7',
                        backgroundColor: 'rgba(168, 85, 247, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '12px',
                        boxShadow: '0 0 26px rgba(168, 85, 247, 0.25)'
                      }}
                    >
                      <span
                        style={{
                          fontSize: '22px',
                          fontWeight: 700,
                          color: '#ffffff'
                        }}
                      >
                        100%
                      </span>
                    </div>
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

                  {/* 3. Precision Finish — Orange Circle */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center'
                    }}
                  >
                    <div
                      style={{
                        width: '88px',
                        height: '88px',
                        borderRadius: '50%',
                        border: '3px solid #f97316',
                        backgroundColor: 'rgba(249, 115, 22, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '12px',
                        boxShadow: '0 0 20px rgba(249, 115, 22, 0.15)'
                      }}
                    >
                      <span
                        style={{
                          fontSize: '19px',
                          fontWeight: 700,
                          color: '#ffffff'
                        }}
                      >
                        100%
                      </span>
                    </div>
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

              {/* Two Deep Gray Glassmorphism Containers */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px'
                }}
              >
                {/* Deep Gray Glass Container 1: Cards delivered ... 10K+ / Organisations equipped */}
                <div
                  style={{
                    backgroundColor: 'rgba(28, 31, 33, 0.86)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    borderRadius: '20px',
                    padding: '22px 26px',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    boxShadow: '0 10px 28px rgba(0, 0, 0, 0.16)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    color: '#ffffff'
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: '16px',
                        fontWeight: 600,
                        color: '#ffffff',
                        marginBottom: '4px'
                      }}
                    >
                      Cards delivered
                    </div>
                    <div
                      style={{
                        fontSize: '13.5px',
                        color: 'rgba(255, 255, 255, 0.68)'
                      }}
                    >
                      Organisations equipped
                    </div>
                  </div>

                  <div
                    style={{
                      fontSize: 'clamp(28px, 3.2vw, 38px)',
                      fontWeight: 700,
                      color: '#ffffff',
                      letterSpacing: '-0.03em',
                      lineHeight: 1,
                      flexShrink: 0
                    }}
                  >
                    10K+
                  </div>
                </div>

                {/* Deep Gray Glass Container 2: Premium ... 100% / Connect & identify */}
                <div
                  style={{
                    backgroundColor: 'rgba(28, 31, 33, 0.86)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    borderRadius: '20px',
                    padding: '22px 26px',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    boxShadow: '0 10px 28px rgba(0, 0, 0, 0.16)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    color: '#ffffff'
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: '16px',
                        fontWeight: 600,
                        color: '#ffffff',
                        marginBottom: '4px'
                      }}
                    >
                      Premium
                    </div>
                    <div
                      style={{
                        fontSize: '13.5px',
                        color: 'rgba(255, 255, 255, 0.68)'
                      }}
                    >
                      Connect &amp; identify
                    </div>
                  </div>

                  <div
                    style={{
                      fontSize: 'clamp(28px, 3.2vw, 38px)',
                      fontWeight: 700,
                      color: '#ffffff',
                      letterSpacing: '-0.03em',
                      lineHeight: 1,
                      flexShrink: 0
                    }}
                  >
                    100%
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Container 2 (Right Container Beside It): Identity, done differently. */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '26px',
              border: '1px solid rgba(207, 163, 75, 0.35)',
              boxShadow: '0 16px 40px rgba(19, 21, 21, 0.05)',
              padding: '38px 32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'all 0.3s ease'
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'rgba(207, 163, 75, 0.15)',
                  color: '#b88a32',
                  padding: '5px 14px',
                  borderRadius: '50px',
                  fontSize: '12px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '16px'
                }}
              >
                <span>The New Standard</span>
              </div>

              <h3
                style={{
                  fontSize: 'clamp(22px, 2.4vw, 28px)',
                  fontWeight: 700,
                  color: '#131515',
                  lineHeight: 1.25,
                  marginBottom: '12px'
                }}
              >
                Identity, done differently.
              </h3>

              <p
                style={{
                  fontSize: '14.5px',
                  color: '#595e5e',
                  lineHeight: 1.6,
                  marginBottom: '26px'
                }}
              >
                Custom design. Premium materials. Smart technology. Transform a generic plastic badge into an executive brand asset.
              </p>

              {/* 3 Key Differentials */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(207, 163, 75, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Sparkles size={18} color="#cfa34b" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: 600, color: '#131515', margin: '0 0 3px 0' }}>
                      Identity Upgrade
                    </h4>
                    <p style={{ fontSize: '13px', color: '#64748b', margin: 0, lineHeight: 1.45 }}>
                      Replace throwaway badges with executive metal &amp; hybrid smart passes that team members carry with pride.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(207, 163, 75, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Sparkles size={18} color="#cfa34b" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: 600, color: '#131515', margin: '0 0 3px 0' }}>
                      A Better First Impression
                    </h4>
                    <p style={{ fontSize: '13px', color: '#64748b', margin: 0, lineHeight: 1.45 }}>
                      When meeting partners, attending summits, or greeting clients, a substantial card signals prestige immediately.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(2, 131, 167, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Sparkles size={18} color="#0283a7" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: 600, color: '#131515', margin: '0 0 3px 0' }}>
                      Smarter Connectivity
                    </h4>
                    <p style={{ fontSize: '13px', color: '#64748b', margin: 0, lineHeight: 1.45 }}>
                      Tap your card to any smartphone to share rich media, digital profiles, or verify facility access clearances.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenQuote?.('Identity, done differently')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '13px 22px',
                borderRadius: '12px',
                backgroundColor: '#cfa34b',
                border: 'none',
                color: '#131515',
                fontSize: '14px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                width: '100%',
                boxShadow: '0 6px 18px rgba(207, 163, 75, 0.25)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#e5b85d';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#cfa34b';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Get started with Xtremecardz</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
