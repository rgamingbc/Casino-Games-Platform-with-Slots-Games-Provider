import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🎰 Casino Gaming Platform</h3>
            <p>Premium slots game provider built with Node.js</p>
            <div className="social-links">
              <a href="https://t.me/rgamingbc" aria-label="Telegram" target="_blank" rel="noopener noreferrer">📱</a>
              <a href="https://github.com" aria-label="GitHub" target="_blank" rel="noopener noreferrer">🔗</a>
              <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">💼</a>
              <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">🐦</a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Products</h4>
            <ul>
              <li><a href="#products">Classic Slots</a></li>
              <li><a href="#products">Video Slots</a></li>
              <li><a href="#products">Megaways</a></li>
              <li><a href="#products">Tournaments</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#contact">Technical Support</a></li>
              <li><a href="#contact">Integration Help</a></li>
              <li><a href="#contact">Documentation</a></li>
              <li><a href="#contact">Live Chat</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/responsible-gaming">Responsible Gaming</a></li>
              <li><a href="/licensing">Licensing</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Casino Gaming Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
