import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, Send, Phone, MessageCircle } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, initialCardType = 'Metal Business Card' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    cardType: initialCardType,
    quantity: '100 - 500 cards',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Lead directly to the contact number of Xtreme Cardz
    window.location.href = 'tel:+2348078009654';
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'max(12px, env(safe-area-inset-top, 12px)) max(12px, env(safe-area-inset-right, 12px)) max(12px, env(safe-area-inset-bottom, 12px)) max(12px, env(safe-area-inset-left, 12px))',
        backgroundColor: 'rgba(19, 21, 21, 0.65)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        animation: 'fadeIn 0.25s ease'
      }}
      onClick={onClose}
    >
      <style>{`
        .quote-grid-2col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        @media (max-width: 480px) {
          .quote-modal-card {
            padding: 24px 18px !important;
            border-radius: 18px !important;
          }
          .quote-grid-2col {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
        }
      `}</style>
      <div
        className="quote-modal-card"
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          maxWidth: '560px',
          width: '100%',
          padding: '36px',
          boxShadow: '0 25px 60px -10px rgba(0, 0, 0, 0.35)',
          position: 'relative',
          border: '1px solid rgba(19, 21, 21, 0.08)',
          maxHeight: 'min(92vh, 92dvh)',
          overflowY: 'auto',
          overscrollBehavior: 'contain',
          WebkitOverflowScrolling: 'touch'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: '#f3f2ef',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#131515',
            transition: 'all 0.2s ease'
          }}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '24px 8px' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'rgba(18, 167, 10, 0.1)',
                color: '#12a70a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}
            >
              <CheckCircle size={36} />
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#131515', marginBottom: '8px' }}>
              Connecting to Xtreme Cardz
            </h3>
            <p style={{ color: '#595e5e', fontSize: '14.5px', lineHeight: 1.55, maxWidth: '440px', margin: '0 auto 20px' }}>
              Thank you, <strong>{formData.name || 'there'}</strong>. We are directing you to our direct contact line. You can also reach our team immediately below:
            </p>

            {/* Prominent Contact Number Card */}
            <div
              style={{
                backgroundColor: '#f8f8f7',
                border: '1px solid rgba(19, 21, 21, 0.08)',
                borderRadius: '16px',
                padding: '20px',
                marginBottom: '20px'
              }}
            >
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#828787', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Xtreme Cardz Direct Line
              </span>
              <a
                href="tel:+2348078009654"
                style={{
                  display: 'block',
                  fontSize: '24px',
                  fontWeight: 700,
                  color: '#131515',
                  textDecoration: 'none',
                  margin: '6px 0 14px'
                }}
              >
                +234 807 800 9654
              </a>

              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href="tel:+2348078009654"
                  className="btn-primary"
                  style={{
                    padding: '10px 22px',
                    fontSize: '14px',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <Phone size={15} />
                  <span>Call Now</span>
                </a>
                <a
                  href={`https://wa.me/2348078009654?text=${encodeURIComponent(
                    `Hello Xtreme Cardz, I'm ${formData.name || 'a client'} requesting a quote for ${formData.cardType} (${formData.quantity}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '10px 22px',
                    fontSize: '14px',
                    textDecoration: 'none',
                    borderRadius: '50px',
                    backgroundColor: '#25D366',
                    color: '#ffffff',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <MessageCircle size={15} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                color: '#6c7171',
                fontSize: '13.5px',
                cursor: 'pointer',
                textDecoration: 'underline'
              }}
            >
              Close this window
            </button>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '24px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'rgba(207, 163, 75, 0.15)',
                  color: '#9e731b',
                  fontSize: '12px',
                  fontWeight: 600,
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  marginBottom: '10px'
                }}
              >
                <Sparkles size={14} /> Xtreme Distinction
              </div>
              <h3 style={{ fontSize: '28px', color: '#131515', marginBottom: '8px' }}>
                Get Your Custom Quote
              </h3>
              <p style={{ color: '#595e5e', fontSize: '14.5px' }}>
                Elevate your brand with precision-engineered metal, plastic, or smart NFC cards.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="quote-grid-2col">
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px', color: '#131515' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '10px',
                      border: '1px solid rgba(19, 21, 21, 0.12)',
                      fontSize: '14px',
                      outline: 'none',
                      backgroundColor: '#fbfbfb'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px', color: '#131515' }}>
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '10px',
                      border: '1px solid rgba(19, 21, 21, 0.12)',
                      fontSize: '14px',
                      outline: 'none',
                      backgroundColor: '#fbfbfb'
                    }}
                  />
                </div>
              </div>

              <div className="quote-grid-2col">
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px', color: '#131515' }}>
                    Organization / Brand
                  </label>
                  <input
                    type="text"
                    placeholder="Company name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '10px',
                      border: '1px solid rgba(19, 21, 21, 0.12)',
                      fontSize: '14px',
                      outline: 'none',
                      backgroundColor: '#fbfbfb'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px', color: '#131515' }}>
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '10px',
                      border: '1px solid rgba(19, 21, 21, 0.12)',
                      fontSize: '14px',
                      outline: 'none',
                      backgroundColor: '#fbfbfb'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px', color: '#131515' }}>
                  Card Category & Material
                </label>
                <select
                  value={formData.cardType}
                  onChange={(e) => setFormData({ ...formData, cardType: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '10px',
                    border: '1px solid rgba(19, 21, 21, 0.12)',
                    fontSize: '14px',
                    outline: 'none',
                    backgroundColor: '#fbfbfb',
                    cursor: 'pointer'
                  }}
                >
                  <option value="Metal Business Card (Gold / Matte Black / Gunmetal)">Metal Business Card (Gold / Matte Black / Gunmetal)</option>
                  <option value="Smart NFC Identity Card">Smart NFC Identity Card</option>
                  <option value="Executive Corporate ID">Executive Corporate ID</option>
                  <option value="VIP / Membership Club Card">VIP / Membership Club Card</option>
                  <option value="Du-Plex Custom Lustre Card">Du-Plex Custom Lustre Card</option>
                  <option value="High-Security Access Control Pass">High-Security Access Control Pass</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px', color: '#131515' }}>
                  Estimated Quantity
                </label>
                <select
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '10px',
                    border: '1px solid rgba(19, 21, 21, 0.12)',
                    fontSize: '14px',
                    outline: 'none',
                    backgroundColor: '#fbfbfb',
                    cursor: 'pointer'
                  }}
                >
                  <option value="1 - 50 cards (Executive/Sample batch)">1 - 50 cards (Executive/Sample batch)</option>
                  <option value="50 - 250 cards">50 - 250 cards</option>
                  <option value="250 - 1,000 cards">250 - 1,000 cards</option>
                  <option value="1,000+ cards (Enterprise / Organization roll-out)">1,000+ cards (Enterprise roll-out)</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px', color: '#131515' }}>
                  Specific Requirements or Finishes
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your brand colors, custom cutouts, frosted finishes, or NFC chip preferences..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '10px',
                    border: '1px solid rgba(19, 21, 21, 0.12)',
                    fontSize: '14px',
                    outline: 'none',
                    backgroundColor: '#fbfbfb',
                    resize: 'none'
                  }}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{
                  width: '100%',
                  padding: '14px',
                  marginTop: '6px'
                }}
              >
                <span>Submit Quote Request</span>
                <Send size={16} />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
