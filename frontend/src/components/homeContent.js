import animationgirl from "./../assets/animatedgirl.svg";

const HomeContent = () => {
return (
	<div class = "HomeContainer">
		<div class="container-row">
			<div class="text-column">
				<div class = "column-content">
					<header class = "title-home"> Digital Embassy </header>	
						<h2 class = "subtext">
						We are the most efficient, web-site specialist organisation
						</h2>
						<h2 class = "subtext">
						We do the best to perform for our clients as we have had for years.  
						</h2>
				</div>
			</div>
			<div class = "animation-logo">
				<div class = "animationContainer">
					<img src = {animationgirl} class= "testing" alt="animation"/>
				</div>
			</div>
		</div>
	</div>
)
}

export default HomeContent;
