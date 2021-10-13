import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
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
