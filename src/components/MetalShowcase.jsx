import { getAsset } from '../assets/assetUrl';
import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';

const SHOWCASE_VIDEOS = [
  {
    id: 'gold-metal',
    title: '24K Mirror Gold Metal Card',
    category: 'Prestige Tier',
    desc: 'Real 24K gold electroplated stainless steel with mirror polish and precision laser cutouts.',
    videoUrl: '/videos/metal-card-showcase.mp4',
    poster: getAsset('card-24k-mirror-gold.jpg')
  },
  {
    id: 'black-matte',
    title: 'Black Matte Stealth VIP Card',
    category: 'Stealth Series',
    desc: 'Deep anodized matte black metal with tactical anti-fingerprint coating and silver laser accents.',
    videoUrl: '/videos/metal-card-showcase.mp4',
    poster: getAsset('card-black-matte-stealth.png')
  },
  {
    id: 'gun-metal',
    title: 'Gunmetal Titanium Business Card',
    category: 'Industrial Craft',
    desc: 'Brushed titanium gunmetal with dark smoky luster and tactile acid-etched typography.',
    videoUrl: '/videos/metal-card-showcase.mp4',
    poster: getAsset('card-gunmetal-titanium.png')
  },
  {
    id: 'metal-vip',
    title: 'Dual-Tone Metal VIP Access Pass',
    category: 'Elite Access',
    desc: 'High-frequency RFID & NFC dual-chip embedded smart identity for bespoke executive access.',
    videoUrl: '/videos/metal-card-showcase.mp4',
    poster: getAsset('card-metal-vip-access.png')
  },
  {
    id: 'precision-craft',
    title: 'Sub-Millimeter CNC Cutout & Finish',
    category: 'Master Craft',
    desc: 'Architectural-grade 316L solid stainless steel engineered to leave an indelible impression.',
    videoUrl: '/videos/metal-card-showcase.mp4',
    poster: getAsset('card-submillimeter-cnc.png')
  },
  {
    id: 'luxury-unboxing',
    title: 'Signature Executive Packaging',
    category: 'Signature Touch',
    desc: 'Bespoke presentation sleeve with magnetic closure and certificate of authenticity.',
    videoUrl: '/videos/metal-card-showcase.mp4',
    poster: getAsset('card-luxury-unboxing.jpg')
  }
];

export default function MetalShowcase({ onOpenQuote }) {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeVideoPlaying, setActiveVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleVideo = (e) => {
    e.stopPropagation();
    if (activeVideoPlaying) {
      if (videoRef.current) videoRef.current.pause();
      setActiveVideoPlaying(false);
    } else {
      setActiveVideoPlaying(true);
      setTimeout(() => {
        if (videoRef.current) videoRef.current.play();
      }, 50);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section
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
            padding: '10px 0'
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
              width: clamp(290px, 36vw, 440px) !important;
              height: 400px;
              border-radius: 24px;
              overflow: hidden;
              background-color: #0a0b0b;
              border: 1px solid rgba(19, 21, 21, 0.1);
              transition: height 0.5s cubic-bezier(0.25, 1, 0.5, 1),
                          transform 0.5s cubic-bezier(0.25, 1, 0.5, 1),
                          opacity 0.5s ease,
                          box-shadow 0.5s ease !important;
              opacity: 0.78;
              transform: scale(0.92);
              cursor: pointer;
              flex-shrink: 0;
            }
            .metal-video-swiper .swiper-slide-active {
              height: 500px !important;
              opacity: 1 !important;
              transform: scale(1) !important;
              border: 1px solid rgba(255, 255, 255, 0.16) !important;
              box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35) !important;
              cursor: pointer;
              z-index: 10;
            }
            @media (max-width: 640px) {
              .metal-video-swiper .swiper-slide {
                width: 84vw !important;
                height: 380px;
              }
              .metal-video-swiper .swiper-slide-active {
                height: 440px !important;
              }
            }
            @media (max-height: 520px) {
              .metal-video-swiper .swiper-slide {
                height: 250px !important;
              }
              .metal-video-swiper .swiper-slide-active {
                height: 290px !important;
              }
            }
          `}</style>

          <Swiper
            modules={[Navigation]}
            slidesPerView={'auto'}
            centeredSlides={true}
            loop={true}
            spaceBetween={36}
            speed={550}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
              setActiveVideoPlaying(false);
            }}
            className="metal-video-swiper"
          >
            {SHOWCASE_VIDEOS.map((video, idx) => {
              const isCenter = activeIndex === idx;

              return (
                <SwiperSlide
                  key={video.id}
                  onClick={() => {
                    if (!isCenter && swiperRef.current) {
                      swiperRef.current.slideToLoop(idx);
                    } else if (isCenter) {
                      toggleVideo({ stopPropagation: () => {} });
                    }
                  }}
                  style={{ position: 'relative' }}
                >
                  {/* Distinct Picture for every card: visibly changes on every slide */}
                  <img
                    src={video.poster}
                    alt={video.title}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: isCenter ? 'none' : 'brightness(0.75)',
                      transition: 'filter 0.4s ease',
                      zIndex: 1
                    }}
                  />

                  {/* Active Center Video: only plays if user toggles play */}
                  {isCenter && activeVideoPlaying && (
                    <video
                      ref={videoRef}
                      src={video.videoUrl}
                      playsInline
                      muted={isMuted}
                      loop
                      autoPlay
                      onClick={toggleVideo}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        cursor: 'pointer',
                        zIndex: 2
                      }}
                    />
                  )}

                  {/* Center Card Subtle Radial Glow */}
                  {isCenter && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '-40px',
                        right: '-40px',
                        width: '180px',
                        height: '180px',
                        background: 'radial-gradient(circle, rgba(207, 163, 75, 0.35) 0%, transparent 70%)',
                        filter: 'blur(30px)',
                        pointerEvents: 'none',
                        zIndex: 3
                      }}
                    />
                  )}

                  {/* Video Audio Control Overlay (when center video is active) */}
                  {isCenter && activeVideoPlaying && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '18px',
                        right: '18px',
                        display: 'flex',
                        gap: '8px',
                        zIndex: 4
                      }}
                    >
                      <button
                        onClick={toggleVideo}
                        aria-label="Pause video"
                        style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(19, 21, 21, 0.85)',
                          backdropFilter: 'blur(14px)',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer'
                        }}
                      >
                        <Pause size={15} />
                      </button>

                      <button
                        onClick={toggleMute}
                        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                        style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(19, 21, 21, 0.85)',
                          backdropFilter: 'blur(14px)',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer'
                        }}
                      >
                        {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                      </button>
                    </div>
                  )}

                  {/* Center Play Button Overlay (when center video is not playing) */}
                  {isCenter && !activeVideoPlaying && (
                    <div
                      onClick={toggleVideo}
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(12px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#131515',
                        boxShadow: '0 10px 28px rgba(0, 0, 0, 0.25)',
                        zIndex: 3,
                        cursor: 'pointer',
                        transition: 'transform 0.25s ease'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)')}
                    >
                      <Play size={24} fill="#131515" style={{ marginLeft: '3px' }} />
                    </div>
                  )}
                </SwiperSlide>
              );
            })}
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
