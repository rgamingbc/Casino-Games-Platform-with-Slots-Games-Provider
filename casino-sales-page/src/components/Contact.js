import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import emailConfig from '../config/emailConfig';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Check if EmailJS is configured
      if (!emailConfig.userID || !emailConfig.serviceID || !emailConfig.templateID || 
          emailConfig.userID === 'YOUR_EMAILJS_USER_ID') {
        setSubmitStatus('Email service not configured yet. Please contact us directly at inforgbc13@gmail.com or via Telegram @rgamingbc');
        return;
      }

      // Template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Not provided',
        message: formData.message,
        to_email: 'inforgbc13@gmail.com',
        subject: `Business Inquiry from ${formData.name} - ${formData.company || 'Casino Gaming Platform'}`
      };

      // Send email using EmailJS
      await emailjs.send(
        emailConfig.serviceID, 
        emailConfig.templateID, 
        templateParams, 
        emailConfig.userID
      );
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
      
      setSubmitStatus('Message sent successfully! We will get back to you soon.');
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      
      // Provide specific error messages
      if (error.status === 400) {
        setSubmitStatus('Invalid email configuration. Please contact us directly at inforgbc13@gmail.com');
      } else if (error.status === 401) {
        setSubmitStatus('Email service authentication failed. Please contact us via Telegram @rgamingbc');
      } else {
        setSubmitStatus('Unable to send message at the moment. Please contact us directly at inforgbc13@gmail.com or Telegram @rgamingbc');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <p className="section-subtitle">
          Ready to partner with a leading gaming platform provider? Contact our team for comprehensive gaming solutions.
        </p>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <h4>Business Email</h4>
                <p>inforgbc13@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">💬</span>
              <div>
                <h4>24/7 Support</h4>
                <p>Live Chat Available</p>
                <p>Customer Service Hotline</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🤝</span>
              <div>
                <h4>Partnerships</h4>
                <p>Revenue Share up to 60%</p>
                <p>White Label Solutions</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🔒</span>
              <div>
                <h4>Security & Compliance</h4>
                <p>Licensed Gaming Provider</p>
                <p>Responsible Gaming Certified</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  name="company"
                  placeholder="Company Name" 
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message"
                  placeholder="Tell us about your project" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Opening Email...' : 'Send Message'}
              </button>
              {submitStatus && (
                <div className={`submit-status ${submitStatus.includes('Error') ? 'error' : 'success'}`}>
                  {submitStatus}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
