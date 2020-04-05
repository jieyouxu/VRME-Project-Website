import React from "react";

import { CardBody } from "reactstrap";

import ContentCard from "../../../components/content-card/ContentCard";
import ContentCardHeader from "../../../components/content-card-header/ContentCardHeader";

import BackendDeploymentManual from "./backend-deployment-manual/BackendDeploymentManual";
import OculusGoDeploymentManual from "./frontend-oculus-go-deployment-manual/OculusGoDeploymentManual";

const DeploymentManual = () => (
	<ContentCard>
		<ContentCardHeader title="Deployment Manual" />
		<CardBody>
			<BackendDeploymentManual />
			<div className="mb-4" />
			<OculusGoDeploymentManual />
			<div className="mb-4" />
		</CardBody>
	</ContentCard>
);

export default DeploymentManual;
