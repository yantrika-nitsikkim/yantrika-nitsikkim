<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
=======
import { useState, useEffect } from 'react';
>>>>>>> cf1415f8edb0f214a408aa132497d181a546fd61
import './hero.css';

// Import your images from the assets folder
import slide1 from '../../assets/1.png';
import slide2 from '../../assets/2.png';
import slide3 from '../../assets/3.png';
import slide4 from '../../assets/4.png';

const slides = [slide1, slide2, slide3, slide4];

function Hero() {
<<<<<<< HEAD
	const navigate = useNavigate();

	const handleJoinNowClick = () => {
		navigate('/register');
	};

	return (
		<section className="hero-section">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12">
						<h1 className="hero-title mb-3">Join Yantrika: Innovate, Collaborate, Excel</h1>
						<p className="hero-subtitle mb-4">
							Yantrika is the Mechanical Engineering Club at NIT Sikkim, dedicated to fostering
							innovation and skill development among students. Join us to bridge the gap between
							theory and practice, and prepare for a successful engineering career.
						</p>
						<div className="hero-actions">
							<button className="hero-primary-btn btn">Learn More</button>
							<button 
								className="hero-ghost-btn btn"
								onClick={handleJoinNowClick}
							>
								Join Now
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
=======
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
>>>>>>> cf1415f8edb0f214a408aa132497d181a546fd61
}

export default Hero;