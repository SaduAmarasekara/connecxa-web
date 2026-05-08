"use client";

import React, { useRef } from "react";

const logos = [
  {
    name: "Shopify",
    svg: (
      <svg viewBox="0 0 109 124" className="h-10 w-auto" xmlns="http://www.w3.org/2000/svg">
        <path d="M74.7 14.8s-.3.1-.9.3c-.5-1.4-1.3-3.1-2.5-4.7-3.7-5-9-7.6-15.4-7.6-.4 0-.9 0-1.3.1-.2-.2-.4-.5-.6-.7C51.8.7 49.3-.1 46.3 0c-5.9.2-11.8 4.4-16.6 12-3.4 5.4-5.9 12.2-6.7 17.5l-11.5 3.6C8 34.4 7.9 34.5 7.8 38 7.7 40.7 0 98.5 0 98.5l56.7 9.9 30.7-7.6S74.7 15.4 74.7 14.8zm-18.5-2.5c-3.7 1.1-7.7 2.4-11.7 3.6.1-4.1 1.3-9.7 3.8-13.4 1.6-2.4 3.9-4.4 6.5-5.6 2.4 4.3 3.6 10.2 3.4 15.4zM46.4 3.1c2 0 3.7.5 5.2 1.4-2.4 1.3-4.7 3.3-6.7 5.9-3.4 4.6-5.5 11.4-5.8 17.9l-9.2 2.9c1.7-10.6 8.1-27.3 16.5-28.1z" fill="#96BF48"/>
        <path d="M56.7 108.4l30.7-7.5S74.7 15.4 74.6 14.8c-.1-.6-.6-1-1.1-.9-.5.1-9 1.8-9 1.8l-7.8 86.7z" fill="#5E8E3E"/>
        <path d="M46.3 38.5l-3.6 10.7s-3.1-1.7-7-1.7c-5.7 0-5.9 3.5-5.9 4.4 0 4.8 12.5 6.7 12.5 17.9 0 8.9-5.6 14.6-13.2 14.6-9.1 0-13.7-5.7-13.7-5.7l2.4-8s4.8 4.1 8.8 4.1c2.6 0 3.7-2.1 3.7-3.6 0-6.2-10.3-6.5-10.3-16.7 0-8.6 6.2-16.9 18.6-16.9 4.8-.1 7.7 1.9 7.7 1.9z" fill="white"/>
      </svg>
    ),
  },
  {
    name: "Hyatt",
    svg: (
      <svg viewBox="0 0 200 56" className="h-10 w-auto" xmlns="http://www.w3.org/2000/svg">
        <text x="8" y="46" fontFamily="'DM Sans', sans-serif" fontSize="46" fontWeight="700" fill="#1B1B5E" letterSpacing="-2">HYATT</text>
      </svg>
    ),
  },
  {
    name: "Mastercard",
    svg: (
      <svg viewBox="0 0 80 50" className="h-10 w-auto" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="25" r="22" fill="#EB001B"/>
        <circle cx="50" cy="25" r="22" fill="#F79E1B"/>
        <path d="M40 7.8a22 22 0 0 1 0 34.4A22 22 0 0 1 40 7.8z" fill="#FF5F00"/>
      </svg>
    ),
  },
  {
    name: "Bosch",
    svg: (
      <svg viewBox="0 0 150 46" className="h-10 w-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="150" height="46" rx="23" fill="#E20015"/>
        <text x="75" y="32" textAnchor="middle" fontFamily="'DM Sans', sans-serif" fontSize="22" fontWeight="700" fill="white" letterSpacing="1">BOSCH</text>
      </svg>
    ),
  },
  {
    name: "Fujifilm",
    svg: (
      <svg viewBox="0 0 185 44" className="h-10 w-auto" xmlns="http://www.w3.org/2000/svg">
        <text x="2" y="36" fontFamily="'DM Sans', sans-serif" fontSize="34" fontWeight="900" fill="#D20020" letterSpacing="-0.5">FUJIFILM</text>
      </svg>
    ),
  },
  {
    name: "Jimmy Choo",
    svg: (
      <svg viewBox="0 0 240 34" className="h-10 w-auto" xmlns="http://www.w3.org/2000/svg">
        <text x="2" y="26" fontFamily="'DM Sans', sans-serif" fontSize="22" fontWeight="400" fill="#1a1a1a" letterSpacing="4">JIMMY CHOO</text>
      </svg>
    ),
  },
  {
    name: "AIA",
    svg: (
      <svg viewBox="0 0 100 44" className="h-10 w-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="44" rx="4" fill="#D31145"/>
        <text x="50" y="30" textAnchor="middle" fontFamily="'DM Sans', sans-serif" fontSize="22" fontWeight="900" fill="white" letterSpacing="4">AIA</text>
      </svg>
    ),
  },
  {
    name: "Shiseido",
    svg: (
      <svg viewBox="0 0 190 34" className="h-10 w-auto" xmlns="http://www.w3.org/2000/svg">
        <text x="2" y="26" fontFamily="'DM Sans', sans-serif" fontSize="20" fontWeight="400" fill="#1a1a1a" letterSpacing="6">SHISEIDO</text>
      </svg>
    ),
  },
  {
    name: "Bandai Namco",
    svg: (
      <svg viewBox="0 0 100 68" className="h-10 w-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="32" rx="4" fill="#F29200"/>
        <text x="50" y="22" textAnchor="middle" fontFamily="'DM Sans', sans-serif" fontSize="14" fontWeight="700" fill="white">BANDAI</text>
        <rect y="36" width="100" height="32" rx="4" fill="#1A1A8C"/>
        <text x="50" y="57" textAnchor="middle" fontFamily="'DM Sans', sans-serif" fontSize="14" fontWeight="700" fill="white">NAMCO</text>
      </svg>
    ),
  },
  {
    name: "PropertyGuru",
    svg: (
      <svg viewBox="0 0 56 56" className="h-10 w-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="56" height="56" rx="8" fill="#23A956"/>
        <path d="M10 44V22l18-12 18 12v22H34V32H22v12z" fill="white"/>
      </svg>
    ),
  },
  {
    name: "Medtronic",
    svg: (
      <svg viewBox="0 0 190 36" className="h-10 w-auto" xmlns="http://www.w3.org/2000/svg">
        <text x="2" y="28" fontFamily="'DM Sans', sans-serif" fontSize="26" fontWeight="300" fill="#0056A0" letterSpacing="0.5">medtronic</text>
      </svg>
    ),
  },
  {
    name: "JobStreet",
    svg: (
      <svg viewBox="0 0 165 40" className="h-10 w-auto" xmlns="http://www.w3.org/2000/svg">
        <text x="2" y="32" fontFamily="'DM Sans', sans-serif" fontSize="30" fontWeight="700" fill="#1C3688">Job</text>
        <text x="66" y="32" fontFamily="'DM Sans', sans-serif" fontSize="30" fontWeight="700" fill="#F58220">Street</text>
      </svg>
    ),
  },
  {
    name: "Bvlgari",
    svg: (
      <svg viewBox="0 0 155 30" className="h-10 w-auto" xmlns="http://www.w3.org/2000/svg">
        <text x="2" y="24" fontFamily="'DM Sans', sans-serif" fontSize="20" fontWeight="400" fill="#1a1a1a" letterSpacing="6">BVLGARI</text>
      </svg>
    ),
  },
  {
    name: "NXP",
    svg: (
      <svg viewBox="0 0 100 40" className="h-10 w-auto" xmlns="http://www.w3.org/2000/svg">
        <text x="2" y="34" fontFamily="'DM Sans', sans-serif" fontSize="38" fontWeight="900" fill="#009FE3" letterSpacing="-1">NXP</text>
      </svg>
    ),
  },
  {
    name: "Changi",
    svg: (
      <svg viewBox="0 0 155 42" className="h-10 w-auto" xmlns="http://www.w3.org/2000/svg">
        <text x="2" y="32" fontFamily="'DM Sans', sans-serif" fontSize="28" fontWeight="700" fill="#003DA5" letterSpacing="2">CHANGI</text>
      </svg>
    ),
  },
  {
    name: "InterContinental",
    svg: (
      <svg viewBox="0 0 56 56" className="h-10 w-auto" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="26" fill="none" stroke="#003087" strokeWidth="2.5"/>
        <text x="28" y="24" textAnchor="middle" fontFamily="'DM Sans', sans-serif" fontSize="9" fill="#003087" fontWeight="700">INTER</text>
        <text x="28" y="34" textAnchor="middle" fontFamily="'DM Sans', sans-serif" fontSize="7" fill="#003087">CONTINENTAL</text>
      </svg>
    ),
  },
];

