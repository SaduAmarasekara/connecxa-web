"use client";

import React from "react";
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
  return (
    <>
      <style>{`
        .feature-grid-section {
          width: 100%;
          padding: 64px 24px;
          background: #ffffff;
          font-family: 'DM Sans', sans-serif;
          box-sizing: border-box;
        }

        .feature-grid-inner {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 24px;
          box-sizing: border-box;
        }

        .feature-grid-header {
          text-align: center;
          margin-bottom: 48px;
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
          font-size: clamp(15px, 2vw, 19px);
          color: #6b7280;
          font-weight: 500;
          margin: 0 0 20px 0;
          padding: 0;
        }

        .feature-grid-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .feature-grid-card {
          position: relative;
          display: flex;
          flex-direction: column;
          border-radius: 40px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .feature-grid-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);
        }

        .feature-grid-card-content {
          padding: 36px 36px 24px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .feature-grid-card-title {
          font-size: clamp(20px, 2.2vw, 26px);
          font-weight: 900;
          color: #111;
          margin: 0 0 12px 0;
        }

        .feature-grid-card-desc {
          font-size: clamp(14px, 1.5vw, 16px);
          color: #4b5563;
          font-weight: 500;
          line-height: 1.6;
          max-width: 320px;
          margin: 0;
        }

        .feature-grid-card-mockup {
          position: relative;
          height: 340px;
          margin: auto 32px 0;
          border-radius: 20px 20px 0 0;
          overflow: hidden;
          box-shadow: 0 -4px 30px rgba(0, 0, 0, 0.12);
          border-left: 1px solid rgba(255, 255, 255, 0.5);
          border-right: 1px solid rgba(255, 255, 255, 0.5);
          border-top: 1px solid rgba(255, 255, 255, 0.5);
        }

        .feature-grid-card-mockup img {
          transition: transform 0.5s ease;
        }

        .feature-grid-card:hover .feature-grid-card-mockup img {
          transform: scale(1.05);
        }

        /* Tablet: 2 columns */
        @media (max-width: 1024px) {
          .feature-grid-cards {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
          .feature-grid-section {
            padding: 48px 20px;
          }
          .feature-grid-card {
            border-radius: 32px;
          }
          .feature-grid-card-content {
            padding: 28px 28px 20px;
          }
          .feature-grid-card-mockup {
            height: 280px;
            margin-left: 24px;
            margin-right: 24px;
          }
        }

        /* Mobile: 1 column */
        @media (max-width: 600px) {
          .feature-grid-cards {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .feature-grid-section {
            padding: 40px 16px;
          }
          .feature-grid-inner {
            padding: 0 8px;
          }
          .feature-grid-header {
            margin-bottom: 32px;
          }
          .feature-grid-card {
            border-radius: 28px;
          }
          .feature-grid-card-content {
            padding: 24px 24px 16px;
          }
          .feature-grid-card-mockup {
            height: 220px;
            margin-left: 16px;
            margin-right: 16px;
            border-radius: 16px 16px 0 0;
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
              Discover more ways to network smarter with connecxa
            </p>
          </div>

          {/* Grid */}
          <div className="feature-grid-cards">
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
