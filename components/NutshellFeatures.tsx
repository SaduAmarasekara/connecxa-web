import React from 'react';
import Image from 'next/image';

const features = [
  {
    title: "One-Tap to Share",
    desc: "Tap any NFC smartphone to share instantly — no apps, no friction.",
    image: "/feature-nfc-tap.png"
  },
  {
    title: "Custom Profile Templates",
    desc: "Fully customise your digital presence to match your personal brand.",
    image: "/feature-profile.png"
  },
  {
    title: "Direct Lead Generation",
    desc: "Capture leads in real-time. Turn every handshake into an opportunity.",
    image: "/feature-leads.png"
  },
  {
    title: "Live Profile Analytics",
    desc: "Track your impact with real-time insights and engagement data.",
    image: "/feature-analytics.png"
  }
];

export default function NutshellFeatures() {
  return (
    <section className="w-full bg-[#FAFAFA] py-16 md:py-28 max-lg:!ml-0" style={{ fontFamily: "'DM Sans', sans-serif", marginLeft: "20px" }}>
      <div className="max-w-[1600px] mx-auto px-5 md:px-16 lg:px-24">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20 space-y-4 flex flex-col items-center">
          <div className="inline-block px-4 py-1.5 bg-blue-50/80 border border-blue-100 rounded-full text-blue-600 text-[12px] md:text-sm font-bold tracking-[0.1em] uppercase mb-2 shadow-sm">
            Powerful Features
          </div>
          <h2 className="text-[36px] md:text-[56px] lg:text-[64px] font-[900] text-[#111827] tracking-tight leading-[1.05]">
            Better networking, <br className="hidden md:block" /> 
            <span className="text-[#005AD1]">in a nutshell.</span>
          </h2>
          <p className="text-gray-500 text-[16px] md:text-[20px] font-medium max-w-2xl mx-auto leading-relaxed pt-2 px-4">
            The smarter way to connect. Designed for professionals who value efficiency, branding, and results.
          </p>
        </div>

        {/* 2x2 Premium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="group relative rounded-[24px] md:rounded-[32px] overflow-hidden h-[280px] md:h-[360px] shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] cursor-pointer"
            >
              <Image 
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                priority={idx < 2}
              />
              <div className="absolute inset-0 bg-[#0A192F]/40 group-hover:bg-[#0A192F]/60 transition-colors duration-500" />
              
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-center items-center text-center z-10">
                <h3 className="text-white text-[22px] md:text-[28px] lg:text-[32px] font-[800] mb-3 leading-tight tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-white/90 text-[15px] md:text-[18px] font-medium leading-relaxed max-w-[95%]">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}


