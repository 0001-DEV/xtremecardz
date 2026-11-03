import React, { useState } from 'react';
import { Plus, Minus, MessageCircle } from 'lucide-react';

const FAQS = [
  {
    q: 'What types of card materials and finishes do you offer?',
    a: 'We specialize in luxury and durable card solutions, including stainless steel metals (Gold, Gun Metal, Brushed & Frosted Stainless Steel), eco-friendly bamboo, premium PVC plastic, and advanced smart/NFC options.'
  },
  {
    q: 'How does the design and production process work?',
    a: 'Our workflow moves through three seamless stages: first, client experience and brand strategy consultation; second, creative design creation for your review and approval; and third, high-precision local production and shipping.'
  },
  {
    q: 'Can I integrate digital features like NFC or smart technology into my cards?',
    a: 'Yes! We offer cutting-edge smart cards (such as NFC-enabled business cards, access control cards, and multifunctional e-cards) that merge physical elegance with digital connectivity.'
  },
  {
    q: 'What kinds of metal thicknesses are available?',
    a: 'We offer a complete line of .3, .5, .8, 1, and 1.5mm thick stainless steel, plus additional finishes including brass, copper and cards made of aluminum. Call or write today for a quote on these custom thicknesses and finishes.'
  },
  {
    q: 'Can you handle bulk corporate orders or custom VIP event passes?',
    a: 'Absolutely. We cater to businesses, government agencies, and exclusive events, producing tailored employee ID cards, membership cards, access control badges, and luxury VIP event invites.'
  }
];

export default function FaqAccordion({ onOpenQuote }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      id="faq"
      style={{
        paddingTop: '55px',
        paddingBottom: '20px',
        position: 'relative'
      }}
    >
      <style>{`
        .faq-split-layout {
          display: grid;
          grid-template-columns: 400px 1fr;
          gap: 60px;
          align-items: start;
        }

        .faq-bold-heading {
          font-weight: 700 !important;
          font-synthesis: weight;
        }

        .faq-left-col {
          position: sticky;
          top: 100px;
        }

        @keyframes faqExpandFade {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 980px) {
          .faq-split-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .faq-left-col {
            position: static;
          }
        }
      `}</style>

      <div className="container">
        <div className="faq-split-layout">
          {/* ============================================================== */}
          {/* LEFT SIDE: Badge, Title & Can't find your answer CTA          */}
          {/* ============================================================== */}
          <div className="faq-left-col">
            {/* Common questions Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '6px 16px',
                borderRadius: '50px',
                backgroundColor: '#ffffff',
                border: '1px solid rgba(19, 21, 21, 0.08)',
                fontSize: '13px',
                fontWeight: 600,
                color: '#131515',
                boxShadow: '0 2px 8px rgba(19, 21, 21, 0.03)',
                marginBottom: '20px'
              }}
            >
              <span>Common questions</span>
            </div>

            {/* Frequently asked questions Headline */}
            <h2
              className="faq-bold-heading"
              style={{
                fontSize: 'clamp(38px, 4.4vw, 54px)',
                color: '#131515',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                margin: '0 0 20px 0'
              }}
            >
              Frequently
              <br />
              asked questions
            </h2>

            {/* Can't find your answer? Contact us */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                padding: '28px',
                border: '1px solid rgba(19, 21, 21, 0.08)',
                boxShadow: '0 8px 24px rgba(19, 21, 21, 0.04)',
                marginTop: '32px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '16px'
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: '#f4f2f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#131515'
                }}
              >
                <MessageCircle size={20} />
              </div>

              <div>
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#131515',
                    margin: '0 0 8px 0',
                    letterSpacing: '-0.01em'
                  }}
                >
                  Can&apos;t find your answer?
                </h3>
                <p
                  style={{
                    fontSize: '16px',
                    color: '#595e5e',
                    lineHeight: 1.6,
                    margin: 0
                  }}
                >
                  Have a custom inquiry, special finish request, or bulk timeline? Reach out to our specialist card team directly.
                </p>
              </div>

              <button
                onClick={() => (onOpenQuote ? onOpenQuote('FAQ Support Inquiry') : null)}
                style={{
                  backgroundColor: '#131515',
                  color: '#ffffff',
                  borderRadius: '100px',
                  padding: '13px 28px',
                  fontSize: '15.5px',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  boxShadow: '0 4px 14px rgba(19, 21, 21, 0.2)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(19, 21, 21, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(19, 21, 21, 0.2)';
                }}
              >
                <span>Contact us</span>
              </button>
            </div>
          </div>

          {/* ============================================================== */}
          {/* RIGHT SIDE: The Accordion Questions                            */}
          {/* ============================================================== */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '20px',
                    border: isOpen ? '1px solid rgba(19, 21, 21, 0.2)' : '1px solid rgba(19, 21, 21, 0.08)',
                    boxShadow: isOpen
                      ? '0 12px 32px -4px rgba(19, 21, 21, 0.08)'
                      : '0 2px 10px rgba(19, 21, 21, 0.02)',
                    overflow: 'hidden',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  <button
                    onClick={() => toggle(i)}
                    style={{
                      width: '100%',
                      padding: '24px 28px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      gap: '20px',
                      cursor: 'pointer',
                      background: 'transparent',
                      border: 'none'
                    }}
                    aria-expanded={isOpen}
                  >
                    <span
                      style={{
                        fontSize: '17px',
                        fontWeight: 700,
                        color: '#131515',
                        fontFamily: 'var(--font-heading)',
                        lineHeight: 1.35,
                        letterSpacing: '-0.01em'
                      }}
                    >
                      {faq.q}
                    </span>

                    <div
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '50%',
                        backgroundColor: isOpen ? '#131515' : '#f3f2ef',
                        color: isOpen ? '#ffffff' : '#131515',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                        transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)'
                      }}
                    >
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: '0 28px 24px 28px',
                        color: '#595e5e',
                        fontSize: '15px',
                        lineHeight: 1.65,
                        borderTop: '1px solid rgba(19, 21, 21, 0.05)',
                        paddingTop: '18px',
                        animation: 'faqExpandFade 0.25s ease'
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
