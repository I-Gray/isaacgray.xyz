import React, { FC } from 'react'

import { ThemeProvider }  from 'styled-components'
import GlobalStyle from '../assets/styles/GlobalStyle';
import theme from '../assets/styles/theme';

import Navbar from './Navbar';

const Layout = ({ children }) => {
  
	return(
		<>
			<div id="root">
			<ThemeProvider theme={theme}>
				<GlobalStyle />
					{/* Add Theme prop to ThemeProvider for device handling, using the options.js file */}
					
					<Navbar />
					{children}
					{/* <Hero /> */}

			</ThemeProvider>
			</div>
		</>
  );
};

export default Layout
