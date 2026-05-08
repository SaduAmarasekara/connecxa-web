import React from "react";

export default function ShippingPolicy() {
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
          <h1 className="policy-title">Shipping Policy</h1>
          <p className="policy-updated">Last updated: May 2026</p>

          <div className="policy-body">
            <section className="policy-section">
              <p>
                Connecxa Pte. Ltd. (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates www.connecxa.com (the &ldquo;Website&rdquo;). By placing an order through our Website, you agree to the terms outlined in this Shipping Policy. These terms are designed to ensure transparency and a smooth delivery experience for all customers.
              </p>
            </section>

            <section className="policy-section">
              <h2 className="policy-section-title">Shipping Costs</h2>
              <p>
                Shipping costs are calculated at checkout based on the selected shipping method and delivery destination. All shipping fees are charged at the time of purchase and represent the final shipping cost payable by the customer.
              </p>
            </section>

            <section className="policy-section">
              <h2 className="policy-section-title">Order Processing &amp; Dispatch</h2>
              <p>
                Orders are generally processed and dispatched within 7–14 business days after payment confirmation. Our operations run Monday to Friday during standard business hours, excluding public holidays.
              </p>
              <p>
                While we make every effort to avoid delays, processing times may occasionally increase during peak periods, promotional campaigns, or holiday seasons.
              </p>
            </section>

            <section className="policy-section">
              <h2 className="policy-section-title">Change of Delivery Address</h2>
              <p>
                Delivery addresses may be updated at any time before the order has been dispatched. If you need to change your shipping address, please contact us as soon as possible at{" "}
                <a href="mailto:hello@connecxa.com" className="policy-link">hello@connecxa.com</a>.
              </p>
            </section>

            <section className="policy-section">
              <h2 className="policy-section-title">Out-of-Stock Items</h2>
              <p>
                If part of your order is temporarily out of stock, we may dispatch the available items first. Remaining items will be shipped once they become available, at no additional shipping cost to you.
              </p>
            </section>

            <section className="policy-section">
              <h2 className="policy-section-title">Delivery Delays</h2>
              <p>
                If your order has not arrived within the estimated delivery timeframe, please contact us at{" "}
                <a href="mailto:hello@connecxa.com" className="policy-link">hello@connecxa.com</a>{" "}
                so we can investigate the issue with our delivery partners.
              </p>
            </section>

            <section className="policy-section">
              <h2 className="policy-section-title">Damaged Parcels</h2>
              <p>
                If your parcel appears visibly damaged upon delivery, please refuse the package where possible and notify us immediately.
              </p>
              <p>
                If the parcel was delivered while you were unavailable, please take clear photographs of the packaging and contents and contact our customer support team for assistance.
              </p>
            </section>

            <section className="policy-section">
              <h2 className="policy-section-title">Duties and Taxes</h2>
              <p>
                Applicable sales taxes are already included in the prices displayed on our Website unless otherwise stated.
              </p>
            </section>

            <section className="policy-section">
              <h2 className="policy-section-title">International Import Duties &amp; Taxes</h2>
              <p>
                International orders may be subject to customs duties, import taxes, or additional charges imposed by the destination country. These charges are determined by local customs authorities and are the responsibility of the customer.
              </p>
              <p>
                If import charges are refused and the shipment is returned to us, return shipping costs and related fees may be deducted from any eligible refund.
              </p>
            </section>

            <section className="policy-section">
              <h2 className="policy-section-title">Claims for Damaged or Lost Parcels</h2>

              <h3 className="policy-subtitle">Damaged in Transit</h3>
              <p>
                Refunds or replacements for items damaged during transit will be processed once the courier investigation has been completed and approved.
              </p>

              <h3 className="policy-subtitle">Lost in Transit</h3>
              <p>
                If a parcel is officially declared lost by the courier, we will arrange either a replacement shipment or a full refund.
              </p>
            </section>

            <section className="policy-section">
              <h2 className="policy-section-title">Customer Support</h2>
              <p>
                For any shipping-related questions or concerns, please contact us at{" "}
                <a href="mailto:hello@connecxa.com" className="policy-link">hello@connecxa.com</a>. Our support team will be happy to assist you.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
