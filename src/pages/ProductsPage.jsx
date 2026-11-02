import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

const PRODUCTS = [
  {
    id: 'metal-business-cards',
    category: 'Metal',
    title: 'Metal Business Cards',
    description: 'Built for professionals and brands that want their identity to make a lasting impression.',
    image: 'https://framerusercontent.com/images/wlGihJYpWqbIZpHT1ClDFDgUmk.png?width=1800&height=2200',
    stats: [
      { value: '100%', label: 'Premium finish' },
      { value: '2x', label: 'More distinctive' },
      { value: '100%', label: 'Custom made' }
    ],
    features: ['0.8mm Stainless Steel / Brass', 'Precision Laser & Acid Etch', 'NFC Microchip Integration Available']
  },
  {
    id: 'corporate-id',
    category: 'Corporate',
    title: 'Corporate ID',
    description: 'Reliable, versatile cards designed for everyday staff, access, and organizational needs.',
    image: 'https://framerusercontent.com/images/o68ySUGItelO001iABjXqy2SM.png?width=1080&height=1080',
    stats: [
      { value: '100%', label: 'Brand ready' },
      { value: '4+', label: 'Card applications' },
      { value: 'Full', label: 'Custom made' }
    ],
    features: ['High-definition Sublimation / UV', 'RFID / Proximity Inlay Ready', 'Security Hologram & Lamination']
  },
  {
    id: 'access-smart-cards',
    category: 'Smart Cards',
    title: 'Access & Smart Cards',
    description: 'Technology-enabled cards that bring convenience, connectivity and modern identity experiences together.',
    image: 'https://framerusercontent.com/images/38hQqx2XpWVtVAMCUrp8MllUU.jpg?width=4000&height=2250',
    stats: [
      { value: '1-Tap', label: 'Easy interaction' },
      { value: '100%', label: 'Brand customized' },
      { value: '100%', label: 'Digital access' }
    ],
    features: ['NTAG216 High Speed NFC', 'Multi-frequency Door Access', 'Instant Contact Sharing & Cloud Portal']
  },
  {
    id: 'accessories',
    category: 'Accessories',
    title: 'Accessories',
    description: 'Complete your identity system with premium accessories designed for everyday use.',
    image: 'https://framerusercontent.com/images/UfQB7tO8pjiN1b0SOhPXtAtkT0.jpg?width=2000&height=2992',
    stats: [
      { value: '5+', label: 'Accessory options' },
      { value: '100%', label: 'Brand matched' },
      { value: 'Built', label: 'For daily use' }
    ],
    features: ['Braided Silk Lanyards with Breakaways', 'Magnetic & Retractable Badges', 'Aluminum / Leather Card Cases']
  },
  {
    id: 'membership-special',
    category: 'Membership',
    title: 'Membership & Special Purpose Cards',
    description: 'Technology-enabled cards that bring convenience, connectivity and modern identity experiences together.',
    image: 'https://framerusercontent.com/images/3A40A4v52WoGH879ZyjpCtgSHI.png?width=1920&height=1080',
    stats: [
      { value: '+70%', label: 'Sleekness' },
      { value: '1 unified', label: 'Identity package' },
      { value: '7days', label: 'Delivery time' }
    ],
    features: ['VIP & Loyalty Program Encoding', 'Frosted & Matte Polymer Finishes', 'Serialized Gold / Silver Stamping']
  }
];

const CATEGORIES = ['All Products', 'Metal', 'Corporate', 'Smart Cards', 'Accessories', 'Membership'];

