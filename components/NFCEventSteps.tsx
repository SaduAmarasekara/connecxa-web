"use client";

import React, { useRef } from "react";

export default function NFCEventSteps() {
  const steps = [
    {
      title: "Step 1: Get in Touch",
      desc: "Connect with us and share your event needs",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z" />
          <path d="m7 15 5 5" />
          <path d="m15 7 5 5" />
        </svg>
      )
    },
    {
      title: "Step 2: Design",
      desc: "Finalise your artwork and event details with our team",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 19 7-7 3 3-7 7-3-3z" />
          <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="m2 2 7.5 1.5" />
          <path d="m7 11-5-5" />
        </svg>
      )
    },
    {
      title: "Step 3: Live Print",
      desc: "Watch your cards come to life in seconds at the event",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
          <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
          <rect x="6" y="14" width="12" height="8" rx="1" />
        </svg>
      )
    }
  ];

  return (
    <section className="steps-section w-full bg-white relative z-10">
      <style>{`
        .steps-section {
          width: 100%;
          padding: 80px 24px;
          background: #ffffff;
          font-family: 'DM Sans', sans-serif;
          box-sizing: border-box;
        }

        .steps-header {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto 64px;
          text-align: center;
          padding: 0 24px;
          box-sizing: border-box;
        }

        .steps-inner {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
          gap: 24px;
        }

        @media (max-width: 1024px) {
          .steps-section {
            padding: 64px 24px;
          }
          .steps-header {
            margin-bottom: 48px;
          }
          .steps-inner {
            flex-direction: column;
            align-items: center;
            gap: 48px;
            text-align: center;
          }
          .step-card-wrap {
            width: 100%;
            max-width: 320px;
          }
        }

        @media (max-width: 600px) {
          .steps-section {
            padding: 48px 20px;
          }
          .steps-header h2 {
            font-size: 32px;
          }
        }
      `}</style>

      {/* Header Section */}
      <div className="steps-header">
        <h2 className="text-[32px] md:text-[56px] lg:text-[68px] font-[900] text-[#111827] leading-[1.1] tracking-tight">
          How to Get Started
        </h2>
      </div>

      <div className="steps-inner">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="step-card-wrap flex-1 flex flex-col items-center text-center group">
              <div className="mb-6 md:mb-10 text-[#111827] transition-transform duration-300 group-hover:scale-110">
                {step.icon}
              </div>
              <h3 className="text-[22px] md:text-[28px] font-[900] text-[#111827] mb-4 leading-tight">
                {step.title}
              </h3>
              <p className="text-gray-500 text-[16px] md:text-[18px] font-medium leading-relaxed max-w-[280px]">
                {step.desc}
              </p>
            </div>

            {/* Connecting Line (Desktop Only) */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block flex-[0_0_60px] lg:flex-[0_0_100px] h-[2px] bg-gray-200 mt-[24px]" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
