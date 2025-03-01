import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from "axios" ;

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: 2,
    date: new Date(),
    time: '',
    specialRequests: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  
  const timeSlots = [
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', 
    '1:00 PM', '1:30 PM', '5:00 PM', '5:30 PM', 
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', 
    '8:00 PM', '8:30 PM', '9:00 PM'
  ];
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      date
    });
    
    if (errors.date) {
      setErrors({
        ...errors,
        date: null
      });
    }
  };
  
  const handleTimeSelect = (time) => {
    setFormData({
      ...formData,
      time
    });
    
    if (errors.time) {
      setErrors({
        ...errors,
        time: null
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.date) {
      newErrors.date = 'Date is required';
    }
    
    if (!formData.time) {
      newErrors.time = 'Time is required';
    }
    
    return newErrors;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:5000/api/reservations", formData);
      console.log("Reservation submitted:", response.data);
      setSubmitted(true); // Show success message
      setFormData({
        name: "",
        email: "",
        phone: "",
        guests: 2,
        date: new Date(),
        time: "",
        specialRequests: "",
        status:"pending",
      });
    } catch (error) {
      console.error("Error submitting reservation:", error);
      alert("Failed to submit reservation. Please try again.");
    }
  };
  
  if (submitted) {
    return (
      <div className="section">
        <div className="container">
          <div className="reservation-form" style={{ textAlign: 'center' }}>
            <h2 style={{ color: 'var(--primary-color)' }}>Reservation Confirmed!</h2>
            <p>Thank you for choosing Savoria. We look forward to serving you.</p>
            <p>A confirmation email has been sent to your email address.</p>
            <button 
              className="btn" 
              style={{ marginTop: '2rem' }}
              onClick={() => setSubmitted(false)}
            >
              Make Another Reservation
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">Reserve a Table</h1>
        
        <form className="reservation-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-control"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <div className="error">{errors.phone}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="guests">Number of Guests</label>
            <select
              id="guests"
              name="guests"
              className="form-control"
              value={formData.guests}
              onChange={handleChange}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Guest' : 'Guests'}
                </option>
              ))}
            </select>
          </div>
          
          <div className="form-group">
            <label>Date</label>
            <DatePicker
              selected={formData.date}
              onChange={handleDateChange}
              minDate={new Date()}
              className="form-control"
              dateFormat="MMMM d, yyyy"
            />
            {errors.date && <div className="error">{errors.date}</div>}
          </div>
          
          <div className="form-group">
            <label>Time</label>
            <div className="time-slots">
              {timeSlots.map((time) => (
                <div
                  key={time}
                  className={`time-slot ${formData.time === time ? 'selected' : ''}`}
                  onClick={() => handleTimeSelect(time)}
                >
                  {time}
                </div>
              ))}
            </div>
            {errors.time && <div className="error">{errors.time}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="specialRequests">Special Requests (Optional)</label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              className="form-control"
              rows="4"
              value={formData.specialRequests}
              onChange={handleChange}
              placeholder="Allergies, dietary restrictions, special occasions, etc."
            ></textarea>
          </div>
          
          <div className="form-group" style={{ marginTop: '2rem' }}>
            <button type="submit" className="btn" style={{ width: '100%' }}>
              Confirm Reservation
            </button>
          </div>
        </form>
        
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <h3>Reservation Policy</h3>
          <p>Reservations are held for 15 minutes past the scheduled time.</p>
          <p>For parties of 6 or more, please call us directly at (123) 456-7890.</p>
          <p>Cancellations must be made at least 24 hours in advance.</p>
        </div>
      </div>
    </div>
  );
};

export default Reservation;