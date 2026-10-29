import React from 'react';
import { CreditCard, Sparkles, Shield, Cpu, Award, Layers } from 'lucide-react';

const TICKER_ITEMS_1 = [
  {
    label: 'Premium business card',
    icon: CreditCard,
    color: '#cfa34b',
    image: 'https://framerusercontent.com/images/wlGihJYpWqbIZpHT1ClDFDgUmk.png?width=400'
  },
  {
    label: 'Executive business card',
    icon: Award,
    color: '#0283a7',
    image: 'https://framerusercontent.com/images/1ilKe6L6KbWv5xrI6p4uunW2Es.png?width=400'
  },
  {
    label: 'Metal business card',
    icon: Sparkles,
    color: '#d4af37',
    image: 'https://framerusercontent.com/images/WRAp8VzH00hxe4XxQqAqA2UuJ0.jpg?width=400'
  },
  {
    label: 'Smart business card',
    icon: Cpu,
    color: '#12a70a',
    image: 'https://framerusercontent.com/images/J4rNvZKvbrN2dGnk6QWrdshukM.jpg?width=400'
  },
  {
    label: 'VIP/membership card',
    icon: Shield,
    color: '#ff4c00',
    image: 'https://framerusercontent.com/images/LuRk2mi9PkL9qpq8u7aAhmN27dM.png?width=400'
  },
  {
    label: 'Custom card finishes',
    icon: Layers,
    color: '#9000ff',
    image: 'https://framerusercontent.com/images/SBijkNBC3TclRbWyps5E1TZAD4.png?width=400'
  }
];

const TICKER_ITEMS_2 = [
  {
    label: 'Du-plex smart card',
    icon: Cpu,
    color: '#0059ff',
    image: 'https://framerusercontent.com/images/38hQqx2XpWVtVAMCUrp8MllUU.jpg?width=400'
  },
  {
    label: 'Classic lustre card',
    icon: Sparkles,
    color: '#cfa34b',
    image: 'https://framerusercontent.com/images/kmAong4xy6gvqhgzcssHKUFJnmA.jpg?width=400'
  },
  {
    label: 'Brushed metal finish',
    icon: CreditCard,
    color: '#686d6d',
    image: 'https://framerusercontent.com/images/VfPcVMbua1hRofTVGKZLXlg4k.jpg?width=400'
  },
  {
    label: 'NFC Contactless ID',
    icon: Shield,
    color: '#0283a7',
    image: 'https://framerusercontent.com/images/yyE2pUgUrjBeDKRRIF0gWhZRuhM.jpg?width=400'
  },
  {
    label: '24K Gold Plated pass',
    icon: Award,
    color: '#d4af37',
    image: 'https://framerusercontent.com/images/NpFjo55ZAEbQNkN0qv3ycj4Yt4.jpg?width=400'
  },
  {
    label: 'Matte Gunmetal black',
    icon: Layers,
    color: '#131515',
    image: 'https://framerusercontent.com/images/cruV4sTOrLcmDG4xvwqyxbri1w.jpg?width=400'
  }
];

export default function MarqueeTickers({ onSelectType }) {
  const renderCards = (items, prefix) =>
    items.map((item, idx) => {
      const Icon = item.icon;
      return (
        <div
          key={`${prefix}-${idx}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            flexShrink: 0
          }}
        >
          {/* Card 1: Standalone image card */}
          <div
            onClick={() => onSelectType && onSelectType(item.label)}
            style={{
              height: 'clamp(140px, 15vw, 170px)',
              width: 'clamp(165px, 18vw, 205px)',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(19, 21, 21, 0.08)',
              boxShadow: '0 6px 20px rgba(19, 21, 21, 0.06)',
              backgroundColor: '#ffffff',
              cursor: 'pointer',
              flexShrink: 0,
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(19, 21, 21, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(19, 21, 21, 0.06)';
            }}
          >
            <img
              src={item.image}
              alt={item.label}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>

          {/* Card 2: Description card */}
          <div
            onClick={() => onSelectType && onSelectType(item.label)}
            style={{
              height: 'clamp(140px, 15vw, 170px)',
              minWidth: '160px',
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '20px 26px',
              border: '1px solid rgba(19, 21, 21, 0.08)',
              boxShadow: '0 6px 20px rgba(19, 21, 21, 0.06)',
              display: 'inline-flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              cursor: 'pointer',
              flexShrink: 0,
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(19, 21, 21, 0.12)';
              e.currentTarget.style.borderColor = 'rgba(19, 21, 21, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(19, 21, 21, 0.06)';
              e.currentTarget.style.borderColor = 'rgba(19, 21, 21, 0.08)';
            }}
          >
            <span
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                backgroundColor: 'rgba(19, 21, 21, 0.04)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: item.color,
                marginBottom: '14px',
                transform: 'translateY(-4px)'
              }}
            >
              <Icon size={24} />
            </span>
            <span
              style={{
                fontSize: '16px',
                fontWeight: 600,
                color: '#131515',
                fontFamily: 'var(--font-heading)',
                whiteSpace: 'nowrap',
                textAlign: 'center',
                lineHeight: 1.25
              }}
            >
              {item.label}
            </span>
          </div>
        </div>
      );
    });

  return (
    <section
      style={{
        paddingTop: '20px',
        paddingBottom: '30px',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Top Ticker: Left Scroll */}
        <div className="marquee-wrapper">
          <div className="marquee-content marquee-left">
            {renderCards(TICKER_ITEMS_1, 't1-a')}
          </div>
          <div className="marquee-content marquee-left" aria-hidden="true">
            {renderCards(TICKER_ITEMS_1, 't1-b')}
          </div>
        </div>

        {/* Bottom Ticker: Right Scroll */}
        <div className="marquee-wrapper">
          <div className="marquee-content marquee-right">
            {renderCards(TICKER_ITEMS_2, 't2-a')}
          </div>
          <div className="marquee-content marquee-right" aria-hidden="true">
            {renderCards(TICKER_ITEMS_2, 't2-b')}
          </div>
        </div>
      </div>
    </section>
  );
}
