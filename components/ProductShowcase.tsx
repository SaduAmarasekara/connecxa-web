"use client";

import React, { useRef } from "react";
import Image from "next/image";

const showcaseItems = [
  {
    title: "Custom QR Code",
    desc: "Share your profile with a quick scan No app required for recipients.",
    image: "/showcase-qr.png"
  },
  {
    title: "Apple & Google Wallet",
    desc: "Add your digital business card directly to Apple Wallet or Google Wallet for easy access, even when offline.",
    image: "/showcase-wallet.png"
  },
  {
    title: "Flexible Widgets",
    desc: "Pin your QR code to your home screen The fastest way to share your digital business card on iPhone.",
    image: "/showcase-widget.png"
  },
  {
    title: "NFC Business Cards",
    desc: "Tap to share Use a custom NFC business card to transfer your contact info to any smartphone instantly.",
    image: "/showcase-nfc.png"
  }
];

export default function ProductShowcase() {
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
    <section className="py-20 bg-white overflow-hidden" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        .showcase-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
        }

        .showcase-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .showcase-title {
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 800;
          color: #111;
          letter-spacing: -0.03em;
          margin-bottom: 16px;
          line-height: 1.1;
        }

        .showcase-subtitle {
          font-size: clamp(16px, 2vw, 18px);
          color: #6B7280;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .showcase-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .showcase-card {
          background: #fff;
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          border: 1px solid #F3F4F6;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          min-width: 0;
        }

        .showcase-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
        }

        .showcase-image-wrapper {
          width: 100%;
          aspect-ratio: 1 / 1;
          position: relative;
          background: #EFF6FF;
          overflow: hidden;
        }

        .showcase-content {
          padding: 32px 24px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .showcase-card-title {
          font-size: 20px;
          font-weight: 700;
          color: #111;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .showcase-card-desc {
          font-size: 15px;
          color: #6B7280;
          line-height: 1.6;
        }

        /* ── MOBILE SCROLL CONTROLS ── */
        .showcase-arrows {
          display: none;
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          transform: translateY(-50%);
          justify-content: space-between;
          padding: 0 10px;
          z-index: 20;
          pointer-events: none;
        }

        .scroll-btn {
          width: 44px;
          height: 44px;
          background: #fff;
          border: 1px solid #E5E7EB;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          pointer-events: auto;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: all 0.2s;
        }

        .scroll-btn:hover {
          background: #F9FAFB;
          transform: scale(1.1);
        }

        @media (max-width: 1200px) {
          .showcase-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .showcase-arrows {
            display: flex;
          }
          
          .showcase-grid {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            padding-bottom: 20px;
            gap: 20px;
            scrollbar-width: none; /* Hide scrollbar */
          }

          .showcase-grid::-webkit-scrollbar {
            display: none;
          }

          .showcase-card {
            flex: 0 0 280px; /* Fixed width on mobile */
            scroll-snap-align: center;
          }
        }

        @media (max-width: 640px) {
          .showcase-header {
            margin-bottom: 40px;
          }
        }
      `}</style>

      <div className="showcase-container">
        <div className="showcase-header">
          <h2 className="showcase-title">Share your digital business card in seconds.</h2>
          <p className="showcase-subtitle">
            Share via QR code, NFC, or Apple Wallet Always ready when you are, even offline
          </p>
        </div>

        {/* Mobile Arrows */}
        <div className="showcase-arrows">
          <button className="scroll-btn" onClick={() => scroll('left')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button className="scroll-btn" onClick={() => scroll('right')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        <div className="showcase-grid" ref={scrollRef}>
          {showcaseItems.map((item, index) => (
            <div key={index} className="showcase-card">
              <div className="showcase-image-wrapper">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="showcase-content">
                <h3 className="showcase-card-title">{item.title}</h3>
                <p className="showcase-card-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
