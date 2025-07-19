import React from 'react';
import './About.css'; // create this CSS file

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>
          Welcome to <span className="highlight">The Mighty Groups</span>
        </h1>
        <p>
          We are <span className="bold">passionate</span> about empowering the travel community through affordable and accessible <span className="highlight">Group Ticketing</span>. 
          Whether you're a travel Agent or a business, we aim to simplify the group fare experience.
        </p>
        <p>
          Our goal is to bring travelers and travel companies together under one platform where <span className="bold">transparency</span> and <span className="bold">trust</span> matter the most.
        </p>

        <div className="advert-section">
          <h2>📢 Want to Promote Your Travel Company?</h2>
          <p>
            If you're a travel agency and want to run advertisements or increase your visibility, feel free to reach out to us on WhatsApp. We'll help you promote your offers to thousands of potential customers!
          </p>
          <a 
            href="https://wa.me/923001234567" 
            target="_blank" 
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            💬 Contact Us on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
