import React from 'react';
import "../css/styles.css";
import logo from "../assets/images/logo.png";

function Navbar() {
  return (
	<header className="container nav">
		{/* <div className="menu-btn">
			<span className="menu-toggler"></span>
		</div> */}

		<nav className="nav__bar">
			<div className="logo">
				<a href="index.html">
					<img src={logo} alt="Logo"/>
				</a>
			</div>

			<div className="nav__group">
				<ul className="nav__menu">
					<li className="nav__item">
						<a href="/" className="nav-link">Home</a>
					</li>

					<li className="nav__item">
						<a href="/about" className="nav-link">About</a>
					</li>

					<li className="nav__item">
						<a href="/works" className="nav-link">Works</a>
					</li>

					<li className="nav__item">
						<a href="/contact" className="nav-link">Contact</a>
					</li>
				</ul>
			</div>
		</nav>
	</header>
  )
}

export default Navbar;