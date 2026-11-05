import { getAsset } from '../assets/assetUrl';
import React from 'react';
import { ArrowRight, Sparkles, Shield, Cpu, Award } from 'lucide-react';

export default function MetalCardsDarkSection({ onOpenQuote }) {
  return (
    <section
      className="section-dark section-padding"
      style={{
        backgroundColor: '#121414',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background radial gradient */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '10%',
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(207, 163, 75, 0.14) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none'
        }}
      ></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
            gap: '50px',
            alignItems: 'center'
          }}
        >
          {/* Left Text */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 16px',
                borderRadius: '50px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                fontSize: '13px',
                fontWeight: 600,
                color: '#cfa34b',
                marginBottom: '20px'
              }}
            >
              <Sparkles size={14} />
              <span>Premium identity, elevated prestige</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(32px, 4.5vw, 54px)',
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: '20px',
                color: '#ffffff',
                letterSpacing: '-0.03em'
              }}
            >
              Xtreme Metal business cards that make a lasting impression
            </h2>

            <p
              style={{
                fontSize: '16.5px',
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: 1.65,
                marginBottom: '32px'
              }}
            >
              Xtreme metal cards are precision-engineered for unmatched durability and a sophisticated, professional feel. Define your brand with a premium access solution that stands out in any boardroom or conference.
            </p>

            {/* Feature Bullets */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '36px' }}>
              {[
                { title: 'Solid 316L Steel', desc: 'Impervious to bending' },
                { title: 'Micro Laser Cut', desc: '0.1mm cutout accuracy' },
                { title: 'Instant Tap NFC', desc: 'No mobile app required' },
                { title: 'VIP Serialization', desc: 'Unique member IDs' }
              ].map((f, i) => (
                <div key={i} style={{ borderLeft: '2px solid #cfa34b', paddingLeft: '12px' }}>
                  <div style={{ fontSize: '14.5px', fontWeight: 700, color: '#ffffff' }}>{f.title}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)' }}>{f.desc}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={() => onOpenQuote('Metal Business Cards Dark Section')}
                className="btn-primary"
                style={{
                  backgroundColor: '#ffffff',
                  color: '#131515',
                  padding: '14px 28px'
                }}
              >
                <span>Make enquiries</span>
              </button>

              <button
                onClick={() => onOpenQuote('Request Sample Kit')}
                style={{
                  padding: '14px 24px',
                  borderRadius: '50px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  fontSize: '14.5px',
                  fontWeight: 600,
                  transition: 'all 0.2s ease'
                }}
              >
                Request sample kit
              </button>
            </div>
          </div>

          {/* Right Imagery Showcase */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div
              style={{
                width: '100%',
                maxHeight: '440px',
                borderRadius: '24px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '30px',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img
                src={getAsset('card-metal-dark-preview.png')}
                alt="Xtreme Metal Card"
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.8))'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
