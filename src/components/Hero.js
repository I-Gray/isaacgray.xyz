import React from "react"
import HeroOrbit from '../icons/HeroOrbit'
import FloatingIcons from '../icons/FloatingIcons'
import styled from 'styled-components';
import theme from '../styles/theme';
import Button from './Button';

import { gsap } from "gsap";
import anime from 'animejs/lib/anime.es';

const HeroSection = styled.section`	
	background: linear-gradient(90deg, ${theme.colours.darkGrey} 70%, ${theme.colours.white} 30%);
	display: flex;
	position: relative;
	height: 100%;

	.hero-left-container {
		z-index: 3;
		padding-top: 15%;
		margin-left: 10vw;
		margin-right: 10vw;
		height: 100vh;
		float: left;
		height: 100%;
		margin-bottom: 30vh;
		
		.rectangle {
			height: 150px;
			width: 2px;
			background-color: ${theme.colours.lightGrey};
		}

		h1 {
			margin-top: 15vh;
			font-size: 10vw;;
			color: ${theme.colours.white};
			text-align: left;

			span {
				color: ${theme.colours.lightBlue};
			}
		}
	
		p {
			font-size: 2vw;
			color: ${theme.colours.lightGrey};
			font-family: 'Space Mono', sans-serif;
			padding-top: 10px;
			padding-bottom: 40px;
		}

		Button {
			text-align: left;
			font-size: 1.5vw;
		}
	}

	.circle-orbit {
		position: absolute;
		z-index; 1;
		left: 47%;
		top: 20%;
		display: flex;
	}

	.floating-icons {
		position: absolute;
		display: flex;
		z-index: 0;
		left: 0%;
		top: 18%;
		height: 70vh;
		width: 70vw;
	}

	@media ${theme.sizes.tabletL} {
		background: ${theme.colours.darkGrey};
		padding-top: %;

		.hero-left-container {
			display: inline-block;
			align-items: center;

			h1 {
				font-size: 15vw;
			}

			p {
				font-size: 3vw;
			}

			Button {
				font-size: 2vw;
			}
		}

		.circle-orbit {
			transform: scale(1.7);
			opacity: 0.3;
		}

		.floating-icons {
			position: absolute;
			transform: scale(1.8);
		}
	}

	@media ${theme.sizes.tabletS} {
		padding-top: 0%;
		.hero-left-container {
			display: inline-block;
			align-items: center;

			h1 {
				font-size: 20vw;
			}

			p {
				font-size: 4vw;
			}

			Button {
				font-size: 3vw;
			}
		}
	}

	@media ${theme.sizes.mobile} {
		display: flex;
		padding-top: 25%;
		height: 100%;

		.hero-left-container {
			display: inline-block;
			align-items: center;

			h1 {
				font-size: 25vw;
			}

			p {
				font-size: 5vw;
			}

			Button {
				font-size: 4vw;
			}
		}

		.circle-orbit {
			transform: scale(1.7);
			opacity: 0.3;
		}

		.floating-icons {
			position: absolute;
			transform: scale(1.8);
		}
	}
`;

