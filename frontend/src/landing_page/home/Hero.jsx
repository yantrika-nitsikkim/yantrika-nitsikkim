function Hero() {
	const sectionStyle = {
		background: '#2b2b2b',
		color: '#fff',
		padding: '72px 24px',
		textAlign: 'center'
	};

	const titleStyle = {
		fontSize: 36,
		fontWeight: 800,
		margin: '0 0 12px',
		letterSpacing: 0.2
	};

	const subtitleStyle = {
		maxWidth: 720,
		margin: '0 auto 24px',
		fontSize: 14,
		lineHeight: 1.6,
		opacity: 0.9
	};

	const actionsStyle = { display: 'flex', gap: 12, justifyContent: 'center' };
	const primaryBtn = {
		padding: '10px 16px',
		background: '#3b82f6',
		border: 'none',
		color: '#fff',
		borderRadius: 6,
		fontWeight: 600,
		cursor: 'pointer'
	};
	const ghostBtn = {
		padding: '10px 16px',
		background: 'transparent',
		border: '1px solid rgba(255,255,255,0.25)',
		color: '#fff',
		borderRadius: 6,
		fontWeight: 600,
		cursor: 'pointer'
	};

	return (
		<section style={sectionStyle}>
			<h1 style={titleStyle}>Join Yantrika: Innovate, Collaborate, Excel</h1>
			<p style={subtitleStyle}>
				Yantrika is the Mechanical Engineering Club at NIT Sikkim, dedicated to fostering
				innovation and skill development among students. Join us to bridge the gap between
				theory and practice, and prepare for a successful engineering career.
			</p>
			<div style={actionsStyle}>
				<button style={primaryBtn}>Learn More</button>
				<button style={ghostBtn}>Join Now</button>
			</div>
		</section>
	);
}

export default Hero;