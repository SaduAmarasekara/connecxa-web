"use client";

import React from 'react';
import Image from "next/image";
import SmarterConnect from "@/components/SmarterConnect";
import ProfilesShowcase from "@/components/ProfilesShowcase";
import FeatureGrid from "@/components/FeatureGrid";
import SecuritySection from "@/components/SecuritySection";
import ProductShowcase from "@/components/ProductShowcase";
import FAQ from '@/components/FAQ';

export default function DigitalBusinessCards() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center py-6 md:py-12" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      
      {/* Hero Section Container */}
      <div className="w-full max-w-[1600px] px-6">
        {/* ── Hero ── */}
        <div className="relative flex flex-col lg:flex-row items-stretch bg-[#005AD1] rounded-[48px] min-h-[700px] overflow-hidden border-[8px] border-white">
          
          {/* Left Content */}
          <div className="relative z-10 flex-1 lg:flex-[0_0_50%] flex flex-col justify-center p-12 md:p-14 lg:pl-[80px] lg:pr-[40px] lg:py-[80px] mt-48 text-white" style={{ margin: "0 60px" }}>
            <div className="text-[13px] font-bold tracking-[0.12em] text-white/80 uppercase mb-8">
              NFC BUSINESS CARDS
            </div>
            <h1 className="text-[52px] md:text-[68px] lg:text-[84px] font-black text-white leading-[1.02] mb-8">
              Your Smartest<br />Business Card Yet
            </h1>
            <p className="text-[20px] text-white/90 leading-[1.6] mb-12 max-w-[520px] font-medium">
              Modernise your networking with a single tap - share socials, links, and contacts instantly.
            </p>
            
            <button className="flex items-center gap-[15px] bg-white text-[#111] text-[20px] font-black rounded-[50px] px-10 py-5 shadow-[0_16px_48px_rgba(0,0,0,0.12)] hover:shadow-[0_24px_56px_rgba(0,0,0,0.18)] hover:-translate-y-1 transition-all w-fit cursor-pointer outline-none border-none">
              Customise Now
              <span className="text-[24px] leading-none">→</span>
            </button>
          </div>

          {/* Right Mockup */}
          <div className="relative z-10 flex-1 flex items-center justify-center p-8 lg:p-12">
            <div className="relative w-full aspect-[4/3] max-w-[650px] rounded-[32px] overflow-hidden group">
              <Image
                src="/digital-card-mockup.png"
                alt="Digital Business Card Mockup"
                fill
                className="object-contain object-center transition-transform duration-700 group-hover:scale-105 drop-shadow-[0_40px_80px_rgba(0,0,0,0.3)]"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Page Sections */}
      <div className="w-full">
        <div className="w-full h-24 lg:h-32 bg-white" />
        <ProfilesShowcase />
        <div className="w-full h-24 lg:h-32 bg-white" />
        
        {/* Product Showcase Section */}
        <ProductShowcase />
        
        <div className="w-full h-24 lg:h-32 bg-white" />
        <SmarterConnect />
        <div className="w-full h-24 lg:h-32 bg-white" />
        
        {/* Explore More Powerful Tools Section */}
        <FeatureGrid />
        
        <div className="w-full h-24 lg:h-32 bg-white" />

        {/* Security Section */}
        <SecuritySection />

        <div className="w-full h-24 lg:h-32 bg-white" />
        <FAQ />
        <div className="w-full h-24 lg:h-32 bg-white" />
      </div>
    </main>
  );
}
