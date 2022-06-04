import React from "react"
import theme from '../styles/theme';
import styled from 'styled-components';
import NavbarLinks from '../constants/NavbarLinks'
import MobileMenu from './MobileMenu';
import { Link } from 'gatsby';
import Logo from '../icons/Logo';


const Header = styled.header`
	background: ${theme.colours.white};

	padding-left: 10vw;
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

	.logo {
		cursor: pointer;
		transform-origin: 50% 50%;
		-webkit-transition: transform 0.25s;
		-moz-transition:    transform 0.25s;
		-ms-transition:     transform 0.25s;
		-o-transition:      transform 0.25s;
		transition:         transform 0.25s;
	}

	.logo:hover {
		cursor: pointer;
		-webkit-transform: scale(1.02);
		-moz-transform: scale(1.02);
		-o-transform: scale(1.02);
		transform: scale(1.02);
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
					font-size: 1.4em;
					text-align: right;
					font-weight: 500;
					transition: color 0.4 ease-in-out;

					-webkit-transition: all 0.25s;
					-moz-transition:    all 0.25s;
					-ms-transition:     all 0.25s;
					-o-transition:      all 0.25s;
					transition:         all 0.25s;
				}

				&:hover {
					cursor: pointer;
					-webkit-transform: skewX(-4deg);
					-moz-transform: skewX(-4deg);
					-o-transform: skewX(-4deg);
					transform: skewX(-4deg);
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
			<Link smooth to={"/#home"}><Logo class="logo" size={80}/></Link>
			<NavLinks>
				<div className="link-container">
					<ol>
						{NavbarLinks && 
						NavbarLinks.map(({name, url}, i) => (
							<li key={i} className="menu-item">
								<Link  className="links" smooth to={url}>{name}<span class="divider">.</span></Link>
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