import React from 'react';

function ContactUs() {
  return (
    <section id="contact-us" className="contact-us">
      <div className="container">
        <h2>Get In Touch</h2>
        <p className="subtitle">We're here to help you and your pets</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="icon">📞</div>
              <div>
                <h3>Call Us</h3>
                <p>9003524743</p>
                <span>Available 9 AM - 7 PM</span>
              </div>
            </div>

            <div className="contact-card">
              <div className="icon">✉️</div>
              <div>
                <h3>Email Us</h3>
                <p>mukul.chauhan2022@vitstudent.ac.in</p>
                <span>We'll respond within 24 hours</span>
              </div>
            </div>

            <div className="contact-card">
              <div className="icon">📍</div>
              <div>
                <h3>Visit Us</h3>
                <p>VIT Campus, Vellore</p>
                <p>Tamil Nadu, India</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="icon">🕒</div>
              <div>
                <h3>Business Hours</h3>
                <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                <p>Sunday: 10:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>

          <div className="quick-contact">
            <h3>Quick Message</h3>
            <form className="quick-form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message" rows="5"></textarea>
              <button type="submit" className="btn-secondary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;