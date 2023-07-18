import React from "react";
import theme from '../styles/theme'
import styled from 'styled-components';

import Github from '../icons/Github';
import LinkedIn from "../icons/LinkedIn";

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
					transition: fill 0.6s ease;
					fill: ${props => props.alt ? theme.colours.lightGrey : theme.colours.grey};
					stroke: 0;
				}
			}
		}
		&:hover {
			cursor: pointer;
			transform: scale(1.05);
			svg {

				path {
					fill: ${theme.colours.white};
					
				}
			}	
				
		}
	}

	@media ${theme.sizes.mobile} {
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
					<li><a href="https://github.com/I-Gray"><Github /></a></li>
					<li><a href="https://www.linkedin.com/in/isaacgray1/"><LinkedIn size={size}/></a></li>
			</StyledSocials>
		</>
	);
};

export default Socials;