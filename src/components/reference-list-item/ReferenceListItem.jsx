import React from "react";
import PropTypes from "prop-types";

const ReferenceListItem = ({ children }) => <li>{children}</li>;

ReferenceListItem.propTypes = {
	children: PropTypes.node
};

ReferenceListItem.defaultProps = {
	children: null
};

export default ReferenceListItem;
