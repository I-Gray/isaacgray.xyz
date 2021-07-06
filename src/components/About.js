import React, { FC } from 'react'

import styled, { ThemeProvider }  from 'styled-components'
import CircleAccent from '../assets/icons/CircleAccent';
import theme from '../assets/styles/theme';
import AboutImage from '../assets/images/AboutPicture.png';

const AboutSection = styled.section`
	background: linear-gradient(90deg, ${theme.colours.darkGrey} 70%, ${theme.colours.white} 30%);
	display: grid;
    grid-template-columns: 60vw 40vw;

	.section-rectangle {
		height: 2vh;
		width: 8vw;
		background: ${theme.colours.lightBlue};
	}

	.about-left-container {
		margin-left: 10vw;
		margin-right: 10vw;
		height: 100vh;

		ul {
			font-size: 48px;
			font-family: 'Space Mono', sans-serif;
			color: ${theme.colours.grey};
			padding: 0;
			margin: 0;
			list-style: none;
			text-decoration: none;
			
			overflow: hidden;

			li {
				float: left;
				display: flex;
				padding: 1vh;
				text-decoration: none;

				div {
					height: 2px;
					width: 50vw;
					background: ${theme.colours.grey};
				}
			}
		}

		.about-text {
			padding-top: 10vh;
			font-size: 26px;
			font-family: 'Space Mono', sans-serif;
			color: ${theme.colours.lightGrey};
			text-align: left;
		}

		.about-learning {
			font-size: 26px;
			font-family: 'Space Mono', sans-serif;
			color: ${theme.colours.lightGrey};

			span {
				color: ${theme.colours.lightBlue};
			}
		}
	}

	.about-right-container {
		margin-left: 2vw;
		margin-right: 10vw;
		h1 {
			font-size: 120px;
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
					<ul>
						<li><p>01</p></li>
						<li><div/></li>
					</ul>
					<p className="about-text">
						Hi, I’m Isaac.
						<br/>
						<br/>
						I am an Australian developer currently living in Wollongong with a B.E & B.CS. I enjoy the design and development process in a range of topics such as computer vision, web-development, security & hardware projects.
						<br/>
						<br/>
						I have experience creating things in teams as well as many solo-projects, all of which you can read about on this site!
						<br/>
						<br/>
						Other than tech, I enjoy reading, rock-climbing & making music. 
					</p>
					<p class="about-learning">
						<br/>
						<br/>
						Currently I am learning: <span>Vue</span>|
					</p>
				</div>
				<div className="about-right-container">
					<h1>about <br/><span>me.</span></h1>
					<img src={AboutImage} alt="Picture of Isaac G"></img>
					<CircleAccent/>
				</div>
		</AboutSection>
		</>
	);
};

export default About;