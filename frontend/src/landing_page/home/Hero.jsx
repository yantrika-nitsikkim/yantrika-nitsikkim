import { useState, useEffect } from 'react';
import './hero.css';

// Import your images from the assets folder
import slide1 from '../../assets/1.png';
import slide2 from '../../assets/2.png';
import slide3 from '../../assets/3.png';
import slide4 from '../../assets/4.png';

const slides = [slide1, slide2, slide3, slide4];

function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <section className="hero-section">
            <div className="slider-background">
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        src={slide}
                        alt={`Slide ${index + 1}`}
                        className={`slide-image ${index === currentIndex ? 'active' : ''}`}
                    />
                ))}
            </div>
        </section>
    );
}

export default Hero;