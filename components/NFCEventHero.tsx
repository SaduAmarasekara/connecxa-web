"use client";

import React from "react";
import Image from "next/image";

export default function NFCEventHero() {
  return (
    <section className="w-full flex justify-center py-6 md:py-12 bg-white" style={{ fontFamily: "'DM Sans', sans-serif"}}>
      <div className="w-full max-w-[1600px] px-6">
        <div className="relative flex flex-col lg:flex-row items-stretch bg-[#6036A4] rounded-[48px] min-h-[600px] md:min-h-[700px] overflow-hidden shadow-[0_32px_80px_rgba(96,54,164,0.25)] border-[8px] border-white">
          
          {/* Subtle bg art */}
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Content */}
          <div className="relative z-10 flex-1 lg:flex-[0_0_55%] flex flex-col justify-center p-12 md:p-14 lg:pl-[clamp(60px,8vw,120px)] lg:pr-[40px] lg:py-[80px]" style={{ marginLeft: 40 }}>
            <div className="text-[14px] font-bold tracking-[0.2em] text-white uppercase mb-8 opacity-90">
              LIVE NFC CARD PRINTING
            </div>
            <h1 className="text-[52px] md:text-[68px] lg:text-[84px] font-[900] text-white leading-[1.02] mb-8">
              Live-Printed, <br /> Right at Your Event
            </h1>
            <p className="text-[20px] text-white/80 leading-[1.6] mb-12 max-w-[540px] font-medium">
              Engage your audience and spark conversations with live-printed NFC cards, customised on the spot and ready in seconds.
            </p>

            <button
              style={{
                background: "#fff",
                color: "#1A1A1A",
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
                boxShadow: "0 8px 28px rgba(0,0,0,0.15)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 14px 36px rgba(0,0,0,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.15)";
              }}
            >
              Get in Touch
              <span style={{ fontSize: 20, marginLeft: 8 }}>→</span>
            </button>
          </div>

          {/* Right Composite Image */}
          <div className="relative z-10 flex-1 flex items-center justify-center p-8 lg:p-12 lg:pl-0">
            <div className="relative w-full aspect-[4/3] max-w-[700px] group">
              <Image
                src="/nfc-event-hero-composite.png"
                alt="NFC Event Live Printing"
                fill
                className="object-contain transition-transform duration-700 group-hover:scale-105"
                priority
              />
              
              {/* Optional: Add some floating CSS icons/blobs if the image isn't perfect */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#FF5C00] rounded-full blur-2xl opacity-40 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#005AD1] rounded-full blur-3xl opacity-30 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
