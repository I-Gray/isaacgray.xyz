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
// import Opencv from '../assets/icons/skills/Opencv';
// import Ros from '../assets/icons/skills/Ros';


const StyledTitle = styled.div`
	background: linear-gradient(90deg, ${theme.colours.darkGrey} 70%, ${theme.colours.white} 30%);
	height: 20vh;
	display flex;

	h1 {
		font-size: 96px;
		color: ${theme.colours.white};
		margin-left: 10vw;
		font-weight: bold;
		float: left;

		span {
			color: ${theme.colours.lightBlue};
			font-weight: 400;
			font-size: 100px;
		}
	}

	p {
		font-size: 20px;
		font-family: 'Space Mono', sans-serif;
		color: ${theme.colours.lightGrey};
		float: right;
		padding-left: 17vw;
		padding-top: 2vh;

		span {
			color: ${theme.colours.lightBlue};
		}
	}
`;

const SkillsSection = styled.section`
	background: linear-gradient(90deg, ${theme.colours.darkGrey} 70%, ${theme.colours.white} 30%);
	display: grid;
	grid-template-columns: 70vw 30vw;
	padding-top: 2vh;
	
	.content {
		margin-left: 10vw;
		padding-bottom: 10vh;
		padding-top: 5vh;
		grid-template-columns: 30vw 30vw;
		display: flex;

		.right-content {
			padding-left: 20vh;
		}

		p {
			font-size: 24px;
			font-family: 'Space Mono', sans-serif;
			color: ${theme.colours.white};

			span {
				color: ${theme.colours.lightBlue};
			}
		}

		ol {
			display: flex;
			flex-direction: row;
			align-items: center;
			margin: 0;
			list-style: none;

			li {
				filter: grayscale(1);
				padding: 10px;
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

	}
`;

const Skills = () => {
	return (
		<>
			<SectionHeading section_num="02" />
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

				<div className="content">
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
								{/* <Pytorch size="55" /> */}

								{/* <Arduino size="55" /> */}
								{/* <Qt size="55" /> */}
								{/* <Opencv size="55" /> */}
								{/* <Ros size="55" /> */}
							</ol>
						</div>
					</div>
				</div>
				{/* <div className="skills-orbit">
					<SkillsOrbit />
				</div> */}
			</SkillsSection>
		</>
	);
};


export default Skills;