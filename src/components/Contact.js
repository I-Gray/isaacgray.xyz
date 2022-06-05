import React from 'react'
import styled from 'styled-components'
import theme from '../styles/theme';
import Form from './Form';
import Socials from './Socials';
import SectionHeading from './SectionHeading';

const ContactSection = styled.section`
	background: linear-gradient(90deg, ${theme.colours.darkGrey} 70%, ${theme.colours.white} 30%);
	display: flex;
	height: 100%;
	
	.contact-left-container {
		margin-left: 10vw;
		margin-right: 10vw;
		margin-bottom: 10vh;

		text-align: left;
		display: flex;
		flex-direction: column;

		
		h1 {
			font-size: 10vw;
			color: ${theme.colours.white};
			
			span {
				color: ${theme.colours.lightBlue};
			}

			-webkit-transition: all 0.25s;
			-moz-transition:    all 0.25s;
			-ms-transition:     all 0.25s;
			-o-transition:      all 0.25s;
			transition:         all 0.25s;

			&:hover {
				-webkit-transform: scale(1.02);
				-moz-transform: scale(1.02);
				-o-transform: scale(1.02));
				transform: scale(1.02);
			}
		}

		p {
			font-size: 1.5vw;
			font-family: 'Space Mono', sans-serif;
			color: ${theme.colours.lightGrey};	
			text-decoration: italic;
			transition: fill 0.4s ease-in-out;
			margin-bottom: 5vh;
		}
		p:hover {
			color: ${theme.colours.white};
		}
	}

	.contact-right-container {
		padding-top: 5vh;
		margin-left: 6vw;
		margin-right: 10vw;

		p {
			color: ${theme.colours.lightGrey};
			padding-left: 10px;
			font-size: 1.5vw;
			font-style: italic;
		}

		Button {
			font-size: 1.5vw;
		}
	}

	@media ${theme.sizes.tabletL} {
		background: ${theme.colours.darkGrey};

		.contact-left-container {
			p {
				font-size: 3vw;
			}
		}

		.contact-right-container {
			height: 100%
			display: block;
			margin-left: 2vw;

			p {
				font-size: 3vw;
			}

			Button {
				font-size: 2vw;
			}
		}
	}

	@media ${theme.sizes.mobile} {
		display: block;
		height: 100%;

		.contact-left-container {
			margin-bottom: 2vh;

			h1 {
				font-size: 20vw;
				font-weight: normal;

				span {
					font-size: 20vw;
					font-weight: bold;
				}
			}

			p {
				margin-bottom: 2vh;
				margin-top: 2vh;
				font-size: 5vw;
			}

			ul {
				padding-top: 2vh;	
			}
		}

		.contact-right-container {
			height: 100%
			display: block;
			margin-left: 9vw;

			p {
				font-size: 6vw;
			}

			Button {
				font-size: 3vw;
			}
		}
		
	}
`;

const Contact = () => {
	return (
		<>
		<div id="contact">
		<SectionHeading section_num="04" leftDark={true} rightDark={true} id="CONTACT" />
		<ContactSection>
			<div className="contact-left-container">
				<h1>contact</h1>
				<h1><span>me.</span></h1>
				{/* <a src="">hello<span>@grayisaac</span>.com</a>	 */}
				<p>Thanks for stopping by.</p>
				<Socials className="socials" size={55} alt={true}/>
			</div>
			<div className="contact-right-container">
				<p>Let's chat!</p>
				<Form className="form" />
			</div>
		</ContactSection>
		</div>
		</>
	);
};


export default Contact;
