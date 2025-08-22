import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: "Micah Kibera",
      role: "Clinical Nutritionist",
      description: "Provides personalized nutrition counseling, meal planning, and long-term lifestyle support to ensure sustainable results.",
      icon: "🥗"
    },
    {
      name: "Dr. Lance Mayabi",
      role: "Bariatric & General Surgeon",
      description: "Specializes in surgical interventions for weight loss, including gastric sleeve procedures. Ensures safe, high-quality surgical care.",
      icon: "⚕️"
    },
    {
      name: "Dr. Amal Satir",
      role: "Cardiac Anesthesiologist",
      description: "Expert in perioperative care, ensuring patient safety and comfort during procedures that require anesthesia.",
      icon: "💓"
    }
  ];

  return (
    <section id="team" className="team">
      <div className="team-container">
        <h2 className="section-title">Our Team</h2>
        <p className="team-intro">
          Our strength lies in the collaboration of a diverse team of professionals committed to your well-being
        </p>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="member-icon">{member.icon}</div>
              <h3 className="member-name">{member.name}</h3>
              <h4 className="member-role">{member.role}</h4>
              <p className="member-description">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
