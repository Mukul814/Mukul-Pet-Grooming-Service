import React from 'react';

const Stylists = () => {
  const stylists = [
    {
      name: 'Raju Bhaiya',
      experience: '12 Years Experience',
      specialty: 'Expert in Traditional Cuts & Beard Styling',
      avatar: 'RB'
    },
    {
      name: 'Seema Didi',
      experience: '8 Years Experience', 
      specialty: 'Bridal Styling & Hair Treatments',
      avatar: 'SD'
    },
    {
      name: 'Karan Sir',
      experience: '15 Years Experience',
      specialty: 'Modern Fade Cuts & Hair Coloring',
      avatar: 'KS'
    }
  ];

  return (
    <section id="stylists" className="section">
      <div className="container">
        <h2 className="section-title">Meet Our Expert Stylists</h2>
        <div className="stylists-grid">
          {stylists.map((stylist, index) => (
            <div key={index} className="stylist-card">
              <div className="stylist-image">
                {stylist.avatar}
              </div>
              <div className="stylist-info">
                <h3>{stylist.name}</h3>
                <div className="stylist-experience">{stylist.experience}</div>
                <div className="stylist-specialty">{stylist.specialty}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stylists;