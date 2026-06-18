import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import './Contact.css';
import { image_contact } from '../Data/galleries';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {

  // Al inicio del componente, inicializar EmailJS (una sola vez)
  useEffect(() => {
    emailjs.init('v3mjzla8tx18ftc_6'); // PUBLIC_KEY de emailjs.com
  }, []);

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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    try {
      await emailjs.send(
        'service_whe1axn', // SERVICE_ID de emailjs.com
        'template_4lptcql', // TEMPLATE_ID de emailjs.com
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'bluemesito@gmail.com',
          reply_to: formData.email
        }
      );
      alert('¡Mensaje enviado con éxito!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      alert('Error al enviar el mensaje');
    }
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