"use client";

import React, { useState } from "react";

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState("General");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const categories = [
    { name: "All", icon: "📋" },
    { name: "General", icon: "📁" },
    { name: "Corporate", icon: "🏢" },
    { name: "Features & Usage", icon: "⚙️" },
    { name: "Order & Shipping", icon: "🛒" },
    { name: "Payments", icon: "💳" },
  ];

  const faqs = [
    {
      category: "General",
      question: "What is a Smart Digital Name Card?",
      answer: "A Connecxa Smart Digital Name Card is a modern way to share your contact information, social links, and more using NFC technology or a QR code. Just a tap on a smartphone instantly transfers your details."
    },
    {
      category: "General",
      question: "What can I display on my Smart Digital Name Card?",
      answer: "You can display your name, title, company, profile photo, social media links (LinkedIn, Instagram, etc.), website URLs, files, and even payment links."
    },
    {
      category: "General",
      question: "How does Connecxa work?",
      answer: "Connecxa uses Near Field Communication (NFC) technology. When someone taps their phone on your card, your digital profile opens in their web browser instantly. No app is required for the recipient."
    },
    {
      category: "General",
      question: "How is Connecxa better than a traditional name card?",
      answer: "Unlike paper cards, Connecxa is eco-friendly, never runs out, and allows you to update your information in real-time. It also provides analytics on how many people viewed your profile."
    },
    {
      category: "General",
      question: "Why should I use Connecxa?",
      answer: "Connecxa helps you stand out, makes networking more efficient, and ensures you never lose a connection because someone lost your paper card."
    },
    {
      category: "General",
      question: "How secured and safe is my data?",
      answer: "Your data is encrypted and stored securely. You have full control over what information you share and can deactivate your card at any time."
    },
    {
      category: "Corporate",
      question: "Are bulk discounts available for companies?",
      answer: "Yes, we offer corporate discounts for bulk orders starting from 10 cards. Please contact our sales team for a custom quote."
    },
    {
      category: "Corporate",
      question: "Can I get a pricing quotation for my company?",
      answer: "Absolutely. Simply reach out via our contact form or email us at sales@connecxa.com with your requirements."
    },
    {
      category: "Corporate",
      question: "Can I customise with my company's design and logo?",
      answer: "Yes, we provide full customization options for corporate orders, including your brand logo, colors, and specific employee details."
    },
    {
      category: "Corporate",
      question: "What if I don't have my own designs?",
      answer: "No problem! Our design team can help you create a professional look that aligns with your brand identity."
    },
    {
      category: "Corporate",
      question: "What is the support level provided for companies?",
      answer: "Corporate clients receive priority support and a dedicated account manager to assist with onboarding and team management."
    },
    {
      category: "Corporate",
      question: "Are there central management options for companies?",
      answer: "Yes, our Team Dashboard allows admins to manage all company cards, update employee details centrally, and track networking analytics."
    },
    {
      category: "Corporate",
      question: "How many companies are using Connecxa?",
      answer: "Hundreds of forward-thinking companies globally trust Connecxa for their professional networking needs."
    },
    {
      category: "Features & Usage",
      question: "Will Connecxa work on iOS and Android devices?",
      answer: "Yes, Connecxa works seamlessly with both iOS (iPhone 7 and newer) and NFC-enabled Android devices."
    },
    {
      category: "Features & Usage",
      question: "How do I setup my Connecxa?",
      answer: "Simply tap your card or scan the QR code to activate it, then follow the on-screen instructions to create your digital profile."
    },
    {
      category: "Features & Usage",
      question: "Can I make changes to my digital name card in the future?",
      answer: "Yes, you can update your information anytime through your dashboard, and the changes will be reflected instantly on your card."
    },
    {
      category: "Features & Usage",
      question: "Does this require an app to share?",
      answer: "No app is required for the recipient to view your profile. They simply tap or scan and it opens in their mobile browser."
    },
    {
      category: "Features & Usage",
      question: "Can I link multiple hardware products to one account?",
      answer: "Yes, you can link multiple Connecxa products (e.g., a card and a phone sticker) to a single digital profile."
    },
    {
      category: "Features & Usage",
      question: "Where does the QR code lead to?",
      answer: "The QR code leads directly to your personalized Connecxa digital profile, just like the NFC tap."
    },
    {
      category: "Features & Usage",
      question: "What is a Dynamic QR Code?",
      answer: "A Dynamic QR Code allows you to change the destination URL or content without needing to reprint the physical QR code."
    },
    {
      category: "Features & Usage",
      question: "What happens to the QR code and card after making changes?",
      answer: "Nothing! They continue to work perfectly, and anyone who scans or taps will see your updated information immediately."
    },
    {
      category: "Order & Shipping",
      question: "How do I order my own Connecxa?",
      answer: "You can order directly from our website shop. Choose your preferred material and customization options, then proceed to checkout."
    },
    {
      category: "Order & Shipping",
      question: "How long will it take to receive my order?",
      answer: "Delivery usually takes 3-7 business days for local orders and 7-14 business days for international shipping."
    },
    {
      category: "Order & Shipping",
      question: "Do you provide international shipping?",
      answer: "Yes, we ship Connecxa products worldwide. Shipping rates and times vary by location."
    },
    {
      category: "Order & Shipping",
      question: "I never got my order, what to do?",
      answer: "Please contact our support team with your order number, and we will track your shipment and resolve the issue immediately."
    },
    {
      category: "Order & Shipping",
      question: "Is there a Minimum Order Quantity (MOQ)?",
      answer: "There is no MOQ for individual cards. For custom corporate designs, the MOQ is typically 10 units."
    },
    {
      category: "Payments",
      question: "How does the pricing work?",
      answer: "We offer a one-time purchase for physical cards. Premium digital features may involve a subscription plan."
    },
    {
      category: "Payments",
      question: "Is this a one-time payment?",
      answer: "The physical card is a one-time purchase. Basic profile hosting is included for life."
    },
    {
      category: "Payments",
      question: "Are there any hidden fees?",
      answer: "No hidden fees. Any subscription costs for advanced analytics or team features are clearly stated."
    },
    {
      category: "Payments",
      question: "What are the accepted payment methods?",
      answer: "We accept all major credit cards, PayPal, and various local payment gateways depending on your region."
    }
  ];

  const filteredFaqs = faqs.filter(f => 
    (activeCategory === "All" || f.category === activeCategory) &&
    (f.question.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="faq-page" style={{ fontFamily: "DM Sans, sans-serif" }}>
      <style>{`
        .faq-page {
          background: #fff;
          min-height: 100vh;
          padding: 40px 20px 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .faq-title {
          font-size: 48px;
          font-weight: 800;
          color: #0D0D0D;
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }

        .faq-subtitle {
          font-size: 18px;
          color: #666;
        }

        .search-wrap {
          width: 100%;
          max-width: 800px;
          position: relative;
          margin-bottom: 60px;
        }

        .search-input {
          width: 100%;
          padding: 16px 24px 16px 52px;
          border-radius: 12px;
          border: 1px solid #E5E7EB;
          font-size: 16px;
          color: #111;
          outline: none;
          transition: border-color 0.2s;
        }

        .search-input:focus {
          border-color: #005AD1;
        }

        .search-icon {
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          color: #999;
        }

        .faq-container {
          width: 100%;
          max-width: 1200px;
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 60px;
        }

        /* ── Sidebar ── */
        .faq-sidebar {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .cat-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 10px;
          cursor: pointer;
          font-weight: 600;
          color: #4B5563;
          transition: all 0.2s;
        }

        .cat-item:hover {
          background: #F3F4F6;
        }

        .cat-item.active {
          background: #F3F4F6;
          color: #000;
        }

        .cat-icon {
          font-size: 18px;
        }

        /* ── Content ── */
        .faq-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .cat-heading {
          font-size: 20px;
          font-weight: 800;
          color: #111;
          margin-bottom: 12px;
        }

        .faq-item {
          border-radius: 10px;
          overflow: hidden;
          background: #005AD1;
          transition: all 0.2s;
        }

        .faq-question {
          width: 100%;
          padding: 18px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #fff;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          background: transparent;
          text-align: left;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out, padding 0.3s ease;
          background: #fff;
          color: #4B5563;
          line-height: 1.6;
        }

        .faq-item.open .faq-answer {
          max-height: 200px;
          padding: 20px 24px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        .chevron {
          transition: transform 0.3s;
        }

        .faq-item.open .chevron {
          transform: rotate(180deg);
        }

        @media (max-width: 992px) {
          .faq-page { padding: 20px 20px 60px; }
          .faq-container { grid-template-columns: 1fr; gap: 32px; }
          .faq-sidebar {
            display: flex;
            flex-direction: row;
            overflow-x: auto;
            padding-bottom: 8px;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .faq-sidebar::-webkit-scrollbar {
            display: none;
          }
          .cat-item {
            white-space: nowrap;
          }
          .faq-title { font-size: 36px; }
        }
      `}</style>

      <header className="faq-header">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <p className="faq-subtitle">Got a question? We are here to answer!</p>
      </header>

      <div className="search-wrap">
        <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input 
          type="text" 
          className="search-input" 
          placeholder="Type keyword to find your answer"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="faq-container">
        {/* Sidebar */}
        <aside className="faq-sidebar">
          {categories.map((cat, i) => (
            <div 
              key={i} 
              className={`cat-item ${activeCategory === cat.name ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.name)}
            >
              <span className="cat-icon">{cat.icon}</span>
              {cat.name}
            </div>
          ))}
        </aside>

        {/* Content */}
        <main className="faq-content">
          <h2 className="cat-heading">{activeCategory}</h2>
          
          {filteredFaqs.map((faq, i) => (
            <div key={i} className={`faq-item ${openIndex === i ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                {faq.question}
                <svg className="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div className="faq-answer">
                {faq.answer}
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}
