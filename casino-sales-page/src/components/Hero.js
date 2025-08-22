import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Top-Rated Casino Gaming Platform</h1>
        <p className="hero-subtitle">
          Welcome to the leading casino gaming platform provider, home to world-class gaming products including 
          Sports Betting, Online Casino, Live Casino Games, Slots, and an array of premium online betting solutions.
        </p>
        <div className="hero-features">
          <div className="feature">
            <span className="feature-icon">🎰</span>
            <h3>500+ Slot Games</h3>
            <p>Stunning graphics with highest RTP from top providers</p>
          </div>
          <div className="feature">
            <span className="feature-icon">🎲</span>
            <h3>Live Casino</h3>
            <p>Real dealers, multiple providers, authentic casino experience</p>
          </div>
          <div className="feature">
            <span className="feature-icon">⚽</span>
            <h3>Sports Betting</h3>
            <p>Comprehensive sports coverage with competitive live odds</p>
          </div>
        </div>
        <button className="cta-button">Get Started Today</button>
      </div>
    </section>
  );
};

export default Hero;
