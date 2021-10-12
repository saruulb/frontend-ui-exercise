import React from "react";
import {navb, NavContainer, NavLeft, NavRight, NavRightItems, NavLink} from "./NavElements.js";
import logo from "./../../assets/logo.svg";



const Navbar = () => {
	return(
	<navb>
		<NavContainer>
			<NavLeft>
				<logo>
					<img src= {logo} alt="logo"/>
				</logo>
			</NavLeft>
			<NavRight>
				<NavRightItems>
					<NavLink to="#home" ActiveStyle>
						Home
					</NavLink>
					<NavLink to="#about" ActiveStyle>
						About
					</NavLink>
					<NavLink to="#Contact" ActiveStyle>
						Contact 
					</NavLink>
					<NavLink to="services" ActiveStyle>
						Services
					</NavLink>
					<NavLink to="Blog" ActiveStyle>
						Blog
					</NavLink>
				</NavRightItems>
			</NavRight>
		</NavContainer>

	</navb>
	)
}


export default Navbar
