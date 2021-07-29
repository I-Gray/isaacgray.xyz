import React from "react";
import theme from '../styles/theme'
import styled from 'styled-components';

const StyledSkillsOrbit = styled.div`

`;

const SkillsOrbit = () => {

	return (
		<StyledSkillsOrbit>
			<svg width="305" height="616" viewBox="0 0 305 616" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M305 614C137.658 614 2 478.342 2 311C2 143.658 137.658 8 305 8" stroke="#fff" stroke-width="4"/>
<path d="M305 558C169.69 558 60 448.31 60 313C60 177.69 169.69 68 305 68" stroke="#fff" stroke-width="4"/>
<circle cx="60.5" cy="318.5" r="20.5" fill="#26C1E7"/>
<path d="M234 21C234 31.5391 225.672 40 215.5 40C205.328 40 197 31.5391 197 21C197 10.4609 205.328 2 215.5 2C225.672 2 234 10.4609 234 21Z" fill="white" stroke="#292626" stroke-width="4"/>
</svg>

		</StyledSkillsOrbit>
	);
};

export default SkillsOrbit;