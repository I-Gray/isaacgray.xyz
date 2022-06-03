import React from 'react';
import styled from 'styled-components';
import SectionHeading from './SectionHeading';
import theme from '../styles/theme';

import SkillsOrbit from '../icons/SkillsOrbit'

// Turn skills logos into a component and iterate through
// them to save code and improve reusability. 
import TypeScript from '../icons/skills/TypeScript';
import Reactlogo from '../icons/skills/Reactlogo';
import Gatsby from '../icons/skills/Gatsby';  
import Sass from '../icons/skills/Sass';  

import AWS from '../icons/skills/AWS';
import Graphql from '../icons/skills/Graphql';
import Firebase from '../icons/skills/Firebase';
import Terraform from '../icons/skills/Terraform';

import PostgreSQL from '../icons/skills/PostgreSQL';
import Kubernetes from '../icons/skills/Kubernetes';
import Docker from '../icons/skills/Docker';
import Linux from '../icons/skills/Linux';

import Figma from '../icons/skills/Figma';
// import Xd from '../icons/skills/Xd';
import Ai from '../icons/skills/Ai';
import Ps from '../icons/skills/Ps';

import Python from '../icons/skills/Python'
import Cpp from '../icons/skills/Cpp';
import Java from '../icons/skills/Java';
import Pytorch from '../icons/skills/Pytorch';

import Arduino from '../icons/skills/Arduino'
import Qt from '../icons/skills/Qt';
import Opencv from '../icons/skills/Opencv';
// import Ros from '../icons/skills/Ros';


const StyledTitle = styled.div`
	background: linear-gradient(90deg, ${theme.colours.darkGrey} 70%, ${theme.colours.white} 30%);
	display flex;
	height: 100%;
	padding-bottom: 10vh;

	h1 {
		font-size: 6vw;
		color: ${theme.colours.white};
		margin-left: 10vw;
		font-weight: bold;
		float: left;

		span {
			color: ${theme.colours.lightBlue};
			font-weight: 400;
			font-size: 8vw;
		}
	}

	p {
		font-size: 1.5vw;
		font-family: 'Space Mono', sans-serif;
		color: ${theme.colours.lightGrey};
		padding-left: 5vw;
		padding-top: 2vh;

		span {
			color: ${theme.colours.lightBlue};
		}
	}

	@media ${theme.sizes.tabletL} {
		background: ${theme.colours.darkGrey};
		padding-bottom: 2vh;
		h1 {
			font-size: 12vw;

			span {
				font-size: 10vw;
			}
		}

		p {
			padding-top: 4vh;
			font-size: 2vw;
		}
	}
	
	@media ${theme.sizes.tabletS} {
		
	}

	@media ${theme.sizes.mobile} {
		display: flex;
		flex-wrap: wrap;
		height: 100%;
		padding-right: 10vw;
		padding-bottom: 2vh;

		h1 {
			font-size: 20vw;
			margin-left: 10vw;
			span {
				font-size: 18vw;
			}
		}

		p {
			padding-top: 2vh;
			margin-left: 5vw;
			font-size: 4vw;
		}
	}
`;

const SkillsSection = styled.section`
	background: linear-gradient(90deg, ${theme.colours.darkGrey} 70%, ${theme.colours.white} 30%);
	grid-template-columns: 70vw;
	padding-top: 2vh;
	position: relative;
	
	padding-top: 0vh;
	display: flex;
	padding-left: 10vw;
	
	padding-top: 2vh;

	.right-content {
		padding-left: 10vw;
	}

	p {
		font-size: 1.5vw;
		font-family: 'Space Mono', sans-serif;
		color: ${theme.colours.white};

		span {
			color: ${theme.colours.lightBlue};
		}
	}

	ol {
		display: flex;
		list-style: none;
		align-items: center;

		li {
			filter: grayscale(1);
			padding: 1vw;
			transition: transform .2s ease-in-out;
			margin-bottom: 3vh;
		}

		li:hover {
			filter: grayscale(0.2);
			transform: scale(1.1);
			cursor: pointer;
		}
	}

	.skills-orbit {
		display: flex;
		position: absolute;
		left: 65%;
		transform: scale(-0.65, 0.65);
		z-index; 0;
		top: 5%;
	}

	@media ${theme.sizes.tabletL} {
		background: ${theme.colours.darkGrey};

		.skills-orbit {
			display: none;
		}

		.left-content {
			padding-right: 5vw;
			p {
				padding-top: 2vh;
				font-size: 3vw;
			}
		}

		.right-content {
			p {
				padding-top: 2vh;
				font-size: 3vw;
			}
		}
	}

	@media ${theme.sizes.tabletS} {
		.left-content {
			padding-right: 0vw;
			p {
				padding-top: 0vh;
				font-size: 2.5vw;
			}
		}

		.right-content {
			p {
				padding-top: 0vh;
				font-size: 2.5vw;
			}
		}
	}

	@media ${theme.sizes.mobile} {
		display: flex;
		flex-wrap: wrap;
		position: relative;
		
		h1 {
			font-size: 3vw;
		}

		.skills-orbit {
			z-index: 1;
			display: flex;
			transform: scale(0.5);
			
			svg {
				position: absolute;
				display: flex;
				top: -20%;
				left: 10%;
			}
		}

		.left-content {
			z-index: 2;
			padding-right: 15vw;
			p {
				padding-top: 3vh;
				font-size: 5vw;
			}
		}

		.right-content {
			z-index: 2;
			padding-left: 0;
			p {
				padding-top: 3vh;
				font-size: 5vw;
			}
		}

		.skills-orbit {
			display: none;
		}
	}
`;

const Experience = () => {
	return (
		<>	
			<div id="experience">
			<SectionHeading section_num="04" leftDark={true} rightDark={true} />
			<StyledTitle>
					<h1><span>my<br/></span> experience.</h1>

				</StyledTitle>
			<SkillsSection>
				<div className="left-content">
					<div className="front-end">
						<p>Front-end Web <span>//</span></p>
						<br />
						<ol>
							<li><TypeScript size="55"/></li>
							<li><Reactlogo size="55"/></li>
							<li><Gatsby size="55"/></li>
						</ol>
					</div>

					
					<p>Over the course of my 
						<br/>degrees, I have built up a <br />
						wide range of both <span>software <br/>
						& hardware</span> experience, both <br />
						through my work experience, studies  <br />
						and personal projects.</p>
					
				</div>
				<div className="skills-orbit">
					<svg width="305" height="616" viewBox="0 0 305 616" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M305 614C137.658 614 2 478.342 2 311C2 143.658 137.658 8 305 8" stroke="#292626" stroke-width="4"/>
						<path d="M305 558C169.69 558 60 448.31 60 313C60 177.69 169.69 68 305 68" stroke="#292626" stroke-width="4"/>
						<circle cx="60.5" cy="318.5" r="20.5" fill="#26C1E7"/>
						<path d="M234 21C234 31.5391 225.672 40 215.5 40C205.328 40 197 31.5391 197 21C197 10.4609 205.328 2 215.5 2C225.672 2 234 10.4609 234 21Z" fill="white" stroke="#292626" stroke-width="4"/>
					</svg>
				</div>
			</SkillsSection>
			</div>
		</>
	);
};


export default Experience;