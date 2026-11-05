import { getAsset } from '../assets/assetUrl';
import React, { useState, useEffect, useRef } from 'react';
import ElevateCta from '../components/ElevateCta';

const LOGO_PAIRS = [
  {
    from: { name: 'Seplat Energy', img: getAsset('logo-seplat-energy.png') },
    to: { name: 'Nova Bank', img: getAsset('logo-nova-bank.png') }
  },
  {
    from: { name: 'Invera Energy', img: getAsset('logo-invera-energy.png') },
    to: { name: 'Optiva Capital', img: getAsset('logo-optiva-capital.png') }
  },
  {
    from: { name: 'Guinness Nigeria', img: getAsset('logo-guinness-nigeria.png') },
    to: { name: 'Rainoil Limited', img: getAsset('logo-rainoil.png') }
  },
  {
    from: { name: 'Ikeja Electric', img: getAsset('logo-ikeja-electric.png') },
    to: { name: 'Sapetro Oil', img: getAsset('logo-sapetro-oil.webp') }
  },
  {
    from: { name: 'TVC Communications', img: getAsset('logo-tvc-communications.png') },
    to: { name: 'IOGC Petroleum', img: getAsset('logo-iogc-petroleum.png') }
  },
  {
    from: { name: 'Sterling Capital', img: getAsset('logo-sterling-capital.png') },
    to: { name: 'Horizon Group', img: getAsset('logo-horizon-group.svg') }
  },
  {
    from: { name: 'NECA Nigeria', img: getAsset('logo-neca-nigeria.png') },
    to: { name: 'Apex Synergy', img: getAsset('logo-apex-synergy.png') }
  },
  {
    from: { name: 'Falcon Oil', img: getAsset('logo-falcon-oil.png') },
    to: { name: 'Credit Direct', img: getAsset('logo-credit-direct.png') }
  }
];

const STORY_PARAGRAPHS = [
  'We believe a card should be more than something you simply hand over or wear around your neck. It should represent you, your brand, and the way you want to be seen.',
  'That idea is what led to Xtreme Cardz.',
  'We create cards for businesses, organizations, professionals, and communities that care about how they present themselves. From staff and access cards to membership and professional cards, we pay attention to the details that make a card feel right.',
  'The material. The finish. The design. The way it feels in your hand. Every part matters.',
  'For us, it is not about making just another card. It is about creating something that looks good, feels premium, and represents the identity behind it.',
  'Because sometimes, the smallest details can make the biggest impression.',
  'Xtreme Cardz.',
  'Made to be held. Designed to be remembered.'
];

const COUNTER_ITEMS = [
  {
    columns: [
      ['0', '1', '2', '3', '5'],
      ['0', '0', '0', '0', '0'],
      ['0', '0', '0', '0', '0']
    ],
    suffix: '+',
    title: 'Organisations served',
    description: 'Trusted by businesses and organizations for professional card solutions.'
  },
  {
    columns: [
      ['0', '0', '0', '0', '1'],
      ['0', '1', '2', '3', '4']
    ],
    suffix: '+',
    title: 'Years of craftmanship',
    description: "Experience creating quality cards built around each brand's identity."
  },
  {
    columns: [
      ['0', '0', '0', '0', '1'],
      ['0', '0', '0', '0', '0'],
      ['0', '0', '0', '0', '0']
    ],
    suffix: '%',
    title: 'Brand focused',
    description: 'Premium cards designed and produced for teams, members and professionals.'
  }
];

const TEAM_MEMBERS = [
  {
    name: 'Joy Akosa',
    position: 'Brand communications',
    image: getAsset('team-joy-akosa.jpeg'),
    aspectRatio: '720 / 740',
    href: 'https://x.com/'
  },
  {
    name: 'Love Olaoye',
    position: 'IT & Operation',
    image: getAsset('team-love-olaoye.jpeg'),
    aspectRatio: '747 / 740',
    href: 'https://x.com/'
  },
  {
    name: 'Olabisi Olaleye',
    position: 'Marketer',
    image: getAsset('team-olabisi-olaleye.jpg'),
    aspectRatio: '1 / 1',
    href: 'https://x.com/'
  }
];

