import React from 'react';
import styled from 'styled-components';
import theme from '../assets/styles/theme';

const StyledHeading = styled.div`
	left: 0;
	background: linear-gradient(90deg, ${theme.colours.darkGrey} 70%, ${theme.colours.white} 30%);
	ul {	
		list-style: none;
		display: flex;
	}

	.section-rectangle {
		height: 2vh;
		width: 8vw;
		background: ${theme.colours.lightBlue};
	}

	.thin-rectangle {
		height: 2px;
		width: 70vw;
		background: ${theme.colours.grey};
	}

	p {
		font-size: 48px;
		font-family: 'Space Mono', sans-serif;
		color: ${theme.colours.grey};
	}

	li {
		float: left;
		padding: 1vh;
	}
`;

const SectionHeading = ({section_num}) => {
	
	return (
		<>
			<StyledHeading>
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