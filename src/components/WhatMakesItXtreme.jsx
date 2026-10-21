import React, { useRef, useEffect } from 'react';
import { Award, ShieldCheck, Zap, Globe, Sparkles, Building, Layers } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: '10K+', label: 'Organisations equipped', desc: 'Leading corporations, financial institutions, and executive teams.' },
  { value: '300,000+', label: 'Luxury cards delivered globally', desc: 'Manufactured and shipped to clients worldwide.' },
  { value: '98%', label: 'Premium brand retention rate', desc: 'Clients who continue with annual card upgrades.' },
  { value: '3x', label: 'Faster turnaround timeline', desc: 'From digital proof to physical express courier delivery.' },
  { value: '51+', label: 'Countries worldwide', desc: 'Active professionals representing their brands with Xtreme cards.' }
];

export default function WhatMakesItXtreme({ onOpenQuote }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stat-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%'
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-dark section-padding"
      style={{
        backgroundColor: '#121414',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(207, 163, 75, 0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }}
      ></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '55px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 16px',
              borderRadius: '50px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              fontSize: '13px',
              fontWeight: 600,
              color: '#cfa34b',
              marginBottom: '16px'
            }}
          >
            <Sparkles size={14} />
            <span>What makes it Xtreme</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(32px, 4.5vw, 52px)',
              fontWeight: 700,
              maxWidth: '850px',
              margin: '0 auto 16px',
              lineHeight: 1.15
            }}
          >
            Your corporate card at a glance
          </h2>

          <p
            style={{
              fontSize: '16.5px',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.6
            }}
          >
            A smarter way to represent your organization, combining premium design, exquisite finishes, and production excellence.
          </p>

          {/* Three 100% Quality Pillars */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap',
              marginTop: '32px'
            }}
          >
            {[
              { label: 'Smart Cards', icon: Zap },
              { label: 'Premium Quality', icon: Award },
              { label: 'Precision Finish', icon: Layers }
            ].map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 22px',
                    borderRadius: '50px',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <span style={{ color: '#cfa34b', fontWeight: 700, fontSize: '15px' }}>100%</span>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: '#ffffff' }}>{p.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
            marginBottom: '40px'
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="stat-card glass-card-dark"
              style={{
                padding: '30px 24px',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 'clamp(32px, 3.8vw, 46px)',
                    fontWeight: 800,
                    color: '#ffffff',
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    marginBottom: '10px'
                  }}
                >
                  {stat.value}
                </div>

                <div
                  style={{
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#cfa34b',
                    marginBottom: '8px',
                    fontFamily: 'var(--font-heading)'
                  }}
                >
                  {stat.label}
                </div>

                <p
                  style={{
                    fontSize: '13px',
                    color: 'rgba(255, 255, 255, 0.65)',
                    lineHeight: 1.55
                  }}
                >
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
