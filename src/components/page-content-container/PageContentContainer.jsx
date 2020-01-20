import React from "react";

import { Container } from "reactstrap";

import "./PageContentContainer.css";

const PageContentContainer = (props) => (
	<Container
		fluid
		className="page-content-container theme-c-base-l0"
	>
		{props.children}
	</Container>
);

export default PageContentContainer;
