import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: '💰',
      title: 'Affiliate Program',
      description: 'Monetize your website through our revenue-sharing model with up to 60% commission rates.',
      points: ['Revenue sharing up to 60%', 'Easy integration process', 'Dedicated affiliate support']
    },
    {
      id: 2,
      icon: '🛡️',
      title: 'Security & Privacy',
      description: 'We maintain the highest standards for personal data protection and security protocols.',
      points: ['Data protection compliance', 'Encrypted transactions', 'Secure gaming environment']
    },
    {
      id: 3,
      icon: '🎯',
      title: 'Responsible Gaming',
      description: 'Committed to supporting responsible gaming with comprehensive player protection measures.',
      points: ['Player protection tools', 'Trained support staff', 'Gambling awareness programs']
    },
    {
      id: 4,
      icon: '📱',
      title: 'Telegram Demo',
      description: 'Get instant access to our platform demo and business inquiries via Telegram.',
      points: ['Instant demo access', 'Direct business contact', 'Quick response support']
    },
    {
      id: 5,
      icon: '🎁',
      title: 'Promotions & Bonuses',
      description: 'Attractive promotional offers specially crafted to enhance the gaming experience.',
      points: ['Welcome bonuses', 'Regular promotions', 'VIP reward programs']
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <h2>Platform Features</h2>
        <p className="section-subtitle">
          Comprehensive solutions designed for operators and players
        </p>
        <div className="features-grid">
          {features.map(feature => (
            <div 
              key={feature.id} 
              className={`feature-card ${feature.id === 4 ? 'telegram-card' : ''}`}
              onClick={feature.id === 4 ? () => window.open('https://t.me/rgamingbc', '_blank') : undefined}
              style={feature.id === 4 ? { cursor: 'pointer' } : {}}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <ul className="feature-points">
                {feature.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              {feature.id === 4 && (
                <div className="telegram-contact">
                  <strong>@rgamingbc</strong>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
