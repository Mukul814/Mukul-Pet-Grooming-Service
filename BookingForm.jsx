import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const services = [
    'Premium Haircut - ₹299',
    'Beard Trim & Styling - ₹199', 
    'Head Massage - ₹399',
    'Hair Spa Treatment - ₹799',
    'Hair Coloring - ₹1299'
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a date';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = 'Please select a future date';
      }
    }

    if (!formData.time) {
      newErrors.time = 'Please select a time slot';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setShowSuccess(true);
      setFormData({
        fullName: '',
        phone: '',
        service: '',
        date: '',
        time: ''
      });
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }
  };

  return (
    <section id="booking" className="section booking">
      <div className="container">
        <h2 className="section-title">Book Your Appointment</h2>
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name *</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
            {errors.fullName && <span style={{color: '#ff6b6b', fontSize: '0.9rem'}}>{errors.fullName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
            {errors.phone && <span style={{color: '#ff6b6b', fontSize: '0.9rem'}}>{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="service">Select Service *</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">Choose a service</option>
              {services.map((service, index) => (
                <option key={index} value={service}>{service}</option>
              ))}
            </select>
            {errors.service && <span style={{color: '#ff6b6b', fontSize: '0.9rem'}}>{errors.service}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Preferred Date *</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
              />
              {errors.date && <span style={{color: '#ff6b6b', fontSize: '0.9rem'}}>{errors.date}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="time">Preferred Time *</label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
              >
                <option value="">Select time</option>
                {timeSlots.map((time, index) => (
                  <option key={index} value={time}>{time}</option>
                ))}
              </select>
              {errors.time && <span style={{color: '#ff6b6b', fontSize: '0.9rem'}}>{errors.time}</span>}
            </div>
          </div>

          <button type="submit" className="btn" style={{width: '100%', marginTop: '1rem'}}>
            Book Appointment
          </button>

          {showSuccess && (
            <div className="success-message">
              🎉 Appointment booked successfully! We'll call you soon to confirm.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default BookingForm;