import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contact-container">
          <div className="contact-form">
            <h1>Contact Us</h1>
            <div className="form-inputs">
              <input
                className="contact-input"
                type="text"
                placeholder="Your Name"
                name="name"
                id="name"
              />
              <input
                className="contact-input"
                type="email"
                placeholder="Your Email"
                name="email"
                id="email"
              />
              <textarea
                className="contact-textarea"
                placeholder="Your Message"
                name="message"
                id="message"
                rows="5">
              </textarea>
            </div>
            <button className="contact-submit-btn">Send Message</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
