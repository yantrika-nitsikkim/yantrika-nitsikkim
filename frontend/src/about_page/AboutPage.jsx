import React from 'react';
// 1. Import your video file.
// This path assumes AboutUsSection.jsx is in a 'components' folder,
// e.g., src/components/AboutUsSection.jsx
import aboutVideo from '../assets/gearv.mp4'; 

const AboutUsSection = () => {
  return (
    // 2. The main container section
    <section className="about-us-section">

      {/* 3. The content on the left side */}
      <div className="about-us-content">
        <div className="about-us-icon">
          {/* You can add an SVG icon here if you want */}
        </div>
        <h2 className="about-us-title">About Us</h2>
        <p className="about-us-description">
          Yantrika, the official Mechanical Engineering departmental club of NIT
          Sikkim, was established in 2015 with the goal of fostering technical
          excellence and holistic development among students. The club bridges
          the gap between theoretical knowledge and practical application by
          organizing seminars, workshops, projects, and competitions.
        </p>
        <button className="read-more-btn">Read More</button>
      </div>

      {/* 4. The container for the video on the right side */}
      <div className="about-us-media-container">
        {/* 5. Here is the <video> tag replacing the old <img> */}
        <video
          className="about-us-video"
          src={aboutVideo}
          autoPlay
          loop
          muted
          playsInline // Essential for mobile browsers
        />
      </div>

    </section>
  );
};

export default AboutUsSection;