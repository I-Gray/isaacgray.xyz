import React from 'react';
import styled from 'styled-components';
import theme from '../assets/styles/theme';

const StyledHeading = styled.div`
	display: flex;
	
	background: linear-gradient(90deg, ${theme.colours.darkGrey} 70%, ${theme.colours.white} 30%);
	padding-top: 3vh;
	
	ul {	
		list-style: none;
		display: flex;
	}

	.section-rectangle {
		height: 2vh;
		width: 8vw;
		padding-right: 2vw;
		background: ${theme.colours.lightBlue};
	}

	.thin-rectangle {
		height: 2px;
		padding-left: 5vw;
		width: 70vw;
		background: ${theme.colours.grey};
	}

	p {
		font-size: 5vw;
		font-family: 'Space Mono', sans-serif;
		color: ${theme.colours.grey};
	}

	li {
		float: left;
		padding-right: 1vh;
	}

	@media ${theme.sizes.tabletL} {
		background: linear-gradient(90deg, ${props => props.leftDark ? theme.colours.darkGrey : theme.colours.white} 70%, ${props => props.rightDark ? theme.colours.darkGrey : theme.colours.white} 30%);
	}
`;

const SectionHeading = ({section_num, leftDark, rightDark}) => {
	
	return (
		<>
			<StyledHeading leftDark={leftDark} rightDark={rightDark}>
				<ul>
					<li><div className="section-rectangle" /></li>
					<li><div className="thin-rectangle" /></li>
					<li><p>{section_num}</p></li>
				</ul>
			</StyledHeading>
		</>
	);
};



export default SectionHeading;