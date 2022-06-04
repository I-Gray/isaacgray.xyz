import React from 'react'
import styled from 'styled-components'
import theme from '../styles/theme';
import SectionHeading from './SectionHeading';
import projectsData from '../data/projectsData'
import { StaticImage } from "gatsby-plugin-image"

import Github from '../icons/Github';
import Link from '../icons/Link';
import Button from './Button';

const StyledTitle = styled.div`
	background: linear-gradient(90deg, ${theme.colours.darkGrey} 70%, ${theme.colours.white} 30%);
	height: 100%;
	display flex;
	padding-bottom: 5vh;

	h1 {
		font-size: 6vw;
		color: ${theme.colours.white};
		margin-left: 10vw;
		font-weight: bold;
		float: left;

		span {
			color: ${theme.colours.lightBlue};
			font-weight: 400;
			font-size: 5vw;
		}

		-webkit-transition: all 0.25s;
		-moz-transition:    all 0.25s;
		-ms-transition:     all 0.25s;
		-o-transition:      all 0.25s;
		transition:         all 0.25s;

		&:hover {
			-webkit-transform: scale(1.02);
			-moz-transform: scale(1.02);
			-o-transform: scale(1.02);
			transform: scale(1.02);
		}
	}

	p {
		font-size: 1.5vw;
		font-family: 'Space Mono', sans-serif;
		color: ${theme.colours.lightGrey};
		float: right;
		padding-left: 5vw;
		padding-top: 4vh;

		span {
			color: ${theme.colours.lightBlue};
		}
	}

	@media ${theme.sizes.tabletL} {
		background:  ${theme.colours.white};
		display: flex;
		flex-wrap: wrap;
		height: 100%;
		padding-bottom: 0vh;

		h1 {
			color: ${theme.colours.darkGrey};
			font-size: 10vw;

			span {
				font-size: 10vw;
			}
		}

		p {
			color: ${theme.colours.darkGrey};
			font-size: 2vw;
		}
	}

	@media ${theme.sizes.tabletS} {

	}

	@media ${theme.sizes.mobile} {

		h1 {
			margin-left: 10vw;
			font-size: 20vw;
			span {
				font-size: 20vw;
			}
		}

		p {
			padding-top: 5vh;
			float: right;
			font-size: 5vw;
			padding-left: 10vw;
		}
	}
`;

