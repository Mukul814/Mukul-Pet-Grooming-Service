import React, { useState, useEffect } from 'react';

function Reviews() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: 'Anita Gupta',
      petName: 'Bruno',
      petType: 'Golden Retriever',
      text: 'Mukul and his team are absolutely wonderful! Bruno always comes back looking and smelling amazing. The care and attention they give is exceptional.'
    },
    {
      name: 'Rohit Verma',
      petName: 'Whiskers',
      petType: 'Persian Cat',
      text: 'Best pet grooming service in the city! Whiskers was so comfortable throughout the session. Highly professional and caring staff.'
    },
    {
      name: 'Sneha Joshi',
      petName: 'Max',
      petType: 'Labrador',
      text: 'Amazing service! Max loves going there. The team understands pets so well and treats them with such love and patience.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [reviews.length]);

  const goToReview = (index) => {
    setCurrentReview(index);
  };

  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <h2>What Pet Parents Say</h2>
        <p className="subtitle">Real reviews from our happy customers</p>
        
        <div className="review-slider">
          <div className="review-card">
            <div className="reviewer-info">
              <div className="avatar">
                {reviews[currentReview].name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h4>{reviews[currentReview].name}</h4>
                <p>Pet Parent of {reviews[currentReview].petName} ({reviews[currentReview].petType})</p>
              </div>
            </div>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p className="review-text">"{reviews[currentReview].text}"</p>
          </div>
          
          <div className="dots">
            {reviews.map((_, index) => (
              <button 
                key={index}
                className={`dot ${index === currentReview ? 'active' : ''}`}
                onClick={() => goToReview(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;