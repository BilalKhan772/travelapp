import React from 'react';
import './Support.css';

const Support = () => {
  return (
    <div className="support-page-wrapper">
      <div className="support-container">
        <h1 className="support-title">Need <span className="highlight">Help?</span></h1>
        <p className="support-message">
          We're here to make your journey smooth and stress-free. 
          If you're experiencing any <span className="bold">issues</span> or have <span className="bold">questions</span> regarding our services,
          don’t hesitate to reach out.
        </p>

        <div className="contact-box">
          <p><strong>Email:</strong> <a href="mailto:support@themightygroups.com">support@themightygroups.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+923271722382">+92 327 1722 382</a></p>
        </div>

        <p className="final-msg">
          Our support team typically responds within <span className="highlight">24 hours</span>. 
          Thank you for choosing <span className="brand-name">The Mighty Groups</span>!
        </p>
      </div>
    </div>
  );
};

export default Support;
