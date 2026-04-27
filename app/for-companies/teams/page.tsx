"use client";

import TeamHero from "@/components/TeamHero";
import NutshellFeatures from "@/components/NutshellFeatures";
import CRMHero from "@/components/CRMHero";
import FAQ from "@/components/FAQ";

export default function TeamsPage() {
  return (
    <div className="min-h-screen bg-white">
      <TeamHero />
      <div className="py-20">
        <NutshellFeatures />
      </div>
      <CRMHero />
      <div className="py-20">
        <FAQ />
      </div>
    </div>
  );
}
