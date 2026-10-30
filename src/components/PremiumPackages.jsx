import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Cpu, Layers, Smartphone, Award } from 'lucide-react';

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
              transition: 'all 0.3s ease'
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'rgba(2, 131, 167, 0.1)',
                  color: '#0283a7',
                  padding: '5px 14px',
                  borderRadius: '50px',
                  fontSize: '12px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '16px'
                }}
              >
                <span>At A Glance</span>
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
                A smarter way to represent your organization, combining premium design, exquisite finishes, and production excellence.
              </p>

              {/* 3 Value Pillars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
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
                    <Layers size={18} color="#0283a7" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: 600, color: '#131515', margin: '0 0 3px 0' }}>
                      Structural Permanence
                    </h4>
                    <p style={{ fontSize: '13px', color: '#64748b', margin: 0, lineHeight: 1.45 }}>
                      Marine-grade 316L stainless steel, aircraft titanium, and multi-layer carbon fiber composite.
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
                    <Award size={18} color="#cfa34b" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: 600, color: '#131515', margin: '0 0 3px 0' }}>
                      Finish Precision
                    </h4>
                    <p style={{ fontSize: '13px', color: '#64748b', margin: 0, lineHeight: 1.45 }}>
                      24K gold mirror plating, matte vapor deposition, tactile chemical etching, and satin frosting.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(16, 185, 129, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Cpu size={18} color="#059669" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: 600, color: '#131515', margin: '0 0 3px 0' }}>
                      Chip & Cloud Reliability
                    </h4>
                    <p style={{ fontSize: '13px', color: '#64748b', margin: 0, lineHeight: 1.45 }}>
                      Instant contactless NFC tap integration and enterprise-ready cloud synchronized credential profiles.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenQuote?.('Your corporate card at a glance')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '13px 22px',
                borderRadius: '12px',
                backgroundColor: '#131515',
                border: 'none',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                width: '100%',
                boxShadow: '0 4px 14px rgba(19, 21, 21, 0.12)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2c3033';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#131515';
              }}
            >
              <span>Explore card specifications</span>
              <ArrowRight size={15} />
            </button>
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
                    <ShieldCheck size={18} color="#cfa34b" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: 600, color: '#131515', margin: '0 0 3px 0' }}>
                      Identity Upgrade
                    </h4>
                    <p style={{ fontSize: '13px', color: '#64748b', margin: 0, lineHeight: 1.45 }}>
                      Replace throwaway badges with executive metal & hybrid smart passes that team members carry with pride.
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
                    <Smartphone size={18} color="#0283a7" />
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
