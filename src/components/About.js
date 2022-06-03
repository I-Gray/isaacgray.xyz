import React, { useEffect } from 'react'

import styled from 'styled-components';
import CircleAccent from '../icons/CircleAccent';
import theme from '../styles/theme'
import AboutImageMobile from '../images/AboutPictureMobile.png';
import AboutImageDesktop from '../images/AboutPictureDesktop.png';
import Tricep from '../images/TRICEP.jpg';

import SectionHeading from './SectionHeading';
import { ScrollRevealConfig } from '../config';
import scrollReveal from '../util/scrollreveal';
import Typer from './Typer';



const AboutSection = styled.section`
	background: linear-gradient(90deg, ${theme.colours.darkGrey} 70%, ${theme.colours.white} 30%);
	display: grid;
	grid-template-columns: 60vw 40vw;
	padding-bottom: 5vh;

	.about-text-container {
		display: none;
	}
	
	.about-left-container {
		margin-left: 10vw;
		margin-right: 10vw;
		height: 100%;
		display: flex;
		flex-direction: column;

		p {
			font-size: 3vw;
			font-family: 'Space Mono', sans-serif;
			color: ${theme.colours.grey};
		}

		.about-text {
			font-size: 1.2vw;
			font-family: 'Space Mono', sans-serif;
			color: ${theme.colours.lightGrey};
			text-align: left;
		
			span {
				color: ${theme.colours.lightBlue};
			}
		}

		.about-learning {
			font-size: 1.2vw;
			font-family: 'Space Mono', sans-serif;
			color: ${theme.colours.lightGrey};

			span {
				color: ${theme.colours.lightBlue};
			}			
		}
	}

	.about-right-container {
		padding-right: 10vw;
		
		position: relative;

		svg {
			position: absolute;
			top: 0%;
			left: -3.5%;
		}

		.accent {
			
		}

		.about-image-desktop {
			padding-top: 50%;
			transition: transform .2s ease-in-out;
			-webkit-transition: all 0.25s;
			-moz-transition:    all 0.25s;
			-ms-transition:     all 0.25s;
			-o-transition:      all 0.25s;
			transition:         all 0.25s;				
		}

		&:hover {
			-webkit-transform: skewX(-1deg);
			-moz-transform: skewX(-1deg);
			-o-transform: skewX(-1deg);
			transform: skewX(-1deg);
		}

		.about-image-mobile {
			display: none;
		}

	}

	.about-image-mobile {
		display: none;
	}

	@media ${theme.sizes.tabletL} {
		background: ${theme.colours.white};
		margin-right: 5vw;
		position: relative;

		.about-text-container {
			display: flex;
			position: absolute;
			left: 50%;
			top: 5%;
			
			.about-mobile {
				padding-right: 5vw;
			}

			h1 {
				font-size: 12vw;
				color: ${theme.colours.darkGrey};
				margin-left: 10vw;
				float: left;
				font-weight: normal;
		
				span {
					color: ${theme.colours.lightBlue};
					font-size: 10vw;
					font-weight: bold;
				}
			}

			svg {
				display: none;
			}
		}

		.about-left-container {
			display: block;
			height: 100%;
			margin-right: 5vw;

			.about-text {
				display: block;
				font-size: 2vw;
				padding-top: 2vh;
				color: ${theme.colours.grey};
			}
		}

		.about-image-mobile {
			display: flex;
			width: 100vw;
			height: 100%;

			img {
				display: flex;
				width: 30%;
  				margin: auto;

				padding-bottom: 5vh;
				padding-top: 30%;
				margin-left: 0vw;
			}
		}

		.about-image-desktop {
			display: none;
		}

		.about-right-container {
			display: none;
		}
	}

	@media ${theme.sizes.mobile} {
		display: block;
		overflow: hidden;
		height: 100%;

		.about-text-container {
			display: block;
			position: static;

			.about-mobile {
				padding-right: 50vw;
			}

			h1 {
				font-size: 20vw;
				color: ${theme.colours.darkGrey};
				margin-left: 10vw;
				float: left;
				font-weight: normal;
		
				span {
					color: ${theme.colours.lightBlue};
					font-size: 20vw;
					font-weight: bold;
				}
			}

			svg {
				display: none;
			}
		}

		.about-left-container {
			display: block;
			height: 100%;

			.about-text {
				display: block;
				font-size: 4vw;
				padding-top: 2vh;
				color: ${theme.colours.grey};
			}
		}

		.about-image-mobile {
			display: block;
			width: 100vw;
			height: 100%;

			img {
				display: block;
				width: 50%;
  				margin: auto;

				padding-bottom: 5vh;
				padding-top: 5vh;
			}
		}
	}
`;

