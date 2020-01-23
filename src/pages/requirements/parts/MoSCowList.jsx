import React from "react";

import {
	CardBody,
	CardColumns,
	Card,
	CardText,
	CardHeader,
	ListGroup,
	ListGroupItem
} from "reactstrap";

import ContentCard from "../../../components/content-card/ContentCard";
import ContentCardHeader from "../../../components/content-card-header/ContentCardHeader";

const MoSCoWList = () => (
	<ContentCard>
		<ContentCardHeader title="MoSCoW List" className="theme-c-l-aqua" />
		<CardBody>
			<p>
				The <span className="theme-c-l-aqua">MoSCoW list</span> is derived for a
				<span className="theme-c-l-aqua"> Minimum Viable Product (MVP)</span>,
				corresponding to prototype 1. The
				<span className="theme-c-l-aqua"> presenter</span> hosts the meeting and
				<span className="theme-c-l-aqua"> attendees</span> listen to the
				presenter; they are referred to as the &quot;
				<span className="theme-c-l-aqua">participants</span>&quot; collectively.
			</p>
			<Card className="mb-4">
				<CardHeader className="theme-bd-d-aqua theme-bg-l-aqua theme-c-base-d0">
					<h3 className="h3 mb-0 text-center">Must Have Requirements</h3>
				</CardHeader>
				<CardBody className="theme-bd-d-aqua">
					<CardColumns>
						<Card className="theme-bg-base-d1 theme-bd-d-aqua">
							<CardBody>
								<CardText>
									The meeting presenter must be able to initiate a meeting
									session, attendees must be able to join the meeting session
									and all participants must be able to leave the session.
								</CardText>
							</CardBody>
						</Card>
						<Card className="theme-bg-base-d1 theme-bd-d-aqua">
							<CardBody>
								<CardText tag="div">
									A simple round table meeting must be emulated.
									<ul>
										<li>Must be able to host a small group meeting.</li>
										<li>The presenter shall stand in the center.</li>
										<li>
											Attendees are fixed to their seats and cannot move out of
											their seats.
										</li>
									</ul>
								</CardText>
							</CardBody>
						</Card>
						<Card className="theme-bg-base-d1 theme-bd-d-aqua">
							<CardBody>
								<CardText>
									Attendees must be able to see presentation slides.
								</CardText>
							</CardBody>
						</Card>
						<Card className="theme-bg-base-d1 theme-bd-d-aqua">
							<CardBody>
								<CardText tag="div">
									Participants must be represented by avatars.
									<ul>
										<li>
											The avatar helps participants to determine and distinguish
											each other&apos;s identities.
										</li>
									</ul>
								</CardText>
							</CardBody>
						</Card>
						<Card className="theme-bg-base-d1 theme-bd-d-aqua">
							<CardBody>
								<CardText>
									Each participant must be labelled by a name tag.
								</CardText>
							</CardBody>
						</Card>
						<Card className="theme-bg-base-d1 theme-bd-d-aqua">
							<CardBody>
								<CardText>
									Each participant shall have a speaking indication which helps
									other participants to determine the participant speaking.
								</CardText>
							</CardBody>
						</Card>
						<Card className="theme-bg-base-d1 theme-bd-d-aqua">
							<CardBody>
								<CardText tag="div">
									Real-time communication.
									<ul>
										<li>
											Each participant must be able to speak to each other.
										</li>
										<li>
											Each participant must be able to mute himself/herself.
										</li>
									</ul>
								</CardText>
							</CardBody>
						</Card>
						<Card className="theme-bg-base-d1 theme-bd-d-aqua">
							<CardBody>
								<CardText tag="div">
									Field of vision for attendees.
									<ul>
										<li>
											Must be able to see fellow attendees given the attendee
											moves his/her view around.
										</li>
										<li>
											Presenter must be able to see attendees around the table.
										</li>
									</ul>
								</CardText>
							</CardBody>
						</Card>
						<Card className="theme-bg-base-d1 theme-bd-d-aqua">
							<CardBody>
								<CardText tag="div">
									Basic user interface.
									<ul>
										<li>
											UI for meeting creation invitation, joining and leaving.
										</li>
										<li>UI for preset hand gestures.</li>
									</ul>
								</CardText>
							</CardBody>
						</Card>
						<Card className="theme-bg-base-d1 theme-bd-d-aqua">
							<CardBody>
								<CardText tag="div">
									Presentation slide support so presenter can show their slides.
									<ul>
										<li>Usable document in PDF format.</li>
									</ul>
								</CardText>
							</CardBody>
						</Card>
					</CardColumns>
				</CardBody>
			</Card>
			<Card className="mb-4">
				<CardHeader className="theme-bd-d-aqua theme-bg-d-aqua theme-c-base-d0">
					<h3 className="h3 mb-0 text-center">Should Have Requirements</h3>
				</CardHeader>
				<CardBody className="theme-bd-d-aqua">
					<ListGroup>
						<ListGroupItem className="theme-bg-base-d1">
							Protected meeting sessions.
							<ul>
								<li>
									Meeting creator should be able to password-protect a meeting
									session and attendees can only join if they provide the
									correct password.
								</li>
							</ul>
						</ListGroupItem>
						<ListGroupItem className="theme-bg-base-d1">
							External account management web interface.
							<ul>
								<li>
									Users should be able to create an account (possibly with
									third-party integrations) for email, Facebook, Twitter, etc.
								</li>
								<li>Users should be able to change preferred name.</li>
								<li>Users should be able to change and update their avatar.</li>
								<li>
									Users should be able to opt-in to{" "}
									<a href="#ref-5">IBM Watson Personality Insights API [5]</a>,
									and get assigned a color representing their personality.
								</li>
								<li>
									Users should be able to request and view their account data.
								</li>
								<li>
									Users should be able to delete their account (data protection
									law compliance).
								</li>
							</ul>
						</ListGroupItem>
						<ListGroupItem className="theme-bg-base-d1">
							Use of <a href="#ref-5">IBM Watson Personality Insights API</a>.
							<ul>
								<li>
									Users may choose to opt-in to grant access to their twitter
									accounts for extracting relevant keywords that best describe
									the user&apos;s personality, using the WPI application.
									Results will be analysed to help selecting a colour for the
									avatar, which best reflect the user&apos;s personality or
									characteristic.
								</li>
							</ul>
						</ListGroupItem>
						<ListGroupItem className="theme-bg-base-d1">
							Personalized avatars for users.
							<ul>
								<li>
									Rendering system that lets users customise the look of their
									avatars.
								</li>
							</ul>
						</ListGroupItem>
						<ListGroupItem className="theme-bg-base-d1">
							Attendee models shall move in a way that is as naturally and
							smooth as possible, with a selection of pre-designed gestures,
							such as:
							<ul>
								<li>Raising hand, catching the presenter&apos;s attention.</li>
								<li>Thumbs up, for showing agreement.</li>
								<li>Thumbs down for disagreement.</li>
								<li>Head shaking for confusion, lack of understanding.</li>
							</ul>
						</ListGroupItem>
						<ListGroupItem className="theme-bg-base-d1">
							Zoom in and out.
						</ListGroupItem>
						<ListGroupItem className="theme-bg-base-d1">
							Chat box supporting direct messages between meeting participants.
						</ListGroupItem>
						<ListGroupItem className="theme-bg-base-d1">
							Flexible presenter / attendee role switching.
							<ul>
								<li>Allow multiple presenters to take center stage.</li>
								<li>Able to switch roles.</li>
							</ul>
						</ListGroupItem>
						<ListGroupItem className="theme-bg-base-d1">
							Allow users to share files from laptops / desktops / smart phones.
							<ul>
								<li>Upload and download of files.</li>
							</ul>
						</ListGroupItem>
						<ListGroupItem className="theme-bg-base-d1">
							Avatars with free movement, capable of changing gestures by
							detecting the user&apos;s actual body movements.
							<ul>
								<li>
									If the user rest his arms on the table in real world, the
									avatar should be able to reflect this body position in the VR
									space.
								</li>
								<li>
									Avatars may be able to leave their sits and walk around the
									meeting space.
								</li>
							</ul>
						</ListGroupItem>
						<ListGroupItem className="theme-bg-base-d1">
							Flexible sitting arrangements around the meeting table.
							<ul>
								<li>
									Participants are given the ability to choose where they want
									to sit around the table, e.g. may choose to sit next to their
									colleagues from the same department for better communication,
									similar to choosing sits when booking for cinema tickets
									online.
								</li>
							</ul>
						</ListGroupItem>
					</ListGroup>
				</CardBody>
			</Card>
			<Card className="mb-4">
				<CardHeader className="theme-bd-d-aqua theme-bg-d-aqua theme-c-base-d0">
					<h3 className="h3 mb-0 text-center">Could Have Requirements</h3>
				</CardHeader>
				<CardBody className="theme-bd-d-aqua">
					<ListGroup>
						<ListGroupItem className="theme-bg-base-d1">
							Realistic rendering of humanoid models of meeting attendees and
							presenters.
						</ListGroupItem>
						<ListGroupItem className="theme-bg-base-d1">
							Selection of fictional background scenes.
						</ListGroupItem>
						<ListGroupItem className="theme-bg-base-d1">
							Integration of multiple platforms.
						</ListGroupItem>
						<ListGroupItem className="theme-bg-base-d1">
							Other forms of VR meeting environments, such as lecture hall,
							allowing larger number of users participating at the same time.
						</ListGroupItem>
						<ListGroupItem className="theme-bg-base-d1">
							Realistic immersive audio systems. The voice coming from other
							users may fade away as the distance between them increases and
							vice versa.
						</ListGroupItem>
						<ListGroupItem className="theme-bg-base-d1">
							The presenter&apos;s avatar could be dynamic. As the presenter is
							turning his/her head across the table, the participant that he
							faces will also be able to see the front of the presenter. This
							will let the users know when the presenter is looking at his
							direction, simulating an eye-contact experience when talking
							face-to-face.
						</ListGroupItem>
						<ListGroupItem className="theme-bg-base-d1">
							Interactive sketch boards for participants to take notes.
						</ListGroupItem>
					</ListGroup>
				</CardBody>
			</Card>
			<Card className="mb-4">
				<CardHeader className="theme-bd-l-red theme-bg-l-red theme-c-base-d0">
					<h3 className="h3 mb-0 text-center">Won&apos;t Have Requirements</h3>
				</CardHeader>
				<CardBody className="theme-bd-l-red">
					<ListGroup>
						<ListGroupItem className="theme-bg-base-d1">
							Complex user interface that is difficult to manage using only a
							handheld controller.
						</ListGroupItem>
						<ListGroupItem className="theme-bg-base-d1">
							Overly bright colour rendering of models in the VR space which may
							cause eye irritation to users.
						</ListGroupItem>
						<ListGroupItem className="theme-bg-base-d1">
							Inconsistency in design that increases difficulties for the users
							to get use to the program.
						</ListGroupItem>
						<ListGroupItem className="theme-bg-base-d1">
							Poor navigation and operations within the design.
						</ListGroupItem>
					</ListGroup>
				</CardBody>
			</Card>
		</CardBody>
	</ContentCard>
);

export default MoSCoWList;
