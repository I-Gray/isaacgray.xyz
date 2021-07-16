import { createGlobalStyle } from 'styled-components';
import rootVars from './rootVars';

const GlobalStyle = createGlobalStyle`
	${rootVars};


	/* https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/ */
	
	*, *:before, *:after {
		margin: 0;
    	padding: 0;
    	box-sizing: border-box;
	}

	/* 'min-height: 100vh' within body is  is the */
	/* https://www.freecodecamp.org/news/html-page-width-height/ */
	
	body {
		background: var(--white);
		width: 100%;
		min-height: 100vh;
		margin: 0;
		overflow-x: scroll; 
		padding: 0;
		font-family: Roboto, sans-serif;
	}
`;

export default GlobalStyle;

