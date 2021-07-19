import React from 'react';
import styled from 'styled-components';
import SectionHeading from './SectionHeading';
import theme from '../assets/styles/theme';

import SkillsOrbit from '../assets/icons/SkillsOrbit'

// Turn skills logos into a component and iterate through
// them to save code and improve reusability. 
import Javascript from '../assets/icons/skills/Javascript';
import Reactlogo from '../assets/icons/skills/Reactlogo';
import Gatsby from '../assets/icons/skills/Gatsby';  
import Sass from '../assets/icons/skills/Sass';  

import Mongo from '../assets/icons/skills/Mongo';
import Graphql from '../assets/icons/skills/Graphql';
import Firebase from '../assets/icons/skills/Firebase';

import Figma from '../assets/icons/skills/Figma';
// import Xd from '../assets/icons/skills/Xd';
import Ai from '../assets/icons/skills/Ai';
import Ps from '../assets/icons/skills/Ps';

import Python from '../assets/icons/skills/Python'
import Cpp from '../assets/icons/skills/Cpp';
import Java from '../assets/icons/skills/Java';
import Pytorch from '../assets/icons/skills/Pytorch';

import Arduino from '../assets/icons/skills/Arduino'
import Qt from '../assets/icons/skills/Qt';
import Opencv from '../assets/icons/skills/Opencv';
// import Ros from '../assets/icons/skills/Ros';


const StyledTitle = styled.div`
	background: linear-gradient(90deg, ${theme.colours.darkGrey} 70%, ${theme.colours.white} 30%);
	display flex;

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

	@media ${theme.sizes.mobileL} {
		background: ${theme.colours.darkGrey};

		h1 {
			font-size: 10vw;
		}

		p {
			font-size: 2vw;
		}


	}

	@media ${theme.sizes.mobileXS} {
		display: flex;
		flex-wrap: wrap;
		height: 40vh;
		h1 {
			font-size: 20vw;
			margin-left: 10vw;
			span {
				font-size: 18vw;
			}
		}

		p {
			padding-top: 0;
			margin-left: 5vw;
			font-size: 5vw;
		}
	}
`;

const SkillsSection = styled.section`
	background: linear-gradient(90deg, ${theme.colours.darkGrey} 70%, ${theme.colours.white} 30%);
	grid-template-columns: 70vw;
	padding-top: 2vh;
	position: relative;
	
	padding-bottom: 10vh;
	padding-top: 0vh;
	display: flex;
	padding-left: 10vw;
	padding-top: 5vh;

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
		align-items; center;

		li {
			filter: grayscale(1);
			padding: 1vw;
			transition: filter 0.8s ease-in-out;
			transition: transform .2s ease-in-out;
			margin-bottom: 3vh;
		}

		li:hover {
			filter: grayscale(0);
			transform: scale(1.1);
			cursor: pointer;
		}
	}
	}

	.skills-orbit {
		svg {
			z-index: 0;
			position: absolute;
			top: -25%;
			right: 15%
		}	
	}

	@media ${theme.sizes.mobileL} {
		display: flex;
		flex-wrap: wrap;
		background: ${theme.colours.darkGrey};
		
		h1 {
			font-size: 3vw;
		}

		.skills-orbit {
			display: none;
		}

		.left-content {
			padding-right: 15vw;
			p {
				padding-top: 3vh;
				font-size: 2vw;
			}
		}

		.right-content {
			padding-left: 0;
			p {
				padding-top: 3vh;
				font-size: 2vw;
			}
		}
	}

	@media ${theme.sizes.mobileM} {
		display: flex;
		flex-wrap: wrap;
		background: ${theme.colours.darkGrey};

		.left-content {
			padding-right: 5vw;

			p {
				padding-top: 3vh;
				font-size: 4vw;
			}
		}

		.right-content {
			padding-left: 0;

			p {
				padding-top: 3vh;
				font-size: 4vw;
			}
		}
	}

	@media ${theme.sizes.mobileXS} {
		padding-top: 0vh;
		.left-content, .right-content {
			p {
				font-size: 6vw;
			}
		}
	}
`;

const Skills = () => {
	return (
		<>
			<SectionHeading section_num="02" leftDark={true} rightDark={true} />
			<StyledTitle>
					<h1><span>my<br/></span> skills.</h1>
					<p>Over the course of my 
						<br/>degrees, I have built up a <br />
						wide range of both <span>software <br/>
						& hardware</span> experience, both <br />
						through my studies and in <br />
						personal projects.</p>
				</StyledTitle>
			<SkillsSection>
				<div className="left-content">
					<div className="front-end">
						<p>Front-end Web <span>//</span></p>
						<br />
						<ol>
							<li><Javascript size="55"/></li>
							<li><Reactlogo size="55"/></li>
							<li><Gatsby size="55"/></li>
							<li><Sass size="55"/></li>
						</ol>
					</div>

					<div className="back-end">
						<p>Back-end Web <span>//</span></p>
						<br />
						<ol>
							<li><Mongo size="55"/></li>
							<li><Graphql size="55"/></li>
							<li><Firebase size="55"/></li>
						</ol>
					</div>
				</div>
				<div className="right-content">	
					<div className="design">
						<p>UI/UX Design <span>//</span></p>
						<br/>
						<ol>
							<li><Figma size="55" /></li>
							{/* <Xd size="55" /> */}
							<li><Ai size="55" /></li>
							<li><Ps size="55" /></li>
						</ol>
					</div>

					<div className="technical" >
						<p>Technical <span>//</span></p>
						<br />
						<ol>
							<li><Python size="55" /></li>
							<li><Cpp size="55" /></li>
							<li><Java size="55" /></li>
							{/* <li><Pytorch size="55" /></li> */}
						</ol>
						<ol>
							<li><Arduino size="55" /></li>
							<li><Qt size="55" /></li>
							<li><Opencv size="55" /></li>
						</ol>
					</div>
				</div>
				<div className="skills-orbit">
					<svg width="305" height="616" viewBox="0 0 305 616" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1.35899e-05 614C167.342 614 303 478.342 303 311C303 143.658 167.342 8 1.35899e-05 8" stroke="#292626" stroke-width="4"/>
						<path d="M2.38419e-07 558C135.31 558 245 448.31 245 313C245 177.69 135.31 68 2.38419e-07 68" stroke="#292626" stroke-width="4"/>
						<circle r="20.5" transform="matrix(-1 0 0 1 244.5 318.5)" fill="#26C1E7"/>
						<path d="M71 21C71 31.5391 79.3279 40 89.5 40C99.6721 40 108 31.5391 108 21C108 10.4609 99.6721 2 89.5 2C79.3279 2 71 10.4609 71 21Z" fill="white" stroke="#292626" stroke-width="4"/>
					</svg>
				</div>
			</SkillsSection>
		</>
	);
};


export default Skills;