"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "How does Connecxa work?",
    answer:
      "Connecxa is a smart digital business card that uses NFC technology and QR codes. Simply tap your Connecxa card on any smartphone or scan the QR code — your contact details, social links, and portfolio are instantly shared. No app needed on the receiving end.",
  },
  {
    question: "Why should I use Connecxa?",
    answer:
      "Connecxa eliminates the hassle of carrying, printing, and running out of paper cards. It's eco-friendly, always up to date, and makes a lasting impression. Update your details anytime without needing a new card.",
  },
  {
    question: "How is Connecxa better than a traditional business card?",
    answer:
      "Unlike paper cards that get lost or thrown away, Connecxa is reusable, sustainable, and interactive. You can share unlimited information — videos, links, portfolios — and track how many people viewed your profile.",
  },
  {
    question: "What is a Smart Digital Name Card?",
    answer:
      "A Smart Digital Name Card like Connecxa is a physical card embedded with NFC technology. When tapped against a phone, it instantly opens your digital profile — no app or internet required on the recipient's device.",
  },
  {
    question: "What can I display on my Connecxa Card?",
    answer:
      "You can display your name, job title, company, phone number, email, website, social media profiles, portfolio links, videos, and even a payment link — all fully customisable from your Connecxa dashboard.",
  },
  {
    question: "How does the pricing work?",
    answer:
      "Connecxa offers flexible plans for individuals and teams. You pay once for the physical card, and choose a subscription plan for advanced features like analytics, multiple profiles, and team management.",
  },
  {
    question: "How long will it take to receive my Connecxa card?",
    answer:
      "Standard delivery takes 5–7 business days. Express shipping options are available at checkout. For bulk corporate orders, please contact our team for lead times.",
  },
  {
    question: "Are bulk discounts available for companies?",
    answer:
      "Yes! Connecxa offers special pricing for bulk orders of 10 cards and above. Reach out to our team via the Contact Us page and we'll put together a custom quote for your organisation.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <>
      <style>{`
        .faq-section {
          background: #FFFFFF;
          padding: 100px 40px;
          font-family: 'DM Sans', 'Helvetica Neue', sans-serif;
        }

        .faq-inner {
          max-width: 1300px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 360px 1fr;
          gap: 80px;
          align-items: start;
        }

        /* LEFT */
        .faq-left {
          position: sticky;
          top: 120px;
        }

        .faq-heading {
          font-size: clamp(36px, 4.5vw, 48px);
          font-weight: 800;
          color: #111;
          line-height: 1.1;
          margin-bottom: 0;
          letter-spacing: -0.03em;
        }

        .faq-heading-blue {
          color: #2563EB;
          display: block;
        }

        .faq-heading-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 4px;
        }

        .faq-see-all {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 32px;
          font-size: 18px;
          font-weight: 700;
          color: #2563EB;
          text-decoration: none;
          transition: all 0.2s;
        }

        .faq-see-all:hover {
          gap: 12px;
          color: #1D4ED8;
        }

        .faq-deco {
          margin-top: 60px;
          display: flex;
          align-items: flex-end;
          gap: 0px;
          line-height: 1;
          user-select: none;
          opacity: 0.8;
        }

        .faq-deco-exclaim {
          font-size: 120px;
          font-weight: 900;
          color: #2563EB;
          line-height: 1;
          letter-spacing: -8px;
        }

        .faq-deco-question {
          font-size: 120px;
          font-weight: 900;
          color: #60A5FA;
          line-height: 1;
        }

        /* RIGHT */
        .faq-list {
          display: flex;
          flex-direction: column;
        }

        .faq-item {
          border-bottom: 1.5px solid #F3F4F6;
        }

        .faq-item:first-child {
          border-top: 1.5px solid #F3F4F6;
        }

        .faq-question {
          width: 100%;
          background: none;
          border: none;
          padding: 28px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          cursor: pointer;
          text-align: left;
          font-family: inherit;
          font-size: 19px;
          font-weight: 700;
          color: #111;
          transition: all 0.2s;
        }

        .faq-question:hover {
          color: #2563EB;
          padding-left: 8px;
        }

        .faq-question.open {
          color: #2563EB;
        }

        .faq-chevron {
          flex-shrink: 0;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #F3F4F6;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .faq-question.open .faq-chevron {
          background: #2563EB;
          transform: rotate(90deg);
        }

        .faq-chevron svg {
          transition: stroke 0.2s;
        }

        .faq-question.open .faq-chevron svg {
          stroke: #fff;
        }

        .faq-answer {
          overflow: hidden;
          max-height: 0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .faq-answer.open {
          max-height: 400px;
        }

        .faq-answer-inner {
          padding: 0 0 32px;
          font-size: 17px;
          color: #4B5563;
          line-height: 1.7;
          max-width: 700px;
        }

        @media (max-width: 1024px) {
          .faq-section {
            padding: 80px 24px;
          }
          .faq-inner {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .faq-left {
            position: static;
          }
          .faq-heading {
            font-size: 38px;
          }
          .faq-deco {
            display: none;
          }
        }
      `}</style>

      <section className="faq-section">
        <div className="faq-inner">

          {/* LEFT */}
          <div className="faq-left">
            <h2 className="faq-heading">
             Everything you need,
              <div className="faq-heading-row">
                <span className="faq-heading-blue"> explained</span>
                <span style={{ fontSize: 36 }}> 🙋</span>
              </div>
            </h2>

            <a href="/faqs" className="faq-see-all">
              See all FAQs →
            </a>

            <div className="faq-deco" aria-hidden="true">
              <span className="faq-deco-exclaim">!</span>
              <span className="faq-deco-question">?</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div className="faq-item" key={i}>
                <button
                  className={`faq-question ${openIndex === i ? "open" : ""}`}
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                >
                  {faq.question}
                  <div className="faq-chevron">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#4B5563"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>
                </button>
                <div className={`faq-answer ${openIndex === i ? "open" : ""}`}>
                  <p className="faq-answer-inner">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}