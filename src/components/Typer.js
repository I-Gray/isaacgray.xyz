import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

const StyledTyper = styled.div`
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: Space Mono;

	margin: 0;
	padding: 0;
	box-sizing: border-box;

	display: flex;

	.change-word {
		font-size: 0.5em;
		color: ${theme.colours.lightBlue};
	}

	.cursor {
		font-size: 0.5em;
	}

	p span.typed-text {
		font-weight: normal;
		color: ${theme.colours.lightBlue};
	}

	p span.cursor {
		display: inline-block;
		background-color: ${theme.colours.white};
		width: 2.5px;
		animation: blink 1s infinite;
	}

	p span.cursor.typing {
	  	animation: none;
	}

	@keyframes blink {
		0%  { 
			background-color: ${theme.colours.grey}; 
		}
		49% { 
			background-color: ${theme.colours.grey}; 
		}
		50% { 
			background-color: transparent; 
		}
		99% { 
			background-color: transparent; 
		}
		100%  { 
			background-color: ${theme.colours.grey}; 
		}
	}
`;

const Typer = ({text}) => {
		
	// if (typeof window !== 'undefined') {
	// 	const wordToChange = document.querySelector('.change-word')

	// 	let interval = 0
	// 	initInterval()

	// 	function initInterval () {
	// 		interval = setInterval(changeSentence, 3500)
	// 	}

	// 	function changeSentence () {
	// 		const randomWord = text[Math.floor(Math.random() * words.length)]
	// 		clearInterval(interval)
	// 		eraseAndSet(wordToChange, randomWord)
	// 	}

	// 	function eraseAndSet (element, newValue) {
	// 		erase()

	// 		function erase () {
	// 			const stringLength = element.innerHTML.length
	// 			element.innerHTML = element.innerHTML.substr(0, stringLength - 1)

	// 			stringLength > 0 ? setTimeout(erase, 50) : set()
	// 		}

	// 		function set () {
	// 			const stringLength = element.innerHTML.length;
	// 			element.innerHTML = newValue.substr(0, stringLength + 1)

	// 			stringLength < newValue.length ? setTimeout(set, 50) : initInterval()
	// 		}
	// 	}
	// }

	return (
		<StyledTyper>
    			<p><span class="change-word">{text}</span>
					<span class="cursor">&nbsp;</span>
				</p>
		</StyledTyper>
	);
};

export default Typer;