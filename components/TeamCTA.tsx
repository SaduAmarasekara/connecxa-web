"use client";

import React from "react";

export default function TeamCTA() {
  return (
    <section className="w-full flex justify-center py-20 md:py-24 bg-white">
      <div className="w-full max-w-[1600px] px-6">
        <div className="relative flex flex-col items-center justify-center bg-[#111111] rounded-[15px] md:rounded-[20px] py-24 md:py-64 px-6 md:px-8 text-center overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.3)]">

          {/* Subtle bg art */}
          <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <h2 className="relative z-10 text-[36px] md:text-[52px] lg:text-[64px] font-[900] text-white leading-tight mb-10 tracking-tight">
            Ready to level up your networking?
          </h2>

          <button
            style={{
              marginTop: 25,
              background: "#fff",
              color: "#111827",
              fontSize: 18,
              fontWeight: 800,
              borderRadius: 50,
              padding: "16px 36px",
              border: "none",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              width: "fit-content",
              boxShadow: "0 8px 28px rgba(0,0,0,0.18)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 14px 36px rgba(0,0,0,0.22)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.18)";
            }}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
