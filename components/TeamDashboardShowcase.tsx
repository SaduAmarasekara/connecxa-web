"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface SectionProps {
  eyebrow: string;
  title: string;
  desc: string;
  bullets: { icon: React.ReactNode; text: string }[];
  image: string;
  imageLeft?: boolean;
}

const FeatureSection = ({ eyebrow, title, desc, bullets, image, imageLeft = false }: SectionProps) => {
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
    <section ref={sectionRef} className="feature-section">
      <div className={`feature-inner flex flex-col ${imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}>

        {/* Mobile Eyebrow */}
        <div
          className={`lg:hidden w-full text-center -mb-4 transition-all duration-1000 ease-out transform ${isVisible
            ? 'translate-y-0 opacity-100'
            : 'translate-y-4 opacity-0'
            }`}
        >
          <div className="text-[#005AD1] font-bold text-[11px] md:text-[12px] tracking-[0.12em] uppercase">
            {eyebrow}
          </div>
        </div>

        {/* Image Column */}
        <div
          className={`w-full lg:w-[45%] transition-all duration-1000 ease-out transform ${isVisible
            ? 'translate-x-0 opacity-100'
            : `${imageLeft ? '-translate-x-12' : 'translate-x-12'} opacity-0`
            }`}
        >
          <div className="relative w-full aspect-[16/11] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-gray-100 bg-gray-50">
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
          className={`w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-1000 ease-out transform delay-200 ${isVisible
            ? 'translate-x-0 opacity-100'
            : `${imageLeft ? 'translate-x-12' : '-translate-x-12'} opacity-0`
            }`}
        >
          <div className="hidden lg:block text-[#005AD1] font-bold text-[11px] md:text-[12px] tracking-[0.12em] uppercase mb-3 md:mb-4">
            {eyebrow}
          </div>

          <h2 className="text-[26px] sm:text-[32px] md:text-[36px] lg:text-[44px] font-[900] text-[#111827] leading-[1.2] md:leading-[1.15] tracking-tight mb-4 md:mb-5">
            {title}
          </h2>

          <p className="text-gray-500 text-[14px] md:text-[18px] font-medium leading-relaxed mb-6 md:mb-8 max-w-[540px]">
            {desc}
          </p>

          <div className="space-y-3 md:space-y-4 w-full max-w-sm lg:max-w-none flex flex-col items-center lg:items-start text-left">
            {bullets.map((b, i) => (
              <div key={i} className="flex items-start justify-center lg:justify-start gap-3 w-full">
                <div className="mt-0.5 md:mt-1 w-5 h-5 flex items-center justify-center text-[#005AD1] shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="text-gray-600 text-[13px] md:text-[16px] font-medium">
                  {b.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function TeamDashboardShowcase() {
  const sections = [
    {
      eyebrow: "DESIGNED FOR ADMINISTRATORS",
      title: "Team Card Management, Streamlined.",
      desc: "Easily create and manage your team’s business cards centrally. Restrict edits, customise layouts, and deploy changes across teams with just a few clicks.",
      image: "/team-card-management-feature.png",
      imageLeft: true,
      bullets: [
        {
          text: "Assign roles with defined access levels for better control",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          )
        },
        {
          text: "Prevent unauthorised edits with built-in restrictions",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
            </svg>
          )
        }
      ]
    },
    {
      eyebrow: "DESIGNED FOR BRAND MANAGERS",
      title: "Strengthen Brand Identity and Consistency",
      desc: "Ensure every business card stays on brand with preset templates and controlled design options - perfect for scaling your brand identity across teams.",
      image: "/team-brand-identity-feature.png",
      imageLeft: false,
      bullets: [
        {
          text: "Centralised control over profile widgets and content",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
          )
        },
        {
          text: "Create dynamic profile templates tailored for each role",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 21V9" />
            </svg>
          )
        }
      ]
    },
    {
      eyebrow: "DESIGNED FOR SALES LEADERS",
      title: "Lead Smarter with Performance Insight",
      desc: "Gain visibility into your team’s networking efforts, benchmark success, and identify top performers with visual, data-driven reporting.",
      image: "/team-performance-insight-feature.png",
      imageLeft: true,
      bullets: [
        {
          text: "Real-time performance snapshots",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          )
        },
        {
          text: "Explore performance trends with team leaderboards",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3v18h18" />
              <rect x="7" y="10" width="4" height="7" />
              <rect x="13" y="5" width="4" height="12" />
            </svg>
          )
        }
      ]
    }
  ];

  return (
    <>
      <style>{`
        .feature-section {
          width: 100%;
          padding: 80px 24px;
          background: #ffffff;
          font-family: 'DM Sans', sans-serif;
          box-sizing: border-box;
          overflow: hidden;
        }

        .feature-inner {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 24px;
          box-sizing: border-box;
        }

        @media (max-width: 1024px) {
          .feature-section {
            padding: 64px 20px;
          }
        }

        @media (max-width: 600px) {
          .feature-section {
            padding: 48px 16px;
          }
          .feature-inner {
            padding: 0 8px;
          }
        }
      `}</style>
      <div className="w-full flex flex-col gap-0 bg-white relative z-10">
        {sections.map((section, index) => (
          <FeatureSection key={index} {...section} />
        ))}
      </div>
    </>
  );
}
