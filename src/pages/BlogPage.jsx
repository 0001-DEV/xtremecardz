import { getAsset } from '../assets/assetUrl';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ARROW_ICON = getAsset('icon-arrow-diagonal.svg');
const DARK_CALENDAR_ICON = getAsset('icon-calendar-dark.svg');
const DARK_CLOCK_ICON = getAsset('icon-clock-dark.svg');
const LIGHT_TAG_ICON = getAsset('icon-tag-light.svg');
const LIGHT_META_ICON = getAsset('icon-meta-light.svg');

const CATEGORIES = [
  'Metal Cards',
  'Business Cards',
  'Access Cards',
  'Payment Cards',
  'VIP Cards',
  'Card Wikipedia'
];

const ARTICLES = [
  {
    id: 'understanding-framer-cms',
    slug: 'understanding-framer-cms',
    tag: 'Lifestyle',
    date: 'Oct 1, 2026',
    readTime: '5  min read',
    title: 'Understanding Business Card Categories',
    excerpt: 'An overview of business cards categories, their benefits, and popular platforms.',
    image: getAsset('card-gunmetal-titanium.png')
  },
  {
    id: 'seo-strategies-for-2024',
    slug: 'understanding-framer-cms',
    tag: 'Health & Wellness',
    date: 'Oct 3, 2026',
    readTime: '3 min read',
    title: 'Identity Strategies for 2026',
    excerpt: 'Discover the latest identity strategies for 2026 to enhance your visibility and representation.',
    image: getAsset('blog-modern-nfc-future.jpg')
  },
  {
    id: 'content-marketing-strategies',
    slug: 'understanding-framer-cms',
    tag: 'Technology',
    date: 'Oct 3, 2026',
    readTime: '3 min read',
    title: 'Corporate Identity Strategies',
    excerpt: 'Learn effective corporate identity strategies to engage your organization and achieve your business goals.',
    image: getAsset('blog-laser-cut-finishes.jpg')
  },
  {
    id: 'social-media-marketing-tips',
    slug: 'understanding-framer-cms',
    tag: 'Travel',
    date: 'Oct 4, 2026',
    readTime: '5 min read',
    title: 'Identity Tips',
    excerpt: 'Learn effective identity tips to engage your audience and build brand loyalty.',
    image: getAsset('blog-stainless-steel-longevity.jpg')
  },
  {
    id: 'building-an-email-list',
    slug: 'understanding-framer-cms',
    tag: 'News',
    date: 'Oct 8, 2026',
    readTime: '5 min read',
    title: 'Building an Identity System',
    excerpt: "Learn effective strategies for building an identity system to enhance organization's engagement and culture.",
    image: getAsset('blog-hybrid-smart-metal.png')
  },
  {
    id: 'best-practices-for-e-commerce-websites',
    slug: 'understanding-framer-cms',
    tag: 'Lifestyle',
    date: 'Oct 2, 2026',
    readTime: "Best Practices for Organization's Identity",
    readTimeLabel: '4 min read',
    title: "Best Practices for Organization's Identity",
    excerpt: 'Explore essential identity practices to enhance your brand presence and engage your audience.',
    image: getAsset('card-metal-vip-access.png')
  }
];

