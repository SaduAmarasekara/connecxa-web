"use client";

import React, { useRef } from "react";
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
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full flex flex-col items-center py-16 md:py-24 bg-white relative z-10" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div className="w-full max-w-[1200px] px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[32px] md:text-[48px] font-[800] text-[#1A1A1A] leading-tight mb-3 md:mb-4">
            Corporate Gift Options
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#666] max-w-[1200px] mx-auto px-2 md:px-0">
            Explore a range of NFC gifts tailored for every occasion - from ready-made sets to customized options.
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
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => scroll("right")}
            className="absolute -right-3 top-[40%] -translate-y-1/2 z-30 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.12)] border border-gray-200/60 flex items-center justify-center text-gray-600 hover:text-[#005AD1] hover:scale-105 hover:bg-white transition-all duration-300 md:hidden"
            aria-label="Next step"
          >
            <ChevronRight size={24} />
          </button>

          {/* Container */}
          <div 
            ref={scrollRef}
            className="flex md:grid md:grid-cols-2 gap-6 md:gap-x-12 md:gap-y-10 lg:gap-y-16 overflow-x-auto md:overflow-x-visible pb-8 md:pb-0 scrollbar-hide snap-x snap-mandatory"
          >
            {giftOptions.map((option, index) => (
              <div 
                key={index}
                className="group flex flex-col items-start text-left min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center bg-white rounded-[32px] md:rounded-none md:bg-transparent"
              >
                <div className="relative aspect-[16/10] w-full rounded-[24px] md:rounded-[32px] overflow-hidden bg-[#F5F5F5] mb-6 shadow-lg md:shadow-[0_12px_32px_rgba(0,0,0,0.03)] border border-gray-100 md:border-none">
                  <Image
                    src={option.image}
                    alt={option.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-[24px] md:text-[26px] font-[800] text-[#1A1A1A] mb-3 px-2 md:px-0">
                  {option.title}
                </h3>
                <p className="text-[15px] md:text-[16px] text-[#666] leading-[1.6] max-w-[500px] px-2 md:px-0">
                  {option.description}
                </p>
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
