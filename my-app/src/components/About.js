import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">About Us</h2>
          <p className="about-text">
            At <strong>Waste the Waist</strong>, we believe that weight loss is more than a number on the scale — it is a journey toward improved health, better energy, and a renewed quality of life.
          </p>
          <p className="about-text">
            We specialize in <strong>medical interventions for weight management</strong>, tailored to your needs, preferences, and health conditions. Whether you are looking for a minimally invasive option, a surgical solution, or medically supervised pharmaceutical support, we provide the tools and guidance for long-term success.
          </p>
          <p className="about-text">
            Our interventions are scientifically backed, performed by an experienced multidisciplinary team, and designed to help you not only lose weight but also manage related conditions such as diabetes, hypertension, and sleep apnea.
          </p>
        </div>
        <div className="about-features">
          <div className="feature">
            <div className="feature-icon">🏥</div>
            <h3>Medical Expertise</h3>
            <p>Evidence-based interventions by qualified professionals</p>
          </div>
          <div className="feature">
            <div className="feature-icon">👥</div>
            <h3>Multidisciplinary Team</h3>
            <p>Collaborative approach with specialists in different fields</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🎯</div>
            <h3>Personalized Care</h3>
            <p>Tailored solutions based on your unique needs and goals</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
