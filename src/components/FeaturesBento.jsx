import React, { useState } from 'react';
import { Shield, Sparkles, Users, Key, Award } from 'lucide-react';

const CATEGORIES = [
  {
    id: 'corporate',
    label: 'Corporate ID',
    icon: Shield,
    image: 'https://framerusercontent.com/images/38hQqx2XpWVtVAMCUrp8MllUU.jpg?width=2000'
  },
  {
    id: 'staff',
    label: 'Staff IDs',
    icon: Users,
    image: 'https://framerusercontent.com/images/wlGihJYpWqbIZpHT1ClDFDgUmk.png?width=1800'
  },
  {
    id: 'access',
    label: 'Access cards',
    icon: Key,
    image: 'https://framerusercontent.com/images/WRAp8VzH00hxe4XxQqAqA2UuJ0.jpg?width=1600'
  },
  {
    id: 'membership',
    label: 'Membership',
    icon: Award,
    image: 'https://framerusercontent.com/images/CUgTBF7cbByxZQwWFMDNfXIz3P0.jpg?width=1600'
  }
];

export default function FeaturesBento({ onOpenQuote }) {
  const [activeCategory, setActiveCategory] = useState('corporate');
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [topPillHovered, setTopPillHovered] = useState(false);

  const hashtags = [
    '#Corporate identity cards',
    '#Staff identity cards',
    '#Membership cards',
    '#Event badges',
    '#Access cards'
  ];

  const currentCategoryData = CATEGORIES.find((c) => c.id === activeCategory) || CATEGORIES[0];

  return (
    <section
      id="features"
      style={{
        paddingTop: '80px',
        paddingBottom: '80px',
        position: 'relative'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Main Container with White Background & Polka Dot Pattern */}
        <div
          style={{
            backgroundColor: '#ffffff',
            backgroundImage: 'radial-gradient(#cbd5e1 1.25px, transparent 1.25px)',
            backgroundSize: '24px 24px',
            backgroundPosition: 'center center',
            borderRadius: '28px',
            border: '1px solid rgba(19, 21, 21, 0.08)',
            boxShadow: '0 20px 48px -12px rgba(19, 21, 21, 0.08), 0 0 0 1px rgba(19, 21, 21, 0.03)',
            padding: '48px 36px',
            maxWidth: '1120px',
            margin: '0 auto',
            position: 'relative'
          }}
        >
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            {/* Pill: Fits every brand lifestyle (NOT bold: fontWeight 400) */}
            <div
              onMouseEnter={() => setTopPillHovered(true)}
              onMouseLeave={() => setTopPillHovered(false)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '8px 22px',
                borderRadius: '50px',
                backgroundColor: topPillHovered ? '#f3f4f6' : '#ffffff',
                border: '1px solid #e2e8f0',
                fontSize: '13.5px',
                fontWeight: 400,
                color: '#131515',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.04)',
                marginBottom: '16px',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
            >
              <span>Fits every brand lifestyle</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 46px)',
                fontWeight: 700,
                maxWidth: '820px',
                margin: '0 auto 20px',
                lineHeight: 1.18,
                color: '#131515'
              }}
            >
              Custom corporate card built first around your organisation
            </h2>

            {/* Interactive Category Selector: Corporate ID, Staff IDs, Access cards, Membership */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                flexWrap: 'wrap',
                marginTop: '20px'
              }}
            >
              {CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;
                const isHovered = hoveredCategory === cat.id;

                const isDark = isActive || isHovered;
                const bg = isDark ? '#3d4246' : 'rgba(255, 255, 255, 0.75)';
                const color = isDark ? '#ffffff' : '#131515';
                const iconColor = isActive ? '#cfa34b' : (isHovered ? '#ffffff' : '#4b5563');

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    onMouseEnter={() => setHoveredCategory(cat.id)}
                    onMouseLeave={() => setHoveredCategory(null)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      height: '46px',
                      padding: '0 22px',
                      borderRadius: '12px',
                      fontSize: '15px',
                      fontWeight: 600,
                      transition: 'all 0.2s ease',
                      backgroundColor: bg,
                      color: color,
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255, 255, 255, 0.4)',
                      outline: 'none',
                      boxShadow: isDark
                        ? '0 6px 18px rgba(0, 0, 0, 0.16)'
                        : '0 2px 8px rgba(19, 21, 21, 0.03)',
                      cursor: 'pointer'
                    }}
                  >
                    <Icon size={16} color={iconColor} />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Picture with Text Overlay & Bottom-Right Glassmorphic Badge */}
          <div
            style={{
              position: 'relative',
              borderRadius: '22px',
              overflow: 'hidden',
              boxShadow: '0 16px 40px -10px rgba(19, 21, 21, 0.12)',
              border: '1px solid rgba(19, 21, 21, 0.08)',
              minHeight: 'clamp(440px, 45vw, 520px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              backgroundColor: '#1a1d1e'
            }}
          >
            {/* Background Picture */}
            <img
              src={currentCategoryData.image}
              alt={currentCategoryData.label}
              key={currentCategoryData.id}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                animation: 'fadeInImage 0.45s ease forwards'
              }}
            />

            {/* Subtle Gradient Overlay for visual depth */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(19, 21, 21, 0.6) 0%, rgba(19, 21, 21, 0.15) 50%, transparent 100%)',
                pointerEvents: 'none'
              }}
            />

            {/* Combined Glassmorphism Container with Total Transparency */}
            <div
              className="picture-glass-box"
              style={{
                position: 'absolute',
                bottom: '24px',
                right: '24px',
                zIndex: 3,
                maxWidth: '460px',
                width: 'calc(100% - 48px)',
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(255, 255, 255, 0.28)',
                borderRadius: '20px',
                padding: '24px 28px',
                boxShadow: '0 12px 36px 0 rgba(0, 0, 0, 0.25), inset 0 0 0 1px rgba(255, 255, 255, 0.15)',
                textAlign: 'left'
              }}
            >
              <h3
                style={{
                  fontSize: 'clamp(15.5px, 1.8vw, 19px)',
                  fontWeight: 600,
                  color: '#ffffff',
                  lineHeight: 1.4,
                  margin: '0 0 16px 0',
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
                }}
              >
                For professionals who care about how they show up, connect, and represent their organization.
              </h3>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start'
                }}
              >
                <span
                  style={{
                    fontSize: '28px',
                    fontWeight: 800,
                    color: '#ffffff',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.45)'
                  }}
                >
                  100%
                </span>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'rgba(255, 255, 255, 0.9)',
                    marginTop: '4px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    textShadow: '0 1px 4px rgba(0, 0, 0, 0.35)'
                  }}
                >
                  Consistency
                </span>
              </div>
            </div>
          </div>

          {/* Right under picture: Text & Hashtags */}
          <div
            style={{
              marginTop: '32px',
              textAlign: 'center'
            }}
          >
            <p
              style={{
                fontSize: 'clamp(16px, 1.8vw, 19px)',
                fontWeight: 500,
                color: '#374151',
                marginBottom: '16px',
                lineHeight: 1.5
              }}
            >
              Ask for every kind of identity cards first and
            </p>

            {/* Hashtags under it */}
            <div
              style={{
                display: 'flex',
                gap: '10px',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              {hashtags.map((h) => (
                <span
                  key={h}
                  style={{
                    fontSize: '13.5px',
                    fontWeight: 500,
                    color: '#4b5563',
                    backgroundColor: '#ffffff',
                    padding: '8px 18px',
                    borderRadius: '50px',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#131515';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.borderColor = '#131515';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 14px rgba(19, 21, 21, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#ffffff';
                    e.currentTarget.style.color = '#4b5563';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
                  }}
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes fadeInImage {
            from {
              opacity: 0.4;
              transform: scale(1.03);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}</style>
      </div>
    </section>
  );
}

