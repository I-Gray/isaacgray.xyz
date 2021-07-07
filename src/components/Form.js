
import React from "react";
import theme from '../assets/styles/theme'
import styled from 'styled-components';

const StyledForm = styled.div`
	
	form {
		input {
			font-family: 'Roboto', sans-serif;
			font-size: 24px;
			padding: 10px 15px;
			background-color: ${theme.colours.white};
		}

		input[type=text], input[type=email], select, textarea {
			display: inline-block;
			width: 60%;
			border: 2px solid ${theme.colours.darkGrey};
			border-radius: 8px;
			box-sizing: border-box;
			margin: 10px 10px 10px 0px;
		}

		input[type=text], input[type=email] {
			transition: width 0.4s ease-in-out;
		}

		input[type=text]:focus, input[type=email]:focus  {
			width: 100%;
			outline: 2px solid ${theme.colours.lightBlue};
		}

		input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
			color: ${theme.colours.lightBlue};
			font-style: italic;
		}
		input::-moz-placeholder { /* Firefox 19+ */
			color: ${theme.colours.lightBlue};
			font-style: italic;
		}
		input:-ms-input-placeholder { /* IE 10+ */
			color: ${theme.colours.lightBlue};
			font-style: italic;
		}
		input:-moz-placeholder { /* Firefox 18- */
			color: ${theme.colours.lightBlue};
			font-style: italic;
		}
	}
`;

const Form = () => {
	return (
		<>
			<StyledForm>
				<form>
					<input type="text" id="name" name="name" placeholder="name"></input>
					<input type="email" id="email" name="email" placeholder="email"></input>
					<input type="text" id="message" name="message" placeholder="message"></input>
				</form>
			</StyledForm>
		</>
	);
};

export default Form;