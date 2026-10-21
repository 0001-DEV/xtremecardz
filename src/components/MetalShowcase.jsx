import React, { useState } from 'react';
import { ArrowRight, Sparkles, Check, Shield } from 'lucide-react';
import GtAiAssistant from './GtAiAssistant';

const METAL_CARDS = [
  {
    id: 'gold',
    name: 'Gold metal card',
    subtitle: 'Business card',
    tag: 'Prestige Tier',
    desc: '24K mirror-polished gold plated stainless steel card. Built to make every handshake unforgettable.',
    image: 'https://framerusercontent.com/images/WRAp8VzH00hxe4XxQqAqA2UuJ0.jpg?width=1200',
    features: ['Real 24K gold electroplated finish', 'Precision laser cutout & etching', 'Optional NFC smart chip integrated', '0.8mm substantial heavy feel']
  },
  {
    id: 'black-matte',
    name: 'Black matte',
    subtitle: 'Metal VIP card',
    tag: 'Stealth Series',
    desc: 'Deep anodized matte black metal with tactical anti-fingerprint coating. Understated luxury for modern leaders.',
    image: 'https://framerusercontent.com/images/SBijkNBC3TclRbWyps5E1TZAD4.png?width=1200',
    features: ['Scratch-resistant matte coat', 'Sleek silver or gold edge contrast', 'Custom barcode / QR laser etching', 'Available in 0.5mm & 0.8mm']
  },
  {
    id: 'gun-metal',
    name: 'Gun metal card',
    subtitle: 'Executive business card',
    tag: 'Industrial Craft',
    desc: 'Brushed titanium gunmetal with dark smoky luster. Engineered for unmatched durability and executive distinction.',
    image: 'https://framerusercontent.com/images/m23rWmTC1t117pl0p0yuKgkA2vE.png?width=1200',
    features: ['Brushed directional grain finish', 'Acid-etched tactile typography', 'RFID & NFC dual-frequency ready', 'Corrosion-proof 316L steel']
  },
  {
    id: 'classic-metal',
    name: 'Metal VIP card',
    subtitle: 'Membership pass',
    tag: 'Elite Access',
    desc: 'Bespoke club & membership card featuring dual-tone cutouts and digital authentication.',
    image: 'https://framerusercontent.com/images/noNpD2fR8Da0MQ0ehkSf8BFajA.png?width=1200',
    features: ['Numbered serialized cards', 'Holographic security strip option', 'Digital access control integration', 'Custom luxury presentation sleeve']
  }
];

export default function MetalShowcase({ onOpenQuote }) {
  const [selectedCard, setSelectedCard] = useState(METAL_CARDS[0]);

  return (
    <section
      style={{
        paddingTop: '60px',
        paddingBottom: '80px',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
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
            <span>Turn every introduction into an opportunity</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(32px, 4.5vw, 52px)',
              fontWeight: 700,
              maxWidth: '850px',
              margin: '0 auto 16px',
              lineHeight: 1.12,
              color: '#131515'
            }}
          >
            Stand out, stay memorable, and leave a lasting impression
          </h2>

          <p
            style={{
              fontSize: '16.5px',
              color: '#595e5e',
              maxWidth: '620px',
              margin: '0 auto',
              lineHeight: 1.6
            }}
          >
            Xtreme metal business cards are engineered from solid stainless steel to communicate confidence before you even say a word.
          </p>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '36px'
          }}
        >
          {METAL_CARDS.map((card) => {
            const isSelected = selectedCard.id === card.id;
            return (
              <button
                key={card.id}
                onClick={() => setSelectedCard(card)}
                style={{
                  padding: '10px 22px',
                  borderRadius: '50px',
                  fontSize: '14px',
                  fontWeight: 600,
                  transition: 'all 0.25s ease',
                  backgroundColor: isSelected ? '#131515' : '#ffffff',
                  color: isSelected ? '#ffffff' : '#595e5e',
                  border: isSelected ? '1px solid #131515' : '1px solid rgba(19, 21, 21, 0.08)',
                  boxShadow: isSelected ? '0 6px 18px rgba(19, 21, 21, 0.15)' : '0 2px 6px rgba(19, 21, 21, 0.02)'
                }}
              >
                {card.name}
              </button>
            );
          })}
        </div>

        {/* 2-Column Showcase Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
            alignItems: 'center',
            marginBottom: '60px'
          }}
        >
          {/* Card Preview Graphic */}
          <div
            style={{
              backgroundColor: '#131515',
              borderRadius: '24px',
              padding: '24px',
              boxShadow: '0 20px 50px -10px rgba(19, 21, 21, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '380px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {/* Subtle glow backdrop */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                height: '80%',
                background: 'radial-gradient(circle, rgba(207, 163, 75, 0.2) 0%, transparent 70%)',
                filter: 'blur(30px)',
                pointerEvents: 'none'
              }}
            ></div>

            <img
              src={selectedCard.image}
              alt={selectedCard.name}
              style={{
                width: '100%',
                maxHeight: '340px',
                objectFit: 'contain',
                borderRadius: '16px',
                position: 'relative',
                zIndex: 2,
                transition: 'transform 0.4s ease',
                filter: 'drop-shadow(0 18px 30px rgba(0, 0, 0, 0.6))'
              }}
            />

            <div
              style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                zIndex: 3,
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(10px)',
                padding: '4px 12px',
                borderRadius: '50px',
                color: '#ffffff',
                fontSize: '12px',
                fontWeight: 600,
                border: '1px solid rgba(255, 255, 255, 0.15)'
              }}
            >
              {selectedCard.tag}
            </div>
          </div>

          {/* Details Column */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              padding: '36px',
              border: '1px solid rgba(19, 21, 21, 0.08)',
              boxShadow: 'var(--shadow-card)'
            }}
          >
            <div
              style={{
                display: 'inline-block',
                fontSize: '13px',
                fontWeight: 600,
                color: '#cfa34b',
                marginBottom: '6px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              {selectedCard.subtitle}
            </div>

            <h3
              style={{
                fontSize: '28px',
                fontWeight: 700,
                color: '#131515',
                marginBottom: '14px'
              }}
            >
              {selectedCard.name}
            </h3>

            <p
              style={{
                fontSize: '15.5px',
                color: '#595e5e',
                lineHeight: 1.6,
                marginBottom: '24px'
              }}
            >
              {selectedCard.desc}
            </p>

            {/* Feature Checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
              {selectedCard.features.map((feature, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(18, 167, 10, 0.12)',
                      color: '#12a70a',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span style={{ fontSize: '14px', color: '#131515', fontWeight: 500 }}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button
                onClick={() => onOpenQuote(`Metal Card: ${selectedCard.name}`)}
                className="btn-primary"
                style={{ padding: '12px 24px', fontSize: '14.5px' }}
              >
                <span>Order this finish</span>
                <ArrowRight size={15} />
              </button>

              <button
                onClick={() => onOpenQuote(`Sample Kit Request: ${selectedCard.name}`)}
                className="btn-secondary"
                style={{ padding: '12px 20px', fontSize: '14.5px' }}
              >
                Request physical sample
              </button>
            </div>
          </div>
        </div>

        {/* Embedded Interactive GT AI Assistant Widget */}
        <GtAiAssistant onOpenQuote={onOpenQuote} />
      </div>
    </section>
  );
}
