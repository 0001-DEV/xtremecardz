import React, { useState } from 'react';
import { Sparkles, Layers, Palette, ShieldCheck, Fingerprint, Clock, Check } from 'lucide-react';

const PILLARS = [
  {
    id: 'material',
    title: 'Material',
    icon: Layers,
    color: '#cfa34b',
    summary: 'Solid Foundation',
    desc: 'From marine-grade 316L stainless steel to eco-conscious bamboo and multi-layer PVC, every card starts with tactile heft and structural permanence.'
  },
  {
    id: 'design',
    title: 'Design',
    icon: Palette,
    color: '#0283a7',
    summary: 'Executive Layouts',
    desc: 'Precision typography and bespoke negative-space cutouts engineered specifically to align with your organization brand guidelines.'
  },
  {
    id: 'finish',
    title: 'Finish',
    icon: Sparkles,
    color: '#ff9803',
    summary: 'Signature Luster',
    desc: '24K gold mirror plating, matte vapor deposition, tactile chemical etching, and satin-frosted finishes that feel unmistakably distinctive.'
  },
  {
    id: 'identity',
    title: 'Identity',
    icon: Fingerprint,
    color: '#12a70a',
    summary: 'Smart Connectivity',
    desc: 'Embedded NFC microchips and cloud-synchronized digital profiles allow instantaneous contact sharing and multi-door facility access.'
  }
];

const ROUTINE_PILLS = [
  { label: 'Stretch routine', time: '8:00 AM' },
  { label: 'Plan tomorrow', time: '5:30 PM' },
  { label: 'Morning walk', time: '7:15 AM' },
  { label: 'Drink 3 glasses of water', time: 'All day' },
  { label: 'Deep work session', time: '10:00 AM' },
  { label: 'Read 10 pages', time: '9:00 PM' }
];

export default function SmartIdFormula({ onOpenQuote }) {
  const [activePillar, setActivePillar] = useState(PILLARS[0]);

  return (
    <section
      id="formula"
      style={{
        paddingTop: '60px',
        paddingBottom: '80px',
        position: 'relative'
      }}
    >
      <div className="container">
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
              color: '#cfa34b',
              boxShadow: '0 4px 12px rgba(19, 21, 21, 0.03)',
              marginBottom: '16px'
            }}
          >
            <Sparkles size={14} />
            <span>The Xtremecardz Premium Formula!</span>
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
            Smart ID formula
          </h2>

          <p
            style={{
              fontSize: '16.5px',
              color: '#595e5e',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.6
            }}
          >
            A simple view that shows how we structure corporate cards to match your organization's prestige and personality.
          </p>
        </div>

        {/* 4 Pillars Interactive Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginBottom: '40px'
          }}
        >
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            const isSelected = activePillar.id === pillar.id;

            return (
              <div
                key={pillar.id}
                onClick={() => setActivePillar(pillar)}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '20px',
                  padding: '28px',
                  border: isSelected ? `2px solid ${pillar.color}` : '1px solid rgba(19, 21, 21, 0.08)',
                  boxShadow: isSelected ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: isSelected ? '#131515' : '#f6f5f2',
                    color: pillar.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <Icon size={22} />
                </div>

                <span style={{ fontSize: '12px', fontWeight: 700, color: pillar.color, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {pillar.summary}
                </span>

                <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#131515', margin: '4px 0 10px' }}>
                  {pillar.title}
                </h3>

                <p style={{ fontSize: '14px', color: '#595e5e', lineHeight: 1.55 }}>
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Dynamic Lifestyle Notification Pills Bar */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            padding: '24px 28px',
            border: '1px solid rgba(19, 21, 21, 0.08)',
            boxShadow: 'var(--shadow-card)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(2, 131, 167, 0.1)',
                color: '#0283a7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Clock size={18} />
            </div>
            <div>
              <span style={{ fontSize: '14px', fontWeight: 700, color: '#131515', display: 'block' }}>
                Adapts to your executive day
              </span>
              <span style={{ fontSize: '12.5px', color: '#686d6d' }}>
                Seamless routine integration from morning arrival to VIP events
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {ROUTINE_PILLS.map((pill) => (
              <span
                key={pill.label}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  backgroundColor: '#f6f5f2',
                  borderRadius: '50px',
                  fontSize: '12.5px',
                  color: '#494d4d',
                  fontWeight: 500,
                  border: '1px solid rgba(19, 21, 21, 0.06)'
                }}
              >
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#0283a7' }}></span>
                {pill.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
