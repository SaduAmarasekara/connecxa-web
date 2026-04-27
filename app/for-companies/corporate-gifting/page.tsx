"use client";

import CorporateGiftingHero from "@/components/CorporateGiftingHero";
import CorporateGiftOptions from "@/components/CorporateGiftOptions";
import OccasionsSection from "@/components/OccasionsSection";
import FAQ from "@/components/FAQ";


export default function CorporateGiftingPage() {
  return (
    <div className="min-h-screen bg-white">
      <CorporateGiftingHero />
        <div className="w-full h-24 lg:h-32 bg-white" />
      <CorporateGiftOptions />
       <div className="w-full h-24 lg:h-32 bg-white" />
      <OccasionsSection />
    <div className="w-full h-24 lg:h-32 bg-white" />
      <FAQ dark />
      <div className="w-full h-24 lg:h-32 bg-white" />
    </div>
  );
}
