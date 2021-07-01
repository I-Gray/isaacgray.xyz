import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import logo from "../assets/images/logo.svg"
import menuLogo from "../assets/images/menu.svg"
import closeLogo from "../assets/images/close.svg"


import styled, { css } from 'styled-components';
//import grayisaacLogo from '../assets/Icons/grayisaacLogo';

import NavbarLinks from '../assets/constants/NavbarLinks'

const StyledHeader = styled.header`
	background: var(--white);
	padding: 2em;
	width: 100%;
	position: fixed;

	display: flex;
	justify-content: space-between;
`;

const StyledNav = styled.nav`
	position: relative;
	background: var(--white);
	width: 100%;

	display: flex;

	img {
		margin: 0 2em;
		max-height: 5em;
		max-width: 10em;
		cursor: pointer;
	}

	.link-container {
		display: flex;

		margin-right: 0;
		margin-left: auto;

		ol {
			padding: 0;
			margin: 0;
			list-style: none;

			li {
				float: left;

				.links {
					color: var(--grey);
					text-decoration: none;
					display: block;
					padding: 1em;
					font-size: 1.5em;
					text-align: right;
				}

				&:hover {
					// background-color: var(--light-blue);
					cursor: pointer;
				}

				.links:hover {
					// color: white;
					color: var(--light-blue);	
				}
			}
		}
	}
`;

const Navbar = () => {
	const [navOpen, setNavOpen] = useState(false);
	console.log(navOpen);

	{/* Mobile compatability -> create hamburger menu component
		Implement with themeing from styled components??      */}
	return (
		  	<StyledHeader>
			  {/* ISSUE: change to raw svg import from icons folder */}
			  
			  <StyledNav>
			 	{/* link to home menu using Link component */}
				<img src={logo} alt="Logo" />
				<div className="link-container">
					<ol>
						{NavbarLinks && 
						NavbarLinks.map(({name, url}, i) => (
							<li key={i} className="menu-item">
								<Link className="links" to={url}>{name}</Link>
							</li>
						))}
					</ol>
				</div>
			  </StyledNav>
  			</StyledHeader>
	)
}

export default Navbar;