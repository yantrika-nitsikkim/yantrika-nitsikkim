import "./AboutUsSection.css";
import aboutVideo from "../assets/gearv.mp4";

const AboutUsSection = () => {
  return (
    <section className="about-us-section-pg">
      {/* Background video */}
      <video
        className="background-video"
        src={aboutVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Left-side text overlay */}
      <div className="about-us-overlay">
        <div className="about-us-content-pg">
          <h2 className="about-us-title-pg">About us</h2>
          <p className="about-us-description-pg">
            <strong>Yantrika</strong> is the dedicated departmental club of
            Mechanical Engineering at NIT Sikkim, established in 2015 by the
            first batch of Mechanical Engineering students (2014-2018). As one
            of the three official departmental societies of the institute,
            whether you're a novice or an experienced enthusiast, we offer
            something for everyone.
          </p>
          <p className="about-us-description-pg">
            More than just a club, <strong>Yantrika</strong> provides
            opportunities to engage in hands-on projects, technical quizzes, and
            collaborative workshops. It's a community built on teamwork,
            integrity, and a passion for engineering excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
