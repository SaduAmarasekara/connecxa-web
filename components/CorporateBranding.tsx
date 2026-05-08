"use client";

import React from "react";
import Link from "next/link";

const CorporateBranding = () => {
  return (
    <>
      <style>{`
        .corp-section {
          width: 100%;
          padding: 80px 24px;
          background: #ffffff;
          font-family: 'DM Sans', sans-serif;
          box-sizing: border-box;
          overflow: hidden;
        }

        .corp-inner {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 64px;
        }

        .corp-left {
          flex: 1;
          min-width: 0;
        }

        .corp-right {
          flex: 1;
          min-width: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .corp-title {
          font-size: clamp(28px, 4vw, 46px);
          font-weight: 800;
          color: #111827;
          line-height: 1.2;
          margin: 0 0 20px 0;
          letter-spacing: -0.02em;
        }

        .corp-subtitle {
          font-size: clamp(15px, 1.6vw, 18px);
          color: #6b7280;
          font-weight: 500;
          line-height: 1.65;
          margin: 0 0 32px 0;
          max-width: 520px;
        }

        .corp-buttons {
          display: flex;
          gap: 12px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }

        .corp-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 32px;
          background: #005AD1;
          color: #ffffff;
          font-size: 15px;
          font-weight: 700;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          text-decoration: none;
          box-shadow: 0 6px 24px rgba(0, 90, 209, 0.25);
          transition: all 0.25s ease;
        }

        .corp-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(0, 90, 209, 0.35);
        }

        .corp-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 32px;
          background: transparent;
          color: #005AD1;
          font-size: 15px;
          font-weight: 700;
          border: 2px solid #005AD1;
          border-radius: 50px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .corp-btn-secondary:hover {
          background: #eff6ff;
          transform: translateY(-2px);
        }

        .corp-stats {
          display: flex;
          gap: 48px;
          flex-wrap: wrap;
        }

        .corp-stat {
          display: flex;
          flex-direction: column;
        }

        .corp-stat-num {
          font-size: clamp(28px, 3.5vw, 40px);
          font-weight: 900;
          color: #005AD1;
          line-height: 1;
          margin-bottom: 6px;
        }

        .corp-stat-label {
          font-size: 13px;
          color: #9ca3af;
          font-weight: 500;
        }

        /* Globe illustration */
        .corp-globe-container {
          position: relative;
          width: 100%;
          max-width: 480px;
          aspect-ratio: 1;
        }

        .corp-globe {
          position: absolute;
          inset: 10%;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, #e8f0fe 0%, #c5d9f8 40%, #a8c4f0 70%, #dce8fa 100%);
          box-shadow: 
            inset 0 0 60px rgba(0, 90, 209, 0.08),
            0 20px 60px rgba(0, 90, 209, 0.06);
        }

        /* Grid lines on globe */
        .corp-globe::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background:
            radial-gradient(circle, transparent 58%, rgba(0, 90, 209, 0.06) 59%, transparent 60%),
            linear-gradient(0deg, transparent 48%, rgba(0, 90, 209, 0.06) 49%, transparent 51%),
            linear-gradient(90deg, transparent 48%, rgba(0, 90, 209, 0.06) 49%, transparent 51%);
        }

        /* Orbit ring */
        .corp-orbit {
          position: absolute;
          inset: 2%;
          border-radius: 50%;
          border: 1.5px dashed rgba(0, 90, 209, 0.15);
          transform: rotateX(65deg) rotateZ(-15deg);
        }

        /* Floating icons */
        .corp-float-icon {
          position: absolute;
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: #ffffff;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        .corp-float-icon--pin {
          top: 8%;
          right: 25%;
          animation: corpFloat 4s ease-in-out infinite;
        }

        .corp-float-icon--phone {
          bottom: 22%;
          left: 8%;
          animation: corpFloat 4s ease-in-out infinite 1s;
        }

        .corp-float-icon--mail {
          bottom: 8%;
          right: 18%;
          animation: corpFloat 4s ease-in-out infinite 2s;
        }

        .corp-float-icon--qr {
          top: 35%;
          right: 2%;
          animation: corpFloat 4s ease-in-out infinite 0.5s;
        }

        .corp-float-icon--share {
          top: 15%;
          left: 5%;
          animation: corpFloat 4s ease-in-out infinite 1.5s;
        }

        /* Location pins on globe */
        .corp-pin {
          position: absolute;
          z-index: 3;
        }

        .corp-pin-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #005AD1;
          animation: corpPulse 2s ease-in-out infinite;
        }

        .corp-pin--1 { top: 28%; left: 42%; }
        .corp-pin--2 { top: 45%; right: 28%; animation-delay: 0.5s; }
        .corp-pin--3 { top: 55%; left: 35%; animation-delay: 1s; }
        .corp-pin--4 { top: 32%; right: 38%; animation-delay: 1.5s; }

        @keyframes corpFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @keyframes corpPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.4); }
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .corp-inner {
            gap: 40px;
          }
          .corp-stats {
            gap: 32px;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .corp-section {
            padding: 56px 16px;
          }
          .corp-inner {
            flex-direction: column;
            gap: 48px;
          }
          .corp-left {
            text-align: center;
          }
          .corp-subtitle {
            margin-left: auto;
            margin-right: auto;
          }
          .corp-buttons {
            justify-content: center;
          }
          .corp-stats {
            justify-content: center;
          }
          .corp-globe-container {
            max-width: 360px;
          }
        }
      `}</style>

      <section className="corp-section">
        <div className="corp-inner">
          {/* Left: Content */}
          <div className="corp-left">
            <h2 className="corp-title">
              Millions of shares, powered by the digital business card for professionals.
            </h2>
            <p className="corp-subtitle">
              The virtual business card that works anywhere you meet people
            </p>

            <div className="corp-buttons">
              <Link href="/login" className="corp-btn-primary">
                Get started
              </Link>
              <Link href="/for-companies/teams" className="corp-btn-secondary">
                For teams
              </Link>
            </div>

            <div className="corp-stats">
              <div className="corp-stat">
                <span className="corp-stat-num">1M+</span>
                <span className="corp-stat-label">Shares made with Connecxa</span>
              </div>
              <div className="corp-stat">
                <span className="corp-stat-num">500K+</span>
                <span className="corp-stat-label">Connections created</span>
              </div>
              <div className="corp-stat">
                <span className="corp-stat-num">170+</span>
                <span className="corp-stat-label">Countries using Connecxa</span>
              </div>
            </div>
          </div>

          {/* Right: Globe Illustration */}
          <div className="corp-right">
            <div className="corp-globe-container">
              {/* Globe */}
              <div className="corp-globe" />

              {/* Orbit ring */}
              <div className="corp-orbit" />

              {/* Location pins on globe */}
              <div className="corp-pin corp-pin--1">
                <div className="corp-pin-dot" />
              </div>
              <div className="corp-pin corp-pin--2">
                <div className="corp-pin-dot" />
              </div>
              <div className="corp-pin corp-pin--3">
                <div className="corp-pin-dot" />
              </div>
              <div className="corp-pin corp-pin--4">
                <div className="corp-pin-dot" />
              </div>

              {/* Floating icons */}
              <div className="corp-float-icon corp-float-icon--pin">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#005AD1">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                </svg>
              </div>

              <div className="corp-float-icon corp-float-icon--phone">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#34A853">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>

              <div className="corp-float-icon corp-float-icon--mail">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="4" width="20" height="16" rx="3" fill="#EA4335"/>
                  <path d="M2 7l10 6 10-6" stroke="#fff" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>

              <div className="corp-float-icon corp-float-icon--qr">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#005AD1">
                  <path d="M3 11h8V3H3v8zm2-6h4v4H5V5zM3 21h8v-8H3v8zm2-6h4v4H5v-4zM13 3v8h8V3h-8zm6 6h-4V5h4v4zM13 13h2v2h-2zM15 15h2v2h-2zM13 17h2v2h-2zM17 13h2v2h-2zM19 15h2v2h-2zM17 17h2v2h-2zM19 19h2v2h-2zM15 19h2v2h-2z"/>
                </svg>
              </div>

              <div className="corp-float-icon corp-float-icon--share">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#005AD1" stroke="none">
                  <circle cx="18" cy="5" r="3"/>
                  <circle cx="6" cy="12" r="3"/>
                  <circle cx="18" cy="19" r="3"/>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" stroke="#005AD1" strokeWidth="1.5"/>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" stroke="#005AD1" strokeWidth="1.5"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CorporateBranding;
