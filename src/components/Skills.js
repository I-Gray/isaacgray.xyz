import React from 'react';
import styled from 'styled-components';
import SectionHeading from './SectionHeading';
import theme from '../assets/styles/theme';

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
		font-size: 26px;
		font-family: 'Space Mono', sans-serif;
		color: ${theme.colours.lightGrey};
		float: right;
		padding-left: 5vw;
		padding-top: 5vh;

		span {
			color: ${theme.colours.lightBlue};
		}
	}
`;

const SkillsSection = styled.section`
	
`;

const Skills = () => {
	return (
		<>
			<SectionHeading section_num="02" />
			<StyledTitle>
				<h1><span>my<br/></span> skills.</h1>
				<p>Hello this is some test
				<br /> text, <span>check it out.</span></p>
			</StyledTitle>
			<SkillsSection>

			</SkillsSection>
		</>
	);
};


export default Skills;