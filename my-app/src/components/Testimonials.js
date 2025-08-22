import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I never thought I'd feel this confident again. The team at Waste the Waist gave me more than just weight loss — they gave me my life back!",
      author: "A.M.",
      rating: 5
    },
    {
      quote: "The nutrition support made all the difference. I finally feel like I have a plan I can follow long-term.",
      author: "S.K.",
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array(rating).fill(0).map((_, i) => (
      <span key={i} className="star">⭐</span>
    ));
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <h2 className="section-title">Testimonials</h2>
        <p className="testimonials-intro">
          Hear from those who have taken the journey with us
        </p>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
              <p className="testimonial-author">— {testimonial.author}</p>
            </div>
          ))}
        </div>
        <div className="testimonial-cta">
          <p>More testimonials can be added here. Clients will also be able to submit their own reviews.</p>
          <button className="submit-review-btn">Submit Your Review</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
