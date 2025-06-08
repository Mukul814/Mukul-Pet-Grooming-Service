import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Rajeev Sharma',
      avatar: 'RS',
      text: 'Excellent service! Raju Bhaiya gave me the perfect haircut. The traditional approach with modern styling is amazing. Highly recommended!'
    },
    {
      name: 'Priya Sinha', 
      avatar: 'PS',
      text: 'Seema Didi is fantastic! She understood exactly what I wanted for my wedding. The hair spa treatment was so relaxing and professional.'
    },
    {
      name: 'Anmol Verma',
      avatar: 'AV', 
      text: 'Karan Sir is a master at his craft. The fade cut and beard styling exceeded my expectations. Great ambiance and friendly staff!'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleDotClick = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonials-slider">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`testimonial-card ${index === currentTestimonial ? 'active' : ''}`}
            >
              <div className="testimonial-avatar">
                {testimonial.avatar}
              </div>
              <div className="testimonial-text">
                "{testimonial.text}"
              </div>
              <div className="testimonial-author">
                - {testimonial.name}
              </div>
            </div>
          ))}
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <span 
                key={index}
                className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;