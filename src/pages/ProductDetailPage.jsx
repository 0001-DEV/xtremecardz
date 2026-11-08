import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { getProductBySlug } from '../data/productDetails';

function PixelCutout({ style }) {
  const pixelColor = 'rgb(243, 244, 246)';
  return (
    <div
      style={{
        height: 'min-content',
        width: 'min-content',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 0,
        padding: 0,
        position: 'absolute',
        pointerEvents: 'none',
        ...style
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignSelf: 'stretch',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '37px',
          width: 'auto',
          height: 'min-content'
        }}
      >
        <div style={{ width: '36px', height: '36px', backgroundColor: pixelColor, flexShrink: 0 }} />
        <div style={{ width: '72px', height: '36px', backgroundColor: pixelColor, flexShrink: 0 }} />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 0,
          width: 'min-content',
          height: 'min-content',
          padding: '0 36px 0 0'
        }}
      >
        <div style={{ width: '36px', height: '36px', backgroundColor: pixelColor, flexShrink: 0 }} />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignSelf: 'stretch',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '37px',
          width: 'auto',
          height: 'min-content'
        }}
      >
        <div style={{ width: '36px', height: '36px', backgroundColor: pixelColor, flexShrink: 0 }} />
      </div>
    </div>
  );
}

export default function ProductDetailPage({ onOpenQuote }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const item = getProductBySlug(slug);
    if (item) {
      setProduct(item);
      window.scrollTo(0, 0);
    } else {
      // Fallback to products listing if slug not found
      navigate('/products', { replace: true });
    }
    const timer = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(timer);
  }, [slug, navigate]);

  if (!product) return null;

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      <style>{`
        .detail-hero-img-wrap:hover img {
          transform: scale(1.02);
        }
        .finish-card-img-wrap:hover img {
          transform: scale(1.03);
        }
        .next-project-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.12);
        }
        .next-project-card:hover .next-proj-img {
          transform: scale(1.03);
        }

        .product-detail-container {
          max-width: 1360px;
          margin: 0 auto;
          padding: 160px 24px 100px;
          box-sizing: border-box;
        }

        @media (max-width: 900px) {
          .product-detail-container {
            padding: 130px 16px 80px;
          }
          .detail-hero-box {
            height: 480px !important;
          }
          .finish-images-grid {
            grid-template-columns: 1fr !important;
          }
          .detail-stats-row {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 600px) {
          .product-detail-container {
            padding: 110px 16px 60px;
          }
          .detail-hero-box {
            height: 340px !important;
          }
          .detail-stats-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <div className="product-detail-container">
        {/* Top Breadcrumb & Back Link */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '32px',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease'
          }}
        >
          <Link
            to="/products"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14.5px',
              fontWeight: 600,
              color: '#595e5e',
              textDecoration: 'none',
              padding: '8px 16px',
              borderRadius: '100px',
              backgroundColor: '#f7f6f3',
              transition: 'background-color 0.2s ease, color 0.2s ease'
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to Products</span>
          </Link>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '100px',
              backgroundColor: '#ffffff',
              border: '1px solid rgba(19, 21, 21, 0.08)',
              fontSize: '13px',
              fontWeight: 600,
              color: '#131515'
            }}
          >
            <Sparkles size={13} color="#cfa34b" />
            <span>{product.category}</span>
          </div>
        </div>

        {/* Hero Title & Intro Header */}
        <div
          style={{
            maxWidth: '860px',
            marginBottom: '48px',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease 0.08s, transform 0.7s ease 0.08s'
          }}
        >
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(38px, 4.8vw, 68px)',
              fontWeight: 600,
              color: '#131515',
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              margin: '0 0 18px 0'
            }}
          >
            {product.title}
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(16px, 1.3vw, 19px)',
              lineHeight: 1.6,
              color: '#595e5e',
              margin: '0 0 28px 0',
              fontWeight: 400
            }}
          >
            {product.description}
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => onOpenQuote && onOpenQuote(`Product Inquiry: ${product.title}`)}
              style={{
                backgroundColor: '#131515',
                color: '#ffffff',
                borderRadius: '100px',
                padding: '13px 28px',
                fontSize: '14.5px',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(19, 21, 21, 0.22)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-heading)'
              }}
            >
              <span>Make enquiries</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

        {/* Hero Image Showcase with Pixel Cutout Accent */}
        <div
          className="detail-hero-box"
          style={{
            position: 'relative',
            width: '100%',
            height: '680px',
            borderRadius: '24px',
            overflow: 'hidden',
            backgroundColor: '#131515',
            marginBottom: '80px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.08)'
          }}
        >
          <div
            className="detail-hero-img-wrap"
            style={{
              position: 'absolute',
              inset: 0,
              overflow: 'hidden'
            }}
          >
            <img
              src={product.heroImage}
              alt={product.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
                transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            />
          </div>

          <PixelCutout style={{ top: 0, left: 0 }} />
          <PixelCutout style={{ top: '18px', right: '-18px', transform: 'rotate(90deg)', opacity: 0.9 }} />
        </div>

        {/* Stats Strip */}
        {product.stats && product.stats.length > 0 && (
          <div
            className="detail-stats-row"
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${product.stats.length}, 1fr)`,
              gap: '20px',
              backgroundColor: '#fcfbf9',
              border: '1px solid rgba(19, 21, 21, 0.08)',
              borderRadius: '20px',
              padding: 'clamp(24px, 3vw, 36px)',
              marginBottom: '90px'
            }}
          >
            {product.stats.map((st, i) => (
              <div key={i} style={{ textAlign: 'left' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(28px, 2.8vw, 38px)',
                    fontWeight: 700,
                    color: '#131515',
                    lineHeight: 1.15,
                    marginBottom: '6px'
                  }}
                >
                  {st.value}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: '#595e5e',
                    fontWeight: 500
                  }}
                >
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Finishes / Features Showcase Sections */}
        {product.finishes && product.finishes.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', marginBottom: '110px' }}>
            {product.finishes.map((f, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '28px',
                  borderTop: '1px solid rgba(19, 21, 21, 0.08)',
                  paddingTop: '48px'
                }}
              >
                {/* Finish Text Header */}
                <div style={{ maxWidth: '780px' }}>
                  {f.eyebrow && (
                    <div
                      style={{
                        display: 'inline-block',
                        padding: '4px 14px',
                        borderRadius: '100px',
                        backgroundColor: '#f4f3ef',
                        fontSize: '12.5px',
                        fontWeight: 600,
                        color: '#131515',
                        marginBottom: '14px',
                        fontFamily: 'var(--font-heading)',
                        letterSpacing: '0.02em',
                        textTransform: 'uppercase'
                      }}
                    >
                      {f.eyebrow}
                    </div>
                  )}

                  <h2
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'clamp(26px, 3.2vw, 42px)',
                      fontWeight: 600,
                      color: '#131515',
                      lineHeight: 1.25,
                      letterSpacing: '-0.02em',
                      margin: '0 0 14px 0'
                    }}
                  >
                    {f.headline}
                  </h2>

                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '15.5px',
                      lineHeight: 1.6,
                      color: '#595e5e',
                      margin: 0
                    }}
                  >
                    {f.description}
                  </p>
                </div>

                {/* Finish Images Grid */}
                {f.images && f.images.length > 0 && (
                  <div
                    className="finish-images-grid"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: f.images.length === 1 ? '1fr' : 'repeat(2, 1fr)',
                      gap: '24px',
                      width: '100%'
                    }}
                  >
                    {f.images.map((imgSrc, imgIdx) => (
                      <div
                        key={imgIdx}
                        className="finish-card-img-wrap"
                        style={{
                          borderRadius: '18px',
                          overflow: 'hidden',
                          backgroundColor: '#f7f6f3',
                          border: '1px solid rgba(19, 21, 21, 0.06)',
                          boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                          aspectRatio: f.images.length === 1 ? '1.9' : '1.35',
                          position: 'relative'
                        }}
                      >
                        <img
                          src={imgSrc}
                          alt={`${f.headline} showcase ${imgIdx + 1}`}
                          loading="lazy"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Next Project Section */}
        {product.nextProject && (
          <div style={{ borderTop: '2px solid rgba(19, 21, 21, 0.08)', paddingTop: '60px', marginBottom: '80px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '24px'
              }}
            >
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#999e9e'
                }}
              >
                Next Project
              </span>
              <span style={{ fontSize: '13px', color: '#cfa34b', fontWeight: 600 }}>Explore More →</span>
            </div>

            <Link
              to={`/products/${product.nextProject.slug}`}
              className="next-project-card"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                backgroundColor: '#131515',
                borderRadius: '24px',
                overflow: 'hidden',
                textDecoration: 'none',
                color: '#ffffff',
                boxShadow: '0 16px 45px rgba(19, 21, 21, 0.08)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
            >
              <div style={{ padding: 'clamp(28px, 3.5vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, color: '#cfa34b', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
                  Next in Collection
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(24px, 2.5vw, 36px)',
                    fontWeight: 600,
                    margin: '0 0 12px 0',
                    color: '#ffffff'
                  }}
                >
                  {product.nextProject.title}
                </h3>
                <p style={{ fontSize: '14.5px', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.5, margin: '0 0 24px 0' }}>
                  {product.nextProject.description}
                </p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 600, color: '#cfa34b' }}>
                  <span>View Project</span>
                  <ArrowRight size={15} />
                </div>
              </div>

              <div style={{ position: 'relative', overflow: 'hidden', minHeight: '260px' }}>
                <img
                  src={product.nextProject.image}
                  alt={product.nextProject.title}
                  className="next-proj-img"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                />
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

