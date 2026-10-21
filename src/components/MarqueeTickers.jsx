import React from 'react';
import { CreditCard, Sparkles, Shield, Cpu, Award, Layers } from 'lucide-react';

const TICKER_ITEMS_1 = [
  { label: 'Premium business card', icon: CreditCard, color: '#cfa34b' },
  { label: 'Executive business card', icon: Award, color: '#0283a7' },
  { label: 'Metal business card', icon: Sparkles, color: '#d4af37' },
  { label: 'Smart business card', icon: Cpu, color: '#12a70a' },
  { label: 'VIP/membership card', icon: Shield, color: '#ff4c00' },
  { label: 'Custom card finishes', icon: Layers, color: '#9000ff' }
];

const TICKER_ITEMS_2 = [
  { label: 'Du-plex smart card', icon: Cpu, color: '#0059ff' },
  { label: 'Classic lustre card', icon: Sparkles, color: '#cfa34b' },
  { label: 'Brushed metal finish', icon: CreditCard, color: '#686d6d' },
  { label: 'NFC Contactless ID', icon: Shield, color: '#0283a7' },
  { label: '24K Gold Plated pass', icon: Award, color: '#d4af37' },
  { label: 'Matte Gunmetal black', icon: Layers, color: '#131515' }
];

export default function MarqueeTickers({ onSelectType }) {
  return (
    <section
      style={{
        paddingTop: '20px',
        paddingBottom: '30px',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {/* Top Ticker: Left Scroll */}
        <div className="marquee-wrapper">
          <div className="marquee-content marquee-left">
            {[...TICKER_ITEMS_1, ...TICKER_ITEMS_1, ...TICKER_ITEMS_1].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={`t1-${idx}`}
                  onClick={() => onSelectType && onSelectType(item.label)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 22px',
                    backgroundColor: '#ffffff',
                    borderRadius: '50px',
                    border: '1px solid rgba(19, 21, 21, 0.08)',
                    boxShadow: '0 4px 14px rgba(19, 21, 21, 0.03)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.borderColor = 'rgba(19, 21, 21, 0.2)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(19, 21, 21, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.borderColor = 'rgba(19, 21, 21, 0.08)';
                    e.currentTarget.style.boxShadow = '0 4px 14px rgba(19, 21, 21, 0.03)';
                  }}
                >
                  <span
                    style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(19, 21, 21, 0.04)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: item.color
                    }}
                  >
                    <Icon size={14} />
                  </span>
                  <span
                    style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#131515',
                      fontFamily: 'var(--font-heading)',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Ticker: Right Scroll */}
        <div className="marquee-wrapper">
          <div className="marquee-content marquee-right">
            {[...TICKER_ITEMS_2, ...TICKER_ITEMS_2, ...TICKER_ITEMS_2].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={`t2-${idx}`}
                  onClick={() => onSelectType && onSelectType(item.label)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 22px',
                    backgroundColor: '#ffffff',
                    borderRadius: '50px',
                    border: '1px solid rgba(19, 21, 21, 0.08)',
                    boxShadow: '0 4px 14px rgba(19, 21, 21, 0.03)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.borderColor = 'rgba(19, 21, 21, 0.2)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(19, 21, 21, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.borderColor = 'rgba(19, 21, 21, 0.08)';
                    e.currentTarget.style.boxShadow = '0 4px 14px rgba(19, 21, 21, 0.03)';
                  }}
                >
                  <span
                    style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(19, 21, 21, 0.04)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: item.color
                    }}
                  >
                    <Icon size={14} />
                  </span>
                  <span
                    style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#131515',
                      fontFamily: 'var(--font-heading)',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
