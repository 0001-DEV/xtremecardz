import React, { useEffect, useRef, useState } from 'react';

const PRODUCTS = [
  {
    id: 'metal-business-cards',
    title: 'Metal Business Cards',
    description: 'Built for professionals and brands that want their identity to make a lasting impression.',
    image: 'https://framerusercontent.com/images/wlGihJYpWqbIZpHT1ClDFDgUmk.png?width=1800&height=2200',
    stats: [
      { value: '100%', label: 'Premium finish' },
      { value: '2x', label: 'More distinctive' },
      { value: '100%', label: 'Custom made' }
    ]
  },
  {
    id: 'corporate-id',
    title: 'Corporate ID',
    description: 'Reliable, versatile cards designed for everyday staff, access, and organizational needs.',
    image: 'https://framerusercontent.com/images/o68ySUGItelO001iABjXqy2SM.png?width=1080&height=1080',
    stats: [
      { value: '100%', label: 'Brand ready' },
      { value: '4+', label: 'Card applications' },
      { value: 'Full', label: 'Custom made' }
    ]
  },
  {
    id: 'access-smart-cards',
    title: 'Access & Smart Cards',
    description: 'Technology-enabled cards that bring convenience, connectivity and modern identity experiences together.',
    image: 'https://framerusercontent.com/images/38hQqx2XpWVtVAMCUrp8MllUU.jpg?width=4000&height=2250',
    stats: [
      { value: '1-Tap', label: 'Easy interaction' },
      { value: '100%', label: 'Brand customized' },
      { value: '100%', label: 'Digital access' }
    ]
  },
  {
    id: 'accessories',
    title: 'Accessories',
    description: 'Complete your identity system with premium accessories designed for everyday use.',
    image: 'https://framerusercontent.com/images/UfQB7tO8pjiN1b0SOhPXtAtkT0.jpg?width=2000&height=2992',
    stats: [
      { value: '5+', label: 'Accessory options' },
      { value: '100%', label: 'Brand matched' },
      { value: 'Built', label: 'For daily use' }
    ]
  },
  {
    id: 'membership-special',
    title: 'Membership & Special Purpose Cards',
    description: 'echnology-enabled cards that bring convenience, connectivity and modern identity experiences together.',
    image: 'https://framerusercontent.com/images/3A40A4v52WoGH879ZyjpCtgSHI.png?width=1920&height=1080',
    stats: [
      { value: '+70%', label: 'Sleekness' },
      { value: '1 unified', label: 'Identity package' },
      { value: '7days', label: 'Delivery time' }
    ]
  }
];

function PixelCutout({ style }) {
  const pixelColor = 'rgb(243, 244, 246)';
  return (
    <div
      style={{
        height: 'min-content',
        width: 'min-content',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 0,
        padding: 0,
        position: 'absolute',
        pointerEvents: 'none',
        ...style
      }}
    >
      {/* Top wrapper */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignSelf: 'stretch',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '37px',
          width: 'auto',
          height: 'min-content'
        }}
      >
        <div style={{ width: '40px', height: '40px', backgroundColor: pixelColor, flexShrink: 0 }} />
        <div style={{ width: '80px', height: '40px', backgroundColor: pixelColor, flexShrink: 0 }} />
      </div>

      {/* Center wrapper */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 0,
          width: 'min-content',
          height: 'min-content',
          padding: '0 40px 0 0'
        }}
      >
        <div style={{ width: '40px', height: '40px', backgroundColor: pixelColor, flexShrink: 0 }} />
      </div>

      {/* Bottom wrapper */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignSelf: 'stretch',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '37px',
          width: 'auto',
          height: 'min-content'
        }}
      >
        <div style={{ width: '40px', height: '40px', backgroundColor: pixelColor, flexShrink: 0 }} />
      </div>
    </div>
  );
}

