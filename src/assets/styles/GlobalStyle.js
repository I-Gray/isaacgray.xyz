import { createGlobalStyle } from 'styled-components';
import rootVars from './rootVars';

const GlobalStyle = createGlobalStyle`
	${rootVars};

	html {
		box-sizing: border-box;
		width: 100%;
	}

	/* https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/ */

	*, *:before, *:after {
  		box-sizing: inherit;
	}

	body {
		background: #ffffff;
		width: 100%;
		margin: 0;
		overflow-x: scroll; 
		padding: 0;
		font-family: 'Roboto', sans-serif;
	}
`;

export default GlobalStyle;

