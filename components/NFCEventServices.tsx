"use client";

import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  desc: string;
  image: string;
}

const ServiceCard = ({ title, desc, image }: ServiceCardProps) => {
  return (
    <div className="relative flex flex-col flex-1 min-w-[280px] max-lg:!ml-0" style={{ marginLeft: 50 }}>
      <div className="bg-white rounded-[20px] md:rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col h-full">
        {/* Image */}
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="p-6 md:p-10 flex flex-col flex-grow items-center text-center lg:items-start lg:text-left">
          <h3 className="text-[22px] md:text-[28px] font-[900] text-[#111827] mb-3 md:mb-4 leading-tight">
            {title}
          </h3>
          <p className="text-gray-500 text-[15px] md:text-[17px] font-medium leading-relaxed">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function NFCEventServices() {
  const services = [
    {
      title: "Live-Printed NFC Cards",
      desc: "Instantly create personalised NFC cards on-site, ready for guests to use within seconds.",
      image: "/nfc-service-printing.png"
    },
    {
      title: "Corporate Customisation",
      desc: "Showcase your brand with customised NFC cards that impress guests and keep you top of mind.",
      image: "/nfc-service-customisation.png"
    },
    {
      title: "On-site Live Support",
      desc: "Dedicated event support to give your attendees a seamless, hassle-free experience.",
      image: "/nfc-service-support.png"
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24 max-lg:!ml-0" style={{ fontFamily: "'DM Sans', sans-serif", marginLeft: 50 }}>
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-20 flex flex-col items-center">
          <h2 className="text-[32px] md:text-[56px] lg:text-[68px] font-[900] text-[#111827] leading-tight mb-3 md:mb-6">
            All-in-One Service
          </h2>
          <p className="text-gray-500 text-[16px] md:text-[22px] font-medium max-w-[1400px] mx-auto px-2">
            From live printing to on-site manpower support - we've got you covered.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              {...service} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
