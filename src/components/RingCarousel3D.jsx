import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

const CARDS = [
  { id: 0, title: 'Nova', img: 'https://framerusercontent.com/images/VfPcVMbua1hRofTVGKZLXlg4k.jpg?width=1080&height=1350' },
  { id: 1, title: 'Seplat', img: 'https://framerusercontent.com/images/CUgTBF7cbByxZQwWFMDNfXIz3P0.jpg?width=1080&height=1350' },
  { id: 2, title: 'Invera Energy', img: 'https://framerusercontent.com/images/J4rNvZKvbrN2dGnk6QWrdshukM.jpg?width=1080&height=1350' },
  { id: 3, title: 'Neca', img: 'https://framerusercontent.com/images/wlGihJYpWqbIZpHT1ClDFDgUmk.png?width=1800&height=2200' },
  { id: 4, title: 'Ikeja Electric', img: 'https://framerusercontent.com/images/VILreelej6FJF9afHUpDst42A.jpg?width=1080&height=1080' },
  { id: 5, title: 'Rainoil', img: 'https://framerusercontent.com/images/KbC32uNkRogiHgIDhEAgdcpcVM.jpg?width=1080&height=1080' },
  { id: 6, title: 'Optiva Capital', img: 'https://framerusercontent.com/images/NpFjo55ZAEbQNkN0qv3ycj4Yt4.jpg?width=1080&height=1080' },
  { id: 7, title: 'IOGC', img: 'https://framerusercontent.com/images/bsnXpVxiTZRCi1WNX88kRJ5zw.png?width=1080&height=1080' },
  { id: 8, title: 'TVC', img: 'https://framerusercontent.com/images/r0DPyi62oGifYQcTojJdd5XRb8.png?width=1080&height=1080' },
  { id: 9, title: 'Sapetro', img: 'https://framerusercontent.com/images/cruV4sTOrLcmDG4xvwqyxbri1w.jpg?width=1080&height=1080' },
  { id: 10, title: 'Guinness Nigeria', img: 'https://framerusercontent.com/images/lKRhEofMwZNBLJNUophq5OfQg.png?width=1080&height=1080' }
];

