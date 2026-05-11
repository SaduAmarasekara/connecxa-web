"use client";

import React from "react";
import Link from "next/link";

export default function CartPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white px-4 py-20" style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}>
      <h1 className="text-[32px] md:text-[40px] font-medium text-[#111827] mb-6">
        Your cart
      </h1>
      
      <p className="text-[15px] md:text-[16px] text-[#4B5563] mb-8">
        Your cart is currently empty.
      </p>

      <Link href="/" style={{ textDecoration: 'none' }}>
        <button
          style={{
            background: "#005AD1",
            color: "#fff",
            fontSize: "17px",
            fontWeight: 700,
            borderRadius: "999px",
            padding: "16px 40px",
            border: "none",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            boxShadow: "0 8px 28px rgba(0,90,209,0.25)",
            transition: "all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
            letterSpacing: "-0.01em",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,90,209,0.4)";
            e.currentTarget.style.background = "#0048A5";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,90,209,0.25)";
            e.currentTarget.style.background = "#005AD1";
          }}
        >
          Continue Shopping <span style={{ fontSize: "20px", lineHeight: 1 }}>→</span>
        </button>
      </Link>
    </div>
  );
}
