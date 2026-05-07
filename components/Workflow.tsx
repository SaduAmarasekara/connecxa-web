"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    id: "digital-card",
    bgColor: "#E8D5F5",
    imageSrc: "/workflow-digital-card.png",
    title: "Digital Business Cards",
    description:
      "Make every impression count with a sleek, modern digital business card.",
    link: "#",
  },
  {
    id: "crm",
    bgColor: "#C8DFF8",
    imageSrc: "/workflow-crm.png",
    title: "CRM Deal Manager",
    description:
      "Track every deal in one visual pipeline, stay organised and never miss a follow-up.",
    link: "#",
  },
  {
    id: "contacts",
    bgColor: "#FFF3C4",
    imageSrc: "/workflow-contacts.png",
    title: "Contact Manager",
    description:
      "Keep your contacts organised with up-to-date details, easily accessible anytime.",
    link: "#",
  },
];

export default function Workflow() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 md:py-24 lg:py-[100px] bg-white overflow-hidden">
      <style jsx>{`
        .wf-card {
          background: #ffffff;
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1),
            box-shadow 0.3s ease;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
        }
        .wf-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.13);
        }
        .wf-img-panel {
          width: 100%;
          aspect-ratio: 16 / 11;
          position: relative;
          overflow: hidden;
        }
        .wf-learn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 15px;
          font-weight: 700;
          color: #111827;
          text-decoration: none;
          border-bottom: 2px solid transparent;
          padding-bottom: 1px;
          transition: border-color 0.2s ease, gap 0.2s ease;
        }
        .wf-learn:hover {
          border-color: #111827;
          gap: 10px;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        /* ── Mobile: carousel items ── */
        @media (max-width: 767px) {
          .workflow-container {
            display: flex !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            padding-bottom: 16px;
            gap: 16px !important;
          }
          .wf-card {
            min-width: 280px;
            max-width: 300px;
            flex-shrink: 0;
          }
        }
      `}</style>

      {/* ── Constrained wrapper — same max-width everywhere ── */}
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
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 800,
              color: "#111827",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              margin: "0 0 16px 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
              flexWrap: "wrap",
            }}
          >
            Power Your Daily Workflow
            <span style={{ fontSize: "0.85em" }}>⚡</span>
          </h2>
          <p
            style={{
              fontSize: "clamp(15px, 1.8vw, 19px)",
              color: "#6B7280",
              fontWeight: 500,
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            Modern tools to help professionals stay connected and scale smarter.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="relative">
          {/* Mobile scroll buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-800 border border-gray-100 md:hidden"
            aria-label="Scroll left"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-800 border border-gray-100 md:hidden"
            aria-label="Scroll right"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Carousel on mobile / 3-col grid on desktop */}
          <div
            ref={scrollRef}
            className="no-scrollbar workflow-container"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
          >

            {features.map((feature) => (
              <div
                key={feature.id}
                className="wf-card"
                style={{ scrollSnapAlign: "center" }}
              >
                {/* Coloured image panel */}
                <div
                  className="wf-img-panel"
                  style={{ background: feature.bgColor }}
                >
                  <Image
                    src={feature.imageSrc}
                    alt={feature.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>

                {/* Text */}
                <div style={{ padding: "28px 32px 36px" }}>
                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#111827",
                      margin: "0 0 10px 0",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      color: "#6B7280",
                      fontWeight: 400,
                      margin: "0 0 24px 0",
                      lineHeight: 1.65,
                    }}
                  >
                    {feature.description}
                  </p>
                  <Link href={feature.link} className="wf-learn">
                    Learn More{" "}
                    <span style={{ fontSize: 18, lineHeight: 1 }}>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}