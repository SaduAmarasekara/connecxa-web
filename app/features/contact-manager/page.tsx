"use client";

import React from 'react';
import ContactHero from "@/components/ContactHero";
import SmarterConnect from "@/components/SmarterConnect";
import SecuritySection from "@/components/SecuritySection";
import FAQ from "@/components/FAQ";
import { ContactContextSection, NetworkingFeatures } from "@/components/ContactAddons";
import FeatureGrid from '@/components/FeatureGrid';

export default function ContactManager() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
       <div className="w-full h-10 lg:h-12 bg-white" />
      <ContactHero />

      <div className="w-full">
        <div className="w-full h-24 lg:h-32 bg-white" />
        
        {/* Context Rich Interaction Section */}
        <ContactContextSection />
        
        <div className="w-full h-24 lg:h-32 bg-white" />
        
        {/* Better Networking Features Section */}
        <NetworkingFeatures />
        
        <div className="w-full h-24 lg:h-32 bg-white" />

      
       
        <FAQ />
        <div className="w-full h-24 lg:h-32 bg-white" />
          <FeatureGrid />

        <div className="w-full h-24 lg:h-32 bg-white" />
      </div>
    </main>
  );
}
