import design from "../assets/design.svg";
import webdev from "../assets/webdev.svg";
import market from "../assets/marketing.svg";

const Services = () => {
		return (
			<section id="Services">
				<h1 class="textservices">Our Services</h1>
				<div class="servicesContainer">
					<div class= "WebDesignContainer">
						<img src = {design} class="designclass" alt="class"/>
						<h2> Design </h2>	
					</div>
					<div class= "WebDevelopmentContainer">
						<img src = {webdev} class="webdevclass" alt="qwbdev"/>
						<h2> Web Dev.</h2>	
					</div>
					<div class= "DigitalStrategyContainer">
						<img src = {market} class="digitalstrategy" alt = "digital"/>
						<h2>Marketing</h2>
					</div>
				</div>
			</section>
			);
};

export default Services;
