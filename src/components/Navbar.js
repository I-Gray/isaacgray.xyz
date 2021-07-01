import React, { useState } from "react"
import { Link } from "gatsby"

import logo from "../assets/images/logo.svg"
import menuLogo from "../assets/images/menu.svg"
import closeLogo from "../assets/images/close.svg"


import styled, { css } from 'styled-components';
//import grayisaacLogo from '../assets/Icons/grayisaacLogo';

import NavbarLinks from '../assets/constants/NavbarLinks'

const StyledHeader = styled.header`
	background: var(--white);
	padding: 1em;

	img {
		margin: 0 2em;
		max-height: 5em;
		max-width: 10em;
	}
`;

const StyledNav = styled.nav`
	position: fixed;
	z-index: 999;
	width: 66%;
	right: 0;
	top: 0;
	background: var(--colour);
	height: 100vh;
	padding: 1em;

	ol {
		list-style-type: none;
	}

	li {
		a {
			color: var(--grey);
			text-decoration: none;
			display: block;
			padding: .7em;
			font-size: 4em;
			text-align: right;

			&:hover {
				background-color: var(--dark-blue);
				color: var(--white)
			}
		}
	}
}
`;


const Title = styled.h1`
	font-size: 1.5em;
 	text-align: center;
  	color: var(--light-blue);
`;

const Wrapper = styled.section`
  	padding: 4em;
  	background: papayawhip;
`;


const Navbar = () => {
	const [navOpen, setNavOpen] = useState(false);
	console.log(navOpen);
	return (
		  	<StyledHeader>
			  {/* ISSUE: change to raw svg import from icons folder */}
			  <img src={logo} alt="Logo" />
			  <StyledNav>
				<ol>
					{NavbarLinks && 
					NavbarLinks.map(({name, url}, i) => (
						<li key={i}>
							<Link to={url}>{name}</Link>
						</li>
					))}
				</ol>
			  </StyledNav>
  			</StyledHeader>
	)
}

export default Navbar;