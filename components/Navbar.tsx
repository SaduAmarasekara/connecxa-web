"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Shop", hasDropdown: true },
  { label: "Features", hasDropdown: true },
  { label: "For Companies", hasDropdown: true },
  { label: "Contact Us", hasDropdown: false },
  { label: "Resources", hasDropdown: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartCount] = useState(2);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
        
        .navbar-root { font-family: 'DM Sans', 'Helvetica Neue', sans-serif; }

        /* Banner */
        .top-banner {
          background: #0f172a;
          color: #fff;
          padding: 10px 16px;
          text-align: center;
          font-size: 13px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          position: relative;
          z-index: 60;
          letter-spacing: 0.01em;
        }
        .banner-pill {
          background: rgba(255,255,255,0.1);
          border-radius: 99px;
          padding: 2px 12px;
          font-size: 12px;
          font-weight: 700;
          color: rgba(255,255,255,0.85);
          border: 1px solid rgba(255,255,255,0.15);
          margin-left: 8px;
        }

        /* Nav wrapper */
        .nav-wrapper {
          position: sticky;
          top: 0;
          z-index: 50;
          width: 100%;
          transition: box-shadow 0.3s ease, background 0.3s ease, padding 0.3s ease;
        }
        .nav-wrapper.scrolled {
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 1px 0 rgba(0,0,0,0.06), 0 8px 32px rgba(0,0,0,0.06);
        }
        .nav-wrapper.top {
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        /* Inner */
        .nav-inner {
          max-width: 1600px;
          margin: 0 auto;
          padding: 20px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          transition: padding 0.3s ease;
        }
        .nav-inner.scrolled { padding: 14px 40px; }

        /* Logo */
        .logo-wrap {
          position: relative;
          height: 72px;
          width: 220px;
          flex-shrink: 0;
          transition: transform 0.25s ease;
          display: block;
        }
        .logo-wrap:hover { transform: scale(1.02); }

        /* Desktop links */
        .desktop-links {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .nav-link {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 8px 14px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 700;
          color: #1f2937;
          cursor: pointer;
          transition: background 0.18s ease, color 0.18s ease;
          white-space: nowrap;
          text-decoration: none;
          border: none;
          background: none;
          font-family: inherit;
        }
        .nav-link:hover { background: #f3f4f6; color: #0066FF; }
        .nav-link .chevron {
          font-size: 10px;
          opacity: 0.45;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }
        .nav-link:hover .chevron { opacity: 0.8; transform: translateY(1px); }

        /* Divider */
        .nav-divider {
          width: 1px;
          height: 20px;
          background: #e5e7eb;
          margin: 0 8px;
          flex-shrink: 0;
        }

        /* Action buttons */
        .actions { display: flex; align-items: center; gap: 12px; }

        .btn-demo {
          font-family: inherit;
          font-size: 15px;
          font-weight: 700;
          color: #0066FF;
          background: transparent;
          border: 2px solid #0066FF;
          border-radius: 99px;
          padding: 10px 28px;
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        .btn-demo:hover {
          background: #0066FF;
          color: #ffffff;
          box-shadow: 0 6px 24px rgba(0,102,255,0.3);
          transform: translateY(-1px);
        }
        .btn-demo:active { transform: scale(0.97); }

        .btn-login {
          font-family: inherit;
          font-size: 15px;
          font-weight: 700;
          color: #ffffff;
          background: #0066FF;
          border: none;
          border-radius: 99px;
          padding: 10px 28px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.25s ease;
          white-space: nowrap;
          box-shadow: 0 4px 16px rgba(0,102,255,0.3);
        }
        .btn-login:hover {
          background: #0052cc;
          box-shadow: 0 8px 28px rgba(0,102,255,0.4);
          transform: translateY(-1px);
        }
        .btn-login:active { transform: scale(0.97); }
        .btn-login .arrow { transition: transform 0.22s ease; }
        .btn-login:hover .arrow { transform: translateX(3px); }

        /* Cart button */
        .cart-btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          cursor: pointer;
          color: #374151;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }
        .cart-btn:hover { background: #eff6ff; border-color: #bfdbfe; color: #0066FF; }
        .cart-badge {
          position: absolute;
          top: -4px;
          right: -4px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #FF5C00;
          color: #fff;
          font-size: 10px;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #fff;
        }

        /* Hamburger */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 8px;
          border-radius: 10px;
          border: 1px solid #e5e7eb;
          background: #f9fafb;
          transition: all 0.2s ease;
        }
        .hamburger:hover { background: #eff6ff; border-color: #bfdbfe; }
        .ham-line {
          width: 22px;
          height: 2px;
          background: #374151;
          border-radius: 2px;
          transition: all 0.25s ease;
        }
        .hamburger.open .ham-line:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.open .ham-line:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.open .ham-line:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* Mobile menu */
        .mobile-menu {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: #ffffff;
          z-index: 49;
          display: flex;
          flex-direction: column;
          padding: 120px 32px 40px;
          transform: translateX(100%);
          transition: transform 0.35s cubic-bezier(0.23,1,0.32,1);
          overflow-y: auto;
        }
        .mobile-menu.open { transform: translateX(0); }
        .mobile-nav-link {
          font-size: 22px;
          font-weight: 700;
          color: #111827;
          padding: 16px 0;
          border-bottom: 1px solid #f3f4f6;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-decoration: none;
          cursor: pointer;
          transition: color 0.2s ease;
        }
        .mobile-nav-link:hover { color: #0066FF; }

        @media (max-width: 1100px) { .desktop-links { display: none; } .nav-divider { display: none; } }
        @media (max-width: 640px) { .btn-demo { display: none; } .nav-inner { padding: 14px 20px; } .nav-inner.scrolled { padding: 10px 20px; } .logo-wrap { width: 160px; height: 56px; } }
        @media (max-width: 1100px) { .hamburger { display: flex; } }
      `}</style>

      <div className="navbar-root">
        {/* ── Top Banner ── */}
        <div className="top-banner">
          <span>🌍</span>
          <span>Free Worldwide Shipping for orders above S$100</span>
          <span>🚀</span>
          <span className="banner-pill">Limited Offer</span>
        </div>

        {/* ── Nav ── */}
        <div className={`nav-wrapper ${scrolled ? "scrolled" : "top"}`}>
          <div className={`nav-inner ${scrolled ? "scrolled" : ""}`}>
            {/* Left: Logo + Links */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Link href="/" className="logo-wrap">
                <Image
                  src="/logo.jpeg"
                  alt="OneGoodCard / Connecxa Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </Link>

              <div className="nav-divider" style={{ marginLeft: 24 }} />

              <div className="desktop-links">
                {navLinks.map((link) => (
                  <button key={link.label} className="nav-link">
                    {link.label}
                    {link.hasDropdown && <span className="chevron">▼</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Actions */}
            <div className="actions">
              <button className="btn-demo">Get a Demo</button>

              <button className="btn-login">
                Log In
                <span className="arrow">→</span>
              </button>

              <div className="nav-divider" />

              {/* Cart */}
              <button className="cart-btn" aria-label="Shopping cart">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                {cartCount > 0 && (
                  <span className="cart-badge">{cartCount}</span>
                )}
              </button>

              {/* Hamburger */}
              <div
                className={`hamburger ${mobileOpen ? "open" : ""}`}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <div className="ham-line" />
                <div className="ham-line" />
                <div className="ham-line" />
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
              marginBottom: 40,
            }}
          >
            {navLinks.map((link) => (
              <div key={link.label} className="mobile-nav-link">
                {link.label}
                {link.hasDropdown && (
                  <span style={{ fontSize: 13, opacity: 0.4 }}>▼</span>
                )}
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
              marginTop: "auto",
            }}
          >
            <button
              style={{
                fontFamily: "inherit",
                fontSize: 16,
                fontWeight: 700,
                color: "#0066FF",
                background: "transparent",
                border: "2px solid #0066FF",
                borderRadius: 99,
                padding: "14px 28px",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Get a Demo
            </button>
            <button
              style={{
                fontFamily: "inherit",
                fontSize: 16,
                fontWeight: 700,
                color: "#ffffff",
                background: "#0066FF",
                border: "none",
                borderRadius: 99,
                padding: "14px 28px",
                cursor: "pointer",
                width: "100%",
                boxShadow: "0 6px 24px rgba(0,102,255,0.3)",
              }}
            >
              Log In →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
