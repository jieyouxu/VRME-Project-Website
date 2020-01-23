import React from "react";

import {
	Card,
	CardBody,
	CardDeck,
	CardText,
	ListGroup,
	ListGroupItem
} from "reactstrap";

import ContentCard from "../../../components/content-card/ContentCard";
import ContentCardHeader from "../../../components/content-card-header/ContentCardHeader";

const RequirementsGathering = () => (
	<ContentCard>
		<ContentCardHeader
			title="Requirements Gathering"
			className="theme-c-l-yellow"
		/>
		<CardBody>
			<p>
				To clarify on the requirements of the project, and the practicality and
				effectiveness of the proposed solution, we first met with the client
				<span className="theme-c-l-yellow"> face-to-face</span>, to:
			</p>
			<ListGroup className="mb-3">
				<ListGroupItem className="theme-bg-base-d1">
					1. Clarify the initial project brief that was given to us.
				</ListGroupItem>
				<ListGroupItem className="theme-bg-base-d1">
					2. Identify possible target VR platforms.
				</ListGroupItem>
				<ListGroupItem className="theme-bg-base-d1">
					3. Inquire about IBM APIs.
				</ListGroupItem>
			</ListGroup>
			<p>
				During the meeting, we came to the consensus that emulating the meeting
				setting via VR could help to mitigate the design problems by:
			</p>
			<CardDeck className="mb-2 text-center">
				<Card outline className="theme-bd-d-yellow">
					<CardBody className="theme-bg-base-d0-soft">
						<CardText>
							Increasing sense of participation from attendees by allowing each
							attendee to adjust his/her viewport, allowing attendees to see
							avatar representations of each other, and to be able to interact
							with each other via gestures.
						</CardText>
					</CardBody>
				</Card>
				<Card outline className="theme-bd-d-yellow">
					<CardBody className="theme-bg-base-d0-soft">
						<CardText>
							It may be possible for the utilization of more involved VR
							equipment that supports motion tracking to reflect physical
							movements of the user in the emulated setting.
						</CardText>
					</CardBody>
				</Card>
				<Card outline className="theme-bd-d-yellow">
					<CardBody className="theme-bg-base-d0-soft">
						<CardText>
							Attendees may be able to interact with the presenter via Q&A, and
							may be able to send direct messages to each other during the
							meeting session.
						</CardText>
					</CardBody>
				</Card>
				<Card outline className="theme-bd-d-yellow">
					<CardBody className="theme-bg-base-d0-soft">
						<CardText>
							Camera is not required as attendees are represented through their
							avatars.
						</CardText>
					</CardBody>
				</Card>
			</CardDeck>
		</CardBody>
	</ContentCard>
);

export default RequirementsGathering;
