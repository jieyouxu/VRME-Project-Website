import React from "react";
import PropTypes from "prop-types";

import { Container } from "reactstrap";

import "./PageTitle.css";

const PageTitle = ({ title, className }) => (
	<>
		<div className="content-skip" />
		<Container className="page-title-container">
			<h1 className={`text-center ${className}`}>
				<span className="page-title-heading page-title-heading-span h1">
					<u>{title}</u>
				</span>
			</h1>
		</Container>
	</>
);

PageTitle.propTypes = {
	title: PropTypes.string.isRequired,
	className: PropTypes.string
};

PageTitle.defaultProps = {
	className: ""
};

export default PageTitle;
