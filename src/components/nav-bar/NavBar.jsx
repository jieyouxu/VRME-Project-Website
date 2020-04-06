import React, { useState } from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Collapse,
	Nav,
	NavItem
} from "reactstrap";
import { Link } from "react-router-dom";

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
				<NavbarBrand href="#" className="nav-bar-brand font-weight-lighter">
					<span className="theme-c-l-red">V</span>
					<span className="theme-c-l-orange">R</span>
					<span className="theme-c-l-yellow">M</span>
					<span className="theme-c-l-blue">E</span>
				</NavbarBrand>
				<NavbarToggler onClick={toggleNav} className="nav-bar-toggler" />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<Link to="/" className="nav-link">
								Home
							</Link>
						</NavItem>
						<NavItem>
							<Link to="/requirements" className="nav-link">
								Requirements
							</Link>
						</NavItem>
						<NavItem>
							<Link to="/research" className="nav-link">
								Research
							</Link>
						</NavItem>
						<NavItem>
							<Link to="/hci" className="nav-link">
								Human-Computer Interaction
							</Link>
						</NavItem>
						<NavItem>
							<Link to="/design" className="nav-link">
								Design
							</Link>
						</NavItem>
						<NavItem>
							<Link to="/testing" className="nav-link">
								Testing
							</Link>
						</NavItem>
						<NavItem>
							<Link to="/evaluation" className="nav-link">
								Evaluation
							</Link>
						</NavItem>
						<NavItem>
							<Link to="/appendix" className="nav-link">
								Appendix
							</Link>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
			<div className="nav-bar-skip" />
		</>
	);
};

export default NavBar;
