import styled from 'styled-components';
import React from 'react';
import theme from '../styles/theme'

const StyledCircleAccent = styled.div`
`;

const CircleAccent = () => {

	return (
		<StyledCircleAccent>
			<svg width="193" height="385" viewBox="0 0 193 385" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M193 383C87.5136 383 2 297.71 2 192.5C2 87.2898 87.5136 2 193 2" stroke="white" stroke-width="4"/>
				<circle cx="47.5" cy="319.5" r="16.5" fill="white"/>
			</svg>
		</StyledCircleAccent>
	);
};

export default CircleAccent;