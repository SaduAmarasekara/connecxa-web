"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const occasions = [
  {
    title: "Exhibition Events",
    description: "Stand out on the show floor and draw crowds straight to your booth",
    image: "/exhibition-events.png",
  },
  {
    title: "Event Door Gifts",
    description: "Surprise guests with a gift that's as functional as it is memorable",
    image: "/event-door-gifts.png",
  },
  {
    title: "Employee Welfare",
    description: "Celebrate milestones with a gift that's both personal and practical",
    image: "/employee-welfare.png",
  },
  {
    title: "Company Events",
    description: "A practical gift that doubles as your staff's everyday business card",
    image: "/company-events.png",
  },
];

export default function OccasionsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % occasions.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + occasions.length) % occasions.length);

  return (
    <section className="w-full flex flex-col items-center py-16 md:py-24 bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div className="w-full max-w-[1400px] px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16 flex flex-col items-center">
          <h2 className="text-[32px] md:text-[48px] font-[800] text-[#1A1A1A] leading-tight mb-3 md:mb-4 text-center">
            Perfect for These Occasions
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#666] max-w-[1200px] mx-auto text-center px-2 mb-8 md:mb-12">
            Transforms any occasion into a memorable experience of connection and sharing.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-4 md:gap-6">
          {occasions.map((occasion, index) => (
            <div key={index} className="bg-[#F8FAFC] rounded-[32px] p-4 flex flex-col h-full transition-transform duration-300 hover:translate-y-[-8px]">
              <div className="relative aspect-[4/3] w-full rounded-[24px] overflow-hidden mb-6">
                <Image
                  src={occasion.image}
                  alt={occasion.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-2 pb-4 flex-1 flex flex-col text-left">
                <h3 className="text-[22px] font-[800] text-[#1A1A1A] mb-3">
                  {occasion.title}
                </h3>
                <p className="text-[15px] text-[#666] leading-[1.6]">
                  {occasion.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View Slider */}
        <div className="lg:hidden w-full relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {occasions.map((occasion, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2">
                <div className="bg-[#F8FAFC] rounded-[32px] p-6 flex flex-col h-full text-center">
                  <div className="relative aspect-[4/3] w-full rounded-[24px] overflow-hidden mb-6 shadow-md">
                    <Image
                      src={occasion.image}
                      alt={occasion.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-[24px] font-[800] text-[#1A1A1A] mb-3">
                    {occasion.title}
                  </h3>
                  <p className="text-[15px] text-[#666] leading-[1.6]">
                    {occasion.description}
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
              {occasions.map((_, i) => (
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
