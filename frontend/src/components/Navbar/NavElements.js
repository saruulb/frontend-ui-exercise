import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const navb = styled.div`
	display: block;
`
export const NavContainer = styled.div`
	display: flex;
	flex-direction:row;
	background-color:#0c1e34;
	padding: 20px 120px;
	border-bottom: 2px solid gray;
	bottom-border-width:2px;
`

export const NavLeft = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	flex-grow:2;
`

export const NavRight = styled.div`
	display: block;
	flex-grow:1;	
	margin: auto;
	margin-bottom: auto;

`
export const logo = styled.div`
	width: 200px;
	height: 50px;
`
export const NavRightItems = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`

export const NavLink = styled(Link)`
	padding-top: 20px;
	padding-bottom: 20px;
	text-decoration: none;
	font-weight: 600;
	text-decoration: none;
	font-size: 18px;
	color: white;
	margin-top: auto;
	margin-bottom: auto;
	padding-left: 30px;
	padding-right: 30px;
	border-width: 2px;
	border-color: transparent;
	border-style: solid;
	mix-blend-mode: screen;
	border-radius: 4px;
	:hover{
		transition: all 0.2s ease-in-out;
		border: 2px solid white;
	}
`

