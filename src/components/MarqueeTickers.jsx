import React from 'react';
import { CreditCard, Sparkles, Shield, Cpu, Award, Layers } from 'lucide-react';

// 12 User-provided card showcase images distributed across ticker slides
import premiumEggshellImg from '../assets/slides/premium-eggshell.webp';
import eliteBlackMatteImg from '../assets/slides/elite-black-matte.webp';
import eliteGoldImg from '../assets/slides/elite-gold.webp';
import smartEggshellIdImg from '../assets/slides/smart-eggshell-id.webp';
import goldMembershipImg from '../assets/slides/gold-membership.webp';
import frostFinishImg from '../assets/slides/frost-finish.webp';

import duplexCardImg from '../assets/slides/duplex-card.webp';
import classicCard21Img from '../assets/slides/classic-card21.webp';
import eliteSilverImg from '../assets/slides/elite-silver.webp';
import eliteBlackMatte2Img from '../assets/slides/elite-black-matte2.webp';
import goldMetalInviteImg from '../assets/slides/gold-metal-invite.webp';
import eliteGold2Img from '../assets/slides/elite-gold2.webp';

const TICKER_ITEMS_1 = [
  {
    label: 'Premium business card',
    icon: CreditCard,
    color: '#cfa34b',
    image: premiumEggshellImg
  },
  {
    label: 'Executive business card',
    icon: Award,
    color: '#0283a7',
    image: eliteBlackMatteImg
  },
  {
    label: 'Metal business card',
    icon: Sparkles,
    color: '#d4af37',
    image: eliteGoldImg
  },
  {
    label: 'Smart business card',
    icon: Cpu,
    color: '#12a70a',
    image: smartEggshellIdImg
  },
  {
    label: 'VIP/membership card',
    icon: Shield,
    color: '#ff4c00',
    image: goldMembershipImg
  },
  {
    label: 'Custom card finishes',
    icon: Layers,
    color: '#9000ff',
    image: frostFinishImg
  }
];

const TICKER_ITEMS_2 = [
  {
    label: 'Du-plex smart card',
    icon: Cpu,
    color: '#0059ff',
    image: duplexCardImg
  },
  {
    label: 'Classic lustre card',
    icon: Sparkles,
    color: '#cfa34b',
    image: classicCard21Img
  },
  {
    label: 'Brushed metal finish',
    icon: CreditCard,
    color: '#686d6d',
    image: eliteSilverImg
  },
  {
    label: 'NFC Contactless ID',
    icon: Shield,
    color: '#0283a7',
    image: eliteBlackMatte2Img
  },
  {
    label: '24K Gold Plated pass',
    icon: Award,
    color: '#d4af37',
    image: goldMetalInviteImg
  },
  {
    label: 'Matte Gunmetal black',
    icon: Layers,
    color: '#131515',
    image: eliteGold2Img
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
