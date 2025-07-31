import React from 'react';
import './About.css';

const About = () => {
  const whatsappLink = 'https://wa.me/923001234567'; // replace with real WhatsApp number

  return (
    <div className="about-container">
      <div className="about-inner">
        {/* Welcome Section */}
        <section className="section intro">
          <h1>
            Welcome to <span className="highlight">The Mighty Groups</span>
          </h1>
          <p className="tagline">
            Bringing the travel community together — one platform, one touch away.
          </p>
          <p>
            Our mission is to create a powerful space where travel agents, businesses, and users connect seamlessly. Whether it’s group fares, advertisements, banners, or travel news — we’ve got it all in one place.
          </p>
        </section>

        {/* Features Section */}
        <section className="section features">
          <div className="cards">

            {/* Group Fare Card */}
            <div className="card">
              <div className="card-header">
                <div className="emoji">🛫</div>
                <h2>Group Fare</h2>
              </div>
              <p>
                Get access to the latest group fares across all regions — faster than anywhere else. If you’re looking to stay updated or promote your group fares, we’re here to help.
              </p>
              <div className="card-cta">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn">
                  💬 Contact for Group Fare
                </a>
              </div>
            </div>

            {/* Advertisement Card */}
            <div className="card">
              <div className="card-header">
                <div className="emoji">📢</div>
                <h2>Advertisements</h2>
              </div>
              <p>
                See the latest deals, Umrah packages, and job opportunities — before the rest. Want to advertise your own offer? Let’s showcase your services to thousands of users.
              </p>
              <div className="card-cta">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn">
                  📢 Promote Your Advertisement
                </a>
              </div>
            </div>

            {/* News Card */}
            <div className="card">
              <div className="card-header">
                <div className="emoji">📰</div>
                <h2>Travel News</h2>
              </div>
              <p>
                Stay informed with the latest updates in the travel industry — including visa policies, airline announcements, and travel guidelines — all in one place.
              </p>
              <div className="card-cta">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn">
                  🔍 Explore Travel News
                </a>
              </div>
            </div>

            {/* Banner Service Card */}
            <div className="card">
              <div className="card-header">
                <div className="emoji">🎨</div>
                <h2>Banner Creation</h2>
              </div>
              <p>
                Need a custom banner for your group fare, Umrah package, or business advertisement? We offer quick, attractive banner design services tailored to your needs.
              </p>
              <div className="card-cta">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn">
                  🖼️ Request a Banner Design
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Contact Section */}
        <section className="section promote">
          <div className="promote-wrapper">
            <div className="promote-text">
              <h2>Have Something to Promote?</h2>
              <p>
                Reach out to us for any group fare promotions, advertisements, or travel-related services. Our team is ready to help you reach a wider audience quickly and effectively.
              </p>
              <div className="buttons-row">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn outlined">
                  💬 Chat on WhatsApp
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn">
                  🚀 Get Started Now
                </a>
              </div>
            </div>
            <div className="promote-visual">
              <div className="promo-box">
                <div className="badge">Grow with Us</div>
                <p>Promote your offers. Get noticed. Expand your reach — all from one platform.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="section footer">
          <div className="social-intro">
            <p className="small-title">Follow & Connect</p>
            <h3>Stay in Touch</h3>
            <p>
              Get updates and support via our social media channels. Reach out anytime for help or to collaborate with us.
            </p>
          </div>
          <div className="social-links">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="social-pill">
              💬 WhatsApp
            </a>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-pill">
              📸 Instagram
            </a>
            <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="social-pill">
              👍 Facebook
            </a>
            <a href="mailto:support@mightygroups.com" className="social-pill">
              ✉️ Email
            </a>
          </div>
          <div className="bottom-note">
            <p>Please deal with caution and confirm all details before making any payments. The Mighty Groups is not responsible for any loss or miscommunication between parties.</p>
            <p>© {new Date().getFullYear()} The Mighty Groups. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default About;
