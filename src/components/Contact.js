import React from 'react'
import styled from 'styled-components'
import theme from '../assets/styles/theme';
import Button from './Button';
import Form from './Form';
import Socials from './Socials';

const ContactSection = styled.section`
	background: linear-gradient(90deg, ${theme.colours.darkGrey} 70%, ${theme.colours.white} 30%);
	display: grid;
	grid-template-columns: 60vw 40vw;

	.section-rectangle {
		height: 2vh;
		width: 8vw;
		background: ${theme.colours.lightBlue};
	}

	.contact-left-container {
		margin-left: 10vw;
		margin-right: 10vw;
		height: 100vh;

		ul {
			list-style: none;
			h1 {
				font-size: 48px;
				color: ${theme.colours.lightBlue};	
			}

			a {
				font-size: 24px
				font-family: 'Space Mono', sans-serif;
				color: ${theme.colours.lightBlue};	
			}
		}
	}

	.contact-right-container {
		padding-top: 20vh;
		margin-left: 2vw;
		margin-right: 10vw;
	}

`;

const Contact = () => {

	return (
		<>
		<ContactSection>
			
			<div className="section-rectangle" />
			<div className="contact-left-container">
					<ul>
						<li>
							<h1><span>contact</span>
								<br/>me.
							</h1>
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
				{/* Form component */}
				<Form />
				<Button text="Send!" blueText=">" />	
			</div>
		</ContactSection>
		</>
	);
};


export default Contact;
