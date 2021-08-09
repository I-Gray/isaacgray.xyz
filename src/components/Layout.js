import React, { useState, useEffect } from 'react';

import { ThemeProvider }  from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';
import styled from 'styled-components';

import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

import PropTypes from 'prop-types';

// https://eneaxharja.com/gatsby-smooth-scrolling/
if (typeof window !== 'undefined') {
	require('smooth-scroll')('a[href*="#"]');
}


const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children, location}) => {

	const isHome = location.path === '/';
	const [isLoading, setIsLoading] = useState(isHome);

	const handleLinks = () => {
		const links = Array.from(document.querySelectorAll('a'));
		if (links.length > 0) {
			links.forEach(link => {
				if (link.host !== window.location.host) {
					link.setAttribute('rel', 'noopener noreferrer');
					link.setAttribute('target', '_blank');
				}
			});
		}
	};

	useEffect(() => {
		if (isLoading) {
			return
		}

		if (location.hash) {
			const id = location.hash.substring(1);
			setTimeout(() => {
				const element = document.getElementById(id);
				if (element) {
					element.scrollIntoView();
					element.focus();
				}
			}, 0);
		}
		handleLinks();
	}, [isLoading]);

	return(
		<>
			<div id="root">
				<ThemeProvider theme={theme}>
					<GlobalStyle />
						{/* Add Theme prop to ThemeProvider for device handling, using the options.js file */}

						{isLoading && isHome ? (
							<h1> Loading...</h1>
						) : (
							<StyledContent>
								<Navbar isHome={isHome}/>
								{children}
								<Hero />
								<Projects />
								<Skills />
								<About />
								{/* <Typer /> */}
								<Contact />
								<Footer />
							</StyledContent>
						)}
				</ThemeProvider>
			</div>
		</>
  );
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	location: PropTypes.object.isRequired,
};
  
export default Layout
