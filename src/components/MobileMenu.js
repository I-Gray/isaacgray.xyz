import React, { useState, useRef }from 'react';
import Burger from '../assets/icons/Burger'
import styled from 'styled-components';
import NavbarLinks from '../assets/constants/NavbarLinks'
import { Link } from "gatsby"
import { bool } from 'prop-types';
import { useOnClickOutside } from './hooks/useOnClickOutside';

const Sidebar = styled.nav`
	position: fixed;
	z-index: 999;
	width: 66%;
	right: 0;
	top: 0;
	background: ${({ theme }) => theme.colours.lightBlue};
	height: 100vh;
	padding: 5vw;
	transition: transform 0.3s ease-in-out;
	transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};

	li {
		float: right;
		list-style: none;
		padding: 0;
		margin: 0;
		margin-right: 0;
		margin-left: 2em;
		margin-top: 8vh;
		display: flex;
		padding-left: 5vw;

		.links {
			color: ${({ theme }) => theme.colours.white};
			text-decoration: none;
			display: block;
			padding: 1vh;
			font-size: 8vw;
			text-align: right;
		}

		&:hover {
			background-color: ${({ theme }) => theme.colours.lightBlue};
			cursor: pointer;
		}

		.links:hover {
			background-color: ${({ theme }) => theme.colours.white};
			color: ${({ theme }) => theme.colours.darkGrey};
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