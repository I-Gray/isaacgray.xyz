import React, { FC } from 'react'

import { createGlobalStyle, ThemeProvider } from 'styled-components'
import GlobalStyle from '../assets/styles/GlobalStyle';
import theme from '../assets/styles/theme';

import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'

const Layout = ({ children }) => {
  return(
  <>
  	<div id="root">
		<GlobalStyle />
			{/* Add Theme prop to ThemeProvider for device handling, using the options.js file */}
			<ThemeProvider theme={theme} />
			<Navbar />
			{children}
			{/* <Hero /> */}
	</div>
  </>
  )
}

export default Layout
