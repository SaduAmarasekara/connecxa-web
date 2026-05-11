"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const crmShowcaseItems = [
  {
    tag: "OPTIMISED FOR ON-THE-GO SALES",
    title: "Work Your Pipeline. Anytime, Anywhere.",
    desc: "Track pipelines, update deals, and follow up faster - whether you're at your desk or in the field. Stay in control in real-time, on any device.",
    list: ["Optimised for mobile and desktop use", "Real-time deal syncing across all devices"],
    image: "/crm-pipeline-anywhere.png",
    imageBg: "#DBEAFE",
    reverse: false
  },
  {
    tag: "SALES ANALYTICS",
    title: "Visualise Your Sales Performance",
    desc: "Get real-time visibility into your sales performance and monitor your pipeline health, conversion trends, and deal outcomes at a glance.",
    list: ["Track real-time growth across pipelines", "Access historical data to compare performance over time"],
    image: "/crm-sales-analytics.png",
    imageBg: "#DBEAFE",
    reverse: true
  },
  {
    tag: "LEAD GENERATION TOOLS",
    title: "Capture Leads Fast. Convert Faster.",
    desc: "Share your contact and capture inbound interest in seconds. Built for real-world networking - no manual entry, just smarter follow-ups.",
    list: ["Capture s instantly with built-in contact tools", "Auto-sync leads directly into your CRM"],
    image: "/crm-lead-gen.png",
    imageBg: "#DBEAFE",
    reverse: false
  }
];

export default function CRMShowcase() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = sectionRef.current?.querySelectorAll(".reveal-section");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .crm-section {
          width: 100%;
          padding: 80px 24px;
          background: #ffffff;
          font-family: 'DM Sans', sans-serif;
          box-sizing: border-box;
          overflow: hidden;
        }

        .crm-inner {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 24px;
          box-sizing: border-box;
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
          .crm-section {
            padding: 64px 0;
          }
          .crm-inner {
            flex-direction: row;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 20px;
            padding: 0 20px 40px;
            -webkit-overflow-scrolling: touch;
          }
          .reveal-section {
            width: 88vw;
            flex-shrink: 0;
            scroll-snap-align: center;
            opacity: 1 !important;
            transform: none !important;
          }
          .carousel-arrow {
            display: flex;
          }
        }

        @media (max-width: 600px) {
          .crm-section {
            padding: 48px 0;
          }
          .crm-inner {
            padding: 0 20px 40px;
            gap: 16px;
          }
          .reveal-section {
            width: 90vw;
          }
          .carousel-arrow {
            width: 40px;
            height: 40px;
            top: 35%;
          }
        }
      `}</style>

      <section ref={sectionRef} className="crm-section w-full bg-white relative z-10">
        <div style={{ position: "relative", width: "100%", maxWidth: "1400px", margin: "0 auto" }}>
          <div ref={scrollRef} className="crm-inner no-scrollbar">
            {crmShowcaseItems.map((item, i) => (
              <div
                key={i}
                data-index={i}
                className={`reveal-section flex flex-col lg:flex-row items-center gap-12 lg:gap-24 transition-all duration-1000 ease-out ${
                  item.reverse ? "lg:flex-row-reverse" : ""
                } ${
                  visibleItems.includes(i)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
              >
                {/* Visual Side */}
                <div className="w-full lg:w-1/2">
                  <div
                    className="relative w-full aspect-[4/3] rounded-[32px] md:rounded-[48px] overflow-hidden shadow-sm flex items-center justify-center p-6 md:p-12 group"
                    style={{ background: item.imageBg }}
                  >
                    <div className="relative w-full h-full bg-white rounded-[20px] md:rounded-[32px] shadow-2xl overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="text-[12px] md:text-[13px] font-bold tracking-[0.15em] text-[#005AD1] uppercase mb-4 md:mb-6">
                    {item.tag}
                  </div>
                  <h2 className="text-[32px] sm:text-[38px] md:text-[44px] lg:text-[54px] font-black text-[#111] leading-[1.15] md:leading-[1.1] mb-6 md:mb-8 tracking-tight">
                    {item.title}
                  </h2>
                  <p className="text-[16px] md:text-[19px] text-gray-500 font-medium leading-relaxed mb-8 md:mb-10 max-w-xl">
                    {item.desc}
                  </p>

                  <ul className="space-y-4 md:space-y-6 w-full max-w-sm lg:max-w-none mx-auto lg:mx-0 text-left">
                    {item.list.map((li, idx) => (
                      <li key={idx} className="flex items-start gap-3 md:gap-4">
                        <div className="mt-1 md:mt-1.5 w-6 h-6 rounded-md bg-blue-50 flex items-center justify-center shrink-0">
                          <svg className="w-3.5 h-3.5 text-[#005AD1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-[16px] md:text-[17px] font-bold text-gray-800 leading-tight">{li}</span>
                      </li>
                    ))}
                  </ul>
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
    </>
  );
}
