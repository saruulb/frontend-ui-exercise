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
					<NavLink to="" ActiveStyle>
						Home
					</NavLink>
					<NavLink to="" ActiveStyle>
						About
					</NavLink>
					<NavLink to="" ActiveStyle>
						Contact 
					</NavLink>
					<NavLink to="" ActiveStyle>
						Services
					</NavLink>
					<NavLink to="" ActiveStyle>
						Social Media
					</NavLink>
				</NavRightItems>
			</NavRight>
		</NavContainer>

	</navb>
	)
}


export default Navbar
