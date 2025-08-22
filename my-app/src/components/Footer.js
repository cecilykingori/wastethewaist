import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Waste the Waist</h3>
            <p>Transforming lives through safe, effective, and evidence-based weight loss interventions.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="LinkedIn">💼</a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#interventions">Interventions</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Gastric Sleeve</a></li>
              <li><a href="#">Gastric Balloons</a></li>
              <li><a href="#">Pharmaceutical Intervention</a></li>
              <li><a href="#">Nutrition Counseling</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>📞 +254 700 000 000</p>
            <p>📧 info@wastethewaist.com</p>
            <p>🌐 www.wastethewaist.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Waste the Waist. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Medical Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
