import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Waste the Waist</h1>
          <p className="hero-subtitle">
            Transforming lives through safe, effective, and evidence-based weight loss interventions
          </p>
          <p className="hero-description">
            Our mission is simple: <strong>helping you reclaim your health, confidence, and vitality</strong> with a professional team of experts who walk with you every step of the way.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Start Your Journey</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-placeholder">
            <span>Health & Wellness</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
