import React, { useState } from 'react';
import { ArrowUpRight, ShieldCheck, Sparkles, CheckCircle2, Cpu, PackageCheck, Layers } from 'lucide-react';

const ELITE_PASSES = [
  {
    id: 'gun-metal',
    title: 'Gun Metal',
    subtitle: 'Titan Chairman',
    badge: 'Flagship Aerospace Grade',
    image: '/Xtreme cardz asset/ELITE_PASS_BLACK_MATTE_2.webp',
    fallbackImage: 'https://framerusercontent.com/images/wlGihJYpWqbIZpHT1ClDFDgUmk.png?width=1800&height=2200',
    colorScheme: {
      accent: '#71717a',
      gradient: 'linear-gradient(135deg, #27272a 0%, #09090b 100%)',
      glow: 'rgba(113, 113, 122, 0.25)',
      chipColor: '#d4d4d8'
    },
    overview:
      'The Gun Metal Elite Pass was designed for organizations that prefer sophistication over spectacle. Its deep metallic tone, contemporary character, and refined finish create an identity that feels modern, professional, and effortlessly distinguished. It does not compete for attention; it earns it. Whether carried in a wallet or worn on a lanyard, every detail communicates precision and purpose. Because sometimes, the strongest statement is the one made without saying a word.',
    features: [
      'Grade 5 Titanium + precious-metal detailing',
      'Dual-frequency NFC + high-density dynamic QR code access',
      'Bespoke velvet-lined presentation luxury casing with magnetic closure',
      '0.8mm ultra-dense hand-weighted tactile feel'
    ],
    specs: {
      material: 'Grade 5 Titanium Alloy',
      thickness: '0.8 mm (Solid Metal)',
      weight: '21 grams',
      tech: 'NXP NTAG216 High Speed + Proximity RFID',
      packaging: 'Signature Collector Magnetic Vault Box'
    }
  },
  {
    id: 'elite-gold',
    title: 'Elite Gold Pass',
    subtitle: 'Titan Prestige',
    badge: '24K Polished Distinction',
    image: '/Xtreme cardz asset/ELITE_PASS_GOLD_2.webp',
    fallbackImage: 'https://framerusercontent.com/images/38hQqx2XpWVtVAMCUrp8MllUU.jpg?width=4000&height=2250',
    colorScheme: {
      accent: '#cfa34b',
      gradient: 'linear-gradient(135deg, #573e16 0%, #1c150b 100%)',
      glow: 'rgba(207, 163, 75, 0.28)',
      chipColor: '#fef08a'
    },
    overview:
      'The Elite Gold Pass was created for organizations that understand that true distinction is found in the details. Its rich gold finish, refined presence, and premium craftsmanship transform an everyday Business ID into something worthy of attention. It carries a sense of achievement without needing to demand it. From the first glance to the moment it rests in a wallet or hangs from a lanyard, it communicates confidence, recognition, and belonging. Because when your organization represents excellence, the identity you give your people should reflect it.',
    features: [
      '316L Marine-grade stainless steel with 24K electroplated finish',
      'Precision chemical acid-etched monogram and mirror chamfered borders',
      'NFC + QR Access protocols with multi-gate building authorization',
      'Exclusive collector showcase packaging'
    ],
    specs: {
      material: '316L Stainless Steel + 24K Gold PVD',
      thickness: '0.8 mm (Mirror / Brushed Dual Finish)',
      weight: '22 grams',
      tech: 'Universal Tap-to-Share NFC + Encrypted Access RFID',
      packaging: 'Handcrafted Velvet Presentation Box'
    }
  },
  {
    id: 'black-matte-obsidian',
    title: 'Obsidian Matte Pass',
    subtitle: 'Titan Sovereign',
    badge: 'Stealth Executive Edition',
    image: '/Xtreme cardz asset/ELITE_PASS_BLACK_MATTE.webp',
    fallbackImage: 'https://framerusercontent.com/images/o68ySUGItelO001iABjXqy2SM.png?width=1080&height=1080',
    colorScheme: {
      accent: '#38bdf8',
      gradient: 'linear-gradient(135deg, #18181b 0%, #040404 100%)',
      glow: 'rgba(56, 189, 248, 0.2)',
      chipColor: '#38bdf8'
    },
    overview:
      'Engineered for modern tech leaders, venture founders, and private club directors who demand uncompromising durability paired with non-reflective stealth aesthetics. Deep PVD ceramic matte coat resists fingerprints and everyday wear while transmitting NFC digital profiles in 0.1 seconds.',
    features: [
      'PVD Ceramic Stealth coating with micro-textured matte touch',
      'Laser-ablated serial numbering and personalized cardholder credentials',
      'Contactless NFC bio-link & dynamic tap cloud directory',
      'Waterproof, scratch-resistant and bend-proof for lifetime utility'
    ],
    specs: {
      material: 'Tempered 304 Stainless Steel with PVD Coating',
      thickness: '0.84 mm',
      weight: '20.5 grams',
      tech: 'High-Frequency ISO/IEC 14443 Type A NFC',
      packaging: 'Minimalist Matte Obsidian Display Case'
    }
  }
];

