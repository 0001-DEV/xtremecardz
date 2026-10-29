import React, { useState } from 'react';
import {
  Layers,
  Sparkles,
  Flame,
  Palette,
  Cpu,
  CheckCircle2,
  Package,
  Truck,
  ShoppingBag,
  FileSpreadsheet,
  ShieldCheck,
  Fingerprint
} from 'lucide-react';

const DELIVERY_STEPS = [
  { name: 'Design & Proof', icon: Palette },
  { name: 'Production', icon: Cpu },
  { name: 'Quality Check', icon: CheckCircle2 },
  { name: 'Packaging', icon: Package },
  { name: 'Delivery', icon: Truck },
  { name: 'Order', icon: ShoppingBag },
  { name: 'Data Submission', icon: FileSpreadsheet }
];

const FORMULA_PILLARS = [
  { label: 'Material', detail: 'Solid Foundation', icon: Layers, color: '#cfa34b' },
  { label: 'Design', detail: 'Executive Layouts', icon: Palette, color: '#0283a7' },
  { label: 'Finish', detail: 'Signature Luster', icon: Sparkles, color: '#ff9803' },
  { label: 'Identity', detail: 'Smart Connectivity', icon: Fingerprint, color: '#059669' }
];

export default function IdentifyStructure({ onOpenQuote }) {
  const [activePillar, setActivePillar] = useState(FORMULA_PILLARS[0].label);

  return (
    <section
      id="identify-structure"
      style={{
        paddingTop: '70px',
        paddingBottom: '80px',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Header Block: Split Left & Right */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '32px',
            marginBottom: '44px'
          }}
        >
          {/* Left Column */}
          <div style={{ flex: '1 1 420px', maxWidth: '560px' }}>
            {/* Glassmorphism Button */}
            <button
              onClick={() => onOpenQuote?.('Identify with structure')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 20px',
                borderRadius: '50px',
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(19, 21, 21, 0.1)',
                boxShadow: '0 4px 14px rgba(19, 21, 21, 0.04)',
                fontSize: '13.5px',
                fontWeight: 600,
                color: '#131515',
                marginBottom: '18px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                outline: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#131515';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.borderColor = '#131515';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.75)';
                e.currentTarget.style.color = '#131515';
                e.currentTarget.style.borderColor = 'rgba(19, 21, 21, 0.1)';
              }}
            >
              <Layers size={15} color="#cfa34b" />
              <span>Identify with structure</span>
            </button>

            {/* Bold Text Under It */}
            <h2
              style={{
                fontSize: 'clamp(28px, 3.6vw, 42px)',
                fontWeight: 700,
                lineHeight: 1.2,
                color: '#131515',
                margin: 0
              }}
            >
              Premium material cards that preserves your prestige.
            </h2>
          </div>

          {/* Right Column */}
          <div style={{ flex: '1 1 360px', maxWidth: '480px' }}>
            <p
              style={{
                fontSize: 'clamp(15px, 1.5vw, 17px)',
                lineHeight: 1.65,
                color: '#52575c',
                margin: 0
              }}
            >
              Xtremecardz brings clarity to your identity with clean cards, realistic personality, and prestige that adapts to your day.
            </p>
          </div>
        </div>

        {/* Two Cards Under Them: Left and Right (height: 800px, width: 580px) */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch',
            gap: '36px',
            flexWrap: 'wrap'
          }}
        >
          {/* CARD 1: Delivery Streak Card */}
          <div
            style={{
              width: '580px',
              maxWidth: '100%',
              height: '800px',
              minHeight: '800px',
              backgroundColor: '#f8f9fa',
              borderRadius: '28px',
              border: '1px solid rgba(19, 21, 21, 0.08)',
              boxShadow: '0 16px 40px rgba(19, 21, 21, 0.05)',
              padding: '44px 36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Header Text at the left side */}
            <div style={{ textAlign: 'left' }}>
              <h3
                style={{
                  fontSize: 'clamp(24px, 2.5vw, 28px)',
                  fontWeight: 700,
                  color: '#131515',
                  marginBottom: '12px',
                  lineHeight: 1.2
                }}
              >
                Our delivery streak
              </h3>
              <p
                style={{
                  fontSize: '15.5px',
                  color: '#595e5e',
                  lineHeight: 1.6,
                  margin: 0
                }}
              >
                Our delivery timeline never changes from design concept to product delivery.
              </p>
            </div>

            {/* Container with white bg and border radius: Streak Fire Icon & Text */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                padding: '36px 28px',
                border: '1px solid rgba(19, 21, 21, 0.06)',
                boxShadow: '0 8px 24px rgba(19, 21, 21, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                margin: 'auto 0'
              }}
            >
              <div
                style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 107, 0, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px'
                }}
              >
                <Flame size={36} color="#ff6b00" fill="#ff9800" />
              </div>
              <span
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#131515',
                  letterSpacing: '-0.01em'
                }}
              >
                7 Day Delivery Streak Active
              </span>
            </div>

            {/* Moving Buttons Ticker on a single line */}
            <div style={{ width: '100%', paddingTop: '10px' }}>
              <div
                style={{
                  overflow: 'hidden',
                  width: '100%',
                  position: 'relative'
                }}
              >
                <div className="delivery-ticker-track">
                  {[...DELIVERY_STEPS, ...DELIVERY_STEPS, ...DELIVERY_STEPS].map((step, idx) => {
                    const Icon = step.icon;
                    return (
                      <div
                        key={idx}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '11px 20px',
                          borderRadius: '50px',
                          backgroundColor: '#ffffff',
                          border: '1px solid rgba(19, 21, 21, 0.08)',
                          boxShadow: '0 2px 10px rgba(19, 21, 21, 0.03)',
                          fontSize: '13.5px',
                          fontWeight: 600,
                          color: '#131515',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        <Icon size={15} color="#0283a7" />
                        <span>{step.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: Smart ID Formula Card (Real Grass Picture Background) */}
          <div
            style={{
              width: '580px',
              maxWidth: '100%',
              height: '800px',
              minHeight: '800px',
              borderRadius: '28px',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.12)',
              padding: '40px 32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Real Grass Picture Background */}
            <img
              src="/grass-bg.jpg"
              alt="Lush green grass"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                pointerEvents: 'none'
              }}
            />

            {/* Subtle Vignette Overlay for Depth & High Readability */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.25) 100%)',
                pointerEvents: 'none'
              }}
            />

            {/* Top Part in the Container */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                backgroundColor: 'rgba(255, 255, 255, 0.88)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                borderRadius: '20px',
                padding: '24px 26px',
                border: '1px solid rgba(255, 255, 255, 0.95)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)'
              }}
            >
              <h3
                style={{
                  fontSize: 'clamp(22px, 2.3vw, 26px)',
                  fontWeight: 700,
                  color: '#131515',
                  marginBottom: '10px',
                  lineHeight: 1.2
                }}
              >
                Smart ID formula
              </h3>
              <p
                style={{
                  fontSize: '14.5px',
                  color: '#475569',
                  lineHeight: 1.55,
                  margin: 0
                }}
              >
                A simple view that shows how we structure corporate cards to match your organization's prestige and personality
              </p>
            </div>

            {/* The Xtremecardz Premium Formula! Badge */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                backgroundColor: 'rgba(255, 255, 255, 0.92)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                borderRadius: '20px',
                padding: '18px 24px',
                border: '1px solid rgba(255, 255, 255, 0.95)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                margin: '18px 0'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(207, 163, 75, 0.18)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Sparkles size={22} color="#cfa34b" />
              </div>
              <span
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#131515'
                }}
              >
                The Xtremecardz Premium Formula!
              </span>
            </div>

            {/* 4 Pillars Interactive Detail Cards */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                width: '100%'
              }}
            >
              {FORMULA_PILLARS.map((p) => {
                const Icon = p.icon;
                const isSelected = activePillar === p.label;

                return (
                  <div
                    key={p.label}
                    onClick={() => setActivePillar(p.label)}
                    style={{
                      padding: '15px 22px',
                      borderRadius: '16px',
                      backgroundColor: isSelected ? '#131515' : 'rgba(255, 255, 255, 0.88)',
                      color: isSelected ? '#ffffff' : '#131515',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: isSelected ? '1px solid #131515' : '1px solid rgba(255, 255, 255, 0.9)',
                      boxShadow: isSelected
                        ? '0 8px 20px rgba(0, 0, 0, 0.25)'
                        : '0 4px 14px rgba(0, 0, 0, 0.08)',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '10px',
                          backgroundColor: isSelected
                            ? 'rgba(255, 255, 255, 0.15)'
                            : 'rgba(16, 185, 129, 0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Icon size={18} color={isSelected ? '#cfa34b' : p.color} />
                      </div>
                      <div>
                        <div style={{ fontSize: '15px', fontWeight: 700 }}>{p.label}</div>
                        <div
                          style={{
                            fontSize: '12.5px',
                            color: isSelected ? 'rgba(255, 255, 255, 0.7)' : '#475569',
                            marginTop: '2px'
                          }}
                        >
                          {p.detail}
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: isSelected ? '#cfa34b' : '#059669',
                        padding: '4px 10px',
                        borderRadius: '20px',
                        backgroundColor: isSelected ? 'rgba(207, 163, 75, 0.2)' : 'rgba(16, 185, 129, 0.15)'
                      }}
                    >
                      Pillar
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CSS for Gentle Continuous Marquee moving on a single line */}
        <style>{`
          @keyframes deliveryMarquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .delivery-ticker-track {
            display: flex;
            gap: 12px;
            width: max-content;
            animation: deliveryMarquee 24s linear infinite;
          }
          .delivery-ticker-track:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  );
}
