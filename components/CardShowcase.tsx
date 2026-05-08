"use client";
import { useState, useRef } from "react";
import Link from "next/link";

interface ColorVariant {
  dot: string;
  hasBorder?: boolean;
  bgCard: string;
  textColor: string;
  subColor: string;
  accent: string;
}

interface CardData {
  id: string;
  name: string;
  price: string;
  material: string;
  printing: string;
  title: string;
  sub: string;
  tag: string;
  tagColor: string;
  variants: ColorVariant[];
  shimmer: string;
  woodGrain?: boolean;
  isCustom?: boolean;
}

const cards: CardData[] = [
  {
    id: "obsidian",
    name: "Obsidian",
    price: "Rs 19,912.38",
    material: "Stainless Steel",
    printing: "Laser Engraving",
    title: "STEVE MILLER",
    sub: "TECH ENTHUSIAST",
    tag: "Premium",
    tagColor: "#4A3B12",
    shimmer: "rgba(212,175,55,0.15)",
    variants: [
      { dot: "#D4AF37", bgCard: "#D4AF37", textColor: "#4A3B12", subColor: "rgba(74,59,18,0.55)", accent: "#D4AF37" },
      { dot: "#9CA3AF", bgCard: "#9CA3AF", textColor: "#111827", subColor: "rgba(17,24,39,0.55)", accent: "#9CA3AF" },
      { dot: "#111827", bgCard: "#111827", textColor: "#D4AF37", subColor: "rgba(212,175,55,0.55)", accent: "#111827" },
      { dot: "#ffffff", hasBorder: true, bgCard: "#ffffff", textColor: "#111827", subColor: "rgba(17,24,39,0.55)", accent: "#000000" },
    ],
  },
  {
    id: "walnut",
    name: "Walnut",
    price: "Rs 10,691.38",
    material: "Sapele Wood",
    printing: "Laser Engraving",
    title: "EMILY GREEN",
    sub: "BOTANIST",
    tag: "Natural",
    tagColor: "#8B5A2B",
    shimmer: "rgba(139,90,43,0.12)",
    woodGrain: true,
    variants: [
      { dot: "#8B5A2B", bgCard: "#8B5A2B", textColor: "#2B1B12", subColor: "rgba(43,27,18,0.5)", accent: "#8B5A2B" },
    ],
  },
  {
    id: "modern",
    name: "Modern",
    price: "Rs 9,943.73",
    material: "Matte PVC",
    printing: "Thermal Printing",
    title: "DARREN LEE",
    sub: "ENTREPRENEUR",
    tag: "Best Seller",
    tagColor: "#D4AF37",
    shimmer: "rgba(212,175,55,0.12)",
    variants: [
      { dot: "#111827", bgCard: "#111827", textColor: "#ffffff", subColor: "rgba(255,255,255,0.6)", accent: "#111827" },
      { dot: "#4B5563", bgCard: "#4B5563", textColor: "#ffffff", subColor: "rgba(255,255,255,0.6)", accent: "#4B5563" },
      { dot: "#064e3b", bgCard: "#064e3b", textColor: "#ffffff", subColor: "rgba(255,255,255,0.6)", accent: "#064e3b" },
      { dot: "#1e3a8a", bgCard: "#1e3a8a", textColor: "#ffffff", subColor: "rgba(255,255,255,0.6)", accent: "#1e3a8a" },
      { dot: "#7f1d1d", bgCard: "#7f1d1d", textColor: "#ffffff", subColor: "rgba(255,255,255,0.6)", accent: "#7f1d1d" },
      { dot: "#ffffff", hasBorder: true, bgCard: "#ffffff", textColor: "#000000", subColor: "rgba(0,0,0,0.5)", accent: "#000000" },
    ],
  },
  {
    id: "parallels",
    name: "Parallels",
    price: "Rs 13,681.97",
    material: "Matte PVC",
    printing: "UV Printing",
    title: "NATALIE DIAZ",
    sub: "CONTENT STRATEGIST",
    tag: "Pro",
    tagColor: "#005AD1",
    shimmer: "rgba(255,255,255,0.10)",
    variants: [
      { dot: "#1F2937", bgCard: "#1F2937", textColor: "#ffffff", subColor: "rgba(255,255,255,0.6)", accent: "#1F2937" },
      { dot: "#0F766E", bgCard: "#0F766E", textColor: "#ffffff", subColor: "rgba(255,255,255,0.6)", accent: "#0F766E" },
      { dot: "#D4AF37", bgCard: "#D4AF37", textColor: "#111827", subColor: "rgba(17,24,39,0.6)", accent: "#D4AF37" },
      { dot: "#6B7280", bgCard: "#6B7280", textColor: "#ffffff", subColor: "rgba(255,255,255,0.6)", accent: "#6B7280" },
      { dot: "#991B1B", bgCard: "#991B1B", textColor: "#ffffff", subColor: "rgba(255,255,255,0.6)", accent: "#991B1B" },
    ],
  },
];

