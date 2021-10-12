import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import About from "./components/about.js";
import Navbar from "./components/Navbar/Navbar.js";
import Services from "./components/services.js";
import Contact from "./components/contact.js";
import animationgirl from "./assets/animatedgirl.svg";

function App() {
	return (
		<Router>
			<Navbar/>
				<div class="background">
					<div class = "container">
						<div class ="Home">
							<div class = "HomeContainer">
								<div class="container-row">
									<div class="text-column">
										<div class = "column-content">
											<h1 class = "title-home"> Welcome to Digital Embassy </h1>	
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
						</div>
						<About/>
						<Services/>
						<Contact/>
					</div>
				</div>
		</Router>	
	);
}

export default App;
