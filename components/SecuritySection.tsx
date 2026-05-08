"use client";

import React from "react";

const securityFeatures = [
  {
    title: "Private Mode",
    desc: "Toggle advanced privacy and security settings to control the information on your digital business card",
    iconBg: "#E0F2FE",
    iconColor: "#0369A1",
    iconPath: (
      <>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </>
    ),
  },
  {
    title: "Certified Compliant",
    desc: "Audited and certified cyber-safe compliant by the Cybersecurity Agency of Singapore (CSA)",
    iconBg: "#DCFCE7",
    iconColor: "#15803D",
    iconPath: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    title: "AES-256 Encryption",
    desc: "We employ state-of-the-art AES-256 encryption to ensure that your information stays secure and private.",
    iconBg: "#F3E8FF",
    iconColor: "#7E22CE",
    iconPath: (
      <>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </>
    ),
  },
  {
    title: "MFA Protection",
    desc: "Safeguard your account against unauthorised access with additional layers of security and protection",
    iconBg: "#FEF9C3",
    iconColor: "#A16207",
    iconPath: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <path d="M7 7h10v10H7z" />
      </>
    ),
  },
];

export default function SecuritySection() {
  return (
    <>
      <style>{`
        .security-section {
          width: 100%;
          padding: 64px 24px;
          background: #F8FAFC;
          font-family: 'DM Sans', sans-serif;
          box-sizing: border-box;
        }

        .security-inner {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 24px;
          box-sizing: border-box;
        }

        .security-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .security-title {
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

        .security-title-emoji {
          font-size: clamp(28px, 4vw, 40px);
        }

        .security-subtitle {
          font-size: clamp(15px, 2vw, 19px);
          color: #6b7280;
          font-weight: 500;
          margin: 0 0 20px 0;
          padding: 0;
        }

        .security-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .security-card {
          background: #ffffff;
          padding: 36px 32px;
          border-radius: 32px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.04);
          border: 1px solid #f3f4f6;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: all 0.3s ease;
        }

        .security-card:hover {
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
          transform: translateY(-4px);
        }

        .security-icon-circle {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          flex-shrink: 0;
        }

        .security-card-title {
          font-size: clamp(18px, 2vw, 22px);
          font-weight: 900;
          color: #111;
          margin: 0 0 12px 0;
        }

        .security-card-desc {
          font-size: 15px;
          color: #6b7280;
          font-weight: 500;
          line-height: 1.65;
          margin: 0;
        }

        /* Tablet: 2 columns */
        @media (max-width: 1024px) {
          .security-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .security-section {
            padding: 48px 20px;
          }
        }

        /* Mobile: 1 column */
        @media (max-width: 600px) {
          .security-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .security-section {
            padding: 40px 16px;
          }
          .security-inner {
            padding: 0 8px;
          }
          .security-header {
            margin-bottom: 32px;
          }
          .security-card {
            padding: 28px 24px;
          }
        }
      `}</style>

      <section className="security-section">
        <div className="security-inner">
          {/* Header */}
          <div className="security-header">
            <h2 className="security-title">
              Secured Connections, Always
              <span className="security-title-emoji">🔒</span>
            </h2>
            <p className="security-subtitle">
              Build connections and network confidently with built-in security at every layer
            </p>
          </div>

          {/* Grid */}
          <div className="security-grid">
            {securityFeatures.map((feature, i) => (
              <div key={i} className="security-card">
                <div
                  className="security-icon-circle"
                  style={{ background: feature.iconBg }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={feature.iconColor}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {feature.iconPath}
                  </svg>
                </div>
                <h3 className="security-card-title">{feature.title}</h3>
                <p className="security-card-desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
