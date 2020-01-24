import React from "react";
import PropTypes from "prop-types";

import { Container } from "reactstrap";

import "./InnerContentContainer.css";

const InnerPageContentContainer = ({ children }) => (
	<Container className="inner-content-container">{children}</Container>
);

InnerPageContentContainer.propTypes = {
	children: PropTypes.node
};

InnerPageContentContainer.defaultProps = {
	children: null
};

export default InnerPageContentContainer;
