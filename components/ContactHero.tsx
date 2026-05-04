"use client";

import React from "react";
import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="w-full flex flex-col items-center py-8 lg:py-16 overflow-x-hidden" style={{ fontFamily: "DM Sans, sans-serif" }}>
      <div className="w-full max-w-[1600px] px-5 md:px-16 lg:px-24">

        {/* Contact Hero Card */}
        <div className="bg-[#FDE68A] bg-gradient-to-br from-[#FDE68A] to-[#FCE066] rounded-[32px] md:rounded-[48px] px-6 py-16 md:py-20 lg:px-20 lg:py-24 text-[#111] relative overflow-hidden flex flex-col lg:flex-row items-center lg:items-stretch shadow-2xl border-[8px] border-white">

          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/5 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4 pointer-events-none" />

          {/* ── Left Column — Content ── */}
          <div className="flex-1 z-10 flex flex-col justify-center w-full lg:max-w-[700px] pb-10 lg:pb-16 text-center lg:text-left items-center lg:items-start lg:ml-[50px] xl:ml-[80px]" style={{ marginLeft: 20 }}>

            <div className="flex flex-col gap-6 md:gap-10 items-center lg:items-start w-full">
              {/* Eyebrow tag */}
              <div className="inline-flex w-fit items-center gap-2 bg-black/5 backdrop-blur-md border border-black/10 rounded-full px-4 py-2 text-[11px] md:text-[12px] font-bold tracking-[0.15em] uppercase text-black/80">
                <span className="w-2 h-2 rounded-full bg-[#D97706] animate-pulse" />
                Smart Contact Management
              </div>

              <div className="space-y-4 md:space-y-6 w-full flex flex-col items-center lg:items-start">
                <h1 className="text-[36px] sm:text-[44px] md:text-[56px] xl:text-[84px] font-black text-[#111] leading-[1.1] md:leading-[1.02] tracking-[-0.04em] px-2 md:px-0">
                  Your Contact Book<br />Just Got Smarter
                </h1>
                <p className="text-[16px] sm:text-[18px] md:text-[21px] text-[#222] leading-[1.6] font-medium max-w-[300px] sm:max-w-[400px] md:max-w-[460px] lg:max-w-[560px] mx-auto lg:mx-0 px-4 md:px-0">
                  Built for modern professionals - fast, organised, and always in sync. A cleaner, clearer way to manage relationships.
                </p>
              </div>

              {/* CTA Button */}
              <div className="mt-6">
                <button
                  style={{
                    background: "#fff",
                    color: "#111827",
                    fontSize: 18,
                    fontWeight: 800,
                    borderRadius: 50,
                    padding: "18px 46px",
                    border: "none",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 12,
                    width: "fit-content",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    transition: "all 0.25s cubic-bezier(0.23, 1, 0.32, 1)",
                    marginBottom: 40,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
                  }}
                >
                  Get Started
                  <span style={{ fontSize: 22 }}>→</span>
                </button>
              </div>
            </div>
          </div>

          {/* ── Right Column — Image ── */}
          <div className="flex-1 relative w-full z-10 flex items-end justify-center lg:justify-end mt-12 lg:mt-0 min-h-[360px] md:min-h-[480px] lg:min-h-0">
            <div className="relative w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[640px] lg:scale-[1.05] origin-bottom transition-transform duration-700 ease-out hover:scale-[1.08]">
              <Image
                src="/contact-book-mockup.png"
                alt="Contact Book Mockup"
                fill
                className="object-contain object-bottom drop-shadow-[0_45px_65px_rgba(0,0,0,0.15)]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
