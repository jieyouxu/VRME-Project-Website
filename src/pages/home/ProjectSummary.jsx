import React from "react";

import { Container, Jumbotron, Row, Col, NavbarBrand } from 'reactstrap';

import "./ProjectSummary.css";

const ProjectSummary = (props) => (
	<Container className="project-summary-container">
		<Jumbotron fluid className="justify-content-center project-summary-jumbotron">
			<h1 className="font-weight-bold home-title-font text-center">
				<span className="theme-c-l-red">V</span>
				<span className="theme-c-l-orange">R</span>
				<span className="theme-c-l-yellow">M</span>
				<span className="theme-c-l-blue">E</span>
			</h1>
			<p className="text-center text-wrap project-name-p">
				<span className="theme-c-l-red font-weight-bold">V</span>
				<span>irtual</span>
				<span>&nbsp;</span>
				<span className="theme-c-l-orange font-weight-bold">R</span>
				<span>eality</span>
				<span>&nbsp;</span>
				<span className="theme-c-l-yellow font-weight-bold">M</span>
				<span>eeting</span>
				<span>&nbsp;</span>
				<span className="theme-c-l-blue font-weight-bold">E</span>
				<span>nvironment</span>
			</p>
			<hr data-theme="light" />
			<Row>
				<Col></Col>
				<Col></Col>
			</Row>
		</Jumbotron>
	</Container>
);

export default ProjectSummary;
