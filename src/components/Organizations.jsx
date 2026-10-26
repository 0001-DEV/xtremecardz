import React from 'react';
import { ArrowRight, ArrowUpRight, Star } from 'lucide-react';

export default function Organizations({ onOpenQuote }) {
  return (
    <section
      id="products"
      style={{
        paddingTop: '60px',
        paddingBottom: '0px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        {/* Rating Pill Badge with only a star before it */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#ffffff',
            padding: '7px 18px',
            borderRadius: '50px',
            border: '1px solid rgba(19, 21, 21, 0.08)',
            boxShadow: '0 4px 12px rgba(19, 21, 21, 0.04)',
            marginBottom: '22px'
          }}
        >
          <Star size={14} fill="#ff9803" color="#ff9803" />
          <span style={{ fontSize: '13.5px', fontWeight: 600, color: '#131515', fontFamily: 'var(--font-heading)' }}>
            Patronized and used by top organisations around the world.
          </span>
        </div>

        {/* Headline */}
        <h2
          style={{
            fontSize: 'clamp(28px, 3.8vw, 46px)',
            fontWeight: 700,
            maxWidth: '860px',
            margin: '0 auto 30px',
            lineHeight: 1.25,
            color: '#131515',
            letterSpacing: '-0.03em'
          }}
        >
          Stay consistent with a corporate card system that fits into real life. Simple cards, clear identity, and gentle nudges help you build prestige that lasts.
        </h2>

        {/* Action Buttons: Get a quote in black bg and Make enquiries in glassmorphism transparent button */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            flexWrap: 'wrap'
          }}
        >
          <button
            onClick={() => onOpenQuote('Get a quote')}
            style={{
              padding: '13px 28px',
              fontSize: '15px',
              fontWeight: 600,
              backgroundColor: '#000000',
              color: '#ffffff',
              borderRadius: '50px',
              border: '1px solid #000000',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              display: 'inline-flex',
              alignItems: 'center',
              fontFamily: 'var(--font-heading)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.2)';
            }}
          >
            <span>Get a quote</span>
          </button>

          <button
            onClick={() => onOpenQuote('Make enquiries')}
            style={{
              padding: '13px 28px',
              fontSize: '15px',
              fontWeight: 600,
              backgroundColor: 'rgba(255, 255, 255, 0.75)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              color: '#131515',
              borderRadius: '50px',
              border: '1px solid rgba(19, 21, 21, 0.15)',
              boxShadow: '0 4px 16px rgba(19, 21, 21, 0.05)',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              display: 'inline-flex',
              alignItems: 'center',
              fontFamily: 'var(--font-heading)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.borderColor = 'rgba(19, 21, 21, 0.3)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(19, 21, 21, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.75)';
              e.currentTarget.style.borderColor = 'rgba(19, 21, 21, 0.15)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(19, 21, 21, 0.05)';
            }}
          >
            <span>Make enquiries</span>
          </button>
        </div>
      </div>

      {/* Full Section Width White Cloudscape (Height: 450px, Combination of many clouds) */}
      <div
        className="cloud-full-width-section"
        style={{
          position: 'relative',
          width: '100%',
          height: '450px',
          marginTop: '36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          pointerEvents: 'none',
          userSelect: 'none'
        }}
      >
        <style>{`
          @keyframes cloudDriftBack {
            0%, 100% { transform: translateX(0px) translateY(0px); }
            50% { transform: translateX(-24px) translateY(-6px); }
          }
          @keyframes cloudDriftMid {
            0%, 100% { transform: translateX(0px) translateY(0px); }
            50% { transform: translateX(20px) translateY(-8px); }
          }
          @keyframes cloudDriftFore {
            0%, 100% { transform: translateY(0px) scaleY(1); }
            50% { transform: translateY(-7px) scaleY(1.01); }
          }
          @keyframes puffFloatA {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-12px) translateX(8px); }
          }
          @keyframes puffFloatB {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(10px) translateX(-10px); }
          }
          @keyframes puffFloatC {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-8px) translateX(-6px); }
          }
        `}</style>

        {/* Ambient Mist Glow across full width behind clouds */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            height: '320px',
            background: 'radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.65) 50%, rgba(255, 255, 255, 0) 80%)',
            filter: 'blur(45px)',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />

        <svg
          viewBox="0 0 1920 450"
          preserveAspectRatio="xMidYBottom slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: '100%',
            height: '450px',
            position: 'relative',
            zIndex: 1,
            filter: 'drop-shadow(0 20px 40px rgba(19, 21, 21, 0.04)) drop-shadow(0 4px 14px rgba(255, 255, 255, 0.85))'
          }}
        >
          <defs>
            <linearGradient id="cloudGradBg" x1="960" y1="50" x2="960" y2="450" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.92)" />
              <stop offset="100%" stopColor="rgba(235, 240, 246, 0.65)" />
            </linearGradient>

            <linearGradient id="cloudGradMid" x1="960" y1="30" x2="960" y2="450" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="70%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#eaf0f5" />
            </linearGradient>

            <linearGradient id="cloudGradFore" x1="960" y1="80" x2="960" y2="450" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f3f6f9" />
            </linearGradient>

            <linearGradient id="crestHighlight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* LAYER 1: Deep Background Clouds (spanning edge to edge) */}
          <g style={{ animation: 'cloudDriftBack 16s ease-in-out infinite' }} opacity="0.75">
            {/* Back Cloud Cluster Left */}
            <path
              d="M -60,450 
                 L -60,320 
                 C -40,260 20,230 75,250 
                 C 105,190 175,160 240,185 
                 C 285,150 355,150 405,190 
                 C 445,160 515,160 565,200 
                 C 605,180 665,190 705,230 
                 C 745,210 805,220 845,260 
                 C 875,300 860,360 830,450 Z"
              fill="url(#cloudGradBg)"
            />

            {/* Back Cloud Cluster Center-Right */}
            <path
              d="M 780,450 
                 L 780,310 
                 C 820,240 890,210 960,230 
                 C 1010,160 1100,130 1180,160 
                 C 1240,130 1320,140 1375,185 
                 C 1425,155 1500,165 1550,210 
                 C 1600,185 1675,200 1720,245 
                 C 1765,225 1835,245 1870,295 
                 C 1905,340 1900,400 1880,450 Z"
              fill="url(#cloudGradBg)"
            />

            {/* Back Cloud Cluster Far Right */}
            <path
              d="M 1750,450 
                 L 1750,320 
                 C 1780,260 1845,235 1900,255 
                 C 1940,220 2000,230 2040,280 
                 L 2040,450 Z"
              fill="url(#cloudGradBg)"
            />
          </g>

          {/* LAYER 2: Midground Clouds with Rich Cumulus Crests */}
          <g style={{ animation: 'cloudDriftMid 12s ease-in-out infinite' }} opacity="0.92">
            {/* Midground Spanning Cloud Bank 1 (Left to Mid) */}
            <path
              d="M -80,450 
                 L -80,280 
                 C -50,210 15,185 80,210 
                 C 120,140 205,115 280,140 
                 C 330,95 425,90 495,130 
                 C 545,95 635,90 705,135 
                 C 760,110 840,120 895,170 
                 C 945,140 1025,150 1075,200 
                 C 1120,245 1110,330 1080,450 Z"
              fill="url(#cloudGradMid)"
            />

            {/* Midground Spanning Cloud Bank 2 (Center to Right) */}
            <path
              d="M 980,450 
                 L 980,270 
                 C 1020,195 1105,170 1180,195 
                 C 1230,120 1335,100 1420,130 
                 C 1485,90 1585,95 1650,140 
                 C 1710,110 1800,125 1860,175 
                 C 1915,150 1985,175 2020,230 
                 L 2040,450 Z"
              fill="url(#cloudGradMid)"
            />
          </g>

          {/* LAYER 3: Majestic Foreground Cloudscape across entire 1920 width */}
          <g style={{ animation: 'cloudDriftFore 9s ease-in-out infinite' }}>
            <path
              d="M -100,450 
                 L -100,240 
                 C -70,170 -5,140 65,165 
                 C 105,100 185,75 260,100 
                 C 305,60 385,50 455,85 
                 C 505,50 585,45 650,80 
                 C 700,55 770,60 825,95 
                 C 875,65 955,60 1025,90 
                 C 1075,55 1160,50 1230,85 
                 C 1285,55 1370,60 1435,95 
                 C 1495,65 1585,70 1655,105 
                 C 1715,75 1800,85 1865,130 
                 C 1925,105 2005,130 2050,190 
                 L 2050,450 Z"
              fill="url(#cloudGradFore)"
            />

            {/* Volumetric Crest Highlights for 3D realism */}
            <path
              d="M 255,100 C 300,60 375,52 445,85 C 410,120 340,135 270,125 Z"
              fill="url(#crestHighlight)"
              opacity="0.85"
            />
            <path
              d="M 450,85 C 495,52 575,48 640,80 C 610,115 540,128 470,118 Z"
              fill="url(#crestHighlight)"
              opacity="0.9"
            />
            <path
              d="M 645,80 C 695,55 765,60 820,95 C 785,130 720,140 660,130 Z"
              fill="url(#crestHighlight)"
              opacity="0.8"
            />
            <path
              d="M 870,68 C 925,60 995,62 1055,95 C 1020,135 950,145 890,135 Z"
              fill="url(#crestHighlight)"
              opacity="0.85"
            />
            <path
              d="M 1070,60 C 1130,52 1210,54 1275,90 C 1240,130 1170,140 1105,130 Z"
              fill="url(#crestHighlight)"
              opacity="0.9"
            />
            <path
              d="M 1280,60 C 1340,58 1415,64 1475,100 C 1435,138 1365,145 1310,135 Z"
              fill="url(#crestHighlight)"
              opacity="0.85"
            />
            <path
              d="M 1490,68 C 1555,68 1630,75 1690,112 C 1650,150 1575,155 1520,142 Z"
              fill="url(#crestHighlight)"
              opacity="0.8"
            />
          </g>

          {/* LAYER 4: Multiple Floating Accent Cloud Puffs at Varying Heights */}
          {/* Accent Cloud 1: Floating high left */}
          <g style={{ animation: 'puffFloatA 7s ease-in-out infinite' }}>
            <path
              d="M 120,120 
                 C 95,120 75,102 75,80 
                 C 75,62 88,48 106,46 
                 C 114,28 136,15 160,18 
                 C 178,20 194,32 199,48 
                 C 212,53 220,66 220,82 
                 C 220,103 202,120 180,120 Z"
              fill="#ffffff"
              opacity="0.95"
              filter="drop-shadow(0 8px 18px rgba(19, 21, 21, 0.05))"
            />
          </g>

          {/* Accent Cloud 2: Floating mid-left */}
          <g style={{ animation: 'puffFloatB 8.5s ease-in-out infinite' }}>
            <path
              d="M 480,115 
                 C 455,115 435,98 435,76 
                 C 435,58 448,44 466,42 
                 C 475,24 498,12 522,15 
                 C 542,18 558,30 564,48 
                 C 578,54 588,68 588,84 
                 C 588,105 568,115 545,115 Z"
              fill="#ffffff"
              opacity="0.92"
              filter="drop-shadow(0 8px 18px rgba(19, 21, 21, 0.04))"
            />
          </g>

          {/* Accent Cloud 3: Floating center crest */}
          <g style={{ animation: 'puffFloatC 6.8s ease-in-out infinite' }}>
            <path
              d="M 910,95 
                 C 885,95 865,78 865,58 
                 C 865,42 878,30 894,28 
                 C 902,12 922,2 944,5 
                 C 962,8 977,18 982,32 
                 C 994,36 1004,48 1004,62 
                 C 1004,80 986,95 965,95 Z"
              fill="#ffffff"
              opacity="0.94"
              filter="drop-shadow(0 8px 18px rgba(19, 21, 21, 0.04))"
            />
          </g>

          {/* Accent Cloud 4: Floating mid-right */}
          <g style={{ animation: 'puffFloatA 8s ease-in-out infinite' }}>
            <path
              d="M 1340,110 
                 C 1315,110 1295,92 1295,72 
                 C 1295,55 1308,42 1326,40 
                 C 1335,22 1358,10 1382,14 
                 C 1402,18 1418,30 1424,46 
                 C 1438,52 1448,66 1448,82 
                 C 1448,102 1428,110 1405,110 Z"
              fill="#ffffff"
              opacity="0.93"
              filter="drop-shadow(0 8px 18px rgba(19, 21, 21, 0.04))"
            />
          </g>

          {/* Accent Cloud 5: Floating far right */}
          <g style={{ animation: 'puffFloatB 7.5s ease-in-out infinite' }}>
            <path
              d="M 1720,125 
                 C 1695,125 1675,108 1675,88 
                 C 1675,70 1688,58 1706,56 
                 C 1714,38 1736,26 1760,29 
                 C 1778,32 1794,44 1799,60 
                 C 1812,65 1820,78 1820,94 
                 C 1820,115 1802,125 1780,125 Z"
              fill="#ffffff"
              opacity="0.95"
              filter="drop-shadow(0 8px 18px rgba(19, 21, 21, 0.05))"
            />
          </g>
        </svg>
      </div>
    </section>
  );
}
