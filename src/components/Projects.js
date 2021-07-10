import React from 'react'
import styled from 'styled-components'
import theme from '../assets/styles/theme';
import SectionHeading from './SectionHeading';
import projectsData from '../data/projectsData'

const ProjectsSection = styled.section`
	background: linear-gradient(90deg, ${theme.colours.darkGrey} 70%, ${theme.colours.white} 30%);
	display: grid;
	grid-template-columns: 60vw 40vw;

	.projects-left-container {

	}

	.projects-right-container {

	}
`;


const Projects = () => {
	return (
		<>
		<SectionHeading section_num="02"/>
		<ProjectsSection>
			<h1><span>my</span> projects.</h1>
			{projectsData.map((project, key) => {
				return (
					<>
					<div className="projects-left-container">
						<p>Featured Project</p>
						<h3 key={key}>{project.title}</h3>
						<img src={project.image} alt="" key={key} />
					</div>

					<div className="projects-right-container" >
						<p>// 02.0{key + 1}</p>
						<img src="" alt="ball"/>
						<div className="description-rectangle">
							<p key={key}>
								{project.info}
							</p>
						</div>
							<p>Technologies:</p>
							<span>{project.tech}</span>|
							<img src={project.github} alt="github" />
							<img src={project.link} alt="link" />
					</div>
					</>
				);
			})}
		</ProjectsSection>
		</>
	);
};

export default Projects;