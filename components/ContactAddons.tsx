"use client";

import React from "react";
import Image from "next/image";

export function ContactContextSection() {
  return (
    <section className="w-[calc(100%-40px)] py-12 md:py-24 bg-white" style={{ fontFamily: "'DM Sans', sans-serif" ,marginLeft: 20 }}>
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

          {/* Left Mockup */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-[4/3] bg-[#FEF9C3] rounded-[32px] md:rounded-[48px] overflow-hidden shadow-sm flex items-center justify-center p-6 md:p-12 group">
              <div className="relative w-full h-full bg-white rounded-[20px] md:rounded-[32px] shadow-2xl overflow-hidden">
                <Image
                  src="/contact-context-mockup.png"
                  alt="Interaction Context Mockup"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-[32px] sm:text-[38px] md:text-[44px] lg:text-[54px] font-black text-[#111] leading-[1.2] md:leading-[1.1] mb-6 md:mb-8">
              Make Every Interaction Context-Rich
            </h2>
            <p className="text-[16px] md:text-[19px] text-gray-500 font-medium leading-relaxed mb-8 md:mb-10 max-w-xl">
              Capture key moments, meeting notes, and activity logs all in one place, synced across your contact and deal records.
            </p>
            
            <ul className="space-y-4 md:space-y-6 w-full max-w-md mx-auto lg:mx-0">
              <li className="flex items-center justify-center lg:justify-start gap-4">
                <div className="w-6 h-6 rounded-md bg-blue-50 flex items-center justify-center shrink-0">
                  <div className="w-3 h-0.5 bg-[#005AD1] rounded-full" />
                </div>
                <span className="text-[16px] md:text-[17px] font-bold text-gray-800">Automated activity logs</span>
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-4">
                <div className="w-6 h-6 rounded-md bg-blue-50 flex items-center justify-center shrink-0">
                  <div className="w-3 h-0.5 bg-[#005AD1] rounded-full" />
                </div>
                <span className="text-[16px] md:text-[17px] font-bold text-gray-800">Built-in notes with timestamps</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export function NetworkingFeatures() {
  const features = [
    {
      title: "OCR Scanner",
      desc: "Instantly capture paper name card details using your phone's camera.",
      bg: "#FEF3C7",
      icon: (
        <svg className="w-6 h-6 text-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 9V7a2 2 0 0 1 2-2h2"/><path d="M18 5h2a2 2 0 0 1 2 2v2"/><path d="M2 15v2a2 2 0 0 0 2 2h2"/><path d="M18 19h2a2 2 0 0 0 2-2v2"/><rect x="7" y="7" width="10" height="10" rx="2"/>
        </svg>
      )
    },
    {
      title: "Quick Sharing",
      desc: "Instantly call, email, share, or download VCF directly from the contact manager.",
      bg: "#F3E8FF",
      icon: (
        <svg className="w-6 h-6 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/>
        </svg>
      )
    },
    {
      title: "Sync to CRM",
      desc: "Manage and link new deals seamlessly when contacts convert into prospects.",
      bg: "#DCFCE7",
      icon: (
        <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/>
        </svg>
      )
    },
    {
      title: "Multi-Device",
      desc: "Easily manage contacts on the go, whether you're using mobile or desktop.",
      bg: "#DBEAFE",
      icon: (
        <svg className="w-6 h-6 text-[#005AD1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      )
    }
  ];

  return (
    <section className="w-[calc(100%-20px)] py-16 md:py-24 bg-white" style={{ fontFamily: "'DM Sans', sans-serif", marginLeft: 20 }}>
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[32px] sm:text-[38px] md:text-[44px] lg:text-[56px] font-black text-[#111] leading-tight mb-4 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-4">
            <span>Better Networking Starts Here</span>
            <span className="inline-block text-[32px] sm:text-[38px] lg:text-[40px] mt-2 md:mt-0">🤝</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-[#F8FAFC] p-6 sm:p-8 md:p-10 rounded-[24px] md:rounded-[32px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
              <div 
                className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 transition-transform duration-300 group-hover:scale-110"
                style={{ background: f.bg }}
              >
                {f.icon}
              </div>
              <h3 className="text-[20px] md:text-[22px] font-black text-[#111] mb-3 md:mb-4">{f.title}</h3>
              <p className="text-[15px] md:text-[16px] text-gray-500 font-medium leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
