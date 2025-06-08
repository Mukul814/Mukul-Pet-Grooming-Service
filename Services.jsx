import React from 'react';

function Services() {
  const services = [
    {
      name: 'Full Grooming',
      price: '₹800 - ₹1500',
      duration: '2-3 hours',
      description: 'Complete grooming package including bath, haircut, nail trimming, and ear cleaning'
    },
    {
      name: 'Bath & Blow Dry',
      price: '₹400 - ₹800',
      duration: '1-2 hours',
      description: 'Premium shampoo bath with conditioning and professional blow drying'
    },
    {
      name: 'Nail Trimming',
      price: '₹200 - ₹300',
      duration: '30 minutes',
      description: 'Safe and gentle nail trimming to keep your pet comfortable'
    },
    {
      name: 'Teeth Cleaning',
      price: '₹300 - ₹500',
      duration: '45 minutes',
      description: 'Professional dental care to maintain your pet\'s oral health'
    },
    {
      name: 'Flea Treatment',
      price: '₹500 - ₹700',
      duration: '1 hour',
      description: 'Effective flea and tick treatment with safe, pet-friendly products'
    },
    {
      name: 'De-shedding',
      price: '₹600 - ₹900',
      duration: '1.5 hours',
      description: 'Specialized treatment to reduce shedding and maintain coat health'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Premium Services</h2>
        <p className="subtitle">Professional pet grooming services for your furry family members</p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.name}</h3>
              <p className="description">{service.description}</p>
              <div className="service-info">
                <span className="price">{service.price}</span>
                <span className="duration">{service.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;