import React, { useState, useEffect } from "react"
import theme from '../styles/theme';
import { Link } from "gatsby"
import logo from "../images/logo.svg"
import styled from 'styled-components';
import NavbarLinks from '../constants/NavbarLinks'
import MobileMenu from './MobileMenu';
import { useScrollDirection } from './hooks/useScrollDirection';
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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

const Navbar = ({ isHome }) => {

	const [isMounted, setIsMounted] = useState(!isHome);
	const scrollDirection = useScrollDirection('down');
	const [scrolledToTop, setScrolledToTop] = useState(true);
	const prefersReducedMotion = usePrefersReducedMotion();

	const handleScroll = () => {
		setScrolledToTop(window.pageYOffset < 50);
	};

	useEffect(() => {
		if (prefersReducedMotion) {
		  return;
		}
	
		const timeout = setTimeout(() => {
		  setIsMounted(true);
		}, 100);
	
		window.addEventListener('scroll', handleScroll);
	
		return () => {
		  clearTimeout(timeout);
		  window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	// CSS transitions settings
	const timeout = isHome ? loaderDelay : 0;
	const fadeClass = isHome ? 'fade' : '';
	const fadeDownClass = isHome ? 'fadedown' : '';

	return (
		<Header scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
			{/* ISSUE: change to raw svg import from icons folder */}
			<NavbarPanel>
			{/* link to home menu using Link component */}
			<img src={logo} alt="Logo" />
			<NavLinks>
				<div className="link-container">
					<ol>
						<TransitionGroup component={null}>
							{	
								isMounted &&
								NavbarLinks && 
								NavbarLinks.map(({name, url}, i) => (
									<CSSTransition key={i} classNames={fadeDownClass} timeout={timeout}>
										<li key={i} className="menu-item" style={{ transitionDelay: `${isHome ? i * 100 : 0}ms` }}>
											<Link className="links" to={url} onClick={() => setInProp(true)}>{name}<span class="divider">.</span></Link>
										</li>
									</CSSTransition>
								))
							}
						</TransitionGroup>
					</ol>
				</div>
			</NavLinks>
			<MobileMenu></MobileMenu>	
			</NavbarPanel>
		</Header>
	)
}

Navbar.propTypes = {
	isHome: PropTypes.bool,
};
  
export default Navbar;