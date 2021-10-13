import React from "react";
import {NavContainer, NavLeft, NavRight, NavRightItems} from "./NavElements.js";
import logo from "./../../assets/logo.svg";



const Navbar = () => {
	return(
		<NavContainer>
			<NavLeft>
				<logo>
					<img src= {logo} alt="logo"/>
				</logo>
			</NavLeft>
			<NavRight>
				<NavRightItems>
					<a href="" class = "sectionlink">
						Home
					</a>
					<a href="#About" class = "sectionlink">
						About
					</a>
					<a href="#Contact" class = "sectionlink">
						Contact 
					</a>
					<a href="#Services" class = "sectionlink">
						Services
					</a>
					<a href= "" class = "sectionlink">
						Blog
					</a>
				</NavRightItems>
			</NavRight>
		</NavContainer>
	)
}


export default Navbar
