import React from 'react';

export default function PremiumShowcaseBanner({ onOpenQuote }) {
  return (
    <section
      id="premium-packages-intro"
      style={{
        paddingTop: '60px',
        paddingBottom: '20px',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* The Picture Showcase Banner (Prestige 24K) */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            minHeight: 'clamp(520px, 56vw, 640px)',
            borderRadius: '28px',
            overflow: 'hidden',
            boxShadow: '0 24px 60px rgba(19, 21, 21, 0.14)',
            border: '1px solid rgba(19, 21, 21, 0.08)',
            display: 'flex',
            alignItems: 'stretch'
          }}
        >
          {/* Background Photograph: Prestige 24K Gold Card */}
          <img
            src="https://framerusercontent.com/images/WRAp8VzH00hxe4XxQqAqA2UuJ0.jpg?width=2000"
            alt="Xtremecardz Prestige 24K Gold Card"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center right',
              display: 'block',
              transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)'
            }}
          />

          {/* Vignette Overlay: Deep cinematic gradient for maximum text contrast on the left */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, rgba(13, 15, 15, 0.92) 0%, rgba(13, 15, 15, 0.82) 45%, rgba(13, 15, 15, 0.35) 75%, rgba(13, 15, 15, 0.15) 100%)',
              pointerEvents: 'none'
            }}
          />

          {/* Content Block Arranged on the Picture Left Hand Side */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              maxWidth: '600px',
              padding: 'clamp(28px, 4.5vw, 50px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '32px'
            }}
          >
            {/* Top Block: Premium Packages Title and Paragraph */}
            <div>
              {/* Bold Title: Premium Packages */}
              <h2
                style={{
                  fontSize: 'clamp(30px, 3.8vw, 46px)',
                  fontWeight: 800,
                  color: '#ffffff',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.15,
                  marginBottom: '16px',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.4)'
                }}
              >
                Premium Packages
              </h2>

              {/* Description Paragraph */}
              <p
                style={{
                  fontSize: 'clamp(14px, 1.4vw, 16px)',
                  lineHeight: 1.68,
                  color: 'rgba(255, 255, 255, 0.88)',
                  fontWeight: 450,
                  margin: 0,
                  textShadow: '0 1px 4px rgba(0, 0, 0, 0.5)'
                }}
              >
                We believe a card should be more than something you hand over or wear. It should be thoughtfully designed, beautifully finished, and made to stand apart. From premium materials and crisp printing to refined finishes and personalised details, our card products bring together design and craftsmanship to create something worth noticing.{' '}
                <span
                  onClick={() => onOpenQuote && onOpenQuote('Inquiry: Choose a Style')}
                  style={{
                    color: '#38bdf8',
                    fontWeight: 650,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    textDecoration: 'underline',
                    textUnderlineOffset: '3px'
                  }}
                >
                  Choose a style.
                </span>
              </p>
            </div>

            {/* Bottom Left Text: Reduced size of "Beautifully designed. Smartly connected. Built to represent you." */}
            <div
              style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                paddingTop: '20px'
              }}
            >
              <h3
                style={{
                  color: 'rgba(255, 255, 255, 0.92)',
                  fontSize: 'clamp(14px, 1.5vw, 17px)',
                  fontWeight: 600,
                  lineHeight: 1.4,
                  letterSpacing: '0.01em',
                  margin: 0,
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
                }}
              >
                Beautifully designed. Smartly connected. Built to represent you.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
