"use client";

import React from "react";

export default function TeamCTA() {
  return (
    <section
      className="w-full py-20 md:py-24 bg-white"
      style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');

        @keyframes floatA {
          0%,100% { transform: translateY(0px) rotate(-3deg); }
          50%      { transform: translateY(-10px) rotate(-3deg); }
        }
        @keyframes floatB {
          0%,100% { transform: translateY(0px) rotate(2deg); }
          50%      { transform: translateY(-8px) rotate(2deg); }
        }
        @keyframes floatC {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-12px); }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(1.6); opacity: 0; }
        }

        .pill-a { animation: floatA 4s   ease-in-out infinite; }
        .pill-b { animation: floatB 3.5s ease-in-out infinite 0.6s; }
        .pill-c { animation: floatC 4.5s ease-in-out infinite 1.1s; }

        .cta-primary {
          font-family: 'DM Sans', 'Helvetica Neue', sans-serif;
          background: #1e3a8a;
          color: #fff;
          font-size: 16px; font-weight: 700;
          border-radius: 99px;
          padding: 14px 32px;
          border: none; cursor: pointer;
          box-shadow: 0 6px 20px rgba(30,58,138,0.45);
          transition: all 0.2s ease;
        }
        .cta-primary:hover { transform: translateY(-2px); box-shadow: 0 14px 32px rgba(30,58,138,0.55); }

        .cta-secondary {
          font-family: 'DM Sans', 'Helvetica Neue', sans-serif;
          background: rgba(255,255,255,0.9);
          color: #2563EB;
          font-size: 16px; font-weight: 700;
          border-radius: 99px;
          padding: 14px 32px;
          border: none; cursor: pointer;
          transition: all 0.2s ease;
        }
        .cta-secondary:hover { background: #fff; transform: translateY(-2px); }

        .glass-pill {
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(14px);
          border-radius: 99px;
          padding: 9px 20px 9px 13px;
          font-size: 14px; font-weight: 700;
          display: flex; align-items: center; gap: 9px;
          box-shadow: 0 8px 28px rgba(37,99,235,0.16);
          white-space: nowrap;
          font-family: 'DM Sans', 'Helvetica Neue', sans-serif;
        }

        /* Responsive: stack on small screens */
        .cta-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
        }
        @media (max-width: 767px) {
          .cta-inner { flex-direction: column; align-items: center; text-align: center; }
          .cta-left-content { align-items: center !important; }
          .cta-buttons { justify-content: center; }
          .cta-phone-col { 
            display: block !important; 
            width: 100%; 
            height: 320px !important; 
            flex: none !important; 
            margin-top: 30px; 
          }
          .phone-shell { right: 50% !important; transform: translateX(50%) scale(0.9); bottom: -100px !important; }
          .pill-a { left: 5% !important; top: 30% !important; }
          .pill-b { right: 5% !important; bottom: 80px !important; }
          .pill-c { right: 15% !important; top: 0 !important; }
        }
      `}</style>

      {/* ── Consistent wrapper ── */}
      <div style={{ maxWidth: 1400, marginLeft: "auto", marginRight: "auto", paddingLeft: 32, paddingRight: 32 }}>
        <div className="cta-wrapper" style={{
          position: "relative",
          borderRadius: 28,
          overflow: "hidden",
          background: "linear-gradient(135deg, #63adb7ff 0%, #3879ceff 100%)",
          padding: "56px 64px",
          minHeight: 300,
        }}>
          <style>{`
            @media (max-width: 767px) {
              .cta-wrapper { padding: 40px 24px 0 24px !important; }
            }
          `}</style>

          {/* ── Background bokeh blobs ── */}
          <div style={{ position: "absolute", top: "-40%", left: "10%", width: 700, height: 700, background: "rgba(255,255,255,0.06)", borderRadius: "50%", filter: "blur(90px)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "-50%", right: "5%", width: 600, height: 600, background: "rgba(186,230,253,0.12)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: "20%", right: "38%", width: 300, height: 300, background: "rgba(255,255,255,0.04)", borderRadius: "50%", filter: "blur(50px)", pointerEvents: "none" }} />

          <div className="cta-inner">

            {/* ── LEFT ── */}
            <div className="cta-left-content" style={{ position: "relative", zIndex: 2, maxWidth: 520, flex: "1 1 320px", display: "flex", flexDirection: "column" }}>
              <h2 style={{
                fontSize: "clamp(26px, 3.2vw, 44px)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.18,
                letterSpacing: "-0.025em",
                margin: "0 0 18px",
              }}>
                Ready to create your<br />digital business card?
              </h2>

              <p style={{
                fontSize: "clamp(14px, 1.4vw, 17px)",
                color: "rgba(255,255,255,0.86)",
                fontWeight: 400,
                lineHeight: 1.72,
                margin: "0 0 36px",
                maxWidth: 460,
              }}>
                Get started for free with the easiest way to share contact
                details, capture leads, and remember everyone you meet.
              </p>

              <div className="cta-buttons" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <button className="cta-primary" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  Get Started <span>→</span>
                </button>
                <button className="cta-secondary">For teams</button>
              </div>
            </div>

            {/* ── RIGHT: phone + pills ── */}
            <div
              className="cta-phone-col"
              style={{
                position: "relative",
                zIndex: 2,
                flex: "0 0 360px",
                height: 300,
              }}
            >

              {/* ── Phone shell ── */}
              <div className="phone-shell" style={{
                position: "absolute",
                right: 8,
                bottom: -56,
                width: 204,
                height: 356,
                borderRadius: 40,
                border: "8px solid rgba(255,255,255,0.92)",
                background: "#EFF6FF",
                overflow: "hidden",
                boxShadow: "0 28px 72px rgba(29,78,216,0.38), 0 0 0 1.5px rgba(255,255,255,0.55)",
              }}>

                {/* Status bar */}
                <div style={{
                  background: "#DBEAFE",
                  padding: "10px 16px 8px",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                }}>
                  <span style={{ fontSize: 9, fontWeight: 700, color: "#2563EB" }}>9:41</span>
                  {/* Dynamic island */}
                  <div style={{ width: 44, height: 14, background: "rgba(37,99,235,0.18)", borderRadius: 99 }} />
                  <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="#60A5FA"><rect x="0" y="3" width="2" height="5" rx="1" /><rect x="3" y="2" width="2" height="6" rx="1" /><rect x="6" y="1" width="2" height="7" rx="1" /><rect x="9" y="0" width="2" height="8" rx="1" /></svg>
                  </div>
                </div>

                {/* Profile card */}
                <div style={{
                  background: "#fff",
                  margin: "10px 8px 0",
                  borderRadius: 18,
                  padding: "20px 14px 16px",
                  display: "flex", flexDirection: "column", alignItems: "center",
                  boxShadow: "0 4px 20px rgba(37,99,235,0.08)",
                }}>
                  {/* Avatar with pulse ring */}
                  <div style={{ position: "relative", marginBottom: 12 }}>
                    <div style={{
                      width: 72, height: 72, borderRadius: "50%",
                      background: "linear-gradient(135deg, #93C5FD 0%, #3B82F6 45%, #1D4ED8 100%)",
                      border: "3px solid #BFDBFE",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: "0 6px 20px rgba(59,130,246,0.35)",
                      position: "relative", zIndex: 1,
                    }}>
                      {/* Person icon */}
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <circle cx="20" cy="14" r="9" fill="rgba(255,255,255,0.9)" />
                        <ellipse cx="20" cy="36" rx="15" ry="10" fill="rgba(255,255,255,0.75)" />
                      </svg>
                    </div>
                    {/* Online dot */}
                    <div style={{
                      position: "absolute", bottom: 3, right: 3,
                      width: 14, height: 14, borderRadius: "50%",
                      background: "#22C55E",
                      border: "2.5px solid #fff",
                      zIndex: 2,
                    }} />
                  </div>

                  <div style={{ fontSize: 14, fontWeight: 800, color: "#111827", marginBottom: 3, fontFamily: "'DM Sans',sans-serif" }}>Margo Smith</div>
                  <div style={{ fontSize: 11, color: "#6B7280", marginBottom: 6, fontFamily: "'DM Sans',sans-serif" }}>Marketer</div>

                  {/* Location */}
                  <div style={{ fontSize: 9, color: "#9CA3AF", display: "flex", alignItems: "center", gap: 3, marginBottom: 14 }}>
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /></svg>
                    New York · Connecxa
                  </div>

                  {/* Exchange button */}
                  <div style={{
                    width: "100%",
                    background: "linear-gradient(90deg,#2563EB,#3B82F6)",
                    borderRadius: 99,
                    padding: "8px 0",
                    textAlign: "center",
                    fontSize: 10, fontWeight: 700, color: "#fff",
                    cursor: "pointer",
                    boxShadow: "0 4px 12px rgba(37,99,235,0.35)",
                    fontFamily: "'DM Sans',sans-serif",
                    letterSpacing: "0.02em",
                  }}>
                    Exchange Contact
                  </div>
                </div>

                {/* Social row */}
                <div style={{ padding: "12px 16px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                  <div style={{ fontSize: 8, color: "#9CA3AF", letterSpacing: "0.1em", fontFamily: "'DM Sans',sans-serif" }}>LET'S CONNECT</div>
                  <div style={{ display: "flex", gap: 8 }}>
                    {["in", "ig", "tw"].map((s) => (
                      <div key={s} style={{
                        width: 28, height: 28, borderRadius: 8,
                        background: "linear-gradient(135deg,#DBEAFE,#BFDBFE)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <div style={{ width: 10, height: 10, borderRadius: 2, background: "#3B82F6", opacity: 0.8 }} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom gradient fill */}
                <div style={{ flex: 1, minHeight: 40, background: "linear-gradient(180deg,#F0F7FF,#DBEAFE)" }} />
              </div>

              {/* ── Floating pills ── */}
              {/* Grow */}
              <div className="pill-c glass-pill" style={{
                position: "absolute", top: 10, right: 4,
                color: "#1e3a8a",
              }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "linear-gradient(135deg,#60A5FA,#2563EB)", boxShadow: "0 2px 6px rgba(37,99,235,0.5)" }} />
                Grow
              </div>

              {/* Share */}
              <div className="pill-a glass-pill" style={{
                position: "absolute", top: "42%", left: -4,
                color: "#065f46",
              }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "linear-gradient(135deg,#6EE7B7,#10B981)", boxShadow: "0 2px 6px rgba(16,185,129,0.5)" }} />
                Share
              </div>

              {/* Connect */}
              <div className="pill-b glass-pill" style={{
                position: "absolute", bottom: 32, right: 4,
                color: "#78350f",
              }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "linear-gradient(135deg,#FCD34D,#F59E0B)", boxShadow: "0 2px 6px rgba(245,158,11,0.5)" }} />
                Connect
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}