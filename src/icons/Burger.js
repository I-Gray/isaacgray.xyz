import styled from 'styled-components';
import React from 'react';
import { bool, func } from 'prop-types';
import theme from '../styles/theme';

// Styling Animation from 
// https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/

export const StyledBurger = styled.button`
	position: absolute;
	top: 30%;
	right: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 2rem;
	height: 2rem;
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
	z-index: 1000;
	font-size: inherit;

	@media ${theme.sizes.burger} {
		&:focus {
			outline: none;
		}

		div {
			width: 2rem;
			height: 0.25rem;
			background: ${({ theme, open }) => open ? theme.colours.white : theme.colours.lightBlue};
			border-radius: 10px;
			transition: all 0.3s linear;
			position: relative;
			transform-origin: 1px;

		:first-child {
			transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
		}

		:nth-child(2) {
			opacity: ${({ open }) => open ? '0' : '1'};
			transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
		}

		:nth-child(3) {
			transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
		}
	}
}
`;

const Burger = ({ open, setOpen }) => {
	return (
		<>
			<StyledBurger aria-label="Burger Menu" name="Burger Menu" open={open} onClick={() => setOpen(!open)}>
				<div></div>
				<div></div>
				<div></div>
			</StyledBurger>
		</>
	)
}

// Type Checking .. (best practice for aligning arguments with expected data)
Burger.propTypes = {
	open: bool.isRequired,
	setOpen: func.isRequired,
};


export default Burger;