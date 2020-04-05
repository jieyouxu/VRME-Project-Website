import React from "react";

import { CardBody } from "reactstrap";

import ContentCard from "../../../components/content-card/ContentCard";
import ContentCardHeader from "../../../components/content-card-header/ContentCardHeader";

import SystemsArchitectureDiagram from "./systems-architecture/arch.png";

const SystemsArchitecture = () => (
	<ContentCard>
		<ContentCardHeader
			title="Systems Architecture"
			className="theme-c-l-aqua"
		/>
		<CardBody>
			<img
				src={SystemsArchitectureDiagram}
				alt="systems architecture"
				className="img-fluid mb-4"
			/>
			<p>
				We adopt a star architecture, with multiple clients communicating with a
				central server via <code>HTTP</code> + <code>TCP</code>. Each client is
				associated with an Oculus Go headset and its Unity front-end instance.
				The central server is responsible for account management, authentication
				and handling meeting sessions.
			</p>
		</CardBody>
	</ContentCard>
);

export default SystemsArchitecture;
