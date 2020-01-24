import React from "react";

import { CardBody, Card } from "reactstrap";
import ContentCard from "../../../components/content-card/ContentCard";
import ContentCardHeader from "../../../components/content-card-header/ContentCardHeader";

const ProjectPartner = () => (
	<ContentCard className="theme-bg-base-d0-soft">
		<ContentCardHeader title="Project Partner" className="theme-c-l-blue" />
		<CardBody className="text-center">
			<Card body className="theme-bd-l-blue">
				John McNamara (IBM)
			</Card>
		</CardBody>
	</ContentCard>
);

export default ProjectPartner;
