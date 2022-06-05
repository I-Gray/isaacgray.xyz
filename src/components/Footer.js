import React from "react";
import styled from 'styled-components';
import Socials from './Socials';
import theme from '../styles/theme';
import logo from "../images/Logo.png"
import { Link } from 'gatsby';

const StyledFooter = styled.footer`
	display: flex;
    align-items: center;
	justify-content: center;
	background: ${theme.colours.darkGrey};
	width: 100%;
	height: 100%;

	a {
		color: ${theme.colours.grey};
		text-align: right;
		padding-right: 2vw;
		transition: color 0.8s ease-in-out;
		font-weight: 500;
		font-size: 1vw;
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
		padding-top: 1vh;
		padding-left: 1.5vw;
		padding-bottom: 1.5vh;
	}

	@media ${theme.sizes.mobile} {
		padding-top: 4vh;
		flex-direction: column;

		a {
			text-align: center;
			font-size: 3vw;
		}

		.social {
			ul {
				padding-top: 0vh;
			}
		}
	}
`;

const Footer = () => {
	return (
		<>
			<StyledFooter>
				<div className="rect" />
					<Link smooth to={"/#home"} style={{ textDecoration: 'none' }}>
						<a href="">DESIGNED & DEVELOPED</a>
						<a href=""><br/>BY <span>ISAAC GRAY</span> ©</a></Link>
					<Link smooth to={"/#home"}>	<img src={logo}  width="96" height="60" alt="Isaac Gray Logo"/></Link>
				<div className="social" >
					<Socials size={25} alt={false}/>
				</div>
			</StyledFooter>
		</>
	);
}

export default Footer;