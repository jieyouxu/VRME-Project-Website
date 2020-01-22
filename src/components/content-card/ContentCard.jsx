import React from "react";
import PropTypes from "prop-types";

import { Card } from "reactstrap";

import "./ContentCard.css";

const ContentCard = ({ children, className }) => (
	<Card className={`content-card ${className ?? ""}`}>{children}</Card>
);

ContentCard.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string
};

ContentCard.defaultProps = {
	children: null,
	className: ""
};

export default ContentCard;
