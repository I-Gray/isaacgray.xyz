import React, { useState, useRef }from 'react';
import Burger from '../icons/Burger'
import styled from 'styled-components';
import NavbarLinks from '../constants/NavbarLinks'
import { Link } from "gatsby"
import { bool } from 'prop-types';
import { useOnClickOutside } from './hooks/useOnClickOutside';
import theme from '../styles/theme';


const Sidebar = styled.nav`
	position: fixed;
	z-index: 999;
	width: 66%;
	right: 0;
	top: 0;
	background: ${({ theme }) => theme.colours.lightBlue};
	height: 100%;
	padding: 3vw;
	transition: transform 0.3s ease-in-out;
	transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};

	li {
		float: right;
		list-style: none;
		margin: 0;
		margin-right: 0;
		margin-left: 2em;
		margin-top: 5vh;
		display: block;
		padding-left: 10vw;
		padding-top: 7vh;
		font-weight: 600;

		.links {
			color: ${({ theme }) => theme.colours.white};
			text-decoration: none;
			display: inline-block;
			padding: 0.5vh;
			font-size: 7vw;
			text-align: right;
			position: relative;

			-webkit-transition: all 0.25s;
			-moz-transition:    all 0.25s;
			-ms-transition:     all 0.25s;
			-o-transition:      all 0.25s;
			transition:         all 0.25s;
			
		}
		.links:hover {
			color: ${({ theme }) => theme.colours.darkGrey};
			-webkit-transform: skewX(-4deg);
			-moz-transform: skewX(-4deg);
			-o-transform: skewX(-4deg);
			transform: skewX(-4deg);
		}
		.links:after {    
			background: none repeat scroll 0 0 transparent;
			bottom: 0;
			content: "";
			display: block;
			height: 4px;
			left: 50%;

			position: absolute;
			color: ${({ theme }) => theme.colours.darkGrey};
			background-color: ${({ theme }) => theme.colours.white};
			cursor: pointer;
			transition: width 0.3s ease 0s, left 0.3s ease 0s;
			width: 0;
		}
		
		.links:hover:after { 
			color: ${({ theme }) => theme.colours.darkGrey};
			background-color: ${({ theme }) => theme.colours.white};
			width: 100%; 
			left: 0; 
		}
	}

	@media ${theme.sizes.burger} {
		width: 35%;

		li {
			display: block;
			padding-left: 10vw;
			padding-top: 5vh;
			float: right;

			.links {
				font-size: 4vw;
			}
		}
	}

	@media ${theme.sizes.tabletS} {
		width: 40%;

		li {
			margin-top: 5vh;
			display: block;
			padding-left: 10vw;
			padding-top: 5vh;
			float: right;

			.links {
				font-size: 8vw;
			}
		}
	}

	@media ${theme.sizes.tabletL} {
		width: 50%;

		li {

			display: block;
			padding-left: 10vw;
			padding-top: 4vh;
			float: right;

			.links {
				font-size: 5vw;
			}
		}
	}

	@media ${theme.sizes.mobile} {
		width: 66%;

		li {
			display: block;
			padding-left: 10vw;
			padding-top: 5vh;
			float: right;

			.links {
				font-size: 8vw;
			}
		}
	}




`;

const MobileMenu = () => {
	// Handle click of burger menu from here using useState hook
	const [open, setOpen] = useState(false);
	const node = useRef();
	useOnClickOutside(node, () => setOpen(false));

	return (
		<>
		<div ref={node} >
			<Burger open={open} setOpen={setOpen} />
			<Sidebar open={open} setOpen={setOpen}>
				<ol>
					{NavbarLinks && 
					NavbarLinks.map(({name, url}, i) => (
						<li key={i} className="menu-item">
							<Link className="links" to={url}>{name}</Link>
						</li>
					))}
				</ol>
			</Sidebar>
		</div>
		</>
	);
};

MobileMenu.propTypes = {
	open: bool.isRequired,
}

export default MobileMenu;