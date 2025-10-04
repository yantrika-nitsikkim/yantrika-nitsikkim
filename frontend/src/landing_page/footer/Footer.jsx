import './footer.css';
import linkedinIcon from '../../assets/linkedin.png';
import instagramIcon from '../../assets/instagram.png';

function Footer() {
	return (
		<footer className="footer">
			<div className="footer-container">
				{/* Main Footer Content */}
				<div className="footer-main">
					<div className="footer-content">
						{/* Column 1: About Yantrika Club */}
						<div className="footer-column">
							<h3 className="footer-heading">ABOUT YANTRIKA CLUB</h3>
							<p className="footer-text">
								Yantrika, National Institute of Technology Sikkim is an official departmental society of the institute. 
								Established in 2015, its aim is to foster the technical knowledge of students in their core streams 
								while also promoting participation in extracurricular activities.
							</p>
						</div>

						{/* Column 2: Explore */}
						<div className="footer-column">
							<h3 className="footer-heading">EXPLORE</h3>
							<ul className="footer-list">
								<li>Robotics</li>
								<li>Solidwork and Simulation</li>
								<li>Gate</li>
								<li>3-D Printing</li>
								<li>Ansys Simulation</li>
							</ul>
						</div>

						{/* Column 3: Contact Us */}
						<div className="footer-column">
							<h3 className="footer-heading">CONTACT US</h3>
							<div className="contact-info">
								<div className="contact-item">
									<i className="fas fa-map-marker-alt contact-icon"></i>
									<span>Mechanical Engineering, National Institute of Technology Sikkim, Ravangla, Sikkim, India - 737139</span>
								</div>
								<div className="contact-item">
									<i className="fas fa-envelope contact-icon"></i>
									<span>yantrika@nitsikkim.ac.in</span>
								</div>
							</div>
							<div className="social-icons">
								<a href="#" className="social-link">
									<img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
								</a>
								<a href="#" className="social-link">
									<img src={instagramIcon} alt="Instagram" className="social-icon" />
								</a>
							</div>
							<div className="visitor-counter">
								<span>Visitors :</span>
								<div className="visitor-blocks">
									<div className="visitor-block"></div>
									<div className="visitor-block"></div>
									<div className="visitor-block"></div>
									<div className="visitor-block"></div>
									<div className="visitor-block"></div>
									<div className="visitor-block"></div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Mobile Visitor Counter - Only visible on mobile */}
				<div className="mobile-visitor-counter">
					<span>Visitors</span>
					<div className="visitor-blocks">
						<div className="visitor-block"></div>
						<div className="visitor-block"></div>
						<div className="visitor-block"></div>
						<div className="visitor-block"></div>
						<div className="visitor-block"></div>
						<div className="visitor-block"></div>
					</div>
				</div>

				{/* Copyright Section */}
				<div className="footer-copyright">
					<p>Copyright @ 2025 Yantrika Club, NIT Sikkim.</p>
					<p>All Rights Reserved.</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
