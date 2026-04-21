"use client";
import Link from "next/link";

const quickLinks = [
  "Get your One Good Card",
  "Be our Affiliate!",
  "Send a Gift Card",
  "One Good Ring",
  "Contact Us",
  "User Login",
];

const policies = [
  "Terms of Service",
  "Privacy Policy",
  "Product Policy",
  "Shipping Policy",
];

const resources = [
  "Compatible Devices",
  "Free Invoice Generator",
  "Free QR Code Generator",
  "Free Email Verification Tool",
  "Commission Calculator",
  "All Free Business Tools",
];

const company = ["About Us", "Our Commitments"];

const features = [
  "Fully Customisable",
  "Lifetime Updates",
  "AES-256 Encryption",
  "Certified CSA-Compliant",
  "iOS and Android",
];

const socials = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
        .footer-link { color: #6B7280; font-size: 15px; font-weight: 500; text-decoration: none; transition: color 0.2s ease; display: inline-flex; align-items: center; gap: 6px; }
        .footer-link:hover { color: #ffffff; }
        .footer-link:hover .link-arrow { opacity: 1; transform: translateX(0); }
        .link-arrow { opacity: 0; transform: translateX(-4px); transition: all 0.2s ease; font-size: 12px; }
        .cta-demo-btn { border: 2px solid rgba(255,255,255,0.8); color: #ffffff; background: transparent; border-radius: 99px; padding: 14px 48px; font-size: 16px; font-weight: 700; cursor: pointer; transition: all 0.25s ease; font-family: inherit; min-width: 190px; }
        .cta-demo-btn:hover { border-color: #ffffff; background: rgba(255,255,255,0.12); }
        .cta-main-btn { background: #ffffff; color: #0066FF; border: none; border-radius: 99px; padding: 14px 48px; font-size: 16px; font-weight: 700; cursor: pointer; transition: all 0.25s ease; font-family: inherit; min-width: 190px; box-shadow: 0 16px 40px rgba(0,0,0,0.2); }
        .cta-main-btn:hover { background: #f0f0f0; transform: translateY(-2px); box-shadow: 0 20px 48px rgba(0,0,0,0.28); }
        .cta-main-btn:active { transform: scale(0.97); }
        .feature-pill { display: flex; align-items: center; gap: 10px; font-size: 15px; font-weight: 700; color: #ffffff; white-space: nowrap; }
        .social-btn { display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.1); color: #6B7280; text-decoration: none; transition: all 0.22s ease; }
        .social-btn:hover { border-color: #FF5C00; color: #FF5C00; background: rgba(255,92,0,0.08); transform: translateY(-2px); }
        .divider-dot { width: 4px; height: 4px; border-radius: 50%; background: rgba(255,255,255,0.2); }
        .bottom-link { color: #4B5563; font-size: 13px; font-weight: 500; text-decoration: none; transition: color 0.2s ease; }
        .bottom-link:hover { color: #9CA3AF; }
      `}</style>

      {/* ── Blue CTA Section ── */}
      <div
        style={{
          background: "#0066FF", // original: bg-[#0066FF]
          color: "#ffffff",
          padding: "80px 24px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 350,
          boxSizing: "border-box",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle radial glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(255,255,255,0.08) 0%, transparent 70%)",
          }}
        />

        <h2
          style={{
            fontSize: "clamp(36px, 6vw, 68px)",
            fontWeight: 800,
            textAlign: "center",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            maxWidth: 1000,
            margin: "0 0 40px 0",
            position: "relative",
          }}
        >
          Ready to level up your networking?
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
            marginBottom: 56,
            position: "relative",
          }}
        >
          <button className="cta-demo-btn">Get a Demo</button>
          <button className="cta-main-btn">Customise Now</button>
        </div>

        {/* Feature pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px 40px",
            maxWidth: 1100,
            width: "100%",
            position: "relative",
          }}
        >
          {features.map((f, i) => (
            <div key={f} className="feature-pill">
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.2)",
                  flexShrink: 0,
                }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              {f}
              {i < features.length - 1 && (
                <span className="divider-dot" style={{ marginLeft: 20 }} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Black Footer Section ── */}
      <div
        style={{
          background: "#111111", // original: bg-[#111111]
          color: "#ffffff",
          padding: "80px 24px 0",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          {/* Brand + Links Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "48px 40px",
              paddingBottom: 64,
            }}
          >
            {/* Brand Column */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
                gridColumn: "span 1",
              }}
            >
              {/* Logo mark */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 4,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: "#0066FF", // original blue
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                  >
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                </div>
                <span
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: "#ffffff",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Connecxa
                </span>
              </div>

              <p
                style={{
                  fontSize: 14,
                  color: "#6B7280",
                  lineHeight: 1.7,
                  margin: 0,
                  maxWidth: 220,
                }}
              >
                The smart NFC business card built for modern professionals.
              </p>

              {/* Socials */}
              <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
                {socials.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    className="social-btn"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <h3
                style={{
                  color: "#FF5C00",
                  fontSize: 18,
                  fontWeight: 700,
                  margin: 0,
                  letterSpacing: "-0.01em",
                }}
              >
                Quick Links
              </h3>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 14 }}
              >
                {quickLinks.map((l) => (
                  <Link key={l} href="#" className="footer-link">
                    {l}
                    <span className="link-arrow">→</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Policies */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <h3
                style={{
                  color: "#FF5C00",
                  fontSize: 18,
                  fontWeight: 700,
                  margin: 0,
                  letterSpacing: "-0.01em",
                }}
              >
                Policies
              </h3>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 14 }}
              >
                {policies.map((l) => (
                  <Link key={l} href="#" className="footer-link">
                    {l}
                    <span className="link-arrow">→</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <h3
                style={{
                  color: "#FF5C00",
                  fontSize: 18,
                  fontWeight: 700,
                  margin: 0,
                  letterSpacing: "-0.01em",
                }}
              >
                Resources
              </h3>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 14 }}
              >
                {resources.map((l) => (
                  <Link key={l} href="#" className="footer-link">
                    {l}
                    <span className="link-arrow">→</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Company */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <h3
                style={{
                  color: "#FF5C00",
                  fontSize: 18,
                  fontWeight: 700,
                  margin: 0,
                  letterSpacing: "-0.01em",
                }}
              >
                Company
              </h3>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 14 }}
              >
                {company.map((l) => (
                  <Link key={l} href="#" className="footer-link">
                    {l}
                    <span className="link-arrow">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.07)",
              padding: "32px 0 16px",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 32,
            }}
          >
            {/* Payment Methods (Left) */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
              {[
                { name: "AMEX", bg: "#227BBC", color: "white" },
                { name: "Apple Pay", bg: "black", color: "white" },
                { name: "G Pay", bg: "white", color: "#5F6368" },
                { name: "Mastercard", bg: "#FF5F00", color: "white" },
                { name: "PayPal", bg: "#00457C", color: "white" },
                { name: "Shop", bg: "#5A31F4", color: "white" },
                { name: "UnionPay", bg: "#007CBA", color: "white" },
                { name: "VISA", bg: "#1A1F71", color: "white" }
              ].map(pay => (
                <div key={pay.name} style={{ background: pay.bg, color: pay.color, fontSize: "11px", fontWeight: "bold", padding: "4px 8px", borderRadius: "3px", display: "flex", alignItems: "center", justifyItems: "center", height: "24px", letterSpacing: "0.5px" }}>
                  {pay.name}
                </div>
              ))}
            </div>

            {/* Social & Copyright (Right) */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "16px" }}>
              {/* Social Icons row */}
              <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                {/* Facebook */}
                <a href="#" className="hover:-translate-y-1 transition-transform" style={{ color: "white" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                {/* Pinterest */}
                <a href="#" className="hover:-translate-y-1 transition-transform" style={{ color: "white" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.163 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.627 0 11.985-5.365 11.985-11.987C23.97 5.367 18.605 0 12.017 0z"/></svg>
                </a>
                {/* Instagram */}
                <a href="#" className="hover:-translate-y-1 transition-transform" style={{ color: "white" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                {/* YouTube */}
                <a href="#" className="hover:-translate-y-1 transition-transform" style={{ color: "white" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                {/* LinkedIn */}
                <a href="#" className="hover:-translate-y-1 transition-transform" style={{ color: "white" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                {/* TikTok */}
                <a href="#" className="hover:-translate-y-1 transition-transform" style={{ color: "white" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.68a6.34 6.34 0 0 0 6.27 6.32 6.32 6.32 0 0 0 6.21-6.32V10.4a8.11 8.11 0 0 0 4.41 1.3V8.34a5.1 5.1 0 0 1-2.3-.65z"/></svg>
                </a>
              </div>
              
              {/* Copyright Text */}
              <p style={{ fontSize: "11.5px", color: "rgba(255,255,255,0.9)", margin: 0, fontWeight: 500, letterSpacing: "0.01em" }}>
                © 2026, Connecxa   | The #1 Smart Digital Name Card for individuals and businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
