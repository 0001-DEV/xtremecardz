import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Send, CheckCircle2, ChevronDown, Clock, MapPin, Sparkles } from 'lucide-react';

const FAQS = [
  {
    q: 'What types of card materials and finishes do you offer?',
    a: 'We provide an extensive luxury and corporate lineup: Grade 5 Titanium, 316L Marine-grade stainless steel with 24K gold PVD, matte obsidian black, frosted brushed metal, high-gloss PVC, translucent polymer, eco-friendly bamboo wood, and high-definition smart hybrid cards.'
  },
  {
    q: 'How does the design and production process work?',
    a: 'You can either provide your print-ready vector files (AI, PDF, SVG) or collaborate directly with our in-house bespoke design team. Once digital proofs are approved, we create precision tooling, laser engraving, and chip encoding before rigorous quality assurance and white-glove packaging.'
  },
  {
    q: 'Can I integrate digital features like NFC or smart technology into my cards?',
    a: 'Yes, absolutely. Our cards feature cutting-edge NTAG216 high-frequency NFC microchips and RFID proximity coils. You can instantly share contact profiles, portfolio websites, social links, or integrate directly with your company’s door access and turnstile management systems.'
  },
  {
    q: 'What is the turnaround time for printing and delivery?',
    a: 'Standard corporate and PVC orders are produced within 3 to 5 business days. Bespoke metal, titanium, and laser-etched cards take 7 to 10 business days depending on order complexity and personalization depth. Express rush fulfillment is available on request.'
  },
  {
    q: 'Can you handle bulk corporate orders or custom VIP event passes?',
    a: 'Yes, we regularly manufacture bulk orders scaling from 25 to 50,000+ units for tier-one banks, real estate conglomerates, international summits, and private members clubs across Africa and worldwide.'
  }
];

