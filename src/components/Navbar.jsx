import React from 'react';
import "../css/styles.css"

function Navbar() {
  return (
	<header className="container nav-container">
		{/* <div className="menu-btn">
			<span className="menu-toggler"></span>
		</div> */}

		<nav className="navbar">
			<div className="logo">
				<a href="index.html">
					<img src="assets/images/logo.png" alt="Logo"/>
				</a>
			</div>

			<div className="nav-group">
				<ul className="menu-nav">
					<li className="nav-item">
						<a href="/" className="nav-link">Home</a>
					</li>

					<li className="nav-item">
						<a href="/about" className="nav-link">About</a>
					</li>

					<li className="nav-item">
						<a href="/works" className="nav-link">Works</a>
					</li>

					<li className="nav-item">
						<a href="/contact" className="nav-link">Contact</a>
					</li>
				</ul>
			</div>
		</nav>
	</header>
  )
}

export default Navbar;