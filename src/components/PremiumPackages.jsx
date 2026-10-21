import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';

const PACKAGES = [
  {
    id: 1,
    title: 'Executive Gold Suite',
    tag: 'Prestige 24K',
    desc: 'Mirror gold plated stainless steel with custom cutouts, laser engraving, and serialized member numbering.',
    image: 'https://framerusercontent.com/images/1ilKe6L6KbWv5xrI6p4uunW2Es.png?width=1200',
    specs: '0.8mm Stainless Steel • 24K Gold • Deep Acid Etch'
  },
  {
    id: 2,
    title: 'Stealth Gunmetal NFC',
    tag: 'Tactical Luxe',
    desc: 'Smoky brushed gunmetal finish with embedded high-capacity NTAG216 contactless microchip.',
    image: 'https://framerusercontent.com/images/yyE2pUgUrjBeDKRRIF0gWhZRuhM.jpg?width=1200',
    specs: '0.8mm Brushed Metal • Contactless NFC • Anti-Glare'
  },
  {
    id: 3,
    title: 'Du-Plex Classic Lustre',
    tag: 'Corporate Standard',
    desc: 'Dual-ply premium composite plastic with spot UV, foil stamping, and magnetic stripe or NFC inlay.',
    image: 'https://framerusercontent.com/images/kmAong4xy6gvqhgzcssHKUFJnmA.jpg?width=1200',
    specs: '0.76mm PVC Composite • Metallic Foil • Gloss Edge'
  },
  {
    id: 4,
    title: 'Frosted VIP Member Pass',
    tag: 'Club Series',
    desc: 'Translucent frosted matte polymer with raised UV gloss accents and holographic security verification.',
    image: 'https://framerusercontent.com/images/LuRk2mi9PkL9qpq8u7aAhmN27dM.png?width=1200',
    specs: 'Translucent Matte • Spot Raised UV • Barcode Ready'
  }
];

export default function PremiumPackages({ onOpenQuote }) {
  return (
    <section
      style={{
        paddingTop: '80px',
        paddingBottom: '80px',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Header Block */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
            alignItems: 'flex-end',
            marginBottom: '40px'
          }}
        >
          <div>
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
                marginBottom: '14px'
              }}
            >
              <Sparkles size={14} />
              <span>Tailored Craftsmanship</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(32px, 4.2vw, 48px)',
                fontWeight: 700,
                color: '#131515',
                lineHeight: 1.15
              }}
            >
              Premium Packages
            </h2>
          </div>

          <div>
            <p
              style={{
                fontSize: '15.5px',
                color: '#595e5e',
                lineHeight: 1.6,
                marginBottom: '10px'
              }}
            >
              We believe a card should be more than something you hand over or wear. It should be thoughtfully designed, beautifully finished, and made to stand apart. From premium materials and crisp printing to refined finishes and personalised details, our card products bring together design and craftsmanship to create something worth noticing.
            </p>
            <p
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#131515'
              }}
            >
              *Beautifully designed. Smartly connected. Built to represent you.
            </p>
          </div>
        </div>

        {/* Swiper Slider */}
        <div style={{ position: 'relative' }}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            style={{ paddingBottom: '48px' }}
          >
            {PACKAGES.map((pkg) => (
              <SwiperSlide key={pkg.id}>
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '1px solid rgba(19, 21, 21, 0.08)',
                    boxShadow: 'var(--shadow-card)',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                  }}
                >
                  <div
                    style={{
                      height: '240px',
                      backgroundColor: '#131515',
                      position: 'relative',
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '20px'
                    }}
                  >
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      style={{
                        maxHeight: '100%',
                        maxWidth: '100%',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 14px 25px rgba(0,0,0,0.5))'
                      }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        top: '14px',
                        left: '14px',
                        backgroundColor: 'rgba(255, 255, 255, 0.12)',
                        backdropFilter: 'blur(8px)',
                        padding: '4px 12px',
                        borderRadius: '50px',
                        color: '#ffffff',
                        fontSize: '11.5px',
                        fontWeight: 600,
                        border: '1px solid rgba(255, 255, 255, 0.15)'
                      }}
                    >
                      {pkg.tag}
                    </span>
                  </div>

                  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                    <div>
                      <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#131515', marginBottom: '8px' }}>
                        {pkg.title}
                      </h3>
                      <p style={{ fontSize: '14px', color: '#595e5e', lineHeight: 1.55, marginBottom: '16px' }}>
                        {pkg.desc}
                      </p>
                    </div>

                    <div>
                      <div
                        style={{
                          fontSize: '12px',
                          color: '#0283a7',
                          fontWeight: 600,
                          backgroundColor: 'rgba(2, 131, 167, 0.08)',
                          padding: '6px 12px',
                          borderRadius: '8px',
                          marginBottom: '16px'
                        }}
                      >
                        {pkg.specs}
                      </div>

                      <button
                        onClick={() => onOpenQuote(`Package: ${pkg.title}`)}
                        className="btn-primary"
                        style={{
                          width: '100%',
                          padding: '11px',
                          fontSize: '13.5px'
                        }}
                      >
                        <span>Choose this style</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
