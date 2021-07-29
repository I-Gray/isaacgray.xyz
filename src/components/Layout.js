import React from 'react';

import { ThemeProvider }  from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';

import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';


import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";


const Layout = ({ children }) => {
  
	return(
		<>
			<div id="root">
				<ThemeProvider theme={theme}>
					<GlobalStyle />
						{/* Add Theme prop to ThemeProvider for device handling, using the options.js file */}
						
						<Navbar />
						{children}
						<Hero />
						<Projects />
						<Skills />
						<About />
						{/* <Typer /> */}
						<Contact />
						<Footer />
				</ThemeProvider>
			</div>
		</>
  );
};

export default Layout
