import React from "react";
import PropTypes from "prop-types";

import { Container } from "reactstrap";

import "./PageTitle.css";

const PageTitle = ({ title, className }) => (
	<>
		<div className="content-skip" />
		<Container className="page-title-container">
			<h1 className={`${className ?? ""} text-center page-title-heading`}>
				{title}
			</h1>
		</Container>
	</>
);

PageTitle.propTypes = {
	title: PropTypes.string.isRequired,
	className: PropTypes.string
};

PageTitle.defaultProps = {
	className: "h1"
};

export default PageTitle;
