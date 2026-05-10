"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SectionProps {
  eyebrow: string;
  title: string;
  desc: string;
  features: string[];
  image: string;
  imageLeft?: boolean;
}

const FeatureSection = ({ eyebrow, title, desc, features, image, imageLeft = false }: SectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-8 md:py-12 overflow-hidden max-lg:!px-4 hidden lg:block">
      <div className={`max-w-[1400px] mx-auto px-0 md:px-6 flex flex-col ${imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}>

        {/* Image Column */}
        <div
          className={`w-full lg:w-[40%] transition-all duration-1000 ease-out transform ${isVisible
            ? 'translate-x-0 opacity-100'
            : `${imageLeft ? '-translate-x-12' : 'translate-x-12'} opacity-0`
            }`}
        >
          <div className="relative aspect-[16/10] rounded-[20px] md:rounded-[24px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-gray-100 bg-gray-50">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Text Column */}
        <div
          className={`w-full lg:w-[60%] flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-1000 ease-out transform delay-200 ${isVisible
            ? 'translate-x-0 opacity-100'
            : `${imageLeft ? 'translate-x-12' : '-translate-x-12'} opacity-0`
            }`}
        >
          <div className="text-[#005AD1] font-bold text-[12px] md:text-[13px] tracking-[0.12em] uppercase mb-2 md:mb-3">
            {eyebrow}
          </div>

          <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-[900] text-[#111827] leading-[1.15] tracking-tight mb-4 md:mb-5">
            {title}
          </h2>

          <p className="text-gray-500 text-[15px] md:text-[18px] font-medium leading-relaxed mb-6 max-w-[540px]">
            {desc}
          </p>

          <div className="space-y-3 w-full flex flex-col items-start lg:items-start max-lg:max-w-md max-lg:mx-auto max-lg:text-left">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3 group">
                <div className="w-5 h-5 flex items-center justify-center text-[#005AD1] shrink-0 mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="text-gray-600 text-[14px] md:text-[16px] font-medium">
                  {feature}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function LivePrintingFeatures() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sections = [
    {
      eyebrow: "ORGANIC CROWD MAGNET",
      title: "Boost Brand Visibility and Draw Crowds",
      desc: "Turn your booth into the event's main attraction with live NFC card printing, capturing attention through a hands-on, interactive experience.",
      image: "/nfc-live-booth.png",
      imageLeft: true,
      features: [
        "Captures attention and builds foot traffic",
        "A fun, share-worthy experience for attendees"
      ]
    },
    {
      eyebrow: "INSTANT TURNAROUND",
      title: "Design. Send. Print. In Seconds.",
      desc: "Guests can customise their NFC card in real time with our design kiosks. With one click, it's printed on-site and ready almost instantly.",
      image: "/nfc-live-kiosk.png",
      imageLeft: false,
      features: [
        "Real-time card customisation and preview",
        "Self-serve kiosks for easy personalisation"
      ]
    },
    {
      eyebrow: "A KEEPSAKE WITH PURPOSE",
      title: "Memorable for Guests, Functional Instantly.",
      desc: "More than a gift - a ready-to-use networking tool. Create instant engagement and keep your brand in conversations long after the event.",
      image: "/nfc-live-experience.png",
      imageLeft: true,
      features: [
        "Ready for any setting - from conferences to meetups",
        "Unlimited use for life - a lasting practical gift"
      ]
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % sections.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + sections.length) % sections.length);

  return (
    <div className="bg-white flex flex-col py-8 md:py-12" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Header Section */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 text-center mb-10 md:mb-14 flex flex-col items-center">
        <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-[900] text-[#111827] leading-tight mb-3 md:mb-4">
          Elevate Events with Live Printing
        </h2>
        <p className="text-gray-500 text-[16px] md:text-[20px] font-medium max-w-[1400px] mx-auto px-2">
          Transform your event into an experience with live-printed personalised NFC cards
        </p>
      </div>

      {/* Desktop Feature Sections */}
      <div className="hidden lg:flex flex-col gap-4">
        {sections.map((section, index) => (
          <FeatureSection key={index} {...section} />
        ))}
      </div>

      {/* Mobile Slider View */}
      <div className="lg:hidden w-full px-4 py-8 relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {sections.map((section, index) => (
            <div key={index} className="w-full flex-shrink-0 px-2">
              <div className="bg-white rounded-[32px] p-8 shadow-xl border border-gray-100 flex flex-col items-center text-center">
                <div className="text-[#005AD1] font-bold text-[12px] tracking-[0.12em] uppercase mb-4">
                  {section.eyebrow}
                </div>
                <h3 className="text-[26px] font-[900] text-[#111827] leading-tight mb-4">
                  {section.title}
                </h3>
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 shadow-md border border-gray-50">
                  <Image src={section.image} alt={section.title} fill className="object-cover" />
                </div>
                <p className="text-gray-500 text-sm font-medium mb-8">
                  {section.desc}
                </p>
                <div className="space-y-4 text-left w-full">
                  {section.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="text-[#005AD1] shrink-0 mt-0.5">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div className="text-gray-600 text-sm font-medium">
                        {f}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center gap-6 mt-8">
          <button 
            onClick={prevSlide}
            className="w-11 h-11 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-[#005AD1] active:scale-95 transition-all"
          >
            <ChevronLeft size={22} />
          </button>
          <div className="flex gap-2">
            {sections.map((_, i) => (
              <div 
                key={i} 
                className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === i ? 'w-6 bg-[#005AD1]' : 'w-1.5 bg-gray-200'}`}
              />
            ))}
          </div>
          <button 
            onClick={nextSlide}
            className="w-11 h-11 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-[#005AD1] active:scale-95 transition-all"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}
