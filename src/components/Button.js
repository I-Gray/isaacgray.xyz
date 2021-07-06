import React from "react";
import theme from '../assets/styles/theme'
import styled from 'styled-components';

const StyledButton = styled.button`
	background-color: Transparent;
	border: 2px solid black;
	padding: 1em;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	font-weight: bold;
	cursor: pointer;
	color: ${theme.colours.white};
	border-color: ${theme.colours.white};
	border-radius: 8px;
	transition-duration: 0.4s;

	span {
		color: ${theme.colours.lightBlue};
	}

	&:hover {
		background-color: ${theme.colours.white};
		color: ${theme.colours.darkGrey};
	}
`;

const Button = ({text, blueText}) => {

	return (
		<>
			<StyledButton>
				{text} <span>{blueText}</span>
			</StyledButton>
		</>
	);
};

export default Button;