export default function BlogPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);

  const isDetailView = Boolean(slug);

  useEffect(() => {
    if (!isDetailView) return undefined;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        setScrollProgress(0);
      } else {
        setScrollProgress(Math.min(1, Math.max(0, scrollTop / docHeight)));
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isDetailView]);

  const openDetailPage = (e) => {
    if (e) e.preventDefault();
    navigate('/blog/understanding-business-card-categories');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openIndexPage = (e) => {
    if (e) e.preventDefault();
    navigate('/blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="xc-blog-page">
      <style>{`
        .xc-blog-page {
          background-color: #f7f7f7;
          color: #121212;
          min-height: 100vh;
          width: 100%;
          font-family: var(--font-body);
        }

        /* =========================================
           VIEW 1: ALL ARTICLES (/article-1)
           ========================================= */
        .xc-blog-index-section {
          width: 100%;
          padding: 160px 35px 50px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .xc-blog-index-container {
          width: 100%;
          max-width: 1200px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 50px;
        }
        .xc-blog-index-hero {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .xc-blog-index-hero h2 {
          font-family: var(--font-heading);
          font-weight: 500;
          font-size: 90px;
          line-height: 1em;
          letter-spacing: -0.03em;
          color: #131515;
          text-align: center;
          margin: 0;
        }
        .xc-blog-index-content {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-start;
        }
        .xc-blog-cards-col {
          flex: 1 0 0px;
          width: 1px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .xc-blog-card-row {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 30px;
          text-decoration: none;
          color: inherit;
          cursor: pointer;
        }
        .xc-blog-card-img-wrap {
          flex: 1 0 0px;
          max-width: 650px;
          aspect-ratio: 1 / 1;
          border-radius: 10px;
          position: relative;
          overflow: hidden;
          background-color: #e5e5e5;
        }
        .xc-blog-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          border-radius: 10px;
          display: block;
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .xc-blog-card-row:hover .xc-blog-card-img {
          transform: scale(1.1);
        }
        .xc-blog-card-top-bar {
          position: absolute;
          top: 15px;
          left: 0;
          width: 100%;
          padding: 0 15px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          z-index: 2;
          pointer-events: none;
        }
        .xc-blog-tag-pill {
          background-color: #121212;
          border-radius: 6px;
          padding: 5px 8px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .xc-blog-tag-pill span {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 14px;
          line-height: 1.5em;
          color: #c1c1be;
        }
        .xc-blog-arrow-box {
          width: 38px;
          height: 38px;
          background-color: #121212;
          border-radius: 7px;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .xc-blog-arrow-icon-primary,
        .xc-blog-arrow-icon-secondary {
          width: 16px;
          height: 16px;
          position: absolute;
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .xc-blog-arrow-icon-primary {
          transform: translate(0, 0);
        }
        .xc-blog-arrow-icon-secondary {
          transform: translate(-28px, 0);
        }
        .xc-blog-card-row:hover .xc-blog-arrow-icon-primary,
        .xc-blog-related-card:hover .xc-blog-arrow-icon-primary {
          transform: translate(28px, 0);
        }
        .xc-blog-card-row:hover .xc-blog-arrow-icon-secondary,
        .xc-blog-related-card:hover .xc-blog-arrow-icon-secondary {
          transform: translate(0, 0);
        }

        .xc-blog-card-body {
          flex: 1 0 0px;
          max-width: 400px;
          align-self: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 20px;
        }
        .xc-blog-meta-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 14px;
          width: 100%;
        }
        .xc-blog-meta-item {
          display: inline-flex;
          flex-direction: row;
          align-items: center;
          gap: 6px;
        }
        .xc-blog-meta-item img {
          width: 14px;
          height: 14px;
          display: block;
        }
        .xc-blog-meta-item span {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 14px;
          line-height: 1.5em;
          color: #121212;
          white-space: pre;
        }
        .xc-blog-meta-divider {
          width: 1px;
          height: 16px;
          background-color: #aaa9a5;
        }
        .xc-blog-card-text-group {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 30px;
          width: 100%;
        }
        .xc-blog-card-text-group h3 {
          font-family: var(--font-heading);
          font-weight: 500;
          font-size: 37px;
          line-height: 1.1em;
          letter-spacing: 0px;
          color: #121212;
          margin: 0;
        }
        .xc-blog-card-text-group p {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 18px;
          line-height: 1.1em;
          letter-spacing: 0px;
          color: #121212;
          margin: 0;
        }
        .xc-blog-load-more-btn {
          width: 100px;
          height: 40px;
          background-color: #121212;
          border-radius: 100px;
          border: none;
          color: #ffffff;
          font-family: var(--font-heading);
          font-weight: 500;
          font-size: 14px;
          line-height: 1.2em;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .xc-blog-load-more-btn:hover {
          opacity: 0.88;
        }

        /* Sticky Right Sidebar */
        .xc-blog-sidebar {
          flex: 1 0 0px;
          max-width: 400px;
          padding: 0 0 0 20px;
          position: sticky;
          top: 150px;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        .xc-blog-sidebar-inner {
          width: 100%;
          max-width: 390px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 50px;
        }
        .xc-blog-sidebar-heading {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 9px;
          width: 100%;
        }
        .xc-blog-sidebar-heading-bold {
          font-family: var(--font-heading);
          font-weight: 500;
          font-size: 22px;
          line-height: 1.09em;
          text-transform: uppercase;
          color: #121212;
          margin: 0;
        }
        .xc-blog-sidebar-heading-reg {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 22px;
          line-height: 1.09em;
          text-transform: uppercase;
          color: #121212;
          margin: 0;
        }
        .xc-blog-categories-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(2, minmax(50px, 1fr));
          gap: 15px;
        }
        .xc-blog-category-btn {
          width: 100%;
          padding: 14px 10px 15px;
          border: 1px solid #aaa9a5;
          border-radius: 10px;
          background: transparent;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          text-decoration: none;
        }
        .xc-blog-category-btn-bg {
          position: absolute;
          left: 0;
          right: 0;
          bottom: -140px;
          height: 128px;
          background-color: #aaa9a5;
          border-radius: 263px;
          transition: bottom 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          z-index: 1;
          pointer-events: none;
        }
        .xc-blog-category-btn:hover .xc-blog-category-btn-bg {
          bottom: -17px;
        }
        .xc-blog-category-btn-text-wrap {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .xc-blog-category-btn-text {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 18px;
          line-height: 1.3em;
          color: #121212;
          white-space: nowrap;
        }
        .xc-blog-category-btn-line {
          width: 0%;
          height: 1px;
          background-color: #121212;
          transition: width 0.35s cubic-bezier(0.22, 1, 0.36, 1);
          margin-top: 2px;
        }
        .xc-blog-category-btn:hover .xc-blog-category-btn-line {
          width: 100%;
        }

        .xc-blog-divider-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 35px;
        }
        .xc-blog-divider-line {
          width: 100%;
          height: 1px;
          background-color: #aaa9a5;
        }

        /* =========================================
           VIEW 2: ARTICLE DETAIL (/article-1/understanding-framer-cms)
           ========================================= */
        .xc-detail-hero-section {
          width: 100%;
          padding: 180px 35px 50px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .xc-detail-hero-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 50px;
        }
        .xc-detail-hero-top {
          width: 100%;
          max-width: 1200px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 50px;
        }
        .xc-detail-title-group {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
        }
        .xc-detail-cat-pill {
          background-color: #121212;
          border-radius: 6px;
          padding: 7px 9px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .xc-detail-cat-pill span {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 14px;
          line-height: 1.5em;
          color: #f7f7f7;
        }
        .xc-detail-title-group h1 {
          font-family: var(--font-heading);
          font-weight: 500;
          font-size: 100px;
          line-height: 1em;
          letter-spacing: -5px;
          color: #121212;
          text-align: center;
          max-width: 1200px;
          margin: 0;
        }
        .xc-detail-subtitle {
          font-family: var(--font-heading);
          font-weight: 500;
          font-size: 23px;
          line-height: 1.2em;
          letter-spacing: 0px;
          color: #121212;
          text-align: center;
          max-width: 604px;
          margin: 0;
        }
        .xc-detail-hero-img-wrap {
          width: 100%;
          height: 85vh;
          border-radius: 10px;
          overflow: hidden;
          position: relative;
        }
        .xc-detail-hero-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        /* Sticky Reading Bar */
        .xc-detail-sticky-bar {
          position: sticky;
          top: 0;
          z-index: 3;
          width: 100%;
          padding: 20px 0;
          background-color: #f7f7f7;
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }
        .xc-detail-sticky-bar-inner {
          padding: 0 30px;
          display: flex;
          align-items: center;
        }
        .xc-detail-sticky-bar-inner p {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 18px;
          line-height: 1.1em;
          color: #121212;
          margin: 0;
        }
        .xc-detail-sticky-progress {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: #121212;
          transform-origin: 0% 50%;
        }

        .xc-detail-top-line-wrap {
          width: 100%;
          padding: 50px 0 2px;
        }
        .xc-detail-top-line {
          width: 100%;
          height: 1px;
          background-color: #aaa9a5;
        }

        /* Article Details Body Section */
        .xc-detail-body-section {
          width: 100%;
          padding: 70px 35px 100px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .xc-detail-body-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }
        .xc-detail-text-block {
          width: 100%;
          max-width: 616px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .xc-detail-text-block p {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 16px;
          line-height: 1.2em;
          color: #121212;
          margin: 0;
        }
        .xc-detail-text-block ul {
          margin: 0;
          padding-left: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .xc-detail-text-block li {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 16px;
          line-height: 1.2em;
          color: #121212;
        }
        .xc-detail-text-block strong {
          font-family: var(--font-heading);
          font-weight: 500;
        }
        .xc-detail-tall-img-wrap {
          width: 100%;
          height: 130vh;
          border-radius: 10px;
          overflow: hidden;
          position: relative;
        }
        .xc-detail-tall-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }
        .xc-detail-mid-img-wrap {
          width: 100%;
          max-width: 812px;
          aspect-ratio: 0.970131 / 1;
          border-radius: 10px;
          overflow: hidden;
          position: relative;
        }
        .xc-detail-mid-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        /* Related Articles Section */
        .xc-detail-related-section {
          width: 100%;
          padding: 100px 35px 50px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .xc-detail-related-container {
          width: 100%;
          max-width: 1200px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 60px;
        }
        .xc-detail-related-header {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        .xc-detail-related-title {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .xc-detail-related-title-bold {
          font-family: var(--font-heading);
          font-weight: 500;
          font-size: 53px;
          line-height: 1.09em;
          text-transform: uppercase;
          color: #121212;
          margin: 0;
        }
        .xc-detail-related-title-reg {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 53px;
          line-height: 1.09em;
          text-transform: uppercase;
          color: #121212;
          margin: 0;
        }
        .xc-detail-related-right {
          max-width: 412px;
          padding-right: 28px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 15px;
        }
        .xc-detail-related-right p {
          font-family: var(--font-heading);
          font-weight: 500;
          font-size: 23px;
          line-height: 1.2em;
          color: #121212;
          margin: 0;
        }
        .xc-detail-view-all-btn {
          height: 53px;
          padding: 14px 28px;
          background-color: #121212;
          border-radius: 100px;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .xc-detail-view-all-btn-bg {
          position: absolute;
          left: 0;
          right: 0;
          bottom: -55px;
          height: 50px;
          background-color: #313131;
          border-radius: 99px;
          transition: bottom 0.35s cubic-bezier(0.22, 1, 0.36, 1), height 0.35s cubic-bezier(0.22, 1, 0.36, 1);
          z-index: 1;
        }
        .xc-detail-view-all-btn:hover .xc-detail-view-all-btn-bg {
          bottom: 0;
          height: 75px;
        }
        .xc-detail-view-all-btn span {
          position: relative;
          z-index: 2;
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 16px;
          line-height: 1.7em;
          color: #c1c1be;
        }

        /* 3-Column Dark Related Cards Grid */
        .xc-blog-related-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(3, minmax(50px, 1fr));
          gap: 20px;
        }
        .xc-blog-related-card {
          width: 100%;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          cursor: pointer;
        }
        .xc-blog-related-img-wrap {
          width: 100%;
          aspect-ratio: 1.5 / 1;
          border-radius: 10px 10px 0 0;
          overflow: hidden;
          position: relative;
        }
        .xc-blog-related-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .xc-blog-related-card:hover .xc-blog-related-img {
          transform: scale(1.1);
        }
        .xc-blog-related-arrow-pos {
          position: absolute;
          bottom: 5px;
          right: 5px;
          z-index: 2;
        }
        .xc-blog-related-body {
          width: 100%;
          background-color: #121212;
          border-radius: 0 0 10px 10px;
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
          flex: 1;
        }
        .xc-blog-related-top {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 11px;
        }
        .xc-blog-related-tag-row {
          display: inline-flex;
          flex-direction: row;
          align-items: center;
          gap: 6px;
        }
        .xc-blog-related-tag-row img {
          width: 14px;
          height: 14px;
          display: block;
        }
        .xc-blog-related-tag-row span {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 14px;
          line-height: 1.5em;
          color: #c1c1be;
        }
        .xc-blog-related-top h3 {
          font-family: var(--font-heading);
          font-weight: 500;
          font-size: 23px;
          line-height: 1.2em;
          color: #c1c1be;
          margin: 0;
        }
        .xc-blog-related-meta-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 14px;
          width: 100%;
        }
        .xc-blog-related-meta-item {
          display: inline-flex;
          flex-direction: row;
          align-items: center;
          gap: 6px;
        }
        .xc-blog-related-meta-item img {
          width: 14px;
          height: 14px;
          display: block;
        }
        .xc-blog-related-meta-item span {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 14px;
          line-height: 1.5em;
          color: #c1c1be;
          white-space: pre;
        }
        .xc-blog-related-meta-divider {
          width: 1px;
          height: 16px;
          background-color: rgba(170, 169, 165, 0.42);
        }

        /* =========================================
           RESPONSIVE BREAKPOINTS
           ========================================= */
        @media (max-width: 1199px) {
          .xc-blog-index-section {
            padding: 150px 25px 50px;
          }
          .xc-blog-index-hero h2 {
            font-size: 60px;
          }
          .xc-blog-card-text-group h3 {
            font-size: 34px;
          }
          .xc-detail-hero-section {
            padding: 150px 25px 50px;
          }
          .xc-detail-title-group h1 {
            font-size: 64px;
          }
          .xc-detail-body-section {
            padding: 70px 25px 80px;
          }
          .xc-detail-related-section {
            padding: 80px 25px 50px;
          }
          .xc-blog-related-grid {
            grid-template-columns: repeat(2, minmax(50px, 1fr));
          }
        }

        @media (max-width: 809px) {
          .xc-blog-index-section {
            padding: 120px 15px 50px;
          }
          .xc-blog-index-hero h2 {
            font-size: clamp(30px, 8vw, 44px);
          }
          .xc-blog-index-content {
            flex-direction: column;
            gap: 50px;
          }
          .xc-blog-cards-col {
            width: 100%;
            flex: none;
            gap: 40px;
          }
          .xc-blog-card-row {
            flex-direction: column;
            gap: 20px;
          }
          .xc-blog-card-img-wrap {
            width: 100%;
            max-width: 100%;
            flex: none;
          }
          .xc-blog-card-body {
            width: 100%;
            max-width: 100%;
            flex: none;
          }
          .xc-blog-card-text-group {
            gap: 20px;
          }
          .xc-blog-card-text-group h3 {
            font-size: 26px;
          }
          .xc-blog-sidebar {
            width: 100%;
            max-width: 100%;
            padding: 0;
            position: relative;
            top: 0;
            align-items: flex-start;
          }
          .xc-blog-sidebar-inner {
            max-width: 100%;
            gap: 25px;
          }
          .xc-detail-hero-section {
            padding: 120px 15px 50px;
          }
          .xc-detail-title-group h1 {
            font-size: clamp(30px, 8vw, 44px);
            letter-spacing: -1.5px;
          }
          .xc-detail-subtitle {
            font-size: 18px;
          }
          .xc-detail-hero-img-wrap {
            height: clamp(260px, 50vh, 560px);
          }
          .xc-detail-sticky-bar-inner {
            padding: 0 15px;
          }
          .xc-detail-body-section {
            padding: 50px 15px 60px;
          }
          .xc-detail-tall-img-wrap {
            height: clamp(320px, 65vh, 680px);
          }
          .xc-detail-related-section {
            padding: 60px 15px 40px;
          }
          .xc-detail-related-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
          }
          .xc-detail-related-title-bold,
          .xc-detail-related-title-reg {
            font-size: 38px;
          }
          .xc-detail-related-right {
            padding-right: 0;
          }
          .xc-blog-related-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-height: 550px) {
          .xc-blog-index-section,
          .xc-detail-hero-section {
            padding: 95px 15px 40px !important;
          }
        }
      `}</style>

      {isDetailView ? (
        /* =========================================================
           VIEW 2: ARTICLE DETAIL (/article-1/understanding-framer-cms)
           ========================================================= */
        <>
          {/* Hero Section */}
          <section className="xc-detail-hero-section">
            <div className="xc-detail-hero-container">
              <div className="xc-detail-hero-top">
                <div className="xc-detail-title-group">
                  <a href="/blog" onClick={openIndexPage} className="xc-detail-cat-pill">
                    <span>Metal Cards</span>
                  </a>
                  <h1>Understanding Business Card Categories</h1>
                </div>
                <p className="xc-detail-subtitle">
                  An overview of Business card categories, their benefits, and popular materials.
                </p>
              </div>

              <div className="xc-detail-hero-img-wrap">
                <img
                  src={getAsset('blog-article-hero-banner.jpg')}
                  alt="Understanding Business Card Categories"
                />
              </div>
            </div>
          </section>

          {/* Sticky Scroll Progress Bar */}
          <div className="xc-detail-sticky-bar">
            <div className="xc-detail-sticky-bar-inner">
              <p>Now reading: Understanding Framer CMS</p>
            </div>
            <div
              className="xc-detail-sticky-progress"
              style={{ transform: `scaleX(${scrollProgress})` }}
            />
          </div>

          {/* Top Line */}
          <div className="xc-detail-top-line-wrap">
            <div className="xc-detail-top-line" />
          </div>

          {/* Article Details Content */}
          <section className="xc-detail-body-section">
            <div className="xc-detail-body-container">
              <div className="xc-detail-text-block">
                <p>
                  In the ever-evolving digital landscape, having a stunning website is no longer a luxury; it’s a necessity. Whether you’re a freelancer, creative agency, or a small business owner, your online presence can make or break your brand. Enter Framer — the powerful, no-code website builder that empowers you to create visually captivating websites without needing to dive into the complexities of coding
                </p>
                <p>Key benefits.</p>
                <p>
                  Gone are the days of wrestling with lines of code. With Framer&apos;s intuitive visual interface, you can drag and drop elements to design pixel-perfect websites. This means you can focus on creativity and user experience while Framer automatically generates the clean, production-ready code for you.
                </p>
                <p>
                  In a world where users access the internet from various devices, ensuring that your website looks great everywhere is crucial. Framer automatically creates responsive designs that adapt seamlessly across desktop, tablet, and mobile devices, so you can reach your audience no matter how they access your content.
                </p>
                <p>
                  Managing content can be a hassle, but not with Framer! Their integrated CMS allows you to create custom content structures and manage your site’s content dynamically. Say goodbye to developer bottlenecks; you have full control to add, edit, and update content whenever you need.
                </p>
                <p>
                  Engagement is key in today’s web experience, and Framer makes it easy to add sophisticated animations and interactions. From simple hover effects to complex scroll-triggered animations, you can create a dynamic and interactive user experience that keeps visitors engaged longer.
                </p>
              </div>

              <div className="xc-detail-tall-img-wrap">
                <img
                  src={getAsset('blog-laser-cut-finishes.jpg')}
                  alt="Article visual"
                />
              </div>

              <div className="xc-detail-mid-img-wrap">
                <img
                  src={getAsset('blog-article-detail-tall.jpg')}
                  alt="Article detail visual"
                />
              </div>

              <div className="xc-detail-text-block">
                <p>
                  Framer offers fast, reliable hosting that ensures your site is always up and running. With built-in SSL encryption and automated backups, you can focus on creating without worrying about the technical details. Framer provides built-in SEO tools to help you optimize your website for search engines. Easily edit meta tags, create clean URLs, and generate XML sitemaps to ensure your site ranks higher on search engine results, driving organic traffic to your business.
                </p>
                <p>Why should use Flowmance</p>
                <ul>
                  <li>Growth comes from steady progress and smart decisions</li>
                  <li>Our team blends creativity with strategy to deliver results that matter</li>
                  <li>We build lasting partnerships through trust, quality, and innovation</li>
                </ul>
                <p>
                  Ready to elevate your website game? With Framer the possibilities are endless. Whether you’re designing a portfolio, an online store, or a blog, you’ll have all the tools you need to create a beautiful, functional website that stands out from the competition.
                </p>
                <p>
                  Don’t let technical barriers hold you back—join the growing community of creatives using Framer to bring their visions to life.
                </p>
                <p>
                  Start your journey with <strong>Framer </strong>today and unlock the full potential of your online presence!
                </p>
                <p>
                  Where innovation meets insight, knowledge becomes the key to unlocking tomorrow&apos;s potential.
                </p>
                <p>
                  Enter Framer — the powerful, no-code website builder that empowers you to create visually captivating websites without needing to dive into the complexities of coding.
                </p>
              </div>
            </div>
          </section>

          {/* Divider Line */}
          <div className="xc-blog-divider-container">
            <div className="xc-blog-divider-line" />
          </div>

          {/* Related Articles Section */}
          <section className="xc-detail-related-section">
            <div className="xc-detail-related-container">
              <div className="xc-detail-related-header">
                <div className="xc-detail-related-title">
                  <h2 className="xc-detail-related-title-bold">Related</h2>
                  <h2 className="xc-detail-related-title-reg">Articles</h2>
                </div>

                <div className="xc-detail-related-right">
                  <p>
                    For readers focused on staying at the forefront of personal &amp; brand identity.
                  </p>
                  <a href="/blog" onClick={openIndexPage} className="xc-detail-view-all-btn">
                    <div className="xc-detail-view-all-btn-bg" />
                    <span>View all articles</span>
                  </a>
                </div>
              </div>

              <div className="xc-blog-related-grid">
                {ARTICLES.map((article) => (
                  <a
                    key={article.id}
                    href="/blog/understanding-business-card-categories"
                    onClick={openDetailPage}
                    className="xc-blog-related-card"
                  >
                    <div className="xc-blog-related-img-wrap">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="xc-blog-related-img"
                      />
                      <div className="xc-blog-related-arrow-pos">
                        <div className="xc-blog-arrow-box">
                          <img
                            src={ARROW_ICON}
                            alt=""
                            className="xc-blog-arrow-icon-primary"
                          />
                          <img
                            src={ARROW_ICON}
                            alt=""
                            className="xc-blog-arrow-icon-secondary"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="xc-blog-related-body">
                      <div className="xc-blog-related-top">
                        <div className="xc-blog-related-tag-row">
                          <img src={LIGHT_TAG_ICON} alt="" />
                          <span>{article.tag}</span>
                        </div>
                        <h3>{article.title}</h3>
                      </div>

                      <div className="xc-blog-related-meta-row">
                        <div className="xc-blog-related-meta-item">
                          <img src={LIGHT_META_ICON} alt="" />
                          <span>{article.date}</span>
                        </div>
                        <div className="xc-blog-related-meta-divider" />
                        <div className="xc-blog-related-meta-item">
                          <img src={LIGHT_META_ICON} alt="" />
                          <span>{article.readTimeLabel || article.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        /* =========================================================
           VIEW 1: ALL ARTICLES (/article-1)
           ========================================================= */
        <>
          <section className="xc-blog-index-section" id="hero">
            <div className="xc-blog-index-container">
              <div className="xc-blog-index-hero">
                <h2>All Articles</h2>
              </div>

              <div className="xc-blog-index-content">
                {/* Left Column: 6 Article Cards + Load More Button */}
                <div className="xc-blog-cards-col">
                  {ARTICLES.map((article) => (
                    <a
                      key={article.id}
                      href="/blog/understanding-business-card-categories"
                      onClick={openDetailPage}
                      className="xc-blog-card-row"
                    >
                      <div className="xc-blog-card-img-wrap">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="xc-blog-card-img"
                        />
                        <div className="xc-blog-card-top-bar">
                          <div className="xc-blog-tag-pill">
                            <span>{article.tag}</span>
                          </div>
                          <div className="xc-blog-arrow-box">
                            <img
                              src={ARROW_ICON}
                              alt=""
                              className="xc-blog-arrow-icon-primary"
                            />
                            <img
                              src={ARROW_ICON}
                              alt=""
                              className="xc-blog-arrow-icon-secondary"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="xc-blog-card-body">
                        <div className="xc-blog-meta-row">
                          <div className="xc-blog-meta-item">
                            <img src={DARK_CALENDAR_ICON} alt="" />
                            <span>{article.date}</span>
                          </div>
                          <div className="xc-blog-meta-divider" />
                          <div className="xc-blog-meta-item">
                            <img src={DARK_CLOCK_ICON} alt="" />
                            <span>{article.readTimeLabel || article.readTime}</span>
                          </div>
                        </div>

                        <div className="xc-blog-card-text-group">
                          <h3>{article.title}</h3>
                          <p>{article.excerpt}</p>
                        </div>
                      </div>
                    </a>
                  ))}

                  <button
                    type="button"
                    className="xc-blog-load-more-btn"
                    onClick={openDetailPage}
                  >
                    Load More
                  </button>
                </div>

                {/* Right Column: Sticky All Categories Sidebar */}
                <aside className="xc-blog-sidebar">
                  <div className="xc-blog-sidebar-inner">
                    <div className="xc-blog-sidebar-heading">
                      <h2 className="xc-blog-sidebar-heading-bold">All</h2>
                      <h2 className="xc-blog-sidebar-heading-reg">Categories</h2>
                    </div>

                    <div className="xc-blog-categories-grid">
                      {CATEGORIES.map((category) => (
                        <a
                          key={category}
                          href="/blog"
                          onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="xc-blog-category-btn"
                        >
                          <div className="xc-blog-category-btn-bg" />
                          <div className="xc-blog-category-btn-text-wrap">
                            <span className="xc-blog-category-btn-text">{category}</span>
                            <div className="xc-blog-category-btn-line" />
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </section>

          <div className="xc-blog-divider-container">
            <div className="xc-blog-divider-line" />
          </div>
        </>
      )}
    </div>
  );
}
