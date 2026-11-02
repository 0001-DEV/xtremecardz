import React from 'react';
import { Star } from 'lucide-react';
import cloudImg from '../assets/cloud.png';

export default function Organizations({ onOpenQuote }) {
  return (
    <section
      id="products"
      style={{
        paddingTop: '60px',
        paddingBottom: '0px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        {/* Rating Pill Badge with only a star before it */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#ffffff',
            padding: '7px 18px',
            borderRadius: '50px',
            border: '1px solid rgba(19, 21, 21, 0.08)',
            boxShadow: '0 4px 12px rgba(19, 21, 21, 0.04)',
            marginBottom: '22px'
          }}
        >
          <Star size={14} fill="#ff9803" color="#ff9803" />
          <span style={{ fontSize: '13.5px', fontWeight: 600, color: '#131515', fontFamily: 'var(--font-heading)' }}>
            Patronized and used by top organisations around the world.
          </span>
        </div>

        {/* Headline */}
        <h2
          style={{
            fontSize: 'clamp(28px, 3.8vw, 46px)',
            fontWeight: 700,
            maxWidth: '860px',
            margin: '0 auto 30px',
            lineHeight: 1.25,
            color: '#131515',
            letterSpacing: '-0.03em'
          }}
        >
          Stay consistent with a corporate card system that fits into real life. Simple cards, clear identity, and gentle nudges help you build prestige that lasts.
        </h2>

        {/* Action Buttons: Get a quote in black bg and Make enquiries in glassmorphism transparent button */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            flexWrap: 'wrap'
          }}
        >
          <button
            onClick={() => onOpenQuote('Get a quote')}
            style={{
              padding: '13px 28px',
              fontSize: '15px',
              fontWeight: 600,
              backgroundColor: '#000000',
              color: '#ffffff',
              borderRadius: '50px',
              border: '1px solid #000000',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              display: 'inline-flex',
              alignItems: 'center',
              fontFamily: 'var(--font-heading)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.2)';
            }}
          >
            <span>Get a quote</span>
          </button>

          <button
            onClick={() => onOpenQuote('Make enquiries')}
            style={{
              padding: '13px 28px',
              fontSize: '15px',
              fontWeight: 600,
              backgroundColor: 'rgba(255, 255, 255, 0.75)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              color: '#131515',
              borderRadius: '50px',
              border: '1px solid rgba(19, 21, 21, 0.15)',
              boxShadow: '0 4px 16px rgba(19, 21, 21, 0.05)',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              display: 'inline-flex',
              alignItems: 'center',
              fontFamily: 'var(--font-heading)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.borderColor = 'rgba(19, 21, 21, 0.3)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(19, 21, 21, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.75)';
              e.currentTarget.style.borderColor = 'rgba(19, 21, 21, 0.15)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(19, 21, 21, 0.05)';
            }}
          >
            <span>Make enquiries</span>
          </button>
        </div>
      </div>

      {/* Full Section Width Cloudscape using the image named cloud */}
      <div
        className="cloud-full-width-section"
        style={{
          position: 'relative',
          width: '100%',
          height: 'clamp(260px, 32vw, 420px)',
          marginTop: '36px',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          overflow: 'hidden',
          pointerEvents: 'none',
          userSelect: 'none'
        }}
      >
        <img
          src={cloudImg}
          alt="Atmospheric Cloud Horizon"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block'
          }}
        />

        {/* Seamless bottom transition to white page background */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '40px',
            background: 'linear-gradient(to bottom, transparent, #ffffff)',
            pointerEvents: 'none'
          }}
        />
      </div>
    </section>
  );
}
