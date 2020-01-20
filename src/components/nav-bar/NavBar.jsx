import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarToggler } from "reactstrap";

import "./NavBar.css";

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleNav = () => setIsOpen(!isOpen);

	return (
		<>
			<Navbar
				dark
				expand="md"
				className="fixed-top nav-bar theme-bg-base-d0-hard theme-c-base-l0"
			>
				<NavbarBrand href="/" className="nav-bar-brand">
					<span className="theme-c-l-red">V</span>
					<span className="theme-c-l-orange">R</span>
					<span className="theme-c-l-yellow">M</span>
					<span className="theme-c-l-blue">E</span>
				</NavbarBrand>
				<NavbarToggler onClick={toggleNav} className="nav-bar-toggler" />
			</Navbar>
			<div className="nav-bar-skip" />
		</>
	);
};

export default NavBar;
