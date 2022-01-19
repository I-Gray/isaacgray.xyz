import React from "react"
import theme from '../styles/theme';
import logo from "../images/Logo.png"
import styled from 'styled-components';
import NavbarLinks from '../constants/NavbarLinks'
import MobileMenu from './MobileMenu';
import { HashLink } from 'react-router-hash-link';

const Header = styled.header`
	background: ${theme.colours.white};

	padding-left: 1.5vw;
	padding-top: 2vh;
	padding-bottom: 2vh;

	width: 100%;
	position: fixed;
	z-index: 3000;

	display: flex;
	justify-content: space-between;

	border-bottom: 2px solid ${theme.colours.darkGrey};

	@media ${theme.sizes.mobileS} {
		padding-right: 2vw;
	}
`;

const NavbarPanel = styled.nav`
	position: relative;
	background: ${theme.colours.white};
	width: 100%;

	display: flex;

	img {
		max-height: 5em;
		max-width: 10em;
		cursor: pointer;
		margin-left: 8vw;
	}
`;

const NavLinks = styled.div`
	display: flex;
	width: 100%;
	margin-right: 10em;
	
	@media ${theme.sizes.burger} {
		display: none;
	}

	.link-container {
		margin-right: 0;
		margin-left: auto;

		ol {
			padding: 0;
			margin: 0;
			list-style: none;

			li {
				float: left;

				.links {
					color: ${theme.colours.lightBlue};
					text-decoration: none;
					
					display: inline-block;
					padding: 15px 20px;
					position: relative;
				}
				.links:after {    
					background: none repeat scroll 0 0 transparent;
					bottom: 0;
					content: "";
					display: block;
					height: 2px;
					left: 50%;
					position: absolute;
					background: ${theme.colours.lightBlue};
					transition: width 0.3s ease 0s, left 0.3s ease 0s;
					width: 0;
				}
				
				.links:hover:after { 
					width: 100%; 
					left: 0; 
				}

				.links {
					color: ${theme.colours.grey};
					text-decoration: none;
					display: block;
					padding: 1em;
					font-size: 1.5em;
					text-align: right;
					font-weight: 500;
					transition: color 0.4 ease-in-out;
				}

				&:hover {
					cursor: pointer;
				}

				.links:hover {
					color: ${theme.colours.lightBlue};
				}

				span {
					color: ${theme.colours.lightBlue};
				}	
			}
		}
	}

	@media ${theme.sizes.mobile} {

	}
`;

const Navbar = () => {
	return (
		<Header>
			<NavbarPanel>
			{/* link to home menu using Link component */}
			<HashLink smooth to={"/#home"}><img src={logo} alt="Logo" /></HashLink>
			<NavLinks>
				<div className="link-container">
					<ol>
						{NavbarLinks && 
						NavbarLinks.map(({name, url}, i) => (
							<li key={i} className="menu-item">
								<HashLink className="links" smooth to={url}>{name}<span class="divider">.</span></HashLink>
							</li>
						))}
					</ol>
				</div>
			</NavLinks>
			<MobileMenu></MobileMenu>	
			</NavbarPanel>
		</Header>
	)
}

export default Navbar;