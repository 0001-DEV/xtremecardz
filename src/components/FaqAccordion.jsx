import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, Sparkles, MessageCircle } from 'lucide-react';

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
        paddingTop: '80px',
        paddingBottom: '80px',
        position: 'relative'
      }}
    >
      <div className="container" style={{ maxWidth: '860px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 16px',
              borderRadius: '50px',
              backgroundColor: '#ffffff',
              border: '1px solid rgba(19, 21, 21, 0.08)',
              fontSize: '13px',
              fontWeight: 600,
              color: '#0283a7',
              boxShadow: '0 4px 12px rgba(19, 21, 21, 0.03)',
              marginBottom: '16px'
            }}
          >
            <HelpCircle size={14} />
            <span>Common questions</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(32px, 4.2vw, 48px)',
              fontWeight: 700,
              color: '#131515',
              lineHeight: 1.15,
              marginBottom: '14px'
            }}
          >
            Frequently asked questions
          </h2>

          <p style={{ fontSize: '15.5px', color: '#595e5e' }}>
            Can't find your answer?{' '}
            <button
              onClick={() => onOpenQuote('FAQ Support Inquiry')}
              style={{
                color: '#131515',
                fontWeight: 600,
                textDecoration: 'underline',
                cursor: 'pointer'
              }}
            >
              Contact our card team
            </button>
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '20px',
                  border: isOpen ? '1px solid rgba(19, 21, 21, 0.2)' : '1px solid rgba(19, 21, 21, 0.08)',
                  boxShadow: isOpen ? '0 10px 30px -4px rgba(19, 21, 21, 0.08)' : '0 2px 8px rgba(19, 21, 21, 0.02)',
                  overflow: 'hidden',
                  transition: 'all 0.25s ease'
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
                    gap: '16px',
                    cursor: 'pointer'
                  }}
                  aria-expanded={isOpen}
                >
                  <span
                    style={{
                      fontSize: '17px',
                      fontWeight: 700,
                      color: '#131515',
                      fontFamily: 'var(--font-heading)',
                      lineHeight: 1.35
                    }}
                  >
                    {faq.q}
                  </span>

                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: isOpen ? '#131515' : '#f3f2ef',
                      color: isOpen ? '#ffffff' : '#131515',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.25s ease'
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
                      animation: 'fadeIn 0.2s ease',
                      borderTop: '1px solid rgba(19, 21, 21, 0.04)',
                      paddingTop: '16px'
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
    </section>
  );
}
