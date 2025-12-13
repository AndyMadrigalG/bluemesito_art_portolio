import React from 'react';
import './Contact.css';
// Usamos star_machine como placeholder de la ilustración decorativa
import illustration from '../Assets/star_machine.png'; 

const Contact: React.FC = () => {
  return (
    <div className="contact-container" id="contact">
      
      {/* Columna Izquierda: Formulario */}
      <div className="contact-info">
        <h1>Drop me a line!</h1>
        <p>
          For commissions, business inquiries, or just to say hello, 
          please fill out the form below or email me directly at:
        </p>
        <span className="contact-email">contact@bluemesito.com</span>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name (required)</label>
            <input type="text" id="name" className="form-input" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email (required)</label>
            <input type="email" id="email" className="form-input" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message (required)</label>
            <textarea id="message" className="form-textarea" required></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>

      {/* Columna Derecha: Ilustración */}
      <div className="contact-image-wrapper">
        <img src={illustration} alt="Decorative illustration" className="contact-illustration" />
      </div>

    </div>
  );
};

export default Contact;