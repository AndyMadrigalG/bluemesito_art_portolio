import React from 'react';
import './Contact.css';
import { image_contact } from '../Data/galleries';
import { useContactForm } from '../Hooks/useContactForm';

const Contact: React.FC = () => {
  const { formData, isSubmitting, handleChange, handleSubmit } = useContactForm();

  return (
    <div className="contact-container" id="contact">
      <div className="contact-info">
        <h1>Send me a request!</h1>
        <p>
          For commissions, business inquiries, or just to say hello,
          please fill out the form below or email me directly at:
        </p>
        <span className="contact-email">bluemesito@gmail.com</span>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name (required)</label>
            <input type="text" id="name" className="form-input" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email (required)</label>
            <input type="email" id="email" className="form-input" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message (required)</label>
            <textarea id="message" className="form-textarea" value={formData.message} onChange={handleChange} required></textarea>
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className="contact-image-wrapper">
        <img src={image_contact} alt="Decorative illustration" className="contact-illustration" loading="lazy" />
      </div>
    </div>
  );
};

export default Contact;