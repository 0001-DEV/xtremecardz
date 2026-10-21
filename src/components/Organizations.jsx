import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const ORG_LOGOS = [
  'SEPLAT ENERGY',
  'IKEJA ELECTRIC',
  'NOVA MERCHANT',
  'RAINOIL',
  'NECA',
  'SAPETRO',
  'TVC COMMUNICATIONS',
  'GUINNESS NIGERIA',
  'OPTIVA CAPITAL'
];

export default function Organizations({ onOpenQuote }) {
  return (
    <section
      id="products"
      style={{
        paddingTop: '60px',
        paddingBottom: '60px',
        textAlign: 'center',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Star Rating Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: '#ffffff',
            padding: '6px 16px',
            borderRadius: '50px',
            border: '1px solid rgba(19, 21, 21, 0.08)',
            boxShadow: '0 4px 12px rgba(19, 21, 21, 0.04)',
            marginBottom: '16px'
          }}
        >
          <div style={{ display: 'flex', gap: '3px', color: '#ff9803' }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="#ff9803" />
            ))}
          </div>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#131515' }}>
            Trusted by 500+ global brands
          </span>
        </div>

        {/* Headline */}
        <h2
          style={{
            fontSize: 'clamp(30px, 4.2vw, 48px)',
            fontWeight: 700,
            maxWidth: '820px',
            margin: '0 auto 16px',
            lineHeight: 1.15,
            color: '#131515'
          }}
        >
          Patronized and used by top organisations around the world
        </h2>

        {/* Subhead */}
        <p
          style={{
            fontSize: 'clamp(15px, 1.8vw, 17.5px)',
            color: '#595e5e',
            maxWidth: '680px',
            margin: '0 auto 30px',
            lineHeight: 1.65
          }}
        >
          Stay consistent with a corporate card system that fits into real life. Simple cards, clear identity, and gentle nudges help you build prestige that lasts.
        </p>

        {/* Get a quote button */}
        <div style={{ marginBottom: '50px' }}>
          <button
            onClick={() => onOpenQuote('Organizations Section')}
            className="btn-primary"
            style={{ padding: '13px 28px', fontSize: '15px' }}
          >
            <span>Get a quote</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Corporate Logo Pill Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '12px 18px',
            maxWidth: '960px',
            margin: '0 auto'
          }}
        >
          {ORG_LOGOS.map((org) => (
            <div
              key={org}
              style={{
                padding: '10px 20px',
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                border: '1px solid rgba(19, 21, 21, 0.08)',
                borderRadius: '50px',
                fontSize: '12.5px',
                fontWeight: 700,
                color: '#686d6d',
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.06em',
                transition: 'all 0.25s ease',
                boxShadow: '0 2px 6px rgba(19, 21, 21, 0.02)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#131515';
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.borderColor = 'rgba(19, 21, 21, 0.2)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(19, 21, 21, 0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#686d6d';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
                e.currentTarget.style.borderColor = 'rgba(19, 21, 21, 0.08)';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 2px 6px rgba(19, 21, 21, 0.02)';
              }}
            >
              {org}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
