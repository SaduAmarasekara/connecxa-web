"use client";

import React from "react";

export default function TeamCTA() {
  return (
    <section className="w-full py-20 md:py-24 bg-white">
      <style>{`
        @keyframes floatA { 0%,100%{transform:translateY(0px) rotate(-2deg)} 50%{transform:translateY(-8px) rotate(-2deg)} }
        @keyframes floatB { 0%,100%{transform:translateY(0px) rotate(3deg)} 50%{transform:translateY(-6px) rotate(3deg)} }
        @keyframes floatC { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-10px)} }
        .pill-float-a { animation: floatA 4s ease-in-out infinite; }
        .pill-float-b { animation: floatB 3.5s ease-in-out infinite 0.5s; }
        .pill-float-c { animation: floatC 4.5s ease-in-out infinite 1s; }
        .cta-btn-primary { transition: all 0.2s ease; }
        .cta-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(0,0,0,0.25) !important; }
        .cta-btn-secondary { transition: all 0.2s ease; }
        .cta-btn-secondary:hover { background: rgba(255,255,255,1) !important; transform: translateY(-2px); }
      `}</style>

      <div style={{ maxWidth: 1400, marginLeft: "auto", marginRight: "auto", paddingLeft: 32, paddingRight: 32 }}>
        <div style={{
          position: "relative",
          borderRadius: 28,
          overflow: "hidden",
          background: "linear-gradient(120deg, #1D4ED8 0%, #2563EB 30%, #3B82F6 60%, #60A5FA 85%, #93C5FD 100%)",
          padding: "56px 64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 32,
          minHeight: 300,
        }}>

          {/* ── Decorative light blobs ── */}
          <div style={{ position:"absolute", top:"-30%", left:"15%", width:600, height:600, background:"rgba(255,255,255,0.07)", borderRadius:"50%", filter:"blur(80px)", pointerEvents:"none" }} />
          <div style={{ position:"absolute", bottom:"-40%", right:"15%", width:500, height:500, background:"rgba(147,197,253,0.12)", borderRadius:"50%", filter:"blur(70px)", pointerEvents:"none" }} />

          {/* ── LEFT: Text + Buttons ── */}
          <div style={{ position:"relative", zIndex:2, maxWidth:520, flexShrink:0 }}>
            <h2 style={{
              fontSize: "clamp(26px, 3vw, 42px)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              margin: "0 0 18px 0",
            }}>
              Ready to create your digital<br />business card?
            </h2>

            <p style={{
              fontSize: "clamp(14px, 1.4vw, 17px)",
              color: "rgba(255,255,255,0.88)",
              fontWeight: 400,
              lineHeight: 1.7,
              margin: "0 0 36px 0",
              maxWidth: 460,
            }}>
              Get started for free with the easiest way to share contact
              details, capture leads, and remember everyone you meet.
            </p>

            <div style={{ display:"flex", gap:14, flexWrap:"wrap" }}>
              {/* Primary — dark navy, NOT black */}
              <button className="cta-btn-primary" style={{
                background: "#1e3a8a",
                color: "#ffffff",
                fontSize: 16,
                fontWeight: 700,
                borderRadius: 99,
                padding: "14px 32px",
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
                boxShadow: "0 6px 20px rgba(30,58,138,0.45)",
              }}>
                Get started
              </button>

              {/* Secondary — frosted white */}
              <button className="cta-btn-secondary" style={{
                background: "rgba(255,255,255,0.88)",
                color: "#2563EB",
                fontSize: 16,
                fontWeight: 700,
                borderRadius: 99,
                padding: "14px 32px",
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
              }}>
                For teams
              </button>
            </div>
          </div>

          {/* ── RIGHT: Phone mockup + floating pills ── */}
          <div style={{
            position: "relative",
            zIndex: 2,
            flexShrink: 0,
            width: 360,
            height: 280,
          }} className="hidden md:block">

            {/* ── Phone frame — white/light, NO black ── */}
            <div style={{
              position: "absolute",
              right: 0,
              bottom: -56,
              width: 196,
              background: "#EFF6FF",
              borderRadius: 36,
              border: "7px solid rgba(255,255,255,0.95)",
              overflow: "hidden",
              boxShadow: "0 24px 64px rgba(37,99,235,0.30), 0 0 0 1px rgba(255,255,255,0.6)",
              height: 340,
            }}>
              {/* Status bar */}
              <div style={{ background:"#DBEAFE", padding:"10px 14px 8px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <span style={{ fontSize:9, color:"#2563EB", fontWeight:700 }}>9:41</span>
                <div style={{ width:36, height:10, background:"rgba(37,99,235,0.15)", borderRadius:99 }} />
                <div style={{ display:"flex", gap:3, alignItems:"center" }}>
                  <div style={{ width:12, height:5, background:"#93C5FD", borderRadius:2 }} />
                  <div style={{ width:5, height:5, borderRadius:"50%", background:"#60A5FA" }} />
                </div>
              </div>

              {/* Profile card */}
              <div style={{ background:"#ffffff", margin:"8px 8px 0", borderRadius:16, padding:"18px 14px 16px", display:"flex", flexDirection:"column", alignItems:"center" }}>
                {/* Avatar — gradient circle, no photos */}
                <div style={{
                  width: 68, height: 68, borderRadius: "50%",
                  background: "linear-gradient(135deg, #93C5FD 0%, #3B82F6 50%, #1D4ED8 100%)",
                  border: "3px solid #DBEAFE",
                  marginBottom: 10,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 4px 16px rgba(59,130,246,0.3)",
                }}>
                  {/* Simple person silhouette in white */}
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <circle cx="19" cy="14" r="8" fill="rgba(255,255,255,0.85)"/>
                    <ellipse cx="19" cy="34" rx="14" ry="9" fill="rgba(255,255,255,0.7)"/>
                  </svg>
                </div>

                <div style={{ fontSize:13, fontWeight:800, color:"#111827", marginBottom:3 }}>Margo Smith</div>
                <div style={{ fontSize:11, color:"#6B7280", marginBottom:5 }}>Marketer</div>
                <div style={{ fontSize:9, color:"#9CA3AF", display:"flex", alignItems:"center", gap:3 }}>
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
                  New York · Connecxa
                </div>
              </div>

              {/* Bottom light area */}
              <div style={{ height:120, background:"linear-gradient(180deg, #F0F7FF 0%, #DBEAFE 100%)" }} />
            </div>

            {/* Floating pill: Grow */}
            <div className="pill-float-c" style={{
              position: "absolute", top: 16, right: 16,
              background: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(12px)",
              borderRadius: 99,
              padding: "8px 18px 8px 12px",
              fontSize: 14, fontWeight: 700, color: "#1e3a8a",
              display: "flex", alignItems: "center", gap: 8,
              boxShadow: "0 8px 24px rgba(37,99,235,0.18)",
            }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#3B82F6" }} />
              Grow
            </div>

            {/* Floating pill: Share */}
            <div className="pill-float-a" style={{
              position: "absolute", top: "45%", left: 0,
              background: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(12px)",
              borderRadius: 99,
              padding: "8px 18px 8px 12px",
              fontSize: 14, fontWeight: 700, color: "#065f46",
              display: "flex", alignItems: "center", gap: 8,
              boxShadow: "0 8px 24px rgba(16,185,129,0.18)",
            }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#10B981" }} />
              Share
            </div>

            {/* Floating pill: Connect */}
            <div className="pill-float-b" style={{
              position: "absolute", bottom: 36, right: 12,
              background: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(12px)",
              borderRadius: 99,
              padding: "8px 18px 8px 12px",
              fontSize: 14, fontWeight: 700, color: "#92400e",
              display: "flex", alignItems: "center", gap: 8,
              boxShadow: "0 8px 24px rgba(245,158,11,0.18)",
            }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#F59E0B" }} />
              Connect
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}