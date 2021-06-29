import React from "react"

import logo from "../assets/images/logo.svg"
import menuLogo from "../assets/images/menu.svg"
import closeLogo from "../assets/images/close.svg"


const Navbar = () => {


	return (
		<div className="navbar">
			<div className="nav-container">
				<img src={logo} alt="Logo" className="nav-logo" />
				
				<img src={menuLogo} className="mobile-menu" alt="Burger Menu" />
				
				<nav>
					<img src={closeLogo} className="mobile-menu-exit" alt="Close button" />
					<ul className="nav-menu">
						<li><a href="#home">HOME</a></li>
						<li><a href="#about">ABOUT</a></li>
						<li><a href="#projects">PROJECTS</a></li>
						<li><a href="#contact">CONTACT</a></li>
					</ul>
				</nav>
			</div>
		</div>
	)
}

export default Navbar;