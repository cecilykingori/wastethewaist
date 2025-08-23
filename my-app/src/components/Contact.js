import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <h3>Phone Numbers</h3>
              <p>+254 700 000 000</p>
              <p>+254 711 111 111</p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <p>hello@wastethewaist.doctor</p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📅</div>
              <h3>Book a Session</h3>
              <p>Ready to take the first step?</p>
              <button className="calendar-btn">
                Schedule Your Consultation
              </button>
            </div>
          </div>
          <div className="contact-form">
            <h3>Get In Touch</h3>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Your Phone" />
              </div>
              <div className="form-group">
                <select required>
                  <option value="">Select Service Interest</option>
                  <option value="gastric-sleeve">Gastric Sleeve</option>
                  <option value="gastric-balloon">Gastric Balloon</option>
                  <option value="pharmaceutical">Pharmaceutical Intervention</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5"></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
