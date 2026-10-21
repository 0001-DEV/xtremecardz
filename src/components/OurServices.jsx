import React from 'react';
import { ArrowRight, Sparkles, Award, CreditCard, ShieldCheck, Crown } from 'lucide-react';

const SERVICES = [
  {
    id: 1,
    title: 'Executive cards design & print',
    desc: 'Designed for leaders, board members, and executives who represent your organization at high-stakes forums.',
    icon: Award,
    color: '#cfa34b',
    highlight: 'C-Suite Tier'
  },
  {
    id: 2,
    title: 'Business card design & print',
    desc: 'Premium cards designed to make your brand memorable. Heavy cardstocks, metallics, and precision foil details.',
    icon: CreditCard,
    color: '#0283a7',
    highlight: 'Brand Standard'
  },
  {
    id: 3,
    title: 'Membership card design & print',
    desc: 'Designed to make belonging feel official, tangible, and worthy of keeping for private clubs and organizations.',
    icon: ShieldCheck,
    color: '#12a70a',
    highlight: 'Member Passes'
  },
  {
    id: 4,
    title: 'VIP card design & print',
    desc: 'Premium cards for people who deserve more. Bespoke 24K gold plating, serial numbering, and RFID access privileges.',
    icon: Crown,
    color: '#ff9803',
    highlight: 'Exclusive Access'
  }
];

export default function OurServices({ onOpenQuote }) {
  return (
    <section
      id="services"
      style={{
        paddingTop: '60px',
        paddingBottom: '80px',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
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
            <Sparkles size={14} />
            <span>End-to-End Excellence</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(32px, 4.2vw, 48px)',
              fontWeight: 700,
              maxWidth: '820px',
              margin: '0 auto 16px',
              lineHeight: 1.15,
              color: '#131515'
            }}
          >
            Our services
          </h2>

          <p
            style={{
              fontSize: '16.5px',
              color: '#595e5e',
              maxWidth: '620px',
              margin: '0 auto',
              lineHeight: 1.6
            }}
          >
            From creative design consultation and digital prototyping to precision CNC manufacturing and delivery.
          </p>
        </div>

        {/* 4 Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px'
          }}
        >
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '24px',
                  padding: '32px 28px',
                  border: '1px solid rgba(19, 21, 21, 0.08)',
                  boxShadow: 'var(--shadow-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)';
                  e.currentTarget.style.borderColor = 'rgba(19, 21, 21, 0.16)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                  e.currentTarget.style.borderColor = 'rgba(19, 21, 21, 0.08)';
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '20px'
                    }}
                  >
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '14px',
                        backgroundColor: '#131515',
                        color: s.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 6px 14px rgba(19, 21, 21, 0.15)'
                      }}
                    >
                      <Icon size={22} />
                    </div>

                    <span
                      style={{
                        fontSize: '11.5px',
                        fontWeight: 600,
                        color: '#686d6d',
                        backgroundColor: '#f6f5f2',
                        padding: '4px 10px',
                        borderRadius: '50px'
                      }}
                    >
                      {s.highlight}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '20px',
                      fontWeight: 700,
                      color: '#131515',
                      marginBottom: '10px',
                      lineHeight: 1.3
                    }}
                  >
                    {s.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '14.5px',
                      color: '#595e5e',
                      lineHeight: 1.6,
                      marginBottom: '24px'
                    }}
                  >
                    {s.desc}
                  </p>
                </div>

                <div>
                  <button
                    onClick={() => onOpenQuote(`Service: ${s.title}`)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '13.5px',
                      fontWeight: 600,
                      color: '#131515',
                      padding: '8px 0',
                      borderBottom: '1px solid rgba(19, 21, 21, 0.3)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <span>Request proposal</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
