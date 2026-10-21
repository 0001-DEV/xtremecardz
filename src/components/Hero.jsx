import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import RingCarousel3D from './RingCarousel3D';
import heroWebp from '../assets/hero.webp';

export default function Hero({ onOpenQuote }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-animate-up', {
        y: 28,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out'
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const audienceTags = [
    '#C-suite executives',
    '#corporate staff',
    '#Businesses',
    '#Elites'
  ];

  return (
    <section
      ref={heroRef}
      id="hero"
      style={{
        position: 'relative',
        paddingTop: '185px',
        paddingBottom: '40px',
        overflow: 'hidden',
        textAlign: 'center',
        background: '#f9f8f6'
      }}
    >
      {/* Background image & continuous moving animation from top down to Make enquiries (before moving images) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1160px',
          overflow: 'hidden',
          zIndex: 1,
          pointerEvents: 'none',
          backgroundColor: '#0c0d10',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 84%, rgba(0, 0, 0, 0) 100%)',
          maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 84%, rgba(0, 0, 0, 0) 100%)'
        }}
      >
        {/* Full-width continuous moving WebP visual */}
        <img
          src={heroWebp}
          alt="Continuous moving hero visual"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 25%',
            opacity: 0.92,
            zIndex: 0,
            pointerEvents: 'none'
          }}
        />

        {/* Ambient readability overlay so white text & glassmorphism badge pop */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 50% 35%, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.35) 75%, rgba(0, 0, 0, 0.6) 100%)',
            zIndex: 1
          }}
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        {/* Top Tagline Badge */}
        {/* Outer container: glassmorphism transparent color */}
        {/* Inner text 'Xtreme cards': black bg taking text size, no icon beside it */}
        <div className="hero-animate-up" style={{ marginBottom: '24px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.22)',
              borderRadius: '9999px',
              padding: '6px 18px 5px 5px',
              minHeight: '37px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
            }}
          >
            {/* Black background taking the size of the text 'Xtreme cards' */}
            <span
              style={{
                backgroundColor: '#000000',
                color: '#ffffff',
                padding: '6px 14px',
                borderRadius: '9999px',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '-0.01em',
                lineHeight: 1,
                display: 'inline-block'
              }}
            >
              Xtreme cards
            </span>

            {/* Subtext 'Cards made to be noticed' */}
            <span
              style={{
                color: '#ffffff',
                fontSize: '13.5px',
                fontWeight: 400,
                letterSpacing: '-0.01em'
              }}
            >
              Cards made to be noticed
            </span>
          </div>
        </div>

        {/* Main Title: Increased font size, white text */}
        <h1
          className="hero-animate-up"
          style={{
            fontSize: 'clamp(52px, 8.5vw, 92px)',
            fontWeight: 700,
            lineHeight: 1.04,
            color: '#ffffff',
            maxWidth: '1060px',
            margin: '0 auto 28px',
            letterSpacing: '-0.04em',
            textShadow: '0 4px 28px rgba(0, 0, 0, 0.5)'
          }}
        >
          Every brand has a style. <br />
          <span style={{ color: '#ffffff' }}>We give it distinction.</span>
        </h1>

        {/* Subtitle in three paragraphs */}
        <div
          className="hero-animate-up"
          style={{
            fontSize: 'clamp(16px, 2vw, 20px)',
            color: 'rgba(255, 255, 255, 0.85)',
            maxWidth: '720px',
            margin: '0 auto 44px',
            lineHeight: 1.55,
            fontWeight: 400,
            display: 'flex',
            flexDirection: 'column',
            gap: '6px'
          }}
        >
          <p style={{ margin: 0 }}>From refined plastic to statement metal,</p>
          <p style={{ margin: 0 }}>we create cards with the material, finish</p>
          <p style={{ margin: 0 }}>and character to match your brand.</p>
        </div>

        {/* Single Centered CTA Button: Make enquiries (Black background, white text) */}
        <div
          className="hero-animate-up"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '110px'
          }}
        >
          <button
            onClick={() => onOpenQuote('Make enquiries')}
            style={{
              padding: '15px 38px',
              fontSize: '15.5px',
              fontWeight: 600,
              backgroundColor: '#000000',
              color: '#ffffff',
              borderRadius: '50px',
              border: '1px solid rgba(255, 255, 255, 0.28)',
              boxShadow: '0 10px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
              cursor: 'pointer',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)';
              e.currentTarget.style.backgroundColor = '#16191b';
              e.currentTarget.style.boxShadow = '0 14px 44px rgba(207, 163, 75, 0.45), 0 0 20px rgba(207, 163, 75, 0.3)';
              e.currentTarget.style.borderColor = '#cfa34b';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.backgroundColor = '#000000';
              e.currentTarget.style.boxShadow = '0 10px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.28)';
            }}
          >
            <span>Make enquiries</span>
          </button>
        </div>

        {/* 3D Media Ring Carousel (Shifted down) */}
        <div className="hero-animate-up" style={{ marginTop: '50px' }}>
          <RingCarousel3D onSelectCard={(cardTitle) => onOpenQuote(`Selected from Hero Ring: ${cardTitle}`)} />
        </div>

        {/* Statement ticker box */}
        <div
          className="hero-animate-up"
          style={{
            maxWidth: '820px',
            margin: '0 auto 18px',
            padding: '0 16px'
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(18px, 2.5vw, 24px)',
              fontWeight: 600,
              color: '#131515',
              lineHeight: 1.45,
              letterSpacing: '-0.02em'
            }}
          >
            Premium cards designed to make every introduction, interaction, and access points feel unmistakably distinctive.
          </p>
        </div>

        {/* Audience Pill Tags */}
        <div
          className="hero-animate-up"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap'
          }}
        >
          {audienceTags.map((tag) => (
            <span
              key={tag}
              style={{
                display: 'inline-block',
                fontSize: '13.5px',
                fontWeight: 500,
                color: '#686d6d',
                backgroundColor: 'rgba(19, 21, 21, 0.04)',
                padding: '6px 14px',
                borderRadius: '50px',
                border: '1px solid rgba(19, 21, 21, 0.06)'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
