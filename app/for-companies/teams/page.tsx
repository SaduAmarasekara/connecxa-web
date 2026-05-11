"use client";

import TeamHero from "@/components/TeamHero";
import TeamFeatureSections from "@/components/TeamFeatureSections";
import TeamTools from "@/components/TeamTools";
import TeamCTA from "@/components/TeamCTA";
import FAQ from "@/components/FAQ";
import SecuritySection from "@/components/SecuritySection";
import TeamManagement from "@/components/TeamManagement";

export default function TeamsPage() {
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

      <TeamHero />
      <div className="w-full">
        <TeamManagement />
        <div className="w-full h-16 lg:h-24 bg-white" />
        <TeamFeatureSections />
        <div className="w-full h-16 lg:h-24 bg-white" />
        <TeamCTA />
        <div className="w-full h-16 lg:h-24 bg-white" />
        <TeamTools />
        <div className="w-full h-16 lg:h-24 bg-white" />
        <FAQ  />
        <div className="w-full h-16 lg:h-24 bg-white" />
        <SecuritySection />
        <div className="w-full h-24 lg:h-32 bg-white" />
      </div>
    </main>
  );
}
