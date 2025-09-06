import React, { useState } from 'react';
import './Contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedinIn, FaDribbble, FaTwitter, FaGithub } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Message sent! (Check the console for data)');
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <div className="header-underline"></div>
        <p>
          Ready to bring your ideas to life? Let's collaborate and create
          something amazing together.
        </p>
      </div>

      <div className="contact-body">
        <div className="contact-info">
          <div className="info-header">
            <HiOutlineMail className="icon" />
            <h2>Let's collaborate</h2>
          </div>
          <p className="info-text">
            Whether you have a project in mind, want to discuss opportunities,
            or just want to say hello, I'd love to hear from you. I'm always
            excited to work on interesting projects and meet new people.
          </p>
          <div className="email-box">
            <HiOutlineMail className="icon-small" />
            <div>
              <span>Email</span>
              <p>shinderitisha756@email.com</p>
            </div>
          </div>
          <div className="social-connect">
            <h3>Connect with me</h3>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/ritisha-shinde-8079842b5/" className="social-icon">
                <FaLinkedinIn />
              </a>

              <a href="https://github.com/RitishaS" className="social-icon">
                <FaGithub />
              </a>
              
            </div>
          </div>
           </div>
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me about your project or just say hi!"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              <HiOutlineMail /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;