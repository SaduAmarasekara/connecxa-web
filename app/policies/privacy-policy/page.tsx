import React from "react";

export default function PrivacyPolicy() {
  return (
    <>
      <style>{`
        .privacy-page {
          width: 100%;
          background-color: #FAFAF8;
          padding-top: 120px;
          padding-bottom: 96px;
          font-family: 'DM Sans', sans-serif;
          box-sizing: border-box;
        }

        .privacy-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 24px;
          box-sizing: border-box;
        }

        .privacy-title {
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 800;
          color: #111827;
          letter-spacing: -0.02em;
          margin: 0 0 16px 0;
        }

        .privacy-updated {
          font-size: 14px;
          color: #9CA3AF;
          font-weight: 500;
          margin: 0 0 48px 0;
        }

        .privacy-body {
          color: #4B5563;
          line-height: 1.8;
          font-size: 16px;
        }

        .privacy-body p {
          margin: 0 0 24px 0;
        }

        .privacy-section {
          margin-bottom: 48px;
        }

        .privacy-section-title {
          font-size: 22px;
          font-weight: 800;
          color: #111827;
          margin: 0 0 16px 0;
          letter-spacing: -0.01em;
        }

        .privacy-list {
          list-style: none;
          padding: 0;
          margin: 0 0 24px 0;
        }

        .privacy-list li {
          position: relative;
          padding-left: 24px;
          margin-bottom: 12px;
          line-height: 1.7;
        }

        .privacy-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 10px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #111827;
        }

        .privacy-link {
          color: #111827;
          font-weight: 700;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .privacy-link:hover {
          color: #374151;
          text-decoration: underline;
        }

        .privacy-highlight {
          background: #F3F4F6;
          border-left: 4px solid #111827;
          padding: 20px 24px;
          border-radius: 0 12px 12px 0;
          margin: 24px 0;
          font-weight: 500;
          color: #111827;
        }

        @media (max-width: 600px) {
          .privacy-page {
            padding-top: 96px;
            padding-bottom: 64px;
          }

          .privacy-container {
            padding: 0 16px;
          }

          .privacy-section-title {
            font-size: 19px;
          }
        }
      `}</style>

      <main className="privacy-page">
        <div className="privacy-container">
          <h1 className="privacy-title">Privacy Policy</h1>

          <p className="privacy-updated">
            Last updated: May 2026
          </p>

          <div className="privacy-body">
            <p>
              This Privacy Policy describes how Connecxa Pte. Ltd.
              (“we”, “us”, or “our”) collects, uses, and protects
              your personal information when you interact with our
              websites, including www.connecxa.com and our associated
              platforms. This policy applies to personal data
              collected through shopping, account registration, and
              use of our services.
            </p>

            {/* What Information We Collect */}
            <section className="privacy-section">
              <h2 className="privacy-section-title">
                What Information We Collect
              </h2>

              <p>
                When you visit our websites, we automatically collect
                certain information about your device, including your
                IP address, web browser, time zone, and cookies
                installed on your device. We also collect information
                about how you interact with our site, such as pages
                viewed, referring websites, and products or services
                you are interested in. This information is referred to
                as “Device Information.”
              </p>

              <p>
                When you make a purchase, create an account, or use
                our platform, we may collect the following
                information:
              </p>

              <ul className="privacy-list">
                <li>Name, email address, and phone number</li>
                <li>Billing and shipping addresses</li>
                <li>Payment information</li>
                <li>Company name, profile image, and job title</li>
                <li>Social media links and profile handles</li>
                <li>
                  Information stored in your digital business card or
                  team management platform
                </li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section className="privacy-section">
              <h2 className="privacy-section-title">
                How We Use Your Information
              </h2>

              <p>
                We use your information for the following purposes:
              </p>

              <ul className="privacy-list">
                <li>Process orders and payments</li>
                <li>Deliver products and provide order updates</li>
                <li>Create and manage your digital business card</li>
                <li>
                  Provide customer support and respond to inquiries
                </li>
                <li>Improve and personalize user experience</li>
                <li>
                  Send promotional and marketing communications
                  (only with your consent)
                </li>
                <li>Prevent fraud and improve security</li>
                <li>
                  Comply with legal and regulatory obligations
                </li>
              </ul>
            </section>

            {/* Sharing Your Information */}
            <section className="privacy-section">
              <h2 className="privacy-section-title">
                Sharing Your Information
              </h2>

              <p>
                We may share your personal information with trusted
                third-party service providers who help us operate our
                website, e-commerce services, payment processing
                systems, cloud infrastructure, and communication
                tools.
              </p>

              <div className="privacy-highlight">
                We do not sell, trade, or rent your personal
                information to third parties.
              </div>

              <p>
                We may also disclose your information when required by
                law or in response to valid legal requests, including
                subpoenas, court orders, or government investigations.
              </p>
            </section>

            {/* Your Rights */}
            <section className="privacy-section">
              <h2 className="privacy-section-title">
                Your Rights
              </h2>

              <p>
                If you are located in the European Union or regions
                with similar data protection laws, you may have the
                right to:
              </p>

              <ul className="privacy-list">
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Object to certain data processing activities</li>
                <li>Request data portability</li>
              </ul>

              <p>
                To exercise these rights, please contact us at{" "}
                <a
                  href="mailto:hello@connecxa.com"
                  className="privacy-link"
                >
                  hello@connecxa.com
                </a>
              </p>
            </section>

            {/* Data Retention */}
            <section className="privacy-section">
              <h2 className="privacy-section-title">
                Data Retention
              </h2>

              <p>
                We retain your personal information only for as long
                as necessary to fulfill the purposes described in this
                Privacy Policy. When you delete your account or
                request data removal, we follow secure deletion
                procedures. Certain information, such as transaction
                or order records, may be retained for legal,
                accounting, or compliance purposes.
              </p>
            </section>

            {/* Data Security */}
            <section className="privacy-section">
              <h2 className="privacy-section-title">
                Data Security
              </h2>

              <p>
                We take appropriate technical and organizational
                measures to protect your personal information from
                unauthorized access, disclosure, misuse, or loss.
                These measures include:
              </p>

              <ul className="privacy-list">
                <li>Secure cloud infrastructure</li>
                <li>Role-based access control</li>
                <li>AES-256 encryption standards</li>
                <li>Regular security monitoring and updates</li>
              </ul>

              <p>
                While we strive to protect your information, no method
                of electronic transmission or storage is completely
                secure.
              </p>
            </section>

            {/* Cookies and Tracking */}
            <section className="privacy-section">
              <h2 className="privacy-section-title">
                Cookies and Tracking
              </h2>

              <p>
                We use cookies, pixels, and similar tracking
                technologies to improve website functionality,
                analyze traffic, and enhance user experience. You can
                manage or disable cookies through your browser
                settings.
              </p>

              <p>
                Please note that we do not currently respond to
                “Do Not Track” browser signals.
              </p>
            </section>

            {/* Children */}
            <section className="privacy-section">
              <h2 className="privacy-section-title">
                Children
              </h2>

              <p>
                Our services are not intended for children under the
                age of 13, and we do not knowingly collect personal
                information from children.
              </p>
            </section>

            {/* Updates */}
            <section className="privacy-section">
              <h2 className="privacy-section-title">
                Updates to This Policy
              </h2>

              <p>
                We may update this Privacy Policy from time to time
                to reflect changes in our practices, technologies,
                legal requirements, or operational needs. Any updates
                will be posted on this page with the revised effective
                date.
              </p>
            </section>

            {/* Contact */}
            <section className="privacy-section">
              <h2 className="privacy-section-title">
                Contact Us
              </h2>

              <p>
                If you have any questions about this Privacy Policy
                or how we handle your personal data, please contact
                us at{" "}
                <a
                  href="mailto:hello@connecxa.com"
                  className="privacy-link"
                >
                  hello@connecxa.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}