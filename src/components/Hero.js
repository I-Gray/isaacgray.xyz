import React from "react"
import HeroOrbit from '../assets/icons/HeroOrbit'
import FloatingIcons from '../assets/icons/FloatingIcons'
import styled from 'styled-components';
import theme from '../assets/styles/theme';
import Button from './Button';

const HeroSection = styled.section`	
	background: linear-gradient(90deg, ${theme.colours.darkGrey} 70%, ${theme.colours.white} 30%);
	display: grid;
    grid-template-columns: 70vw 30vw;
	position: relative;

	.wrapper {	
		.icons {
			position; absolute;
			top: 0;
			width: 70vw;
		}
	}

	.hero-left-container {
		margin-left: 10vw;
		margin-right: 10vw;
		height: 100vh;
		float: left;
		
		.rectangle {
			height: 150px;
			width: 2px;
			background-color: ${theme.colours.lightGrey};
		}

		h1 {
			margin-top: 25vh;
			font-size: 9em;
			color: ${theme.colours.white};
			text-align: left;

			span {
				color: ${theme.colours.lightBlue};
			}
		}
	
		p {
			font-size: 2em;
			color: ${theme.colours.lightGrey};
			font-family: 'Space Mono', sans-serif;
			padding-top: 10px;
			padding-bottom: 40px;
		}

		Button {
			text-align: left;
		}
	}

	.hero-right-container {
		margin-left: -26vw;
		float: right;
		margin-top: 25vh;
	}
`;

const Hero = () => {
	return (
		<>
		<HeroSection>
			<div className="Wrapper">
			{/* <FloatingIcons className="icons"/> */}
				<div className="hero-left-container">
					{/* <div class="rectangle"></div> */}
					<h1 className="hero-title">
						ISAAC <br/>
						<span>GRAY.</span>
					</h1>
					<p className="hero-description">
						developer, designer & <br />
						creator.
					</p>
					
					<Button text="Reach Out!" blueText=">" />	
				</div>
			</div>
			<div className="hero-right-container ">
				<HeroOrbit/>
			</div>
		</HeroSection>
		</>
	)
}

export default Hero;