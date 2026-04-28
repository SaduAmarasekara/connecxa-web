"use client";

import React from "react";
import Image from "next/image";

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
  return (
    <section className="w-full flex justify-center py-24 bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div className="w-full max-w-[1200px] px-6">
        <div className="text-center mb-16">
          <h2 className="text-[40px] md:text-[48px] font-[800] text-[#1A1A1A] leading-tight mb-4">
            Corporate Gift Options
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#666] max-w-[1200px] mx-auto mb-20">
            Explore a range of NFC gifts tailored for every occasion - from ready-made sets to customized options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {giftOptions.map((option, index) => (
            <div key={index} className="group">
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
      </div>
    </section>
  );
}
