import React from 'react'
import styled from 'styled-components'
import theme from '../assets/styles/theme';
import SectionHeading from './SectionHeading';
import projectsData from '../data/projectsData'
import { StaticImage } from "gatsby-plugin-image"
import Typer from './Typer';

import image from '../assets/images/MarketMoo.jpg';

import Github from '../assets/icons/Github';
import Link from '../assets/icons/Link';
import Button from './Button';

const StyledTitle = styled.div`
	background: linear-gradient(90deg, ${theme.colours.darkGrey} 70%, ${theme.colours.white} 30%);
	height: 35vh;
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
			font-size: 5vw;
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

	@media ${theme.sizes.mobileM} {
		display: flex;
		flex-wrap: wrap;
		background:  ${theme.colours.white};
		height: 45vh;

		h1 {
			color: ${theme.colours.darkGrey};
			font-size: 15vw;
			
			span {
				font-size: 12vw;
			}
		}

		p {
			color: ${theme.colours.darkGrey};
			float: right;
			font-size: 5vw;
			padding-left: 10vw;
		}
	}

	@media ${theme.sizes.mobileS} {
		display: flex;
		flex-wrap: wrap;
		height: 45vh;

		h1 {
			margin-left: 10vw;
			font-size: 20vw;
			span {
				font-size: 20vw;
			}
		}

		p {
			padding-top: 0;
			font-size: 5vw;
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

		p {
			margin-top: 2vh;
			color: ${theme.colours.lightBlue};
			font-style: italic;
			font-weight: 300;
			display: block;
		}

		h3 {
			color: ${theme.colours.white};
			font-weight: bold;
			font-size: 2em;
		}

		.image-container {
			padding-top: 5vh;
			padding-bottom: 8vh;
			
			img {
				border-radius: 8px;
				transition: transform 0.2s ease-in-out;
				height: 360px;
				width: 640px;
			}
		}

		.rect {	
			height: 1px;
			width: 30vw;
			background-color: ${theme.colours.grey};
		}
	}

	.projects-right-container {
		height: 50vh;
		text-align: left;
		padding-top: 10vh;
		margin-right: 20vw;
		font-weight: 300;

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
			}
		}

		.description-rectangle:hover {
			transform: scale(1.05);
		}
	}

	.view-all-container {
		margin-left: 10vw;
		display: flex;
		padding-bottom: 4vh;
		padding-top: 2vh;

		.end-rect {
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
			padding-top: 2vh;
			padding-left: 2vw;
			
			Button {
				font-size: 1vw;
			}
		}
	}

	@media ${theme.sizes.mobileS} {
		display: block;
		background: ${theme.colours.white};
		padding-top: 0vh;

		.projects-left-container {
			height: 0vh;
			padding-top: 0vh;
			margin-right: 20vw;
			font-weight: 300;
			z-index: 0;

			position: relative;

			p {
				color: ${theme.colours.lightBlue};
				font-size: 5vw;
			}

			h3 {
				color: ${theme.colours.darkGrey};
				font-size: 8vw;
			}

			.image-container {
				width: 100%;
				z-index: 0;
				margin-top: 5vh;

				img {
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
				bottom: 5vh;
			}
		}

		.projects-right-container {
			height: 70vh;

			.description-rectangle {
				position: absolute;
				margin-right: 10vw;
				margin-left: 15vw;
				margin-top: 20vh;
				margin-bottom: 5vh;

				p {
					z-index: 2001;
				}
			}

			.project-num {
				float: left;
				padding-left: 10vw;
			}

			.tech-and-link {
				display: flex;
				flex-direction: column;
				margin-top: 35vh;

				.tech-container {
					padding-left: 10vw;
					
					.tech-title {
						font-size: 5vw;
						padding-right: 10vw;
						padding-top: 1vh;
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
		}

		.view-all-container {
			display: flex;
			flex-wrap: wrap;

			p {
				color: ${theme.colours.darkGrey};
				padding-top: 2vh;
				padding-right: 2vw;
				font-size: 5vw;
			}

			.button-container {
				padding-left: 0;
				Button {
					font-size: 4vw;
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

	@media ${theme.sizes.mobileM} {
		
	}
`;

const Projects = () => {
	return (
		<>
		<SectionHeading section_num="01" leftDark={false} rightDark={false} />
		<StyledTitle>
				<h1><span>my<br/></span> projects.</h1>
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
						<h3 key={key}>{project.title}</h3>
						<div className="image-container">
							{/* <StaticImage src={`${project.image}`} className="img" alt="" /> */}
							<StaticImage src={'../assets/images/TRICEP.jpg'} className="img" alt="" />
						</div>
						<div className="rect" />
						{/* <img src={"../assets/images/projectexample.jpg" + project.image} alt="" key={key} /> */}
					</div>

					<div className="projects-right-container" >
						<p className="project-num" ><span>//</span> 01.0{key + 1}</p>
						{/* <img src="" alt="ball"  /> */}
						<div className="description-rectangle">
							<p key={key}>
								{project.info}
							</p>
						</div>
						<div className="tech-and-link">
							<div className="tech-container">
								<p className="tech-title">Technologies </p>
								<Typer className="typer" text={project.technologies}/> 
								{/* <ol>
									
									{project.tech.map((t, i) => {
											return(
													<li key={i}>{t}</li>
											)
										})
									} 
								</ol>*/}
							</div>
							<div className="link-container">
								<a className="github" src={project.github} alt=""><Github /></a>
								<a className="link" src={project.link} alt=""><Link /></a>
							</div>
						</div>
					</div>
					</>
				);
			})}
			<div className="view-all-container">
				<div className="end-rect" />
				<p>Checkout <span>everything</span><br/>
					else i’ve worked on!</p>
				<div className="button-container">	
					<Button text="View All" blueText=">" light={true}/>
				</div>
			</div>
		</ProjectsSection>
		</>
	);
};

export default Projects;