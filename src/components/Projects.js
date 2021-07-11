import React from 'react'
import styled from 'styled-components'
import theme from '../assets/styles/theme';
import SectionHeading from './SectionHeading';
import projectsData from '../data/projectsData'
import Typer from './Typer';
import image from '../assets/images/projectexample.jpg';
import Github from '../assets/icons/Github';
import Link from '../assets/icons/Link';
import Button from './Button';

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
			font-weight: 300;
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
			}
		}

		.rect {	
			height: 1px;
			width: 30vw;
			background-color: ${theme.colours.grey};
		}
	}

	.projects-right-container {
		height: 70vh;
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

	.view-all-container {
		margin-left: 10vw;
		display: inline;
		padding-bottom: 10vh;
		p {
			font-size: 26px;
			font-family: 'Space Mono', sans-serif;
			color: ${theme.colours.lightGrey};
			float: left;
		}

		.button-container {
			text-align: right;
			float: right;
		}
	}
`;


const Projects = () => {
	return (
		<>
		<SectionHeading section_num="01"/>
		
		<ProjectsSection>
		{/* <h1><span>my<br/></span> projects.</h1> */}
			{projectsData.map((project, key) => {
				return (
					<>
					<div className="projects-left-container">
						<p>Featured Project</p>
						<h3 key={key}>{project.title}</h3>
						<div className="image-container">	
							<figure><img src={image} alt="" key={key} height="360" width="640" /></figure>
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
								<p className="tech-title">Technologies</p>
								{/* <Typer text={project.technologies}/> */}
								{project.tech.map((t, i) => {
										return(
											<p key={i}>{t}</p>
										)
									})
								}
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
				<p>Checkout everything<br/>
					else i’ve worked on!</p>
				<div className="button-container">	
					<Button text="View All" blueText=">" />
				</div>
			</div>
		</ProjectsSection>
		</>
	);
};

export default Projects;