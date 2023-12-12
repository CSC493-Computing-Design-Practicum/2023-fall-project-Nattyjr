import React, { useState } from 'react';
import './ContactFormStyles.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="from-container">
      <h1>Send a message to us!</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          placeholder="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <textarea
          placeholder="Message"
          rows="4"
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
