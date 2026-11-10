import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm4.5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm5.25-3.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z"
    />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
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
    { name: 'Facebook', href: 'https://www.facebook.com/', icon: <FacebookIcon /> },
    { name: 'Twitter', href: 'https://twitter.com/', icon: <TwitterIcon /> }
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
                Xtreme Cardz.
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
            ©2026 Xtreme Cardz. All rights reserved
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {socials.map((s, idx) => (
              <a
                key={idx}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#131515',
                  backgroundColor: 'transparent',
                  transition: 'transform 0.2s ease, opacity 0.2s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.7';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
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
