"use client";

import React, { useRef } from "react";
import Image from "next/image";

const steps = [
  {
    title: "Sign Up",
    description: "Create your free account in seconds. We require no credit card and no app download to get started.",
    image: "/images/signup-ui.png",
  },
  {
    title: "Customize Your Profile",
    description: "Add your headshot, job title, company logo, and social links. Choose from our professional templates to ensure your electronic business card matches your personal brand.",
    image: "/images/profile-customization-ui.png",
  },
  {
    title: "Add to Wallet & Share",
    description: "Once designed, add your card to your Apple Wallet for easy access, or show your QR code to connect instantly.",
    image: "/images/wallet-qr-ui.png",
  },
];

export default function HowToCreateCard() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full pt-16 pb-20 flex flex-col items-center z-10 relative">
      <div className="w-full max-w-[1280px] px-6 sm:px-10 lg:px-16 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16 max-w-[900px]">
          <h2 className="text-[34px] md:text-[46px] font-[900] text-[#111827] leading-[1.1] mb-6 tracking-tight">
            How to create a free digital business card online.
          </h2>
          <p className="text-[17px] md:text-[19px] text-[#4B5563] max-w-[750px] mx-auto font-medium leading-relaxed opacity-90">
            Build your professional profile directly in your browser in minutes. No app download or credit card required.
          </p>
        </div>

        {/* Steps Slider/Grid */}
        <div className="relative w-full group">
          {/* Mobile Navigation Arrows */}
          <button 
            onClick={() => scroll("left")}
            className="absolute -left-3 top-[40%] -translate-y-1/2 z-30 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.12)] border border-gray-200/60 flex items-center justify-center text-gray-600 hover:text-[#005AD1] hover:scale-105 hover:bg-white transition-all duration-300 md:hidden"
            aria-label="Previous step"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button 
            onClick={() => scroll("right")}
            className="absolute -right-3 top-[40%] -translate-y-1/2 z-30 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.12)] border border-gray-200/60 flex items-center justify-center text-gray-600 hover:text-[#005AD1] hover:scale-105 hover:bg-white transition-all duration-300 md:hidden"
            aria-label="Next step"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Container */}
          <div 
            ref={scrollRef}
            className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-x-visible pb-8 md:pb-0 scrollbar-hide snap-x snap-mandatory"
          >
            {steps.map((step, idx) => (
              <div 
                key={idx}
                className="min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center bg-white rounded-[32px] p-6 md:p-8 flex flex-col h-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)] transition-all duration-500 border border-gray-100 group/card"
              >
                {/* Image Container at Top */}
                <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden mb-8 bg-[#F8FAFC] border border-gray-50 flex items-center justify-center">
                   <Image 
                      src={step.image} 
                      alt={step.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover/card:scale-105" 
                      sizes="(max-width: 768px) 100vw, 33vw"
                   />
                </div>

                {/* Text Below */}
                <div className="mt-auto text-center flex flex-col items-center">
                   <h3 className="text-[20px] md:text-[22px] font-extrabold text-[#111827] mb-3 leading-snug tracking-tight">
                     {step.title}
                   </h3>
                   <p className="text-[15px] text-[#5b5472] leading-[1.6] font-medium opacity-90">
                     {step.description}
                   </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
