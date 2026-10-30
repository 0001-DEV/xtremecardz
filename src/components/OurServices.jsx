import React from 'react';
import { Award, CreditCard, ShieldCheck, Crown } from 'lucide-react';

const SERVICES = [
  {
    id: 1,
    title: 'Executive cards design & print',
    desc: 'Designed for people who represent your organization.',
    icon: Award,
    color: '#cfa34b',
    bg: 'rgba(207, 163, 75, 0.1)'
  },
  {
    id: 2,
    title: 'Business card design & print',
    desc: 'Premium cards designed to make your brand memorable.',
    icon: CreditCard,
    color: '#0283a7',
    bg: 'rgba(2, 131, 167, 0.1)'
  },
  {
    id: 3,
    title: 'Membership card design & print',
    desc: 'Designed to make belonging feel official, and worthy of keeping',
    icon: ShieldCheck,
    color: '#12a70a',
    bg: 'rgba(18, 167, 10, 0.1)'
  },
  {
    id: 4,
    title: 'VIP card design & print',
    desc: 'Premium cards for people who deserve more.',
    icon: Crown,
    color: '#ff9803',
    bg: 'rgba(255, 152, 3, 0.1)'
  }
];

export default function OurServices({ onOpenQuote }) {
  return (
    <section
      id="services"
      style={{
        paddingTop: '80px',
        paddingBottom: '80px',
        position: 'relative',
        backgroundColor: '#ffffff'
      }}
    >
      <div className="container">
        {/* Section Headline: Our services in a bold and big font */}
        <div style={{ marginBottom: '44px' }}>
          <h2
            style={{
              fontSize: 'clamp(32px, 4.4vw, 52px)',
              fontWeight: 800,
              color: '#131515',
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              margin: 0
            }}
          >
            Our services
          </h2>
        </div>

        {/* Four Column Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            alignItems: 'stretch'
          }}
        >
          {SERVICES.map((srv) => {
            const IconComponent = srv.icon;

            return (
              <div
                key={srv.id}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '24px',
                  border: '1px solid rgba(19, 21, 21, 0.08)',
                  padding: '36px 28px',
                  boxShadow: '0 10px 30px rgba(19, 21, 21, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  transition: 'all 0.35s cubic-bezier(0.25, 1, 0.5, 1)',
                  cursor: 'pointer',
                  position: 'relative'
                }}
                onClick={() => onOpenQuote && onOpenQuote(`Inquiry: ${srv.title}`)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(19, 21, 21, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(19, 21, 21, 0.16)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(19, 21, 21, 0.04)';
                  e.currentTarget.style.borderColor = 'rgba(19, 21, 21, 0.08)';
                }}
              >
                {/* Icon on the top left in the card */}
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    backgroundColor: srv.bg,
                    color: srv.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '28px'
                  }}
                >
                  <IconComponent size={24} />
                </div>

                {/* Card Title */}
                <h3
                  style={{
                    fontSize: '19px',
                    fontWeight: 750,
                    color: '#131515',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.3,
                    marginBottom: '12px'
                  }}
                >
                  {srv.title}
                </h3>

                {/* Card Description */}
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.6,
                    color: '#595e5e',
                    fontWeight: 450,
                    margin: 0
                  }}
                >
                  {srv.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
