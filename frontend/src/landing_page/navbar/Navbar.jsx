import { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/logo.jpeg';

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<nav className="navbar navbar-custom">
			{/* Mobile Menu Backdrop */}
			{isMenuOpen && (
				<div
					className="mobile-menu-backdrop"
					onClick={closeMenu}
				></div>
			)}
			<div className="navbar-container">
				{/* Brand Section */}
				<div className="navbar-brand-section">
					<Link to="/" className="navbar-brand-link">
						<div className="d-flex align-items-center">
							<img src={logo} alt="Yantrika Logo" className="navbar-logo" />
							<div className="navbar-vertical-divider"></div>
							<div className="navbar-department-text">
								<div className="navbar-department-title">Department of</div>
								<div className="navbar-department-subtitle">Mechanical Engineering</div>
								<div className="navbar-department-institute">National Institute of Technology Sikkim</div>
							</div>
						</div>
					</Link>
				</div>

				{/* Mobile Menu Toggle */}
				<button
					className="navbar-toggler-custom d-lg-none"
					type="button"
					onClick={toggleMenu}
					aria-expanded={isMenuOpen}
				>
					<i className="fas fa-bars"></i>
				</button>

				{/* Navigation Capsules */}
				<div className={`navbar-navigation-capsules ${isMenuOpen ? 'show' : ''}`}>
					<ul className="navbar-nav-custom">
						<li className="nav-item">
							<a className="nav-link nav-link-about" href="/about">
								About Us
							</a>
						</li>
						<li className="nav-item">
							<button
								className="nav-link nav-link-learning nav-button-link"
								onClick={() => {
									document.getElementById("learning-section")?.scrollIntoView({
										behavior: "smooth",
										block: "start"
									});
									closeMenu();
								}}
							>
								Learning & Development
							</button>
						</li>

						<li className="nav-item">
							<button
								className="nav-link nav-link-events nav-button-link"
								onClick={() => {
									document.getElementById("events-section")?.scrollIntoView({
										behavior: "smooth",
										block: "start"
									});
									closeMenu();
								}}
							>
								Events
							</button>
						</li>

						<li className="nav-item">
							<a className="nav-link nav-link-resources" href="#resources">
								Resources
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link nav-link-quick" href="#quick-links">
								Quick Links ▾
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;