export default function TrustedBy() {
  const trackRef = useRef<HTMLDivElement>(null);

  const fontStyle = { fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" };

  return (
    <section className="w-full py-20 bg-white overflow-hidden" style={fontStyle}>

      {/* ── Centered Header ── */}
      <div className="w-full px-6 text-center mb-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-400 mb-5">
          World-class clients
        </p>
        <h2
          className="font-bold leading-[1.1] tracking-tight text-gray-900 mb-5 mx-auto"
          style={{ fontSize: "clamp(40px, 6vw, 64px)" }}
        >
          Trusted by{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #0066FF 0%, #00C9A7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
           Many
          </span>
          <br />
          companies worldwide
        </h2>
        <p className="text-gray-500 text-lg font-medium">
          From Fortune 500s to fast-growing teams
        </p>
      </div>

      {/* ── Divider ── */}
      <div className="flex items-center justify-center gap-3 mb-14" style={{ marginTop: 32 }}>
        <span className="w-10 h-px bg-gray-200" />
        <span className="w-2 h-2 rounded-full bg-blue-600" />
        <span className="w-10 h-px bg-gray-200" />
      </div>

      {/* ── Marquee ── */}
      <div className="relative overflow-hidden group">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10"
          style={{ background: "linear-gradient(to right, white, transparent)" }} />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10"
          style={{ background: "linear-gradient(to left, white, transparent)" }} />

        <div
          ref={trackRef}
          className="flex items-center"
          style={{
            display: "flex",
            width: "max-content",
            animation: "marquee 50s linear infinite",
          }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="inline-flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-110 group/logo"
              style={{ padding: "0 48px" }}
            >
              <div className="flex items-center justify-center" style={{ height: "40px" }}>
                {logo.svg}
              </div>
              <span
                className="font-semibold uppercase text-gray-300 transition-colors duration-300 group-hover/logo:text-gray-500"
                style={{ fontSize: "10px", letterSpacing: "0.18em" }}
              >
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Spacer + Divider ── */}
      <div style={{ marginTop: 48, marginBottom: 48, display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: 80, height: 1, background: '#e5e7eb' }} />
      </div>

      {/* ── Stats ── */}
      <div className="flex flex-wrap justify-center px-6" style={{ gap: "48px" }}>
        {[
          { num: "2M+", label: "Taps, scans & shares" },
          { num: "200K+", label: "Users & teams globally" },
          { num: "2,000+", label: "Companies onboarded" },
        ].map((s, i) => (
          <React.Fragment key={i}>
            {i > 0 && (
              <div className="hidden sm:block w-px h-10 bg-gray-200 self-center" />
            )}
            <div className="text-center">
              <div
                className="font-bold leading-none mb-1"
                style={{
                  fontSize: "36px",
                  background: "linear-gradient(135deg, #0066FF 0%, #00C9A7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {s.num}
              </div>
              <div className="text-xs text-gray-400 tracking-wide font-medium">
                {s.label}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .group:hover > div[style*="animation"] {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}