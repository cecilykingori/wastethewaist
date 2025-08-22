import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Waste the Waist</h1>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#about">About</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#interventions">Interventions</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <button className="book-btn">Book Session</button>
      </div>
    </header>
  );
};

export default Header;
