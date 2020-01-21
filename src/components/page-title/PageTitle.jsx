import React from "react";
import PropTypes from "prop-types";

import "./PageTitle.css";

const PageTitle = ({ title, className }) => (
	<>
		<div className="content-skip" />
		<h1 className={`${className || ""} text-center page-title-heading`}>
			{title}
		</h1>
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
