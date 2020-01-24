import React from "react";

import { CardBody } from "reactstrap";

import ContentCard from "../../../components/content-card/ContentCard";
import ContentCardHeader from "../../../components/content-card-header/ContentCardHeader";

const Achievements = () => (
	<ContentCard>
		<ContentCardHeader title="Achievements" className="theme-c-l-green" />
		<CardBody>
			<ol>
				<li>
					Built VR Meeting environment model using unity.
					<ul>
						<li>Round table environment implemented.</li>
					</ul>
				</li>
				<li>
					Presenter avatar:
					<ul>
						<li>Standing avatar located at the centre.</li>
						<li>
							Oculus Go camera oject attached to presenter, allowing for 360
							degrees field of vision.
						</li>
						<li>Single arm raising gesture created.</li>
					</ul>
				</li>
				<li>
					Attendee Avatar:
					<ul>
						<li>Fixed positions allocated evenly across the round table.</li>
						<li>
							Oculus Go camera object attached to each listener, allowing for
							360 degrees field of vision.
						</li>
						<li>Single arm raising gesture created.</li>
					</ul>
				</li>
				<li>
					Oculus Go device setup.
					<ul>
						<li>
							Oculus is classified as an Android application, unity model built
							as an Android Package (APK).
						</li>
						<li>
							Using Android Debugging Bridge (ADB), we can deploy our unity
							model to Oculus Go.
						</li>
						<li>
							Real time voice communication, resolved by using Oculus Go&apos;s
							inbuilt party application.
						</li>
					</ul>
				</li>
				<li>
					Back-end server for connection between attendees.
					<ul>
						<li>Signaling.</li>
						<li>
							Meeting session management.
							<ul>
								<li>
									Initiate meeting session, the initialiser automatically
									becomes the presenter.
								</li>
								<li>
									Other attendees may join the meeting, seating arrangement
									determined by the server.
								</li>
								<li>Presenter and Listeners may leave the meeting.</li>
							</ul>
						</li>
						<li>Uses TCP and HTTP protocols to handle user requests.</li>
					</ul>
				</li>
			</ol>
		</CardBody>
	</ContentCard>
);

export default Achievements;
