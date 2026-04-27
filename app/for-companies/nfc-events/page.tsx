"use client";

import React from "react";
import NFCEventHero from "@/components/NFCEventHero";
import OccasionsSection from "@/components/OccasionsSection";
import FAQ from "@/components/FAQ";

export default function NFCEventsPage() {
  return (
    <div className="min-h-screen bg-white">
      <NFCEventHero />
      
      <div className="w-full h-24 lg:h-32 bg-white" />
      
      <OccasionsSection />
      
      <div className="w-full h-24 lg:h-32 bg-white" />
      
      <div className="py-20">
        <FAQ />
      </div>
      
      <div className="w-full h-24 lg:h-32 bg-white" />
    </div>
  );
}
