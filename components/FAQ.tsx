"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "How does Connecxa work?",
    answer:
      "Each card comes with a physical NFC business card that has a built-in wireless chip that transmits your digital name card to the receiver's devices via Near-Field Communication (NFC).",
  },
  {
    question: "Why should I use connecxa?",
    answer:
      "Connecxa offers robust networking features, built-in CRM, and is certified cyber-compliant by the CSA.",
  },
  {
    question: "What can I display on my Digital Name Card?",
    answer:
      "You can display contact details, social media links, credentials, web links, files, and visual assets.",
  },
  {
    question: "How does the pricing work?",
    answer:
      "It is a one-time payment that comes with a personalised NFC card and lifetime usage of the digital name card.",
  },
  {
    question: "Are bulk discounts available for companies?",
    answer:
      "Yes, we offer additional corporate discounts for companies looking to transition to Smart Digital Name Cards.",
  },
];

export default function FAQ({ dark = false }: { dark?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <style>{`
        .faq-section {
          width: 100%;
          display: flex;
          justify-content: center;
          background: #ffffff !important;
          background-color: #ffffff !important;
          padding: 80px 24px;
          font-family: 'DM Sans', 'Helvetica Neue', sans-serif;
          box-sizing: border-box;
          isolation: isolate;
          position: relative;
          z-index: 1;
        }

        .faq-container {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          background: transparent;
        }

        .faq-card {
          border-radius: 20px;
          padding: 56px 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 64px;
          width: 100%;
          box-sizing: border-box;
          box-shadow: none;
          border: none;
        }

        .faq-card--light {
background: linear-gradient(
  135deg,
  #009788 0%,
  #1b7aa1 45%,
  #0bafa5 100%
);

          color: #ffffff;
          border: none;
        }

        .faq-card--dark {
          background: #111111;
          color: #ffffff;
        }

        .faq-left {
          flex-shrink: 0;
          width: 260px;
          display: flex;
          flex-direction: column;
          overflow: visible;
        }

        .faq-title {
          font-size: 56px;
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1;
          margin: 0 0 20px 0;
        }

        .faq-card--light .faq-title {
          color: #ffffff;
        }

        .faq-card--dark .faq-title {
          color: #ffffff;
        }

        .faq-see-all {
          font-size: 16px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          transition: transform 0.2s ease, opacity 0.2s ease;
          opacity: 0.75;
          width: fit-content;
        }

        .faq-card--light .faq-see-all {
          color: #ffffff;
        }

        .faq-card--dark .faq-see-all {
          color: #ffffff;
        }

        .faq-see-all:hover {
          transform: translateX(4px);
          opacity: 1;
        }

        .faq-see-all-arrow {
          font-size: 18px;
          line-height: 1;
          transition: transform 0.2s ease;
        }

        .faq-see-all:hover .faq-see-all-arrow {
          transform: translateX(3px);
        }

        .faq-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .faq-item {
          width: 100%;
        }

        .faq-card--light .faq-item {
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }

        .faq-card--dark .faq-item {
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
        }

        .faq-item:last-child {
          border-bottom: none;
        }

        .faq-button {
          width: 100%;
          padding: 22px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          font-family: inherit;
          transition: opacity 0.2s ease;
        }

        .faq-card--light .faq-button {
          color: #ffffff;
        }

        .faq-card--dark .faq-button {
          color: #ffffff;
        }

        .faq-button:hover {
          opacity: 0.8;
        }

        .faq-question {
          font-size: 17px;
          font-weight: 600;
          line-height: 1.4;
          padding-right: 24px;
          letter-spacing: -0.01em;
        }

        .faq-chevron {
          flex-shrink: 0;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .faq-chevron--open {
          transform: rotate(90deg);
        }

        .faq-answer-wrapper {
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 0.3s ease;
        }

        .faq-answer-wrapper--closed {
          max-height: 0;
          opacity: 0;
        }

        .faq-answer-wrapper--open {
          max-height: 300px;
          opacity: 1;
        }

        .faq-answer {
          padding: 0 0 24px 0;
          font-size: 15px;
          line-height: 1.7;
          max-width: 90%;
        }

        .faq-card--light .faq-answer {
          color: rgba(255, 255, 255, 0.8);
        }

        .faq-card--dark .faq-answer {
          color: rgba(255, 255, 255, 0.7);
        }

        @media (max-width: 900px) {
          .faq-card {
            flex-direction: column;
            padding: 40px 36px;
            gap: 32px;
            border-radius: 16px;
          }
          .faq-left {
            width: 100%;
          }
          .faq-title {
            font-size: 44px;
            margin-bottom: 12px;
          }
        }

        @media (max-width: 580px) {
          .faq-section {
            padding: 56px 16px;
          }
          .faq-card {
            padding: 32px 24px;
            gap: 24px;
            border-radius: 14px;
          }
          .faq-title {
            font-size: 36px;
          }
          .faq-question {
            font-size: 15px;
          }
          .faq-button {
            padding: 18px 0;
          }
        }
      `}</style>

      <section className="faq-section">
        <div className="faq-container">
          <div className={`faq-card ${dark ? 'faq-card--dark' : 'faq-card--light'}`}>

            {/* Left Column */}
            <div className="faq-left">
              <h2 className="faq-title">FAQs</h2>
              <Link href="/resources/faqs" className="faq-see-all">
                See all FAQs
                <span className="faq-see-all-arrow">→</span>
              </Link>
            </div>

            {/* Right Column - Accordion */}
            <div className="faq-right">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <button
                    className="faq-button"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    <span className="faq-question">{faq.question}</span>
                    <div
                      className={`faq-chevron ${openIndex === index ? 'faq-chevron--open' : ''}`}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </div>
                  </button>

                  {/* Animated Dropdown Content */}
                  <div
                    className={`faq-answer-wrapper ${
                      openIndex === index
                        ? 'faq-answer-wrapper--open'
                        : 'faq-answer-wrapper--closed'
                    }`}
                  >
                    <p className="faq-answer">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
