import React from "react"
import { link } from "gatsby"


const Hero = () => {
	return (
		<div className="hero">
			<div className="hero-container">
				<h1 className="hero-title">
					ISAAC <br/>
					<span>GRAY.</span>
				</h1>
				<p className="hero-description">
					developer, designer & <br />
					creator.
				</p>

				<svg class="hero-design" width="596" height="645" viewBox="0 0 596 645" fill="none">
					<path d="M274.5 593C124.002 593 2 470.998 2 320.5C2 170.002 124.002 48 274.5 48" stroke="white" stroke-width="4"/>
					<path d="M275 47.9999C425.498 48 547.5 170.002 547.5 320.5C547.5 470.998 425.498 593 275 593" stroke="#26C1E7" stroke-width="4"/>
					<path d="M274.5 543C153.273 543 55 444.279 55 322.5C55 200.721 153.273 102 274.5 102" stroke="white" stroke-width="4"/>
					<path d="M275 102C396.227 102 494.5 200.721 494.5 322.5C494.5 444.279 396.227 543 275 543" stroke="#292626" stroke-width="4"/>
					<path d="M275 1.99996C451.179 1.99998 594 145.493 594 322.5C594 499.507 451.179 643 275 643" stroke="#434545" stroke-width="4"/>
					<circle class="circle-animate" cx="497" cy="552" r="17.5" fill="#26C1E7" stroke="white" stroke-width="3"/>
					<circle class="circle-animate" cx="435" cy="102" r="17.5" fill="#292626" stroke="white" stroke-width="3"/>
					<circle class="circle-animate" cx="55" cy="327" r="19" fill="white"/>
				</svg>
			</div>
		</div>
	)
}


export default Hero;