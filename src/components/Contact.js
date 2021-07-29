import React from 'react'
import styled from 'styled-components'
import theme from '../styles/theme';
import Button from './Button';
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
		}

		a {
			font-size: 2vw;
			font-family: 'Space Mono', sans-serif;
			color: ${theme.colours.lightGrey};	
			text-decoration: underline;
			transition: fill 0.4s ease-in-out;
			margin-bottom: 5vh;
		}
		a:hover {
			color: ${theme.colours.white};
			cursor: pointer;
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

			a {
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
			margin-left: 10vw;

			p {
				font-size: 6vw;
			}

			Button {
				font-size: 4vw;
			}
		}
		
	}
`;

const Contact = () => {
	return (
		<>
		<SectionHeading section_num="04" leftDark={true} rightDark={true} />
		<ContactSection>
			<div className="contact-left-container">
				<h1>contact</h1>
				<h1><span>me.</span></h1>
				<a src="">hello<span>@grayisaac</span>.com</a>	
				<Socials className="socials" size="80" alt={true}/>
			</div>
			<div className="contact-right-container">
				<p>Let's chat!</p>
				<Form className="form" />
				<Button text="Send!" blueText=">" light={true} />	
			</div>
		</ContactSection>
		</>
	);
};


export default Contact;
