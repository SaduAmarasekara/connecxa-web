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
  const scrollRef = useRef<HTMLDivElement | null>(null);
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

  return (
    <section className="live-section w-full bg-white relative z-10">
      <style>{`
        .live-section {
          width: 100%;
          padding: 80px 24px;
          background: #ffffff;
          font-family: 'DM Sans', sans-serif;
          box-sizing: border-box;
          overflow: hidden;
        }

        .live-header {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto 64px;
          text-align: center;
          padding: 0 24px;
          box-sizing: border-box;
        }

        .live-inner-wrapper {
          position: relative;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .live-inner {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 120px;
        }

        .carousel-arrow {
          position: absolute;
          top: 45%; 
          transform: translateY(-50%);
          width: 48px; 
          height: 48px;
          background: rgba(17,17,17,0.6); 
          backdrop-filter: blur(8px);
          border: none; 
          cursor: pointer; 
          color: #fff;
          display: none; 
          align-items: center; 
          justify-content: center;
          z-index: 50; 
          transition: all 0.2s ease;
        }
        .arrow-right { right: 0; border-top-left-radius: 99px; border-bottom-left-radius: 99px; }
        .arrow-left  { left: 0;  border-top-right-radius: 99px; border-bottom-right-radius: 99px; }
        .carousel-arrow:hover { background: rgba(17,17,17,0.8); }

        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        @media (max-width: 1024px) {
          .live-section {
            padding: 64px 0;
          }
          .live-header {
            margin-bottom: 40px;
          }
          .live-inner {
            flex-direction: row;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 20px;
            padding: 0 20px 40px;
            -webkit-overflow-scrolling: touch;
          }
          .live-card-wrap {
            width: 88vw;
            flex-shrink: 0;
            scroll-snap-align: center;
          }
          .carousel-arrow {
            display: flex;
          }
        }

        @media (max-width: 600px) {
          .live-section {
            padding: 48px 0;
          }
          .live-inner {
            padding: 0 20px 40px;
            gap: 16px;
          }
          .live-card-wrap {
            width: 90vw;
          }
          .carousel-arrow {
            width: 40px;
            height: 40px;
            top: 40%;
          }
        }
      `}</style>

      {/* Header Section */}
      <div className="live-header">
        <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-[900] text-[#111827] leading-[1.1] mb-4 md:mb-6 tracking-tight">
          Elevate Events with Live Printing
        </h2>
        <p className="text-gray-500 text-[16px] md:text-[20px] font-medium max-w-4xl mx-auto leading-relaxed">
          Transform your event into an experience with live-printed personalised NFC cards
        </p>
      </div>

      <div className="live-inner-wrapper">
        <div ref={scrollRef} className="live-inner no-scrollbar">
          {sections.map((section, index) => (
            <div key={index} className="live-card-wrap">
              <div className={`flex flex-col ${section.imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-between gap-10 md:gap-16 lg:gap-24`}>
                
                {/* Image Column */}
                <div className="w-full lg:w-[45%]">
                  <div className="relative aspect-[16/11] rounded-[24px] md:rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 bg-gray-50">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Text Column */}
                <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="text-[#005AD1] font-bold text-[12px] md:text-[13px] tracking-[0.15em] uppercase mb-4 md:mb-6">
                    {section.eyebrow}
                  </div>

                  <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-[900] text-[#111827] leading-[1.15] md:leading-[1.1] tracking-tight mb-6 md:mb-8">
                    {section.title}
                  </h2>

                  <p className="text-gray-500 text-[15px] md:text-[18px] font-medium leading-relaxed mb-8 md:mb-10 max-w-xl">
                    {section.desc}
                  </p>

                  <div className="space-y-4 md:space-y-6 w-full max-w-md lg:max-w-none text-left">
                    {section.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-4 group">
                        <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center text-[#005AD1] shrink-0 mt-0.5">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <div className="text-gray-600 text-[14px] md:text-[17px] font-bold leading-tight">
                          {feature}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          className="carousel-arrow arrow-left" 
          onClick={() => scrollRef.current?.scrollBy({ left: -window.innerWidth * 0.8, behavior: "smooth" })} 
          aria-label="Scroll left"
        >
          <span style={{ fontSize: 24, fontWeight: 300, marginRight: -4 }}>‹</span>
        </button>
        <button 
          className="carousel-arrow arrow-right" 
          onClick={() => scrollRef.current?.scrollBy({ left: window.innerWidth * 0.8, behavior: "smooth" })} 
          aria-label="Scroll right"
        >
          <span style={{ fontSize: 24, fontWeight: 300, marginLeft: -4 }}>›</span>
        </button>
      </div>
    </section>
  );
}
