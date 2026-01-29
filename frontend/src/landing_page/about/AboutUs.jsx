import { Link } from 'react-router-dom'; // <-- IMPORTANT: Make sure this import is here
import './aboutus.css';
import aboutImage from '../../assets/IMG_2.jpg';

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-content">
        <div className="about-us-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7V17L12 22L22 17V7L12 2ZM12 4.4L19.4 8.2L12 12L4.6 8.2L12 4.4ZM4 10.3L11 14V20.6L4 16.9V10.3ZM13 20.6V14L20 10.3V16.9L13 20.6Z" fill="currentColor"/>
          </svg>
        </div>
        <h2 className="about-us-title">About Us</h2>
        <p className="about-us-description">
          Yantrika, the official Mechanical Engineering departmental club of NIT Sikkim, was established in 2015 with the goal of fostering technical
          excellence and holistic development among students. The club bridges the gap between theoretical knowledge and practical application by organizing
          seminars, workshops, projects, and competitions. Yantrika serves as a
          platform for innovation, collaboration, and skill enhancement, empowering
          budding mechanical engineers to excel academically and professionally.
          Through its activities, Yantrika aims to nurture creativity, leadership, and
          teamwork while building a vibrant community of future-ready engineers.
        </p>
        
        {/* --- THIS IS THE FIX --- */}
        <Link to="/about">
          <button className="read-more-btn">Read More</button>
        </Link>
        
      </div>
      <div className="about-us-image-container">
        <img src={aboutImage} alt="About Us" className="about-us-image" />
      </div>
    </section>
  );
};

export default AboutUs;