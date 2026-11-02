import React, { useState } from 'react';
import { ArrowUpRight, ArrowLeft, Clock, Calendar, Tag, BookOpen, Sparkles, Share2, Check } from 'lucide-react';

const CATEGORIES = [
  'All Categories',
  'Metal Cards',
  'Business Cards',
  'Access Cards',
  'Payment Cards',
  'VIP Cards',
  'Card Wikipedia'
];

const ARTICLES = [
  {
    id: 'understanding-business-card-categories',
    slug: 'article-1',
    title: 'Understanding Business Card Categories',
    category: 'Business Cards',
    tag: 'Lifestyle',
    date: 'Oct 1, 2026',
    readTime: '5 min read',
    excerpt: 'An overview of business cards categories, their benefits, and popular platforms.',
    image: '/Xtreme cardz asset/CARD 19.webp',
    fallbackImage: 'https://framerusercontent.com/images/MDc8e866Fs6chT3px99iqkoyo.jpg?width=1200&height=1070',
    content: [
      'In a world dominated by digital inboxes and fleeting LinkedIn requests, the physical card remains the most immediate anchor of personal credibility. Yet, modern business cards are no longer uniform paper rectangles; they have diverged into specialized categories engineered for distinct business encounters.',
      '1. Tactical Metal & Luxury Cards: Designed for founders, managing directors, and private bankers. Machined from 316L stainless steel, brass, or titanium, their substantial hand-weight (20+ grams) commands instant pause and reverence.',
      '2. NFC Smart Hybrid Cards: Embedded with high-frequency microchips, these cards act as contactless gateways. A single tap against any smartphone instantly opens your digital profile, contact vCard, or custom portfolio.',
      '3. Enterprise & Proximity Badges: Tailored for high-security campus environments, integrating dual-chip RFID frequencies to ensure seamless building access alongside clean visual staff identification.',
      'Selecting the appropriate card category depends on your primary objective: are you seeking high-volume distribution or high-impact memorability? For those operating at the top of their industries, tactile memorability consistently yields the greatest returns.'
    ]
  },
  {
    id: 'identity-strategies-2026',
    slug: 'identity-strategies-2026',
    title: 'Identity Strategies for 2026',
    category: 'VIP Cards',
    tag: 'Corporate Strategy',
    date: 'Oct 3, 2026',
    readTime: '3 min read',
    excerpt: 'Discover the latest identity strategies for 2026 to enhance your visibility and representation.',
    image: '/Xtreme cardz asset/Black Matte Metal card.webp',
    fallbackImage: 'https://framerusercontent.com/images/OYjbGFeFtRaK5xxouRxEn3zMtfA.jpg?width=5041&height=5041',
    content: [
      'As artificial intelligence accelerates automated communication, authentic face-to-face rapport has grown exponentially in value. Forward-thinking organizations are rethinking how their teams present themselves at industry summits and client negotiations.',
      'The modern identity strategy relies on three pillars: tactile distinction, friction-free connectivity, and brand cohesion. When your executives present a card that feels substantial and functions seamlessly via tap-to-share, your brand demonstrates innovation and longevity.',
      'In 2026, the identity card is no longer an afterthought expense item; it is an active sales asset and cultural ambassador.'
    ]
  },
  {
    id: 'corporate-identity-strategies',
    slug: 'corporate-identity-strategies',
    title: 'Corporate Identity Strategies',
    category: 'Access Cards',
    tag: 'Technology',
    date: 'Oct 3, 2026',
    readTime: '3 min read',
    excerpt: 'Learn effective corporate identity strategies to engage your organization and achieve your business goals.',
    image: '/Xtreme cardz asset/CARD 20.webp',
    fallbackImage: 'https://framerusercontent.com/images/38hQqx2XpWVtVAMCUrp8MllUU.jpg?width=4000&height=2250',
    content: [
      'Unifying multiple physical security and identity touchpoints has traditionally been cumbersome for enterprise administrators. Today, unified smart credentials eliminate friction by combining staff badging, access control, and digital business cards into a single artifact.',
      'Key advantages include centralized cloud revocability, reduced replacement costs, and elevated employee pride. Carrying a finely crafted badge transforms an obligation into a badge of honor.'
    ]
  },
  {
    id: 'identity-tips-engaging-audiences',
    slug: 'identity-tips',
    title: 'Identity Tips',
    category: 'Metal Cards',
    tag: 'Travel',
    date: 'Oct 4, 2026',
    readTime: '5 min read',
    excerpt: 'Learn effective identity tips to engage your audience and build brand loyalty.',
    image: '/Xtreme cardz asset/ELITE_PASS_GOLD_2.webp',
    fallbackImage: 'https://framerusercontent.com/images/wlGihJYpWqbIZpHT1ClDFDgUmk.png?width=1800&height=2200',
    content: [
      'When you hand someone a card, touch receptors transmit cognitive signals faster than sight. The temperature of genuine metal, the texture of laser-etched lettering, and the clean edge beveling all contribute to a feeling of permanence.',
      'Tips for maximum impact:',
      '• Keep visual typography minimalist: Allow the texture of the material to carry the aesthetic.',
      '• Position the NFC chip intuitively so recipients can tap without second-guessing.',
      '• Pair your card with custom presentation sleeves to create a deliberate unboxing ritual.'
    ]
  },
  {
    id: 'building-an-identity-system',
    slug: 'building-identity-system',
    title: 'Building an Identity System',
    category: 'VIP Cards',
    tag: 'News',
    date: 'Oct 8, 2026',
    readTime: '5 min read',
    excerpt: 'Learn effective strategies for building an identity system to enhance organization’s engagement and culture.',
    image: '/Xtreme cardz asset/CARD 21.webp',
    fallbackImage: 'https://framerusercontent.com/images/o68ySUGItelO001iABjXqy2SM.png?width=1080&height=1080',
    content: [
      'Designing a cohesive card system requires accommodating multiple tiers: C-Suite titanium passes, senior management frosted metals, everyday employee access cards, and temporary visitor passes.',
      'A structured design system ensures visual continuity while celebrating milestone achievements and status within the organization.'
    ]
  },
  {
    id: 'best-practices-organizations-identity',
    slug: 'best-practices-organization-identity',
    title: 'Best Practices for Organization’s Identity',
    category: 'Business Cards',
    tag: 'Lifestyle',
    date: 'Oct 2, 2026',
    readTime: '4 min read',
    excerpt: 'Explore essential identity practices to enhance your brand presence and engage your audience.',
    image: '/Xtreme cardz asset/CARD 23.webp',
    fallbackImage: 'https://framerusercontent.com/images/MDc8e866Fs6chT3px99iqkoyo.jpg?width=1200&height=1070',
    content: [
      'Consistency is king. Discover how standardizing colors across screen and substrate guarantees that your brand looks as immaculate in hand as it does in high-resolution digital campaigns.',
      'Explore card maintenance, anti-wear coatings, and proper vector rasterization best practices.'
    ]
  }
];

