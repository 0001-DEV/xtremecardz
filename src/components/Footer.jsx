import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Send } from 'lucide-react';

export default function Footer({ onOpenQuote }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 3000);
  };

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Products', href: '#products' },
    { label: 'Elite pass', href: '#products' },
    { label: 'Blog', href: '#' },
    { label: 'Support', href: '#faq' }
  ];

  const companyLinks = [
    { label: 'About us', href: '#features' },
    { label: 'Contact', href: '#hero' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms & Conditions', href: '#' }
  ];

  return (
    <footer
      style={{
        backgroundColor: '#ffffff',
        borderTop: '1px solid rgba(19, 21, 21, 0.08)',
        paddingTop: '70px',
        paddingBottom: '40px',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Top Newsletter & Brand Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px',
            marginBottom: '60px'
          }}
        >
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #131515 0%, #2b3030 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <span style={{ color: '#cfa34b', fontWeight: 800, fontSize: '15px' }}>X</span>
              </div>
              <span style={{ fontSize: '18px', fontWeight: 700, color: '#131515' }}>Xtreme cards</span>
            </div>

            <p style={{ fontSize: '15px', color: '#131515', fontWeight: 600, marginBottom: '6px' }}>
              Stay on top of your identity.
            </p>
            <p style={{ fontSize: '13.5px', color: '#595e5e', lineHeight: 1.5, maxWidth: '320px' }}>
              No spam. Just simple advice and insights for staying consistent with your executive ID.
            </p>
          </div>

          {/* Newsletter Box */}
          <div>
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#131515', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '12px' }}>
              Newsletter
            </span>

            {subscribed ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(18, 167, 10, 0.1)',
                  color: '#12a70a',
                  padding: '12px 18px',
                  borderRadius: '12px',
                  fontSize: '14px',
                  fontWeight: 600
                }}
              >
                <CheckCircle2 size={18} />
                <span>Thank you! You are subscribed.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '8px', maxWidth: '420px' }}>
                <input
                  type="email"
                  required
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '12px 16px',
                    borderRadius: '50px',
                    border: '1px solid rgba(19, 21, 21, 0.12)',
                    fontSize: '14px',
                    outline: 'none',
                    backgroundColor: '#fbfbfb'
                  }}
                />
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ padding: '12px 22px', fontSize: '13.5px' }}
                >
                  <span>Subscribe</span>
                </button>
              </form>
            )}
          </div>

          {/* Quick Links Column */}
          <div>
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#131515', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '12px' }}>
              Quick links
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{ fontSize: '14px', color: '#595e5e', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#131515')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#595e5e')}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Company Column */}
          <div>
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#131515', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '12px' }}>
              Company
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {companyLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{ fontSize: '14px', color: '#595e5e', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#131515')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#595e5e')}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Row */}
        <div
          style={{
            borderTop: '1px solid rgba(19, 21, 21, 0.06)',
            paddingTop: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '14px',
            fontSize: '13px',
            color: '#8e9494'
          }}
        >
          <div>
            © 2026 Xtreme cards. All rights reserved.
          </div>

          <div style={{ display: 'flex', gap: '18px' }}>
            <a href="#" style={{ color: '#8e9494', transition: 'color 0.2s' }}>
              Twitter / X
            </a>
            <a href="#" style={{ color: '#8e9494', transition: 'color 0.2s' }}>
              LinkedIn
            </a>
            <a href="#" style={{ color: '#8e9494', transition: 'color 0.2s' }}>
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
