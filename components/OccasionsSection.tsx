"use client";

import React from "react";
import Image from "next/image";

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
  return (
    <section className="w-full flex justify-center py-16 md:py-24 bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div className="w-full max-w-[1400px] px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16 flex flex-col items-center">
          <h2 className="text-[32px] md:text-[48px] font-[800] text-[#1A1A1A] leading-tight mb-3 md:mb-4 text-center">
            Perfect for These Occasions
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#666] max-w-[1200px] mx-auto text-center px-2" style={{ marginBottom: 20 }}>
            Transforms any occasion into a memorable experience of connection and sharing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {occasions.map((occasion, index) => (
            <div key={index} className="bg-[#F8FAFC] rounded-[24px] md:rounded-[32px] p-3 md:p-4 flex flex-col h-full transition-transform duration-300 hover:translate-y-[-8px]">
              <div className="relative aspect-[4/3] w-full rounded-[16px] md:rounded-[24px] overflow-hidden mb-4 md:mb-6">
                <Image
                  src={occasion.image}
                  alt={occasion.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-2 pb-2 md:pb-4 flex-1 flex flex-col text-center sm:text-left">
                <h3 className="text-[20px] md:text-[22px] font-[800] text-[#1A1A1A] mb-2 md:mb-3">
                  {occasion.title}
                </h3>
                <p className="text-[14px] md:text-[15px] text-[#666] leading-[1.6]">
                  {occasion.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
