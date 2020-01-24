import React from "react";

import { CardBody } from "reactstrap";
import ContentCard from "../../../components/content-card/ContentCard";
import ContentCardHeader from "../../../components/content-card-header/ContentCardHeader";

const ProjectAbstract = () => (
	<ContentCard className="theme-bg-base-d0-soft">
		<ContentCardHeader title="Abstract" className="theme-c-l-red" />
		<CardBody className="text-center p-3">
			<blockquote>
				Users are dissatisfied with existing VR Meeting platforms due to lack of
				engagement, participation and unreliable cameras. We devise a VR meeting
				platform emulating a physical meeting environment supporting real-time
				rendering and communication, allowing participants to see the presenter
				and as each other. We target inexpensive VR equipment for inclusiveness.
			</blockquote>
		</CardBody>
	</ContentCard>
);

export default ProjectAbstract;
