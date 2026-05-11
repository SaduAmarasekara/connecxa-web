"use client";

import React from "react";
import Link from "next/link";

export default function FeatureContactForm() {
  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        {/* Animated background glows */}
        <div className="glow-1"></div>
        <div className="glow-2"></div>
        <div className="glow-3"></div>

        <div className="form-grid">
          {/* Left Column: Text & Social */}
          <div className="left-content">
            <div className="badge">
              <span className="badge-dot"></span>
              Contact Form
            </div>

            <h2 className="title">
              We're all ears.<br />
              Talk to us <span className="title-emoji">💬</span>
            </h2>

            <p className="description">
              Reach out to us for corporate rates and custom-branded <strong>Connecxa</strong> cards!
            </p>

            {/* Social Icons */}
            <div className="social-icons">
              <Link href="#" className="social-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.68a6.34 6.34 0 0 0 6.27 6.36 6.34 6.34 0 0 0 6.26-6.36V11.23a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-2.71-.66z"/>
                </svg>
              </Link>
              <Link href="#" className="social-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </Link>
              <Link href="#" className="social-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="right-content">
            <form className="form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label>Name <span className="required">*</span></label>
                  <input type="text" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label>Email <span className="required">*</span></label>
                  <input type="email" placeholder="Your email address" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Number</label>
                  <input type="tel" placeholder="Your contact number" />
                </div>
                <div className="form-group">
                  <label>Preferred Contact Method <span className="required">*</span></label>
                  <select required>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="whatsapp">WhatsApp</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Enquiry Type <span className="required">*</span></label>
                  <select required>
                    <option value="bulk">Bulk order (10 and above)</option>
                    <option value="individual">Individual order</option>
                    <option value="corporate">Corporate Gifting</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Quantity (For Bulk enquiries only)</label>
                  <input type="number" defaultValue={1} min={1} />
                </div>
              </div>

              <div className="form-group full-width">
                <label>Message <span className="required">*</span></label>
                <textarea rows={4} placeholder="Enter your message" required></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Submit <span className="btn-arrow">→</span>
              </button>

              <p className="terms-text">
                By submitting, you are agreeing with our <Link href="#">Terms of Service</Link> and <Link href="#">Privacy Policy</Link>
              </p>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-form-section {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(40px, 6vw, 80px) clamp(16px, 4vw, 48px);
          background: linear-gradient(145deg, #f0f4fe 0%, #e2ebf9 100%);
          font-family: 'DM Sans', 'Helvetica Neue', system-ui, -apple-system, sans-serif;
        }

        .contact-form-container {
          max-width: 1280px;
          width: 100%;
          background: #ffffff;
          border-radius: 48px;
          box-shadow: 0 30px 60px -20px rgba(0, 90, 209, 0.25), 0 0 0 1px rgba(0, 90, 209, 0.05);
          overflow: hidden;
          position: relative;
          backdrop-filter: blur(0px);
        }

        /* Animated Glows */
        .glow-1 {
          position: absolute;
          top: -15%;
          left: -8%;
          width: 40%;
          height: 40%;
          background: radial-gradient(circle, rgba(0, 90, 209, 0.12) 0%, transparent 70%);
          filter: blur(70px);
          pointer-events: none;
          border-radius: 50%;
          animation: float 8s ease-in-out infinite;
        }

        .glow-2 {
          position: absolute;
          bottom: -15%;
          right: -8%;
          width: 40%;
          height: 40%;
          background: radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, transparent 70%);
          filter: blur(70px);
          pointer-events: none;
          border-radius: 50%;
          animation: float 10s ease-in-out infinite reverse;
        }

        .glow-3 {
          position: absolute;
          top: 30%;
          right: 20%;
          width: 25%;
          height: 25%;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 70%);
          filter: blur(60px);
          pointer-events: none;
          border-radius: 50%;
          animation: pulse 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 56px;
          padding: clamp(40px, 6vw, 64px) clamp(32px, 5vw, 64px);
          position: relative;
          z-index: 2;
        }

        /* Left Column */
        .left-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, rgba(0, 90, 209, 0.1), rgba(0, 90, 209, 0.05));
          border: 1px solid rgba(0, 90, 209, 0.2);
          border-radius: 100px;
          padding: 8px 20px;
          width: fit-content;
          margin-bottom: 28px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #005AD1;
          backdrop-filter: blur(4px);
        }

        .badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #005AD1;
          display: inline-block;
          box-shadow: 0 0 6px #005AD1;
        }

        .title {
          font-size: clamp(36px, 4.5vw, 56px);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.03em;
          color: #0a2540;
          margin-bottom: 20px;
        }

        .title-emoji {
          display: inline-block;
          font-size: 0.8em;
        }

        .description {
          font-size: clamp(16px, 1.2vw, 18px);
          color: #2c4b6e;
          line-height: 1.6;
          margin-bottom: 44px;
          max-width: 440px;
          font-weight: 450;
        }

        .description strong {
          color: #005AD1;
          font-weight: 700;
          background: linear-gradient(135deg, #005AD1, #0EA5E9);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .social-icons {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .social-icon {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: linear-gradient(135deg, #005AD1 0%, #0EA5E9 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all 0.3s cubic-bezier(0.34, 1.2, 0.64, 1);
          box-shadow: 0 6px 14px rgba(0, 90, 209, 0.25);
        }

        .social-icon:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 14px 28px rgba(0, 90, 209, 0.35);
          background: linear-gradient(135deg, #0044aa 0%, #0284c7 100%);
        }

        /* Right Column - Form */
        .right-content {
          width: 100%;
        }

        .form {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group.full-width {
          grid-column: span 2;
        }

        .form-group label {
          font-size: 13px;
          font-weight: 700;
          color: #1a3a5c;
          letter-spacing: -0.01em;
        }

        .required {
          color: #005AD1;
          margin-left: 2px;
          font-weight: 800;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 15px 20px;
          border-radius: 20px;
          border: 1.5px solid #e2edf7;
          background: #ffffff;
          font-size: 15px;
          color: #0a2540;
          transition: all 0.25s ease;
          outline: none;
          font-family: 'DM Sans', 'Helvetica Neue', sans-serif;
          font-weight: 450;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: #005AD1;
          box-shadow: 0 0 0 5px rgba(0, 90, 209, 0.12);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #a0bbd9;
          font-weight: 400;
        }

        .form-group select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23005AD1' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 20px center;
          cursor: pointer;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 110px;
        }

        .submit-btn {
          margin-top: 12px;
          width: 100%;
          padding: 17px 28px;
          background: linear-gradient(135deg, #005AD1 0%, #0EA5E9 100%);
          color: white;
          font-weight: 700;
          font-size: 16px;
          border: none;
          border-radius: 60px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.3s cubic-bezier(0.34, 1.2, 0.64, 1);
          box-shadow: 0 10px 24px rgba(0, 90, 209, 0.3);
          font-family: 'DM Sans', 'Helvetica Neue', sans-serif;
        }

        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 36px rgba(0, 90, 209, 0.4);
          background: linear-gradient(135deg, #0044bb 0%, #0284c7 100%);
        }

        .btn-arrow {
          font-size: 18px;
          transition: transform 0.25s ease;
        }

        .submit-btn:hover .btn-arrow {
          transform: translateX(6px);
        }

        .terms-text {
          font-size: 12px;
          color: #5a7a9a;
          text-align: center;
          margin-top: 20px;
          font-weight: 450;
        }

        .terms-text a {
          color: #005AD1;
          text-decoration: none;
          font-weight: 600;
        }

        .terms-text a:hover {
          text-decoration: underline;
        }

        @media (max-width: 1000px) {
          .form-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .form-group.full-width {
            grid-column: span 1;
          }

          .description {
            max-width: 100%;
          }

          .left-content {
            text-align: center;
            align-items: center;
          }

          .social-icons {
            justify-content: center;
          }
        }

        @media (max-width: 640px) {
          .contact-form-container {
            border-radius: 32px;
          }

          .form-grid {
            padding: 28px 20px;
          }

          .form-group input,
          .form-group select,
          .form-group textarea {
            padding: 12px 16px;
          }

          .submit-btn {
            padding: 14px 22px;
          }

          .badge {
            margin: 0 auto 24px auto;
          }
        }
      `}</style>
    </section>
  );
}