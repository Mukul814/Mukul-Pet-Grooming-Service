import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Staff from './components/Staff';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Staff />
      <Reviews />
      <Contact />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;