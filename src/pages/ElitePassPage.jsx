import React, { useEffect, useRef, useState } from 'react';

const ELITE_ITEMS = [
  {
    id: 'gun-metal',
    title: 'Gun Metal',
    subtitle: 'Titan Chairman',
    image: 'https://framerusercontent.com/images/Vjf97vYKt0bpNIS1sLdjmOxD4o.jpg?width=1080&height=1350',
    overview:
      "•  The Gun Metal Elite Pass was designed for organizations that prefer sophistication over spectacle. Its deep metallic tone, contemporary character, and refined finish create an identity that feels modern, professional, and effortlessly distinguished. It doesn't compete for attention; it earns it. Whether carried in a wallet or worn on a lanyard, every detail communicates precision and purpose. Because sometimes, the strongest statement is the one made without saying a word.",
    features: [
      { text: 'Grade 5 Titanium + precious-metal detailing', bold: true },
      { text: 'NFC+QR, Access .', bold: false },
      { text: 'Exclusive packaging.', bold: false }
    ]
  },
  {
    id: 'elite-gold-pass',
    title: 'Elite Gold Pass',
    subtitle: 'Titan Prestige',
    image: 'https://framerusercontent.com/images/noNpD2fR8Da0MQ0ehkSf8BFajA.png?width=2700&height=2160',
    overview:
      '•  The Elite Gold Pass was created for organizations that understand that true distinction is found in the details. Its rich gold finish, refined presence, and premium craftsmanship transform an everyday Business ID into something worthy of attention. It carries a sense of achievement without needing to demand it. From the first glance to the moment it rests in a wallet or hangs from a lanyard, it communicates confidence, recognition, and belonging. Because when your organization represents excellence, the identity you give your people should reflect it.',
    features: [
      { text: '316L stainless steel, Higher finish, enhanced personalization', bold: true },
      { text: 'NFC+QR, Access .', bold: false },
      { text: 'Exclusive packaging.', bold: false }
    ]
  }
];

