import React from "react";
import theme from '../styles/theme'
import styled from 'styled-components';

const StyledSkillsOrbit = styled.div`

`;

const SkillsOrbit = () => {

	return (
		<StyledSkillsOrbit>
			<svg width="305" height="616" viewBox="0 0 305 616" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M1.35899e-05 614C167.342 614 303 478.342 303 311C303 143.658 167.342 8 1.35899e-05 8" stroke="#292626" stroke-width="4"/>
				<path d="M2.38419e-07 558C135.31 558 245 448.31 245 313C245 177.69 135.31 68 2.38419e-07 68" stroke="#292626" stroke-width="4"/>
				<circle r="20.5" transform="matrix(-1 0 0 1 244.5 318.5)" fill="#26C1E7"/>
				<path d="M71 21C71 31.5391 79.3279 40 89.5 40C99.6721 40 108 31.5391 108 21C108 10.4609 99.6721 2 89.5 2C79.3279 2 71 10.4609 71 21Z" fill="white" stroke="#292626" stroke-width="4"/>
			</svg>
		</StyledSkillsOrbit>
	);
};

export default SkillsOrbit;