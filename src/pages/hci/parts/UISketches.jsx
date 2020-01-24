import React from "react";

import { CardBody, CardDeck, Card, CardImg, CardTitle } from "reactstrap";

import ContentCard from "../../../components/content-card/ContentCard";
import ContentCardHeader from "../../../components/content-card-header/ContentCardHeader";

import AttendeeViewImg from "./ui-sketches/attendee-view.png";
import PresenterViewImg from "./ui-sketches/presenter-view.png";

const UISketches = () => (
	<ContentCard>
		<ContentCardHeader
			title="User Interface Sketches"
			className="theme-c-l-yellow"
		/>
		<CardBody>
			<CardDeck>
				<Card>
					<CardImg top src={AttendeeViewImg} />
					<CardTitle className="h3 theme-c-l-yellow text-center">
						Attendee&apos;s View
					</CardTitle>
				</Card>
				<Card>
					<CardImg top src={PresenterViewImg} />
					<CardTitle className="h3 theme-c-l-yellow text-center">
						Presenter&apos;s View
					</CardTitle>
				</Card>
			</CardDeck>
		</CardBody>
	</ContentCard>
);

export default UISketches;
