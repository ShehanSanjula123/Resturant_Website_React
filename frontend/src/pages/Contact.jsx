import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  
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
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Here you would typically send the data to your backend
    console.log('Contact form submitted:', formData);
    
    // Show success message
    setSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">Contact Us</h1>
        
        <div className="grid grid-2" style={{ gap: '4rem' }}>
          {/* Contact Information */}
          <div>
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p style={{ marginBottom: '2rem' }}>
                We would love to hear from you! Whether you have a question about our menu, want to provide feedback, or are interested in hosting a private event, please do not hesitate to reach out.
              </p>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div>
                  <h3>Phone</h3>
                  <p>(123) 456-7890</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <h3>Email</h3>
                  <p>info@savoria.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3>Address</h3>
                  <p>123 Gourmet Street, Foodville, FC 12345</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FaClock />
                </div>
                <div>
                  <h3>Hours</h3>
                  <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
                  <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215266952082!2d-73.98784492404075!3d40.75798833440232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant Location"
              ></iframe>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            {submitted ? (
              <div style={{ 
                backgroundColor: 'white', 
                padding: '2rem', 
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                textAlign: 'center'
              }}>
                <h2 style={{ color: 'var(--primary-color)' }}>Thank You!</h2>
                <p>Your message has been sent successfully. We will get back to you as soon as possible.</p>
                <button 
                  className="btn" 
                  style={{ marginTop: '2rem' }}
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit}
                style={{ 
                  backgroundColor: 'white', 
                  padding: '2rem', 
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
              >
                <h2>Send Us a Message</h2>
                
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
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
                  <label htmlFor="email">Your Email</label>
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
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && <div className="error">{errors.subject}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && <div className="error">{errors.message}</div>}
                </div>
                
                <div className="form-group" style={{ marginTop: '2rem' }}>
                  <button type="submit" className="btn" style={{ width: '100%' }}>
                    Send Message
                  </button>
                </div>
              </form>
            )}
            
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <h3>Follow Us</h3>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '1rem', 
                marginTop: '1rem' 
              }}>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#3b5998',
                    color: 'white',
                    borderRadius: '50%',
                    fontSize: '1.2rem'
                  }}
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#1da1f2',
                    color: 'white',
                    borderRadius: '50%',
                    fontSize: '1.2rem'
                  }}
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#e1306c',
                    color: 'white',
                    borderRadius: '50%',
                    fontSize: '1.2rem'
                  }}
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;