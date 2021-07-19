import React from 'react'
import styled from 'styled-components'
import theme from '../assets/styles/theme';
import Button from './Button';
import Form from './Form';
import Socials from './Socials';
import SectionHeading from './SectionHeading';

const ContactSection = styled.section`
	background: linear-gradient(90deg, ${theme.colours.darkGrey} 70%, ${theme.colours.white} 30%);
	display: flex;
	height: 70vh;
	
	.contact-left-container {
		margin-left: 10vw;
		margin-right: 10vw;

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
		}
		a:hover {
			color: ${theme.colours.white};
			cursor: pointer;
		}
	}

	.contact-right-container {
		padding-top: 10vh;
		margin-left: 2vw;
		margin-right: 10vw;

		p {
			color: ${theme.colours.white};
			padding-left: 10px;
			font-size: 1vw;
		}

		Button {
			font-size: 1vw;
		}
	}

	@media ${theme.sizes.mobileL} {
		background:  ${theme.colours.darkGrey};
		display: flex;
		flex-wrap: wrap;

		.contact-left-container {
			display: flex;
			padding-right: 20vw;
		}

		.contact-right-container {
			padding-top: 0vh;
			padding-left: 8vw;
			Form {
				
			}

			p {
				font-size: 2vw;
			}

			Button {
				font-size: 1.5vw;
			}
		}
	}

	@media ${theme.sizes.mobileM} {
	}

	@media ${theme.sizes.mobileXS} {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;

		.contact-left-container {
			padding-bottom: 5vh;
			h1 {
				font-size: 20vw;
				font-weight: normal;
				span {
					font-size: 20vw;
					font-weight: bold;
				}
			}

			a {
				font-size: 5vw;
			}
		}

		.contact-right-container {
			p {
				font-size: 6vw;
			}

			Button {
				font-size: 5vw;
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
				<Socials size="80" alt={true}/>
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
