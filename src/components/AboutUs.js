import React from 'react';
import './AboutUs.css';
import { FaArrowRight } from 'react-icons/fa'; // Import Font Awesome icon

const AboutUs = () => {
  return (
    <section id="aboutus" className="about-us">
      <div className="about-us-container">
        <div className="about-us-image">
          <img src="file.jpeg" alt="Construction" />
        </div>
        <div className="about-us-content">
          <h2>About Us</h2>
          <p>Our Construction Material Recommendation System uses AI and real-time data to suggest the best construction materials based on your needs.</p>
          <button className="explore-button">
            Explore <FaArrowRight /> {/* Font Awesome icon */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
