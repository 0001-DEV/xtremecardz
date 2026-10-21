import React from 'react';
import { ArrowRight, Sparkles, Smartphone, Shield, Check, Award } from 'lucide-react';

const HIGHLIGHTS = [
  {
    tag: 'IDENTITY UPGRADE',
    title: "It's time for better Identity cards",
    desc: 'Custom design. Premium materials. Smart technology. Transform a generic plastic badge into an executive brand asset.',
    cta: 'Upgrade ID',
    primary: true
  },
  {
    tag: 'READY WHEN YOU ARE',
    title: 'Your organization deserves an identity that looks the part',
    desc: 'Standout cards delivered on schedule with rigorous quality control for team sizes from 10 to 10,000.',
    cta: 'Get started'
  },
  {
    tag: 'A BETTER FIRST IMPRESSION',
    title: 'Because your ID card is part of your brand',
    desc: 'When meeting clients, attending summits, or greeting partners, a substantial card signals prestige immediately.',
    cta: 'Learn more'
  },
  {
    tag: 'YOUR ID. NOW SMARTER',
    title: 'More than identification. A smarter way to connect',
    desc: 'Tap your card to any smartphone to share rich media, contact credentials, or verify security clearance seamlessly.',
    cta: 'Explore NFC'
  },
  {
    tag: 'FROM IDEA TO ID CARD',
    title: 'We handle the details. You get the finished identity',
    desc: 'Dedicated account managers handle digital vector drafting, laser sample proofing, batch encoding, and international courier logistics.',
    cta: 'Request consultation'
  }
];

export default function ConnectAndIdentify({ onOpenQuote }) {
  return (
    <section
      style={{
        paddingTop: '80px',
        paddingBottom: '80px',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 16px',
              borderRadius: '50px',
              backgroundColor: '#ffffff',
              border: '1px solid rgba(19, 21, 21, 0.08)',
              fontSize: '13px',
              fontWeight: 600,
              color: '#0283a7',
              boxShadow: '0 4px 12px rgba(19, 21, 21, 0.03)',
              marginBottom: '16px'
            }}
          >
            <Sparkles size={14} />
            <span>Connect & identify</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(32px, 4.2vw, 48px)',
              fontWeight: 700,
              maxWidth: '820px',
              margin: '0 auto 16px',
              lineHeight: 1.15,
              color: '#131515'
            }}
          >
            Identity, done differently.
          </h2>

          <p
            style={{
              fontSize: '16.5px',
              color: '#595e5e',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.6
            }}
          >
            Premium material cards designed to look, feel and function like your organization means business.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}
        >
          {HIGHLIGHTS.map((item, i) => (
            <div
              key={i}
              style={{
                backgroundColor: item.primary ? '#131515' : '#ffffff',
                color: item.primary ? '#ffffff' : '#131515',
                borderRadius: '24px',
                padding: '32px',
                border: item.primary ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(19, 21, 21, 0.08)',
                boxShadow: item.primary ? 'var(--shadow-dark)' : 'var(--shadow-card)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
              }}
            >
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    fontSize: '11.5px',
                    fontWeight: 700,
                    color: item.primary ? '#cfa34b' : '#0283a7',
                    letterSpacing: '0.06em',
                    marginBottom: '12px',
                    textTransform: 'uppercase'
                  }}
                >
                  {item.tag}
                </span>

                <h3
                  style={{
                    fontSize: '22px',
                    fontWeight: 700,
                    lineHeight: 1.3,
                    marginBottom: '12px',
                    color: item.primary ? '#ffffff' : '#131515'
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: '14.5px',
                    color: item.primary ? 'rgba(255, 255, 255, 0.7)' : '#595e5e',
                    lineHeight: 1.6,
                    marginBottom: '24px'
                  }}
                >
                  {item.desc}
                </p>
              </div>

              <div>
                <button
                  onClick={() => onOpenQuote(`${item.tag}: ${item.title}`)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: item.primary ? '#ffffff' : '#131515',
                    padding: '8px 0',
                    borderBottom: item.primary ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(19, 21, 21, 0.3)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span>{item.cta}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
