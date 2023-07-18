import React, { useState } from 'react';
import styled from 'styled-components';
import SectionHeading from './SectionHeading';
import theme from '../styles/theme';

import HelloFresh from '../icons/HelloFresh';
import Button from './Button';


const StyledTitle = styled.div`
	background: linear-gradient(90deg, ${theme.colours.darkGrey} 70%, ${theme.colours.white} 30%);
	display: flex;
	height: 100%;
	padding-bottom: 2vh;

	h1 {
		font-size: 6vw;
		color: ${theme.colours.white};
		margin-left: 10vw;
		font-weight: bold;
		float: left;

		span {
			color: ${theme.colours.lightBlue};
			font-weight: 400;
			font-size: 8vw;
		}
	}

	p {
		font-size: 1.5vw;
		font-family: 'Space Mono', sans-serif;
		color: ${theme.colours.lightGrey};
		padding-left: 5vw;
		padding-top: 2vh;

		span {
			color: ${theme.colours.lightBlue};
		}
	}

	@media ${theme.sizes.tabletL} {
		background: ${theme.colours.darkGrey};
		padding-bottom: 2vh;
		h1 {
			font-size: 12vw;

			span {
				font-size: 10vw;
			}
		}

		p {
			padding-top: 4vh;
			font-size: 2vw;
		}
	}
	
	@media ${theme.sizes.tabletS} {
		
	}

	@media ${theme.sizes.mobile} {
		display: flex;
		flex-wrap: wrap;
		height: 100%;
		padding-right: 10vw;
		padding-bottom: 2vh;

		h1 {
			font-size: 14vw;
			margin-left: 10vw;
			span {
				font-size: 18vw;
			}
		}

		p {
			padding-top: 2vh;
			margin-left: 5vw;
			font-size: 4vw;
		}
	}
`;

const ExperienceSection = styled.section`
	background: linear-gradient(90deg, ${theme.colours.darkGrey} 70%, ${theme.colours.white} 30%);
	grid-template-columns: 70vw;
	padding-top: 2vh;
	position: relative;
	
	padding-top: 0vh;
	display: flex;
	padding-left: 10vw;
	
	padding-top: 2vh;

	.right-content {
		padding-left: 10vw;
	}

	p {
		font-size: 1.5vw;
		font-family: 'Space Mono', sans-serif;
		color: ${theme.colours.white};

		span {
			color: ${theme.colours.lightBlue};
		}
	}

	ol {
		display: flex;
		list-style: none;
		align-items: center;

		li {
			padding: 1vw;
			transition: transform .2s ease-in-out;
			margin-bottom: 1vh;

			.experience-description {
				display: block;
				vertical-align: top;
				margin: 0 auto;
			}
		}

		li:hover {
			transform: scale(1.05);
			cursor: pointer;
		}

		
	}

	.left-content {
		z-index: 2;
		padding-right: 15vw;
		p {
			padding-top: 2vh;
			font-size: 2vw;
		}

		.HFMore {
			padding-top: 2vh;
			font-size: 1vw;
			color: ${theme.colours.lightGrey};
			
			.span {
				color: ${theme.colours.lightBlue};
			}
		}

		Button {
			font-size: 1.2vw;
		}

		.details {
			.HFTime {
				font-size: 1.5vw;
				color: ${theme.colours.lightGrey};
			}
			.location {
				font-size: 1.5vw;
				color: ${theme.colours.lightGrey}
			}
		}
	}

	.skills-orbit {
		display: flex;
		position: absolute;
		left: 65%;
		transform: scale(-0.65, 0.65);
		z-index; 0;
		top: 5%;
	}

	@media ${theme.sizes.tabletL} {
		background: ${theme.colours.darkGrey};

		.skills-orbit {
			display: none;
		}

		.left-content {
			padding-right: 5vw;
			p {
				padding-top: 2vh;
				font-size: 3vw;
			}
		}

		.right-content {
			p {
				padding-top: 2vh;
				font-size: 3vw;
			}
		}
	}

	@media ${theme.sizes.tabletS} {
		.left-content {
			z-index: 2;
			padding-right: 15vw;
			p {
				padding-top: 3vh;
				font-size: 5vw;
			}

			.HFMore {
				font-size: 3vw;
			}
	
			Button {
				font-size: 3vw;
			}
	
			.details {

				.HFTime {
					font-size: 4vw;
				}

				.location {
					font-size: 4vw;
				}
			}
		}
	}

	@media ${theme.sizes.tabletL} {
		.left-content {
			z-index: 2;
			padding-right: 15vw;
			p {
				padding-top: 3vh;
				font-size: 3vw;
			}

			.HFMore {
				font-size: 2vw;
			}
	
			Button {
				font-size: 2vw;
			}
	
			.details {
				.HFTime {
					font-size: 3vw;
				}

				.location {
					font-size: 3vw;
				}
			}
		}
	}


	@media ${theme.sizes.mobile} {
		display: flex;
		flex-wrap: wrap;
		position: relative;
		
		h1 {
			font-size: 1vw;
		}

		.left-content {
			z-index: 2;
			padding-right: 15vw;
			p {
				padding-top: 3vh;
				font-size: 5vw;
			}

			.HFMore {
				font-size: 3vw;
			}
	
			Button {
				font-size: 3vw;
			}
	
			.details {
				
				.HFTime {
					font-size: 4vw;
				}

				.location {
					font-size: 4vw;
				}
				
			}
		}

		.skills-orbit {
			display: none;
		}
	}
`;

