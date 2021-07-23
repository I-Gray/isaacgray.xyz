import React from "react"
import theme from '../assets/styles/theme';
import { Link } from "gatsby"
import logo from "../assets/images/logo.svg"
import styled from 'styled-components';
import NavbarLinks from '../assets/constants/NavbarLinks'
import MobileMenu from './MobileMenu';

const Header = styled.header`
	background: var(--white);
	padding: 2em;
	width: 100%;
	position: fixed;
	z-index: 3000;

	display: flex;
	justify-content: space-between;

	border-bottom: 2px solid ${theme.colours.darkGrey};
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
	
	@media ${theme.sizes.mobile} {
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
`;

const Navbar = () => {
	return (
		<Header>
			{/* ISSUE: change to raw svg import from icons folder */}
			<NavbarPanel>
			{/* link to home menu using Link component */}
			<img src={logo} alt="Logo" />
			<NavLinks>
				<div className="link-container">
					<ol>
						{NavbarLinks && 
						NavbarLinks.map(({name, url}, i) => (
							<li key={i} className="menu-item">
								<Link className="links" to={url}>{name}<span class="divider">.</span></Link>
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