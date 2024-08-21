import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData, 
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ color: 'var(--accent-color)' }}>Contact Me</h1>
      <p style={{ color: 'var(--text-color)' }}>
        Feel free to reach out to me directly at:
      </p>
      <p style={{ color: 'var(--text-color)' }}>
        Email: <a href="mailto:jaekob.childress@gmail.com" style={{ color: 'var(--link-color)' }}>jaekob.childress@gmail.com</a>
      </p>
      <p style={{ color: 'var(--text-color)' }}>
        Phone: <a href="tel:+18322626631" style={{ color: 'var(--link-color)' }}>+1 832-262-6631</a>
      </p>
      <p style={{ color: 'var(--text-color)' }}>
        Or, you can use the form below to send me a message:
      </p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
        <label style={{ color: 'var(--text-color)' }}>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={{ padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid var(--muted-text-color)' }}
        />
        <label style={{ color: 'var(--text-color)' }}>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{ padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid var(--muted-text-color)' }}
        />
        <label style={{ color: 'var(--text-color)' }}>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={{ padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid var(--muted-text-color)', minHeight: '100px' }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: 'var(--accent-color)',
            color: 'var(--text-color)',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