const About = () => {
	// const revealContainer = useRef(null);
	// useEffect(() => {
	// 	// if (prefersReducedMotion) {
	// 	// 	return;
	// 	// }
	// 	scrollReveal.reveal(revealContainer.current, ScrollRevealConfig());
	// }, []);
	// ref={revealContainer}

	return (
		<>
		<div id="about">
		<SectionHeading section_num="02" dark={true} />
		<AboutSection class="about" >
				<div className="about-text-container">	
					<h1 className="about-mobile">about<span><br/>me.</span></h1>
				</div>
				<div className="about-left-container">
					<p>//</p>
					<br />
					<p className="about-text">
						Hi, I’m <span>Isaac</span>.
						<br/>
						<br/>
						I am an Australian developer currently living in <span>Sydney</span> with a <span>B.E & B.CS.</span> I enjoy the design and development process in a range of topics such as back-end web development, computer vision & hardware projects.
						<br/>
						<br/>
						I have experience creating things in teams as well as many solo-projects, all of which you can read about on this site!
						<br/>
						<br/>
						<span>Other than tech</span>, I enjoy reading, traveling, running & making music. 
						<br/>
						<br/>
						Currently I am learning: 
					</p>
					<Typer className="typer" text="software design patterns" /> 
				</div>
				<div className="about-right-container">
					<svg className="about-svg" width="562" height="280" viewBox="0 0 562 280" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M48.672 110.448C46.272 110.448 43.248 110.592 39.6 110.88C36.048 111.072 32.592 111.648 29.232 112.608C25.968 113.472 23.136 114.864 20.736 116.784C18.432 118.704 17.28 121.344 17.28 124.704C17.28 126.912 17.712 128.832 18.576 130.464C19.536 132 20.784 133.296 22.32 134.352C23.856 135.312 25.536 136.032 27.36 136.512C29.28 136.896 31.2 137.088 33.12 137.088C36.576 137.088 39.552 136.512 42.048 135.36C44.64 134.208 46.8 132.672 48.528 130.752C50.256 128.736 51.504 126.432 52.272 123.84C53.136 121.152 53.568 118.32 53.568 115.344V110.448H48.672ZM53.568 102.672V100.944C53.568 89.328 47.808 83.52 36.288 83.52C28.416 83.52 21.552 86.16 15.696 91.44L9.936 84.672C16.272 78.144 25.776 74.88 38.448 74.88C41.712 74.88 44.832 75.36 47.808 76.32C50.88 77.28 53.52 78.768 55.728 80.784C57.936 82.704 59.712 85.152 61.056 88.128C62.4 91.104 63.072 94.656 63.072 98.784V128.88C63.072 131.472 63.168 134.208 63.36 137.088C63.648 139.872 63.936 142.176 64.224 144H55.008C54.72 142.368 54.48 140.592 54.288 138.672C54.192 136.752 54.144 134.88 54.144 133.056H53.856C51.072 137.568 47.76 140.832 43.92 142.848C40.176 144.768 35.568 145.728 30.096 145.728C27.12 145.728 24.24 145.296 21.456 144.432C18.672 143.664 16.176 142.464 13.968 140.832C11.856 139.104 10.128 137.04 8.784 134.64C7.536 132.144 6.912 129.264 6.912 126C6.912 120.528 8.304 116.256 11.088 113.184C13.968 110.016 17.52 107.664 21.744 106.128C26.064 104.592 30.624 103.632 35.424 103.248C40.32 102.864 44.784 102.672 48.816 102.672H53.568ZM146.528 110.304C146.528 106.56 145.904 103.056 144.656 99.792C143.504 96.528 141.824 93.696 139.616 91.296C137.408 88.896 134.72 87.024 131.552 85.68C128.48 84.24 124.976 83.52 121.04 83.52C117.104 83.52 113.504 84.24 110.24 85.68C106.976 87.024 104.144 88.896 101.744 91.296C99.3439 93.696 97.4719 96.528 96.1279 99.792C94.7839 103.056 94.1119 106.56 94.1119 110.304C94.1119 114.048 94.7839 117.552 96.1279 120.816C97.4719 124.08 99.3439 126.912 101.744 129.312C104.144 131.712 106.976 133.632 110.24 135.072C113.504 136.416 117.104 137.088 121.04 137.088C124.976 137.088 128.48 136.416 131.552 135.072C134.72 133.632 137.408 131.712 139.616 129.312C141.824 126.912 143.504 124.08 144.656 120.816C145.904 117.552 146.528 114.048 146.528 110.304ZM85.0399 35.136H94.5439V87.84H94.8319C96.3679 85.536 98.1919 83.568 100.304 81.936C102.416 80.304 104.624 78.96 106.928 77.904C109.232 76.848 111.584 76.08 113.984 75.6C116.48 75.12 118.832 74.88 121.04 74.88C126.32 74.88 131.12 75.792 135.44 77.616C139.856 79.344 143.648 81.792 146.816 84.96C149.984 88.128 152.432 91.872 154.16 96.192C155.984 100.512 156.896 105.216 156.896 110.304C156.896 115.392 155.984 120.096 154.16 124.416C152.432 128.736 149.984 132.48 146.816 135.648C143.648 138.816 139.856 141.312 135.44 143.136C131.12 144.864 126.32 145.728 121.04 145.728C118.832 145.728 116.48 145.488 113.984 145.008C111.584 144.528 109.232 143.76 106.928 142.704C104.624 141.648 102.416 140.304 100.304 138.672C98.1919 137.04 96.3679 135.072 94.8319 132.768H94.5439V144H85.0399V35.136ZM230.815 110.304C230.815 106.56 230.191 103.056 228.943 99.792C227.791 96.528 226.111 93.696 223.903 91.296C221.695 88.896 219.007 87.024 215.839 85.68C212.767 84.24 209.263 83.52 205.327 83.52C201.391 83.52 197.839 84.24 194.671 85.68C191.599 87.024 188.959 88.896 186.751 91.296C184.639 93.696 182.959 96.528 181.711 99.792C180.559 103.056 179.983 106.56 179.983 110.304C179.983 114.048 180.559 117.552 181.711 120.816C182.959 124.08 184.639 126.912 186.751 129.312C188.959 131.712 191.599 133.632 194.671 135.072C197.839 136.416 201.391 137.088 205.327 137.088C209.263 137.088 212.767 136.416 215.839 135.072C219.007 133.632 221.695 131.712 223.903 129.312C226.111 126.912 227.791 124.08 228.943 120.816C230.191 117.552 230.815 114.048 230.815 110.304ZM241.183 110.304C241.183 115.392 240.271 120.096 238.447 124.416C236.719 128.736 234.271 132.48 231.103 135.648C227.935 138.816 224.143 141.312 219.727 143.136C215.407 144.864 210.607 145.728 205.327 145.728C200.143 145.728 195.343 144.864 190.927 143.136C186.607 141.312 182.863 138.816 179.695 135.648C176.527 132.48 174.031 128.736 172.207 124.416C170.479 120.096 169.615 115.392 169.615 110.304C169.615 105.216 170.479 100.512 172.207 96.192C174.031 91.872 176.527 88.128 179.695 84.96C182.863 81.792 186.607 79.344 190.927 77.616C195.343 75.792 200.143 74.88 205.327 74.88C210.607 74.88 215.407 75.792 219.727 77.616C224.143 79.344 227.935 81.792 231.103 84.96C234.271 88.128 236.719 91.872 238.447 96.192C240.271 100.512 241.183 105.216 241.183 110.304ZM307.103 144C306.911 142.176 306.767 140.4 306.671 138.672C306.671 136.848 306.671 135.024 306.671 133.2H306.383C305.327 135.024 303.983 136.704 302.351 138.24C300.719 139.776 298.895 141.12 296.879 142.272C294.863 143.328 292.703 144.144 290.398 144.72C288.191 145.392 285.983 145.728 283.775 145.728C275.135 145.728 268.751 143.472 264.623 138.96C260.495 134.352 258.431 127.824 258.431 119.376V76.608H267.935V113.904C267.935 117.648 268.223 120.96 268.799 123.84C269.375 126.72 270.335 129.168 271.679 131.184C273.119 133.104 274.991 134.592 277.295 135.648C279.695 136.608 282.671 137.088 286.223 137.088C286.703 137.088 288.047 136.896 290.255 136.512C292.463 136.128 294.767 135.072 297.167 133.344C299.663 131.616 301.871 129.024 303.791 125.568C305.711 122.112 306.671 117.312 306.671 111.168V76.608H316.175V129.168C316.175 130.992 316.223 133.296 316.319 136.08C316.511 138.864 316.703 141.504 316.895 144H307.103ZM373.294 85.248H353.854V124.992C353.854 127.488 354.094 129.552 354.574 131.184C355.054 132.72 355.726 133.92 356.59 134.784C357.454 135.648 358.462 136.272 359.614 136.656C360.862 136.944 362.206 137.088 363.646 137.088C365.278 137.088 366.958 136.848 368.686 136.368C370.414 135.888 371.998 135.264 373.438 134.496L373.87 143.28C370.318 144.912 366.046 145.728 361.054 145.728C359.23 145.728 357.31 145.488 355.294 145.008C353.374 144.528 351.598 143.616 349.966 142.272C348.334 140.928 346.99 139.104 345.934 136.8C344.878 134.496 344.35 131.472 344.35 127.728V85.248H330.094V76.608H344.35V57.6H353.854V76.608H373.294V85.248Z" fill="#27C1E7"/>
						<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="6" y="35" width="368" height="111">
						<path d="M48.672 110.448C46.272 110.448 43.248 110.592 39.6 110.88C36.048 111.072 32.592 111.648 29.232 112.608C25.968 113.472 23.136 114.864 20.736 116.784C18.432 118.704 17.28 121.344 17.28 124.704C17.28 126.912 17.712 128.832 18.576 130.464C19.536 132 20.784 133.296 22.32 134.352C23.856 135.312 25.536 136.032 27.36 136.512C29.28 136.896 31.2 137.088 33.12 137.088C36.576 137.088 39.552 136.512 42.048 135.36C44.64 134.208 46.8 132.672 48.528 130.752C50.256 128.736 51.504 126.432 52.272 123.84C53.136 121.152 53.568 118.32 53.568 115.344V110.448H48.672ZM53.568 102.672V100.944C53.568 89.328 47.808 83.52 36.288 83.52C28.416 83.52 21.552 86.16 15.696 91.44L9.936 84.672C16.272 78.144 25.776 74.88 38.448 74.88C41.712 74.88 44.832 75.36 47.808 76.32C50.88 77.28 53.52 78.768 55.728 80.784C57.936 82.704 59.712 85.152 61.056 88.128C62.4 91.104 63.072 94.656 63.072 98.784V128.88C63.072 131.472 63.168 134.208 63.36 137.088C63.648 139.872 63.936 142.176 64.224 144H55.008C54.72 142.368 54.48 140.592 54.288 138.672C54.192 136.752 54.144 134.88 54.144 133.056H53.856C51.072 137.568 47.76 140.832 43.92 142.848C40.176 144.768 35.568 145.728 30.096 145.728C27.12 145.728 24.24 145.296 21.456 144.432C18.672 143.664 16.176 142.464 13.968 140.832C11.856 139.104 10.128 137.04 8.784 134.64C7.536 132.144 6.912 129.264 6.912 126C6.912 120.528 8.304 116.256 11.088 113.184C13.968 110.016 17.52 107.664 21.744 106.128C26.064 104.592 30.624 103.632 35.424 103.248C40.32 102.864 44.784 102.672 48.816 102.672H53.568ZM146.528 110.304C146.528 106.56 145.904 103.056 144.656 99.792C143.504 96.528 141.824 93.696 139.616 91.296C137.408 88.896 134.72 87.024 131.552 85.68C128.48 84.24 124.976 83.52 121.04 83.52C117.104 83.52 113.504 84.24 110.24 85.68C106.976 87.024 104.144 88.896 101.744 91.296C99.3439 93.696 97.4719 96.528 96.1279 99.792C94.7839 103.056 94.1119 106.56 94.1119 110.304C94.1119 114.048 94.7839 117.552 96.1279 120.816C97.4719 124.08 99.3439 126.912 101.744 129.312C104.144 131.712 106.976 133.632 110.24 135.072C113.504 136.416 117.104 137.088 121.04 137.088C124.976 137.088 128.48 136.416 131.552 135.072C134.72 133.632 137.408 131.712 139.616 129.312C141.824 126.912 143.504 124.08 144.656 120.816C145.904 117.552 146.528 114.048 146.528 110.304ZM85.0399 35.136H94.5439V87.84H94.8319C96.3679 85.536 98.1919 83.568 100.304 81.936C102.416 80.304 104.624 78.96 106.928 77.904C109.232 76.848 111.584 76.08 113.984 75.6C116.48 75.12 118.832 74.88 121.04 74.88C126.32 74.88 131.12 75.792 135.44 77.616C139.856 79.344 143.648 81.792 146.816 84.96C149.984 88.128 152.432 91.872 154.16 96.192C155.984 100.512 156.896 105.216 156.896 110.304C156.896 115.392 155.984 120.096 154.16 124.416C152.432 128.736 149.984 132.48 146.816 135.648C143.648 138.816 139.856 141.312 135.44 143.136C131.12 144.864 126.32 145.728 121.04 145.728C118.832 145.728 116.48 145.488 113.984 145.008C111.584 144.528 109.232 143.76 106.928 142.704C104.624 141.648 102.416 140.304 100.304 138.672C98.1919 137.04 96.3679 135.072 94.8319 132.768H94.5439V144H85.0399V35.136ZM230.815 110.304C230.815 106.56 230.191 103.056 228.943 99.792C227.791 96.528 226.111 93.696 223.903 91.296C221.695 88.896 219.007 87.024 215.839 85.68C212.767 84.24 209.263 83.52 205.327 83.52C201.391 83.52 197.839 84.24 194.671 85.68C191.599 87.024 188.959 88.896 186.751 91.296C184.639 93.696 182.959 96.528 181.711 99.792C180.559 103.056 179.983 106.56 179.983 110.304C179.983 114.048 180.559 117.552 181.711 120.816C182.959 124.08 184.639 126.912 186.751 129.312C188.959 131.712 191.599 133.632 194.671 135.072C197.839 136.416 201.391 137.088 205.327 137.088C209.263 137.088 212.767 136.416 215.839 135.072C219.007 133.632 221.695 131.712 223.903 129.312C226.111 126.912 227.791 124.08 228.943 120.816C230.191 117.552 230.815 114.048 230.815 110.304ZM241.183 110.304C241.183 115.392 240.271 120.096 238.447 124.416C236.719 128.736 234.271 132.48 231.103 135.648C227.935 138.816 224.143 141.312 219.727 143.136C215.407 144.864 210.607 145.728 205.327 145.728C200.143 145.728 195.343 144.864 190.927 143.136C186.607 141.312 182.863 138.816 179.695 135.648C176.527 132.48 174.031 128.736 172.207 124.416C170.479 120.096 169.615 115.392 169.615 110.304C169.615 105.216 170.479 100.512 172.207 96.192C174.031 91.872 176.527 88.128 179.695 84.96C182.863 81.792 186.607 79.344 190.927 77.616C195.343 75.792 200.143 74.88 205.327 74.88C210.607 74.88 215.407 75.792 219.727 77.616C224.143 79.344 227.935 81.792 231.103 84.96C234.271 88.128 236.719 91.872 238.447 96.192C240.271 100.512 241.183 105.216 241.183 110.304ZM307.103 144C306.911 142.176 306.767 140.4 306.671 138.672C306.671 136.848 306.671 135.024 306.671 133.2H306.383C305.327 135.024 303.983 136.704 302.351 138.24C300.719 139.776 298.895 141.12 296.879 142.272C294.863 143.328 292.703 144.144 290.398 144.72C288.191 145.392 285.983 145.728 283.775 145.728C275.135 145.728 268.751 143.472 264.623 138.96C260.495 134.352 258.431 127.824 258.431 119.376V76.608H267.935V113.904C267.935 117.648 268.223 120.96 268.799 123.84C269.375 126.72 270.335 129.168 271.679 131.184C273.119 133.104 274.991 134.592 277.295 135.648C279.695 136.608 282.671 137.088 286.223 137.088C286.703 137.088 288.047 136.896 290.255 136.512C292.463 136.128 294.767 135.072 297.167 133.344C299.663 131.616 301.871 129.024 303.791 125.568C305.711 122.112 306.671 117.312 306.671 111.168V76.608H316.175V129.168C316.175 130.992 316.223 133.296 316.319 136.08C316.511 138.864 316.703 141.504 316.895 144H307.103ZM373.294 85.248H353.854V124.992C353.854 127.488 354.094 129.552 354.574 131.184C355.054 132.72 355.726 133.92 356.59 134.784C357.454 135.648 358.462 136.272 359.614 136.656C360.862 136.944 362.206 137.088 363.646 137.088C365.278 137.088 366.958 136.848 368.686 136.368C370.414 135.888 371.998 135.264 373.438 134.496L373.87 143.28C370.318 144.912 366.046 145.728 361.054 145.728C359.23 145.728 357.31 145.488 355.294 145.008C353.374 144.528 351.598 143.616 349.966 142.272C348.334 140.928 346.99 139.104 345.934 136.8C344.878 134.496 344.35 131.472 344.35 127.728V85.248H330.094V76.608H344.35V57.6H353.854V76.608H373.294V85.248Z" fill="#27C1E7"/>
						</mask>
						<g mask="url(#mask0)">
						<rect className="about-vector" x="-102" y="-59" width="224" height="380" fill="white"/>
						</g>
						<path d="M142.072 175.88H158.488V186.68H158.776C160.312 183.416 162.76 180.536 166.12 178.04C169.576 175.448 174.184 174.152 179.944 174.152C190.792 174.152 197.992 178.424 201.544 186.968C204.04 182.552 207.16 179.336 210.904 177.32C214.648 175.208 219.112 174.152 224.296 174.152C228.904 174.152 232.792 174.92 235.96 176.456C239.128 177.992 241.672 180.104 243.592 182.792C245.608 185.48 247.048 188.648 247.912 192.296C248.776 195.848 249.208 199.688 249.208 203.816V245H231.928V205.832C231.928 203.72 231.736 201.704 231.352 199.784C230.968 197.768 230.296 196.04 229.336 194.6C228.376 193.064 227.08 191.864 225.448 191C223.816 190.136 221.704 189.704 219.112 189.704C216.424 189.704 214.12 190.232 212.2 191.288C210.376 192.248 208.84 193.592 207.592 195.32C206.44 196.952 205.576 198.872 205 201.08C204.52 203.192 204.28 205.352 204.28 207.56V245H187V203.816C187 199.496 186.088 196.088 184.264 193.592C182.44 191 179.416 189.704 175.192 189.704C172.312 189.704 169.864 190.184 167.848 191.144C165.928 192.104 164.296 193.4 162.952 195.032C161.704 196.664 160.792 198.536 160.216 200.648C159.64 202.76 159.352 204.968 159.352 207.272V245H142.072V175.88ZM281.913 216.488C282.489 221.672 284.505 225.704 287.961 228.584C291.417 231.464 295.593 232.904 300.489 232.904C304.809 232.904 308.409 232.04 311.289 230.312C314.265 228.488 316.857 226.232 319.065 223.544L331.449 232.904C327.417 237.896 322.905 241.448 317.913 243.56C312.921 245.672 307.689 246.728 302.217 246.728C297.033 246.728 292.137 245.864 287.529 244.136C282.921 242.408 278.937 239.96 275.577 236.792C272.217 233.624 269.529 229.832 267.513 225.416C265.593 220.904 264.633 215.912 264.633 210.44C264.633 204.968 265.593 200.024 267.513 195.608C269.529 191.096 272.217 187.256 275.577 184.088C278.937 180.92 282.921 178.472 287.529 176.744C292.137 175.016 297.033 174.152 302.217 174.152C307.017 174.152 311.385 175.016 315.321 176.744C319.353 178.376 322.761 180.776 325.545 183.944C328.425 187.112 330.633 191.048 332.169 195.752C333.801 200.36 334.617 205.688 334.617 211.736V216.488H281.913ZM317.337 203.528C317.241 198.44 315.657 194.456 312.585 191.576C309.513 188.6 305.241 187.112 299.769 187.112C294.585 187.112 290.457 188.6 287.385 191.576C284.409 194.552 282.585 198.536 281.913 203.528H317.337ZM350.776 234.92C350.776 231.848 351.88 229.208 354.088 227C356.392 224.792 359.128 223.688 362.296 223.688C365.368 223.688 368.056 224.744 370.36 226.856C372.664 228.968 373.816 231.56 373.816 234.632C373.816 237.704 372.664 240.344 370.36 242.552C368.152 244.76 365.464 245.864 362.296 245.864C360.76 245.864 359.272 245.576 357.832 245C356.488 244.424 355.288 243.656 354.232 242.696C353.176 241.736 352.312 240.584 351.64 239.24C351.064 237.896 350.776 236.456 350.776 234.92Z" fill="#27C1E7"/>
					</svg>
					<div className="about-image-desktop" >
					<img src={AboutImageDesktop} alt="Picture of Isaac G."></img>
				</div>
				</div>
				<div className="about-image-mobile">
					<img  src={AboutImageMobile} alt="Picture of Isaac G."></img>
				</div>		
		</AboutSection>
		</div>
		</>
	);
};

export default About;