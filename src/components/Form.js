
import React from "react";
import theme from '../assets/styles/theme'
import styled from 'styled-components';

const StyledForm = styled.div`
	
	form {
		input, #message {
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

		#message {
			height: 5.5vh;
			display: inline-block;
			width: 60%;
			border: 2px solid ${theme.colours.darkGrey};
			border-radius: 8px;
			box-sizing: border-box;
			margin: 10px 10px 10px 0px;
			transition: height 0.4s ease-in-out;
			color: ${theme.colours.darkGrey};
		}

		#message:focus {
			height: 15vh;
		}

		input[type=text], input[type=email] {
			transition: width 0.4s ease-in-out;
			color: ${theme.colours.darkGrey};
		}

		input[type=text]:focus, input[type=email]:focus  {
			width: 80%;
			outline: 2px solid ${theme.colours.lightBlue};
		}

		input::-webkit-input-placeholder, textarea::-webkit-input-placeholder { /* Chrome/Opera/Safari */
			color: ${theme.colours.lightBlue};
			font-style: italic;
		}
		input::-moz-placeholder, textarea::-moz-placeholder{ /* Firefox 19+ */
			color: ${theme.colours.lightBlue};
			font-style: italic;
		}
		input:-ms-input-placeholder, textarea:-ms-input-placeholder { /* IE 10+ */
			color: ${theme.colours.lightBlue};
			font-style: italic;
		}
		input:-moz-placeholder, textarea:-moz-placeholder { /* Firefox 18- */
			color: ${theme.colours.lightBlue};
			font-style: italic;
		}

		@media ${theme.sizes.mobileXS} {
			input[type=text], input[type=email], select, textarea {
				width: 75vw;
			}

			#message {
				width: 75vw;
			}

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
					<textarea type="textarea" id="message" name="message" placeholder="message"></textarea>
				</form>
			</StyledForm>
		</>
	);
};

export default Form;