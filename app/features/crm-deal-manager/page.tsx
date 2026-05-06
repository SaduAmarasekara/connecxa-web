"use client";

import React from 'react';
import CRMHero from "@/components/CRMHero";
import CRMShowcase from "@/components/CRMShowcase";
import SecuritySection from "@/components/SecuritySection";
import FAQ from "@/components/FAQ";
import FeatureGrid from '@/components/FeatureGrid';

export default function CRMDealManager() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
    
      <CRMHero />

      <div className="w-full">
        <div className="w-full h-24 lg:h-32 bg-white" />
        
        {/* Features Showcase Section */}
        <CRMShowcase />
        
        <div className="w-full h-24 lg:h-32 bg-white" />
        
        <SecuritySection />
        <div className="w-full h-24 lg:h-32 bg-white" />
        <FAQ />
        <div className="w-full h-24 lg:h-32 bg-white" />
        <FeatureGrid />
        <div className="w-full h-24 lg:h-32 bg-white" />
      </div>
    </main>
  );
}
