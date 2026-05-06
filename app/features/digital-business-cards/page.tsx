"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import SmarterConnect from "@/components/SmarterConnect";
import ProfilesShowcase from "@/components/ProfilesShowcase";
import FeatureGrid from "@/components/FeatureGrid";
import SecuritySection from "@/components/SecuritySection";
import ProductShowcase from "@/components/ProductShowcase";
import FAQ from '@/components/FAQ';

export default function DigitalBusinessCards() {
  return (
    <main className="w-full flex flex-col items-center py-8 lg:py-16 overflow-x-hidden" style={{ fontFamily: "DM Sans, sans-serif" }}>
      <div className="w-full max-w-[1600px] px-5 md:px-16 lg:px-24">
   <div className="w-full h-8 lg:h-8 bg-white" />
        {/* Lavender Hero Card */}
        <div
          className="relative flex flex-col lg:flex-row items-center lg:items-center overflow-hidden bg-white text-[#111827] rounded-[32px] md:rounded-[48px] w-full shadow-2xl"
          style={{
            minHeight: "auto",
            paddingTop: "clamp(25px,4vw,60px)",
            paddingLeft: "clamp(20px,5vw,80px)",
            paddingRight: "clamp(20px,5vw,80px)",
            background: "linear-gradient(180deg, #FFFFFF 0%, #D8C4E0 100%)",
          }}
        >

          {/* Background effects */}
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#D8C4E0]/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#D8C4E0]/5 rounded-full blur-[120px] pointer-events-none" />

          {/* ── Left Column ── */}
          <div className="z-10 flex flex-col justify-center items-center lg:items-start text-center lg:text-left w-full lg:w-[clamp(320px,42%,580px)] shrink-0 pb-12 lg:pb-20 lg:pr-0">

            <div className="flex flex-col gap-6 md:gap-10 items-center lg:items-start w-full">
              {/* Eyebrow tag */}
              <div className="inline-flex items-center gap-2 bg-white border border-[#D8C4E0]/30 rounded-full px-5 py-2 text-[13px] font-bold tracking-[0.12em] uppercase text-[#7C3AED] mb-6 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7C3AED] animate-pulse" />
                DIGITAL BUSINESS CARD
              </div>

              <div className="space-y-4 md:space-y-6 w-full flex flex-col items-center lg:items-start">
                <h1
                  style={{
                    fontSize: "clamp(22px,3.5vw,60px)",
                    fontWeight: 900,
                    lineHeight: 1.15,
                    letterSpacing: "0.01em",
                    color: "#111827",
                    marginBottom: 24,
                  }}
                >
                  Ditch the Paper.
                  <br className="hidden lg:block" />
                  Go Fully Digital.
                </h1>
                <p
                  style={{
                    fontSize: "clamp(15px,1.4vw,20px)",
                    color: "#4B5563",
                    lineHeight: 1.65,
                    fontWeight: 500,
                    maxWidth: 460,
                    marginBottom: 20,
                  }}
                >
                  Make every impression count with a sleek, modern digital business card - no apps, no limits, just your brand at its best.
                </p>
              </div>

              {/* CTA Button */}
              <div className="mt-2">
                <Link href="/login" className="no-underline">
                  <button
                    style={{
                      background: "#7C3AED",
                      color: "#fff",
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
                      boxShadow: "0 8px 28px rgba(124,58,237,0.25)",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 14px 36px rgba(124,58,237,0.35)";
                      e.currentTarget.style.background = "#6D28D9";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 28px rgba(124,58,237,0.25)";
                      e.currentTarget.style.background = "#7C3AED";
                    }}
                  >
                    Get Started <span style={{ fontSize: 20 }}>→</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* ── Right Column — Image ── */}
          <div className="flex-1 relative w-full z-10 flex items-center justify-center lg:justify-end mt-12 lg:mt-0 min-h-[360px] md:min-h-[480px] lg:min-h-0">
            <div className="relative w-full h-full min-h-[300px] md:min-h-[400px] lg:min-h-[580px] lg:scale-[0.8] origin-center transition-transform duration-700 ease-out hover:scale-[0.82]">
              <Image
                src="/digital_card_lavender_mockup_1777364739572.png"
                alt="Digital Business Card Mockup"
                fill
                className="object-contain object-center drop-shadow-[0_45px_65px_rgba(0,0,0,0.2)]"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Page Sections */}
      <div className="w-full">
        <div className="w-full h-24 lg:h-32 bg-white" />
        <ProfilesShowcase />
        <div className="w-full h-24 lg:h-32 bg-white" />

        {/* Product Showcase Section */}
        <ProductShowcase />

        <div className="w-full h-24 lg:h-32 bg-white" />
        <SmarterConnect />
        <div className="w-full h-24 lg:h-32 bg-white" />

        {/* Explore More Powerful Tools Section */}
        <FeatureGrid />

        <div className="w-full h-24 lg:h-32 bg-white" />

        {/* Security Section */}
        <SecuritySection />

        <div className="w-full h-24 lg:h-32 bg-white" />
        <FAQ />
        <div className="w-full h-24 lg:h-32 bg-white" />
      </div>
    </main>
  );
}
