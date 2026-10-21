import React from 'react';
import { Star, Sparkles, Quote } from 'lucide-react';

const REVIEWS = [
  {
    quote: "The 24K gold mirror finish with laser micro-cutouts received immediate compliments at our international shareholder summit. Unrivaled distinction.",
    author: "Tariq Al-Mansoor",
    role: "Chief Strategy Officer, Global Energy",
    avatar: "https://framerusercontent.com/images/blsE8ntgNC0myl9MVfRRUmf9o.jpg?width=120"
  },
  {
    quote: "Switching our corporate executive credentials to Xtreme's smart NFC metal cards transformed how our leadership represents the organization.",
    author: "Elena Rostova",
    role: "VP Brand & Communications, Horizon Group",
    avatar: "https://framerusercontent.com/images/H7g08OdB1d2NhCmSTZz4iFHV2F4.png?width=120"
  },
  {
    quote: "The weight and brushed gunmetal luster command authority immediately. Our clients frequently comment on the craftsmanship of the card.",
    author: "Marcus Sterling",
    role: "Managing Partner, Sterling Capital",
    avatar: "https://framerusercontent.com/images/ljF2u5K5KRhABVThBcOFz5BdXKg.jpeg?width=120"
  }
];

export default function ClientShowcase({ onOpenQuote }) {
  return (
    <section
      id="metrics"
      style={{
        paddingTop: '60px',
        paddingBottom: '80px',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Header Block */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
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
              color: '#cfa34b',
              boxShadow: '0 4px 12px rgba(19, 21, 21, 0.03)',
              marginBottom: '16px'
            }}
          >
            <Sparkles size={14} />
            <span>Our Xtreme clients doing it the Xtreme way</span>
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
            Luxury corporate card design, real business impact
          </h2>

          <p
            style={{
              fontSize: '16.5px',
              color: '#595e5e',
              maxWidth: '640px',
              margin: '0 auto 24px',
              lineHeight: 1.6
            }}
          >
            How modern brands leave a lasting impression with identity solutions built for prestige.
          </p>

          {/* Social Proof Badge Cluster */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '14px',
              padding: '8px 20px',
              backgroundColor: '#ffffff',
              borderRadius: '50px',
              border: '1px solid rgba(19, 21, 21, 0.08)',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            {/* Avatars */}
            <div style={{ display: 'flex', marginLeft: '6px' }}>
              {REVIEWS.map((r, i) => (
                <img
                  key={i}
                  src={r.avatar}
                  alt={r.author}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginLeft: i > 0 ? '-10px' : '0',
                    border: '2px solid #ffffff'
                  }}
                />
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontWeight: 800, fontSize: '15px', color: '#131515' }}>+51</span>
              <span style={{ fontSize: '13px', color: '#686d6d', fontWeight: 500 }}>Countries with active clients</span>
            </div>

            <div style={{ display: 'flex', gap: '2px', color: '#ff9803' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} fill="#ff9803" />
              ))}
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}
        >
          {REVIEWS.map((rev, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                padding: '32px',
                border: '1px solid rgba(19, 21, 21, 0.08)',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
              }}
            >
              <div>
                <div style={{ color: '#cfa34b', marginBottom: '16px' }}>
                  <Quote size={28} />
                </div>
                <p
                  style={{
                    fontSize: '15.5px',
                    color: '#131515',
                    lineHeight: 1.65,
                    marginBottom: '24px',
                    fontWeight: 450
                  }}
                >
                  "{rev.quote}"
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid rgba(19, 21, 21, 0.06)', paddingTop: '16px' }}>
                <img
                  src={rev.avatar}
                  alt={rev.author}
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }}
                />
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#131515' }}>{rev.author}</h4>
                  <span style={{ fontSize: '12.5px', color: '#686d6d' }}>{rev.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
