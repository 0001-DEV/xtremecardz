import React, { useEffect, useState } from 'react';

const FAQS = [
  {
    q: 'What types of card materials and finishes do you offer?',
    a: 'We specialize in luxury and durable card solutions, including stainless steel metals (Gold, Gun Metal, Brushed & Frosted Stainless Steel), eco-friendly bamboo, premium PVC plastic, and advanced smart/NFC options.'
  },
  {
    q: 'How does the design and production process work?',
    a: 'Our workflow moves through three seamless stages: first, client experience and brand strategy consultation; second, creative design creation for your review and approval; and third, high-precision local production and shipping.'
  },
  {
    q: 'Can I integrate digital features like NFC or smart technology into my cards?',
    a: 'Yes! We offer cutting-edge smart cards (such as NFC-enabled business cards, access control cards, and multifunctional e-cards) that merge physical elegance with digital connectivity.'
  },
  {
    q: 'What is the turnaround time for printing and delivery?',
    a: 'Once your custom design layout has been officially approved by your team, our production and delivery process is structured to be swift and reliable, serving clients within Nigeria and internationally.'
  },
  {
    q: 'Can you handle bulk corporate orders or custom VIP event passes?',
    a: 'Absolutely. We cater to businesses, government agencies, and exclusive events, producing tailored employee ID cards, membership cards, access control badges, and luxury VIP event invites.'
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(-1);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('xc-contact-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
    );

    const elements = document.querySelectorAll('.xc-contact-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
    setFormData({ name: '', subject: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="xc-contact-page">
      <style>{`
        .xc-contact-page {
          background-color: #f7f7f7;
          color: #131515;
          min-height: 100vh;
          width: 100%;
          overflow-x: hidden;
        }

        .xc-contact-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition:
            opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .xc-contact-reveal.xc-contact-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Pill Badge (Pre Title) */
        .xc-contact-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 8px 20px;
          background-color: #ffffff;
          border: 1px solid rgba(19, 21, 21, 0.05);
          border-radius: 100px;
          font-family: var(--font-heading);
          font-size: 14px;
          font-weight: 500;
          line-height: 1.3em;
          letter-spacing: 0px;
          color: #131515;
        }

        /* =========================================
           SECTION 1: HERO & SPLIT CONTACT CARD
           ========================================= */
        .xc-contact-hero-section {
          width: 100%;
          padding: 200px 0 0;
          display: flex;
          justify-content: center;
        }

        .xc-contact-hero-container {
          width: 100%;
          max-width: 1260px;
          padding: 0 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 80px;
        }

        .xc-contact-hero-header {
          width: 100%;
          max-width: 700px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          text-align: center;
        }

        .xc-contact-hero-title {
          font-family: var(--font-heading);
          font-size: 90px;
          font-weight: 500;
          line-height: 1em;
          letter-spacing: 0px;
          color: #131515;
          margin: 0;
        }

        .xc-contact-hero-desc {
          font-family: var(--font-body);
          font-size: 22px;
          font-weight: 400;
          line-height: 1.4em;
          letter-spacing: 0px;
          color: #494d4d;
          max-width: 700px;
          margin: 0;
        }

        /* Split Card */
        .xc-contact-split-card {
          width: 100%;
          background-color: #ffffff;
          border-radius: 20px;
          box-shadow: 0px 8px 20px 0px rgba(19, 21, 21, 0.05);
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          overflow: hidden;
        }

        /* Left Visual Panel */
        .xc-contact-visual-panel {
          flex: 0.7 0 0;
          align-self: stretch;
          min-height: 400px;
          background-color: #131515;
          position: relative;
          overflow: hidden;
        }

        .xc-contact-visual-bg {
          position: absolute;
          inset: -2px;
          z-index: 0;
        }

        .xc-contact-visual-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .xc-contact-visual-overlay {
          position: absolute;
          inset: 0;
          background-color: #131515;
          opacity: 0.4;
          z-index: 2;
          pointer-events: none;
        }

        .xc-contact-visual-graphic {
          position: absolute;
          top: 74px;
          left: -102px;
          right: -102px;
          aspect-ratio: 1 / 1;
          z-index: 1;
          pointer-events: none;
        }

        .xc-contact-visual-graphic img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          display: block;
        }

        /* Right Form Panel */
        .xc-contact-form {
          flex: 1 0 0;
          background-color: #ffffff;
          padding: 50px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 30px;
        }

        .xc-contact-fields-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(2, minmax(50px, 1fr));
          gap: 30px;
        }

        .xc-contact-field {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          width: 100%;
        }

        .xc-contact-field.span-2 {
          grid-column: span 2;
        }

        .xc-contact-field-label {
          font-family: var(--font-heading);
          font-size: 14px;
          font-weight: 500;
          line-height: 1.3em;
          letter-spacing: 0px;
          color: #494d4d;
        }

        .xc-contact-input,
        .xc-contact-textarea {
          width: 100%;
          background-color: #e8e8e8;
          border: 1px solid #e8e8e8;
          border-radius: 10px;
          font-family: var(--font-body);
          font-size: 16px;
          font-weight: 400;
          line-height: 1.2em;
          letter-spacing: 0em;
          color: #131515;
          outline: none;
          transition: border-color 0.45s cubic-bezier(0.44, 0, 0.56, 1);
        }

        .xc-contact-input {
          height: 50px;
          padding: 10px 16px;
        }

        .xc-contact-textarea {
          min-height: 140px;
          padding: 16px;
          resize: vertical;
        }

        .xc-contact-input::placeholder,
        .xc-contact-textarea::placeholder {
          color: rgba(19, 21, 21, 0.5);
        }

        .xc-contact-input:focus,
        .xc-contact-textarea:focus {
          border-color: #131515;
        }

        .xc-contact-submit-btn {
          height: 54px;
          padding: 12px 34px;
          background-color: #131515;
          color: #ffffff;
          border: none;
          border-radius: 100px;
          box-shadow:
            0px 4px 10px 0px rgba(19, 21, 21, 0.5),
            0px 10px 35px 0px rgba(19, 21, 21, 0.5);
          font-family: var(--font-heading);
          font-size: 18px;
          font-weight: 500;
          line-height: 1.5em;
          letter-spacing: -0.02em;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.25s ease, opacity 0.25s ease;
        }

        .xc-contact-submit-btn:hover {
          opacity: 0.92;
        }

        /* =========================================
           SECTION 2: REACH US DIRECTLY
           ========================================= */
        .xc-contact-reach-section {
          width: 100%;
          padding: 200px 0;
          display: flex;
          justify-content: center;
        }

        .xc-contact-reach-container {
          width: 100%;
          max-width: 760px;
          padding: 0 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 50px;
        }

        .xc-contact-section-h2 {
          font-family: var(--font-heading);
          font-size: 60px;
          font-weight: 500;
          line-height: 1.2em;
          letter-spacing: 0px;
          color: #131515;
          text-align: center;
          margin: 0;
        }

        .xc-contact-reach-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(2, minmax(50px, 1fr));
          gap: 30px;
        }

        .xc-contact-reach-card {
          height: 300px;
          padding: 30px;
          background-color: #ffffff;
          border-radius: 20px;
          box-shadow: 0px 8px 20px 0px rgba(19, 21, 21, 0.05);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          overflow: hidden;
        }

        .xc-contact-reach-icon-circle {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .xc-contact-reach-icon-circle.blue {
          background-color: rgb(0, 89, 255);
          box-shadow: 0px 10px 15px 0px rgba(0, 89, 255, 0.5);
        }

        .xc-contact-reach-icon-circle.teal {
          background-color: rgb(2, 131, 167);
          box-shadow: 0px 10px 15px 0px rgba(2, 131, 167, 0.5);
        }

        .xc-contact-reach-icon-circle img {
          width: 24px;
          height: 24px;
          object-fit: contain;
          display: block;
        }

        .xc-contact-reach-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          width: 100%;
        }

        .xc-contact-reach-title {
          font-family: var(--font-heading);
          font-size: 24px;
          font-weight: 500;
          line-height: 1.2em;
          letter-spacing: 0px;
          color: #131515;
          margin: 0;
        }

        .xc-contact-reach-link {
          font-family: var(--font-body);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.3em;
          letter-spacing: 0px;
          color: #494d4d;
          text-decoration: none;
          transition: color 0.3s cubic-bezier(0.44, 0, 0.56, 1);
        }

        .xc-contact-reach-link:hover {
          color: #131515;
          text-decoration: underline;
        }

        /* =========================================
           SECTION 3: FREQUENTLY ASKED QUESTIONS
           ========================================= */
        .xc-contact-faq-section {
          width: 100%;
          padding: 0 0 120px;
          display: flex;
          justify-content: center;
        }

        .xc-contact-faq-container {
          width: 100%;
          max-width: 760px;
          padding: 0 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 50px;
        }

        .xc-contact-faq-header {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          text-align: center;
        }

        .xc-contact-faq-list {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .xc-contact-faq-item {
          width: 100%;
          background-color: #ffffff;
          border-radius: 20px;
          box-shadow: 0px 8px 20px 0px rgba(19, 21, 21, 0.05);
          overflow: hidden;
        }

        .xc-contact-faq-question-row {
          width: 100%;
          padding: 20px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
          gap: 10px;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
        }

        .xc-contact-faq-q-wrap {
          flex: 1 0 0;
          min-height: 34px;
          display: flex;
          align-items: center;
        }

        .xc-contact-faq-q-text {
          font-family: var(--font-heading);
          font-size: 20px;
          font-weight: 500;
          line-height: 1.2em;
          letter-spacing: 0px;
          color: #131515;
          margin: 0;
        }

        .xc-contact-faq-icon-circle {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background-color: #e8e8e8;
          position: relative;
          flex-shrink: 0;
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .xc-contact-faq-icon-circle.open {
          transform: rotate(135deg);
        }

        .xc-contact-faq-bar-h {
          position: absolute;
          top: calc(50% - 1px);
          left: calc(50% - 8px);
          width: 16px;
          height: 2px;
          background-color: #131515;
          border-radius: 3px;
        }

        .xc-contact-faq-bar-v {
          position: absolute;
          top: calc(50% - 8px);
          left: calc(50% - 1px);
          width: 2px;
          height: 16px;
          background-color: #131515;
          border-radius: 3px;
        }

        .xc-contact-faq-answer-row {
          padding: 0 20px 20px 20px;
          width: 100%;
        }

        .xc-contact-faq-a-text {
          font-family: var(--font-body);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.3em;
          letter-spacing: 0px;
          color: #494d4d;
          max-width: 700px;
          margin: 0;
        }

        /* =========================================
           TABLET RESPONSIVE (810px - 1199.98px)
           ========================================= */
        @media (max-width: 1199.98px) {
          .xc-contact-hero-section {
            padding: 170px 0 0;
          }
          .xc-contact-hero-container {
            gap: 50px;
          }
          .xc-contact-hero-title {
            font-size: 60px;
          }
          .xc-contact-hero-desc {
            font-size: 20px;
          }
          .xc-contact-form {
            padding: 30px;
          }
          .xc-contact-reach-section {
            padding: 120px 0;
          }
          .xc-contact-reach-container {
            gap: 40px;
          }
          .xc-contact-section-h2 {
            font-size: 42px;
          }
          .xc-contact-faq-section {
            padding: 0 0 40px;
          }
          .xc-contact-faq-container {
            gap: 40px;
          }
        }

        /* =========================================
           MOBILE RESPONSIVE (< 810px)
           ========================================= */
        @media (max-width: 809.98px) {
          .xc-contact-hero-section {
            padding: 152px 0 0;
          }
          .xc-contact-hero-container {
            padding: 0 20px;
            gap: 30px;
          }
          .xc-contact-hero-title {
            font-size: 44px;
          }
          .xc-contact-hero-desc {
            font-size: 18px;
          }
          .xc-contact-split-card {
            flex-direction: column;
          }
          .xc-contact-form {
            order: 0;
            width: 100%;
            flex: none;
            padding: 40px 20px;
          }
          .xc-contact-visual-panel {
            order: 1;
            width: 100%;
            flex: none;
            height: 400px;
          }
          .xc-contact-visual-graphic {
            top: 40px;
            left: 20px;
            right: 20px;
          }
          .xc-contact-fields-grid {
            grid-template-columns: 1fr;
          }
          .xc-contact-field.span-2 {
            grid-column: span 1;
          }
          .xc-contact-submit-btn {
            width: 100%;
          }
          .xc-contact-reach-section {
            padding: 120px 0;
          }
          .xc-contact-reach-container {
            padding: 0 20px;
            gap: 20px;
          }
          .xc-contact-section-h2 {
            font-size: 38px;
          }
          .xc-contact-reach-grid {
            grid-template-columns: 1fr;
            max-width: 360px;
            gap: 20px;
          }
          .xc-contact-reach-card {
            padding: 20px;
            align-items: center;
            text-align: center;
          }
          .xc-contact-reach-info {
            align-items: center;
          }
          .xc-contact-reach-title {
            font-size: 20px;
          }
          .xc-contact-reach-link {
            font-size: 16px;
          }
          .xc-contact-faq-container {
            padding: 0 20px;
            gap: 30px;
          }
          .xc-contact-faq-question-row {
            padding: 12px 12px 12px 20px;
          }
          .xc-contact-faq-q-text {
            font-size: 16px;
          }
          .xc-contact-faq-icon-circle {
            width: 32px;
            height: 32px;
          }
          .xc-contact-faq-a-text {
            font-size: 16px;
          }
        }
      `}</style>

      <main>
        {/* =========================================
            SECTION 1: HERO & SPLIT CONTACT CARD
            ========================================= */}
        <section className="xc-contact-hero-section">
          <div className="xc-contact-hero-container">
            <div className="xc-contact-hero-header xc-contact-reveal">
              <div className="xc-contact-badge">Contact us</div>
              <h1 className="xc-contact-hero-title">We’re here to help</h1>
              <p className="xc-contact-hero-desc">
                If you have questions, feedback, or need support, reach out and we’ll get back to you as soon as we can.
              </p>
            </div>

            <div
              className="xc-contact-split-card xc-contact-reveal"
              style={{ transitionDelay: '0.1s' }}
            >
              {/* Left Visual Panel */}
              <div className="xc-contact-visual-panel">
                <div className="xc-contact-visual-bg">
                  <img
                    src="https://framerusercontent.com/images/Rv0laiDKXOihHcLCHZslTO1KGbI.jpg?width=1200&height=1600"
                    alt=""
                  />
                </div>
                <div className="xc-contact-visual-graphic">
                  <img
                    src="https://framerusercontent.com/images/k1ZnZrxbA7yzw3gEgyzNFfUu31w.png?width=1500&height=1500"
                    alt=""
                  />
                </div>
                <div className="xc-contact-visual-overlay" />
              </div>

              {/* Right Form Panel */}
              <form className="xc-contact-form" onSubmit={handleSubmit}>
                <div className="xc-contact-fields-grid">
                  <label className="xc-contact-field">
                    <span className="xc-contact-field-label">Your name*</span>
                    <input
                      type="text"
                      required
                      name="Name"
                      placeholder="Dennis Barrett"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="xc-contact-input"
                    />
                  </label>

                  <label className="xc-contact-field">
                    <span className="xc-contact-field-label">Subject</span>
                    <input
                      type="text"
                      name="Subject"
                      placeholder="Topic of your request"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="xc-contact-input"
                    />
                  </label>

                  <label className="xc-contact-field span-2">
                    <span className="xc-contact-field-label">Email address*</span>
                    <input
                      type="email"
                      required
                      name="Email"
                      placeholder="dannis@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="xc-contact-input"
                    />
                  </label>

                  <label className="xc-contact-field span-2">
                    <span className="xc-contact-field-label">Message</span>
                    <textarea
                      name="Message"
                      placeholder="Write your message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="xc-contact-textarea"
                    />
                  </label>
                </div>

                <button type="submit" className="xc-contact-submit-btn">
                  {submitted ? 'Message sent. Thank you!' : 'Send a message'}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* =========================================
            SECTION 2: REACH US DIRECTLY
            ========================================= */}
        <section className="xc-contact-reach-section">
          <div className="xc-contact-reach-container">
            <h2 className="xc-contact-section-h2 xc-contact-reveal">Reach us directly</h2>

            <div className="xc-contact-reach-grid">
              {/* Card 1: Support phone number */}
              <div
                className="xc-contact-reach-card xc-contact-reveal"
                style={{ transitionDelay: '0.05s' }}
              >
                <div className="xc-contact-reach-icon-circle blue">
                  <img
                    src="https://framerusercontent.com/images/tLK0vd89o1TNNFSzF5qXoI9SVU.svg?width=24&height=24"
                    alt=""
                  />
                </div>
                <div className="xc-contact-reach-info">
                  <h2 className="xc-contact-reach-title">Support phone number</h2>
                  <a href="tel:+2348078009654" className="xc-contact-reach-link">
                    +234 807 800 9654
                  </a>
                </div>
              </div>

              {/* Card 2: Suppprt email */}
              <div
                className="xc-contact-reach-card xc-contact-reveal"
                style={{ transitionDelay: '0.12s' }}
              >
                <div className="xc-contact-reach-icon-circle teal">
                  <img
                    src="https://framerusercontent.com/images/UMQT61btnTYqLG4O8gklKle0U8.png?width=56&height=51"
                    alt=""
                  />
                </div>
                <div className="xc-contact-reach-info">
                  <h2 className="xc-contact-reach-title">Suppprt email</h2>
                  <a href="mailto:hello@xtremecardz.com" className="xc-contact-reach-link">
                    hello@xtremecardz.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            SECTION 3: FREQUENTLY ASKED QUESTIONS
            ========================================= */}
        <section className="xc-contact-faq-section">
          <div className="xc-contact-faq-container">
            <div className="xc-contact-faq-header xc-contact-reveal">
              <div className="xc-contact-badge">Common questions</div>
              <h2 className="xc-contact-section-h2">Frequently asked questions</h2>
            </div>

            <div
              className="xc-contact-faq-list xc-contact-reveal"
              style={{ transitionDelay: '0.08s' }}
            >
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="xc-contact-faq-item">
                    <button
                      type="button"
                      className="xc-contact-faq-question-row"
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      aria-expanded={isOpen}
                    >
                      <div className="xc-contact-faq-q-wrap">
                        <p className="xc-contact-faq-q-text">{faq.q}</p>
                      </div>
                      <div className={`xc-contact-faq-icon-circle ${isOpen ? 'open' : ''}`}>
                        <div className="xc-contact-faq-bar-h" />
                        <div className="xc-contact-faq-bar-v" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="xc-contact-faq-answer-row">
                        <p className="xc-contact-faq-a-text">{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
