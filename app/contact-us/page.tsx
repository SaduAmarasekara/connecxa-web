"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import TestermonialsContact from "@/components/testermonialscontact";
import FAQSectionContact from "@/components/Faqsectioncontact";
import TrustedBy from "@/components/TrustedBy";

const slides = [
  {
    image: "/contact-hero-1.png",
    quote: "Connecxa shows that we're thinking ahead — always finding innovative ways to make experiences better.",
    author: "Daniel Joshua Lee",
    role: "Creative Director"
  },
  {
    image: "/contact-hero-2.png",
    quote: "Connecxa has made networking simpler for us. This has significantly enhanced our networking and client relationships.",
    author: "Clane Chai",
    role: "Business Development"
  },
  {
    image: "/contact-hero-3.png",
    quote: "Connecxa provides a seamless way to share our digital identity instantly. It's an essential tool for modern professionals.",
    author: "Alex Rivera",
    role: "Marketing Manager"
  }
];

export default function ContactUsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="contact-page-wrapper">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap');
        


        .contact-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 40px 32px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 80px;
          align-items: flex-start;
        }

        /* ── LEFT SIDE: FORM ── */
        .contact-left {
          display: flex;
          flex-direction: column;
        }

        .contact-heading {
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 800;
          color: #111;
          margin-bottom: 16px;
          letter-spacing: -0.03em;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .contact-subtitle {
          font-size: clamp(16px, 1.8vw, 18px);
          color: #555;
          margin-bottom: 48px;
          font-weight: 400;
          line-height: 1.6;
        }

        .form-grid {
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 100%;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .field-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .field-group label {
          font-size: 14px;
          font-weight: 700;
          color: #333;
        }

        .field-group label .req {
          color: #ef4444;
          margin-left: 2px;
        }

        .field-group input,
        .field-group select,
        .field-group textarea {
          width: 100%;
          padding: 14px 18px;
          border: 1.5px solid #E5E7EB;
          border-radius: 12px;
          font-family: inherit;
          font-size: 15px;
          color: #111;
          background: #fff;
          transition: all 0.2s ease;
          outline: none;
        }

        .field-group input:focus,
        .field-group select:focus,
        .field-group textarea:focus {
          border-color: #2563EB;
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
        }

        .field-group input::placeholder,
        .field-group textarea::placeholder {
          color: #9CA3AF;
        }

        .submit-btn {
          margin-top: 12px;
          padding: 16px 32px;
          background: linear-gradient(135deg, #1D4ED8 0%, #2563EB 100%);
          color: #fff;
          border: none;
          border-radius: 99px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3);
          text-align: center;
          width: 100%;
          max-width: 200px;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
          background: linear-gradient(135deg, #1e40af 0%, #1D4ED8 100%);
        }

        /* ── RIGHT SIDE: VISUAL SLIDER ── */
        .contact-right {
          position: sticky;
          top: 120px;
          height: auto;
        }

        .visual-card {
          background: #fff;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.05);
          border: 1px solid #F3F4F6;
          position: relative;
        }

        .visual-image-container {
          position: relative;
          width: 100%;
          height: 520px;
          overflow: hidden;
        }

        .visual-image {
          position: absolute;
          inset: 0;
          transition: opacity 1s ease-in-out, transform 1s ease-in-out;
          opacity: 0;
          transform: scale(1.05);
        }

        .visual-image.active {
          opacity: 1;
          transform: scale(1);
        }

        .visual-content {
          padding: 32px;
          background: #fff;
          min-height: 180px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .quote-container {
          transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
          opacity: 0;
          transform: translateY(10px);
          display: none;
        }

        .quote-container.active {
          opacity: 1;
          transform: translateY(0);
          display: block;
        }

        .quote-text {
          font-size: 18px;
          line-height: 1.6;
          color: #374151;
          font-style: italic;
          margin-bottom: 20px;
        }

        .quote-author {
          display: flex;
          flex-direction: column;
        }

        .author-name {
          font-weight: 700;
          color: #111;
          font-size: 15px;
        }

        .author-role {
          color: #6B7280;
          font-size: 13px;
        }

        .slider-dots {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 10;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: #fff;
          width: 24px;
          border-radius: 4px;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1100px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 64px;
            padding: 40px 24px;
          }
          .contact-right {
            position: static;
            max-width: 700px;
            margin: 0 auto;
          }
          .contact-left {
            align-items: center;
            text-align: center;
          }
          .contact-heading {
            justify-content: center;
          }
          .submit-btn {
            margin: 12px auto 0;
          }
        }

        @media (max-width: 640px) {
          .contact-page-wrapper {
            padding-top: 100px;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
          .contact-heading {
            font-size: 36px;
          }
          .visual-image-container {
            height: 360px;
          }
          .visual-content {
            padding: 24px;
          }
          .quote-text {
            font-size: 16px;
          }
        }
      `}</style>

      <div className="contact-container">
        {/* Left: Form */}
        <div className="contact-left">
          <h1 className="contact-heading">
            Contact Us <span style={{ fontSize: "0.8em" }}>💬</span>
          </h1>
          <p className="contact-subtitle">
            Have something in mind? We&apos;re here to make it happen.
          </p>

          <form className="form-grid" onSubmit={(e) => e.preventDefault()}>
            <div className="field-group">
              <label htmlFor="name">
                Name <span className="req">*</span>
              </label>
              <input type="text" id="name" placeholder="Your name" required />
            </div>

            <div className="field-group">
              <label htmlFor="email">
                Email <span className="req">*</span>
              </label>
              <input type="email" id="email" placeholder="Your email address" required />
            </div>

            <div className="form-row">
              <div className="field-group">
                <label htmlFor="number">Number</label>
                <input type="tel" id="number" placeholder="Your contact number" />
              </div>
              <div className="field-group">
                <label htmlFor="method">
                  Preferred Contact Method <span className="req">*</span>
                </label>
                <select id="method" required>
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="whatsapp">WhatsApp</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="field-group">
                <label htmlFor="type">
                  Enquiry Type <span className="req">*</span>
                </label>
                <select id="type" required>
                  <option value="bulk">Bulk order (10 and above)</option>
                  <option value="individual">Individual order</option>
                  <option value="corporate">Corporate Gifting</option>
                  <option value="support">Technical Support</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
              <div className="field-group">
                <label htmlFor="quantity">Quantity (For Bulk enquiries only)</label>
                <input type="number" id="quantity" defaultValue={1} min={1} />
              </div>
            </div>

            <div className="field-group">
              <label htmlFor="message">
                Message <span className="req">*</span>
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Enter your message"
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>

        {/* Right: Animated Slider */}
        <div className="contact-right">
          <div className="visual-card">
            <div className="visual-image-container">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`visual-image ${index === currentSlide ? "active" : ""}`}
                >
                  <Image
                    src={slide.image}
                    alt="Connecxa Testimonial"
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}
              <div className="slider-dots">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`dot ${index === currentSlide ? "active" : ""}`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
            <div className="visual-content">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`quote-container ${index === currentSlide ? "active" : ""}`}
                >
                  <p className="quote-text">&ldquo;{slide.quote}&rdquo;</p>
                  <div className="quote-author">
                    <span className="author-name">{slide.author}</span>
                    <span className="author-role">{slide.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-24 lg:h-32 bg-white" />
      <TrustedBy />

      <div className="w-full h-24 lg:h-32 bg-white" />
      <TestermonialsContact />
      <div className="w-full h-24 lg:h-32 bg-white" />
      <FAQSectionContact />
      <div className="w-full h-24 lg:h-32 bg-white" />
    </div>
  );
}
