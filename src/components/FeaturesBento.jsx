import React, { useState } from 'react';
import { Shield, Sparkles, CheckCircle2, ArrowRight, Layers, Users, Key, Award } from 'lucide-react';

const CATEGORIES = [
  { id: 'corporate', label: 'Corporate ID', icon: Shield },
  { id: 'staff', label: 'Staff IDs', icon: Users },
  { id: 'access', label: 'Access cards', icon: Key },
  { id: 'membership', label: 'Membership', icon: Award }
];

export default function FeaturesBento({ onOpenQuote }) {
  const [activeCategory, setActiveCategory] = useState('corporate');

  const hashtags = [
    '#Corporate identity cards',
    '#Staff identity cards',
    '#Membership cards',
    '#Event badges',
    '#Access cards'
  ];

  return (
    <section
      id="features"
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
            <span>Fits every brand lifestyle</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(32px, 4.5vw, 50px)',
              fontWeight: 700,
              maxWidth: '820px',
              margin: '0 auto 16px',
              lineHeight: 1.15,
              color: '#131515'
            }}
          >
            Custom corporate card built around your organisation
          </h2>

          {/* Interactive Category Selector */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              flexWrap: 'wrap',
              marginTop: '24px'
            }}
          >
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '9px 18px',
                    borderRadius: '50px',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    transition: 'all 0.25s ease',
                    backgroundColor: isActive ? '#131515' : '#ffffff',
                    color: isActive ? '#ffffff' : '#595e5e',
                    border: isActive ? '1px solid #131515' : '1px solid rgba(19, 21, 21, 0.08)',
                    boxShadow: isActive ? '0 6px 16px rgba(19, 21, 21, 0.12)' : '0 2px 6px rgba(19, 21, 21, 0.02)'
                  }}
                >
                  <Icon size={14} color={isActive ? '#cfa34b' : 'currentColor'} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bento Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '24px'
          }}
        >
          {/* Card 1: 7 Cols - Main Feature */}
          <div
            style={{
              gridColumn: 'span 12',
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              padding: '36px',
              border: '1px solid rgba(19, 21, 21, 0.08)',
              boxShadow: 'var(--shadow-card)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden'
            }}
            className="bento-card-main"
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'rgba(2, 131, 167, 0.1)',
                  color: '#0283a7',
                  padding: '4px 12px',
                  borderRadius: '50px',
                  fontSize: '12px',
                  fontWeight: 600,
                  marginBottom: '16px'
                }}
              >
                100% Consistency
              </div>

              <h3
                style={{
                  fontSize: 'clamp(22px, 2.5vw, 32px)',
                  fontWeight: 700,
                  color: '#131515',
                  lineHeight: 1.25,
                  marginBottom: '14px',
                  maxWidth: '560px'
                }}
              >
                For professionals who care about how they show up, connect, and represent their organization.
              </h3>

              <p
                style={{
                  color: '#595e5e',
                  fontSize: '15px',
                  lineHeight: 1.6,
                  maxWidth: '520px',
                  marginBottom: '24px'
                }}
              >
                Xtremecardz brings clarity to your corporate identity with clean materials, realistic personality, and prestige that adapts seamlessly to your day.
              </p>
            </div>

            {/* Hashtag Cloud */}
            <div
              style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
                marginTop: '10px'
              }}
            >
              {hashtags.map((h) => (
                <span
                  key={h}
                  style={{
                    fontSize: '12.5px',
                    fontWeight: 500,
                    color: '#686d6d',
                    backgroundColor: '#f7f6f3',
                    padding: '6px 12px',
                    borderRadius: '50px',
                    border: '1px solid rgba(19, 21, 21, 0.06)'
                  }}
                >
                  {h}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: 5 Cols - Structure & Materials */}
          <div
            style={{
              gridColumn: 'span 12',
              backgroundColor: '#131515',
              color: '#ffffff',
              borderRadius: '24px',
              padding: '36px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: 'var(--shadow-dark)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
            className="bento-card-side"
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'rgba(207, 163, 75, 0.18)',
                  color: '#cfa34b',
                  padding: '4px 12px',
                  borderRadius: '50px',
                  fontSize: '12px',
                  fontWeight: 600,
                  marginBottom: '16px'
                }}
              >
                Identify with structure
              </div>

              <h3
                style={{
                  fontSize: '26px',
                  fontWeight: 700,
                  marginBottom: '14px',
                  lineHeight: 1.2
                }}
              >
                Premium material cards that preserve your prestige.
              </h3>

              <p
                style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '14.5px',
                  lineHeight: 1.6,
                  marginBottom: '26px'
                }}
              >
                From bespoke metal cutouts to RFID integration, every card is engineered to withstand daily executive use while looking pristine.
              </p>
            </div>

            <button
              onClick={() => onOpenQuote('Features Bento')}
              className="btn-primary"
              style={{
                backgroundColor: '#ffffff',
                color: '#131515',
                padding: '12px 20px',
                fontSize: '14px',
                alignSelf: 'flex-start'
              }}
            >
              <span>Explore card finishes</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

        <style>{`
          @media (min-width: 900px) {
            .bento-card-main {
              grid-column: span 7 !important;
            }
            .bento-card-side {
              grid-column: span 5 !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
