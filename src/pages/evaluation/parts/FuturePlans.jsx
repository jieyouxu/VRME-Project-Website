import React from "react";

import { CardBody, CardText, CardHeader, Card } from "reactstrap";

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
			<Card className="theme-bd-l-purple  mb-4">
				<CardHeader className="h4 theme-c-l-purple text-center">
					Unity
				</CardHeader>
				<CardBody>
					<ol>
						<li>
							Make use of the Watson Personality Insights API.
							<ul>
								<li>
									This API should ask for user&apos;s permission to collect data
									from their facebook accounts.
								</li>
								<li>
									Based on the data, it runs an analysis that returns serveral
									prominent personalities that best describes the user.
								</li>
								<li>
									Each personality corresponds to a colour, which is used as the
									base colour of the avatar.
								</li>
							</ul>
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
									Oculus Go based testing:
									<ul>
										<li>
											After the application has been deployed on to Oculus Go,
											users must still be able to establish a connection with
											the server, provided there is an internet connection.
										</li>
										<li>
											All operations must be done whilst inside the VR meeting
											environment, using Oculus Go and the hand held device.
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<li>
							Make use of the Watson Personality Insights API.
							<ul>
								<li>
									This API should ask for user&apos;s permission to collect data
									from their facebook accounts.
								</li>
								<li>
									Based on the data, it runs an analysis that returns serveral
									prominent personalities that best describes the user.
								</li>
								<li>
									Each personality corresponds to a colour, which is used as the
									base colour of the avatar.
								</li>
							</ul>
						</li>
					</ol>
				</CardBody>
			</Card>
		</CardBody>
	</ContentCard>
);

export default FuturePlans;
