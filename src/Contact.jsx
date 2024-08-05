import React, { useState } from "react";
import "./styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted", formData);
  };

  return (
    <div className="contact">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We’d love to hear from you! Reach out to us for any inquiries or
          feedback.
        </p>
      </header>
      <div className="contact-content">
        <div className="contact-form-container">
          <h2>Contact Form</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-sidebar">
          <div className="subscriber-form">
            <h2>Subscribe to Our Newsletter</h2>
            <form className="subscriber-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
          <div className="short-blog">
            <h2>Our Latest Updates</h2>
            <p>
              Stay updated with our latest news, tips, and insights. Read our
              blog for more information and updates about TaskTide.
            </p>
            <a href="/blog" className="read-more">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
