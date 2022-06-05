import { css } from 'styled-components';

import Roboto300Woff from '../fonts/Roboto/roboto-v27-latin-300.woff'
import Roboto300Woff2 from '../fonts/Roboto/roboto-v27-latin-300.woff2'

import Roboto300ItalicWoff from '../fonts/Roboto/roboto-v27-latin-300italic.woff'
import Roboto300ItalicWoff2 from '../fonts/Roboto/roboto-v27-latin-300italic.woff2'

import Roboto500Woff from '../fonts/Roboto/roboto-v27-latin-500.woff'
import Roboto500Woff2 from '../fonts/Roboto/roboto-v27-latin-500.woff2'

import Roboto500ItalicWoff from '../fonts/Roboto/roboto-v27-latin-500italic.woff'
import Roboto500ItalicWoff2 from '../fonts/Roboto/roboto-v27-latin-500italic.woff2'

import Roboto700Woff from '../fonts/Roboto/roboto-v27-latin-700.woff'
import Roboto700Woff2 from '../fonts/Roboto/roboto-v27-latin-700.woff2'

import Roboto700ItalicWoff from '../fonts/Roboto/roboto-v27-latin-700italic.woff'
import Roboto700ItalicWoff2 from '../fonts/Roboto/roboto-v27-latin-700italic.woff2'

import Roboto900Woff from '../fonts/Roboto/roboto-v27-latin-900.woff'
import Roboto900Woff2 from '../fonts/Roboto/roboto-v27-latin-900.woff2'

import Roboto900ItalicWoff from '../fonts/Roboto/roboto-v27-latin-900italic.woff'
import Roboto900ItalicWoff2 from '../fonts/Roboto/roboto-v27-latin-900italic.woff2'

import RobotoRegularWoff from '../fonts/Roboto/roboto-v27-latin-regular.woff'
import RobotoRegularWoff2 from '../fonts/Roboto/roboto-v27-latin-regular.woff2'

import RobotoRegularItalicWoff from '../fonts/Roboto/roboto-v27-latin-italic.woff'
import RobotoRegularItalicWoff2 from '../fonts/Roboto/roboto-v27-latin-italic.woff2'


const regularWeights = {
	300: [Roboto300Woff, Roboto300Woff2],
	400: [RobotoRegularWoff, RobotoRegularWoff2],
	500: [Roboto500Woff, Roboto500Woff2],
	700: [Roboto700Woff, Roboto700Woff2],
	900: [Roboto900Woff, Roboto900Woff2]
};


const italicWeights = {
	300: [Roboto300ItalicWoff, Roboto300ItalicWoff2],
	400: [RobotoRegularItalicWoff, RobotoRegularItalicWoff2],
	500: [Roboto500ItalicWoff, Roboto500ItalicWoff2],
	700: [Roboto700ItalicWoff, Roboto700ItalicWoff2],
	900: [Roboto900ItalicWoff, Roboto900ItalicWoff2]
};


const roboto = {
	name: 'Roboto',
	normal: regularWeights,
	italic: italicWeights,
};

const createFontFaces = (family, style = 'normal') => {
	let styles = '';

	for (const [weight, formats] of Object.entries(family[style])) {
		const woff = formats[0];
		const woff2 = formats[1];

		styles += `
			@font-face {
				font-family: '${family.name}';
				src: url(${woff2}) format('woff2'),
					url(${woff}) format('woff');
				font-weight: ${weight};
				font-style: ${style};
				font-display: auto;
			}
		`;
	}

	return styles;
};

const robotoNormal = createFontFaces(roboto);
const robotoItalic = createFontFaces(roboto, 'italic');

const Fonts = css`
	${robotoNormal + robotoItalic}
`;

export default Fonts;
