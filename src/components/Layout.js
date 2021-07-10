import React from 'react';

import { ThemeProvider }  from 'styled-components';
import GlobalStyle from '../assets/styles/GlobalStyle';
import theme from '../assets/styles/theme';

import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const Layout = ({ children }) => {
  
	return(
		<>
			<div id="root">
				<ThemeProvider theme={theme}>
					<GlobalStyle />
						{/* Add Theme prop to ThemeProvider for device handling, using the options.js file */}
						
						{/* <Navbar />
						{children}
						<Hero />
						<About /> */}
						<Projects />
						{/* <Contact />*/}
						<Footer />
				</ThemeProvider>
			</div>
		</>
  );
};

export default Layout
