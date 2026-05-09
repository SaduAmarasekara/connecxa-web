"use client";

import React from "react";

// Icons from the screenshot/similar style
const floatingIcons = [
  { name: "Instagram",  src: "https://cdn.simpleicons.org/instagram/E1306C",    size: 110, top: "10%",  left: "12%",  rotate: "-12deg", anim: "floatA" },
  { name: "WhatsApp",   src: "https://cdn.simpleicons.org/whatsapp/25D366",     size: 100, top: "15%",  right: "12%", rotate: "8deg",   anim: "floatB" },
  { name: "Facebook",   src: "https://cdn.simpleicons.org/facebook/1877F2",     size: 90,  bottom: "35%", left: "10%",  rotate: "-5deg",  anim: "floatC" },
  { name: "TikTok",     src: "https://cdn.simpleicons.org/tiktok/000000",       size: 90,  bottom: "38%", right: "10%", rotate: "10deg",  anim: "floatA" },
  { name: "Gmail",      src: "https://cdn.simpleicons.org/gmail/EA4335",      size: 80,  bottom: "10%", left: "16%",  rotate: "12deg",  anim: "floatB" },
  { name: "YouTube",    src: "https://cdn.simpleicons.org/youtube/FF0000",      size: 95,  bottom: "5%",  right: "22%", rotate: "-10deg", anim: "floatC" },
]

export default function SmarterConnect() {
  return (
    <section
      className="w-full relative overflow-hidden bg-white"
      style={{
        minHeight: "clamp(600px, 90vw, 850px)",
        fontFamily: "'Inter', 'DM Sans', sans-serif",
      }}
    >
      {/* ── Floating Icon Layer ── */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((icon, i) => {
          const delay = (i * 0.8).toFixed(2);
          return (
            <div
              key={icon.name}
              className="absolute smarter-icon-wrap"
              style={{
                top:    icon.top,
                bottom: icon.bottom,
                left:   icon.left,
                right:  icon.right,
                animation: `${icon.anim} ${6 + (i % 2)}s ease-in-out infinite`,
                animationDelay: `${delay}s`,
              }}
            >
              <div
                style={{
                  width:        icon.size,
                  height:       icon.size,
                  background:   "#ffffff",
                  borderRadius: "28px",
                  boxShadow:    "0 20px 40px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.02)",
                  display:      "flex",
                  alignItems:   "center",
                  justifyContent: "center",
                  padding:      "20px",
                  border:       "1px solid rgba(0,0,0,0.03)",
                  transform:    `rotate(${icon.rotate})`,
                }}
              >
                <img
                  src={icon.src}
                  alt={icon.name}
                  style={{
                    width:  "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  draggable={false}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Centre Text ── */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6"
        style={{
          minHeight: "clamp(600px, 90vw, 850px)",
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            fontSize: "clamp(15px, 1.8vw, 20px)",
            fontWeight: 700,
            color: "#00AEEF", // Bright Cyan/Blue from screenshot
            marginBottom: "32px",
            lineHeight: 1.4,
            letterSpacing: "-0.01em",
          }}
        >
          Remember everyone you meet. Follow up on time, every time
        </p>

        {/* Headline */}
        <h2
          style={{
            fontSize: "clamp(32px, 5.5vw, 68px)",
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: "-0.04em",
            color: "#1a1a1a",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          Instead of losing touch, <span style={{ fontWeight: 900 }}>Connecxa</span> turns{" "}
          <br className="hidden md:block" />
          every meeting into a <span style={{ color: "#5b5e6b" }}>lasting connection</span>{" "}
          <br className="hidden md:block" />
          <span style={{ color: "#5b5e6b" }}>you can remember.</span>
        </h2>
      </div>

      <style>{`
        @keyframes floatA {
          0%, 100% { transform: translateY(0px) rotate(-12deg); }
          50%       { transform: translateY(-15px) rotate(-10deg); }
        }
        @keyframes floatB {
          0%, 100% { transform: translateY(0px) rotate(8deg); }
          50%       { transform: translateY(-12px) rotate(10deg); }
        }
        @keyframes floatC {
          0%, 100% { transform: translateY(0px) rotate(-5deg); }
          50%       { transform: translateY(-20px) rotate(-3deg); }
        }

        @media (max-width: 1024px) {
          .smarter-icon-wrap div {
            width: 70px !important;
            height: 70px !important;
            padding: 14px !important;
            border-radius: 18px !important;
          }
        }
        @media (max-width: 767px) {
          .smarter-icon-wrap div {
            width: 50px !important;
            height: 50px !important;
            padding: 10px !important;
            border-radius: 14px !important;
            opacity: 0.8;
          }
          /* Adjust positions to edges to avoid text overlap */
          .smarter-icon-wrap {
             margin: 0 -4% !important;
          }
        }
        @media (max-width: 480px) {
          .smarter-icon-wrap div {
            width: 42px !important;
            height: 42px !important;
            padding: 8px !important;
            opacity: 0.6;
          }
        }
      `}</style>
    </section>
  );
}