import React from "react";
import { Jumbotron } from "reactstrap";

import ProjectTitleInitials from "../../components/project-title-initials/ProjectTitleInitials";
import ProjectTitleFull from "../../components/project-title-full/ProjectTitleFull";

const ProjectTitleJumbotron = () => (
	<Jumbotron fluid className="justify-content-center project-summary-jumbotron">
		<ProjectTitleInitials /> <ProjectTitleFull />
	</Jumbotron>
);

export default ProjectTitleJumbotron;
