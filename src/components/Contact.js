import React from 'react'
import styled from 'styled-components'
import theme from '../assets/styles/theme';
import Button from './Button';

const ContactSection = styled.section`
	background: linear-gradient(90deg, ${theme.colours.darkGrey} 70%, ${theme.colours.white} 30%);
	display: grid;
	grid-template-columns: 60vw 40vw;

`;

const Contact = () => {

	return (
		<>
		<ContactSection>
			<div className="section-rectangle" />
			<div className="contact-left-container">
				<div className="">
					<ul>
						<li>
							<h1><span>contact</span>
								<br/>me.
							</h1>
						</li>
						<li>
							<a>hello@grayisaac.com</a>	
						</li>
						<li>
							{/* Social Links component */}
						</li>
					</ul>
				</div>	
			</div>
			<div className="contact-right-container">
				<p>Let's chat!</p>
				{/* Form component */}
				<Button text="Reach Out!" blueText=">" />	
			</div>
		</ContactSection>
		</>
	);
};


export default Contact;
