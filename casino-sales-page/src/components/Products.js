import React from 'react';
import './Products.css';

const Products = () => {
  const products = [
    {
      id: 1,
      title: 'Sports Betting & Virtual Sports',
      description: 'Comprehensive sports coverage powered by CMD368, MaxBet',
      features: [
        { text: 'Football, Basketball, Tennis', icon: '⚽' },
        { text: 'Live Odds & Virtual Sports', icon: '📊' },
        { text: 'Major Leagues Coverage', icon: '🏆' }
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
          <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9V7L15,1L9,7V9C6.24,9 4,11.24 4,14C4,16.76 6.24,19 9,19V21L15,15L9,9H21M7.5,13A1.5,1.5 0 0,1 9,14.5A1.5,1.5 0 0,1 7.5,16A1.5,1.5 0 0,1 6,14.5A1.5,1.5 0 0,1 7.5,13M16.5,13A1.5,1.5 0 0,1 18,14.5A1.5,1.5 0 0,1 16.5,16A1.5,1.5 0 0,1 15,14.5A1.5,1.5 0 0,1 16.5,13Z"/>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Live Casino Games',
      description: 'Premium live dealers from top providers worldwide',
      features: [
        { text: 'Blackjack, Baccarat, Roulette', icon: '🃏' },
        { text: 'Celebrity Live Dealers', icon: '👨‍💼' },
        { text: 'Multiple Game Providers', icon: '🏢' }
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
          <path d="M19,17H22V19H19V17M19,10H22V16H19V10M2,17H9V19H2V17M15,13H17V16H15V13M15,10H17V12H15V10M2,10H13V16H2V10M17,7H19V9H17V7M2,7H15V9H2V7M19.31,2.9L20.72,4.31L14,11L12.59,9.59L19.31,2.9M16.83,8.83L15.41,10.24L14,8.83L15.41,7.41L16.83,8.83Z"/>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Slot Machine Games',
      description: '500+ slot games with stunning graphics and highest RTP',
      features: [
        { text: 'Pragmatic Play, Microgaming', icon: '🎮' },
        { text: 'Mobile & PC Compatible', icon: '📱' },
        { text: 'Progressive Jackpots', icon: '💰' }
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
          <path d="M9,2V4.06C9,4.06 8.93,4.94 8.26,5.5C7.25,6.72 6,8.3 6,10C6,11.7 7.25,13.28 8.26,14.5C8.93,15.06 9,15.94 9,15.94V18H15V15.94C15,15.94 15.07,15.06 15.74,14.5C16.75,13.28 18,11.7 18,10C18,8.3 16.75,6.72 15.74,5.5C15.07,4.94 15,4.06 15,4.06V2H9M10,4H14V5.08C14,5.08 14.19,5.7 14.62,6.08C15.5,6.87 16,7.94 16,10C16,12.06 15.5,13.13 14.62,13.92C14.19,14.3 14,14.92 14,14.92V16H10V14.92C10,14.92 9.81,14.3 9.38,13.92C8.5,13.13 8,12.06 8,10C8,7.94 8.5,6.87 9.38,6.08C9.81,5.7 10,5.08 10,5.08V4M12,6A4,4 0 0,0 8,10A4,4 0 0,0 12,14A4,4 0 0,0 16,10A4,4 0 0,0 12,6M10.5,8A1.5,1.5 0 0,1 12,9.5A1.5,1.5 0 0,1 10.5,11A1.5,1.5 0 0,1 9,9.5A1.5,1.5 0 0,1 10.5,8M13.5,8A1.5,1.5 0 0,1 15,9.5A1.5,1.5 0 0,1 13.5,11A1.5,1.5 0 0,1 12,9.5A1.5,1.5 0 0,1 13.5,8M19,18V22H5V18H19Z"/>
        </svg>
      )
    },
    {
      id: 4,
      title: 'Additional Gaming',
      description: 'Poker, Fishing Games, Lottery and specialized betting',
      features: [
        { text: 'Online Poker Rooms', icon: '♠️' },
        { text: 'Fishing Game Collection', icon: '🎣' },
        { text: 'Lottery Systems', icon: '🎲' }
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
          <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z M11.5,4A1,1 0 0,0 10.5,5V11A1,1 0 0,0 11.5,12A1,1 0 0,0 12.5,11V5A1,1 0 0,0 11.5,4Z M15,7H17V9H15V7M15,3H17V5H15V3M18,5H20V7H18V5Z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="products" className="products">
      <div className="container">
        <h2>Our Gaming Products</h2>
        <p className="section-subtitle">
          Discover our comprehensive suite of casino gaming solutions
        </p>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-icon">{product.icon}</div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <ul className="features-list">
                {product.features.map((feature, index) => (
                  <li key={index}>
                    <span className="feature-icon">{feature.icon}</span>
                    <span className="feature-text">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
