import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Las llaves nunca deben estar en texto plano en el repositorio
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'v3mjzla8tx18ftc_6'; 
    emailjs.init(publicKey);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_whe1axn';
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_4lptcql';

      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'bluemesito@gmail.com',
        reply_to: formData.email
      });
      alert('¡Mensaje enviado con éxito!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      alert('Error al enviar el mensaje');
    } finally {
      setIsSubmitting(false);
    }
  };

  return { formData, isSubmitting, handleChange, handleSubmit };
};