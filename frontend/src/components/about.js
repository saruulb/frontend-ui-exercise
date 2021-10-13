import React from "react";
import aboutlogo from "../assets/about.svg";

const About = () => {
	return (
		<section id = "About">
			<div class = "aboutText">
				<h1>About Us </h1>
				<p>We’re an Australian team of award-winning and highly achieving web design and digital marketing professionals helping organisations to scale up their businesses online.</p>

		<p>Our mission is to support your organisation as a trusted digital partner and to unlock the potential of your website and other digital initiatives so you can expand into new markets, provide better customer experiences and thrive in a digital landscape.</p>
				
			</div>
			<img src= {aboutlogo} class="aboutlogo" alt="aboutlogo"/>
		</section>
	)	
	}

export default About
