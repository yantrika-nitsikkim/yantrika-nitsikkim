import { useEffect, useRef, useState } from "react";
import "./event_calendar.css";

import Robotics_announcement from "../../assets/Robotics_announcement.png";
import Solidworks_announcement from "../../assets/Solidworks_announcement.png";
import Gate_announcement from "../../assets/Gate_announcement.png";
import Printing_announcement from "../../assets/3D_announcement.png";
import Ansys_announcement from "../../assets/Ansys_announcement.png";

const events = [
  {
    key: "robotics",
    title: "Robotics Bootcamp",
    date: "12 Jan 2025",
    description:
      "Hands-on training in sensors, actuators, motion control, and autonomous systems for beginners.",
    image: Robotics_announcement,
  },
  {
    key: "solidworks",
    title: "SolidWorks Masterclass",
    date: "20 Jan 2025",
    description:
      "3D modeling, assemblies, and basic simulation workflows for mechanical design projects.",
    image: Solidworks_announcement,
  },
  {
    key: "gate",
    title: "GATE Strategy Session",
    date: "02 Feb 2025",
    description:
      "Syllabus breakdown, problem-solving patterns, and time-management techniques.",
    image: Gate_announcement,
  },
  {
    key: "printing",
    title: "3D Printing Demo",
    date: "08 Feb 2025",
    description:
      "CAD-to-print pipeline: slicing, materials, tolerances, and print parameter tuning.",
    image: Printing_announcement,
  },
  {
    key: "ansys",
    title: "ANSYS Simulation Talk",
    date: "28 Feb 2025",
    description:
      "Intro to FEA/CFD with structural and thermal case studies relevant to ME curriculum.",
    image: Ansys_announcement,
  },
];

export default function EventCarousel() {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);
  const xRef = useRef(0);
  const dirRef = useRef(-1); // -1 left, +1 right
  const maxLeftRef = useRef(0); // positive value of how far we can go left (we'll translateX negative)
  const [paused, setPaused] = useState(false);

// compute card width so 1/2/3 cards are visible based on wrapper width
useEffect(() => {
  const setWidths = () => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    const w = wrapper.clientWidth;

    // Breakpoints (tweak as you like)
    let visible = 3; // desktop default
    if (w < 600) visible = 1;          // mobile
    else if (w < 1024) visible = 2;    // tablet

    // gap changes a bit on smaller screens
    const gap = w < 600 ? 10 : w < 1024 ? 12 : 16;

    // width of each card so exactly `visible` fit with (visible-1) gaps
    const cardW = (w - (visible - 1) * gap) / visible;

    wrapper.style.setProperty("--cardW", `${cardW}px`);
    wrapper.style.setProperty("--gap", `${gap}px`);

    // recompute bounds and clamp position
    const overflow = track.scrollWidth - w;
    maxLeftRef.current = Math.max(0, overflow);
    if (-xRef.current > maxLeftRef.current) xRef.current = -maxLeftRef.current;
    if (xRef.current > 0) xRef.current = 0;
    track.style.transform = `translateX(${xRef.current}px)`;
  };

  setWidths();
  window.addEventListener("resize", setWidths);
  return () => window.removeEventListener("resize", setWidths);
}, []);


  // animation loop (ping–pong)
  useEffect(() => {
    let raf;
    const tick = () => {
      const track = trackRef.current;
      if (track && !paused) {
        const speed = 0.8; // px per frame
        xRef.current += dirRef.current * speed;

        const max = maxLeftRef.current; // >= 0
        if (xRef.current <= -max) {
          xRef.current = -max;
          dirRef.current = +1; // bounce right
        } else if (xRef.current >= 0) {
          xRef.current = 0;
          dirRef.current = -1; // bounce left
        }
        track.style.transform = `translateX(${xRef.current}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  return (
    <section className="events-section" id="events-section">
      <h2 className="events-title">Event Calendar</h2>

      <div
        className="carousel-wrapper"
        ref={wrapperRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="carousel-track" ref={trackRef}>
          {events.map((e) => (
            <article className="event-card" key={e.key}>
              <span className="date-badge">{e.date}</span>
              <figure className="event-media">
                <img src={e.image} alt={`${e.title} announcement`} />
              </figure>
              <div className="event-body">
                <h3 className="event-title">{e.title}</h3>
                <p className="event-desc">{e.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