const tabs = ["All Cards", "Premium Cards", "Matte Cards", "Glossy Cards"];

export default function CardShowcase() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeColors, setActiveColors] = useState<Record<string, number>>({});
  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <section
      className="py-16 md:py-24"
      style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", background: "#ffffff" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        /* ── Mobile: horizontal scroll ── */
        .cards-container {
          display: flex;
          flex-direction: row;
          align-items: stretch;
          gap: 20px;
          padding: 0 0 40px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
        }
        .card-wrap {
          width: 300px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          scroll-snap-align: center;
        }

        /* ── Tablet: 2-col grid ── */
        @media (min-width: 768px) {
          .cards-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
            padding: 0 0 40px;
            overflow-x: visible;
            scroll-snap-type: none;
          }
          .card-wrap {
            width: 100%;
            max-width: 100%;
            flex-shrink: unset;
            scroll-snap-align: none;
          }
        }

        /* ── Desktop: 4-col grid ── */
        @media (min-width: 1024px) {
          .cards-container {
            grid-template-columns: repeat(4, 1fr);
            gap: 28px;
          }
        }

        .gray-box { transition: background 0.3s ease; }
        .gray-box:hover { background: #EBEBEB !important; }
        .biz-card { transition: transform 0.5s cubic-bezier(0.23,1,0.32,1), box-shadow 0.5s ease; }
        .biz-card:hover { transform: perspective(800px) rotateY(-5deg) rotateX(2deg) scale(1.04); box-shadow: 24px 24px 56px rgba(0,0,0,0.28) !important; }
        .color-dot { transition: transform 0.2s ease, box-shadow 0.2s ease; cursor: pointer; border-radius: 50%; }
        .color-dot:hover { transform: scale(1.15); }
        .shimmer-layer { position: absolute; inset: 0; background: linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.14) 50%, transparent 65%); background-size: 200% 100%; animation: shimmer 3.5s ease-in-out infinite; pointer-events: none; border-radius: inherit; }
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        .spec-row { display: flex; align-items: center; gap: 12px; font-size: 14px; color: #9CA3AF; font-weight: 500; }
        .tab-pill { border: none; cursor: pointer; font-weight: 700; font-size: 15px; padding: 10px 28px; border-radius: 99px; transition: all 0.25s ease; font-family: inherit; }
        .carousel-arrow {
          position: absolute;
          top: 33%; transform: translateY(-50%);
          width: 48px; height: 48px;
          background: rgba(17,17,17,0.6); backdrop-filter: blur(8px);
          border: none; cursor: pointer; color: #fff;
          display: flex; align-items: center; justify-content: center;
          z-index: 50; transition: all 0.2s ease;
        }
        .arrow-right { right: 0; border-top-left-radius: 99px; border-bottom-left-radius: 99px; }
        .arrow-left  { left: 0;  border-top-right-radius: 99px; border-bottom-right-radius: 99px; }
        .carousel-arrow:hover { background: rgba(17,17,17,0.8) !important; }
        @media (max-width: 767px) { .carousel-arrow { width: 40px; height: 40px; top: 25%; } }
        @media (min-width: 768px) { .carousel-arrow { display: none !important; } }
      `}</style>

      {/* ── wider wrapper: 1400px so 4 cards have more breathing room ── */}
      <div style={{ maxWidth: 1400, marginLeft: "auto", marginRight: "auto", paddingLeft: 32, paddingRight: 32 }}>

        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h2 style={{
            fontSize: "clamp(34px, 4vw, 48px)",
            fontWeight: 700, color: "#111827",
            letterSpacing: "-0.02em", lineHeight: 1.1,
            margin: "0 0 40px 0",
          }}>
            Design Your NFC Business Card
          </h2>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {tabs.map((tab, i) => (
              <button
                key={tab}
                className="tab-pill"
                onClick={() => setActiveTab(i)}
                style={{
                  background: activeTab === i ? "#005AD1" : "#F5F5F5",
                  color: activeTab === i ? "#ffffff" : "#374151",
                  boxShadow: activeTab === i ? "0 8px 24px rgba(0,102,255,0.3)" : "none",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* ── Cards ── */}
        <div style={{ position: "relative" }}>
          <div ref={scrollRef} className="no-scrollbar cards-container">
            {cards.map((card) => {
              const selColor = activeColors[card.id] ?? 0;
              const cv = card.variants[selColor] || card.variants[0];
              return (
                <div key={card.id} className="card-wrap">

                  {/* Visual box */}
                  <div className="gray-box" style={{
                    width: "100%", aspectRatio: "1/1",
                    background: "#F2F2F2", borderRadius: 32,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    padding: "clamp(24px, 8%, 48px)",
                    marginBottom: 32, boxSizing: "border-box",
                  }}>
                    <div className="biz-card" style={{
                      width: "100%", aspectRatio: "1.58/1",
                      borderRadius: 16,
                      background: cv.bgCard,
                      position: "relative", overflow: "hidden",
                      boxShadow: "0 20px 50px rgba(0,0,0,0.20)",
                      display: "flex", flexDirection: "column",
                      alignItems: "center", justifyContent: "center",
                      padding: "clamp(16px, 5%, 28px)",
                      boxSizing: "border-box",
                    }}>
                      <div className="shimmer-layer" />

                      {card.woodGrain && (
                        <div style={{
                          position: "absolute", inset: 0, pointerEvents: "none",
                          backgroundImage: "repeating-linear-gradient(88deg, transparent, transparent 4px, rgba(0,0,0,0.035) 4px, rgba(0,0,0,0.035) 5px)",
                        }} />
                      )}

                      {card.id === "parallels" && (
                        <svg style={{ position: "absolute", inset: 0, pointerEvents: "none", width: "100%", height: "100%", opacity: 0.15 }} preserveAspectRatio="none" viewBox="0 0 100 100">
                          <line x1="50" y1="0" x2="100" y2="100" stroke="#D4AF37" strokeWidth="1" />
                          <line x1="0" y1="100" x2="50" y2="0" stroke="#D4AF37" strokeWidth="1" />
                        </svg>
                      )}

                      {card.isCustom && (
                        <div style={{ position: "absolute", top: 14, right: 14, fontSize: 10, fontWeight: 900, color: "#ffffff", fontStyle: "italic" }}>
                          Connecxa
                        </div>
                      )}

                      <div style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
                        <div style={{ fontWeight: 900, fontSize: "clamp(16px, 3vw, 20px)", color: cv.textColor, letterSpacing: "0.2em" }}>
                          {card.title}
                        </div>
                        <div style={{ fontSize: "clamp(8px, 1.5vw, 11px)", fontWeight: 700, color: cv.subColor, letterSpacing: "0.3em", marginTop: 6, textTransform: "uppercase", opacity: 0.8 }}>
                          {card.sub}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Color dots */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 24 }}>
                    {card.variants.map((v, ci) => (
                      <div
                        key={ci}
                        className="color-dot"
                        onClick={() => setActiveColors((prev) => ({ ...prev, [card.id]: ci }))}
                        style={{
                          width: 26, height: 26,
                          background: v.dot,
                          border: v.hasBorder ? "2px solid #E5E7EB" : "2px solid transparent",
                          boxShadow: selColor === ci ? `0 0 0 2px #fff, 0 0 0 4px #22c55e` : "0 1px 3px rgba(0,0,0,0.15)",
                        }}
                      />
                    ))}
                  </div>

                  {/* Name & price */}
                  <div style={{ textAlign: "center", marginBottom: 24 }}>
                    <h3 style={{ fontSize: 26, fontWeight: 700, color: "#111827", margin: "0 0 6px 0" }}>{card.name}</h3>
                    <p style={{ fontSize: 18, fontWeight: 600, color: "#9CA3AF", margin: 0 }}>{card.price}</p>
                  </div>

                  {/* Specs */}
                  <div style={{ paddingTop: 24, borderTop: "1px solid #F3F4F6", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
                    <div className="spec-row">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></svg>
                      {card.material}
                    </div>
                    <div className="spec-row">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                      {card.printing}
                    </div>
                    <div className="spec-row" style={{ opacity: 0.8 }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                      Lifetime Usage
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          <button className="carousel-arrow arrow-left" onClick={() => scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" })} aria-label="Scroll left">
            <span style={{ fontSize: 24, fontWeight: 300, marginRight: -4 }}>‹</span>
          </button>
          <button className="carousel-arrow arrow-right" onClick={() => scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" })} aria-label="Scroll right">
            <span style={{ fontSize: 24, fontWeight: 300, marginLeft: -4 }}>›</span>
          </button>
        </div>

        {/* View all */}
        <div style={{ marginTop: 56, display: "flex", justifyContent: "center" }}>
          <Link href="/shop/products" style={{ textDecoration: "none" }}>
            <button style={{
              display: "flex", alignItems: "center", gap: 10,
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15, color: "#111827",
            }}>
              View All Products →
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}