export default function ElitePassPage({ onOpenQuote }) {
  const [activePass, setActivePass] = useState(ELITE_PASSES[0]);

  return (
    <div
      style={{
        backgroundColor: '#090a0a',
        color: '#ffffff',
        minHeight: '100vh',
        paddingTop: '130px',
        paddingBottom: '100px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Ambience Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-150px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(207, 163, 75, 0.15) 0%, rgba(2, 131, 167, 0.08) 50%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(70px)',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Page Hero Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 60px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '100px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: '#cfa34b',
              marginBottom: '20px'
            }}
          >
            <Sparkles size={14} />
            <span>Elite Pass</span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(36px, 5.5vw, 64px)',
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              marginBottom: '20px'
            }}
          >
            A card made for those who belong at the top.
          </h1>

          <p
            style={{
              fontSize: 'clamp(16px, 1.8vw, 19px)',
              lineHeight: 1.6,
              color: '#a1a1aa',
              margin: '0 auto 36px',
              maxWidth: '680px'
            }}
          >
            Handcrafted from aerospace-grade metals, laser-etched with uncompromising precision, and equipped with smart NFC access. Built for executives and distinguished organizations worldwide.
          </p>

          {/* Quick Model Selector Pills */}
          <div
            style={{
              display: 'inline-flex',
              flexWrap: 'wrap',
              gap: '10px',
              justifyContent: 'center',
              backgroundColor: 'rgba(24, 24, 27, 0.8)',
              padding: '6px',
              borderRadius: '50px',
              border: '1px solid rgba(255, 255, 255, 0.12)'
            }}
          >
            {ELITE_PASSES.map((pass) => {
              const isSelected = activePass.id === pass.id;
              return (
                <button
                  key={pass.id}
                  onClick={() => setActivePass(pass)}
                  style={{
                    padding: '10px 22px',
                    borderRadius: '40px',
                    fontSize: '14px',
                    fontWeight: 600,
                    fontFamily: 'var(--font-heading)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    backgroundColor: isSelected ? '#ffffff' : 'transparent',
                    color: isSelected ? '#000000' : '#a1a1aa',
                    boxShadow: isSelected ? '0 4px 18px rgba(0, 0, 0, 0.3)' : 'none'
                  }}
                >
                  {pass.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Spotlight Showcase of Selected Elite Pass */}
        <div
          style={{
            backgroundColor: 'rgba(18, 18, 20, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '28px',
            padding: 'clamp(28px, 4vw, 56px)',
            marginBottom: '72px',
            boxShadow: `0 24px 70px -15px ${activePass.colorScheme.glow}`,
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(32px, 5vw, 64px)',
              alignItems: 'center'
            }}
          >
            {/* Visual Card Display Area */}
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '460px',
                  aspectRatio: '1.586',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.25)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  transition: 'transform 0.4s ease'
                }}
              >
                <img
                  src={activePass.image}
                  onError={(e) => {
                    e.currentTarget.src = activePass.fallbackImage;
                  }}
                  alt={activePass.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />

                {/* Metallic Sheen Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(105deg, rgba(255,255,255,0.12) 0%, transparent 40%, rgba(255,255,255,0.06) 60%, transparent 100%)',
                    pointerEvents: 'none'
                  }}
                />

                {/* Smart NFC Indicator Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    right: '16px',
                    backgroundColor: 'rgba(0, 0, 0, 0.65)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '30px',
                    padding: '4px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '11px',
                    color: '#ffffff',
                    fontWeight: 600
                  }}
                >
                  <Cpu size={13} color={activePass.colorScheme.chipColor} />
                  <span>NFC Enabled</span>
                </div>
              </div>

              {/* Caption */}
              <div style={{ marginTop: '16px', fontSize: '13px', color: '#71717a', textAlign: 'center' }}>
                Hand-inspected aerospace metal specimen · Weight: {activePass.specs.weight}
              </div>
            </div>

            {/* Content & Specs */}
            <div>
              <div
                style={{
                  display: 'inline-block',
                  fontSize: '12px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: activePass.colorScheme.accent,
                  marginBottom: '8px'
                }}
              >
                {activePass.subtitle} · {activePass.badge}
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(28px, 3.2vw, 42px)',
                  fontWeight: 700,
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                  marginBottom: '18px'
                }}
              >
                {activePass.title}
              </h2>

              <p
                style={{
                  fontSize: '15.5px',
                  lineHeight: 1.7,
                  color: '#d4d4d8',
                  marginBottom: '28px'
                }}
              >
                {activePass.overview}
              </p>

              {/* Key Features Bullet List */}
              <div style={{ marginBottom: '32px' }}>
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: '#a1a1aa',
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Sparkles size={14} color={activePass.colorScheme.accent} />
                  <span>Distinguished Features</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {activePass.features.map((feat, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        fontSize: '14.5px',
                        color: '#f4f4f5'
                      }}
                    >
                      <CheckCircle2 size={17} color={activePass.colorScheme.accent} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
                <button
                  onClick={() => onOpenQuote(`Elite Pass: ${activePass.title} (${activePass.subtitle})`)}
                  style={{
                    backgroundColor: '#ffffff',
                    color: '#000000',
                    padding: '14px 28px',
                    borderRadius: '50px',
                    fontSize: '15px',
                    fontWeight: 600,
                    fontFamily: 'var(--font-heading)',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 8px 24px rgba(255, 255, 255, 0.2)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(255, 255, 255, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 255, 255, 0.2)';
                  }}
                >
                  <span>Make enquiries</span>
                  <ArrowUpRight size={17} />
                </button>

                <button
                  onClick={() => onOpenQuote(`Elite Pass Specimen Request - ${activePass.title}`)}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    color: '#ffffff',
                    padding: '14px 24px',
                    borderRadius: '50px',
                    fontSize: '15px',
                    fontWeight: 500,
                    fontFamily: 'var(--font-heading)',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  }}
                >
                  <PackageCheck size={16} />
                  <span>Request Specimen Box</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* All Elite Models Grid Comparison */}
        <div style={{ marginTop: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '28px',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '10px'
              }}
            >
              The Elite Pass Collection
            </h3>
            <p style={{ color: '#a1a1aa', fontSize: '15px' }}>
              Select any piece to inspect technical craftsmanship and material architecture
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px'
            }}
          >
            {ELITE_PASSES.map((pass) => (
              <div
                key={pass.id}
                onClick={() => {
                  setActivePass(pass);
                  window.scrollTo({ top: 350, behavior: 'smooth' });
                }}
                style={{
                  backgroundColor: 'rgba(24, 24, 27, 0.65)',
                  border: activePass.id === pass.id ? `1px solid ${pass.colorScheme.accent}` : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '20px',
                  padding: '24px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = pass.colorScheme.accent;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  if (activePass.id !== pass.id) {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  }
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ width: '100%', height: '170px', borderRadius: '12px', overflow: 'hidden', marginBottom: '18px' }}>
                  <img
                    src={pass.image}
                    onError={(e) => {
                      e.currentTarget.src = pass.fallbackImage;
                    }}
                    alt={pass.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                <div style={{ fontSize: '12px', fontWeight: 600, color: pass.colorScheme.accent, marginBottom: '4px' }}>
                  {pass.subtitle}
                </div>
                <h4 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                  {pass.title}
                </h4>
                <p style={{ fontSize: '13.5px', color: '#a1a1aa', lineHeight: 1.5, marginBottom: '16px' }}>
                  {pass.overview.slice(0, 115)}...
                </p>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '12px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    fontSize: '13px',
                    color: '#ffffff',
                    fontWeight: 600
                  }}
                >
                  <span>{pass.specs.material}</span>
                  <span style={{ color: pass.colorScheme.accent }}>View Details →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
