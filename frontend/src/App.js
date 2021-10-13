import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from "./components/about.js";
import Navbar from "./components/Navbar/Navbar.js";
import HomeContent from "./components/homeContent.js";
import Services from "./components/services.js";
import Contact from "./components/contact.js";
import Footer from "./components/footer.js";

function App() {
	return (
		<Router>
			<Navbar/>
			<Switch>	
				<Route path="/Home" component={HomeContent}/>
				<Route path="#About" component={About}/>
				<Route path="#Contact" component={Contact}/>
				<Route path="#Services" component={Services}/>
				<Route path="#Blog" />
			</Switch>
			<div class="background">
				<div class = "container">
					<div class ="Home">
						<HomeContent/>
					</div>
					<About/>
					<Services/>
					<Contact/>
					<Footer />
				</div>
			</div>
		</Router>	
	);
}

export default App;