const TESTIMONIAL_COLUMNS = [
  [
    {
      quote: 'Our staff IDs finally look as professional as the people wearing them. The finish is impressive.',
      name: 'Maya Zong',
      role: 'HR Manager',
      avatar: getAsset('avatar-maya-zong.jpg')
    },
    {
      quote: 'The quality is excellent, and the process from design to delivery was smooth from start to finish.',
      name: 'Daniel Perez',
      role: 'Operations Manager',
      avatar: getAsset('avatar-daniel-perez.jpg')
    },
    {
      quote: 'Everything from the design to the finishing feels intentional. Our staff genuinely love their new IDs.',
      name: 'Andre Lewis',
      role: 'Admin Manager',
      avatar: getAsset('avatar-siddharth-rao.jpg')
    }
  ],
  [
    {
      quote: 'Xtreme Cardz helped us turn a simple business card into something people actually remember.',
      name: 'Ethan Miller',
      role: 'Business Owner',
      avatar: getAsset('avatar-sarah-jenkins.jpg')
    },
    {
      quote: 'We wanted cards that felt different from the usual. Xtreme Cardz understood the vision immediately.',
      name: 'Laura Kim',
      role: 'Brand Manager',
      avatar: getAsset('avatar-kemi-adebayo.jpg')
    },
    {
      quote: 'The VIP cards added the perfect touch of exclusivity to our guest experience.',
      name: 'Kevin Brooks',
      role: 'Event Manager',
      avatar: getAsset('avatar-ahmed-al-hassan.jpg')
    }
  ],
  [
    {
      quote: 'Our membership cards feel premium, professional, and perfectly aligned with our brand.',
      name: 'Hannah Lee',
      role: 'Membership Manager',
      avatar: getAsset('avatar-chinedu-okonkwo.jpg')
    },
    {
      quote: 'The cards gave our team a more polished identity. They look and feel like a proper corporate brand.',
      name: 'Priya Shah',
      role: 'Corporate Executive',
      avatar: getAsset('avatar-fatima-bello.jpg')
    },
    {
      quote: 'Having a professional ID system makes verification easier with stronger sense of identity.',
      name: 'Sofia Martinez',
      role: 'Security Manager',
      avatar: getAsset('avatar-amara-nwosu.jpg')
    }
  ]
];