export default function ProductsPage({ onOpenQuote }) {
  const [selectedCategory, setSelectedCategory] = useState('All Products');

  const filteredProducts = selectedCategory === 'All Products'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingTop: '150px', paddingBottom: '90px' }}>
      <div className="container" style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Header Block matching Framer Products */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          {/* Tagline Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(19, 21, 21, 0.04)',
              border: '1px solid rgba(19, 21, 21, 0.08)',
              borderRadius: '9999px',
              padding: '6px 18px',
              marginBottom: '16px'
            }}
          >
            <Sparkles size={14} color="#cfa34b" />
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '13.5px',
                fontWeight: 600,
                color: '#131515',
                letterSpacing: '-0.01em'
              }}
            >
              Products
            </span>
          </div>

          {/* Main Title: Card gallery */}
          <h1
            style={{
              fontSize: 'clamp(38px, 5.5vw, 68px)',
              fontWeight: 700,
              fontFamily: 'var(--font-heading)',
              color: '#131515',
              letterSpacing: '-0.03em',
              lineHeight: 1.08,
              margin: '0 auto 18px'
            }}
          >
            Card gallery
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(16px, 1.8vw, 18px)',
              color: '#595e5e',
              maxWidth: '620px',
              margin: '0 auto 36px',
              lineHeight: 1.6
            }}
          >
            Explore our collection of statement physical and smart identity solutions built to match your brand's prestige.
          </p>

          {/* Filter Tabs */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '8px',
              backgroundColor: 'rgba(19, 21, 21, 0.03)',
              padding: '6px',
              borderRadius: '50px',
              border: '1px solid rgba(19, 21, 21, 0.06)'
            }}
          >
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '50px',
                    fontSize: '14px',
                    fontWeight: 500,
                    fontFamily: 'var(--font-heading)',
                    border: 'none',
                    cursor: 'pointer',
                    backgroundColor: active ? '#131515' : 'transparent',
                    color: active ? '#ffffff' : '#595e5e',
                    boxShadow: active ? '0 4px 14px rgba(19, 21, 21, 0.15)' : 'none',
                    transition: 'all 0.22s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!active) e.currentTarget.style.color = '#131515';
                  }}
                  onMouseLeave={(e) => {
                    if (!active) e.currentTarget.style.color = '#595e5e';
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Showcase Cards Stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
          {filteredProducts.map((product, idx) => {
            return (
              <div
                key={product.id}
                style={{
                  position: 'relative',
                  borderRadius: '32px',
                  overflow: 'hidden',
                  backgroundColor: '#161819',
                  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.25), 0 2px 6px rgba(0, 0, 0, 0.15)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Massive Showcase Image Container (matching Framer height 640px) */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: 'clamp(360px, 48vw, 640px)',
                    backgroundColor: '#0d0e10',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.025)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />

                  {/* Gradient vignette overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(22, 24, 25, 0.95) 0%, rgba(22, 24, 25, 0.35) 40%, rgba(0, 0, 0, 0.1) 100%)',
                      pointerEvents: 'none'
                    }}
                  />

                  {/* Category Pill on top left */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '24px',
                      left: '24px',
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255, 255, 255, 0.18)',
                      padding: '6px 16px',
                      borderRadius: '50px',
                      color: '#ffffff',
                      fontSize: '13px',
                      fontWeight: 600,
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase',
                      zIndex: 2
                    }}
                  >
                    {product.category}
                  </div>
                </div>

                {/* Bottom Information & 3-Column Stats Grid (Framer .framer-16fytys & .framer-gbil9j) */}
                <div
                  style={{
                    backgroundColor: 'rgba(22, 24, 25, 0.98)',
                    backdropFilter: 'blur(40px)',
                    WebkitBackdropFilter: 'blur(40px)',
                    borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                    padding: 'clamp(24px, 3.5vw, 42px)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '28px'
                  }}
                >
                  {/* Top Wrapper: Title, Description, and CTA */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '20px'
                    }}
                  >
                    <div style={{ maxWidth: '780px' }}>
                      <h2
                        style={{
                          fontSize: 'clamp(28px, 3.6vw, 44px)',
                          fontWeight: 600,
                          fontFamily: 'var(--font-heading)',
                          color: '#f3f4f6',
                          letterSpacing: '-0.025em',
                          lineHeight: 1.15,
                          margin: '0 0 10px 0'
                        }}
                      >
                        {product.title}
                      </h2>
                      <p
                        style={{
                          fontSize: 'clamp(15px, 1.6vw, 17px)',
                          color: 'rgba(255, 255, 255, 0.78)',
                          lineHeight: 1.55,
                          margin: 0
                        }}
                      >
                        {product.description}
                      </p>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => onOpenQuote(`Product Inquiry: ${product.title}`)}
                      style={{
                        padding: '14px 28px',
                        backgroundColor: '#ffffff',
                        color: '#131515',
                        borderRadius: '50px',
                        fontWeight: 600,
                        fontSize: '15px',
                        fontFamily: 'var(--font-heading)',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
                        transition: 'all 0.25s ease',
                        flexShrink: 0
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#f1efe9';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#ffffff';
                        e.currentTarget.style.transform = 'none';
                      }}
                    >
                      <span>Request a quote</span>
                      <ArrowUpRight size={16} />
                    </button>
                  </div>

                  {/* 3-Column Stats Grid (.framer-gbil9j) */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                      gap: '0',
                      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                      padding: '20px 0'
                    }}
                  >
                    {product.stats.map((st, i) => (
                      <div
                        key={i}
                        style={{
                          padding: '12px 20px',
                          borderRight: i < product.stats.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '4px'
                        }}
                      >
                        <span
                          style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'clamp(26px, 2.5vw, 34px)',
                            fontWeight: 600,
                            color: '#ffffff',
                            lineHeight: 1.1
                          }}
                        >
                          {st.value}
                        </span>
                        <span
                          style={{
                            fontSize: '13.5px',
                            color: 'rgba(255, 255, 255, 0.65)',
                            fontWeight: 400
                          }}
                        >
                          {st.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Key Highlights list */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '16px 24px'
                    }}
                  >
                    {product.features.map((feat, fi) => (
                      <div
                        key={fi}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          color: 'rgba(255, 255, 255, 0.75)',
                          fontSize: '14px'
                        }}
                      >
                        <CheckCircle2 size={15} color="#cfa34b" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div
          style={{
            marginTop: '80px',
            backgroundColor: '#ffffff',
            borderRadius: '28px',
            padding: ' clamp(36px, 5vw, 60px)',
            textAlign: 'center',
            border: '1px solid rgba(19, 21, 21, 0.08)',
            boxShadow: 'var(--shadow-card)'
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(26px, 3.5vw, 40px)',
              fontWeight: 700,
              color: '#131515',
              letterSpacing: '-0.025em',
              marginBottom: '14px'
            }}
          >
            Need a completely custom production run?
          </h3>
          <p
            style={{
              fontSize: '16.5px',
              color: '#595e5e',
              maxWidth: '640px',
              margin: '0 auto 30px',
              lineHeight: 1.6
            }}
          >
            We consult with enterprise teams, luxury hospitality, and private clubs to create bespoke cards with specialized materials and engineering.
          </p>
          <button
            onClick={() => onOpenQuote('Products Bottom CTA')}
            className="btn-primary"
            style={{ padding: '15px 36px', fontSize: '15.5px' }}
          >
            <span>Consult our design team</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
}
