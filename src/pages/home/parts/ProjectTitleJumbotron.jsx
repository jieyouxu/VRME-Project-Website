import React from "react";
import { Jumbotron } from "reactstrap";

import ProjectTitleInitials from "../../../components/project-title-initials/ProjectTitleInitials";
import ProjectTitleFull from "../../../components/project-title-full/ProjectTitleFull";

import "./ProjectTitleJumbotron.css";

const ProjectTitleJumbotron = () => (
	<Jumbotron
		fluid
		className="justify-content-center project-title-jumbotron bg-transparent color-gradient-bg"
	>
		<ProjectTitleInitials />
		<ProjectTitleFull />
	</Jumbotron>
);

export default ProjectTitleJumbotron;