const ProjectsSection = styled.section`
	background: linear-gradient(90deg, ${theme.colours.darkGrey} 70%, ${theme.colours.white} 30%);
	display: grid;
	grid-template-columns: 50vw 50vw;
	position: relative;

	.projects-left-container {
		text-align: left;
		margin-left: 10vw;
		height: 25%;
		margin-top: 5vh;
		z-index: 50;

		p {
			margin-top: 2vh;
			color: ${theme.colours.lightBlue};
			font-style: italic;
			font-weight: 400;
			display: block;
		}

		h3 {
			color: ${theme.colours.white};
			font-weight: bold;
			font-size: 2em;
		}

		.image-container {
			width: 100%;
			z-index: 0;
			margin-top: 5vh;
			margin-bottom: 10vh;
			margin-left: 2vw;

			.img {
				display: block;
				max-width: 512px;
				max-height: 288px;
				width: auto;
				height: auto;
				z-index: 1;
			}
		}

		.rect {
			display: flex;
			position: absolute;
			height: 1px;
			width: 25vw;
			background-color: ${theme.colours.grey};
		}
	}

	.projects-right-container {
		z-index: 50;
		height: 50vh;
		text-align: left;
		padding-top: 10vh;
		margin-right: 20vw;
		font-weight: 300;
		position: relative;

		.project-num {
			font-size: 26px;
			font-family: 'Space Mono', sans-serif;
			color: ${theme.colours.grey};
			text-align: right;
			padding-bottom: 1em;

			span {
				color: ${theme.colours.lightBlue};
				font-size: 0.75em;
			}
		}

		.tech-and-link {
			.tech-container {
				font-family: 'Space Mono', sans-serif;
				color: ${theme.colours.white};
				padding-top: 2vh;
				padding-left: 5vw;
				font-size: 1.2em;
				float: left;

				.tech-title {
					color: ${theme.colours.lightBlue};
					font-family: 'Roboto', sans-serif;
					font-weight: 300;
					font-style: italic;
					font-size: 16px;
				}

				ol {
					list-style-type: none;
				}
			}

			.link-container {
				text-align: right;
				padding-top: 1em;
				float: right;
			}
		}

		.github {
			padding-right: 1em;
			svg {
				width: 50px;
				height: 50px;
				path {
					transition: fill 0.2s ease-in-out;
					fill: ${theme.colours.darkGrey};
				}
			}
		}
		.github:hover {
			cursor: pointer;
			svg {
				stroke: ${theme.colours.white};
				path {
					fill: ${theme.colours.lightBlue};
				}
			}	
		}

		.link {
			svg {
				width: 45px;
				height: 45px;

				path {
					transition: fill 0.2s ease-in-out;
					fill: ${theme.colours.darkGrey};
					stroke: 0;
				}
			}
		}
		.link:hover {
			cursor: pointer;
			svg {
				stroke: ${theme.colours.white};

				path {
					fill: ${theme.colours.lightBlue};
				}
			}	
		}

		.description-rectangle {
			background-color: ${theme.colours.lightBlue};
			padding: 3vw;
			border-radius: 8px;
			transition: transform 0.2s ease-in-out;
			z-index: 1500;

			p {
				color: ${theme.colours.white};
				display: inline-block;
				font-size: 22px;
				display: flex;
    			align-items: center;
				justify-content: center;
				z-index: 1501;
				font-weight: 400;
			}
		}

		.description-rectangle:hover {
			transform: scale(1.05);
		}

		.circle-accent {
			display: flex;
			position: absolute;
			transform: scale(0.5);
			right: 20%;
		}
	}

	.view-all-container {
		margin-left: 10vw;
		display: flex;
		padding-bottom: 4vh;
		padding-top: 2vh;

		.end-rect {
			display: none;
			position: absolute;
			height: 1px;
			width: 30vw;
			background-color: ${theme.colours.grey};
		}

		p {
			font-size: 2vw;
			font-family: 'Space Mono', sans-serif;
			color: ${theme.colours.lightGrey};
			float: left;
			
			span {
				color: ${theme.colours.lightBlue};
			}
		}

		.button-container {
			text-align: right;
			float: right;
			padding-top: 1vh;
			padding-left: 2vw;
			
			Button {
				font-size: 1.5vw;
			}
		}
	}

	@media ${theme.sizes.tabletL} {
		background: ${theme.colours.white};
		.projects-left-container {
			.image-container {
				margin-bottom: 12vh;
			}

			p {
				color: ${theme.colours.lightBlue};
				font-size: 3vw;
			}

			h3 {
				color: ${theme.colours.darkGrey};
				font-size: 6vw;
			}

		}

		.projects-right-container {
			padding-top: 12vh;
			.tech-and-link {
				.tech-container {
					padding-top: 1vh;
					padding-right: 2vw;
					li {
						color: ${theme.colours.grey};
					}
				}
			}

			.circle-accent {
				display: none;
			}
		}

		.view-all-container {
			display: flex;
			flex-wrap: wrap;
			height: 100%;

			.end-rect {
				display: none;
			}

			p {
				color: ${theme.colours.darkGrey};
				padding-top: 0vh;
				padding-right: 2vw;
				font-size: 3vw;
			}

			.button-container {
				padding-left: 0;
				Button {
					font-size: 2vw;
					color: ${theme.colours.darkGrey};
					border-color: ${theme.colours.darkGrey};
				}
				Button:hover {
					color: ${theme.colours.white};
					background-color: ${theme.colours.darkGrey};
				}
			}
		}
	}
	
	@media ${theme.sizes.tabletS} {
		
	}

	@media ${theme.sizes.mobile} {
		display: block;
		height: 100%;

		.projects-left-container {
			height: 0vh;
			padding-top: 8vh;
			margin-right: 20vw;
			font-weight: 300;
			z-index: 0;
			margin-top: 0vh;

			position: relative;

			p {
				font-size: 5vw;
			}

			h3 {
				font-size: 8vw;
			}

			.image-container {
				width: 100%;
				z-index: 0;
				margin-top: 10vh;
				z-index: 1;
				margin-bottom: 10vh;
				
				.img {
					display: block;
					max-width: 512px;
					max-height: 288px;
					width: auto;
					height: auto;
					z-index: 1;
					
				}
			}

			.rect {
				position: absolute;
				bottom: 2vh;
			}
		}

		.projects-right-container {
			height: 100%;
			padding-top: 12vh;

			.description-rectangle {
				position: absolute;
				margin-right: 2vw;
				margin-left: 15vw;
				margin-top: 62%;
				padding: 5vw;
				
				p {
					z-index: 2001;
					font-size: 4vw;
					font-weight: normal;
				}
			}

			.project-num {
				display: block;
				float: left;
				padding-left: 10vw;
				padding-top: 2vw;
				height: 100%;
			}

			.tech-and-link {
				display: flex;
				flex-direction: column;
				margin-top: 110%;
				height: 100%;

				.tech-container {
					padding-left: 10vw;
					padding-top: 0vh;
					padding-right: 0vw;

					.tech-title {
						font-size: 5vw;
						padding-right: 10vw;
						padding-top: 0;
					}

					p {
						font-size: 6vw;
					}

					
				}

				.link-container {
					display: flex;
					padding-left: 10vw;
					float: left;
				}
			}

			.circle-accent {
				display: none;
			}
		}

		.view-all-container {
			display: flex;
			flex-wrap: wrap;
			height: 100%;

			.end-rect {
				display: flex;
			}

			p {
				padding-top: 2vh;
				padding-right: 2vw;
				font-size: 5vw;
			}

			.button-container {
				padding-left: 0;
				
				Button {
					font-size: 4vw;
				}
			}
		}
	}

`;

