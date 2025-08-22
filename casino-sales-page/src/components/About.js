import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Our Platform</h2>
            <p>
              We are a leading provider of comprehensive online betting solutions, offering 
              a complete suite of gaming products including Sports Betting, Live Casino, 
              Slots, Poker, and specialized gaming systems. Our platform maintains the 
              highest standards of security and responsible gaming.
            </p>
            <p>
              As official premium partners with top gaming providers like Pragmatic Play, 
              Microgaming, Evolution Gaming, and CMD368, we deliver world-class gaming 
              experiences with competitive odds and the highest RTP rates in the industry.
            </p>
            <div className="stats">
              <div className="stat">
                <h3>500+</h3>
                <p>Slot Games</p>
              </div>
              <div className="stat">
                <h3>60%</h3>
                <p>Revenue Share</p>
              </div>
              <div className="stat">
                <h3>24/7</h3>
                <p>Live Support</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <span className="placeholder-icon">🎲</span>
              <p>Gaming Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
