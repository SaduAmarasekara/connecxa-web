"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const giftOptions = [
  {
    title: "Ready-Made Corporate Gifts",
    description: "Make event gifting easy with connecxa's pre-packed, ready-to-go NFC products that save your time and effort.",
    image: "/ready-made-gifts.png",
  },
  {
    title: "Customised Corporate Gifts",
    description: "Elevate your event with bespoke NFC gifts and customised packaging that showcase your brand at every detail.",
    image: "/customised-gifts.png",
  },
  {
    title: "Sustainable Corporate Gifts",
    description: "Leave a lasting impression with eco-friendly corporate gifts that reflect both practicality and sustainability.",
    image: "/sustainable-gifts.png",
  },
  {
    title: "Premium Corporate Gifts",
    description: "Stand out from the crowd with premium corporate gifts designed to impress and stand apart.",
    image: "/premium-gifts.png",
  },
];

export default function CorporateGiftOptions() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % giftOptions.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + giftOptions.length) % giftOptions.length);

  return (
    <section className="w-full flex flex-col items-center py-16 md:py-24 bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div className="w-full max-w-[1200px] px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[32px] md:text-[48px] font-[800] text-[#1A1A1A] leading-tight mb-3 md:mb-4">
            Corporate Gift Options
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#666] max-w-[1200px] mx-auto px-2 md:px-0">
            Explore a range of NFC gifts tailored for every occasion - from ready-made sets to customized options.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-2 gap-x-12 gap-y-10 md:gap-y-16">
          {giftOptions.map((option, index) => (
            <div key={index} className="group flex flex-col items-start text-left">
              <div className="relative aspect-[16/10] w-full rounded-[32px] overflow-hidden bg-[#F5F5F5] mb-6 shadow-[0_12px_32px_rgba(0,0,0,0.03)]">
                <Image
                  src={option.image}
                  alt={option.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-[26px] font-[800] text-[#1A1A1A] mb-3">
                {option.title}
              </h3>
              <p className="text-[16px] text-[#666] leading-[1.6] max-w-[500px]">
                {option.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile View Slider */}
        <div className="md:hidden w-full relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {giftOptions.map((option, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2">
                <div className="flex flex-col items-center text-center">
                  <div className="relative aspect-[16/10] w-full rounded-[24px] overflow-hidden bg-[#F5F5F5] mb-6 shadow-lg border border-gray-100">
                    <Image
                      src={option.image}
                      alt={option.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-[24px] font-[800] text-[#1A1A1A] mb-2">
                    {option.title}
                  </h3>
                  <p className="text-[15px] text-[#666] leading-[1.6]">
                    {option.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-10">
            <button 
              onClick={prevSlide}
              className="w-11 h-11 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-[#005AD1] active:scale-95 transition-all"
            >
              <ChevronLeft size={22} />
            </button>
            <div className="flex gap-2">
              {giftOptions.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === i ? 'w-6 bg-[#005AD1]' : 'w-1.5 bg-gray-200'}`}
                />
              ))}
            </div>
            <button 
              onClick={nextSlide}
              className="w-11 h-11 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-[#005AD1] active:scale-95 transition-all"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
