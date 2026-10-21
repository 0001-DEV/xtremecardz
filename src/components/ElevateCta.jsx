import React from 'react';
import { ArrowRight, QrCode, Sparkles, Smartphone } from 'lucide-react';

export default function ElevateCta({ onOpenQuote }) {
  return (
    <section
      style={{
        paddingTop: '60px',
        paddingBottom: '100px',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          style={{
            backgroundColor: '#131515',
            color: '#ffffff',
            borderRadius: '32px',
            padding: ' clamp(36px, 6vw, 70px) clamp(24px, 5vw, 60px)',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 30px 70px -15px rgba(19, 21, 21, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.12)'
          }}
        >
          {/* Ambient Gold Glow Background */}
          <div
            style={{
              position: 'absolute',
              top: '-50%',
              right: '-10%',
              width: '600px',
              height: '600px',
              background: 'radial-gradient(circle, rgba(207, 163, 75, 0.18) 0%, transparent 65%)',
              filter: 'blur(50px)',
              pointerEvents: 'none'
            }}
          ></div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px',
              alignItems: 'center',
              position: 'relative',
              zIndex: 2
            }}
          >
            {/* Left Content */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 16px',
                  borderRadius: '50px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#cfa34b',
                  marginBottom: '20px'
                }}
              >
                <Sparkles size={14} />
                <span>Ready When You Are</span>
              </div>

              <h2
                style={{
                  fontSize: 'clamp(32px, 4.5vw, 54px)',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  color: '#ffffff',
                  marginBottom: '18px',
                  letterSpacing: '-0.03em'
                }}
              >
                Elevate Your Brand's First Impression
              </h2>

              <p
                style={{
                  fontSize: '16.5px',
                  color: 'rgba(255, 255, 255, 0.75)',
                  lineHeight: 1.6,
                  maxWidth: '520px',
                  marginBottom: '32px'
                }}
              >
                Upgrade to premium metal business cards. Create lasting connection effortlessly with cards designed around your organization.
              </p>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => onOpenQuote('Elevate CTA Banner')}
                  className="btn-primary"
                  style={{
                    backgroundColor: '#ffffff',
                    color: '#131515',
                    padding: '14px 28px',
                    fontSize: '15px'
                  }}
                >
                  <span>Request a quote</span>
                  <ArrowRight size={16} />
                </button>

                <button
                  onClick={() => {
                    const el = document.querySelector('#hero');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    padding: '14px 24px',
                    borderRadius: '50px',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    color: '#ffffff',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    fontSize: '15px',
                    fontWeight: 600,
                    transition: 'all 0.2s ease',
                    cursor: 'pointer'
                  }}
                >
                  View card gallery
                </button>
              </div>
            </div>

            {/* Right QR Code Quick Connect Box */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '24px',
                  padding: '30px',
                  textAlign: 'center',
                  maxWidth: '300px',
                  width: '100%',
                  boxShadow: '0 20px 45px rgba(0, 0, 0, 0.4)'
                }}
              >
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    padding: '18px',
                    margin: '0 auto 18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '140px',
                    height: '140px',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <QrCode size={104} color="#131515" />
                </div>

                <div style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                  Get Your Custom Quote Instantly
                </div>

                <p style={{ fontSize: '12.5px', color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.4, marginBottom: '16px' }}>
                  Scan to chat directly with an Xtreme concierge on your phone
                </p>

                <a
                  href="https://wa.me/?text=Hello%20Xtreme%20cards"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '12.5px',
                    fontWeight: 600,
                    color: '#cfa34b',
                    padding: '6px 14px',
                    borderRadius: '50px',
                    backgroundColor: 'rgba(207, 163, 75, 0.12)',
                    border: '1px solid rgba(207, 163, 75, 0.25)'
                  }}
                >
                  <Smartphone size={13} />
                  <span>Instant Mobile Connect</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
