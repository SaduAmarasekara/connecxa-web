"use client";

import React from "react";
import Image from "next/image";

const securityFeatures = [
  {
    title: "Private Profile Control",
    desc: "Take full ownership of your digital footprint. Easily manage what information is visible to others and maintain strict privacy over your personal details.",
    image: "/images/private-profile-control.png",
  },
  {
    title: "OTP Verification",
    desc: "Ensure that only authorized users can access sensitive information. We send a one-time password to verify your identity quickly and securely.",
    image: "/images/otp-verification.png",
  },
  {
    title: "Two-Factor Authentication",
    desc: "Add an extra layer of defense to your account. By combining your password with a secondary verification method, we keep intruders out.",
    image: "/images/two-factor-auth.png",
  },
  {
    title: "Secure Data Handling",
    desc: "Your data is treated with the highest level of care. We employ industry-standard encryption and secure infrastructure to protect your information at all times.",
    image: "/images/secure-data-handling.png",
  },
];

export default function SecuritySection() {
  return (
    <>
      <style>{`
        .security-section {
          width: 100%;
          padding: 80px 24px;
          background: #ffffff;
          font-family: 'DM Sans', sans-serif;
          box-sizing: border-box;
        }

        .security-inner {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        .security-header {
          text-align: center;
          margin-bottom: 56px;
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
          font-size: clamp(16px, 2vw, 20px);
          color: #6b7280;
          font-weight: 500;
          margin: 0 0 20px 0;
          padding: 0;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .security-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .security-card {
          background: #F9FAFB;
          padding: 40px 40px 40px 40px;
          border-radius: 24px;
          border: 1px solid #F3F4F6;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
          min-height: 220px;
        }

        .security-card-content {
          max-width: 60%;
          z-index: 2;
        }

        .security-card-title {
          font-size: clamp(20px, 2.5vw, 24px);
          font-weight: 800;
          color: #111827;
          margin: 0 0 12px 0;
          letter-spacing: -0.02em;
        }

        .security-card-desc {
          font-size: 15px;
          color: #6b7280;
          font-weight: 500;
          line-height: 1.6;
          margin: 0;
        }

        .security-card-image {
          position: absolute;
          right: -20px;
          bottom: -20px;
          width: 200px;
          height: 200px;
          object-fit: contain;
          z-index: 1;
          mix-blend-mode: multiply; /* Helps blend white backgrounds */
        }

        /* Tablet: Adjust padding and image size */
        @media (max-width: 1024px) {
          .security-card {
            padding: 32px;
            flex-direction: column;
            align-items: flex-start;
          }
          .security-card-content {
            max-width: 100%;
            margin-bottom: 80px;
          }
          .security-card-image {
            right: -10px;
            bottom: -10px;
            width: 140px;
            height: 140px;
          }
        }

        /* Mobile: 1 column */
        @media (max-width: 768px) {
          .security-grid {
            grid-template-columns: 1fr;
          }
          .security-section {
            padding: 56px 16px;
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
                <div className="security-card-content">
                  <h3 className="security-card-title">{feature.title}</h3>
                  <p className="security-card-desc">{feature.desc}</p>
                </div>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={200}
                  height={200}
                  className="security-card-image"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

