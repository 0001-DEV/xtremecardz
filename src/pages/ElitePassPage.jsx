import React, { useState } from 'react';
import { ArrowUpRight, ShieldCheck, Sparkles, CheckCircle2, Cpu, PackageCheck } from 'lucide-react';

const ELITE_PASSES = [
  {
    id: 'gun-metal',
    title: 'Gun Metal',
    subtitle: 'Titan Chairman',
    badge: 'Flagship Aerospace Grade',
    image: '/Xtreme cardz asset/ELITE_PASS_BLACK_MATTE_2.webp',
    fallbackImage: 'https://framerusercontent.com/images/wlGihJYpWqbIZpHT1ClDFDgUmk.png?width=1800&height=2200',
    accentColor: '#131515',
    overview:
      'The Gun Metal Elite Pass was designed for organizations that prefer sophistication over spectacle. Its deep metallic tone, contemporary character, and refined finish create an identity that feels modern, professional, and effortlessly distinguished. It doesn’t compete for attention; it earns it. Whether carried in a wallet or worn on a lanyard, every detail communicates precision and purpose. Because sometimes, the strongest statement is the one made without saying a word.',
    features: [
      'Grade 5 Titanium + precious-metal detailing',
      'NFC+QR, Access.',
      'Exclusive packaging.'
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
    accentColor: '#cfa34b',
    overview:
      'The Elite Gold Pass was created for organizations that understand that true distinction is found in the details. Its rich gold finish, refined presence, and premium craftsmanship transform an everyday Business ID into something worthy of attention. It carries a sense of achievement without needing to demand it. From the first glance to the moment it rests in a wallet or hangs from a lanyard, it communicates confidence, recognition, and belonging. Because when your organization represents excellence, the identity you give your people should reflect it.',
    features: [
      '316L stainless steel, Higher finish, enhanced personalization',
      'NFC+QR, Access.',
      'Exclusive packaging.'
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
    accentColor: '#0283a7',
    overview:
      'Engineered for modern tech leaders, venture founders, and private club directors who demand uncompromising durability paired with non-reflective stealth aesthetics. Deep PVD ceramic matte coat resists fingerprints and everyday wear while transmitting NFC digital profiles in 0.1 seconds.',
    features: [
      'PVD Ceramic Stealth coating with micro-textured matte touch',
      'Contactless NFC bio-link & dynamic tap cloud directory',
      'Exclusive collector showcase packaging'
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
        backgroundColor: '#ffffff',
        color: '#131515',
        minHeight: '100vh',
        paddingTop: '130px',
        paddingBottom: '100px'
      }}
    >
      <div className="container">
        {/* Page Hero Header matching Framer */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 16px',
              borderRadius: '100px',
              backgroundColor: 'rgba(19, 21, 21, 0.05)',
              border: '1px solid rgba(19, 21, 21, 0.1)',
              fontSize: '13px',
              fontWeight: 600,
              color: '#131515',
              marginBottom: '20px'
            }}
          >
            <Sparkles size={13} color="#cfa34b" />
            <span>Elite pass</span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(38px, 5.5vw, 64px)',
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              color: '#131515',
              marginBottom: '18px'
            }}
          >
            A card made for those who belong at the top.
          </h1>

          <p
            style={{
              fontSize: 'clamp(16px, 1.8vw, 19px)',
              lineHeight: 1.6,
              color: '#494d4d',
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
              gap: '8px',
              justifyContent: 'center',
              backgroundColor: '#f7f7f7',
              padding: '6px',
              borderRadius: '50px',
              border: '1px solid rgba(19, 21, 21, 0.08)'
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
                    transition: 'all 0.25s ease',
                    backgroundColor: isSelected ? '#000000' : 'transparent',
                    color: isSelected ? '#ffffff' : '#494d4d',
                    boxShadow: isSelected ? '0 4px 14px rgba(0, 0, 0, 0.15)' : 'none'
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
            backgroundColor: '#f7f7f7',
            border: '1px solid rgba(19, 21, 21, 0.08)',
            borderRadius: '28px',
            padding: 'clamp(28px, 4vw, 56px)',
            marginBottom: '72px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.04)',
            transition: 'all 0.4s ease'
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
                  boxShadow: '0 24px 50px rgba(19, 21, 21, 0.15)',
                  border: '1px solid rgba(19, 21, 21, 0.1)'
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

                {/* Smart NFC Indicator Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    right: '16px',
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
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
                  <Cpu size={13} color="#fef08a" />
                  <span>NFC + RFID</span>
                </div>
              </div>

              {/* Caption */}
              <div style={{ marginTop: '16px', fontSize: '13px', color: '#71717a', textAlign: 'center' }}>
                Hand-weighted precision metal specimen · Weight: {activePass.specs.weight}
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
                  color: '#71717a',
                  marginBottom: '6px'
                }}
              >
                {activePass.subtitle}
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(28px, 3.2vw, 42px)',
                  fontWeight: 700,
                  color: '#131515',
                  letterSpacing: '-0.02em',
                  marginBottom: '18px'
                }}
              >
                {activePass.title}
              </h2>

              <div style={{ marginBottom: '24px' }}>
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    color: '#131515',
                    marginBottom: '8px'
                  }}
                >
                  ⚙️ Overview
                </div>
                <p
                  style={{
                    fontSize: '15.5px',
                    lineHeight: 1.75,
                    color: '#494d4d'
                  }}
                >
                  • {activePass.overview}
                </p>
              </div>

              {/* Key Features Bullet List matching Framer */}
              <div style={{ marginBottom: '32px' }}>
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    color: '#131515',
                    marginBottom: '10px'
                  }}
                >
                  🚀 Features
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {activePass.features.map((feat, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        fontSize: '15px',
                        color: '#131515'
                      }}
                    >
                      <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: '3px' }} />
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
                    backgroundColor: '#000000',
                    color: '#ffffff',
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
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.2)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.2)';
                  }}
                >
                  <span>Make enquiries</span>
                  <ArrowUpRight size={17} />
                </button>

                <button
                  onClick={() => onOpenQuote(`Elite Pass Specimen Request - ${activePass.title}`)}
                  style={{
                    backgroundColor: '#ffffff',
                    color: '#131515',
                    padding: '14px 24px',
                    borderRadius: '50px',
                    fontSize: '15px',
                    fontWeight: 500,
                    fontFamily: 'var(--font-heading)',
                    border: '1px solid rgba(19, 21, 21, 0.15)',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#000000';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(19, 21, 21, 0.15)';
                  }}
                >
                  <PackageCheck size={16} />
                  <span>Request Specimen Box</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* All Elite Models Grid */}
        <div style={{ marginTop: '60px' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '26px',
                fontWeight: 700,
                color: '#131515',
                marginBottom: '8px'
              }}
            >
              The Elite Pass Collection
            </h3>
            <p style={{ color: '#595e5e', fontSize: '15px' }}>
              Select any tier to inspect specifications and material architecture
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
                  window.scrollTo({ top: 320, behavior: 'smooth' });
                }}
                style={{
                  backgroundColor: '#f7f7f7',
                  border: activePass.id === pass.id ? '1px solid #000000' : '1px solid rgba(19, 21, 21, 0.08)',
                  borderRadius: '20px',
                  padding: '24px',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
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

                <div style={{ fontSize: '12px', fontWeight: 600, color: '#71717a', marginBottom: '4px' }}>
                  {pass.subtitle}
                </div>
                <h4 style={{ fontSize: '20px', fontWeight: 700, color: '#131515', marginBottom: '8px' }}>
                  {pass.title}
                </h4>
                <p style={{ fontSize: '13.5px', color: '#595e5e', lineHeight: 1.5, marginBottom: '16px' }}>
                  {pass.overview.slice(0, 115)}...
                </p>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '12px',
                    borderTop: '1px solid rgba(19, 21, 21, 0.08)',
                    fontSize: '13px',
                    color: '#131515',
                    fontWeight: 600
                  }}
                >
                  <span>{pass.specs.material}</span>
                  <span style={{ color: '#0283a7' }}>View Details →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
