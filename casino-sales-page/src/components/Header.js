import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <h1>🎰 Casino Gaming Platform</h1>
          <p>Professional Slots Game Provider</p>
        </div>
        <div className="nav-links">
          <a href="#products">Products</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
