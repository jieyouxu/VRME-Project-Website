import React from "react";

import { CardBody } from "reactstrap";

import ContentCard from "../../../components/content-card/ContentCard";
import ContentCardHeader from "../../../components/content-card-header/ContentCardHeader";

import BackendDeploymentManual from "./backend-deployment-manual/BackendDeploymentManual";

const DeploymentManual = () => (
	<ContentCard>
		<ContentCardHeader title="Deployment Manual" />
		<CardBody>
			<BackendDeploymentManual />
		</CardBody>
	</ContentCard>
);

export default DeploymentManual;
