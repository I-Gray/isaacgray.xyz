import React, { FC } from 'react'

import styled, { ThemeProvider }  from 'styled-components'
import CircleAccent from '../assets/icons/CircleAccent';
import theme from '../assets/styles/theme';
import AboutImage from '../assets/images/AboutPicture.png';

// Work out if you need this part ...
const AboutFrame = styled.div`

	.section-rectangle {
		height: 20px;
		width: 100px;
		background: ${theme.colours.lightBlue};
	}
	.y-rectangle {
		height: 200px;
		width: 2px;
		background: ${theme.colours.grey};
	}
`;

const AboutSection = styled.section`
	background: linear-gradient(90deg, ${theme.colours.darkGrey} 70%, ${theme.colours.white} 30%);

	.section-rectangle {
		height: 20px;
		width: 100px;
		background: ${theme.colours.lightBlue};
	}
	.y-rectangle {
		height: 200px;
		width: 2px;
		background: ${theme.colours.grey};
	}

	.about-left-container {
		// setup
		margin-left; 40px;

		.section-num {
			font-size: 48px;
			font-family: 'Space Mono', sans-serif;
			color: ${theme.colours.grey};
		}

		.x-rectangle {
			height: 2px;
			width: 400px;
			background: ${theme.colours.grey};
		}
		
		.about-text {
			font-size: 24px;
			font-family: 'Space Mono', sans-serif;
			color: ${theme.colours.lightGrey};
		}

		.about-learning {
			font-size: 24px;
			font-family: 'Space Mono', sans-serif;
			color: ${theme.colours.lightGrey};

			span {
				color: ${theme.colours.lightBlue};
			}
		}
	}

	.about-right-container {
		
		h1 {
			font-size: 144px;
			color: ${theme.colours.white};
			span {
				color: ${theme.colours.lightBlue};
				font-weight: bold;
			}
		}
	}
`;

const About = () => {

	return (
		<>
		<AboutSection>
		<div className="section-rectangle"/>
			<div className="y-rectangle"/>
			<div className="about-left-container">
				<p className="section-num">01</p>
				<div className="x-rectangle"/>
				<p className="about-text">
					Hi, I’m Isaac.<br/>
					I am an Australian developer currently living in Wollongong with a B.E & B.CS. I enjoy the design and development process in a range of topics such as computer vision, web-development, security & hardware projects.
					<br/>
					I have experience creating things in teams as well as many solo-projects, all of which you can read about on this site!
					<br/>
					Other than tech, I enjoy reading, rock-climbing & making music. 
				</p>
				<p class="about-learning">
					Currently I am learning: <span>Vue</span> |
				</p>
			</div>
			<div className="about-right-container">
				<h1>about <span>me.</span></h1>
				<img src={AboutImage} alt="Picture of Isaac G"></img>
				<CircleAccent/>
			</div>
		</AboutSection>
		</>
	);
};

export default About;