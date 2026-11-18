import { getAsset } from '../assets/assetUrl';
import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';

const SHOWCASE_VIDEOS = [
  {
    id: 'video-a',
    title: '24K Mirror Gold Metal Card',
    category: 'Prestige Tier',
    desc: 'Real 24K gold electroplated stainless steel with mirror polish and precision laser cutouts.',
    videoUrl: getAsset('A.mp4'),
    poster: getAsset('card-24k-mirror-gold.jpg')
  },
  {
    id: 'video-b',
    title: 'Black Matte Stealth VIP Card',
    category: 'Stealth Series',
    desc: 'Deep anodized matte black metal with tactical anti-fingerprint coating and silver laser accents.',
    videoUrl: getAsset('B.mp4'),
    poster: getAsset('card-black-matte-stealth.png')
  },
  {
    id: 'video-c',
    title: 'Gunmetal Titanium Business Card',
    category: 'Industrial Craft',
    desc: 'Brushed titanium gunmetal with dark smoky luster and tactile acid-etched typography.',
    videoUrl: getAsset('C.mp4'),
    poster: getAsset('card-gunmetal-titanium.png')
  },
  {
    id: 'video-d',
    title: 'Dual-Tone Metal VIP Access Pass',
    category: 'Elite Access',
    desc: 'High-frequency RFID & NFC dual-chip embedded smart identity for bespoke executive access.',
    videoUrl: getAsset('D.mp4'),
    poster: getAsset('card-metal-vip-access.png')
  },
  {
    id: 'video-e',
    title: 'Sub-Millimeter CNC Precision Finish',
    category: 'Master Craft',
    desc: 'Architectural-grade 316L solid stainless steel engineered to leave an indelible impression.',
    videoUrl: getAsset('E.mp4'),
    poster: getAsset('card-submillimeter-cnc.png')
  }
];

function ShowcaseVideoCard({ video, isActive, inView, isMuted, toggleMute, onSlideClick }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    if (isActive && inView) {
      el.muted = isMuted;
      const playPromise = el.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    } else {
      el.pause();
      setIsPlaying(false);
    }
  }, [isActive, inView, isMuted]);

  const handleTogglePlay = (e) => {
    e.stopPropagation();
    const el = videoRef.current;
    if (!el) return;

    if (isPlaying) {
      el.pause();
      setIsPlaying(false);
    } else {
      el.muted = isMuted;
      el.play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  const handleLoadedMetadata = (e) => {
    // Seek slightly forward to force frame render so it is never a blank box
    if (e.target && e.target.currentTime === 0) {
      e.target.currentTime = 0.001;
    }
  };

  return (
    <div
      onClick={isActive ? handleTogglePlay : onSlideClick}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        cursor: 'pointer',
        backgroundColor: '#0d0f11',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Video Element - Edge-to-edge coverage eliminating any black blank sections */}
      <video
        ref={videoRef}
        src={video.videoUrl}
        playsInline
        webkit-playsinline="true"
        muted={isMuted}
        loop
        preload="auto"
        onLoadedMetadata={handleLoadedMetadata}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: 2,
          filter: isActive ? 'none' : 'brightness(0.85)',
          transition: 'filter 0.4s ease'
        }}
      />

      {/* Subtle radial glow when active */}
      {isActive && (
        <div
          style={{
            position: 'absolute',
            top: '-40px',
            right: '-40px',
            width: '180px',
            height: '180px',
            background: 'radial-gradient(circle, rgba(207, 163, 75, 0.28) 0%, transparent 70%)',
            filter: 'blur(30px)',
            pointerEvents: 'none',
            zIndex: 3
          }}
        />
      )}

      {/* Top Controls when Active */}
      {isActive && isPlaying && (
        <div
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            display: 'flex',
            gap: '8px',
            zIndex: 4
          }}
        >
          <button
            onClick={handleTogglePlay}
            aria-label="Pause video"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'rgba(19, 21, 21, 0.82)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, background-color 0.2s ease'
            }}
          >
            <Pause size={14} />
          </button>

          <button
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'rgba(19, 21, 21, 0.82)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, background-color 0.2s ease'
            }}
          >
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
        </div>
      )}

      {/* Video Play Icon in the Middle: Shown on all cards that are not playing (including side cards) */}
      {(!isActive || !isPlaying) ? (
        <div
          className="elevate-video-center-icon"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: isActive ? '68px' : '50px',
            height: isActive ? '68px' : '50px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.92)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#131515',
            boxShadow: '0 14px 38px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.4)',
            zIndex: 4,
            cursor: 'pointer',
            transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease',
            pointerEvents: 'none'
          }}
        >
          <Play
            size={isActive ? 26 : 20}
            fill="#131515"
            color="#131515"
            style={{ marginLeft: isActive ? '4px' : '3px' }}
          />
        </div>
      ) : (
        /* While playing: Hover to show pause in the middle */
        <div
          className="video-playing-middle-icon"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '68px',
            height: '68px',
            borderRadius: '50%',
            backgroundColor: 'rgba(19, 21, 21, 0.7)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            boxShadow: '0 14px 38px rgba(0, 0, 0, 0.45)',
            zIndex: 4,
            cursor: 'pointer',
            opacity: 0,
            transition: 'opacity 0.25s ease, transform 0.25s ease',
            pointerEvents: 'none'
          }}
        >
          <Pause size={26} color="#ffffff" />
        </div>
      )}
    </div>
  );
}

