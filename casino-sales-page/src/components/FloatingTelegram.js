import React, { useState, useEffect } from 'react';
import './FloatingTelegram.css';

const FloatingTelegram = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    window.open('https://t.me/rgamingbc', '_blank');
  };

  return (
    <div className={`floating-telegram ${isVisible ? 'visible' : ''}`}>
      <button 
        className="telegram-float-btn" 
        onClick={handleClick}
        aria-label="Contact us on Telegram"
      >
        <div className="telegram-icon">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16l-1.61 7.594c-.121.566-.439.7-.889.437l-2.456-1.81-1.184 1.14c-.131.131-.242.242-.496.242l.176-2.498 4.552-4.114c.198-.176-.043-.275-.307-.099l-5.631 3.548-2.425-.758c-.527-.165-.537-.527.111-.78l9.478-3.655c.439-.165.825.099.681.773z"/>
          </svg>
        </div>
        <div className="telegram-text">
          <span className="telegram-label">CONTACT DEMO</span>
          <span className="telegram-handle">@rgamingbc</span>
        </div>
      </button>
      <div className="telegram-pulse"></div>
    </div>
  );
};

export default FloatingTelegram;
