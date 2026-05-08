"use client";

import Image from "next/image";
import { useRef } from "react";

const profiles = [
  { id: "classic", name: "", src: "/profile-classic.png" },
  { id: "creative", name: "", src: "/profile-creative.png" },
  { id: "professional", name: "", src: "/profile-professional.png" },
  { id: "corporate", name: "", src: "/profile-corporate.png" },
  { id: "modern", name: "", src: "/profile-modern.png" },
  { id: "minimalist", name: "", src: "/profile-minimalist.png" },
  { id: "elegant", name: "", src: "/profile-elegant.png" },
];

export default function ProfilesShowcase() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -360 : 360,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <style>{`
        .profiles-section {
          width: 100%;
          padding: 80px 0 64px;
          background: #ffffff;
          font-family: 'DM Sans', 'Helvetica Neue', sans-serif;
          box-sizing: border-box;
          overflow: hidden;
        }

        .profiles-header {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 24px;
          text-align: center;
          margin-bottom: 48px;
          box-sizing: border-box;
        }

        .profiles-title {
          font-size: clamp(32px, 5vw, 54px);
          font-weight: 700;
          color: #111827;
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin: 0 0 16px 0;
        }

        .profiles-title-emoji {
          font-size: 0.85em;
          display: inline-block;
          margin-left: 4px;
        }

        .profiles-subtitle {
          font-size: clamp(15px, 1.8vw, 19px);
          color: #4B5563;
          font-weight: 500;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .profiles-carousel-wrapper {
          position: relative;
          width: 100%;
        }

        .profiles-scroll-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          border-radius: 50%;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1f2937;
          border: 1px solid rgba(0, 0, 0, 0.06);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .profiles-scroll-btn:hover {
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.2);
        }

        .profiles-scroll-btn--left {
          left: 6px;
        }

        .profiles-scroll-btn--right {
          right: 6px;
        }

        .profiles-scroll-row {
          display: flex;
          gap: 20px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          padding: 8px 24px 16px;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .profiles-scroll-row::-webkit-scrollbar {
          display: none;
        }

        .profiles-card {
          flex-shrink: 0;
          scroll-snap-align: start;
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          width: 240px;
        }

        .profiles-device {
          position: relative;
          width: 100%;
          height: 480px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          background: #F8F9FA;
          overflow: hidden;
          transition: all 0.35s ease;
        }

        .profiles-card:hover .profiles-device {
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.14);
          transform: translateY(-6px);
        }

        .profiles-device-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top right, transparent, rgba(255,255,255,0.15), transparent);
          pointer-events: none;
        }

        .profiles-label {
          margin-top: 16px;
          font-size: 18px;
          font-weight: 700;
          color: #1f2937;
          letter-spacing: -0.01em;
          transition: color 0.3s ease;
        }

        .profiles-card:hover .profiles-label {
          color: #005AD1;
        }

        /* Large desktop */
        @media (min-width: 1200px) {
          .profiles-card {
            width: 280px;
          }
          .profiles-device {
            height: 540px;
          }
          .profiles-scroll-row {
            gap: 24px;
            padding: 8px 40px 16px;
          }
          .profiles-scroll-btn--left {
            left: 12px;
          }
          .profiles-scroll-btn--right {
            right: 12px;
          }
        }

        /* Tablet */
        @media (max-width: 768px) {
          .profiles-section {
            padding: 56px 0 48px;
          }
          .profiles-card {
            width: 220px;
          }
          .profiles-device {
            height: 440px;
            border-radius: 14px;
          }
          .profiles-scroll-row {
            gap: 16px;
            padding: 8px 16px 16px;
          }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .profiles-section {
            padding: 48px 0 40px;
          }
          .profiles-header {
            margin-bottom: 32px;
            padding: 0 16px;
          }
          .profiles-card {
            width: 200px;
          }
          .profiles-device {
            height: 400px;
            border-radius: 12px;
          }
          .profiles-scroll-row {
            gap: 12px;
            padding: 8px 12px 12px;
          }
          .profiles-scroll-btn {
            width: 32px;
            height: 32px;
          }
        }
      `}</style>

      <section className="profiles-section">
        {/* Header */}
        <div className="profiles-header">
          <h2 className="profiles-title">
            Fully-Customisable Profiles
            <span className="profiles-title-emoji">⚡</span>
          </h2>
          <p className="profiles-subtitle">
            Ready-to-use Digital Business Cards for modern professionals and
            teams. Click to view!
          </p>
        </div>

        {/* Carousel */}
        <div className="profiles-carousel-wrapper">
          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            className="profiles-scroll-btn profiles-scroll-btn--left"
            aria-label="Scroll left"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            className="profiles-scroll-btn profiles-scroll-btn--right"
            aria-label="Scroll right"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Scrolling row */}
          <div ref={scrollRef} className="profiles-scroll-row">
            {profiles.map((profile) => (
              <div key={profile.id} className="profiles-card">
                <div className="profiles-device">
                  <Image
                    src={profile.src}
                    alt={profile.name || profile.id}
                    fill
                    style={{ objectFit: "cover", objectPosition: "top" }}
                  />
                  <div className="profiles-device-overlay" />
                </div>

                {profile.name && (
                  <span className="profiles-label">{profile.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}