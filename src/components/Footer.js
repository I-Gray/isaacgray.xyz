import React from "react";
import styled from 'styled-components';
import Socials from './Socials';
import theme from '../assets/styles/theme';
import Logo from '../assets/icons/Logo';

const StyledFooter = styled.footer`
	display: flex;
	height: auto;
	min-height: 70px;
	padding: 15px;
	text-align: center;
	background: ${theme.colours.darkGrey};

	p {
		color: ${theme.colours.grey};
	}

	ul {
		padding: 0;
		margin: 0;
		list-style: none;
		text-align: center;
	}
`;

const Footer = () => {
	return (
		<>
			<StyledFooter>
				<ul>
					<li><p>DESIGNED & DEVELOPED <br/>BY ISAAC GRAY</p></li>
					<li><Logo size={80}/></li>
					<li><Socials size={25} alt={false}/></li>
				</ul>
			</StyledFooter>
		</>
	);
}

export default Footer;