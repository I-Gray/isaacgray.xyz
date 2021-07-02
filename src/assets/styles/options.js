/* eslint-disable no-mixed-spaces-and-tabs */
import { css } from 'styled-components';

// Use 'mix-ins' to switch between devices
// https://css-tricks.com/approaches-media-queries-sass/

// ....
// Desktop Wide
// Desktop Normal
// Desktop small
// Tablet
// Phone 
// Small phone

const options = {
	centerFlex: css`
		display: flex;
    	align-items: center;
		justify-content: center;
	`, 

  	flexBetween: css`
		display: flex;
		justify-content: space-between;
		align-items: center;
	`,
}



export default options;