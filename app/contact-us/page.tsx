"use client";

import React from "react";
import Image from "next/image";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Form */}
        <div className="flex flex-col">
          <h1 className="text-4xl lg:text-[44px] font-extrabold text-[#111827] mb-3 flex items-center gap-3">
            Contact Us <span className="text-3xl">💌</span>
          </h1>
          <p className="text-[17px] text-gray-600 font-medium mb-10">
            Have something in mind? We're here to make it happen.
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-[13px] font-bold text-gray-900 mb-2">Name <span className="text-red-500">*</span></label>
              <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] transition-all text-[15px]" />
            </div>

            <div>
              <label className="block text-[13px] font-bold text-gray-900 mb-2">Email <span className="text-red-500">*</span></label>
              <input type="email" placeholder="Your email address" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] transition-all text-[15px]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[13px] font-bold text-gray-900 mb-2">Number</label>
                <input type="tel" placeholder="Your contact number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] transition-all text-[15px]" />
              </div>
              <div>
                <label className="block text-[13px] font-bold text-gray-900 mb-2">Preferred Contact Method <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] transition-all bg-white appearance-none text-[15px]">
                    <option>Email</option>
                    <option>Phone</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[13px] font-bold text-gray-900 mb-2">Enquiry Type <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] transition-all bg-white appearance-none text-[15px]">
                    <option>Bulk order (10 and above)</option>
                    <option>General Enquiry</option>
                    <option>Support</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-bold text-gray-900 mb-2">Quantity (For Bulk enquiries only)</label>
                <input type="number" defaultValue="1" min="1" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] transition-all text-[15px]" />
              </div>
            </div>

            <div>
              <label className="block text-[13px] font-bold text-gray-900 mb-2">Message <span className="text-red-500">*</span></label>
              <textarea placeholder="Enter your message" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] transition-all resize-none text-[15px]"></textarea>
            </div>

            <button type="button" className="w-full bg-[#FF5C00] text-white font-bold text-[17px] py-4 rounded-xl hover:bg-[#e65300] transition-colors mt-4 shadow-[0_8px_20px_rgba(255,92,0,0.25)] hover:shadow-[0_12px_25px_rgba(255,92,0,0.35)] transform hover:-translate-y-0.5">
              Submit
            </button>

            <p className="text-center text-[12px] text-gray-500 mt-6 font-medium">
              By submitting, you are agreeing with our <a href="#" className="underline hover:text-gray-700">Terms of Service</a> and <a href="#" className="underline hover:text-gray-700">Privacy Policy</a>
            </p>
          </form>
        </div>

        {/* Right Side: Image with Testimonial Overlay */}
        <div className="relative w-full h-[600px] lg:h-[760px] rounded-[32px] overflow-hidden shadow-2xl mt-8 lg:mt-0 bg-gray-100">
          <Image
            src="/corporate-gifting-hero-composite.png"
            alt="Connecxa Cards"
            fill
            className="object-cover"
          />
          {/* Subtle gradient overlay at bottom for text readability */}
          <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

          <div className="absolute bottom-10 left-10 right-10 z-10">
            <p className="text-white text-[20px] lg:text-[22px] font-medium leading-[1.4] mb-6 drop-shadow-md">
              "One Good Card shows that we're thinking ahead, always looking for the next innovative tool to make their experience with us better."
            </p>
            <div className="flex flex-col relative">
              <span className="text-white font-bold text-[17px]">Daniel Joshua L.</span>
              <span className="text-white/80 text-[14px]">Creative Director</span>
              <div className="mt-3 text-xs font-bold bg-black/50 backdrop-blur-md text-white px-3 py-1.5 rounded-lg w-fit border border-white/20">
                Client Testimonial - We Are One
              </div>

              {/* Watermark Logo */}
              <div className="absolute bottom-0 right-0 opacity-90">
                <span className="text-white font-bold text-[22px] tracking-tight">We Are <span className="underline underline-offset-4 decoration-2">O</span>ne</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