const Experience = () => {
	const [showMore, setShowMore] = useState(false);

	return (
		<>	
			<div id="experience">
			<SectionHeading section_num="04" leftDark={true} rightDark={true} />
			<StyledTitle>
				<h1><span>my<br/></span> experience.</h1>
			</StyledTitle>
			<ExperienceSection>
				<div className="left-content">
					<div className="details">
						<ol>
							<li><a href="https://www.hellofresh.com.au/"><HelloFresh size="70"/></a></li>
						</ol>
						<p>Software Engineer<span> //</span></p>
						<p class="location">Sydney, Australia</p>
						<br />
						<p class="HFTime">Nov. 2021 <span>-{'>'} </span> June. 2023</p>
						<br />
					</div>
					
					<Button
					 class="showMoreButton"
					 onClick={() => setShowMore(!showMore)}
					 name="Show More Button" 
					 text={showMore ? "Show Less" : "Show More"} 
					 blueText={showMore ? "..." : ">"} 
					 light={true} 
					 />	

					{showMore ? 
						<p class='HFMore' >
						<span>Contributions</span> to internal  <br />
						supply chain software such as: 
						<br />
						<br />
						<ol>
							<li class="experience-description"><span>Cartonization</span> -<br/>
							A packaging optimisation solution<br/>
							implemented in Australian warehouses<br/>
							to reduce packaging waste and better<br/>
							the customer experience.
							</li>
							<li class="experience-description"><span>Order Management</span> -<br/>
							Worked in an operations team maintaining<br/>
							business critical order systems in addition<br />
							to migrating new operations systems as<br/>
							a result of a recent brand acquisition.
							</li>
						</ol>
						
						</p> 
						: null 
					}

					
				</div>
				<div className="skills-orbit">
					<svg width="305" height="616" viewBox="0 0 305 616" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M305 614C137.658 614 2 478.342 2 311C2 143.658 137.658 8 305 8" stroke="#292626" stroke-width="4"/>
						<path d="M305 558C169.69 558 60 448.31 60 313C60 177.69 169.69 68 305 68" stroke="#292626" stroke-width="4"/>
						<circle cx="60.5" cy="318.5" r="20.5" fill="#26C1E7"/>
						<path d="M234 21C234 31.5391 225.672 40 215.5 40C205.328 40 197 31.5391 197 21C197 10.4609 205.328 2 215.5 2C225.672 2 234 10.4609 234 21Z" fill="white" stroke="#292626" stroke-width="4"/>
					</svg>
				</div>
			</ExperienceSection>
			</div>
		</>
	);
};


export default Experience;