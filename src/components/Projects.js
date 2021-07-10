import React from 'react'
import styled from 'styled-components'
import theme from '../assets/styles/theme';
import SectionHeading from './SectionHeading';
import projectsData from '../data/projectsData'
import Typer from './Typer';
import image from '../assets/images/projectexample.jpg';
import Github from '../assets/icons/Github';
import Link from '../assets/icons/Link';

const ProjectsSection = styled.section`
	background: linear-gradient(90deg, ${theme.colours.darkGrey} 70%, ${theme.colours.white} 30%);
	display: grid;
	grid-template-columns: 50vw 50vw;
	padding-top: 5vh;

	h1 {
		font-size: 96px;
		color: ${theme.colours.white};
		margin-left: 10vw;
		font-weight: bold;

		span {
			color: ${theme.colours.lightBlue};
			font-weight: 400;
			font-size: 100px;
		}
	}
	.projects-left-container {
		text-align: left;
		margin-left: 10vw;
		height: 70vh;

		p {
			color: ${theme.colours.lightBlue};
			font-style: italic;
		}

		h3 {
			color: ${theme.colours.white};
			font-weight: bold;
			font-size: 2em;
		}

		.image-container {
			padding-top: 5vh;
			
			img {
				border-radius: 8px;
			}
			&:hover {
				background-colour: ${theme.colours.lightBlue};
			}
		}

		.x-rect {
			height: 2px;
			width: 20vw;
			background-colour: ${theme.colours.white};
		}
	}

	.projects-right-container {
		height: 70vh;
		text-align: left;
		padding-top: 10vh;
		margin-right: 20vw;

		.project-num {
			font-size: 26px;
			font-family: 'Space Mono', sans-serif;
			color: ${theme.colours.grey};
			text-align: right;
			padding-bottom: 1em;
		}

		.link-container {
			text-align: right;
			padding-top: 1em;
		}

		.github {
			padding-right: 1em;
			svg {
				width: 50px;
				height: 50px;
				path {
					transition: fill 0.2s ease-in-out;
					fill: ${theme.colours.darkGrey};
					stroke: 0;
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
			padding: 30px;
			border-radius: 8px;
			
			p {
				color: ${theme.colours.white};
				display: inline-block;
				font-size: 22px;
				display: flex;
    			align-items: center;
				justify-content: center;
			}
		}

	}
`;


const Projects = () => {
	return (
		<>
		<SectionHeading section_num="02"/>
		<ProjectsSection>
			{/* <h1><span>my<br/></span> projects.</h1> */}
			{projectsData.map((project, key) => {
				return (
					<>
					<div className="projects-left-container">
						<p>Featured Project</p>
						<h3 key={key}>{project.title}</h3>
						<div className="image-container">	
							<img src={image} alt="" key={key} height="360" width="640" />
						</div>
						<div className="x-rect" />
						{/* <img src={"../assets/images/projectexample.jpg" + project.image} alt="" key={key} /> */}
					</div>

					<div className="projects-right-container" >
						<p className="project-num" >// 02.0{key + 1}</p>
						{/* <img src="" alt="ball"  /> */}
						<div className="description-rectangle">
							<p key={key}>
								{project.info}
							</p>
						</div>
							{/* <Typer text={project.technologies}/> */}
							{/* <span>{project.tech}</span>| */}
						<div className="link-container">
							<a className="github" src={project.github} alt=""><Github /></a>
							<a className="link" src={project.link} alt=""><Link /></a>
						</div>
					</div>
					</>
				);
			})}
		</ProjectsSection>
		</>
	);
};

export default Projects;