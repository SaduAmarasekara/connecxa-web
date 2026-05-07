"use client";

import { useRef } from "react";

export default function NetworkingToolkit() {
  const row1Ref = useRef<HTMLDivElement | null>(null);
  const row2Ref = useRef<HTMLDivElement | null>(null);

  const scroll = (ref: React.MutableRefObject<HTMLDivElement | null>, dir: "left" | "right") => {
    if (ref.current) {
      const cardWidth = ref.current.offsetWidth;
      ref.current.scrollBy({ left: dir === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
    }
  };

  return (
    <section
      className="w-full py-16 md:py-24 bg-white overflow-hidden"
      style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}
    >
      <style jsx>{`
        .nt-card {
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          text-align: center;
          align-items: center;
        }
        .nt-visual {
          width: 100%;
          height: 280px;
          border-radius: 32px;
          background: #f8f9fb;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          margin-bottom: 24px;
          transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);

        }
        .nt-card:hover .nt-visual {
          transform: translateY(-6px);
        }
        .nt-row-wrap {
          position: relative;
        }
        .nt-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        /* ── Mobile: horizontal carousel ── */
        @media (max-width: 767px) {
          .nt-row {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 0;
            padding-bottom: 12px;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .nt-row::-webkit-scrollbar {
            display: none;
          }
          .nt-card {
            min-width: 100%;
            max-width: 100%;
            flex-shrink: 0;
            scroll-snap-align: start;
            padding: 0 4px;
          }
          .nt-arrow {
            display: flex !important;
          }
        }
        .nt-arrow {
          display: none;
          position: absolute;
          top: 50%;
          transform: translateY(-60%);
          z-index: 20;
          width: 40px;
          height: 40px;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 50%;
          box-shadow: 0 2px 12px rgba(0,0,0,0.10);
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #111827;
          transition: box-shadow 0.2s, background 0.2s;
        }
        .nt-arrow:hover {
          background: #f3f4f6;
          box-shadow: 0 4px 16px rgba(0,0,0,0.14);
        }
        .nt-arrow-left  { left:  -16px; }
        .nt-arrow-right { right: -16px; }
      `}</style>

      {/* ── Constrained wrapper ── */}
      <div
        style={{
          maxWidth: 1200,
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: 24,
          paddingRight: 24,
        }}
      >
        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 50px)",
              fontWeight: 800,
              color: "#111827",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              margin: "0 0 16px 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            Explore The Networking Toolkit
            <span style={{ fontSize: "0.85em" }}>🌟</span>
          </h2>
          <p
            style={{
              fontSize: "clamp(15px, 1.8vw, 19px)",
              color: "#6B7280",
              fontWeight: 500,
              margin: "0 auto",
              lineHeight: 1.6,
              maxWidth: 520,
            }}
          >
            Built for the modern professional, ready for every connection.
          </p>
        </div>

        {/* ── Row 1 ── */}
        <div className="nt-row-wrap" style={{ marginBottom: 32 }}>
          <button className="nt-arrow nt-arrow-left"  aria-label="Scroll left"  onClick={() => scroll(row1Ref, "left")}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button className="nt-arrow nt-arrow-right" aria-label="Scroll right" onClick={() => scroll(row1Ref, "right")}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
          </button>

          <div ref={row1Ref} className="nt-row">

            {/* Card 1: Multi-Profile Display */}
            <div className="nt-card">
              <div className="nt-visual group">
                <div className="absolute top-[20%] left-[15%] w-[180px] h-[64px] bg-[#FDE2E4] rounded-2xl shadow-lg border border-white/50 flex items-center px-4 gap-3 -rotate-3 group-hover:-rotate-6 transition-transform">
                  <div className="w-10 h-10 rounded-full bg-[#FA9A9A] flex items-center justify-center text-white font-bold flex-shrink-0">B</div>
                  <div className="text-[#D35A5A] font-bold text-[18px]">Brand</div>
                </div>
                <div className="absolute top-[40%] left-[25%] w-[190px] h-[64px] bg-[#E2F0CB] rounded-2xl shadow-xl border border-white/50 flex items-center px-4 gap-3 rotate-1 group-hover:rotate-3 transition-transform z-10">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-[#A8D08D] flex items-center justify-center flex-shrink-0">
                    <div className="w-full h-full bg-gray-200 rounded-full"></div>
                  </div>
                  <div className="text-[#6D9F51] font-bold text-[18px]">Freelance</div>
                </div>
                <div className="absolute top-[60%] left-[35%] w-[210px] h-[72px] bg-[#D4E4FD] rounded-2xl shadow-2xl border border-white flex items-center px-4 gap-3 -rotate-1 group-hover:scale-105 transition-transform z-20">
                  <div className="w-12 h-12 rounded-full bg-blue-200 border-2 border-white shadow-sm flex items-center justify-center text-blue-600 font-bold flex-shrink-0">K</div>
                  <div>
                    <div className="text-[#2B6CB0] font-bold text-[17px] leading-tight">Krystal Lee</div>
                    <div className="text-[#4A5568] text-[12px] font-medium">Marketing</div>
                  </div>
                </div>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: "#111827", margin: "0 0 8px", letterSpacing: "-0.01em" }}>Multi-Profile Display</h3>
              <p style={{ fontSize: 15, color: "#6B7280", fontWeight: 500, margin: 0, lineHeight: 1.65 }}>Seamlessly switch between multiple digital business cards</p>
            </div>

            {/* Card 2: Scan to Connect */}
            <div className="nt-card">
              <div className="nt-visual group">
                <div className="w-[200px] h-[240px] bg-white rounded-[24px] shadow-sm border-[4px] border-[#DCE8FF] p-4 flex flex-col items-center z-10">
                  <div className="w-full flex justify-between items-start mb-4">
                    <div className="font-bold text-[16px]">Profile</div>
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold">C</div>
                  </div>
                  <div className="w-[120px] h-[120px] bg-white shadow-md border border-gray-100 rounded-xl mt-2 flex items-center justify-center flex-shrink-0">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                  </div>
                </div>
                <div className="absolute top-[20%] right-[15%] w-14 h-14 bg-[#C6F6D5] rounded-xl flex items-center justify-center text-green-700 shadow-lg rotate-6 group-hover:rotate-12 transition-transform z-20">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                </div>
                <div className="absolute bottom-[10%] left-[15%] w-16 h-16 bg-[#FF5C00] rounded-xl flex items-center justify-center text-white shadow-xl -rotate-6 group-hover:-rotate-12 group-hover:scale-110 transition-transform z-20">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14L21 3"/><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/></svg>
                </div>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: "#111827", margin: "0 0 8px", letterSpacing: "-0.01em" }}>Scan to Connect</h3>
              <p style={{ fontSize: 15, color: "#6B7280", fontWeight: 500, margin: 0, lineHeight: 1.65 }}>Built-in digital QR Code to share your e-business card</p>
            </div>

            {/* Card 3: OCR Scanner */}
            <div className="nt-card">
              <div className="nt-visual group" style={{ gap: 8 }}>
                <div className="w-[70px] h-[160px] bg-[#FFD028] rounded-l-xl" style={{ marginLeft: "-64px" }}></div>
                <div className="w-[180px] h-[260px] bg-[#111] rounded-[32px] border-[6px] border-[#333] flex flex-col items-center justify-center relative shadow-2xl overflow-hidden z-10 flex-shrink-0">
                  <div className="absolute top-2 w-[40px] h-[4px] bg-[#333] rounded-full"></div>
                  <div className="w-full h-full bg-[#E2E8F0] mt-1 flex flex-col items-center justify-center p-2">
                    <div className="text-[9px] font-bold text-gray-400 mb-2">Scan name card</div>
                    <div className="w-[140px] h-[80px] bg-white rounded-md shadow-md p-2 flex flex-col justify-center relative flex-shrink-0">
                      <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#005AD1]"></div>
                      <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#005AD1]"></div>
                      <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#005AD1]"></div>
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#005AD1]"></div>
                      <div className="font-bold text-[10px]">Elizabeth Bennet</div>
                      <div className="text-[7px] text-gray-500 mb-1">CEO</div>
                      <div className="text-[6px] text-gray-400">+65 9123 4567</div>
                      <div className="text-[6px] text-gray-400">elizabeth@ceo.com</div>
                    </div>
                  </div>
                </div>
                <div className="w-[70px] h-[160px] bg-[#FFD028] rounded-r-xl" style={{ marginRight: "-64px" }}></div>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: "#111827", margin: "0 0 8px", letterSpacing: "-0.01em" }}>Built-in OCR Scanner</h3>
              <p style={{ fontSize: 15, color: "#6B7280", fontWeight: 500, margin: 0, lineHeight: 1.65 }}>Scan and convert paper business cards into digital contacts</p>
            </div>

          </div>
        </div>

        {/* ── Row 2 ── */}
        <div className="nt-row-wrap" style={{ marginBottom: 0 }}>
          <button className="nt-arrow nt-arrow-left"  aria-label="Scroll left"  onClick={() => scroll(row2Ref, "left")}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button className="nt-arrow nt-arrow-right" aria-label="Scroll right" onClick={() => scroll(row2Ref, "right")}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
          </button>

          <div ref={row2Ref} className="nt-row">

            {/* Card 4: Networking Insights */}
            <div className="nt-card">
              <div className="nt-visual group">
                <div className="w-[240px] h-[170px] bg-white rounded-2xl shadow-xl border-4 border-[#C6F6D5] p-5 flex flex-col relative">
                  <div className="flex justify-between items-center mb-4">
                    <div className="font-bold text-[15px]">Contact Saves</div>
                  </div>
                  <div className="flex-1 flex items-end justify-between px-2 gap-3 border-b border-gray-100 pb-1">
                    <div className="w-6 bg-[#005AD1] rounded-t-sm group-hover:scale-y-110 transition-transform origin-bottom" style={{ height: "60%" }}></div>
                    <div className="w-6 bg-[#005AD1] rounded-t-sm group-hover:scale-y-110 transition-transform origin-bottom" style={{ height: "40%" }}></div>
                    <div className="w-6 bg-[#005AD1] rounded-t-sm group-hover:scale-y-110 transition-transform origin-bottom" style={{ height: "90%" }}></div>
                    <div className="w-6 bg-[#005AD1] rounded-t-sm group-hover:scale-y-110 transition-transform origin-bottom relative" style={{ height: "70%" }}>
                      <div className="absolute -top-10 -right-4 w-[100px] h-[30px] bg-white rounded-md shadow border border-gray-100 flex items-center justify-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-2 h-2 bg-[#005AD1]"></div>
                        <span className="text-[9px] font-bold whitespace-nowrap">Contact Saves 18</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between px-2 text-[8px] text-gray-400 mt-2 font-medium">
                    <span>Dec 28</span><span>Jan 03</span><span>Jan 08</span><span>Jan 10</span>
                  </div>
                </div>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: "#111827", margin: "0 0 8px", letterSpacing: "-0.01em" }}>Networking Insights</h3>
              <p style={{ fontSize: 15, color: "#6B7280", fontWeight: 500, margin: 0, lineHeight: 1.65 }}>Understand your impact with data-driven engagement tracking</p>
            </div>
            

            {/* Card 5: Virtual Connections */}
            <div className="nt-card">
              <div className="nt-visual group">
                <div className="absolute top-[20%] left-[25%] w-[180px] h-[140px] bg-white shadow-sm border border-gray-100 rounded-xl p-3 flex flex-col z-0 group-hover:left-[22%] transition-all">
                  <div className="text-[12px] font-bold mb-1 border-b border-gray-100 pb-1">New Message</div>
                  <div className="text-[10px] text-gray-500 mb-2">Collaboration Opportun..</div>
                  <div className="text-[8px] leading-tight text-gray-600">Hey Jane, reaching out to discuss an opportunity.</div>
                </div>
                <div className="absolute bottom-[20%] right-[10%] w-[120px] h-[120px] bg-[#E53E3E] rounded-[32px] opacity-90 z-0"></div>
                <div className="absolute top-[10%] left-[10%] w-[100px] h-[100px] bg-[#3182CE] rounded-full opacity-90 z-0"></div>
                <div className="absolute top-[15%] right-[20%] w-[140px] h-[110px] bg-[#E2E8F0] shadow-2xl rounded-2xl border-4 border-white overflow-hidden group-hover:scale-105 transition-transform z-10 flex">
                  <div className="flex-1 bg-[#ED64A6] flex items-center justify-center text-white relative">
                    <div className="absolute top-1 left-2 text-[18px] font-bold opacity-30">G</div>
                    <div className="w-14 h-14 rounded-full bg-white opacity-20"></div>
                    <div className="absolute bottom-1 right-1 bg-black/30 rounded text-[6px] px-1 text-white">Shandy</div>
                  </div>
                </div>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: "#111827", margin: "0 0 8px", letterSpacing: "-0.01em" }}>Virtual Connections</h3>
              <p style={{ fontSize: 15, color: "#6B7280", fontWeight: 500, margin: 0, lineHeight: 1.65 }}>Integrated e-business card for email and virtual meetings</p>
            </div>

            {/* Card 6: Custom Link-in-Bio */}
            <div className="nt-card">
              <div className="nt-visual group">
                <div className="absolute w-[60px] h-[60px] bg-blue-600 rounded-2xl left-[10%] top-[40%] flex items-center justify-center text-white font-bold text-[24px] shadow-lg -rotate-12 group-hover:-rotate-6 transition-all">f</div>
                <div className="absolute w-[50px] h-[50px] bg-black rounded-xl left-[25%] top-[15%] flex items-center justify-center text-white font-bold text-[18px] shadow-lg rotate-6">T</div>
                <div className="absolute w-[50px] h-[50px] bg-[#FFFC00] rounded-xl left-[45%] top-[10%] flex items-center justify-center shadow-lg -rotate-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"><path d="M12 20s-8-4.5-8-10.5a8 8 0 0 1 16 0c0 6-8 10.5-8 10.5z"/></svg>
                </div>
                <div className="absolute w-[70px] h-[30px] bg-black rounded-[10px] right-[10%] top-[30%] flex items-center justify-center shadow-lg">
                  <div className="w-4 h-4 rounded-full bg-[#1DB954]"></div>
                </div>
                <div className="absolute w-[100px] h-[36px] bg-[#FF5C00] rounded-xl right-[28%] top-[35%] flex items-center justify-center shadow-xl z-10 -rotate-3 group-hover:scale-110 transition-transform">
                  <span className="text-white text-[11px] font-black tracking-wide">Connecxa</span>
                </div>
                <div className="absolute w-[60px] h-[60px] bg-gradient-to-tr from-[#FFDC80] via-[#F56040] to-[#E1306C] rounded-2xl right-[15%] bottom-[20%] flex items-center justify-center shadow-lg">
                  <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="absolute w-[80px] h-[40px] bg-[#111] rounded-[14px] left-[35%] bottom-[20%] flex items-center justify-center text-white text-[16px] font-black shadow-lg">𝕏</div>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: "#111827", margin: "0 0 8px", letterSpacing: "-0.01em" }}>Custom Link-in-Bio</h3>
              <p style={{ fontSize: 15, color: "#6B7280", fontWeight: 500, margin: 0, lineHeight: 1.65 }}>One profile link to connect and share across all platforms</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}