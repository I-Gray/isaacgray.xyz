import React from "react"
import HeroOrbit from '../assets/icons/HeroOrbit'
import FloatingIcons from '../assets/icons/FloatingIcons'
import styled from 'styled-components';
import theme from '../assets/styles/theme';
import Button from './Button';

const HeroSection = styled.section`	
	display: flex;
	background: linear-gradient(90deg, ${theme.colours.darkGrey} 70%, ${theme.colours.white} 30%);
	height: 100vh;
	
	.hero-container {
		padding: 2em 3em 6em 4em;
		
		.rectangle {
			height: 150px;
			width: 2px;
			background-color: ${theme.colours.lightGrey};
		}

		h1 {
			font-size: 9em;
			color: ${theme.colours.white};
			padding-top: 25%;
			margin: 0 2em;
			text-align: left;
	
			span {
				color: ${theme.colours.lightBlue};
			}
		}
	
		p {
			font-size: 2em;
			margin: 0 9em;
			color: ${theme.colours.lightGrey};
			font-family: 'Space Mono', sans-serif;
		}

		Button {
			text-align: left;
		}
	}
`;

const Hero = () => {
	return (
		<HeroSection>
			<div className="hero-container">
				<div class="rectangle"></div>
				<h1 className="hero-title">
					ISAAC <br/>
					<span>GRAY.</span>
				</h1>
				<p className="hero-description">
					developer, designer & <br />
					creator.
				</p>
				{/* <FloatingIcons /> */}
				<Button text="Reach Out!" blueText=">" />	
			</div>
			{/* <HeroOrbit/> */}
			
		</HeroSection>	
	)
}

export default Hero;