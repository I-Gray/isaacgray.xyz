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
	grid-template-columns: 60vw 40vw;

	.contact-left-container {
		margin-left: 10vw;
		margin-right: 10vw;
		height: 50vh;
		
		text-align: left;

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
			font-size: 2vw;
		}

		Button {
			font-size: 1.5vw;
		}
	}
`;

const Contact = () => {
	return (
		<>
		<SectionHeading section_num="04"/>
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
				<Button text="Send!" blueText=">" />	
			</div>
		</ContactSection>
		</>
	);
};


export default Contact;
