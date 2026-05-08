import React from "react";

export default function ProductPolicy() {
  return (
    <>
      <style>{`
        .policy-page {
          width: 100%;
          background-color: #FAFAF8;
          padding-top: 120px;
          padding-bottom: 96px;
          font-family: 'DM Sans', sans-serif;
          box-sizing: border-box;
        }

        .policy-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 24px;
          box-sizing: border-box;
        }

        .policy-title {
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 800;
          color: #111827;
          letter-spacing: -0.02em;
          margin: 0 0 16px 0;
        }

        .policy-updated {
          font-size: 14px;
          color: #9ca3af;
          font-weight: 500;
          margin: 0 0 48px 0;
        }

        .policy-body {
          color: #4B5563;
          line-height: 1.8;
          font-size: 16px;
        }

        .policy-body p {
          margin: 0 0 24px 0;
        }

        .policy-section {
          margin-bottom: 48px;
        }

        .policy-section-title {
          font-size: 22px;
          font-weight: 800;
          color: #111827;
          margin: 0 0 16px 0;
          letter-spacing: -0.01em;
        }

        .policy-subtitle {
          font-size: 18px;
          font-weight: 700;
          color: #111827;
          margin: 24px 0 12px 0;
        }

        .policy-list {
          list-style: none;
          padding: 0;
          margin: 0 0 24px 0;
        }

        .policy-list li {
          position: relative;
          padding-left: 24px;
          margin-bottom: 12px;
          line-height: 1.7;
        }

        .policy-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 10px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #111827;
        }

        .policy-link {
          color: #111827;
          font-weight: 700;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .policy-link:hover {
          color: #374151;
          text-decoration: underline;
        }

        .policy-highlight {
          background: #f3f4f6;
          border-left: 4px solid #111827;
          padding: 20px 24px;
          border-radius: 0 12px 12px 0;
          margin: 24px 0;
          font-weight: 500;
        }

        @media (max-width: 600px) {
          .policy-page {
            padding-top: 96px;
            padding-bottom: 64px;
          }
          .policy-container {
            padding: 0 16px;
          }
          .policy-section-title {
            font-size: 19px;
          }
          .policy-subtitle {
            font-size: 16px;
          }
        }
      `}</style>

      <main className="policy-page">
        <div className="policy-container">
          <h1 className="policy-title">Product Policy</h1>
          <p className="policy-updated">Last updated: May 2026</p>

          <div className="policy-body">
            <section className="policy-section">
              <h2 className="policy-section-title">Returns</h2>

              <p>
                We offer a 14-day return policy. You may request a return within
                14 days of receiving your item.
              </p>

              <p>
                To be eligible for a return, your item must be in its original
                condition, unused, and returned in its original packaging. A
                valid e-receipt or proof of purchase is required.
              </p>

              <div className="policy-highlight">
                Returns due to change of mind after delivery are not eligible for
                refunds. Refunds are only considered if the item is defective,
                non-functional upon arrival, and has not been tampered with by
                the customer.
              </div>

              <p>
                To initiate a return, please contact us at{" "}
                <a href="mailto:hello@connecxa.com" className="policy-link">
                  hello@connecxa.com
                </a>
                . If your return request is approved, we will provide
                instructions on how and where to return the item. Items returned
                without prior approval will not be accepted.
              </p>

              <p>
                Customers are responsible for return shipping costs. Original
                shipping fees are non-refundable.
              </p>
            </section>

            <section className="policy-section">
              <h2 className="policy-section-title">Refunds</h2>

              <p>
                Once we receive and inspect your returned item, we will notify
                you regarding the status of your refund request. If approved,
                your refund will be processed to your original payment method.
              </p>

              <p>
                Please note that banks or card providers may require additional
                processing time before the refunded amount appears in your
                account.
              </p>
            </section>

            <section className="policy-section">
              <h2 className="policy-section-title">
                Damaged or Incorrect Items
              </h2>

              <p>
                Please inspect your order upon delivery. If your item is
                damaged, defective, or incorrect, contact us immediately at{" "}
                <a href="mailto:hello@connecxa.com" className="policy-link">
                  hello@connecxa.com
                </a>
                , and we will work to resolve the issue as quickly as possible.
              </p>
            </section>

            <section className="policy-section">
              <h2 className="policy-section-title">
                Lost or Misplaced Digital Cards
              </h2>

              <p>
                Connecxa is not responsible for lost or misplaced items caused by
                customer negligence. However, if you need assistance linking your
                existing Connecxa account to a newly purchased digital card or
                device, please contact us at{" "}
                <a href="mailto:hello@connecxa.com" className="policy-link">
                  hello@connecxa.com
                </a>
                , and our support team will assist you.
              </p>
            </section>

            <section className="policy-section">
              <h2 className="policy-section-title">Warranty Coverage</h2>

              <p>
                All Connecxa products, including bundled accessories and digital
                business card products, are covered by a complimentary 30-day
                limited warranty from the date of purchase. Customers may also
                choose extended warranty coverage of up to 2 years where
                applicable.
              </p>

              <p>
                This warranty covers defects in materials and workmanship under
                normal and intended use. During the warranty period, Connecxa
                may, at its discretion, repair or replace products confirmed to
                be defective.
              </p>

              <h3 className="policy-subtitle">What Is Not Covered</h3>

              <ul className="policy-list">
                <li>Damage caused by misuse or negligence</li>
                <li>Accidental or physical damage</li>
                <li>Normal wear and tear</li>
                <li>Unauthorized repairs or modifications</li>
                <li>Improper handling or storage</li>
              </ul>

              <p>
                These situations are not considered manufacturing defects and are
                therefore not covered under warranty.
              </p>

              <p>
                To submit a warranty claim, please contact{" "}
                <a href="mailto:hello@connecxa.com" className="policy-link">
                  hello@connecxa.com
                </a>{" "}
                within your warranty period and include proof of purchase, such
                as your original receipt or invoice.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
