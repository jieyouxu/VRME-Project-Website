import React from "react";
import PropTypes from "prop-types";

import { Container } from "reactstrap";

import "./PageContentContainer.css";

const PageContentContainer = ({ children }) => (
	<Container fluid className="page-content-container theme-c-base-l0">
		{children}
	</Container>
);

PageContentContainer.propTypes = {
	children: PropTypes.node
};

PageContentContainer.defaultProps = {
	children: null
};

export default PageContentContainer;
