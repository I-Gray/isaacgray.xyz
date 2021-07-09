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
	
	p {
		color: ${theme.colours.grey};
		text-align: right;
		padding-right: 2vw;

		&:hover {
			color: ${theme.colours.white};
			cursor: pointer;
		}
	}

	.social {
		padding-left: 1.5vw;
		padding-bottom: 1vh;
	}
`;

const Footer = () => {
	return (
		<>
			<StyledFooter>
				<p>DESIGNED & DEVELOPED <br/>BY ISAAC GRAY</p>
				<Logo className="logo" size={80}/>
				<div className="social" >
					<Socials size={25} alt={false}/>
				</div>
			</StyledFooter>
		</>
	);
}

export default Footer;