export default function BlogPage({ onOpenQuote }) {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [copied, setCopied] = useState(false);

  const filteredArticles =
    selectedCategory === 'All Categories'
      ? ARTICLES
      : ARTICLES.filter((art) => art.category === selectedCategory || art.tag.toLowerCase().includes(selectedCategory.toLowerCase()));

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        color: '#131515',
        minHeight: '100vh',
        paddingTop: '130px',
        paddingBottom: '100px'
      }}
    >
      <div className="container">
        {/* Full Article Reader View */}
        {selectedArticle ? (
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <button
              onClick={() => setSelectedArticle(null)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: '50px',
                backgroundColor: '#f7f7f7',
                border: '1px solid rgba(19, 21, 21, 0.1)',
                fontSize: '14px',
                fontWeight: 600,
                color: '#131515',
                cursor: 'pointer',
                marginBottom: '32px'
              }}
            >
              <ArrowLeft size={16} />
              <span>Back to all articles</span>
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <span
                style={{
                  backgroundColor: 'rgba(2, 131, 167, 0.1)',
                  color: '#0283a7',
                  padding: '4px 12px',
                  borderRadius: '100px',
                  fontSize: '12.5px',
                  fontWeight: 600
                }}
              >
                {selectedArticle.tag}
              </span>
              <span style={{ fontSize: '13.5px', color: '#71717a', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Calendar size={13} /> {selectedArticle.date}
              </span>
              <span style={{ fontSize: '13.5px', color: '#71717a', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Clock size={13} /> {selectedArticle.readTime}
              </span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(32px, 4.5vw, 52px)',
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                color: '#131515',
                marginBottom: '28px'
              }}
            >
              {selectedArticle.title}
            </h1>

            <div
              style={{
                width: '100%',
                height: 'clamp(260px, 40vw, 420px)',
                borderRadius: '24px',
                overflow: 'hidden',
                marginBottom: '36px',
                boxShadow: '0 16px 36px rgba(0,0,0,0.06)'
              }}
            >
              <img
                src={selectedArticle.image}
                onError={(e) => {
                  e.currentTarget.src = selectedArticle.fallbackImage;
                }}
                alt={selectedArticle.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '17px', lineHeight: 1.8, color: '#334155', marginBottom: '48px' }}>
              {selectedArticle.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Bottom Article Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '24px 0',
                borderTop: '1px solid rgba(19, 21, 21, 0.1)',
                borderBottom: '1px solid rgba(19, 21, 21, 0.1)',
                marginBottom: '48px'
              }}
            >
              <button
                onClick={handleShare}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(19, 21, 21, 0.15)',
                  padding: '10px 18px',
                  borderRadius: '50px',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {copied ? <Check size={15} color="#059669" /> : <Share2 size={15} />}
                <span>{copied ? 'Link copied!' : 'Share article'}</span>
              </button>

              <button
                onClick={() => onOpenQuote(`Article enquiry: ${selectedArticle.title}`)}
                style={{
                  backgroundColor: '#000000',
                  color: '#ffffff',
                  padding: '10px 20px',
                  borderRadius: '50px',
                  fontSize: '14px',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Make enquiries
              </button>
            </div>
          </div>
        ) : (
          /* Main Articles Index View */
          <>
            {/* Page Header */}
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 16px',
                  borderRadius: '100px',
                  backgroundColor: 'rgba(19, 21, 21, 0.05)',
                  border: '1px solid rgba(19, 21, 21, 0.1)',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#131515',
                  marginBottom: '18px'
                }}
              >
                <Sparkles size={13} color="#cfa34b" />
                <span>All Articles</span>
              </div>

              <h1
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(38px, 5.5vw, 62px)',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                  color: '#131515',
                  marginBottom: '16px'
                }}
              >
                Insights & Identity Craft
              </h1>

              <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#494d4d', lineHeight: 1.6 }}>
                Explore strategic advice, material science, and card personalization insights to stay ahead in your industry.
              </p>
            </div>

            {/* Filter Tabs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                justifyContent: 'center',
                marginBottom: '48px'
              }}
            >
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      padding: '8px 18px',
                      borderRadius: '50px',
                      fontSize: '13.5px',
                      fontWeight: 600,
                      fontFamily: 'var(--font-heading)',
                      border: isActive ? '1px solid #000000' : '1px solid rgba(19, 21, 21, 0.1)',
                      backgroundColor: isActive ? '#000000' : '#f7f7f7',
                      color: isActive ? '#ffffff' : '#494d4d',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Articles Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '32px'
              }}
            >
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(19, 21, 21, 0.08)',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ width: '100%', height: '220px', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={article.image}
                      onError={(e) => {
                        e.currentTarget.src = article.fallbackImage;
                      }}
                      alt={article.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '14px',
                        left: '14px',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        backdropFilter: 'blur(8px)',
                        color: '#ffffff',
                        fontSize: '11.5px',
                        fontWeight: 600,
                        padding: '4px 10px',
                        borderRadius: '30px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em'
                      }}
                    >
                      {article.tag}
                    </div>
                  </div>

                  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '13px', color: '#71717a', marginBottom: '10px' }}>
                      <span>{article.date}</span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '20px',
                        fontWeight: 700,
                        color: '#131515',
                        lineHeight: 1.3,
                        marginBottom: '10px'
                      }}
                    >
                      {article.title}
                    </h3>

                    <p style={{ fontSize: '14.5px', color: '#666e6e', lineHeight: 1.6, marginBottom: '20px', flexGrow: 1 }}>
                      {article.excerpt}
                    </p>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingTop: '14px',
                        borderTop: '1px solid rgba(19, 21, 21, 0.06)',
                        fontSize: '13.5px',
                        fontWeight: 600,
                        color: '#131515'
                      }}
                    >
                      <span>Read article</span>
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
