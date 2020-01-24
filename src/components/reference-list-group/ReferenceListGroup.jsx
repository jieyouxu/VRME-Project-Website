import React from "react";
import PropTypes from "prop-types";

import { ListGroup, ListGroupItem } from "reactstrap";

const ReferenceListGroup = ({ children }) => (
	<ListGroup>
		{Array.isArray(children)
			? children.map(c => (
				<ListGroupItem className="theme-bg-base-d0-soft">{c}</ListGroupItem>
			  ))
			: children}
	</ListGroup>
);

ReferenceListGroup.propTypes = {
	children: PropTypes.node
};

ReferenceListGroup.defaultProps = {
	children: null
};

export default ReferenceListGroup;