const Projects = () => {
	return (
		<>
		<div id="projects">
		<SectionHeading section_num="01" leftDark={false} rightDark={false} />
		<StyledTitle id="PROJECTS">
				<h1 className=".spin"><span>my<br/></span> projects.</h1>
				<p>Here is a few projects <br/>
				I have worked on, <span>check <br/>
				them out!</span></p>
		</StyledTitle>
		<ProjectsSection>
			{projectsData.map((project, key) => {
				return (
					<>
					<div className="projects-left-container">
						<p>Featured Project</p>
						<h3 key={key} class="animate" >{project.title}</h3>
						<div key={key} className="image-container">
							<StaticImage src='../images/TRICEP.png' alt={project.title} className="img" />
						</div>
						<div className="rect" />
					</div>

					<div className="projects-right-container" >
						<p className="project-num" ><span>//</span> 01.0{key + 1}</p>
						<div className="description-rectangle">
							<p key={key}>
								{project.info}
							</p>
						</div>
						<div className="tech-and-link">
							<div className="tech-container">
								<p className="tech-title">Technologies </p>
								<ol>
									{project.tech.map((t, i) => {
											return(
													<li key={i}>{t}</li>
											)
										})
									} 
								</ol>
							</div>
							<div className="link-container">
								<a className="github" href={project.github} target="_blank" rel="noopener noreferrer" alt=""><Github /></a>
								<a className="link" href={project.link} target="_blank" rel="noopener noreferrer" alt=""><Link /></a>
							</div>
						</div>
						<div className="circle-accent" >
							<svg width="193" height="385" viewBox="0 0 193 385" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M193 383C87.5136 383 2 297.71 2 192.5C2 87.2898 87.5136 2 193 2" stroke="white" stroke-width="4"/>
								<circle cx="47.5" cy="319.5" r="16.5" fill="white"/>
							</svg>
						</div>
					</div>
					</>
				);
			})}
			{/* <div className="view-all-container">
				<div className="end-rect" />
				<p>Checkout <span>everything</span><br/>
					else i’ve worked on!</p>
				<div className="button-container">	
					<Button text="View All" blueText=">" light={true}/>
				</div>
			</div> */}
		</ProjectsSection>
		</div>
		</>
	);
};

export default Projects;