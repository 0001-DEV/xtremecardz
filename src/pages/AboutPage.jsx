import React from 'react';
import { ArrowUpRight, Award, Shield, Users, Globe2, Sparkles, CheckCircle2 } from 'lucide-react';

const CLIENT_LOGOS = [
  'First Bank',
  'Zenith Bank',
  'GTBank',
  'UBA',
  'Access Bank',
  'Standard Chartered',
  'TotalEnergies',
  'Dangote Group',
  'PwC',
  'Deloitte',
  'KPMG',
  'Oando'
];

export default function AboutPage({ onOpenQuote }) {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        color: '#131515',
        minHeight: '100vh',
        paddingTop: '130px',
        paddingBottom: '100px',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        {/* ---------------------------------------------------- */}
        {/* Section 1: Hero & Our Story                          */}
        {/* ---------------------------------------------------- */}
        <div style={{ maxWidth: '880px', margin: '0 auto 60px', textAlign: 'center' }}>
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
            <span>About us</span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(40px, 6vw, 68px)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: '#131515',
              marginBottom: '24px'
            }}
          >
            Our story
          </h1>

          <p
            style={{
              fontSize: 'clamp(18px, 2.2vw, 22px)',
              lineHeight: 1.5,
              color: '#494d4d',
              fontWeight: 500,
              letterSpacing: '-0.01em'
            }}
          >
            We believe a card should be more than something you simply hand over or wear around your neck. It should represent you, your brand, and the way you want to be seen.
          </p>
        </div>

        {/* Dual Imagery Showcase matching Framer */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            marginBottom: '64px'
          }}
        >
          <div
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              height: '380px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.06)'
            }}
          >
            <img
              src="/Xtreme cardz asset/HOME PAGE-Designed For The Bold And Professional.webp"
              onError={(e) => {
                e.currentTarget.src = 'https://framerusercontent.com/images/MDc8e866Fs6chT3px99iqkoyo.jpg?width=1200&height=1070';
              }}
              alt="Crafting Precision Cards"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '24px'
              }}
            >
              <div style={{ color: '#ffffff', fontSize: '15px', fontWeight: 600 }}>
                Master-grade materials · Tactile weight in every card
              </div>
            </div>
          </div>

          <div
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              height: '380px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.06)'
            }}
          >
            <img
              src="/Xtreme cardz asset/OUR PROCESS PAGE-Card presentation 2.webp"
              onError={(e) => {
                e.currentTarget.src = 'https://framerusercontent.com/images/OYjbGFeFtRaK5xxouRxEn3zMtfA.jpg?width=5041&height=5041';
              }}
              alt="Artisan card packaging"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '24px'
              }}
            >
              <div style={{ color: '#ffffff', fontSize: '15px', fontWeight: 600 }}>
                Unboxing luxury · Designed to be remembered
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Columns */}
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto 90px',
            backgroundColor: '#f7f7f7',
            borderRadius: '24px',
            padding: 'clamp(28px, 4vw, 48px)',
            border: '1px solid rgba(19, 21, 21, 0.06)'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', fontSize: '16.5px', lineHeight: 1.8, color: '#494d4d' }}>
            <p>
              <strong style={{ color: '#131515' }}>That idea is what led to Xtreme Cardz.</strong>
            </p>
            <p>
              We create cards for businesses, organizations, professionals, and communities that care about how they present themselves. From staff and access cards to membership and professional cards, we pay attention to the details that make a card feel right.
            </p>
            <p>
              The material. The finish. The design. The way it feels in your hand. Every part matters.
            </p>
            <p>
              For us, it is not about making just another card. It is about creating something that looks good, feels premium, and represents the identity behind it.
            </p>
            <p style={{ fontStyle: 'italic', color: '#131515', fontWeight: 500 }}>
              Because sometimes, the smallest details can make the biggest impression.
            </p>
            <div style={{ marginTop: '12px', borderTop: '1px solid rgba(19, 21, 21, 0.1)', paddingTop: '18px' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 700, color: '#131515' }}>
                Xtreme Cardz.
              </div>
              <div style={{ fontSize: '14.5px', color: '#cfa34b', fontWeight: 600 }}>
                Made to be held. Designed to be remembered.
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* Section 2: Trusted Worldwide Marquee                  */}
        {/* ---------------------------------------------------- */}
        <div style={{ textAlign: 'center', marginBottom: '90px' }}>
          <div style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#71717a', marginBottom: '24px' }}>
            Trusted worldwide by leading enterprises
          </div>

          <div
            style={{
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              position: 'relative',
              padding: '16px 0'
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                gap: '48px',
                animation: 'marqueeScroll 25s linear infinite'
              }}
            >
              {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((name, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    fontFamily: 'var(--font-heading)',
                    color: '#64748b',
                    letterSpacing: '-0.02em',
                    opacity: 0.85
                  }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* Section 3: Our Experience Counts                      */}
        {/* ---------------------------------------------------- */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(32px, 5vw, 64px)',
            alignItems: 'center',
            marginBottom: '100px',
            backgroundColor: '#131515',
            color: '#ffffff',
            borderRadius: '32px',
            padding: 'clamp(32px, 5vw, 64px)',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.15)'
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '100px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                fontSize: '12px',
                fontWeight: 600,
                color: '#cfa34b',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '16px'
              }}
            >
              <Award size={14} />
              <span>Our Experience</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                color: '#ffffff',
                marginBottom: '20px'
              }}
            >
              Our experience counts
            </h2>

            <p style={{ fontSize: '15.5px', lineHeight: 1.75, color: '#d4d4d8', marginBottom: '18px' }}>
              Our clients’ needs for quality and innovation always come first. This is why we keep experimenting with technologies that help create smart card personalization solutions and ensure that clients orders are delivered on time.
            </p>

            <p style={{ fontSize: '15.5px', lineHeight: 1.75, color: '#d4d4d8', marginBottom: '18px' }}>
              This is the magic we help create at Xtreme Cardz and nothing thrills us more than watching clients’ brands gain better visibility as their Trump cards continue to redefine their success by locking down definite levels of trust in the minds of their target clients. This, for us, is perfection in itself.
            </p>

            <p style={{ fontSize: '15.5px', lineHeight: 1.75, color: '#a1a1aa', marginBottom: '32px' }}>
              Becoming the one-stop-shop for card personalization within and outside Africa is the vision that keeps guiding our operations. In addition to working with our dedicated team of qualified designers and strategists, we have invested heavily in machines that produce only the highest standard luxurious cards.
            </p>

            <button
              onClick={() => onOpenQuote('About Page: Reach Out')}
              style={{
                backgroundColor: '#ffffff',
                color: '#131515',
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
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Reach out to us</span>
              <ArrowUpRight size={17} />
            </button>
          </div>

          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                aspectRatio: '1',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
              }}
            >
              <img
                src="/Xtreme cardz asset/Gold Metal Invite Card.webp"
                onError={(e) => {
                  e.currentTarget.src = 'https://framerusercontent.com/images/MDc8e866Fs6chT3px99iqkoyo.jpg?width=1200&height=1070';
                }}
                alt="Xtreme Metal Craftsmanship"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* Section 4: Xtremecardz in numbers / Why Choose Us    */}
        {/* ---------------------------------------------------- */}
        <div>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '100px',
                backgroundColor: 'rgba(19, 21, 21, 0.05)',
                border: '1px solid rgba(19, 21, 21, 0.1)',
                fontSize: '12px',
                fontWeight: 600,
                color: '#131515',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '14px'
              }}
            >
              <Users size={13} color="#0283a7" />
              <span>Xtremecardz in numbers</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(32px, 4vw, 44px)',
                fontWeight: 700,
                color: '#131515',
                letterSpacing: '-0.02em',
                marginBottom: '12px'
              }}
            >
              Why choose us
            </h2>
            <p style={{ color: '#494d4d', fontSize: '16px' }}>
              Trusted by high-profile corporate leaders, banks, real estate conglomerates, and private members clubs.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px'
            }}
          >
            {[
              {
                number: '500+',
                title: 'Organisations served',
                description: 'Trusted by businesses and enterprise organizations across multiple sectors.'
              },
              {
                number: '100K+',
                title: 'Cards delivered',
                description: 'Precision manufactured cards deployed for staff, VIP members, and executives.'
              },
              {
                number: '15+',
                title: 'Countries reached',
                description: 'Delivering secure, contactless card identity experiences across Africa and abroad.'
              },
              {
                number: '99.8%',
                title: 'Satisfaction rate',
                description: 'Consistent five-star client feedback and re-order loyalty year after year.'
              }
            ].map((stat, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#f7f7f7',
                  borderRadius: '20px',
                  padding: '32px 24px',
                  border: '1px solid rgba(19, 21, 21, 0.06)',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
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
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(38px, 4vw, 48px)',
                    fontWeight: 700,
                    color: '#0283a7',
                    lineHeight: 1,
                    marginBottom: '12px',
                    letterSpacing: '-0.03em'
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontSize: '17px',
                    fontWeight: 700,
                    color: '#131515',
                    marginBottom: '8px'
                  }}
                >
                  {stat.title}
                </div>
                <div style={{ fontSize: '14px', color: '#666e6e', lineHeight: 1.5 }}>
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
