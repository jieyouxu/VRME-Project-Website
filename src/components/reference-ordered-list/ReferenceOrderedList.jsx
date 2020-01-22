import React from "react";
import PropTypes from "prop-types";

import "./ReferenceOrderedList.css";

const ReferenceOrderedList = ({ children }) => <ol>{children}</ol>;

ReferenceOrderedList.propTypes = {
	children: PropTypes.node
};

ReferenceOrderedList.defaultProps = {
	children: null
};

export default ReferenceOrderedList;
