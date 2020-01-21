import React from "react";
import PropTypes from "prop-types";

import { Container } from "reactstrap";

import "./InnerContentContainer.css";

const InnerContentContainer = ({ children }) => (
	<Container className="inner-content-container">{children}</Container>
);

InnerContentContainer.propTypes = {
	children: PropTypes.node
};

InnerContentContainer.defaultProps = {
	children: null
};

export default InnerContentContainer;
