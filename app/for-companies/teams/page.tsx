"use client";

import TeamHero from "@/components/TeamHero";
import TeamFeatureSections from "@/components/TeamFeatureSections";
import TeamTools from "@/components/TeamTools";
import TeamCTA from "@/components/TeamCTA";
import FAQ from "@/components/FAQ";
import SecuritySection from "@/components/SecuritySection";

export default function TeamsPage() {
  return (
    <div>
      <TeamHero />
      <div className="w-full h-24 lg:h-32 bg-white" />
      <TeamFeatureSections />
      <div className="w-full h-24 lg:h-32 bg-white" />
      <TeamCTA />
      <div className="w-full h-24 lg:h-32 bg-white" />
      <TeamTools />
      <div className="w-full h-24 lg:h-32 bg-white" />

      <FAQ dark />
      <div className="w-full h-24 lg:h-32 bg-white" />
      <SecuritySection />
      <div className="w-full h-24 lg:h-32 bg-white" />
    </div>
  );
}
