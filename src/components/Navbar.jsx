import logo from "../assets/images/logo.png";
import { Link } from 'react-router-dom';
// import { useState } from "react";

function Navbar() {

  return (
	<header className="container nav">
		{/* <div className="menu-btn">
			<span className="menu-toggler"></span>
		</div> */}

		<nav className="nav__bar">
			<div className="logo">
				<Link to="/">
					<img src={logo} alt="Logo"/>
				</Link>
			</div>

			<div className="nav__group">
				<ul className="nav__menu">
					<li className="nav__item">
						<Link to="/" className="nav-link">Home</Link>
					</li>

					<li className="nav__item">
						<Link to="/about" className="nav-link">About</Link>
					</li>

					<li className="nav__item">
						<Link to="/works" className="nav-link">Works</Link>
					</li>

					<li className="nav__item">
						<Link to="/contact" className="nav-link">Contact</Link>
					</li>
				</ul>
			</div>
		</nav>
	</header>
  )
}

export default Navbar;