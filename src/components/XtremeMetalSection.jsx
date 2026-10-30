import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function XtremeMetalSection({ onOpenQuote }) {
  const handleEnquiry = (e) => {
    // Navigate or open the user's Framer link
    window.open('https://xtremecrdss.framer.website/', '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="metal-cards"
      style={{
        paddingTop: '80px',
        paddingBottom: '80px',
        position: 'relative',
        backgroundColor: '#fbfbfb'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '50px',
            alignItems: 'center'
          }}
        >
          {/* Left Text Column */}
          <div>
            {/* Button with glassmorphism bg: Premium identity, elevated prestige */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 20px',
                borderRadius: '50px',
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(19, 21, 21, 0.08)',
                boxShadow: '0 4px 16px rgba(19, 21, 21, 0.04)',
                fontSize: '13px',
                fontWeight: 650,
                color: '#cfa34b',
                letterSpacing: '0.02em',
                marginBottom: '22px'
              }}
            >
              <Sparkles size={14} color="#cfa34b" />
              <span>Premium identity, elevated prestige</span>
            </div>

            {/* Xtreme Metal business cards that make a lasting impression in bold black and big font */}
            <h2
              style={{
                fontSize: 'clamp(32px, 4.4vw, 54px)',
                fontWeight: 800,
                color: '#131515',
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                marginBottom: '20px'
              }}
            >
              Xtreme Metal business cards that make a lasting impression
            </h2>

            {/* Paragraph */}
            <p
              style={{
                fontSize: 'clamp(15.5px, 1.8vw, 17px)',
                color: '#595e5e',
                lineHeight: 1.68,
                fontWeight: 450,
                marginBottom: '34px',
                maxWidth: '580px'
              }}
            >
              Xtreme metal cards are precision-engineered for unmatched durability and a sophisticated, professional feel. Define your brand with a premium access solution.
            </p>

            {/* Button with black bg: Make enquiries */}
            <a
              href="https://xtremecrdss.framer.website/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 32px',
                borderRadius: '50px',
                backgroundColor: '#131515',
                color: '#ffffff',
                fontSize: '15px',
                fontWeight: 650,
                textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(19, 21, 21, 0.2)',
                transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(19, 21, 21, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(19, 21, 21, 0.2)';
              }}
            >
              <span>Make enquiries</span>
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Right Picture Column */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {/* Ambient subtle warm glow behind picture */}
            <div
              style={{
                position: 'absolute',
                width: '80%',
                height: '80%',
                background: 'radial-gradient(circle, rgba(207, 163, 75, 0.12) 0%, transparent 70%)',
                filter: 'blur(40px)',
                pointerEvents: 'none'
              }}
            />

            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '540px',
                borderRadius: '26px',
                overflow: 'hidden',
                backgroundColor: '#ffffff',
                border: '1px solid rgba(19, 21, 21, 0.08)',
                boxShadow: '0 20px 50px rgba(19, 21, 21, 0.08)',
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
              }}
            >
              <img
                src="https://framerusercontent.com/images/oUscxluBetLnso5wtiCRMM5TpDE.png?width=1000"
                alt="Xtreme Metal Business Card"
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                  filter: 'drop-shadow(0 14px 28px rgba(19, 21, 21, 0.16))'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
