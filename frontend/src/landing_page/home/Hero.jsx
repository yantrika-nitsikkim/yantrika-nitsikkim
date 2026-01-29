import { useEffect, useState } from "react";
import "./hero.css";

// your 10 images
import IMG_1 from "../../assets/IMG_1.jpg";
import IMG_2 from "../../assets/IMG_2.jpg";
import IMG_3 from "../../assets/IMG_3.jpg";
import IMG_4 from "../../assets/IMG_4.jpg";
import IMG_5 from "../../assets/IMG_5.jpg";
import IMG_6 from "../../assets/IMG_6.jpg";
import IMG_7 from "../../assets/IMG_7.jpg";
import IMG_8 from "../../assets/IMG_8.jpg";
import IMG_9 from "../../assets/IMG_9.jpg";
import IMG_10 from "../../assets/IMG_10.jpg";

const slides = [IMG_1, IMG_2, IMG_3, IMG_4, IMG_5, IMG_6, IMG_7, IMG_8, IMG_9, IMG_10];

export default function Hero({ scrollTargetId = "about-section" }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  const handleKnowMore = () => {
    // Try to scroll to the section with the given id
    const el = document.getElementById(scrollTargetId) || document.querySelector("[data-hero-next]");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Fallback: scroll down by one viewport height
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div className="hero-slides" aria-hidden="true">
        {slides.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className={`hero-slide ${i === current ? "is-active" : ""}`}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
      </div>

      <div className="hero-overlay" />

      <div className="hero-content">
        <h1 className="hero-title">Department of Mechanical Engineering</h1>
        <button type="button" className="hero-btn" onClick={handleKnowMore}>
          Know More
        </button>
      </div>
    </section>
  );
}
