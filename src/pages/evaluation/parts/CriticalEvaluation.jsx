import React from "react";

import { CardBody, CardText } from "reactstrap";

import ContentCard from "../../../components/content-card/ContentCard";
import ContentCardHeader from "../../../components/content-card-header/ContentCardHeader";

const CriticalEvaluation = () => (
	<ContentCard>
		<ContentCardHeader title="Critical Evaluation" />
		<CardBody>
			<h3>User interface / User experience</h3>
			<CardText>
				The 3D meeting environment built using unity, combined with Oculus Go
				provides an immersive VR experience. The 360 degrees field of vision and
				UI interface has made the design to be interactive.
			</CardText>
			<h3>Functionality</h3>
			<CardText>
				The back end server is mostly functional. Users are able to initiate,
				join and leave a meeting session as they require, provided the protocols
				are strictly followed. Unity models have been side loaded onto the
				Oculus Go to for testing. Once inside the VR meeting environment, users
				have 360 field of vision. However, their actions are currently limited.
				The team is still building a user interface to be used when they are in
				the meeting environment, which will give greated control, with the
				option of choosing some of the core features such as making a gesture,
				or leave the current meeting session.
			</CardText>
			<h3>Stability</h3>
			<CardText>
				The side loaded application is stable at the moment. Once it has been
				loaded onto the Oculus Go, it can be run stand independently from any pc
				devices. The server is also functioning without apparent drawbacks when
				running separately. However, connection issues are expected at later
				stage when trying to establish a connection between the server and the
				side loaded application.
			</CardText>
			<h3>Compatibility</h3>
			<CardText>
				Currently, the Unity model must be side loaded onto Oculus Go via a
				desktop, using Android Debugging Bridge driver. Each users must have an
				Oculus Go headset in order to use this appllication. In the future, if
				the application is complete, it could be built as an Oculus app and be
				deployed to the Oculus store. As a result, the application is free to
				use on Oculus Go provided there is an internet connection that allows
				the user to download this app and be connected to a server. Independent
				from external pc and stand alone.
			</CardText>
			<h3>Maintainability</h3>
			<CardText>
				Once the Unity model is fully integrated with Oculus Go, the main focus
				would be transmissions between different users across the central
				server. Server must be reliable to ensure the meeting session
				information are handled correctly, a user&apos;s gestures is seen by
				every other attendees in the meeting. With strict protocols, this is
				easy to be maintained.
			</CardText>
			<h3>Project management</h3>
			<CardText>
				The team adopted agile methods throughout the development process.
				Sprints were created specific to the tasks that needs to be completed.
				They are then allocated to each team member by the team leader.
				Bi-weekly progress reports are generated and sent to clients to inform
				him of our issues faced and proposed solutions.
			</CardText>
		</CardBody>
	</ContentCard>
);

export default CriticalEvaluation;
