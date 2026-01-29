import { useEffect, useRef } from "react";
import "./learning.css";

/* Change extensions to match your files */
import robo_icon from "../../assets/robo_icon.png";
import robo_image from "../../assets/robo_img.png";
import solidworks_icon from "../../assets/solidworks_icon.png";
import solidworks_img from "../../assets/solidworks_img.png";
import gate_icon from "../../assets/gate_icon.png";
import icon_3d from "../../assets/3d_icon.png";
import ansys_icon from "../../assets/ansys_icon.png";

export default function LearningDevelopment() {
  const rootRef = useRef(null);

  // Reveal tiles only when the section enters the viewport
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const targets = el.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.2 }
    );
    targets.forEach(t => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <main className="ld-page">
      <section className="ld-wrap" id="learning-section" ref={rootRef}>
        <header className="ld-header reveal">
          <h1>Learning &amp; Development</h1>
          <p>Empowering engineers through innovation, skill-building, and hands-on learning.</p>
        </header>

        {/* === TWO EQUAL COLUMNS === */}
        <div className="ld-grid-2">
          {/* -------- LEFT COLUMN -------- */}
          <div className="col-left">
            {/* top 60% = ROBOTICS (with image inside) */}
            <article className="card with-media robotics-tile reveal">
              <div className="card-top">
                <img src={robo_icon} alt="Robotics icon" className="icon" />
                <h3>ROBOTICS</h3>
              </div>
              <p>
                Yantrika’s Robotics division focuses on practical innovation, where students learn the fundamentals of robot design, control, and automation. Through hands-on projects and real-time problem solving, we explore sensors, actuators, microcontrollers, and autonomous systems that shape the future of mechanical engineering.
              </p>
              <button className="btn">MORE</button>

              {/* paired image */}
              <figure className="tile-media">
                <img src={robo_image} alt="Robotics showcase" />
              </figure>
            </article>

            {/* bottom 40% split into 2 equal tiles: Ansys + GATE */}
            <div className="left-bottom">
              <article className="card reveal">
                <div className="card-top">
                  <img src={ansys_icon} alt="Ansys icon" className="ansys_icon" />
                </div>
                <p>
                    The Ansys division introduces students to simulation-driven engineering using FEA and CFD tools. By working on structural, thermal, and fluid analyses, students gain experience in validating designs, understanding failure modes, and applying simulation results to improve mechanical performance.
                </p>
                <button className="btn">MORE</button>
              </article>

              <article className="card reveal">
                <div className="card-top">
                  <img src={gate_icon} alt="GATE icon" className="icon" />
                  <h3>GATE</h3>
                </div>
                <p>
                    The GATE division supports students in strengthening their engineering fundamentals through structured practice and guidance. With focused mentoring, problem-solving sessions, and exam-oriented strategies, students build confidence and develop the discipline needed for competitive exam success.
                </p>
                <button className="btn">MORE</button>
              </article>
            </div>
          </div>

          {/* -------- RIGHT COLUMN -------- */}
          <div className="col-right">
            {/* top 40% split into 3D Printing + Web */}
            <div className="right-top">
              <article className="card reveal">
                <div className="card-top">
                  <img src={icon_3d} alt="3D Printing icon" className="icon" />
                  <h3>3D PRINTING</h3>
                </div>
                <p>
                    The 3D Printing division introduces students to additive manufacturing, enabling rapid prototyping of mechanical designs. Through hands-on experience with slicing, material selection, and model optimization, students learn how to turn digital concepts into functional components.
                </p>
                <button className="btn">MORE</button>
              </article>

              <article className="card reveal">
                <div className="card-top">
                  <h3>Web &amp; Language</h3>
                </div>
                <p>
                    The Web & Language division helps students build essential digital and communication skills needed in modern engineering. Through hands-on exposure to coding, documentation, technical writing, and web technologies, students learn to present ideas clearly and develop projects with stronger structure and clarity.
                </p>
                <button className="btn">MORE</button>
              </article>
            </div>

            {/* bottom 60% = SOLIDWORKS (with image inside) */}
            <article className="card with-media reveal">
              <div className="card-top">
                <img src={solidworks_icon} alt="SolidWorks icon" className="icon" />
                <h3>SOLIDWORKS</h3>
              </div>
              <p>
                    The SolidWorks division trains students in 3D modeling, assembly design, and simulation for real engineering applications. Through practical sessions on sketching, part modeling, and FEA basics, students learn to design optimized components and translate mechanical concepts into detailed CAD representations.
              </p>
              <button className="btn">MORE</button>

              {/* paired image */}
              <figure className="tile-media">
                <img src={solidworks_img} alt="SolidWorks render" />
              </figure>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
