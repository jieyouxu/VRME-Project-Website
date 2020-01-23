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
			<CardDeck className="mb-2 text-center mb-3">
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
			<p>
				The project team also proposed the possibility of emulating the physical
				environment to be not limited to conventional meeting locations, but
				also possibly in arbitrary settings that is appropriate for the agenda
				of the meeting session. Additionally, attendees&apos; representations in
				the emulated meeting environment could come with clothing of varying
				levels of formality that could contribute towards a more effective
				meeting.
			</p>
			<p>
				With respect to possible hardware platforms, our client emphasised that
				it is important for the VR equipment to be accessible to the general
				public. As such, lower-cost VR equipment such as the
				<a href="#ref-2"> Oculus Go [2]</a> or
				<a href="#ref-3"> Google Daydream View [3]</a> would be ideal
				candidates.
			</p>
			<p>
				We also proposed initial prioritization of desired features with the
				client. We attempted to categorize the feature set into four categories
				with descending levels of priority: must have features, should have
				features and could have features, and features that shall not be
				included as won&apos;t have features. We classified the proposed
				features with a <a href="#ref-4">MoSCoW list [4]</a>, then we sent the
				MoSCoW list to the client so the client could confirm that the project
				team&apos;s prioritization aligns with that of the client.
			</p>
		</CardBody>
	</ContentCard>
);

export default RequirementsGathering;
