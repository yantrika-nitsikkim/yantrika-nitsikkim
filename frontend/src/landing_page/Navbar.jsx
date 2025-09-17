function Navbar() {
	const wrapperStyle = {
		background: '#111',
		color: '#fff',
		position: 'sticky',
		top: 0,
		zIndex: 100,
		borderBottom: '1px solid rgba(255,255,255,0.08)'
	};

	const containerStyle = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: '12px 24px',
		maxWidth: 1280,
		margin: '0 auto',
		gap: 16
	};

	const brandStyle = { display: 'flex', alignItems: 'center', gap: 12 };
	const markStyle = {
		width: 36,
		height: 36,
		borderRadius: 6,
		background: '#2a2a2a',
		display: 'grid',
		placeItems: 'center',
		fontWeight: 700,
		fontSize: 12,
		letterSpacing: 1
	};

	const deptStyle = { lineHeight: 1.15 };
	const deptTopStyle = { fontSize: 13, opacity: 0.95 };
	const deptBottomStyle = { fontSize: 11, opacity: 0.7 };

	const navListStyle = {
		display: 'flex',
		alignItems: 'center',
		gap: 18,
		listStyle: 'none',
		margin: 0,
		padding: 0,
		fontSize: 14
	};

	const linkStyle = { color: '#e5e5e5', textDecoration: 'none', opacity: 0.9 };

	return (
		<header style={wrapperStyle}>
			<div style={containerStyle}>
				<div style={brandStyle}>
					<div style={markStyle}>YAN</div>
					<div style={deptStyle}>
						<div style={deptTopStyle}>Department of Mechanical Engineering</div>
						<div style={deptBottomStyle}>National Institute of Technology Sikkim</div>
					</div>
				</div>

				<nav>
					<ul style={navListStyle}>
						<li><a style={linkStyle} href="#about">About Us</a></li>
						<li><a style={linkStyle} href="#learning">Learning & Development</a></li>
						<li><a style={linkStyle} href="#events">Events</a></li>
						<li><a style={linkStyle} href="#resources">Resources</a></li>
						<li><a style={linkStyle} href="#quick-links">Quick Links ▾</a></li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Navbar;