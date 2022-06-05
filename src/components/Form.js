
import React from "react";
import theme from '../styles/theme'
import styled from 'styled-components';
import Button from './Button';

const StyledForm = styled.div`
	
	form {

		Button {
			display: block;
			font-size: 0.8vw;
		}

		input, #message {
			font-family: 'Roboto', sans-serif;
			font-size: 2vw;
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
			height: 8vh;
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

		// Text colours
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

		@media ${theme.sizes.tabletL} {
			input[type=text], input[type=email], select, textarea {
				width: 25vw;
			}

			#message {
				width: 25vw;
			}

			input, #message {
				font-size: 3vw;
			}

			input[type=text]:focus, input[type=email]:focus  {
				width: 28vw;
			}

			Button {
				height: 100%
				display: block;
				font-size: 2vw;
			}

		}

		@media ${theme.sizes.mobile} {
			input[type=text], input[type=email], select, textarea {
				width: 70vw;
			}

			#message {
				width: 70vw;
			}

			input, #message {
				font-size: 4vw;
			}

			input[type=text]:focus, input[type=email]:focus  {
				width: 70vw;
			}

			Button {
				height: 100%
				display: block;
				font-size:1vw;
			}

		}
	}
`;

const Form = () => {
	return (
		<>
			<StyledForm>
				<form  method="post" action={process.env.FORM_API} >
					<input type="text" id="name" name="name" placeholder="name"></input>
					<input type="email" id="email" name="email" placeholder="email"></input>
					<textarea type="textarea" id="message" name="message" placeholder="message"></textarea>
					<Button name="Submit Button" type="submit" text="Send!" blueText=">" light={true} />	
				</form>
			</StyledForm>
		</>
	);
};

export default Form;