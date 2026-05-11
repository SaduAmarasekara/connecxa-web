"use client";

import CorporateGiftingHero from "@/components/CorporateGiftingHero";
import CorporateGiftOptions from "@/components/CorporateGiftOptions";
import OccasionsSection from "@/components/OccasionsSection";
import FAQ from "@/components/FAQ";
import FeatureContactForm from "@/components/FeatureContactForm";


export default function CorporateGiftingPage() {
  return (
    <main
      className="w-full relative flex flex-col items-center overflow-hidden"
      style={{
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
        background: "linear-gradient(160deg, #faf8ff 0%, #ede8f7 40%, #d8c4e0 100%)",
      }}
    >
      {/* ── Ambient Background Glows ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-5%",
          left: "-8%",
          width: "55%",
          height: "60%",
          background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "5%",
          right: "-10%",
          width: "50%",
          height: "55%",
          background: "radial-gradient(circle, rgba(167,100,255,0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: "30%",
          left: "40%",
          width: "35%",
          height: "40%",
          background: "radial-gradient(circle, rgba(196,160,255,0.06) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      <CorporateGiftingHero />
      <div className="w-full">
        <div className="w-full h-24 lg:h-32 bg-white" />
        <CorporateGiftOptions />
        <div className="w-full h-24 lg:h-32 bg-white" />
        <OccasionsSection />
        <div className="w-full h-24 lg:h-32 bg-white" />
        <FAQ  />
        <div className="w-full h-24 lg:h-32 bg-white" />
         <FeatureContactForm />
      </div>

    </main>
  );
}