const Hero = () => {
	// document.addEventListener('mousemove', parallax);
	// function parallax(e) {
	// 	this.querySelectorAll('.layer').forEach(layer => {
	// 		const velocity = layer.getAttribute('icon-speed');

	// 		const x = (window.innerWidth - e.pageX * velocity)/100;
	// 		const y = (window.innerHeight - e.pageY * velocity)/100;
			
	// 		layer.style.transform = `translateX(${x}px) translateY(${y}px)`
	// 	})
	// }

	// var path = anime.path('.inner-follow');
		
	// anime({
	// 	targets: '.white-ball',
	// 	translateX: path('x'),
	// 	translateY: path('y'),
	// 	rotateZ: 45,
	// 	easing: 'linear',
	// 	duration: 2000,
	// 	loop: true
	// });

	return (
		<>
		<HeroSection>
			{/* <FloatingIcons className="icons"/> */}
			<div className="hero-left-container">
				{/* <div class="rectangle"></div> */}
				<h1 className="hero-title">
					ISAAC <br/>
					<span>GRAY.</span>
				</h1>
				<p className="hero-description">
					developer, designer & <br />
					creator.
				</p>
				
				<Button text="Reach Out!" blueText=">" light={true} className="reach-out-button"/>	
			</div>
			{/* <HeroOrbit /> */}
			<svg className="floating-icons" viewBox="0 0 827 708" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g opacity="0.4" className="icon1">
				<path class="layer" icon-speed="-4" d="M665.799 111.545C665.665 111.12 665.62 110.671 665.667 110.228C665.714 109.784 665.852 109.354 666.072 108.965C666.293 108.576 666.591 108.237 666.948 107.967C667.305 107.697 667.714 107.503 668.149 107.396C668.948 107.196 669.792 107.296 670.52 107.677C671.248 108.058 671.809 108.694 672.095 109.462C672.381 110.231 672.372 111.078 672.07 111.841C671.767 112.605 671.193 113.231 670.458 113.6L670.092 113.842C670.116 113.93 670.257 114.059 670.52 114.23C670.701 114.364 670.911 114.455 671.133 114.496C671.451 114.643 671.808 114.686 672.153 114.62C672.497 114.553 672.813 114.38 673.053 114.125C673.71 113.476 674.095 112.603 674.13 111.683C674.099 106.78 673.564 101.894 672.531 97.102C671.511 90.9619 670.706 85.265 670.116 80.0114C669.253 72.4866 668.725 66.4762 668.53 61.9802C668.195 55.7045 669.575 51.7917 672.672 50.2419C672.969 50.1083 673.278 50.0016 673.594 49.9232C674.561 49.6638 675.583 49.6972 676.53 50.019C677.477 50.3409 678.306 50.9366 678.91 51.7302C679.803 52.797 680.457 54.042 680.827 55.3819C680.961 55.8073 681.006 56.2559 680.959 56.6998C680.912 57.1436 680.774 57.5734 680.554 57.9623C680.333 58.3513 680.035 58.6912 679.678 58.961C679.32 59.2307 678.911 59.4246 678.476 59.5306C677.677 59.7312 676.833 59.6313 676.105 59.2502C675.377 58.869 674.816 58.2333 674.53 57.4649C674.245 56.6965 674.253 55.8493 674.556 55.0858C674.858 54.3222 675.432 53.6959 676.168 53.3269L676.535 53.0847C676.512 52.9962 676.368 52.8682 676.106 52.6972C675.925 52.5607 675.715 52.4693 675.492 52.4308C675.159 52.2874 674.788 52.2542 674.434 52.3362C674.08 52.4181 673.761 52.6108 673.525 52.886C672.825 53.5044 672.486 54.84 672.507 56.893C672.829 61.201 673.376 65.4889 674.146 69.7393C676.077 81.1549 677.403 92.665 678.12 104.222C678.53 107.462 678.123 110.755 676.937 113.803C676.128 115.265 674.812 116.384 673.236 116.949C672.446 117.194 671.607 117.24 670.796 117.081C669.985 116.922 669.226 116.564 668.59 116.04C667.193 114.885 666.213 113.307 665.799 111.545Z" fill="white" fill-opacity="0.25"/>
				
				<g class="layer" icon-speed="2">
					<path d="M762.75 204.167H738.25C735.995 204.167 734.167 205.995 734.167 208.25V232.75C734.167 235.005 735.995 236.833 738.25 236.833H762.75C765.005 236.833 766.833 235.005 766.833 232.75V208.25C766.833 205.995 765.005 204.167 762.75 204.167Z" stroke="white" stroke-opacity="0.25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M756.625 214.375H744.375V226.625H756.625V214.375Z" stroke="white" stroke-opacity="0.25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M744.375 198.042V204.167" stroke="white" stroke-opacity="0.25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M756.625 198.042V204.167" stroke="white" stroke-opacity="0.25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M744.375 236.833V242.958" stroke="white" stroke-opacity="0.25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M756.625 236.833V242.958" stroke="white" stroke-opacity="0.25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M766.833 214.375H772.958" stroke="white" stroke-opacity="0.25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M766.833 224.583H772.958" stroke="white" stroke-opacity="0.25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M728.042 214.375H734.167" stroke="white" stroke-opacity="0.25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M728.042 224.583H734.167" stroke="white" stroke-opacity="0.25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</g>

				<g class="layer" icon-speed="-2">
					<path d="M658.75 574.875C662.133 574.875 664.875 572.133 664.875 568.75C664.875 565.367 662.133 562.625 658.75 562.625C655.367 562.625 652.625 565.367 652.625 568.75C652.625 572.133 655.367 574.875 658.75 574.875Z" stroke="white" stroke-opacity="0.25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M634.25 550.375C637.633 550.375 640.375 547.633 640.375 544.25C640.375 540.867 637.633 538.125 634.25 538.125C630.867 538.125 628.125 540.867 628.125 544.25C628.125 547.633 630.867 550.375 634.25 550.375Z" stroke="white" stroke-opacity="0.25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M634.25 574.875V550.375C634.25 555.248 636.186 559.922 639.632 563.368C643.078 566.814 647.752 568.75 652.625 568.75" stroke="white" stroke-opacity="0.25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</g>

				<g  class="layer" icon-speed="3" clip-path="url(#clip0)">
					<path d="M792.816 675.646C792.032 674.695 791.657 673.471 791.775 672.243C791.893 671.016 792.493 669.885 793.444 669.101L812.813 653.124" stroke="white" stroke-opacity="0.25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M775.693 647.58L795.061 631.603L818.731 660.298L799.362 676.274C798.41 677.059 797.186 677.434 795.959 677.316C794.731 677.198 793.601 676.597 792.816 675.646L775.064 654.125C774.28 653.174 773.905 651.95 774.023 650.723C774.141 649.495 774.741 648.365 775.693 647.58V647.58Z" stroke="white" stroke-opacity="0.25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</g>

				<g class="layer" icon-speed="-4" clip-path="url(#clip1)">
					<path d="M565.141 251.262L562.2 289.997L577.928 282.47L585.87 303.554L588.812 264.819L573.083 272.346L565.141 251.262Z" stroke="white" stroke-opacity="0.25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</g>

				<g class="layer" icon-speed="1" clip-path="url(#clip2)">
					<path d="M775.471 474.219L777.268 473.579C779.175 472.899 781.273 473.005 783.101 473.873C784.93 474.741 786.339 476.3 787.018 478.206C787.697 480.113 787.591 482.211 786.723 484.04C785.855 485.868 784.297 487.277 782.39 487.956L780.593 488.596" stroke="white" stroke-opacity="0.25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M746.716 484.463L775.471 474.219L781.233 490.393C781.912 492.3 781.806 494.398 780.938 496.227C780.071 498.055 778.512 499.464 776.605 500.143L762.228 505.265C760.321 505.944 758.223 505.838 756.395 504.97C754.566 504.102 753.158 502.544 752.478 500.637L746.716 484.463Z" stroke="white" stroke-opacity="0.25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M749.423 469.321L751.344 474.713" stroke="white" stroke-opacity="0.25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M756.612 466.76L758.533 472.152" stroke="white" stroke-opacity="0.25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M763.801 464.2L765.721 469.591" stroke="white" stroke-opacity="0.25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</g>
				
				<circle class="layer" icon-speed="-1" cx="301" cy="653" r="53.5" stroke="white" stroke-opacity="0.25" stroke-width="3"/>
				
				<path class="layer" icon-speed="3" d="M38.1695 146.53L54.0873 55.2422L125.186 114.671L38.1695 146.53Z" stroke="white" stroke-opacity="0.25" stroke-width="3"/>
				
				<path class="layer" icon-speed="-3" d="M371.672 473.877L414.383 462.238L403.107 505.046L371.672 473.877Z" stroke="white" stroke-opacity="0.25" stroke-width="3"/>
				
				</g>
				<defs>
				<clipPath id="clip0">
				<rect width="44.6361" height="44.6361" fill="white" transform="translate(764 652.403) rotate(-39.5182)"/>
				</clipPath>
				<clipPath id="clip1">
				<rect width="46.4978" height="67.3416" fill="white" transform="translate(540 257.072) rotate(-25.5735)"/>
				</clipPath>
				<clipPath id="clip2">
				<rect width="45.7874" height="45.7874" fill="white" transform="translate(738 471.366) rotate(-19.6082)"/>
				</clipPath>
				</defs>
			</svg>
			<svg className="circle-orbit" viewBox="0 0 634 728" fill="none" xmlns="http://www.w3.org/2000/svg" >
				<path d="M377.485 227C432.914 242.814 418.307 532.071 418.307 532.071C387.491 611.942 312.171 706.826 257.422 447.396C188.986 123.108 444.12 634.762 596 447.396" stroke="#2661BF" stroke-opacity="0.25" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
				<path class="blue-squiggle" d="M273.646 285.873C308.699 308.708 386.234 327.99 415.959 222.438C445.684 116.886 533.867 181.672 584.377 211.305C604.042 219.229 611.808 248.229 485.56 300.833" stroke="#3C6AB3" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
				<path  d="M274.5 593C124.002 593 2 470.998 2 320.5C2 170.002 124.002 48 274.5 48" stroke="white" stroke-width="4"/>
				<path class="inner-follow" d="M274.5 543C153.273 543 55 444.279 55 322.5C55 200.721 153.273 102 274.5 102" stroke="white" stroke-width="4"/>
				<circle class="white-ball" cx="55" cy="327" r="19" fill="white"/>
				<path d="M275 47.9999C425.498 48 547.5 170.002 547.5 320.5C547.5 470.998 425.498 593 275 593" stroke="#26C1E7" stroke-width="4"/>
				<path d="M275 102C396.227 102 494.5 200.721 494.5 322.5C494.5 444.279 396.227 543 275 543" stroke="#292626" stroke-width="4"/>
				<path class="grey-line" d="M275 1.99996C451.179 1.99998 594 145.493 594 322.5C594 499.507 451.179 643 275 643" stroke="#434545" stroke-width="4"/>
				<circle class="blue-ball" cx="497" cy="552" r="17.5" fill="#26C1E7" stroke="white" stroke-width="3"/>
				<circle class="grey-ball" cx="435" cy="102" r="17.5" fill="#292626" stroke="white" stroke-width="3"/>
				<path d="M333.611 134.349C335.627 136.778 333.601 142.511 332.165 148.224C330.72 153.927 329.874 159.591 325.951 163.092C322.027 166.583 315.045 167.91 310.67 165.255C306.284 162.61 304.504 155.963 304.278 150.318C304.062 144.664 305.399 139.993 308.192 137.388C310.994 134.782 315.242 134.241 320.395 133.523C325.547 132.815 331.595 131.92 333.611 134.349Z" fill="#26C1E7"/>
				<path d="M482.261 649.385C483.612 655.958 489.773 660.322 488.922 662.283C488.048 664.249 480.148 663.803 475.272 669.64C470.373 675.481 468.508 687.591 466.592 687.538C464.686 687.471 462.733 675.264 454.784 670.491C446.834 665.719 432.891 668.406 430.129 665.942C427.371 663.503 435.804 655.898 442.956 652.284C450.117 648.655 456.017 648.988 459.642 645.315C463.291 641.638 464.679 633.965 469.016 629.951C473.328 625.941 480.574 625.58 482.463 629.798C484.352 634.017 480.895 642.801 482.261 649.385Z" fill="#26C1E7"/>
				<g clip-path="url(#clip0)">
				<path d="M599.711 121.735C601.879 127.051 606.654 132.91 605.828 136.782C605.002 140.653 598.601 142.511 592.691 145.892C586.806 149.299 581.386 154.255 576.818 153.609C572.25 152.964 568.508 146.692 567.501 141.092C566.52 135.465 568.275 130.458 569.437 126.819C570.65 123.18 571.243 120.935 572.405 119.102C573.592 117.296 575.295 115.953 577.851 111.024C580.38 106.12 583.735 97.6546 587.297 96.3641C590.833 95.0995 594.601 100.984 596.253 106.301C597.93 111.643 597.517 116.392 599.711 121.735Z" fill="#3C6AB3"/>
				</g>
				<g clip-path="url(#clip1)">
				<path d="M408.14 442.533C410.789 447.63 413.269 453.327 411.886 458.113C410.52 462.869 405.259 466.772 400.312 467.678C395.349 468.612 390.7 466.549 385.707 468.087C380.731 469.595 375.409 474.705 370.938 475.032C366.484 475.33 362.837 470.858 361.698 465.781C360.543 460.732 361.861 455.017 365.054 451.509C368.274 448.017 373.376 446.658 376.783 442.964C380.216 439.285 381.972 433.241 385.504 430.433C389.053 427.596 394.405 428.011 398.512 430.46C402.62 432.909 405.475 437.465 408.14 442.533Z" fill="#444141"/>
				</g>
				<defs>
				<clipPath id="clip0">
				<rect width="73" height="73" fill="white" transform="translate(581.619 72) rotate(45)"/>
				</clipPath>
				<clipPath id="clip1">
				<rect width="61.2993" height="67.1637" fill="white" transform="translate(375.582 409) rotate(30)"/>
				</clipPath>
				</defs>
			</svg>
		</HeroSection>
		</>
	)
}

export default Hero;