export default function ContactPage({ onOpenQuote }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 800);
  };

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        color: '#131515',
        minHeight: '100vh',
        paddingTop: '130px',
        paddingBottom: '100px'
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px' }}>
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
            <Sparkles size={13} color="#0283a7" />
            <span>Contact us</span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(38px, 5.5vw, 62px)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: '#131515',
              marginBottom: '18px'
            }}
          >
            We’re here to help
          </h1>

          <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#494d4d', lineHeight: 1.6 }}>
            If you have questions, feedback, or need support, reach out and we’ll get back to you as soon as we can.
          </p>
        </div>

        {/* 2-Column Grid: Form + Direct Reach Info */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(32px, 5vw, 64px)',
            marginBottom: '100px'
          }}
        >
          {/* Direct Interactive Form */}
          <div
            style={{
              backgroundColor: '#f7f7f7',
              borderRadius: '28px',
              padding: 'clamp(28px, 4vw, 48px)',
              border: '1px solid rgba(19, 21, 21, 0.08)'
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '24px',
                fontWeight: 700,
                color: '#131515',
                marginBottom: '8px'
              }}
            >
              Send a message
            </h2>
            <p style={{ fontSize: '14.5px', color: '#666e6e', marginBottom: '28px' }}>
              Fill in your details and our team will get in touch within 2 business hours.
            </p>

            {submitted ? (
              <div
                style={{
                  backgroundColor: '#ecfdf5',
                  border: '1px solid #a7f3d0',
                  borderRadius: '16px',
                  padding: '24px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <CheckCircle2 size={36} color="#059669" />
                <div style={{ fontSize: '18px', fontWeight: 700, color: '#065f46' }}>
                  Message Received!
                </div>
                <div style={{ fontSize: '14px', color: '#047857' }}>
                  Thank you for reaching out. One of our identity concierge specialists is reviewing your enquiry and will reply shortly.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: '#131515', marginBottom: '6px' }}>
                    Your name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Adeyemi Adeleke"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '13px 16px',
                      borderRadius: '12px',
                      border: '1px solid rgba(19, 21, 21, 0.15)',
                      backgroundColor: '#ffffff',
                      fontSize: '15px',
                      fontFamily: 'inherit',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#000000')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(19, 21, 21, 0.15)')}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: '#131515', marginBottom: '6px' }}>
                    Email address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="adeyemi@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '13px 16px',
                      borderRadius: '12px',
                      border: '1px solid rgba(19, 21, 21, 0.15)',
                      backgroundColor: '#ffffff',
                      fontSize: '15px',
                      fontFamily: 'inherit',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#000000')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(19, 21, 21, 0.15)')}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: '#131515', marginBottom: '6px' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Custom Metal Cards / Bulk Corporate Order"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '13px 16px',
                      borderRadius: '12px',
                      border: '1px solid rgba(19, 21, 21, 0.15)',
                      backgroundColor: '#ffffff',
                      fontSize: '15px',
                      fontFamily: 'inherit',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#000000')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(19, 21, 21, 0.15)')}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: '#131515', marginBottom: '6px' }}>
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your project, quantity, preferred material, or timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '13px 16px',
                      borderRadius: '12px',
                      border: '1px solid rgba(19, 21, 21, 0.15)',
                      backgroundColor: '#ffffff',
                      fontSize: '15px',
                      fontFamily: 'inherit',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#000000')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(19, 21, 21, 0.15)')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    backgroundColor: '#000000',
                    color: '#ffffff',
                    padding: '15px 24px',
                    borderRadius: '50px',
                    fontSize: '15px',
                    fontWeight: 600,
                    fontFamily: 'var(--font-heading)',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
                    marginTop: '8px',
                    transition: 'opacity 0.2s ease'
                  }}
                >
                  <Send size={16} />
                  <span>{loading ? 'Sending message...' : 'Send a message'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Reach Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '24px',
                  fontWeight: 700,
                  color: '#131515',
                  marginBottom: '8px'
                }}
              >
                Reach us directly
              </h2>
              <p style={{ fontSize: '14.5px', color: '#666e6e', marginBottom: '24px' }}>
                We are available through multiple direct lines for rapid communication.
              </p>
            </div>

            {/* Phone Card */}
            <a
              href="tel:+2348078009654"
              style={{
                textDecoration: 'none',
                backgroundColor: '#f7f7f7',
                border: '1px solid rgba(19, 21, 21, 0.08)',
                borderRadius: '20px',
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
                transition: 'transform 0.2s ease, border-color 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = '#000000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(19, 21, 21, 0.08)';
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
                }}
              >
                <Phone size={22} color="#131515" />
              </div>
              <div>
                <div style={{ fontSize: '12.5px', fontWeight: 600, color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Support phone number
                </div>
                <div style={{ fontSize: '18px', fontWeight: 700, color: '#131515', marginTop: '2px' }}>
                  +234 807 800 9654
                </div>
              </div>
            </a>

            {/* Email Card */}
            <a
              href="mailto:hello@xtremecardz.com"
              style={{
                textDecoration: 'none',
                backgroundColor: '#f7f7f7',
                border: '1px solid rgba(19, 21, 21, 0.08)',
                borderRadius: '20px',
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
                transition: 'transform 0.2s ease, border-color 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = '#000000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(19, 21, 21, 0.08)';
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
                }}
              >
                <Mail size={22} color="#131515" />
              </div>
              <div>
                <div style={{ fontSize: '12.5px', fontWeight: 600, color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Support email
                </div>
                <div style={{ fontSize: '18px', fontWeight: 700, color: '#131515', marginTop: '2px' }}>
                  hello@xtremecardz.com
                </div>
              </div>
            </a>

            {/* Operating Hours Card */}
            <div
              style={{
                backgroundColor: '#f7f7f7',
                border: '1px solid rgba(19, 21, 21, 0.08)',
                borderRadius: '20px',
                padding: '24px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '18px'
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                  flexShrink: 0
                }}
              >
                <Clock size={22} color="#131515" />
              </div>
              <div>
                <div style={{ fontSize: '12.5px', fontWeight: 600, color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Operating hours
                </div>
                <div style={{ fontSize: '15.5px', fontWeight: 600, color: '#131515', marginTop: '4px' }}>
                  Monday – Saturday: 8:00 AM – 6:00 PM (GMT+1)
                </div>
                <div style={{ fontSize: '13.5px', color: '#059669', fontWeight: 500, marginTop: '4px' }}>
                  ● Concierge team online & responding
                </div>
              </div>
            </div>

            {/* Quick Instant Quote CTA */}
            <div
              style={{
                backgroundColor: '#131515',
                color: '#ffffff',
                borderRadius: '20px',
                padding: '24px',
                textAlign: 'center'
              }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>
                Need an immediate custom quote?
              </h3>
              <p style={{ fontSize: '14px', color: '#a1a1aa', marginBottom: '16px' }}>
                Use our automated specification calculator to get exact pricing right away.
              </p>
              <button
                onClick={() => onOpenQuote('Contact Page Instant Calculator')}
                style={{
                  backgroundColor: '#ffffff',
                  color: '#131515',
                  padding: '12px 24px',
                  borderRadius: '50px',
                  fontSize: '14px',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Open Instant Quote Calculator
              </button>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* Integrated FAQ Accordion Section                      */}
        {/* ---------------------------------------------------- */}
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ fontSize: '12.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#0283a7', marginBottom: '8px' }}>
              Common questions
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(28px, 3.5vw, 40px)',
                fontWeight: 700,
                color: '#131515',
                letterSpacing: '-0.02em'
              }}
            >
              Frequently asked questions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#f7f7f7',
                    border: '1px solid rgba(19, 21, 21, 0.08)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontFamily: 'inherit'
                    }}
                  >
                    <span style={{ fontSize: '16.5px', fontWeight: 600, color: '#131515' }}>
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      color="#494d4d"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 0.3s ease',
                        flexShrink: 0,
                        marginLeft: '16px'
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: '0 24px 22px',
                        fontSize: '15px',
                        lineHeight: 1.7,
                        color: '#494d4d',
                        borderTop: '1px solid rgba(19, 21, 21, 0.05)',
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
      </div>
    </div>
  );
}
