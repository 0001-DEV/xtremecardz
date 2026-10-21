import React, { useState } from 'react';
import { ShoppingBag, FileSpreadsheet, Palette, Cpu, CheckCircle2, Package, Truck, Sparkles } from 'lucide-react';

const STEPS = [
  { id: 1, name: 'Order', icon: ShoppingBag, time: 'Day 1', desc: 'Requirements capture, finish selection, and initial order placement.' },
  { id: 2, name: 'Data Submission', icon: FileSpreadsheet, time: 'Day 1-2', desc: 'Secure portal for cardholder credentials, photos, and access keys.' },
  { id: 3, name: 'Design & Proof', icon: Palette, time: 'Day 2-3', desc: 'Precision digital proofs & 3D render sign-off by your brand team.' },
  { id: 4, name: 'Production', icon: Cpu, time: 'Day 3-5', desc: 'Laser etching, CNC cutting, chip encoding, and electroplating.' },
  { id: 5, name: 'Quality Check', icon: CheckCircle2, time: 'Day 5', desc: 'Strict inspection for surface finish, NFC read test, and calibration.' },
  { id: 6, name: 'Packaging', icon: Package, time: 'Day 6', desc: 'Luxury presentation boxes and individual protective sleeves.' },
  { id: 7, name: 'Delivery', icon: Truck, time: 'Day 7', desc: 'Tracked express courier dispatch to offices globally.' }
];

export default function DeliveryStreak({ onOpenQuote }) {
  const [activeStep, setActiveStep] = useState(3);

  return (
    <section
      style={{
        paddingTop: '60px',
        paddingBottom: '80px',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Header */}
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
              color: '#0283a7',
              boxShadow: '0 4px 12px rgba(19, 21, 21, 0.03)',
              marginBottom: '16px'
            }}
          >
            <Sparkles size={14} />
            <span>Guaranteed Reliability</span>
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
            Our delivery streak
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
            Our delivery timeline never changes from design concept to product delivery. Every step is monitored with pinpoint precision.
          </p>
        </div>

        {/* Timeline Bar Container */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            padding: '36px 28px',
            border: '1px solid rgba(19, 21, 21, 0.08)',
            boxShadow: 'var(--shadow-card)'
          }}
        >
          {/* Horizontal Progress Track */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              position: 'relative',
              overflowX: 'auto',
              paddingBottom: '16px',
              gap: '12px'
            }}
          >
            {/* Connecting line */}
            <div
              style={{
                position: 'absolute',
                top: '24px',
                left: '40px',
                right: '40px',
                height: '2px',
                backgroundColor: 'rgba(19, 21, 21, 0.08)',
                zIndex: 0
              }}
            ></div>

            {STEPS.map((step) => {
              const Icon = step.icon;
              const isCurrent = step.id === activeStep;
              const isPast = step.id <= activeStep;

              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    cursor: 'pointer',
                    position: 'relative',
                    zIndex: 1,
                    minWidth: '90px'
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: isCurrent ? '#131515' : isPast ? '#0283a7' : '#f3f2ef',
                      color: isPast || isCurrent ? '#ffffff' : '#686d6d',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      boxShadow: isCurrent
                        ? '0 6px 18px rgba(19, 21, 21, 0.25)'
                        : isPast
                        ? '0 4px 14px rgba(2, 131, 167, 0.25)'
                        : 'none',
                      transform: isCurrent ? 'scale(1.15)' : 'scale(1)'
                    }}
                  >
                    <Icon size={18} />
                  </div>

                  <span
                    style={{
                      marginTop: '12px',
                      fontSize: '13.5px',
                      fontWeight: isCurrent ? 700 : 600,
                      color: isCurrent ? '#131515' : '#686d6d',
                      textAlign: 'center',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {step.name}
                  </span>

                  <span
                    style={{
                      fontSize: '11.5px',
                      color: isCurrent ? '#0283a7' : '#9a9e9e',
                      fontWeight: 500,
                      marginTop: '2px'
                    }}
                  >
                    {step.time}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Active Step Details Callout */}
          <div
            style={{
              marginTop: '28px',
              padding: '20px 24px',
              backgroundColor: '#f9f8f6',
              borderRadius: '16px',
              border: '1px solid rgba(19, 21, 21, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px'
            }}
          >
            <div>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#0283a7', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Stage {activeStep} of 7: {STEPS[activeStep - 1].name}
              </span>
              <p style={{ fontSize: '15px', color: '#131515', marginTop: '4px', fontWeight: 500 }}>
                {STEPS[activeStep - 1].desc}
              </p>
            </div>

            <button
              onClick={() => onOpenQuote(`Delivery Timeline Inquiry (Stage ${activeStep})`)}
              className="btn-primary"
              style={{ padding: '10px 20px', fontSize: '13.5px' }}
            >
              Start order timeline
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
