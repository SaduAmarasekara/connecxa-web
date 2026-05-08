"use client";

import React, { useRef } from "react";
import Image from "next/image";

const features = [
  {
    title: "Centralised Team Dashboard",
    desc: "Easily manage your team's cards, users, and branding from one central dashboard.",
    link: "/features/team-dashboard",
    bg: "#C5E8E8",
    accent: "#0D9488",
    image: "/team-dashboard-mockup.png",
  },
  {
    title: "CRM Deal Manager",
    desc: "Track every deal in one visual pipeline - stay organised and never miss a follow-up.",
    link: "/features/crm-deal-manager",
    bg: "#C0D6F0",
    accent: "#2563EB",
    image: "/crm-deal-manager-mockup.png",
  },
  {
    title: "Contact Manager",
    desc: "Keep your contacts organised with up-to-date details, easily accessible anytime.",
    link: "/features/contact-manager",
    bg: "#FDE68A",
    accent: "#B45309",
    image: "/contact-manager-mockup.png",
  },
];

export default function FeatureGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <style>{`
        .feature-grid-section {
          width: 100%;
          padding: 80px 24px;
          background: #ffffff;
          font-family: 'DM Sans', 'Helvetica Neue', sans-serif;
          box-sizing: border-box;
          overflow: hidden;
        }

        .feature-grid-inner {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
        }

        .feature-grid-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .feature-grid-title {
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 900;
          color: #111;
          line-height: 1.1;
          margin: 0 0 16px 0;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .feature-grid-title-emoji {
          font-size: clamp(28px, 4vw, 40px);
        }

        .feature-grid-subtitle {
          font-size: clamp(16px, 2vw, 19px);
          color: #6b7280;
          font-weight: 500;
          margin: 0;
          padding: 0;
        }

        .feature-grid-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .feature-grid-card {
          position: relative;
          display: flex;
          flex-direction: column;
          border-radius: 40px;
          overflow: hidden;
          transition: all 0.3s ease;
          min-width: 0;
        }

        .feature-grid-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);
        }

        .feature-grid-card-content {
          padding: 48px 36px 32px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
        }

        .feature-grid-card-title {
          font-size: clamp(20px, 2.2vw, 26px);
          font-weight: 900;
          color: #111;
          margin: 0 0 16px 0;
          line-height: 1.2;
        }

        .feature-grid-card-desc {
          font-size: clamp(14px, 1.5vw, 16px);
          color: #4b5563;
          font-weight: 500;
          line-height: 1.6;
          max-width: 280px;
          margin: 0;
        }

        .feature-grid-card-mockup {
          position: relative;
          height: 380px;
          margin: 0 32px;
          border-radius: 24px 24px 0 0;
          overflow: hidden;
          box-shadow: 0 -4px 30px rgba(0, 0, 0, 0.08);
          background: #fff;
        }

        .feature-grid-card-mockup img {
          transition: transform 0.5s ease;
        }

        .feature-grid-card:hover .feature-grid-card-mockup img {
          transform: scale(1.05);
        }

        /* ── ARROWS ── */
        .fg-arrows {
          display: none;
          position: absolute;
          top: 50%;
          left: -15px;
          right: -15px;
          transform: translateY(-50%);
          justify-content: space-between;
          z-index: 30;
          pointer-events: none;
        }

        .scroll-btn {
          width: 46px;
          height: 46px;
          background: #fff;
          border: 1px solid #E5E7EB;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          pointer-events: auto;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          transition: all 0.2s;
          color: #111;
        }

        .scroll-btn:hover {
          background: #F9FAFB;
          transform: scale(1.1);
        }

        /* Tablet/Mobile Responsive */
        @media (max-width: 1024px) {
          .feature-grid-cards {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .fg-arrows {
            display: flex;
          }

          .feature-grid-cards {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 20px;
            padding-bottom: 24px;
            scrollbar-width: none;
          }

          .feature-grid-cards::-webkit-scrollbar {
            display: none;
          }

          .feature-grid-card {
            flex: 0 0 300px;
            scroll-snap-align: center;
          }

          .feature-grid-card-mockup {
            height: 280px;
          }
        }
      `}</style>

      <section className="feature-grid-section">
        <div className="feature-grid-inner">
          {/* Header */}
          <div className="feature-grid-header">
            <h2 className="feature-grid-title">
              Explore More Powerful Tools
              <span className="feature-grid-title-emoji">⭐</span>
            </h2>
            <p className="feature-grid-subtitle">
              Discover more ways to network smarter with Connecxa
            </p>
          </div>

          {/* Arrows (Mobile Only) */}
          <div className="fg-arrows">
            <button className="scroll-btn" onClick={() => scroll('left')}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button className="scroll-btn" onClick={() => scroll('right')}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          {/* Grid/Carousel */}
          <div className="feature-grid-cards" ref={scrollRef}>
            {features.map((feature, i) => (
              <div
                key={i}
                className="feature-grid-card"
                style={{ background: feature.bg }}
              >
                <div className="feature-grid-card-content">
                  <h3 className="feature-grid-card-title">{feature.title}</h3>
                  <p className="feature-grid-card-desc">{feature.desc}</p>
                </div>

                {/* Mockup Area */}
                <div className="feature-grid-card-mockup">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    style={{ objectFit: "cover", objectPosition: "top" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
