import React from 'react'
import styled from 'styled-components'
import theme from '../assets/styles/theme';
import SectionHeading from './SectionHeading';

const ProjectsSection = styled.section`
	background: linear-gradient(90deg, ${theme.colours.darkGrey} 70%, ${theme.colours.white} 30%);
	display: grid;
	grid-template-columns: 60vw 40vw;
`;


const Projects = () => {
	return (
		<>
		<SectionHeading/>
		<ProjectsSection>
			<div className="section-rectangle"/>
			<div className="projects-left-container">
				<ul>
					<li><p>02</p></li>
					<li><div/></li>
				</ul>
				<h1><span>my</span> projects.</h1>
				<p>Featured Project</p>
				<h3>TRICEP 3D Redi</h3>
				<img src="" alt="" />
			</div>
			<div className="projects-right-container">
				<p>// 02.01</p>
				<img src="" alt="ball" />
				<div className="description-rectangle">
					<p>
						3D bio-printer software GUI<br/> 
						re-design, with a computer vision <br/>
						algorithm to detect material defects.
					</p>
				</div>
				<ol>
					<li>Technologies</li>
					<li><span>Qt</span>|</li>
				</ol>
				<ol>
					<li><img src="" alt="github" /></li>
					<li><img src="" alt="link" /></li>
				</ol>

			</div>
		</ProjectsSection>
		</>
	);
};

export default Projects;