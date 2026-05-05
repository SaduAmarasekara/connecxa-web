"use client";

import Link from "next/link";
import CardShowcase from "@/components/CardShowcase";
import NutshellFeatures from "@/components/NutshellFeatures";
import FAQ from "@/components/FAQ";
import PurchaseSteps from "@/components/PurchaseSteps";
import CorporateBranding from "@/components/CorporateBranding";

export default function ShopPage() {
  return (
    <div
      className="min-h-screen flex flex-col bg-white overflow-x-hidden"
      style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}
    >
      <main className="w-full flex flex-col items-center py-6 lg:py-8">
        <div className="w-full max-w-[1600px] px-6 lg:px-12">
          {/* Blue Hero Card */}
          <div
            className="relative flex flex-col lg:flex-row items-center lg:items-stretch overflow-hidden bg-white text-[#111827] rounded-[32px] md:rounded-[48px] w-full"
            style={{
              minHeight: "auto",
              paddingTop: "clamp(40px,5vw,80px)",
              paddingLeft: "clamp(20px,5vw,80px)",
              paddingRight: "clamp(20px,5vw,80px)",
              background: "linear-gradient(180deg, #FFFFFF 0%, #F0F7FF 100%)",
            }}
          >
            {/* Background effects */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#005AD1]/3 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#005AD1]/3 rounded-full blur-[120px] pointer-events-none" />

            {/* ── Left Column ── */}
            <div className="z-10 flex flex-col justify-center items-center lg:items-start text-center lg:text-left w-full lg:w-[clamp(320px,42%,580px)] shrink-0 pb-12 lg:pb-20 lg:pr-0">
              <div className="inline-flex items-center gap-2 bg-white border border-[#005AD1]/10 rounded-full px-5 py-2 text-[13px] font-bold tracking-[0.12em] uppercase text-[#005AD1] mb-6 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#005AD1] animate-pulse" />
                NFC Business Cards
              </div>

              <h1
                style={{
                  fontSize: "clamp(42px,4.5vw,72px)",
                  fontWeight: 900,
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  color: "#111827",
                  marginBottom: 24,
                }}
              >
                Your Smartest
                <br className="hidden lg:block" />
                Business Card Yet
              </h1>

              <p
                style={{
                  fontSize: "clamp(15px,1.4vw,20px)",
                  color: "#4B5563",
                  lineHeight: 1.65,
                  fontWeight: 500,
                  maxWidth: 460,
                  marginBottom: 40,
                }}
              >
                Modernise your networking with a single tap - share socials,
                links, and contacts instantly.
              </p>

              <Link href="/shop/products" className="no-underline">
                <button
                  style={{
                    background: "#005AD1",
                    color: "#fff",
                    fontSize: 18,
                    fontWeight: 800,
                    borderRadius: 50,
                    padding: "16px 36px",
                    border: "none",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    width: "fit-content",
                    boxShadow: "0 8px 28px rgba(0,90,209,0.25)",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 14px 36px rgba(0,90,209,0.35)";
                    e.currentTarget.style.background = "#0047AB";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 28px rgba(0,90,209,0.25)";
                    e.currentTarget.style.background = "#005AD1";
                  }}
                >
                  Customise Now <span style={{ fontSize: 20 }}>→</span>
                </button>
              </Link>
            </div>

            {/* ── Right Column ── */}
            <div className="flex-1 relative flex items-end justify-center z-10 w-full min-h-[420px] sm:min-h-[500px] lg:min-h-[580px] mt-10 lg:mt-0 lg:pr-0 pb-10 lg:pb-0 scale-[0.8] sm:scale-100 origin-bottom">
              {/* ── Phone Shell ── */}
              <div
                style={{
                  position: "relative",
                  width: 272,
                  height: 560,
                  background: "#ffffff",
                  borderRadius: 44,
                  border: "7px solid #F3F4F6",
                  boxShadow:
                    "0 40px 90px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,1)",
                  overflow: "hidden",
                  zIndex: 20,
                  flexShrink: 0,
                  marginBottom: 0,
                }}
              >
                {/* Dynamic island */}
                <div
                  style={{
                    position: "absolute",
                    top: 10,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 88,
                    height: 22,
                    background: "#000",
                    borderRadius: 20,
                    zIndex: 30,
                  }}
                />

                {/* Screen */}
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "#ffffff",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Hero photo content */}
                  <div
                    style={{
                      width: "100%",
                      height: 168,
                      position: "relative",
                      flexShrink: 0,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(135deg,#f8f4f0 0%,#f0e8e0 40%,#e8d8c8 100%)",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "55%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        padding: "12px 14px 12px 8px",
                        gap: 5,
                      }}
                    >
                      {[
                        "FILTER COFFEE",
                        "ESPRESSO",
                        "SINGLE ORIGIN",
                        "MACCHIATO",
                        "FLAT WHITE",
                        "CAPPUCCINO",
                        "LATTE",
                      ].map((t, i) => (
                        <div
                          key={i}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: 4,
                          }}
                        >
                          <div
                            style={{
                              height: 2.5,
                              flex: 1,
                              background: "rgba(0,0,0,0.15)",
                              borderRadius: 2,
                            }}
                          />
                          <div
                            style={{
                              height: 2.5,
                              width: 16,
                              background: "rgba(0,0,0,0.1)",
                              borderRadius: 2,
                              flexShrink: 0,
                            }}
                          />
                        </div>
                      ))}
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(180deg,transparent 0%,rgba(0,0,0,0.05) 100%)",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: 36,
                        right: 12,
                        width: 34,
                        height: 34,
                        background: "rgba(255,255,255,1)",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                        borderRadius: 9,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 5,
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="7" height="7" rx="1" />
                        <rect x="14" y="3" width="7" height="7" rx="1" />
                        <rect x="14" y="14" width="7" height="7" rx="1" />
                        <rect x="3" y="14" width="7" height="7" rx="1" />
                      </svg>
                    </div>

                    {/* Profile avatar */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 18,
                        width: 72,
                        height: 72,
                        borderRadius: "50%",
                        background: "#f3f4f6",
                        border: "3px solid #fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 10,
                        overflow: "hidden",
                        transform: "translateY(15px)",
                      }}
                    >
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="#cbd5e1">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  </div>

                  {/* Profile Details */}
                  <div style={{ flex: 1, padding: "24px 18px 18px", display: "flex", flexDirection: "column", gap: 20 }}>
                    <div>
                      <div style={{ fontSize: 18, fontWeight: 800, color: "#111827", letterSpacing: "-0.01em" }}>Gerald P.</div>
                      <div style={{ fontSize: 11, fontWeight: 600, color: "#6b7280", marginTop: 2, textTransform: "uppercase", letterSpacing: "0.02em" }}>Entrepreneur | Coffee Roaster</div>

                      <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
                        <div style={{ width: 32, height: 32, background: "#f3f4f6", borderRadius: "50%", display: "flex", alignItems: "center", justifyCenter: "center" }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        </div>
                        <div style={{ width: 32, height: 32, background: "#f3f4f6", borderRadius: "50%", display: "flex", alignItems: "center", justifyCenter: "center" }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                        </div>
                      </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      {["Monthly Specials Menu", "Reserve a table", "Coffee Roasters"].map((t, i) => (
                        <div key={i} style={{ width: "100%", padding: "13px 14px", background: "#f9fafb", border: "1px solid #f3f4f6", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#005AD1" }} />
                            <span style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>{t}</span>
                          </div>
                          <span style={{ fontSize: 12, color: "#9ca3af" }}>›</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Home bar */}
                  <div style={{ width: 56, height: 4, background: "rgba(0,0,0,0.1)", borderRadius: 2, margin: "8px auto" }} />
                </div>
              </div>

              {/* Side hardware buttons */}
              <div style={{ position: "absolute", right: "calc(50% - 136px)", top: 130, width: 3, height: 38, background: "#F3F4F6", borderRadius: 2, zIndex: 19 }} />
              <div style={{ position: "absolute", left: "calc(50% - 136px)", top: 120, width: 3, height: 28, background: "#F3F4F6", borderRadius: 2, zIndex: 19 }} />
              <div style={{ position: "absolute", left: "calc(50% - 136px)", top: 158, width: 3, height: 28, background: "#F3F4F6", borderRadius: 2, zIndex: 19 }} />

              {/* ── Floating Orange NFC Card ── */}
              <div
                className="absolute right-4 lg:right-[clamp(30px,6%,80px)] bottom-[50px] lg:bottom-[70px] w-[200px] sm:w-[248px] h-[130px] sm:h-[158px] rounded-[20px] shadow-[0_24px_60px_rgba(0,0,0,0.15)] p-4 z-30 flex flex-col justify-between cursor-pointer transition-transform duration-300 hover:-translate-y-1.5 hover:scale-105"
                style={{ background: "linear-gradient(145deg,#e8632a 0%,#c84e18 100%)" }}
              >
                <div style={{ position: "absolute", top: 12, right: 14, opacity: 0.5 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2">
                    <path d="M4.9 19.1C3.1 17.3 2 14.8 2 12c0-2.8 1.1-5.3 2.9-7.1" />
                    <path d="M8.4 15.6c-.9-.9-1.5-2.2-1.5-3.6 0-1.4.6-2.7 1.5-3.6" />
                    <path d="M12 12h.01" />
                    <path d="M15.6 15.6c.9-.9 1.5-2.2 1.5-3.6 0-1.4-.6-2.7-1.5-3.6" />
                    <path d="M19.1 19.1c1.8-1.8 2.9-4.3 2.9-7.1 0-2.8-1.1-5.3-2.9-7.1" />
                  </svg>
                </div>

                <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 100, height: 100, borderRadius: "50%", border: "2px solid rgba(0,0,0,0.1)", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ position: "absolute", top: 7, fontSize: 7, fontWeight: 900, color: "rgba(0,0,0,0.3)", letterSpacing: "0.2em", textTransform: "uppercase" }}>· CONNECXA ·</div>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.4)" strokeWidth="2" strokeLinecap="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                    <div style={{ position: "absolute", bottom: 8, fontSize: 7, fontWeight: 900, color: "rgba(0,0,0,0.3)", letterSpacing: "0.15em", textTransform: "uppercase" }}>PREMIUM</div>
                  </div>
                </div>

                <div style={{ fontSize: 9, fontWeight: 700, color: "rgba(0,0,0,0.4)", letterSpacing: "0.12em", textTransform: "uppercase" }}>NFC ENABLED</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="w-full h-24 lg:h-32 bg-white" />
      <NutshellFeatures />
      <div className="w-full h-24 lg:h-32 bg-white" />
      <CardShowcase />
      <div className="w-full h-24 lg:h-32 bg-white" />
      <PurchaseSteps />
      <div className="w-full h-24 lg:h-32 bg-white" />
      <CorporateBranding />
      <div className="w-full h-24 lg:h-32 bg-white" />
      <FAQ />
      <div className="w-full h-24 lg:h-32 bg-white" />
    </div>
  );
}