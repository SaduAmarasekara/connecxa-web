"use client";

import Image from "next/image";
import { useRef } from "react";

const profiles = [
  { id: "classic", name: "", src: "/profile-classic.png" },
  { id: "creative", name: "", src: "/profile-creative.png" },
  { id: "professional", name: "", src: "/profile-professional.png" },
  { id: "modern", name: "", src: "/profile-modern.png" },
  { id: "minimalist", name: "", src: "/profile-minimalist.png" },
];

export default function ProfilesShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="w-full py-24 bg-white overflow-hidden" style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}>
      <div className="w-full max-w-[1600px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-[40px] md:text-[54px] font-bold text-[#111827] tracking-tight leading-tight mb-4 flex items-center justify-center gap-3">
            Fully-Customisable Profiles
            <span className="text-[0.85em]">⚡</span>
          </h2>
          <p className="text-[17px] md:text-[19px] text-[#4B5563] font-medium max-w-2xl mx-auto">
            Ready-to-use Digital Business Cards for modern professionals and teams. Click to view!
          </p>
        </div>

        {/* Carousel */}
        <div className="relative group">
          
          {/* Scroll Buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] flex items-center justify-center text-gray-800 hover:scale-110 transition-transform opacity-0 group-hover:opacity-100 hidden md:flex border border-gray-100"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] flex items-center justify-center text-gray-800 hover:scale-110 transition-transform opacity-0 group-hover:opacity-100 hidden md:flex border border-gray-100"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>

          {/* Scrolling Container */}
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 pt-4 px-4 -mx-4"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              scrollBehavior: 'smooth' 
            }}
          >
            <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
            
            {profiles.map((profile) => (
              <div 
                key={profile.id}
                className="flex-shrink-0 snap-center flex flex-col items-center gap-6 cursor-pointer group/card"
              >
                {/* Device Mockup Wrapper */}
                <div className="relative w-[280px] h-[580px] md:w-[320px] md:h-[660px] rounded-[40px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] bg-[#F8F9FA] overflow-hidden border-[8px] border-white group-hover/card:shadow-[0_20px_50px_rgba(0,0,0,0.15)] group-hover/card:-translate-y-2 transition-all duration-400">
                  <Image
                    src={profile.src}
                    alt={profile.name}
                    fill
                    className="object-cover object-top"
                  />
                  {/* Subtle glare effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none" />
                </div>
                
                {/* Profile Label */}
                <span className="text-[20px] font-bold text-gray-800 tracking-tight group-hover/card:text-[#0066FF] transition-colors">
                  {profile.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
