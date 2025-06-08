import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span>🐾 Mukul's Pet Grooming</span>
            </div>
            <p>Professional pet grooming services with love, care, and traditional Indian hospitality. Your pet's comfort and happiness is our priority.</p>
            <div className="social-links">
              <a href="#">📘</a>
              <a href="#">📷</a>
              <a href="#">🐦</a>
              <a href="#">📺</a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Our Services</h3>
            <ul>
              <li>Full Grooming Package</li>
              <li>Bath & Blow Dry</li>
              <li>Nail Trimming</li>
              <li>Teeth Cleaning</li>
              <li>Flea Treatment</li>
              <li>De-shedding Treatment</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Information</h3>
            <div className="contact-item">
              <span>📞 9003524743</span>
            </div>
            <div className="contact-item">
              <span>✉️ mukul.chauhan2022@vitstudent.ac.in</span>
            </div>
            <div className="contact-item">
              <span>📍 VIT Campus, Vellore, Tamil Nadu</span>
            </div>
          </div>

          <div className="footer-section">
            <h3>Business Hours</h3>
            <div className="hours">
              <p><strong>Monday - Saturday</strong></p>
              <p>9:00 AM - 7:00 PM</p>
              <p><strong>Sunday</strong></p>
              <p>10:00 AM - 5:00 PM</p>
            </div>
            <p className="emergency">Emergency grooming available by appointment</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Mukul's Pet Grooming | Owned by Mukul Chauhan | All rights reserved</p>
          <p>Made with ❤️ for pets and their families</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;