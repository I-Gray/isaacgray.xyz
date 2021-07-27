import React from "react";
import theme from '../assets/styles/theme'
import styled from 'styled-components';

import Github from '../assets/icons/Github';
import Twitter from '../assets/icons/Twitter';
import Dribble from '../assets/icons/Dribble';
import SocialLinks from '../assets/constants/SocialLinks';

const StyledSocials = styled.ul`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 0;
	padding: 0;
	list-style: none;
	transition: transform .8s ease-in-out;

	&:after {
		content: '';
		display: block;
		width: 1px;
		height: 90px;
		margin: 0 auto;
	}

	li {
		
		a {
			padding-right: 2vw;
			
			svg {
				width: ${props => props.size}px;
				height: ${props => props.size}px;
				path {
					transition: fill 0.4s ease;
					fill: ${props => props.alt ? theme.colours.lightGrey : theme.colours.grey};
					stroke: 0;
				}
			}
		}
		&:hover {
			cursor: pointer;
			transform: scale(1.1);
			svg {
				stroke: ${theme.colours.white};
				path {
					fill: ${theme.colours.white};
					
				}
			}	
				
		}
	}

	@media ${theme.sizes.mobileS} {
		li {
			a {
				padding-right: 5vw;
			}
		}
	
	}
`;

const Socials = ({size, alt}) => {
	return (
		<>
			<StyledSocials size={size} alt={alt}>
					{/* Combine Icons with Social Links array to iterate over this*/}
					<li><a href="https://github.com/I-Gray"><Github /></a></li>
					<li><a href="https://www.twitter.com"><Twitter /></a></li>
					<li><a href="https://www.dribble.com"><Dribble /></a></li>
			</StyledSocials>
		</>
	);
};

export default Socials;