import React from "react";

import { CardBody, CardText, CardDeck, CardHeader, Card } from "reactstrap";

import ContentCard from "../../../components/content-card/ContentCard";
import ContentCardHeader from "../../../components/content-card-header/ContentCardHeader";

const FuturePlans = () => (
	<ContentCard>
		<ContentCardHeader title="Future Plans" />
		<CardBody>
			<CardText>
				This project has been divided into three main sections: Oculus Go
				compatibility, Unity model building, Central Server.
			</CardText>
			<CardText>
				Below is a list of functions and features are yet to be implemented,
				corresponding to each sections. We also need to increase test coverage.
			</CardText>
			<CardDeck>
				<Card className="theme-bd-l-purple">
					<CardHeader className="h4 theme-c-l-purple text-center">
						Oculus Go
					</CardHeader>
					<CardBody>
						<ol>
							<li>
								Make use the of the Oculus platform voice chat API.
								<ul>
									<li>
										The API is called Oculus party, users may start a voice chat
										with multiple facebook friends in one session. This voice
										chat will continue to exist when the user is inside an
										Oculus app. We are going to use this API to meet the real
										time voice chat communication requirement and test its
										usability when the user is running our side loaded
										application.
									</li>
								</ul>
							</li>
							<li>
								Utilise the hand held tracking device connected to the Oculus
								Go.
								<ul>
									<li>
										The buttons on the device can employed so that users may use
										them to interact with the UI interface once inside the VR
										meeting environment.
									</li>
									<li>
										User should at least be able to point and select a feature
										on the UI.
									</li>
								</ul>
							</li>
						</ol>
					</CardBody>
				</Card>
				<Card className="theme-bd-l-purple">
					<CardHeader className="h4 theme-c-l-purple text-center">
						Unity
					</CardHeader>
					<CardBody>
						<ol>
							<li>
								Building a UI for the VR meeting environment.
								<ul>
									<li>
										The UI should be made compatible with the hand held device.
										The features should be selected using the device.
									</li>
									<li>
										Must include the following core features:
										<ul>
											<li>Join meeting</li>
											<li>Leave meeting</li>
											<li>Initiate meeting</li>
											<li>Making a gesture</li>
										</ul>
									</li>
								</ul>
							</li>
							<li>
								Add colour to the meeting environment models, for better user
								experience, more appealing to the eye.
							</li>
							<li>
								Make use of the Watson Personality Insights API.
								<ul>
									<li>
										This API should ask for user&apos;s permission to collect
										data from their facebook accounts.
									</li>
									<li>
										Based on the data, it runs an analysis that returns serveral
										prominent personalities that best describes the user.
									</li>
									<li>
										Each personality corresponds to a colour, which is used as
										the base colour of the avatar.
									</li>
								</ul>
							</li>
							<li>
								Ability for the presenter to upload a presentation file for
								every attendee to see.
							</li>
						</ol>
					</CardBody>
				</Card>
				<Card className="theme-bd-l-purple">
					<CardHeader className="h4 theme-c-l-purple text-center">
						Server
					</CardHeader>
					<CardBody>
						<ol>
							<li>
								Integration between the Unity application and central server.
								<ul>
									<li>
										PC based platform testing:
										<ul>
											<li>Connection between the server and one user.</li>
											<li>
												Test the ability to initiate a meeting, user initiating
												the meeting should automaticlly become the presenter.
											</li>
											<li>
												Multiple users connecting to the server to establish a
												fullly functioning meeting session.
											</li>
											<li>User able to join a meeting.</li>
											<li>User able to exit from a meeting.</li>
										</ul>
									</li>
									<li>
										Oculus Go based testing:
										<ul>
											<li>
												After the application has been deployed on to Oculus Go,
												users must still be able to establish a connection with
												the server, provided there is an internet connection.
											</li>
											<li>
												All operations must be done whilest inside the VR
												meeting environment, using Oculus Go and the hand held
												device.
											</li>
										</ul>
									</li>
								</ul>
							</li>
							<li>
								Add colour to the meeting environment models, for better user
								experience, more appealing to the eye.
							</li>
							<li>
								Make use of the Watson Personality Insights API.
								<ul>
									<li>
										This API should ask for user&apos;s permission to collect
										data from their facebook accounts.
									</li>
									<li>
										Based on the data, it runs an analysis that returns serveral
										prominent personalities that best describes the user.
									</li>
									<li>
										Each personality corresponds to a colour, which is used as
										the base colour of the avatar.
									</li>
								</ul>
							</li>
							<li>
								Ability for the presenter to upload a presentation file for
								every attendee to see.
							</li>
						</ol>
					</CardBody>
				</Card>
			</CardDeck>
		</CardBody>
	</ContentCard>
);

export default FuturePlans;
