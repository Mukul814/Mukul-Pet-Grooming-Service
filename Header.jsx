import React, { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <span>🐾 Mukul's Pet Grooming</span>
        </div>
        
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
          <a href="#services" onClick={() => scrollToSection('services')}>Services</a>
          <a href="#staff" onClick={() => scrollToSection('staff')}>Our Team</a>
          <a href="#reviews" onClick={() => scrollToSection('reviews')}>Reviews</a>
          <a href="#contact" onClick={() => scrollToSection('contact')}>Book Now</a>
          <a href="#contact-us" onClick={() => scrollToSection('contact-us')}>Contact</a>
        </nav>
        
        <div className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;