function ProductShowcaseCard({ product, onOpenQuote }) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else if (entry.boundingClientRect.top > window.innerHeight * 0.85) {
            // Reset when scrolled back above the card so scrolling down slides it in from left again
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="product-slide-card"
      style={{
        width: '100%',
        willChange: 'transform, opacity',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0px)' : 'translateX(-150px)',
        transition: 'opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1), transform 0.85s cubic-bezier(0.22, 1, 0.36, 1)'
      }}
    >
      <div
        onClick={() => onOpenQuote && onOpenQuote(`Product Inquiry: ${product.title}`)}
        className="product-image-wrapper"
        style={{
          position: 'relative',
          width: '100%',
          height: '780px',
          overflow: 'clip',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          cursor: 'pointer',
          backgroundColor: '#131515'
        }}
      >
        {/* Background Image Slide */}
        <div
          className="product-image-bg"
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            decoding="async"
            loading="lazy"
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          />
        </div>

        {/* Top-Left Pixel Cutout */}
        <PixelCutout className="pixel-cutout-tl" style={{ top: 0, left: 0 }} />

        {/* Top-Right Pixel Cutout (Rotated 90deg) */}
        <PixelCutout
          className="pixel-cutout-tr"
          style={{
            top: '18px',
            right: '-19px',
            opacity: 0.9,
            transform: 'rotate(90deg)'
          }}
        />

        {/* Bottom-Left Overlay Box (Framer .framer-1nkrtgz) */}
        <div
          className="product-info-overlay"
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '595px',
            width: '100%',
            height: 'min-content',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            backdropFilter: 'blur(80px)',
            WebkitBackdropFilter: 'blur(80px)',
            background: 'linear-gradient(180deg, rgb(26, 26, 26) 0%, rgba(26, 26, 26, 0.84) 99.5%)',
            borderRight: '1px solid rgba(255, 255, 255, 0.3)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.3)'
          }}
        >
          {/* Top wrapper: Title + Description */}
          <div
            className="product-info-top"
            style={{
              width: '100%',
              padding: '40px 32px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '4px',
              borderTop: '1px solid rgba(255, 255, 255, 0.3)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.3)'
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(30px, 3.4vw, 48px)',
                fontWeight: 500,
                letterSpacing: '-0.03em',
                lineHeight: '1.25',
                color: 'rgb(243, 244, 246)',
                margin: 0,
                textAlign: 'left'
              }}
            >
              {product.title}
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '24px',
                color: 'rgb(255, 255, 255)',
                margin: 0,
                textAlign: 'left'
              }}
            >
              {product.description}
            </p>
          </div>

          {/* Grid 3x: Stats */}
          <div
            className="product-stats-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(50px, 1fr))',
              width: '100%'
            }}
          >
            {product.stats.map((st, idx) => (
              <div
                key={idx}
                className="product-stat-cell"
                style={{
                  padding: '24px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '2px',
                  borderRight: '1px solid rgba(255, 255, 255, 0.3)',
                  width: '100%'
                }}
              >
                <h5
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(24px, 2.3vw, 32px)',
                    fontWeight: 500,
                    letterSpacing: '0.01em',
                    lineHeight: '40px',
                    color: 'rgb(249, 250, 251)',
                    margin: 0,
                    textAlign: 'left'
                  }}
                >
                  {st.value}
                </h5>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '20px',
                    color: 'rgb(255, 255, 255)',
                    margin: 0,
                    textAlign: 'left'
                  }}
                >
                  {st.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage({ onOpenQuote }) {
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => setHeaderVisible(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', width: '100%' }}>
      <style>{`
        .product-image-wrapper:hover .product-image-bg img {
          transform: scale(1.03);
        }

        @media (max-width: 1199px) and (min-width: 810px) {
          .product-image-wrapper {
            height: 650px !important;
          }
        }

        @media (max-width: 809px) {
          .product-image-wrapper {
            flex-direction: column !important;
            height: auto !important;
          }
          .product-image-bg {
            position: relative !important;
            width: 100% !important;
            aspect-ratio: 1.4 !important;
          }
          .product-info-overlay {
            max-width: 100% !important;
            width: 100% !important;
          }
          .product-info-top {
            padding: 28px 20px !important;
          }
          .product-stat-cell {
            padding: 16px 14px !important;
          }
        }
      `}</style>

      {/* Outer Container (max-width 1440px, 16px side padding) */}
      <div
        style={{
          maxWidth: '1440px',
          width: '100%',
          margin: '0 auto',
          padding: '0 16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* Main wrapper with subtle left/right borders matching Framer .framer-1j95uqq */}
        <div
          style={{
            width: '100%',
            borderLeft: '1px solid rgba(3, 7, 18, 0.1)',
            borderRight: '1px solid rgba(3, 7, 18, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          {/* Header Text Wrapper (.framer-10srk) */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: '43px',
              width: '100%',
              padding: '241px 0 60px'
            }}
          >
            {/* Products Pill */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid rgba(19, 21, 21, 0.05)',
                borderRadius: '100px',
                padding: '8px 20px',
                opacity: headerVisible ? 1 : 0,
                transform: headerVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease'
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: 1.3,
                  color: '#131515',
                  margin: 0,
                  textAlign: 'center'
                }}
              >
                Products
              </p>
            </div>

            {/* Card gallery Heading */}
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(38px, 4.5vw, 60px)',
                fontWeight: 500,
                lineHeight: 1.2,
                letterSpacing: '0em',
                color: '#131515',
                margin: 0,
                textAlign: 'center',
                opacity: headerVisible ? 1 : 0,
                transform: headerVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.7s ease 0.08s, transform 0.7s ease 0.08s'
              }}
            >
              Card gallery
            </h2>
          </div>

          {/* Product Cards Stack (.framer-x45g2d) */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '30px',
              width: '100%',
              padding: '96px 0',
              zIndex: 1
            }}
          >
            {PRODUCTS.map((product) => (
              <ProductShowcaseCard
                key={product.id}
                product={product}
                onOpenQuote={onOpenQuote}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
