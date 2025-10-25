// src/about_page/AboutUsSection.jsx

import React from 'react';
import './AboutUsSection.css';
import aboutVideo from '../assets/gearv.mp4'; 

// src/about_page/AboutUsSection.jsx

// ... (imports remain the same)

const AboutUsSection = () => {
  return (
    <section className="about-us-section">
      
      {/* The background video */}
      <video
        className="background-video" // <-- Changed className
        src={aboutVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* The text content on top */}
      <div className="about-us-content">
        <h2 className="about-us-title">About Us</h2>
        <p className="about-us-description">
          Yantrika, the official Mechanical Engineering departmental club of NIT
          Sikkim, was established in 2015 with the goal of fostering technical
          excellence and holistic development among students.
        </p>
        <button className="read-more-btn">Read More</button>
      </div>

    </section>
  );
};

export default AboutUsSection;