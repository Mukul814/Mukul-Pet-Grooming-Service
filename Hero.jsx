import React from 'react';

function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Premium Pet Grooming Services</h1>
            <p>Your furry friends deserve the best care. Professional grooming with love and traditional Indian hospitality.</p>
            <button className="btn-primary" onClick={scrollToContact}>
              Book Appointment
            </button>
            
            <div className="stats">
              <div className="stat">
                <span className="number">500+</span>
                <span className="label">Happy Pets</span>
              </div>
              <div className="stat">
                <span className="number">5+</span>
                <span className="label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="number">300+</span>
                <span className="label">Pet Parents</span>
              </div>
            </div>
          </div>
          
          <div className="hero-image">
            <img src="https://images.pexels.com/photos/6816861/pexels-photo-6816861.jpeg" alt="Happy dog being groomed" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;