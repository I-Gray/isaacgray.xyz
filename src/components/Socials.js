import React from "react";
import theme from '../assets/styles/theme'
import styled from 'styled-components';

import Github from '../assets/icons/Github';
import Twitter from '../assets/icons/Twitter';
import Dribble from '../assets/icons/Dribble';
import SocialLinks from '../assets/constants/SocialLinks'

const StyledSocials = styled.ul`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 0;
	padding: 0;
	list-style: none;

	&:after {
		content: '';
		display: block;
		width: 1px;
		height: 90px;
		margin: 0 auto;
	}
	
	li {
		a {
			padding: 10px;
			svg {
				width: ${props => props.size}px;
				height: ${props => props.size}px;
				path {
					fill: ${props => props.alt ? theme.colours.lightGrey : theme.colours.grey};
					stroke: 0;
				}
			}
		}
		&:hover {
			cursor: pointer;
			svg {
				stroke: ${theme.colours.white};
				path {
					fill: ${theme.colours.white};
					
				}
			}	
				
		}
	}
`;

const Socials = ({size, alt}) => {
	return (
		<>
			<StyledSocials size={size} alt={alt}>
					{/* Combine Icons with Social Links array to iterate over this*/}
					<li><a url=""><Github /></a></li>
					<li><a url=""><Twitter /></a></li>
					<li><a url=""><Dribble /></a></li>
			</StyledSocials>
		</>
	);
};

export default Socials;