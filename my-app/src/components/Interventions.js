import React from 'react';
import './Interventions.css';

const Interventions = () => {
  const interventions = [
    {
      title: "Sleeving the Past Behind",
      subtitle: "Gastric Sleeve",
      description: "A permanent surgical option where part of the stomach is removed, reducing capacity and promoting lasting weight loss. Ideal for patients struggling with obesity-related health issues.",
      icon: "🏥",
      color: "#e74c3c"
    },
    {
      title: "Inflate for Change",
      subtitle: "Gastric Balloons",
      description: "A non-surgical, minimally invasive option. A balloon is inserted into the stomach and inflated, creating a sense of fullness that helps regulate appetite and portion sizes.",
      icon: "🎈",
      color: "#3498db"
    },
    {
      title: "Meta Better",
      subtitle: "Pharmaceutical Intervention",
      description: "Prescription-based weight management using clinically approved medications. Tailored to individuals who may not be candidates for surgery but need medical support to accelerate weight loss.",
      icon: "💊",
      color: "#27ae60"
    }
  ];

  return (
    <section id="interventions" className="interventions">
      <div className="interventions-container">
        <h2 className="section-title">Our Interventions</h2>
        <p className="interventions-intro">
          We offer a range of evidence-based medical interventions for weight loss
        </p>
        <div className="interventions-grid">
          {interventions.map((intervention, index) => (
            <div key={index} className="intervention-card">
              <div className="card-header" style={{ backgroundColor: intervention.color }}>
                <div className="intervention-icon">{intervention.icon}</div>
                <h3 className="intervention-title">{intervention.title}</h3>
                <h4 className="intervention-subtitle">{intervention.subtitle}</h4>
              </div>
              <div className="card-body">
                <p className="intervention-description">{intervention.description}</p>
                <button className="learn-more-btn" style={{ borderColor: intervention.color, color: intervention.color }}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interventions;
