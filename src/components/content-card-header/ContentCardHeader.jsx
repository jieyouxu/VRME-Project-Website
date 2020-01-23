import React from "react";
import PropTypes from "prop-types";

import { CardHeader } from "reactstrap";

const ContentCardHeader = ({ title, className }) => (
	<CardHeader className={`font-weight-lighter text-center h2 ${className}`}>
		{title}
	</CardHeader>
);

ContentCardHeader.propTypes = {
	title: PropTypes.string.isRequired,
	className: PropTypes.string
};

ContentCardHeader.defaultProps = {
	className: ""
};

export default ContentCardHeader;
