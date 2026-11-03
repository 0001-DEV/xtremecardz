import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const InstagramIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export default function Footer({ onOpenQuote }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 4000);
  };

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Elite pass', href: '/elitepass' },
    { label: 'Blog', href: '/blog' }
  ];

  const supportLinks = [
    { label: 'About us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/about' },
    { label: 'Terms & Conditions', href: '/about' }
  ];

  const socials = [
    { name: 'Instagram', href: 'https://www.instagram.com/', icon: <InstagramIcon /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/', icon: <LinkedinIcon /> },
    { name: 'Facebook', href: 'https://www.facebook.com', icon: <FacebookIcon /> }
  ];

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-page)',
        borderTop: '1px solid rgba(19, 21, 21, 0.08)',
        paddingTop: '80px',
        paddingBottom: '48px',
        position: 'relative',
        color: '#131515'
      }}
    >
      <style>{`
        .footer-grid-layout {
          display: grid;
          grid-template-columns: minmax(320px, 1.8fr) minmax(140px, 1fr) minmax(160px, 1fr);
          gap: 60px;
          margin-bottom: 64px;
        }

        @media (max-width: 900px) {
          .footer-grid-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>

      <div className="container">
        {/* Main Columns Grid */}
        <div className="footer-grid-layout">
          {/* ------------------------------------------------------------ */}
          {/* Left Column: Brand, Stay on top of your identity & Form      */}
          {/* ------------------------------------------------------------ */}
          <div>
            {/* Brand Logo & Name */}
            <a
              href="https://xtremecrdss.framer.website/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none',
                color: '#131515',
                marginBottom: '20px'
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #131515 0%, #2b3030 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(19, 21, 21, 0.15)'
                }}
              >
                <span style={{ color: '#cfa34b', fontWeight: 800, fontSize: '17px' }}>X</span>
              </div>
              <span
                style={{
                  fontSize: '20px',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  color: '#131515'
                }}
              >
                Xtreme cards.
              </span>
            </a>

            {/* Stay on top of your identity */}
            <h3
              style={{
                fontSize: '18px',
                fontWeight: 700,
                color: '#131515',
                lineHeight: 1.3,
                margin: '0 0 8px 0',
                letterSpacing: '-0.01em'
              }}
            >
              Stay on top of your identity.
            </h3>

            {/* No spam. Just simple advice for staying consistent with your ID. */}
            <p
              style={{
                fontSize: '14.5px',
                color: '#494d4d',
                lineHeight: 1.55,
                maxWidth: '380px',
                margin: '0 0 24px 0'
              }}
            >
              No spam. Just simple advice for staying consistent with your ID.
            </p>

            {/* Newsletter input & subscribe button */}
            {subscribed ? (
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(18, 167, 10, 0.08)',
                  color: '#12a70a',
                  padding: '12px 20px',
                  borderRadius: '100px',
                  fontSize: '14px',
                  fontWeight: 600,
                  border: '1px solid rgba(18, 167, 10, 0.2)'
                }}
              >
                <CheckCircle2 size={16} />
                <span>Thank you! You are subscribed.</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  maxWidth: '400px',
                  width: '100%'
                }}
              >
                <input
                  type="email"
                  required
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '13px 20px',
                    borderRadius: '100px',
                    border: '1px solid rgba(19, 21, 21, 0.1)',
                    backgroundColor: '#f2f2f2',
                    fontSize: '14px',
                    color: '#131515',
                    outline: 'none',
                    transition: 'border-color 0.2s ease, background-color 0.2s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(19, 21, 21, 0.3)';
                    e.target.style.backgroundColor = '#ffffff';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(19, 21, 21, 0.1)';
                    e.target.style.backgroundColor = '#f2f2f2';
                  }}
                />
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#131515',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '100px',
                    padding: '13px 26px',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(19, 21, 21, 0.25)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(19, 21, 21, 0.35)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 14px rgba(19, 21, 21, 0.25)';
                  }}
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          {/* ------------------------------------------------------------ */}
          {/* Middle Column: Quick links                                   */}
          {/* ------------------------------------------------------------ */}
          <div>
            <h4
              style={{
                fontSize: '14px',
                fontWeight: 700,
                color: '#131515',
                margin: '0 0 20px 0',
                letterSpacing: '-0.01em'
              }}
            >
              Quick links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  style={{
                    fontSize: '14.5px',
                    color: '#494d4d',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#131515')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#494d4d')}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* Right Column: Support                                        */}
          {/* ------------------------------------------------------------ */}
          <div>
            <h4
              style={{
                fontSize: '14px',
                fontWeight: 700,
                color: '#131515',
                margin: '0 0 20px 0',
                letterSpacing: '-0.01em'
              }}
            >
              Support
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {supportLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  style={{
                    fontSize: '14.5px',
                    color: '#494d4d',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#131515')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#494d4d')}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------ */}
        {/* Bottom Bar: Copyright & Socials                             */}
        {/* ------------------------------------------------------------ */}
        <div
          style={{
            borderTop: '1px solid rgba(19, 21, 21, 0.08)',
            paddingTop: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px'
          }}
        >
          <div
            style={{
              fontSize: '14px',
              color: '#494d4d'
            }}
          >
            ©2026 Xtreme cards. All rights reserved
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {socials.map((s, idx) => (
              <a
                key={idx}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: '#e8e8e8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#131515',
                  transition: 'background-color 0.2s ease, transform 0.2s ease, color 0.2s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#131515';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#e8e8e8';
                  e.currentTarget.style.color = '#131515';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
