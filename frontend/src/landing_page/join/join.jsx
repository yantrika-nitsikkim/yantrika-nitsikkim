import { useNavigate } from 'react-router-dom';
import './join.css';

function Hero() {
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
}

export default Hero;