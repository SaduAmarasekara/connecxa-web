"use client";

import React, { useRef } from "react";
import Image from "next/image";

export default function TeamFeatureSections() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
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

  return (
    <section className="team-section w-full bg-white relative z-10">
      <style>{`
        .team-section {
          width: 100%;
          padding: 80px 24px;
          background: #ffffff;
          font-family: 'DM Sans', sans-serif;
          box-sizing: border-box;
          overflow: hidden;
        }

        .team-inner-wrapper {
          position: relative;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .team-inner {
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
          .team-section {
            padding: 64px 0;
          }
          .team-inner {
            flex-direction: row;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 20px;
            padding: 0 20px 40px;
            -webkit-overflow-scrolling: touch;
          }
          .team-card-wrap {
            width: 88vw;
            flex-shrink: 0;
            scroll-snap-align: center;
          }
          .carousel-arrow {
            display: flex;
          }
        }

        @media (max-width: 600px) {
          .team-section {
            padding: 48px 0;
          }
          .team-inner {
            padding: 0 20px 40px;
            gap: 16px;
          }
          .team-card-wrap {
            width: 90vw;
          }
          .carousel-arrow {
            width: 40px;
            height: 40px;
            top: 35%;
          }
        }
      `}</style>

      <div className="team-inner-wrapper">
        <div ref={scrollRef} className="team-inner no-scrollbar">
          {sections.map((section, index) => (
            <div key={index} className="team-card-wrap">
              <div className={`flex flex-col ${section.imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-between gap-10 md:gap-16 lg:gap-24`}>
                
                {/* Image Column */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] rounded-[32px] md:rounded-[48px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 bg-gray-50">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Text Column */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="text-[#005AD1] font-black text-xs md:text-sm tracking-[0.15em] uppercase mb-4 md:mb-6">
                    {section.eyebrow}
                  </div>

                  <h2 className="text-[32px] sm:text-[36px] md:text-[44px] lg:text-[48px] font-[900] text-[#111827] leading-[1.15] md:leading-[1.1] tracking-tight mb-6 md:mb-8">
                    {section.title}
                  </h2>

                  <p className="text-gray-500 text-[16px] md:text-[18px] font-medium leading-relaxed mb-8 md:mb-12 max-w-xl">
                    {section.desc}
                  </p>

                  <div className="space-y-6 md:space-y-8 w-full max-w-md lg:max-w-none text-left">
                    {section.features.map((f, i) => (
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