export default function MetalShowcase({ onOpenQuote }) {
  const swiperRef = useRef(null);
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleMute = (e) => {
    e.stopPropagation();
    setIsMuted((prev) => !prev);
  };

  return (
    <section
      ref={sectionRef}
      style={{
        paddingTop: '60px',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '7px 18px',
              borderRadius: '50px',
              backgroundColor: '#ffffff',
              border: '1px solid rgba(19, 21, 21, 0.08)',
              fontSize: '13.5px',
              fontWeight: 600,
              color: '#131515',
              boxShadow: '0 4px 12px rgba(19, 21, 21, 0.03)',
              marginBottom: '18px'
            }}
          >
            <span>Turn every introduction into an opportunity</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(28px, 4.4vw, 52px)',
              fontWeight: 700,
              maxWidth: '960px',
              margin: '0 auto',
              lineHeight: 1.18,
              color: '#131515',
              letterSpacing: '-0.03em'
            }}
          >
            <span style={{ display: 'block' }}>Stand out, stay memorable,</span>
            <span style={{ display: 'block' }}>and leave a lasting impression</span>
            <span style={{ display: 'block' }}>with a metal business</span>
            <span style={{ display: 'block' }}>card built for your brand.</span>
          </h2>
        </div>

        {/* 3-Video Stage: 1 big card in the middle, 2 of same size beside, spaced a bit */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1240px',
            margin: '0 auto',
            overflow: 'hidden',
            padding: '16px 0'
          }}
        >
          <style>{`
            .metal-video-swiper {
              width: 100%;
              overflow: visible !important;
              padding: 24px 0 !important;
            }
            .metal-video-swiper .swiper-wrapper {
              align-items: center;
              display: flex;
            }
            .metal-video-swiper .swiper-slide {
              width: clamp(340px, 48vw, 760px) !important;
              aspect-ratio: 16 / 9 !important;
              height: auto !important;
              border-radius: 20px;
              overflow: hidden;
              background-color: #0d0f11;
              border: 1px solid rgba(255, 255, 255, 0.1);
              box-shadow: 0 12px 36px rgba(0, 0, 0, 0.35);
              transition: transform 0.45s cubic-bezier(0.25, 1, 0.5, 1),
                          opacity 0.45s ease,
                          border-color 0.45s ease,
                          box-shadow 0.45s ease !important;
              opacity: 0.8;
              transform: scale(0.92);
              cursor: pointer;
              flex-shrink: 0;
            }
            .metal-video-swiper .swiper-slide-active {
              opacity: 1 !important;
              transform: scale(1.02) !important;
              border: 1px solid rgba(207, 163, 75, 0.5) !important;
              box-shadow: 0 24px 60px rgba(0, 0, 0, 0.65), 0 0 35px rgba(207, 163, 75, 0.2) !important;
              cursor: pointer;
              z-index: 10;
            }
            @media (max-width: 640px) {
              .metal-video-swiper .swiper-slide {
                width: 88vw !important;
                aspect-ratio: 16 / 9 !important;
                border-radius: 16px;
                transform: scale(0.94);
              }
              .metal-video-swiper .swiper-slide-active {
                transform: scale(1.0) !important;
              }
            }
          `}</style>

          <Swiper
            modules={[Navigation]}
            slidesPerView={'auto'}
            centeredSlides={true}
            loop={true}
            spaceBetween={28}
            breakpoints={{
              320: { spaceBetween: 14 },
              640: { spaceBetween: 24 },
              1024: { spaceBetween: 36 }
            }}
            speed={550}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="metal-video-swiper"
          >
            {SHOWCASE_VIDEOS.map((video, idx) => (
              <SwiperSlide key={video.id}>
                {({ isActive }) => (
                  <ShowcaseVideoCard
                    video={video}
                    isActive={isActive}
                    inView={inView}
                    isMuted={isMuted}
                    toggleMute={toggleMute}
                    onSlideClick={() => {
                      if (swiperRef.current) {
                        swiperRef.current.slideToLoop(idx);
                      }
                    }}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation Controls: Two circular container buttons to move to next or go back */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            marginTop: '28px'
          }}
        >
          {/* Left Circular Arrow Button */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous video"
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              border: '1px solid rgba(19, 21, 21, 0.12)',
              boxShadow: '0 6px 18px rgba(19, 21, 21, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#131515',
              cursor: 'pointer',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#131515';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.transform = 'scale(1.08)';
              e.currentTarget.style.boxShadow = '0 10px 24px rgba(19, 21, 21, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.color = '#131515';
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 6px 18px rgba(19, 21, 21, 0.08)';
            }}
          >
            <ChevronLeft size={22} strokeWidth={2.2} />
          </button>

          {/* Right Circular Arrow Button */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next video"
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              border: '1px solid rgba(19, 21, 21, 0.12)',
              boxShadow: '0 6px 18px rgba(19, 21, 21, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#131515',
              cursor: 'pointer',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#131515';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.transform = 'scale(1.08)';
              e.currentTarget.style.boxShadow = '0 10px 24px rgba(19, 21, 21, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.color = '#131515';
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 6px 18px rgba(19, 21, 21, 0.08)';
            }}
          >
            <ChevronRight size={22} strokeWidth={2.2} />
          </button>
        </div>
      </div>
    </section>
  );
}
