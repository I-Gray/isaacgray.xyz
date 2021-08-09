import { createGlobalStyle } from 'styled-components';
import rootVars from './rootVars';

const GlobalStyle = createGlobalStyle`
	${rootVars};

	/* https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/ */
	
	*, 
	*:before, 
	*:after {
		margin: 0;
    	padding: 0;
    	box-sizing: border-box;
	}

	/* 'min-height: 100vh' within body is  is the */
	/* https://www.freecodecamp.org/news/html-page-width-height/ */
	
	html, body {
		scroll-behavior: smooth;
		width: 100%;
		height: 100%;
		margin: 0px;
		padding: 0px;
		//overflow-x: scroll; 
		// change
		overflow-x: hidden; 
	}

	body {
		background: var(--white);
		width: 100%;
		min-height: 100vh;
		font-family: Roboto, sans-serif;
	}
`;

export default GlobalStyle;

