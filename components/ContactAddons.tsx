"use client";

import React from "react";
import Image from "next/image";

export function ContactContextSection() {
  return (
    <>
      <style>{`
        .contact-context-section {
          width: 100%;
          padding: 48px 24px;
          background: #ffffff;
          font-family: 'DM Sans', sans-serif;
          box-sizing: border-box;
        }

        .contact-context-inner {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 24px;
          box-sizing: border-box;
        }

        .contact-context-layout {
          display: flex;
          align-items: center;
          gap: 64px;
        }

        .contact-context-mockup-col {
          width: 50%;
          flex-shrink: 0;
        }

        .contact-context-mockup-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          background: #FEF9C3;
          border-radius: 48px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px;
        }

        .contact-context-mockup-inner {
          position: relative;
          width: 100%;
          height: 100%;
          background: #ffffff;
          border-radius: 32px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
          overflow: hidden;
        }

        .contact-context-mockup-inner img {
          transition: transform 0.7s ease;
        }

        .contact-context-mockup-frame:hover .contact-context-mockup-inner img {
          transform: scale(1.05);
        }

        .contact-context-content-col {
          width: 50%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .contact-context-title {
          font-size: clamp(32px, 4.5vw, 54px);
          font-weight: 900;
          color: #111;
          line-height: 1.1;
          margin: 0 0 24px 0;
        }

        .contact-context-desc {
          font-size: clamp(15px, 1.8vw, 19px);
          color: #6b7280;
          font-weight: 500;
          line-height: 1.65;
          margin: 0 0 32px 0;
          max-width: 560px;
        }

        .contact-context-features {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
          max-width: 400px;
        }

        .contact-context-feature-item {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .contact-context-feature-dot {
          width: 24px;
          height: 24px;
          border-radius: 6px;
          background: #eff6ff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-context-feature-dot-inner {
          width: 12px;
          height: 2px;
          background: #005AD1;
          border-radius: 99px;
        }

        .contact-context-feature-text {
          font-size: clamp(15px, 1.5vw, 17px);
          font-weight: 700;
          color: #1f2937;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .contact-context-layout {
            gap: 40px;
          }
          .contact-context-mockup-frame {
            border-radius: 32px;
            padding: 32px;
          }
          .contact-context-mockup-inner {
            border-radius: 20px;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .contact-context-section {
            padding: 40px 16px;
          }
          .contact-context-inner {
            padding: 0 8px;
          }
          .contact-context-layout {
            flex-direction: column;
            gap: 32px;
          }
          .contact-context-mockup-col,
          .contact-context-content-col {
            width: 100%;
          }
          .contact-context-content-col {
            align-items: center;
            text-align: center;
          }
          .contact-context-features {
            max-width: 100%;
          }
          .contact-context-feature-item {
            justify-content: center;
          }
          .contact-context-mockup-frame {
            border-radius: 28px;
            padding: 24px;
          }
        }
      `}</style>

      <section className="contact-context-section">
        <div className="contact-context-inner">
          <div className="contact-context-layout">
            {/* Left Mockup */}
            <div className="contact-context-mockup-col">
              <div className="contact-context-mockup-frame">
                <div className="contact-context-mockup-inner">
                  <Image
                    src="/contact-context-mockup.png"
                    alt="Interaction Context Mockup"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="contact-context-content-col">
              <h2 className="contact-context-title">
                Make Every Interaction Context-Rich
              </h2>
              <p className="contact-context-desc">
                Capture key moments, meeting notes, and activity logs all in one
                place, synced across your contact and deal records.
              </p>

              <ul className="contact-context-features">
                <li className="contact-context-feature-item">
                  <div className="contact-context-feature-dot">
                    <div className="contact-context-feature-dot-inner" />
                  </div>
                  <span className="contact-context-feature-text">
                    Automated activity logs
                  </span>
                </li>
                <li className="contact-context-feature-item">
                  <div className="contact-context-feature-dot">
                    <div className="contact-context-feature-dot-inner" />
                  </div>
                  <span className="contact-context-feature-text">
                    Built-in notes with timestamps
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function NetworkingFeatures() {
  const features = [
    {
      title: "OCR Scanner",
      desc: "Instantly capture paper name card details using your phone's camera.",
      bg: "#FEF3C7",
      iconColor: "#ea580c",
      iconPath: (
        <>
          <path d="M2 9V7a2 2 0 0 1 2-2h2" />
          <path d="M18 5h2a2 2 0 0 1 2 2v2" />
          <path d="M2 15v2a2 2 0 0 0 2 2h2" />
          <path d="M18 19h2a2 2 0 0 0 2-2v-2" />
          <rect x="7" y="7" width="10" height="10" rx="2" />
        </>
      ),
    },
    {
      title: "Quick Sharing",
      desc: "Instantly call, email, share, or download VCF directly from the contact manager.",
      bg: "#F3E8FF",
      iconColor: "#9333ea",
      iconPath: (
        <>
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
          <polyline points="16 6 12 2 8 6" />
          <line x1="12" y1="2" x2="12" y2="15" />
        </>
      ),
    },
    {
      title: "Sync to CRM",
      desc: "Manage and link new deals seamlessly when contacts convert into prospects.",
      bg: "#DCFCE7",
      iconColor: "#16a34a",
      iconPath: (
        <>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <polyline points="16 11 18 13 22 9" />
        </>
      ),
    },
    {
      title: "Multi-Device",
      desc: "Easily manage contacts on the go, whether you're using mobile or desktop.",
      bg: "#DBEAFE",
      iconColor: "#005AD1",
      iconPath: (
        <>
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </>
      ),
    },
  ];

  return (
    <>
      <style>{`
        .networking-features-section {
          width: 100%;
          padding: 64px 24px;
          background: #ffffff;
          font-family: 'DM Sans', sans-serif;
          box-sizing: border-box;
        }

        .networking-features-inner {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 24px;
          box-sizing: border-box;
        }

        .networking-features-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .networking-features-title {
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 900;
          color: #111;
          line-height: 1.1;
          margin: 0 0 16px 0;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }

        .networking-features-title-emoji {
          font-size: clamp(28px, 4vw, 40px);
        }

        .networking-features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .networking-features-card {
          background: #F8FAFC;
          padding: 36px 32px;
          border-radius: 32px;
          transition: all 0.3s ease;
        }

        .networking-features-card:hover {
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
          transform: translateY(-4px);
        }

        .networking-features-icon {
          width: 48px;
          height: 48px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 28px;
          transition: transform 0.3s ease;
        }

        .networking-features-card:hover .networking-features-icon {
          transform: scale(1.1);
        }

        .networking-features-card-title {
          font-size: clamp(18px, 2vw, 22px);
          font-weight: 900;
          color: #111;
          margin: 0 0 12px 0;
        }

        .networking-features-card-desc {
          font-size: 15px;
          color: #6b7280;
          font-weight: 500;
          line-height: 1.65;
          margin: 0;
        }

        /* Tablet: 2 columns */
        @media (max-width: 1024px) {
          .networking-features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .networking-features-section {
            padding: 48px 20px;
          }
        }

        /* Mobile: 1 column */
        @media (max-width: 600px) {
          .networking-features-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .networking-features-section {
            padding: 40px 16px;
          }
          .networking-features-inner {
            padding: 0 8px;
          }
          .networking-features-header {
            margin-bottom: 32px;
          }
          .networking-features-card {
            padding: 28px 24px;
            border-radius: 24px;
          }
        }
      `}</style>

      <section className="networking-features-section">
        <div className="networking-features-inner">
          {/* Header */}
          <div className="networking-features-header">
            <h2 className="networking-features-title">
              <span>Better Networking Starts Here</span>
              <span className="networking-features-title-emoji">🤝</span>
            </h2>
          </div>

          {/* Grid */}
          <div className="networking-features-grid">
            {features.map((f, i) => (
              <div key={i} className="networking-features-card">
                <div
                  className="networking-features-icon"
                  style={{ background: f.bg }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={f.iconColor}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {f.iconPath}
                  </svg>
                </div>
                <h3 className="networking-features-card-title">{f.title}</h3>
                <p className="networking-features-card-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
