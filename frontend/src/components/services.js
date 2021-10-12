import design from "../assets/design.svg";
import webdev from "../assets/webdev.svg";
import market from "../assets/marketing.svg";

const Services = () => {
		return (
			<div class="GreaterContainer">
				<h1 class="textservices">Our Services</h1>
				<div class="servicesContainer">
					<div class= "WebDesignContainer">
						<img src = {design} class="designclass"/>
						<h2> Design </h2>	
					</div>
					<div class= "WebDevelopmentContainer">
						<img src = {webdev} class="webdevclass"/>
						<h2> Web Dev.</h2>	
					</div>
					<div class= "DigitalStrategyContainer">
						<img src = {market} class="digitalstrategy"/>
						<h2>Marketing</h2>
					</div>
				</div>
			</div>
			);
};

export default Services;
