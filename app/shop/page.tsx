"use client";

import Link from "next/link";
import Image from "next/image";
import CardShowcase from "@/components/CardShowcase";
import NutshellFeatures from "@/components/NutshellFeatures";
import FAQ from "@/components/FAQ";
import PurchaseSteps from "@/components/PurchaseSteps";
import CorporateBranding from "@/components/CorporateBranding";

export default function ShopPage() {
  return (
    <div
      className="min-h-screen flex flex-col bg-white overflow-hidden"
      style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}
    >
      {/* ── Hero Section ── */}
      <main className="w-full relative flex flex-col items-center pt-10 pb-12 lg:pt-16 lg:pb-0 overflow-hidden" style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #D2E4FC 100%)",
      }}>
        {/* Subtle background glow effects */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#005AD1]/3 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#005AD1]/3 rounded-full blur-[120px] pointer-events-none" />

        <div className="w-full max-w-[1200px] px-6 flex flex-col items-center text-center z-10">
          {/* Eyebrow tag */}
          <div className="inline-flex items-center gap-2 bg-white border border-[#005AD1]/10 rounded-full px-5 py-2.5 text-[13px] font-bold tracking-[0.15em] uppercase text-[#005AD1] mb-8 shadow-sm" >
            <span className="w-2.5 h-2.5 rounded-full bg-[#005AD1] animate-pulse" />
            NFC Business Cards
          </div>

          <h1 className="text-[42px] md:text-[64px] lg:text-[80px] font-black leading-[1.05] tracking-[-0.04em] text-[#111827] mb-8">
            Your Smartest <br className="hidden md:block" />
            <span className="text-[#005AD1]">Business Card Yet.</span>
          </h1>

          <p className="text-[18px] md:text-[21px] text-[#4B5563] leading-[1.6] font-medium max-w-[800px] mb-12">
            Modernise your networking with a single tap - share socials, links, and contacts instantly. Stand out with premium NFC technology.
          </p>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-center gap-5 mb-16">
            <Link href="/shop/products" className="no-underline">
              <button
                style={{
                  background: "#005AD1",
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
                  boxShadow: "0 8px 28px rgba(0,90,209,0.25)",
                  transition: "all 0.2s",
                  marginBottom: "20px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 14px 36px rgba(0,90,209,0.35)";
                  e.currentTarget.style.background = "#0047AB";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,90,209,0.25)";
                  e.currentTarget.style.background = "#005AD1";
                }}
              >
                Customise Now <span style={{ fontSize: 20 }}>→</span>
              </button>
            </Link>
          </div>

          {/* Centered Mockup */}
          <div className="relative w-full max-w-[850px] aspect-[16/11] flex justify-center items-end mt-20">
            <div className="relative w-full h-full">
              <Image
                src="/images/shophero.png"
                alt="Connecxa Premium NFC Card Shop"
                fill
                className="object-contain object-bottom drop-shadow-[0_40px_70px_rgba(0,0,0,0.1)]"
                priority
              />
            </div>
          </div>
        </div>
      </main>

      <div className="w-full h-16 lg:h-24 bg-white" />
      <NutshellFeatures />
      <div className="w-full h-16 lg:h-24 bg-white" />
      <CardShowcase />
      <div className="w-full h-16 lg:h-24 bg-white" />
      <PurchaseSteps />
      <div className="w-full h-16 lg:h-24 bg-white" />
      <CorporateBranding />
      <div className="w-full h-16 lg:h-24 bg-white" />
      <FAQ />
      <div className="w-full h-16 lg:h-24 bg-white" />
    </div>
  );
}