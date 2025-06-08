import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    petOwnerName: '',
    petName: '',
    petType: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const services = [
    'Full Grooming Package',
    'Bath & Blow Dry',
    'Nail Trimming',
    'Teeth Cleaning',
    'Flea Treatment',
    'De-shedding Treatment'
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
  ];

  const petTypes = [
    'Dog - Small Breed',
    'Dog - Medium Breed', 
    'Dog - Large Breed',
    'Cat - Short Hair',
    'Cat - Long Hair',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  
    if (!formData.petOwnerName || !formData.petName || !formData.phone || !formData.email || !formData.service || !formData.date || !formData.time) {
      alert('Please fill in all required fields');
      return;
    }

    setShowSuccess(true);
    setFormData({
      petOwnerName: '',
      petName: '',
      petType: '',
      phone: '',
      email: '',
      service: '',
      date: '',
      time: '',
      notes: ''
    });
    
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Book Your Pet's Appointment</h2>
        <p className="subtitle">Schedule a grooming session for your furry friend</p>
        
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Pet Owner Name *</label>
              <input
                type="text"
                name="petOwnerName"
                value={formData.petOwnerName}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label>Pet Name *</label>
              <input
                type="text"
                name="petName"
                value={formData.petName}
                onChange={handleChange}
                placeholder="Enter your pet's name"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Pet Type *</label>
              <select
                name="petType"
                value={formData.petType}
                onChange={handleChange}
                required
              >
                <option value="">Select pet type</option>
                {petTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Service *</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Choose a service</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>{service}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Preferred Date *</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>

            <div className="form-group">
              <label>Preferred Time *</label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              >
                <option value="">Select time</option>
                {timeSlots.map((time, index) => (
                  <option key={index} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Special Notes (Optional)</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Any special requirements or notes about your pet..."
              rows="4"
            />
          </div>

          <button type="submit" className="btn-primary full-width">
            Book Appointment
          </button>

          {showSuccess && (
            <div className="success-message">
              🎉 Appointment booked successfully! We'll call you soon to confirm the details.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
