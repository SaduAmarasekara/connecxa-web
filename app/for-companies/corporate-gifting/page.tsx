"use client";

import CorporateBranding from "@/components/CorporateBranding";
import PurchaseSteps from "@/components/PurchaseSteps";
import FAQ from "@/components/FAQ";
import CorporateCTA from "@/components/CorporateCTA";

export default function CorporateGiftingPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-20">
        <CorporateBranding />
      </div>
      <PurchaseSteps />
      <div className="py-20">
        <CorporateCTA />
      </div>
      <FAQ />
    </div>
  );
}
