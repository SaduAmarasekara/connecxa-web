"use client";

import Image from "next/image";

export default function CorporateCTA() {
  return (
    <section className="w-full flex flex-col lg:flex-row overflow-hidden" >
      {/* Left Column: Content with Blue Background */}
      <div className="w-full lg:w-1/2 bg-[#005BD3] p-8 md:p-16 lg:p-24 flex flex-col justify-center items-center text-center">
        <div className="max-w-[600px] mx-auto">
          <span className="text-white/80 font-bold text-sm tracking-[0.2em] uppercase mb-6 block">
            Corporate Solutions
          </span>

          <h2 className="text-[38px] md:text-[54px] font-[800] text-white leading-[1.1] mb-8 tracking-tight">
            Customise With Your <br />Corporate Branding
          </h2>

          <p className="text-white/90 text-[16px] md:text-[18px] font-medium leading-relaxed mb-10 max-w-[420px]">
            Getting in bulk or looking to get corporate-branded connecxa for your company?
          </p>

          <button className="bg-[#FF5C00] hover:bg-[#E65300] text-white px-20 py-10 rounded-2xl font-[900] text-[28px] w-fit transition-all hover:scale-105 active:scale-95 shadow-[0_30px_30px_rgba(255,92,0,0.3)] uppercase tracking-wider">
            Get in touch
          </button>
        </div>
      </div>

      {/* Right Column: Lifestyle Image */}
      <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[650px]">
        <Image
          src="/corporate_cta_mockup.png"
          alt="Corporate Branding Lifestyle"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
