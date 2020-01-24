import React from "react";

import {
	CardBody,
	CardDeck,
	Card,
	CardTitle,
	CardText,
	CardImg
} from "reactstrap";

import ContentCard from "../../../components/content-card/ContentCard";
import ContentCardHeader from "../../../components/content-card-header/ContentCardHeader";

import OculusGoImg from "./vr-gears/oculus-go.jpg";
import GoogleCardboardImg from "./vr-gears/google-cardboard.jpg";

const TargetPlatformResearch = () => (
	<ContentCard>
		<ContentCardHeader
			title="Target Platform Research"
			className="theme-c-l-blue"
		/>
		<CardBody>
			<h3>Introduction</h3>
			<p>
				There are two main classifications of VR gear for which we can develop
				as target platforms for:
			</p>
			<CardDeck>
				<Card className="theme-bd-l-blue">
					<CardImg top src={OculusGoImg} />
					<CardBody>
						<CardTitle className="h4 theme-c-l-blue">
							Standalone VR gear
						</CardTitle>
						<CardText>
							<a href="#ref-1">Oculus Go [1]</a>
						</CardText>
					</CardBody>
				</Card>
				<Card className="theme-bd-l-blue">
					<CardImg top src={GoogleCardboardImg} />
					<CardBody>
						<CardTitle className="h4 theme-c-l-blue">
							PC-based or Android/iOS-based (Connected) VR gear
						</CardTitle>
						<CardText>
							<a href="#ref-2">Google Cardboard [2]</a>
						</CardText>
					</CardBody>
				</Card>
			</CardDeck>
		</CardBody>
	</ContentCard>
);

export default TargetPlatformResearch;
