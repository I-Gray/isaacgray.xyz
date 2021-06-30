import React, { useState } from "react"

import logo from "../assets/images/logo.svg"
import menuLogo from "../assets/images/menu.svg"
import closeLogo from "../assets/images/close.svg"


const Navbar = () => {
	const [navOpen, setNavOpen] = useState(false);
	console.log(navOpen);
	return (
		<div className="navbar">
			<div className="nav-container">
				<img src={logo} alt="Logo" className="nav-logo" />
				
				<svg setNavOpen={navOpen} onClick={() => setNavOpen(!navOpen)} className="mobile-menu" version="1.1" viewBox="0 0 50 50">
					<path fill="#231F20" d="M8.667,15h30c0.552,0,1-0.447,1-1s-0.448-1-1-1h-30c-0.552,0-1,0.447-1,1S8.114,15,8.667,15z"/>
					<path fill="#231F20" d="M8.667,37h30c0.552,0,1-0.447,1-1s-0.448-1-1-1h-30c-0.552,0-1,0.447-1,1S8.114,37,8.667,37z"/>
					<path fill="#231F20" d="M8.667,26h30c0.552,0,1-0.447,1-1s-0.448-1-1-1h-30c-0.552,0-1,0.447-1,1S8.114,26,8.667,26z"/>
		   		</svg>
		   
				{/* <img src={menuLogo} className="mobile-menu" alt="Burger Menu" /> */}

				<nav>
					{/* <img src={closeLogo} className="mobile-menu-exit" alt="Close button" /> */}
					<svg className="mobile-menu-exit" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times"  role="img" viewBox="0 0 352 512">
						<path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z">
						</path>
					</svg>
					<ul className="nav-menu">
						<li><a className="current_page_item" href="#home">HOME</a></li>
						<li><a className="current_page_item" href="#about">ABOUT</a></li>
						<li><a className="current_page_item" href="#projects">PROJECTS</a></li>
						<li><a className="current_page_item" href="#contact">CONTACT</a></li>
					</ul>
				</nav>
			</div> 
		</div>
	)
}

export default Navbar;