import logo from "../assets/images/logo.png";
import { Link, NavLink } from 'react-router-dom';
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
						<NavLink to="/" className="nav-link" activeclassname="active" exact="true">Home</NavLink>
					</li>

					<li className="nav__item">
						<NavLink to="/about" className="nav-link" activeclassname="active" exact="true">About</NavLink>
					</li>

					<li className="nav__item">
						<NavLink to="/works" className="nav-link" activeclassname="active" exact="true">Works</NavLink>
					</li>

					<li className="nav__item">
						<NavLink to="/contact" className="nav-link" activeclassname="active" exact="true">Contact</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	</header>
  )
}

export default Navbar;