export default function RingCarousel3D({ onSelectCard }) {
  const containerRef = useRef(null);
  const rotation = useRef(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const lastVelocity = useRef(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);
  const [renderedRotation, setRenderedRotation] = useState(0);

  // Responsive dimensions matching Framer geometry
  const [dims, setDims] = useState({
    radius: 460,
    ellipseHeight: 90,
    itemWidth: 126,
    itemHeight: 175,
    previewWidth: 380,
    previewHeight: 520,
    perspective: 800
  });

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 600) {
        setDims({
          radius: 250,
          ellipseHeight: 50,
          itemWidth: 90,
          itemHeight: 125,
          previewWidth: 260,
          previewHeight: 360,
          perspective: 600
        });
      } else if (w < 960) {
        setDims({
          radius: 350,
          ellipseHeight: 70,
          itemWidth: 110,
          itemHeight: 152,
          previewWidth: 320,
          previewHeight: 440,
          perspective: 700
        });
      } else {
        setDims({
          radius: 460,
          ellipseHeight: 90,
          itemWidth: 126,
          itemHeight: 175,
          previewWidth: 380,
          previewHeight: 520,
          perspective: 800
        });
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Continuous auto-rotation with GSAP ticker
  useEffect(() => {
    const speed = 0.22;
    const tick = () => {
      if (!isDragging.current) {
        rotation.current = (rotation.current + speed) % 360;
        setRenderedRotation(rotation.current);
      }
    };

    gsap.ticker.add(tick);
    return () => {
      gsap.ticker.remove(tick);
    };
  }, []);

  const totalCards = CARDS.length;
  const step = 360 / totalCards;

  // Determine active card based on closest angle to front center (0 deg)
  useEffect(() => {
    let closestIndex = 0;
    let minDistance = Infinity;

    for (let i = 0; i < totalCards; i++) {
      let cardAngle = (i * step + renderedRotation) % 360;
      let diff = ((cardAngle + 180) % 360 + 360) % 360 - 180;
      let absDiff = Math.abs(diff);
      if (absDiff < minDistance) {
        minDistance = absDiff;
        closestIndex = i;
      }
    }

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  }, [renderedRotation, totalCards, step, activeIndex]);

  // Pointer Drag interactions
  const handlePointerDown = (e) => {
    isDragging.current = true;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    startX.current = clientX;
    lastX.current = clientX;
    lastTime.current = performance.now();
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const delta = (clientX - startX.current) * 0.32;
    startX.current = clientX;

    const now = performance.now();
    const dt = now - lastTime.current;
    if (dt > 0) {
      lastVelocity.current = (clientX - lastX.current) / dt;
    }
    lastX.current = clientX;
    lastTime.current = now;

    rotation.current = (rotation.current - delta) % 360;
    setRenderedRotation(rotation.current);
  };

  const handlePointerUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    if (Math.abs(lastVelocity.current) > 0.1) {
      const throwDistance = lastVelocity.current * 180;
      gsap.to(rotation, {
        current: rotation.current - throwDistance,
        duration: 1.2,
        ease: 'power3.out',
        onUpdate: () => {
          setRenderedRotation(rotation.current % 360);
        }
      });
    }
  };

  const rotateToCard = (targetIndex) => {
    const currentAngle = (targetIndex * step + rotation.current) % 360;
    let diff = ((currentAngle + 180) % 360 + 360) % 360 - 180;
    gsap.to(rotation, {
      current: rotation.current - diff,
      duration: 0.9,
      ease: 'power3.out',
      onUpdate: () => {
        setRenderedRotation(rotation.current % 360);
      }
    });
  };

  const activeCard = CARDS[activeIndex] || CARDS[0];

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '10px auto 40px',
        height: `${dims.previewHeight + 80}px`,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none',
        touchAction: 'none',
        cursor: 'grab'
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      role="region"
      aria-label="3D media ring carousel"
    >
      {/* 3D Scene Viewport */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          perspective: `${dims.perspective}px`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'visible'
        }}
      >
        {/* ============================================================== */}
        {/* BACK HALF OF THE MOVING RING (Cards behind center: z < 0)    */}
        {/* Only images, no naming header, sharp corners (no border radius)*/}
        {/* ============================================================== */}
        {CARDS.map((card, i) => {
          const cardAngle = (i * step + renderedRotation) % 360;
          const rad = (cardAngle * Math.PI) / 180;
          const sin = Math.sin(rad);
          const cos = Math.cos(rad);

          // Only render back half here
          if (cos >= 0) return null;

          const x = sin * dims.radius;
          const y = -((1 - cos) / 2) * dims.ellipseHeight;
          const scale = 0.72 + 0.18 * ((cos + 1) / 2);
          const opacity = Math.max(0.35, 0.45 + 0.5 * ((cos + 1) / 2));
          const zIndex = Math.round((cos + 1) * 100);

          return (
            <div
              key={`back-${card.id}`}
              onClick={(e) => {
                e.stopPropagation();
                rotateToCard(i);
              }}
              style={{
                position: 'absolute',
                width: `${dims.itemWidth}px`,
                height: `${dims.itemHeight}px`,
                borderRadius: 0,
                overflow: 'hidden',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                backgroundColor: 'transparent',
                border: 'none',
                transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                opacity: opacity,
                zIndex: zIndex,
                cursor: 'pointer',
                pointerEvents: 'auto'
              }}
              title={card.title}
            >
              <img
                src={card.img}
                alt={card.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: 0,
                  pointerEvents: 'none'
                }}
              />
            </div>
          );
        })}

        {/* ============================================================== */}
        {/* BIG FEATURED CARD IN THE FRONT (CENTER PREVIEW)               */}
        {/* Gray top header with company name, no border radius, clean image */}
        {/* ============================================================== */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: `${dims.previewWidth}px`,
            height: `${dims.previewHeight}px`,
            zIndex: 500,
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* Big Featured Card Container */}
          <div
            onClick={() => {
              if (onSelectCard) onSelectCard(activeCard.title);
            }}
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              borderRadius: 0,
              overflow: 'hidden',
              backgroundColor: 'transparent',
              boxShadow: '0 25px 60px -10px rgba(0, 0, 0, 0.25)',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 30px 70px -8px rgba(207, 163, 75, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 25px 60px -10px rgba(0, 0, 0, 0.25)';
            }}
          >
            {/* Gray Title Header on Top with 4px height / padding */}
            <div
              style={{
                backgroundColor: '#ededed',
                padding: '4px 14px',
                borderRadius: 0,
                borderBottom: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexShrink: 0,
                zIndex: 2
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '14.5px',
                  fontWeight: 600,
                  color: '#0c0c0c',
                  letterSpacing: '-0.02em',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              >
                {activeCard.title}
              </span>
            </div>

            {/* Clean Full Card Picture (No text overlay, No arrow button) */}
            <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
              <img
                key={activeCard.id}
                src={activeCard.img}
                alt={activeCard.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: 0,
                  animation: 'crossfadeImage 0.45s ease forwards'
                }}
              />
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* FRONT HALF OF THE MOVING RING (Cards in front: cos >= 0)      */}
        {/* Only images, no naming header, sharp corners (no border radius)*/}
        {/* ============================================================== */}
        {CARDS.map((card, i) => {
          const cardAngle = (i * step + renderedRotation) % 360;
          const rad = (cardAngle * Math.PI) / 180;
          const sin = Math.sin(rad);
          const cos = Math.cos(rad);

          // Only render front half here
          if (cos < 0) return null;

          const x = sin * dims.radius;
          const y = -((1 - cos) / 2) * dims.ellipseHeight;
          const scale = 0.85 + 0.15 * cos;

          // As card approaches the exact front center,
          // smoothly hand off to the big focal center card!
          const diff = Math.abs(((cardAngle + 180) % 360 + 360) % 360 - 180);
          const frontHandoff = Math.min(1, Math.max(0, (diff - 14) / 28));
          const opacity = 0.95 * frontHandoff;

          const zIndex = 600 + Math.round(cos * 200);

          return (
            <div
              key={`front-${card.id}`}
              onClick={(e) => {
                e.stopPropagation();
                rotateToCard(i);
              }}
              style={{
                position: 'absolute',
                width: `${dims.itemWidth}px`,
                height: `${dims.itemHeight}px`,
                borderRadius: 0,
                overflow: 'hidden',
                boxShadow: '0 12px 28px -4px rgba(0, 0, 0, 0.22)',
                backgroundColor: 'transparent',
                border: 'none',
                transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                opacity: opacity,
                zIndex: zIndex,
                cursor: 'pointer',
                pointerEvents: opacity < 0.1 ? 'none' : 'auto'
              }}
              title={card.title}
            >
              <img
                src={card.img}
                alt={card.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: 0,
                  pointerEvents: 'none'
                }}
              />
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes crossfadeImage {
          from {
            opacity: 0.35;
            transform: scale(0.98);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
