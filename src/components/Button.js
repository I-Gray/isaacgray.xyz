import React from "react";
import theme from '../styles/theme'
import styled from 'styled-components';

const StyledButton = styled.button`
	background-color: Transparent;
	border: 2px solid black;
	padding: 1em;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 0.8vw;
	font-weight: bold;
	cursor: pointer;
	color: ${props => props.light ? theme.colours.white : theme.colours.darkGrey};
	border-color: ${props => props.light ? theme.colours.white : theme.colours.darkGrey};
	border-radius: 10px;
	transition: transform .2s ease-in-out;
	transition: background-color .2s ease-in-out;

	span {
		color: ${theme.colours.lightBlue};
	}

	&:hover {
		background-color: ${props => props.light ? theme.colours.white : theme.colours.darkGrey};
		color: ${props => props.light ? theme.colours.darkGrey :  theme.colours.white};
		transform: scale(1.05);
	}
`;

const Button = ({text, blueText, light}) => {

	return (
		<>
			<StyledButton light={light} >
				{text} <span>{blueText}</span>
			</StyledButton>
		</>
	);
};

export default Button;