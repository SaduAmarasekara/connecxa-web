"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SectionProps {
  eyebrow: string;
  title: string;
  desc: string;
  features: { icon: React.ReactNode; text: string; bold: string }[];
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-24 overflow-hidden max-lg:!p-6 hidden lg:block">
      <div className={`max-w-[1400px] mx-auto px-6 flex flex-col ${imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-between gap-10 md:gap-16 lg:gap-20`}>

        {/* Image Column */}
        <div
          className={`w-full lg:w-[45%] transition-all duration-1000 ease-out transform ${isVisible
            ? 'translate-x-0 opacity-100'
            : `${imageLeft ? '-translate-x-32' : 'translate-x-32'} opacity-0`
            }`}
        >
          <div className="relative aspect-[4/3] rounded-[32px] md:rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] md:shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-gray-100 bg-gray-50">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Text Column */}
        <div
          className={`w-full lg:w-[45%] flex flex-col max-lg:items-center max-lg:text-center transition-all duration-1000 ease-out transform delay-200 ${isVisible
            ? 'translate-x-0 opacity-100'
            : `${imageLeft ? 'translate-x-32' : '-translate-x-32'} opacity-0`
            }`}
        >
          <div className="text-[#005AD1] font-black text-xs md:text-sm tracking-[0.15em] uppercase mb-4 md:mb-6">
            {eyebrow}
          </div>

          <h2 className="text-[32px] sm:text-[36px] md:text-[44px] lg:text-[48px] font-[900] text-[#111827] leading-[1.1] tracking-tight mb-6 md:mb-8">
            {title}
          </h2>

          <p className="text-gray-500 text-[16px] md:text-[18px] font-medium leading-relaxed mb-8 md:mb-12">
            {desc}
          </p>

          <div className="space-y-6 md:space-y-8 max-lg:text-left max-lg:w-full max-lg:max-w-md">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-4 md:gap-5 group">
                <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center text-[#005AD1] mt-1 shrink-0 transition-transform group-hover:scale-110">
                  {f.icon}
                </div>
                <div className="text-gray-600 text-[15px] md:text-[16px] leading-relaxed">
                  <span className="font-bold text-gray-900">{f.bold}</span> {f.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function TeamFeatureSections() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sections = [
    {
      eyebrow: "CUSTOM-BRANDED NFC CARDS",
      title: "Customise with your Corporate Branding",
      desc: "Elevate your brand presence with customised NFC business cards, made exactly the way you want them.",
      image: "/team-branding.png",
      imageLeft: true,
      features: [
        {
          bold: "Add your brand assets",
          text: "such as logo, colours, fonts, graphics to your business card design",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19l7-7 3 3-7 7-3-3z" />
              <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
              <path d="M2 2l7.5 1.5" />
              <path d="M7 11l-5-5" />
            </svg>
          )
        },
        {
          bold: "Scale and save",
          text: "with corporate bulk discounts available upon request",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="6" width="20" height="12" rx="2" />
              <circle cx="12" cy="12" r="2" />
              <path d="M6 12h.01M18 12h.01" />
            </svg>
          )
        },
        {
          bold: "Complimentary mockups",
          text: "to help you kickstart your design process",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          )
        }
      ]
    },
    {
      eyebrow: "DIGITAL BUSINESS CARD FOR TEAMS",
      title: "Team Management, Streamlined",
      desc: "Bring all your team digital business cards together in one place to help your team stay on-brand.",
      image: "/team-management.png",
      imageLeft: false,
      features: [
        {
          bold: "Bulk create, edit and assign",
          text: "digital name cards to your company",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 21V9" />
            </svg>
          )
        },
        {
          bold: "Create templates",
          text: "to maintain a consistent look according to your brand guidelines",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 3h16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
              <path d="M10 13v8M2 13h16" />
            </svg>
          )
        },
        {
          bold: "Group team members",
          text: "according to their department or location to stay organised",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          )
        }
      ]
    },
    {
      eyebrow: "CENTRALISED CRM FOR TEAMS",
      title: "Powerful CRM for Modern Teams",
      desc: "Track and manage company leads, contacts, deals, and have full visibility into your team's sales process.",
      image: "/team-crm.png",
      imageLeft: true,
      features: [
        {
          bold: "Assign deals",
          text: "and track ownership across your team, from first connection to closed deal",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <circle cx="9" cy="10" r="2" />
              <path d="M15 8h2M15 12h2M7 16h10" />
            </svg>
          )
        },
        {
          bold: "Customise deal pipelines",
          text: "according to your sales process or quick-start with ready-made templates",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3v18h18" />
              <path d="M18 9l-5 5-2-2-4 4" />
            </svg>
          )
        },
        {
          bold: "Analyse performance",
          text: "and gain clarity into your team's performance such as pipeline health and conversion rate",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="20" x2="18" y2="10" />
              <line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
          )
        }
      ]
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % sections.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + sections.length) % sections.length);

  return (
    <div className="flex flex-col w-full">
      {/* Desktop View */}
      <div className="hidden lg:flex flex-col">
        {sections.map((section, index) => (
          <FeatureSection key={index} {...section} />
        ))}
      </div>

      {/* Mobile Slider View */}
      <div className="lg:hidden w-full px-4 py-12 relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {sections.map((section, index) => (
            <div key={index} className="w-full flex-shrink-0 px-2">
              <div className="bg-white rounded-[32px] p-8 shadow-xl border border-gray-100 flex flex-col items-center text-center">
                <div className="text-[#005AD1] font-black text-xs tracking-[0.15em] uppercase mb-4">
                  {section.eyebrow}
                </div>
                <h3 className="text-[28px] font-[900] text-[#111827] leading-tight mb-4">
                  {section.title}
                </h3>
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-md border border-gray-50">
                  <Image src={section.image} alt={section.title} fill className="object-cover" />
                </div>
                <p className="text-gray-500 text-sm font-medium mb-8">
                  {section.desc}
                </p>
                <div className="space-y-4 text-left w-full">
                  {section.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="text-[#005AD1] shrink-0 mt-0.5">{f.icon}</div>
                      <div className="text-gray-600 text-sm">
                        <span className="font-bold text-gray-900">{f.bold}</span> {f.text}
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
            className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-[#005AD1] active:scale-95 transition-all"
          >
            <ChevronLeft size={24} />
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
            className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-[#005AD1] active:scale-95 transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