function RevealOnScroll({ children, delay = 0, yOffset = 20, style = {}, className = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0px)' : `translateY(${yOffset}px)`,
        transition: `opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 0.65s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
}

function PillBadge({ text }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8px 20px',
        backgroundColor: '#ffffff',
        borderRadius: '100px',
        border: '1px solid rgba(19, 21, 21, 0.05)',
        width: 'min-content',
        whiteSpace: 'nowrap'
      }}
    >
      <p
        style={{
          margin: 0,
          fontFamily: 'var(--font-body)',
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '1.3em',
          color: 'rgb(19, 21, 21)',
          textAlign: 'center'
        }}
      >
        {text}
      </p>
    </div>
  );
}

function SlotCounterItem({ item, index }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <RevealOnScroll delay={index * 0.08} style={{ width: '100%' }}>
      <div ref={ref} className="about-counter-item">
        {/* Left: Slot Machine Number */}
        <div className="about-counter-item-left">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              fontFamily: 'var(--font-heading)',
              fontSize: '34px',
              fontWeight: 500,
              lineHeight: '0.9em',
              color: 'rgb(2, 131, 167)',
              userSelect: 'none'
            }}
          >
            {item.columns.map((col, colIdx) => (
              <div
                key={colIdx}
                style={{
                  position: 'relative',
                  height: '30.6px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'center'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    transform: inView ? `translateY(-${(col.length - 1) * 30.6}px)` : 'translateY(0px)',
                    transition: `transform ${1.1 + colIdx * 0.18}s cubic-bezier(0.16, 1, 0.3, 1)`
                  }}
                >
                  {col.map((digit, dIdx) => (
                    <span
                      key={dIdx}
                      style={{
                        height: '30.6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'rgb(2, 131, 167)'
                      }}
                    >
                      {digit}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <span
              style={{
                height: '30.6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgb(2, 131, 167)'
              }}
            >
              {item.suffix}
            </span>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="about-counter-divider" />

        {/* Right: Title & Description */}
        <div className="about-counter-item-right">
          <p
            style={{
              margin: 0,
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: '1.3em',
              color: 'rgb(19, 21, 21)'
            }}
          >
            {item.title}
          </p>
          <p
            style={{
              margin: 0,
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '1.3em',
              color: 'rgb(73, 77, 77)'
            }}
          >
            {item.description}
          </p>
        </div>
      </div>
    </RevealOnScroll>
  );
}

function TeamMemberCard({ member, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <RevealOnScroll delay={index * 0.1} style={{ width: '100%', zIndex: 2 }}>
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
        {/* Top Avatar Box */}
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="about-team-avatar-box"
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '150px',
            borderRadius: '20px',
            overflow: 'hidden',
            cursor: 'pointer'
          }}
        >
          <div style={{ width: '100%', aspectRatio: member.aspectRatio, position: 'relative' }}>
            <img
              src={member.image}
              alt={member.name}
              loading="lazy"
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                borderRadius: 'inherit'
              }}
            />
          </div>

          {/* Dark Hover Overlay */}
          <div
            className="about-team-overlay"
            style={{
              position: 'absolute',
              inset: '-2px',
              background: 'linear-gradient(180deg, rgb(19, 21, 21) 0%, rgb(19, 21, 21) 100%)',
              opacity: hovered ? 0.55 : 0,
              transition: 'opacity 0.3s ease',
              pointerEvents: 'none'
            }}
          />

          {/* Centered X Social Icon Link */}
          <div
            className="about-team-social"
            style={{
              position: 'absolute',
              top: hovered ? '50%' : '80px',
              left: '50%',
              transform: hovered ? 'translate(-50%, -50%)' : 'translateX(-50%)',
              opacity: hovered ? 1 : 0,
              transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
              zIndex: 2,
              pointerEvents: hovered ? 'auto' : 'none'
            }}
          >
            <a
              href={member.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Social Link"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgb(232, 232, 232)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none'
              }}
            >
              <img
                src={getAsset('icon-globe-badge.svg')}
                alt="Social Icon"
                width="20"
                height="20"
                style={{ width: '20px', height: '20px', objectFit: 'contain', display: 'block' }}
              />
            </a>
          </div>
        </div>

        {/* Bottom Name & Position */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            width: '100%',
            textAlign: 'center'
          }}
        >
          <h2
            className="about-team-name"
            style={{
              margin: 0,
              fontFamily: 'var(--font-heading)',
              fontSize: '24px',
              fontWeight: 500,
              lineHeight: '1.2em',
              color: 'rgb(19, 21, 21)',
              textAlign: 'center'
            }}
          >
            {member.name}
          </h2>
          <p
            className="about-team-role"
            style={{
              margin: 0,
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: '1.3em',
              color: 'rgb(73, 77, 77)',
              textAlign: 'center'
            }}
          >
            {member.position}
          </p>
        </div>
      </div>
    </RevealOnScroll>
  );
}

export default function AboutPage({ onOpenQuote }) {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [reviewsExpanded, setReviewsExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 60);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        backgroundColor: 'rgb(247, 247, 247)',
        color: 'rgb(19, 21, 21)',
        minHeight: '100vh',
        overflowX: 'clip'
      }}
    >
      <style>{`
        /* ---------------------------------------------------- */
        /* 1. HERO SECTION                                      */
        /* ---------------------------------------------------- */
        .about-hero-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 50px;
          width: 100%;
          max-width: 1920px;
          margin: 0 auto;
          padding: 200px 0 0;
          position: relative;
          overflow: visible;
        }
        .about-hero-container {
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 80px;
          width: 100%;
          max-width: 1260px;
          padding: 0 30px;
          position: relative;
        }
        .about-hero-top-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(50px, 1fr));
          gap: 30px;
          width: 100%;
        }
        .about-hero-top-left {
          grid-column: span 3;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          width: 100%;
        }
        .about-hero-title {
          font-family: var(--font-heading);
          font-size: 90px;
          font-weight: 500;
          line-height: 1em;
          letter-spacing: 0em;
          color: rgb(19, 21, 21);
          margin: 0;
        }
        .about-hero-images-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(50px, 1fr));
          gap: 30px;
          width: 100%;
          height: 400px;
        }
        .about-hero-img-left {
          grid-column: span 3;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
        }
        .about-hero-img-right-wrap {
          grid-column: span 2;
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .about-hero-img-right {
          width: 100%;
          height: 100%;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          z-index: 2;
        }
        .about-hero-blur-shadow {
          filter: blur(10px);
          background-color: rgb(19, 21, 21);
          border-radius: 50%;
          height: 10px;
          position: absolute;
          bottom: 40px;
          left: 70px;
          right: 70px;
          z-index: 1;
          pointer-events: none;
        }
        .about-story-copy {
          width: 100%;
          max-width: 800px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .about-story-copy p {
          margin: 0;
          font-family: var(--font-body);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.3em;
          color: rgb(73, 77, 77);
        }

        /* Client Logos Marquee inside Hero */
        @keyframes aboutClientMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes aboutClientSlideY {
          0%, 38% { transform: translateY(0%); }
          46%, 88% { transform: translateY(-33.333333%); }
          96%, 100% { transform: translateY(-66.666666%); }
        }

        /* Hero Background Clouds */
        .about-hero-cloud-02 {
          position: absolute;
          bottom: 50px;
          right: -150px;
          height: 296px;
          aspect-ratio: 3.01010101010101;
          z-index: 0;
          pointer-events: none;
          user-select: none;
        }
        .about-hero-cloud-03 {
          position: absolute;
          bottom: 10px;
          left: -20px;
          height: 300px;
          aspect-ratio: 1.671875;
          z-index: 0;
          pointer-events: none;
          user-select: none;
        }
        .about-hero-cloud-01 {
          position: absolute;
          bottom: -220px;
          left: -330px;
          height: 588px;
          aspect-ratio: 5.083191850594227;
          z-index: 1;
          pointer-events: none;
          user-select: none;
        }

        /* ---------------------------------------------------- */
        /* 2. ABOUT SPLIT SECTION ("Our experience counts")     */
        /* ---------------------------------------------------- */
        .about-split-section,
        .about-counter-section,
        .about-team-section {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 200px 0 0;
          position: relative;
          z-index: 2;
        }
        .about-section-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 60px;
          width: 100%;
          max-width: 1260px;
          padding: 0 30px;
          position: relative;
        }
        .about-split-row,
        .about-counter-row {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 80px;
          width: 100%;
        }
        .about-split-left {
          flex: 1 0 0;
          align-self: stretch;
          background-color: rgb(232, 232, 232);
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          min-height: 520px;
        }
        .about-split-right {
          flex: 1 0 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 50px;
        }
        .about-section-h2 {
          font-family: var(--font-heading);
          font-size: 60px;
          font-weight: 500;
          line-height: 1.2em;
          letter-spacing: 0em;
          color: rgb(19, 21, 21);
          margin: 0;
        }
        .about-experience-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;
        }
        .about-experience-paragraphs p {
          margin: 0;
          font-family: var(--font-body);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.3em;
          color: rgb(73, 77, 77);
        }

        /* ---------------------------------------------------- */
        /* 3. COUNTER SECTION ("Why choose us")                 */
        /* ---------------------------------------------------- */
        .about-counter-left {
          flex: 1 0 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 50px;
          z-index: 2;
        }
        .about-counter-list {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 30px;
          width: 100%;
        }
        .about-counter-item {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          gap: 30px;
          width: 330px;
          max-width: 100%;
        }
        .about-counter-item-left {
          flex: 1 0 0;
          max-width: 76px;
          padding: 12px 0;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        .about-counter-divider {
          width: 1px;
          align-self: stretch;
          background-color: rgb(184, 184, 184);
          flex-shrink: 0;
        }
        .about-counter-item-right {
          flex: 1 0 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 6px;
          padding: 12px 0;
        }
        .about-counter-right-card {
          flex: 1 0 0;
          background-color: rgb(232, 232, 232);
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          position: relative;
        }
        .about-counter-right-top {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 50px;
        }
        .about-counter-big-num {
          font-family: var(--font-heading);
          font-size: 90px;
          font-weight: 500;
          line-height: 1em;
          color: rgb(207, 163, 75);
          text-align: center;
        }
        .about-counter-right-bottom {
          aspect-ratio: 2.45455;
          width: 100%;
          max-width: 1080px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          position: relative;
          z-index: 2;
        }
        .about-counter-earth {
          height: 320px;
          aspect-ratio: 2.2662473794549265;
          position: relative;
          pointer-events: none;
          user-select: none;
        }
        .about-counter-cloud-01 {
          position: absolute;
          bottom: -200px;
          left: -140px;
          height: 300px;
          aspect-ratio: 1.671875;
          z-index: 1;
          pointer-events: none;
          user-select: none;
        }
        .about-counter-cloud-02 {
          position: absolute;
          bottom: -130px;
          right: -250px;
          height: 290px;
          aspect-ratio: 1.7289915966386555;
          transform: rotateX(180deg);
          z-index: 1;
          pointer-events: none;
          user-select: none;
        }

        /* ---------------------------------------------------- */
        /* 4. TEAM & TESTIMONIALS SECTION                       */
        /* ---------------------------------------------------- */
        .about-team-box {
          background-color: #ffffff;
          border-radius: 20px;
          padding: 100px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 50px;
          position: relative;
          overflow: hidden;
        }
        .about-team-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(50px, 1fr));
          gap: 50px;
          width: 100%;
          position: relative;
          z-index: 2;
        }
        .about-testimonials-container {
          width: 100%;
          max-width: 1260px;
          padding: 0 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .about-testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          width: 100%;
          max-width: 1140px;
          position: relative;
          overflow: hidden;
        }
        .about-testimonial-card {
          background-color: rgb(232, 232, 232);
          border-radius: 20px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 30px;
          width: 100%;
        }

        /* ---------------------------------------------------- */
        /* RESPONSIVE BREAKPOINTS                               */
        /* ---------------------------------------------------- */
        @media (max-width: 1199px) {
          .about-hero-section {
            padding: 170px 0 0;
          }
          .about-hero-container {
            gap: 50px;
          }
          .about-hero-top-grid {
            grid-template-columns: 1fr;
          }
          .about-hero-top-left {
            grid-column: span 1;
          }
          .about-hero-title,
          .about-counter-big-num {
            font-size: 60px;
          }
          .about-split-section,
          .about-counter-section,
          .about-team-section {
            padding: 120px 0 0;
          }
          .about-split-row,
          .about-counter-row {
            gap: 30px;
          }
          .about-section-h2 {
            font-size: 42px;
          }
          .about-counter-right-top {
            padding: 30px;
          }
          .about-team-box {
            padding: 50px 30px;
          }
          .about-team-grid {
            gap: 30px;
          }
          .about-testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 809px) {
          .about-hero-section {
            padding: 152px 0 0;
          }
          .about-hero-container {
            gap: 40px;
            padding: 0 20px;
          }
          .about-hero-title,
          .about-counter-big-num {
            font-size: 44px;
          }
          .about-hero-images-grid {
            grid-template-columns: 1fr;
            height: auto;
            gap: 20px;
          }
          .about-hero-img-left {
            grid-column: span 1;
            aspect-ratio: 1200 / 670;
            height: auto;
          }
          .about-hero-img-right-wrap {
            grid-column: span 1;
            height: 500px;
          }
          .about-story-copy p,
          .about-experience-paragraphs p {
            font-size: 16px;
          }
          .about-section-container,
          .about-testimonials-container {
            padding: 0 20px;
          }
          .about-split-row,
          .about-counter-row {
            flex-direction: column;
            gap: 30px;
          }
          .about-split-left {
            width: 100%;
            min-height: 0;
            aspect-ratio: 1200 / 1070;
          }
          .about-split-right,
          .about-counter-left,
          .about-counter-right-card {
            width: 100%;
            flex: none;
          }
          .about-section-h2 {
            font-size: 38px;
          }
          .about-counter-list {
            display: grid;
            grid-template-columns: repeat(2, minmax(50px, 1fr));
            gap: 40px 20px;
          }
          .about-counter-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
            width: 100%;
          }
          .about-counter-divider {
            display: none;
          }
          .about-counter-item-left,
          .about-counter-item-right {
            max-width: none;
            width: 100%;
            padding: 0;
          }
          .about-counter-earth {
            height: 200px;
          }
          .about-team-box {
            padding: 40px 20px;
            gap: 30px;
          }
          .about-team-grid {
            grid-template-columns: repeat(2, minmax(50px, 1fr));
            gap: 40px 20px;
          }
          .about-team-avatar-box {
            max-width: 200px !important;
          }
          .about-team-overlay {
            background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgb(19, 21, 21) 100%) !important;
            opacity: 1 !important;
          }
          .about-team-social {
            top: auto !important;
            bottom: 20px !important;
            transform: translateX(-50%) !important;
            opacity: 1 !important;
            pointer-events: auto !important;
          }
          .about-team-name {
            font-size: 20px !important;
          }
          .about-team-role {
            font-size: 16px !important;
          }
          .about-testimonials-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .about-testimonial-card {
            padding: 20px;
            gap: 20px;
          }
        }

        @media (max-width: 480px) {
          .about-hero-title,
          .about-section-h2,
          .about-counter-big-num {
            font-size: clamp(28px, 8vw, 36px) !important;
          }
          .about-counter-list {
            grid-template-columns: 1fr !important;
          }
          .about-team-grid {
            grid-template-columns: 1fr !important;
          }
          .about-team-item {
            align-items: center !important;
          }
        }

        @media (max-height: 550px) {
          .about-hero-section {
            padding: 95px 0 0 !important;
          }
          .about-hero-container {
            gap: 24px !important;
          }
        }
      `}</style>

      {/* ============================================================== */}
      {/* 1. HERO SECTION ("About us" / "Our story" + Images + Marquee)  */}
      {/* ============================================================== */}
      <section className="about-hero-section">
        <div className="about-hero-container">
          {/* Top Heading Row */}
          <div className="about-hero-top-grid">
            <div className="about-hero-top-left">
              <div
                style={{
                  opacity: heroLoaded ? 1 : 0,
                  transform: heroLoaded ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
                }}
              >
                <PillBadge text="About us" />
              </div>

              <h1
                className="about-hero-title"
                style={{
                  opacity: heroLoaded ? 1 : 0,
                  transform: heroLoaded ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.6s ease 0.08s, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.08s'
                }}
              >
                Our story
              </h1>
            </div>
          </div>

          {/* Center Dual Images Row */}
          <div className="about-hero-images-grid">
            <div
              className="about-hero-img-left"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.65s ease 0.14s, transform 0.65s cubic-bezier(0.22, 1, 0.36, 1) 0.14s'
              }}
            >
              <img
                src={getAsset('about-story-hero-left.jpg')}
                alt="BG Image"
                style={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
            </div>

            <div className="about-hero-img-right-wrap">
              <div className="about-hero-blur-shadow" />
              <div
                className="about-hero-img-right"
                style={{
                  opacity: heroLoaded ? 1 : 0,
                  transform: heroLoaded ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.65s ease 0.2s, transform 0.65s cubic-bezier(0.22, 1, 0.36, 1) 0.2s'
                }}
              >
                <img
                  src={getAsset('about-story-hero-right.jpg')}
                  alt="BG Image"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Story Narrative Paragraphs */}
          <RevealOnScroll className="about-story-copy">
            {STORY_PARAGRAPHS.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </RevealOnScroll>

          {/* Bottom: Trusted worldwide + Client Logo Slideshow Ticker */}
          <div
            style={{
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '30px',
              width: '100%'
            }}
          >
            <RevealOnScroll style={{ width: '100%' }}>
              <p
                style={{
                  margin: 0,
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(18px, 1.8vw, 22px)',
                  fontWeight: 400,
                  lineHeight: '1.4em',
                  color: 'rgb(19, 21, 21)',
                  textAlign: 'center'
                }}
              >
                Trusted  worldwide
              </p>
            </RevealOnScroll>

            <RevealOnScroll style={{ width: '100%', position: 'relative', overflow: 'hidden' }}>
              {/* Fade Left */}
              <div
                style={{
                  position: 'absolute',
                  top: '-10px',
                  bottom: '-10px',
                  left: '-10px',
                  width: '100px',
                  background: 'linear-gradient(90deg, rgb(247, 247, 247) 0%, rgba(255, 255, 255, 0) 100%)',
                  zIndex: 2,
                  pointerEvents: 'none'
                }}
              />
              {/* Fade Right */}
              <div
                style={{
                  position: 'absolute',
                  top: '-10px',
                  bottom: '-10px',
                  right: '-10px',
                  width: '100px',
                  background: 'linear-gradient(270deg, rgb(247, 247, 247) 0%, rgba(255, 255, 255, 0) 100%)',
                  zIndex: 2,
                  pointerEvents: 'none'
                }}
              />

              {/* Marquee Track */}
              <div
                style={{
                  display: 'flex',
                  width: 'max-content',
                  gap: '64px',
                  animation: 'aboutClientMarquee 32s linear infinite',
                  alignItems: 'center'
                }}
              >
                {[...LOGO_PAIRS, ...LOGO_PAIRS].map((pair, idx) => {
                  const staggerDelay = (idx % LOGO_PAIRS.length) * 0.55;
                  return (
                    <div
                      key={idx}
                      style={{
                        width: '182px',
                        padding: '36px 24px',
                        borderRadius: '16px',
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(6px)',
                        WebkitBackdropFilter: 'blur(6px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <div
                        style={{
                          width: '134px',
                          height: '36px',
                          overflow: 'hidden',
                          position: 'relative'
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            height: '300%',
                            animation: 'aboutClientSlideY 4.8s cubic-bezier(0.77, 0, 0.175, 1) infinite',
                            animationDelay: `${staggerDelay}s`
                          }}
                        >
                          {[pair.from, pair.to, pair.from].map((logo, lIdx) => (
                            <div
                              key={lIdx}
                              style={{
                                width: '134px',
                                height: '36px',
                                flexShrink: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}
                            >
                              <img
                                src={logo.img}
                                alt={logo.name}
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'contain',
                                  display: 'block'
                                }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* Hero Atmospheric Clouds */}
        <div className="about-hero-cloud-02">
          <img
            src={getAsset('badge-certified-craft.png')}
            alt="Cloud"
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
          />
        </div>
        <div className="about-hero-cloud-03">
          <img
            src={getAsset('badge-100-percent-metal.png')}
            alt="Cloud"
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
          />
        </div>
        <div className="about-hero-cloud-01">
          <img
            src={getAsset('badge-precision-engineered.png')}
            alt="Cloud"
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
          />
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. ABOUT SPLIT SECTION ("Our experience counts")               */}
      {/* ============================================================== */}
      <section className="about-split-section">
        <div className="about-section-container">
          <div className="about-split-row">
            {/* Left Image with Dark Overlay & Floating Badge Element */}
            <RevealOnScroll className="about-split-left">
              <div
                style={{
                  position: 'absolute',
                  inset: '-2px',
                  overflow: 'hidden'
                }}
              >
                {/* 40% Dark Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgb(19, 21, 21)',
                    opacity: 0.4,
                    zIndex: 2,
                    pointerEvents: 'none'
                  }}
                />
                <img
                  src={getAsset('about-craft-materials.jpg')}
                  alt="BG Image"
                  loading="lazy"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
              </div>

              {/* Floating Top-Right Element 02 */}
              <div
                style={{
                  position: 'absolute',
                  top: '40px',
                  right: '40px',
                  width: '139px',
                  aspectRatio: '139 / 137',
                  zIndex: 3,
                  pointerEvents: 'none'
                }}
              >
                <img
                  src={getAsset('about-craft-sparkle.png')}
                  alt="Phone"
                  loading="lazy"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </RevealOnScroll>

            {/* Right Text & CTA */}
            <div className="about-split-right">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '16px',
                  width: '100%'
                }}
              >
                <RevealOnScroll>
                  <PillBadge text="Our Experience" />
                </RevealOnScroll>

                <RevealOnScroll delay={0.06} style={{ width: '100%' }}>
                  <h2 className="about-section-h2">Our experience counts</h2>
                </RevealOnScroll>

                <RevealOnScroll delay={0.12} className="about-experience-paragraphs">
                  <p>
                    Our Clients’ needs for quality and innovation always come first. This is why we keep experimenting with technologies that help create smart card personalization solutions and ensure that clients orders are delivered on time.
                  </p>
                  <p>
                    This is the magic we help create at Xtreme Cardz and nothing thrills us more than watching clients’ brands gain better visibility as their Trump cards continue to redefine their success by inspiring locking down definite levels of trust in the minds of their target clients. This, for us, is perfection in itself.
                  </p>
                  <p>
                    Becoming the one-stop-shop for card personalization within and outside Africa is the vision that keeps guiding our operations. In addition to working with our efficient and dedicated team of qualified designers and strategists, we have taken significant steps in investing in machines that will produce only the highest of quality and standard Luxurious Cards.
                  </p>
                </RevealOnScroll>
              </div>

              <RevealOnScroll delay={0.18}>
                <button
                  type="button"
                  onClick={() => onOpenQuote && onOpenQuote('About Us - Reach out to us')}
                  style={{
                    backgroundColor: 'rgb(19, 21, 21)',
                    color: '#ffffff',
                    borderRadius: '100px',
                    padding: '16px 34px',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow:
                      '0px 4px 10px 0px rgba(19, 21, 21, 0.5), 0px 10px 35px 0px rgba(19, 21, 21, 0.5)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '18px',
                    fontWeight: 400,
                    lineHeight: '1.3em',
                    transition: 'transform 0.2s ease, opacity 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Reach out to us
                </button>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. COUNTER SECTION ("Xtremecardz in numbers" / "Why choose us") */}
      {/* ============================================================== */}
      <section className="about-counter-section">
        <div className="about-section-container">
          <div className="about-counter-row">
            {/* Left Column: Why choose us + 3 Slot Counters */}
            <div className="about-counter-left">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '10px',
                  width: '100%'
                }}
              >
                <RevealOnScroll>
                  <PillBadge text="Xtremecardz in numbers" />
                </RevealOnScroll>
                <RevealOnScroll delay={0.06} style={{ width: '100%' }}>
                  <h2 className="about-section-h2">Why choose us</h2>
                </RevealOnScroll>
              </div>

              <div className="about-counter-list">
                {COUNTER_ITEMS.map((item, idx) => (
                  <SlotCounterItem key={item.title} item={item} index={idx} />
                ))}
              </div>
            </div>

            {/* Right Column: 50,000+ Corporate cards produced + Earth & Clouds */}
            <RevealOnScroll delay={0.12} className="about-counter-right-card">
              <div className="about-counter-right-top">
                <div className="about-counter-big-num">50,000+</div>
                <PillBadge text="Corporate cards produced" />
              </div>

              <div className="about-counter-right-bottom">
                <div className="about-counter-earth">
                  <img
                    src={getAsset('about-craft-badge.png')}
                    alt="Earth"
                    loading="lazy"
                    style={{
                      display: 'block',
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      objectPosition: 'center'
                    }}
                  />
                </div>

                <div className="about-counter-cloud-01">
                  <img
                    src={getAsset('badge-100-percent-metal.png')}
                    alt="Cloud"
                    loading="lazy"
                    style={{
                      display: 'block',
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </div>

                <div className="about-counter-cloud-02">
                  <img
                    src={getAsset('about-craft-star.png')}
                    alt="Cloud"
                    loading="lazy"
                    style={{
                      display: 'block',
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. TEAM & TESTIMONIALS SECTION                                 */}
      {/* ============================================================== */}
      <section className="about-team-section">
        <div className="about-section-container">
          {/* White Team Box with Subtle Repeating Pattern */}
          <RevealOnScroll className="about-team-box">
            {/* Repeating Background Pattern */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                opacity: 0.5,
                zIndex: 1,
                pointerEvents: 'none',
                backgroundImage:
                  `url(${getAsset('about-earth-map.png')})`,
                backgroundRepeat: 'repeat',
                backgroundPosition: 'left top',
                backgroundSize: '1000px auto'
              }}
            />

            {/* Header */}
            <div
              style={{
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                width: '100%',
                maxWidth: '500px',
                textAlign: 'center'
              }}
            >
              <PillBadge text="Our Team" />
              <h2 className="about-section-h2" style={{ textAlign: 'center' }}>
                The people who drive the work
              </h2>
            </div>

            {/* 3 Team Members Grid */}
            <div className="about-team-grid">
              {TEAM_MEMBERS.map((member, idx) => (
                <TeamMemberCard key={member.name} member={member} index={idx} />
              ))}
            </div>
          </RevealOnScroll>

          {/* Testimonials Masonry Grid + View all Reviews */}
          <RevealOnScroll style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div
              className="about-testimonials-grid"
              style={{
                maxHeight: reviewsExpanded ? 'none' : '650px'
              }}
            >
              {TESTIMONIAL_COLUMNS.map((col, colIdx) => (
                <div
                  key={colIdx}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: '30px',
                    width: '100%'
                  }}
                >
                  {col.map((review) => (
                    <div key={review.name} className="about-testimonial-card">
                      <p
                        style={{
                          margin: 0,
                          fontFamily: 'var(--font-body)',
                          fontSize: '18px',
                          fontWeight: 400,
                          lineHeight: '1.3em',
                          color: 'rgb(73, 77, 77)'
                        }}
                      >
                        {review.quote}
                      </p>

                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          width: '100%'
                        }}
                      >
                        <div
                          style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            flexShrink: 0
                          }}
                        >
                          <img
                            src={review.avatar}
                            alt={review.name}
                            loading="lazy"
                            style={{
                              display: 'block',
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover'
                            }}
                          />
                        </div>

                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start'
                          }}
                        >
                          <p
                            style={{
                              margin: 0,
                              fontFamily: 'var(--font-heading)',
                              fontSize: '18px',
                              fontWeight: 500,
                              lineHeight: '1.3em',
                              color: 'rgb(19, 21, 21)'
                            }}
                          >
                            {review.name}
                          </p>
                          <p
                            style={{
                              margin: 0,
                              fontFamily: 'var(--font-body)',
                              fontSize: '14px',
                              fontWeight: 400,
                              lineHeight: '1.3em',
                              color: 'rgb(73, 77, 77)'
                            }}
                          >
                            {review.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}

              {/* Blur Fade Overlay & View all Reviews Button */}
              {!reviewsExpanded && (
                <>
                  <div
                    style={{
                      height: '300px',
                      width: '120%',
                      position: 'absolute',
                      bottom: '-180px',
                      left: '-10%',
                      backgroundColor: 'rgb(247, 247, 247)',
                      filter: 'blur(40px)',
                      WebkitFilter: 'blur(40px)',
                      zIndex: 1,
                      pointerEvents: 'none'
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setReviewsExpanded(true)}
                    style={{
                      position: 'absolute',
                      bottom: '50px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      zIndex: 2,
                      backgroundColor: 'rgb(19, 21, 21)',
                      color: '#ffffff',
                      padding: '16px 34px',
                      borderRadius: '100px',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow:
                        '0px 4px 10px 0px rgba(19, 21, 21, 0.5), 0px 10px 35px 0px rgba(19, 21, 21, 0.5)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '18px',
                      fontWeight: 400,
                      lineHeight: '1.3em',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    View all Reviews
                  </button>
                </>
              )}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. CTA SECTION ("Elevate Your Brand's First Impression")       */}
      {/* ============================================================== */}
      <ElevateCta onOpenQuote={onOpenQuote} />
    </div>
  );
}
