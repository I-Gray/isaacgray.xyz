import React from 'react';
import styled from 'styled-components';
import theme from '../assets/styles/theme';

const StyledTyper = styled.div`
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: Space Mono;

	margin: 0;
	padding: 0;
	box-sizing: border-box;

	display: flex;
	justify-content: center;
	align-items: center;

	p {
	  font-size: 1rem;
	  text-align: center;
	  overflow: hidden;
	  color: ${theme.colours.white};
	}

	p span.typed-text {
	  font-weight: normal;
	  color: ${theme.colours.lightBlue};
	}

	p span.cursor {
	  display: inline-block;
	  background-color: ${theme.colours.white};
	  width: 2px;
	  animation: blink 1s infinite;
	}

	p span.cursor.typing {
	  animation: none;
	}

	@keyframes blink {
	  0%  { background-color: ${theme.colours.white}; }
	  49% { background-color: ${theme.colours.white}; }
	  50% { background-color: transparent; }
	  99% { background-color: transparent; }
	  100%  { background-color: ${theme.colours.white}; }
	}
`;

const Typer = ({text}) => {

	return (
		<StyledTyper>
    			<p>Tech<span class="typed-text"></span>
					<span class="cursor">&nbsp;</span>
				</p>
		</StyledTyper>
	);
};

export default Typer;