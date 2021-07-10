import React from "react";
import styled from 'styled-components';
import Socials from './Socials';
import theme from '../assets/styles/theme';
import Logo from '../assets/icons/Logo';

const StyledFooter = styled.footer`
	display: flex;
    align-items: center;
	justify-content: center;
	background: ${theme.colours.darkGrey};
	width: 100vw;

	a {
		color: ${theme.colours.grey};
		text-align: right;
		padding-right: 2vw;
		transition: color 0.8s ease-in-out;
		font-weight: 500;
		font-style: italic;

		&:hover {
			cursor: pointer;
			color: ${theme.colours.white};
			span {
				color: ${theme.colours.lightBlue};
			}
		}
	}

	.social {
		padding-left: 1.5vw;
		padding-bottom: 1.5vh;
	}
`;

const Footer = () => {
	return (
		<>
			<StyledFooter>
				<div className="rect" />
				<a>DESIGNED & DEVELOPED <br/>BY <span>ISAAC GRAY</span> ©</a>
				<Logo className="logo" size={80}/>
				<div className="social" >
					<Socials size={25} alt={false}/>
				</div>
			</StyledFooter>
		</>
	);
}

export default Footer;