function ElitePassRow({ item }) {
  const rowRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rowRef}
      className="elitepass-item-row"
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: '30px',
        width: '100%',
        position: 'relative'
      }}
    >
      {/* Left Sticky Card (.framer-1vn739r / .framer-18e2lal) */}
      <div
        className="elitepass-left-card"
        style={{
          backgroundColor: '#ffffff',
          boxShadow: '0px 8px 20px 0px rgba(19, 21, 21, 0.05)',
          borderRadius: '20px',
          flex: '0.5 0 0',
          width: '1px',
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          gap: '10px',
          position: 'sticky',
          top: '144px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0px)' : 'translateY(20px)',
          transition: 'opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1), transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)'
        }}
      >
        <h2
          className="elitepass-heading-24"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '24px',
            fontWeight: 500,
            lineHeight: 1.2,
            letterSpacing: '0em',
            color: '#131515',
            margin: 0
          }}
        >
          {item.title}
        </h2>
        <p
          className="elitepass-body-18"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: 1.3,
            color: '#494d4d',
            margin: 0
          }}
        >
          {item.subtitle}
        </p>
      </div>

      {/* Right Content Card (.framer-1inpnay / .framer-8hahlc) */}
      <div
        className="elitepass-right-card"
        style={{
          backgroundColor: '#ffffff',
          boxShadow: '0px 8px 20px 0px rgba(19, 21, 21, 0.05)',
          borderRadius: '20px',
          flex: '1 0 0',
          width: '1px',
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          gap: '40px',
          position: 'relative',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0px)' : 'translateY(20px)',
          transition:
            'opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1) 0.08s, transform 0.65s cubic-bezier(0.22, 1, 0.36, 1) 0.08s'
        }}
      >
        {/* Image Wrapper (.framer-prte9k / .framer-v09wu1) */}
        <div
          className="elitepass-image-box"
          style={{
            width: '100%',
            height: '464px',
            borderRadius: '20px',
            overflow: 'clip',
            position: 'relative',
            flexShrink: 0
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            decoding="async"
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              borderRadius: 'inherit',
              objectPosition: 'center',
              objectFit: 'cover'
            }}
          />
        </div>

        {/* List Section (.framer-7uurx2 / .framer-1pg8m48) */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            gap: '40px',
            width: '100%'
          }}
        >
          {/* Overview Item */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              gap: '20px',
              width: '100%'
            }}
          >
            <h3
              className="elitepass-heading-24"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '24px',
                fontWeight: 500,
                lineHeight: 1.2,
                letterSpacing: '0em',
                color: '#131515',
                margin: 0
              }}
            >
              ⚙️ Overview
            </h3>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '5px',
                width: '100%'
              }}
            >
              <p
                className="elitepass-body-18"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  fontWeight: 400,
                  lineHeight: 1.3,
                  color: '#494d4d',
                  margin: 0,
                  whiteSpace: 'pre-wrap'
                }}
              >
                {item.overview}
              </p>
            </div>
          </div>

          {/* Features Item */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              gap: '20px',
              width: '100%'
            }}
          >
            <h3
              className="elitepass-heading-24"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '24px',
                fontWeight: 500,
                lineHeight: 1.2,
                letterSpacing: '0em',
                color: '#131515',
                margin: 0
              }}
            >
              🚀 Features
            </h3>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '5px',
                width: '100%'
              }}
            >
              {item.features.map((feat, fIdx) => (
                <p
                  key={fIdx}
                  className="elitepass-body-18"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '18px',
                    fontWeight: 400,
                    lineHeight: 1.3,
                    color: '#494d4d',
                    margin: 0,
                    whiteSpace: 'pre-wrap'
                  }}
                >
                  {'•  '}
                  {feat.bold ? (
                    <strong style={{ fontWeight: 700, fontSynthesis: 'weight', color: '#494d4d' }}>
                      {feat.text}
                    </strong>
                  ) : (
                    feat.text
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ElitePassPage() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => setHeroVisible(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-page)',
        minHeight: '100vh',
        width: '100%',
        overflowX: 'clip',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <style>{`
        @media (max-width: 1199px) and (min-width: 810px) {
          .elitepass-hero-section {
            padding: 170px 0 80px !important;
          }
          .elitepass-changelog-section {
            padding: 0 0 40px !important;
          }
          .elitepass-left-card,
          .elitepass-right-card {
            padding: 30px !important;
          }
        }

        @media (max-width: 809px) {
          .elitepass-hero-section {
            padding: 152px 0 80px !important;
          }
          .elitepass-changelog-section {
            padding: 0 0 40px !important;
          }
          .elitepass-changelog-container {
            max-width: 600px !important;
            padding: 0 20px !important;
          }
          .elitepass-item-row {
            flex-direction: column !important;
            gap: 20px !important;
          }
          .elitepass-left-card {
            position: relative !important;
            top: unset !important;
            flex: none !important;
            width: 100% !important;
            padding: 20px !important;
          }
          .elitepass-right-card {
            flex: none !important;
            width: 100% !important;
            padding: 20px !important;
          }
          .elitepass-heading-24 {
            font-size: 20px !important;
          }
          .elitepass-body-18 {
            font-size: 16px !important;
          }
        }
      `}</style>

      {/* Hero Section (.framer-1tatbds) */}
      <section
        className="elitepass-hero-section"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          width: '100%',
          maxWidth: '1920px',
          padding: '200px 0 106px',
          position: 'relative',
          overflow: 'visible'
        }}
      >
        {/* Center Text Container (.framer-u1vm6f) */}
        <div
          style={{
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '80px',
            flex: '1 0 0',
            maxWidth: '760px',
            padding: '0 30px',
            position: 'relative'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              width: '100%'
            }}
          >
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(44px, 7vw, 90px)',
                fontWeight: 500,
                lineHeight: 1,
                letterSpacing: '0em',
                color: '#131515',
                textAlign: 'center',
                margin: 0,
                width: '100%',
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'translateY(0px)' : 'translateY(20px)',
                transition: 'opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1), transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)'
              }}
            >
              Elite pass
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(18px, 2vw, 22px)',
                fontWeight: 400,
                lineHeight: 1.4,
                letterSpacing: '0em',
                color: '#494d4d',
                textAlign: 'center',
                margin: 0,
                width: '100%',
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'translateY(0px)' : 'translateY(20px)',
                transition:
                  'opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1) 0.08s, transform 0.65s cubic-bezier(0.22, 1, 0.36, 1) 0.08s'
              }}
            >
              A card made for those who belong at the top.
            </p>
          </div>
        </div>

        {/* Cloud 02 (.framer-1d8xy5v) */}
        <div
          style={{
            userSelect: 'none',
            WebkitUserSelect: 'none',
            height: '296px',
            width: 'auto',
            aspectRatio: '3.01010101010101',
            pointerEvents: 'none',
            zIndex: 0,
            position: 'absolute',
            bottom: '50px',
            right: '-150px'
          }}
        >
          <img
            decoding="async"
            width="894"
            height="297"
            src="https://framerusercontent.com/images/bWh0pVd78Am5KRfPjOhMoF5Ddk.png?width=894&height=297"
            alt="Cloud"
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              objectPosition: 'center',
              objectFit: 'contain'
            }}
          />
        </div>

        {/* Cloud 03 (.framer-aa8xzu) */}
        <div
          style={{
            userSelect: 'none',
            WebkitUserSelect: 'none',
            height: '300px',
            width: 'auto',
            aspectRatio: '1.671875',
            pointerEvents: 'none',
            zIndex: 0,
            position: 'absolute',
            bottom: '10px',
            left: '-20px'
          }}
        >
          <img
            decoding="async"
            width="749"
            height="448"
            src="https://framerusercontent.com/images/vK1naOOAfBeOfzjSqlloxH7w.png?width=749&height=448"
            alt="Cloud"
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              objectPosition: 'center',
              objectFit: 'contain'
            }}
          />
        </div>

        {/* Cloud 01 (.framer-1xwspu) */}
        <div
          style={{
            userSelect: 'none',
            WebkitUserSelect: 'none',
            height: '588px',
            width: 'auto',
            aspectRatio: '5.083191850594227',
            pointerEvents: 'none',
            zIndex: 1,
            position: 'absolute',
            bottom: '-220px',
            left: '-330px'
          }}
        >
          <img
            decoding="async"
            width="2994"
            height="589"
            src="https://framerusercontent.com/images/c5yKOUxAULPtn3CoxX5b92vgJ8U.png?width=2994&height=589"
            alt="Cloud"
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              objectPosition: 'center',
              objectFit: 'contain'
            }}
          />
        </div>
      </section>

      {/* Changelog / Elite Pass Items Section (.framer-1n1bvp1) */}
      <section
        className="elitepass-changelog-section"
        style={{
          zIndex: 3,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          padding: '0 0 120px',
          position: 'relative',
          overflow: 'visible'
        }}
      >
        <div
          className="elitepass-changelog-container"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '70px',
            flex: '1 0 0',
            maxWidth: '1260px',
            padding: '0 30px',
            position: 'relative',
            overflow: 'visible'
          }}
        >
          {ELITE_ITEMS.map((item) => (
            <ElitePassRow key={item.id} item={item} />
          ))}

          {/* Load More Button (.framer-cYk0y.framer-1fc4qsw) */}
          <div style={{ position: 'relative' }}>
            <button
              type="button"
              style={{
                backgroundColor: 'rgb(18, 18, 18)',
                borderRadius: '100px',
                width: '100px',
                height: '40px',
                padding: 0,
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontFamily: 'var(--font-heading)',
                fontSize: '14px',
                fontWeight: 500
              }}
            >
              <span>Load More</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
