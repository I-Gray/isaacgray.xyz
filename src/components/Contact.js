import React from 'react'
import styled from 'styled-components'
import theme from '../assets/styles/theme';
import Button from './Button';
import Form from './Form';
import Socials from './Socials';
import SectionHeading from './SectionHeading';

const ContactSection = styled.section`
	background: linear-gradient(90deg, ${theme.colours.darkGrey} 70%, ${theme.colours.white} 30%);
	display: grid;
	grid-template-columns: 60vw 40vw;

	// .section-rectangle {
	// 	height: 2vh;
	// 	width: 8vw;
	// 	background: ${theme.colours.lightBlue};
	// }

	.contact-left-container {
		margin-left: 10vw;
		margin-right: 10vw;
		height: 50vh;
		
		ul {
			list-style: none;
			text-align: left;

			h1 {
				font-size: 9em;
				color: ${theme.colours.white};

				span {
					color: ${theme.colours.lightBlue};
				}
			}

			a {
				font-size: 2em;
				font-family: 'Space Mono', sans-serif;
				color: ${theme.colours.lightGrey};	
				text-decoration: underline;
				
			}
			a:hover {
				color: ${theme.colours.white};
				cursor: pointer;	
			}
		}
	}

	.contact-right-container {
		padding-top: 10vh;
		margin-left: 2vw;
		margin-right: 10vw;

		p {
			color: ${theme.colours.white};
			padding-left: 10px;
			font-size: 1.25em;
		}
	}
`;

const Contact = () => {
	return (
		<>
		<SectionHeading section_num="03"/>
		<ContactSection>
			
			{/* <div className="section-rectangle" /> */}
			<div className="contact-left-container">
					<ul>
						<li>
							<h1>contact</h1>
						</li>
						<li>
							<h1><span>me.</span></h1>
						</li>
						<li>
							<a src="">hello@grayisaac.com</a>	
						</li>
						<li>
							<Socials size="80" alt={true}/>
						</li>
					</ul>
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
