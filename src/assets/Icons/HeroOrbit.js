import React from "react";
import theme from '../styles/theme'
import styled from 'styled-components';

const StyledHeroOrbit = styled.div`
	.container {
		width: 100%;
		height: 100%;
	
		margin: 0;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;

		.responsive {
			/* ensure 1:1 aspect ratio, tweak 50 to make SVG larger */
			width: 70vmin;
			height: 70vmin;  
			
			/* set some maximum size (width and height need to match
			* aspect ratio, 1:1 in this case */
			max-width: 200px;
			max-height: 200px;
		}
	}
`;

const HeroOrbit = () => {
	return (
		<StyledHeroOrbit>
				{/* <svg class="hero-design" width="596" height="645" viewBox="0 0 596 645" fill="none">
					<path d="M274.5 593C124.002 593 2 470.998 2 320.5C2 170.002 124.002 48 274.5 48" stroke={`${theme.colours.white}`} stroke-width="4"/>
					<path d="M275 47.9999C425.498 48 547.5 170.002 547.5 320.5C547.5 470.998 425.498 593 275 593" stroke={`${theme.colours.lightBlue}`} stroke-width="4"/>
					<path d="M274.5 543C153.273 543 55 444.279 55 322.5C55 200.721 153.273 102 274.5 102" stroke={`${theme.colours.white}`} stroke-width="4"/>
					<path d="M275 102C396.227 102 494.5 200.721 494.5 322.5C494.5 444.279 396.227 543 275 543" stroke={`${theme.colours.darkGrey}`} stroke-width="4"/>
					<path d="M275 1.99996C451.179 1.99998 594 145.493 594 322.5C594 499.507 451.179 643 275 643" stroke={`${theme.colours.grey}`} stroke-width="4"/>
					<circle class="circle-animate" cx="497" cy="552" r="17.5" fill={`${theme.colours.lightBlue}`} stroke={`${theme.colours.white}`} stroke-width="3"/>
					<circle class="circle-animate" cx="435" cy="102" r="17.5" fill={`${theme.colours.darkGrey}`} stroke={`${theme.colours.white}`} stroke-width="3"/>
					<circle class="circle-animate" cx="55" cy="327" r="19" fill={`${theme.colours.white}`}/>
				</svg> */}
				<div className="container">
				<svg className="responsive" viewBox="0 0 634 728" fill="none" xmlns="http://www.w3.org/2000/svg" >
						<path d="M377.485 227C432.914 242.814 418.307 532.071 418.307 532.071C387.491 611.942 312.171 706.826 257.422 447.396C188.986 123.108 444.12 634.762 596 447.396" stroke="#2661BF" stroke-opacity="0.25" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M273.646 285.873C308.699 308.708 386.234 327.99 415.959 222.438C445.684 116.886 533.867 181.672 584.377 211.305C604.042 219.229 611.808 248.229 485.56 300.833" stroke="#3C6AB3" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M274.5 593C124.002 593 2 470.998 2 320.5C2 170.002 124.002 48 274.5 48" stroke="white" stroke-width="4"/>
						<path d="M274.5 543C153.273 543 55 444.279 55 322.5C55 200.721 153.273 102 274.5 102" stroke="white" stroke-width="4"/>
						<circle cx="55" cy="327" r="19" fill="white"/>
						<path d="M275 47.9999C425.498 48 547.5 170.002 547.5 320.5C547.5 470.998 425.498 593 275 593" stroke="#26C1E7" stroke-width="4"/>
						<path d="M275 102C396.227 102 494.5 200.721 494.5 322.5C494.5 444.279 396.227 543 275 543" stroke="#292626" stroke-width="4"/>
						<path d="M275 1.99996C451.179 1.99998 594 145.493 594 322.5C594 499.507 451.179 643 275 643" stroke="#434545" stroke-width="4"/>
						<circle cx="497" cy="552" r="17.5" fill="#26C1E7" stroke="white" stroke-width="3"/>
						<circle cx="435" cy="102" r="17.5" fill="#292626" stroke="white" stroke-width="3"/>
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
				</div>
		</StyledHeroOrbit>
	)
};

export default HeroOrbit;