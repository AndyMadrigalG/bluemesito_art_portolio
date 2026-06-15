import React, { useState, ChangeEvent, FormEvent } from 'react';
import './Contact.css';
import { image_contact } from '../Data/galleries';

const Contact: React.FC = () => {
  // Manejo de estado del formulario controlado
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
   
    // Aquí puedes integrar servicios como EmailJS
    console.log('Datos enviados:', formData);
   
    alert(`¡Gracias ${formData.name}! Tu mensaje NO se ha sido enviado ya que esta parte está aun en construccion`);
   
    // Resetear formulario
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container" id="contact">
     
      {/* Columna Izquierda: Formulario */}
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
            <input
              type="text"
              id="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email (required)</label>
            <input
              type="email"
              id="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message (required)</label>
            <textarea
              id="message"
              className="form-textarea"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>

      {/* Columna Derecha: Ilustración */}
      <div className="contact-image-wrapper">
        <img src={image_contact} alt="Decorative illustration" className="contact-illustration" />
      </div>

    </div>
  );
};

export default Contact;