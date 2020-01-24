import React from "react";

import {
	CardBody,
	CardDeck,
	CardColumns,
	CardGroup,
	Card,
	CardHeader,
	CardTitle,
	CardText
} from "reactstrap";

import ContentCard from "../../../components/content-card/ContentCard";
import ContentCardHeader from "../../../components/content-card-header/ContentCardHeader";

const RelatedSolutionsResearch = () => (
	<ContentCard>
		<ContentCardHeader
			title="Related Solutions Research"
			className="theme-c-l-yellow"
		/>
		<CardBody>
			<h3 className="h3 text-center mb-2">Abstract</h3>
			<p>
				By conducting research on existing (and similar) products and solutions
				in the market will provide us with an insight of their strengths and
				weaknesses, to help us further develop our solution. We first enumerate
				three similar VR Meeting solutions: <a href="#ref-17">MeetinVR [17]</a>,{" "}
				<a href="#ref-18">Microsoft HoloLens 2 [18]</a> and{" "}
				<a href="#ref-19">Doghead Simulations&apos; rumii [19]</a>. We develop
				an analysis criteria to evaluate each of the similar solutions, and then
				give a summative analysis of the common weaknesses and strengths of the
				three similar solutions.
			</p>
			<h3 className="h3 text-center mb-2">
				Major Similar Solutions (Competition Analysis)
			</h3>
			<CardDeck className="mb-4">
				<Card className="theme-bd-l-yellow text-center">
					<CardHeader>MeetinVR</CardHeader>
					<CardBody>
						MeetinVR is a company that integrates software and hardware to
						provide an interactive VR space that allows companies to conduct
						powerful meetings. By using a combination of VR goggles and a pair
						of handset, it can provide each user with a unique avatar capable of
						performing realistic movements in the virtual environment. However,
						it is still under development and not yet open to commercial use{" "}
						<a href="#ref-17">[17]</a>.
					</CardBody>
				</Card>
				<Card className="theme-bd-l-yellow text-center">
					<CardHeader>Microsoft HoloLens 2</CardHeader>
					<CardBody>
						The new Microsoft HoloLens 2 uses a mixed reality headset that is
						semi-transparent (similar to wearing a pair of sunglasses), not as
						immersive compared to the conventional VR goggles. However, it is
						more powerful in many ways <a href="#ref-18">[18]</a>.
					</CardBody>
				</Card>
				<Card className="theme-bd-l-yellow text-center">
					<CardHeader>Doghead Simulations&apos; Rumii</CardHeader>
					<CardBody>
						This company offers a VR platform suitable for business conferencing
						and collaboration for training and education. It is capable of
						paring the user&apos;s laptop, mobile phones, desktop with the
						Oculus VR goggles, making document sharing even more convenient{" "}
						<a href="#ref-19">[19]</a>.
					</CardBody>
				</Card>
			</CardDeck>
			<h4 className="h4 mb-2">Analysis Criteria</h4>
			<CardColumns className="mb-4">
				<Card body className="text-center theme-bg-base-d0-soft">
					<CardTitle className="theme-c-d-yellow font-weight-bold">
						Outstanding feature(s)
					</CardTitle>
					<CardText>
						What makes this company&apos;s product unique and stand out from its
						competition?
					</CardText>
				</Card>
				<Card body className="text-center theme-bg-base-d0-soft">
					<CardTitle className="theme-c-d-yellow font-weight-bold">
						Hardware and Software requirements
					</CardTitle>
					<CardText>
						In order to use this company&apos;s product, which pieces of
						hardware are needed?
					</CardText>
				</Card>
				<Card body className="text-center theme-bg-base-d0-soft">
					<CardTitle className="theme-c-d-yellow font-weight-bold">
						Target users
					</CardTitle>
					<CardText>
						Who is(are) the company&apos;s main target user group(s)?
					</CardText>
				</Card>
				<Card body className="text-center theme-bg-base-d0-soft">
					<CardTitle className="theme-c-d-yellow font-weight-bold">
						Price
					</CardTitle>
					<CardText>How much does the product cost?</CardText>
				</Card>
				<Card body className="text-center theme-bg-base-d0-soft">
					<CardTitle className="theme-c-d-yellow font-weight-bold">
						Strengths and Weaknesses
					</CardTitle>
					<CardText>
						Can our VR Meeting Environment solution address existing flaws in
						these similar solutions, or further improve on their strengths?
					</CardText>
				</Card>
			</CardColumns>
			<h4 className="h4 mb-2">Competition Criteria</h4>
			<p>
				We analyze each major similar solution according to the analysis
				criteria previously specified.
			</p>
			<CardGroup className="mt-2 mb-4">
				<Card body className="theme-bd-l-yellow">
					<CardTitle className="h5 theme-c-l-yellow">MeetinVR</CardTitle>
					<CardText>
						<p>Strengths:</p>
						<ul>
							<li>Very interactive, 360 degrees rotation</li>
							<li>Allows the user to be focused in the VR space</li>
							<li>
								Has audio systems built in to the headset, allowing real time
								communication
							</li>
							<li>
								A variety of features such as sharing documents display images,
								videos, personalised avatar, etc.
							</li>
							<li>3D modelling inside their VR space</li>
							<li>Easy to learn how to use</li>
							<li>
								Name tags on each avatar so users know who they are talking to
							</li>
						</ul>
					</CardText>
				</Card>
				<Card body className="theme-bd-l-yellow">
					<CardTitle className="h5 theme-c-l-yellow">
						Microsoft HoloLens 2
					</CardTitle>
					<CardText>
						<p>Strengths:</p>
						<ul>
							<li>
								The device recognises the user when he/she puts on the headset
								and automatically signs them in, makes the user feel more
								personal, capable of facial recognition
							</li>
							<li>
								Doesn&apos;t rely on additional hand held devices to track
								movements, the headset has cameras that recognises the
								user&apos; hands and fingers to provide high accuracy movement
							</li>
							<li>
								Responsive to user&apos;s actions, such as clicking a virtual
								button
							</li>
							<li>Voice recognition that follows spoken commands</li>
							<li>
								Display searched results in a manageable way that allow users to
								modify and select what they want
							</li>
							<li>
								Additional features such as commanding an opened window to
								follow the user as they walk around
							</li>
							<li>Personalised avatars</li>
							<li>Realtime communication</li>
						</ul>
						<p>Weaknesses:</p>
						<ul>
							<li>Very expensive</li>
							<li>
								Target customers are large enterprises (not suitable for small
								businesses)
							</li>
							<li>
								Without the use of hand held hardware, certain actions such as
								grabbing may become less responsive
							</li>
							<li>
								Not bright enough, difficult for the user to see certain figures
								in the VR space
							</li>
						</ul>
					</CardText>
				</Card>
				<Card body className="theme-bd-l-yellow">
					<CardTitle className="h5 theme-c-l-yellow">
						Doghead Simulations&apos; rumii
					</CardTitle>
					<CardText>
						<p>Strengths:</p>
						<ul>
							<li>
								Personalized avatar with name tags so users are identifiable.
							</li>
							<li>Support 3D modelling in the virtual space.</li>
							<li>Provides a variety of meeting background.</li>
							<li>Supports real-time communication.</li>
							<li>Users may create public or private rooms.</li>
							<li>
								Can use screen share to display the contents of the user&apos;s
								laptop to a big screen inside the VR space.
							</li>
							<li>
								Users may establish geographical servers for better
								connectivity.
							</li>
						</ul>
						<p>Weaknesses:</p>
						<ul>
							<li>Very expensive</li>
							<li>
								Target customers are large enterprises (not suitable for small
								businesses)
							</li>
							<li>
								Without the use of hand held hardware, certain actions such as
								grabbing may become less responsive
							</li>
							<li>
								Not bright enough, difficult for the user to see certain figures
								in the VR space
							</li>
						</ul>
					</CardText>
				</Card>
			</CardGroup>
			<h5>Summary Analysis</h5>
			<p>
				In order to address the issues within online meetings, such as lack of
				engagements, difficulties in sharing documents and lack of efficiencies
				in giving out online presentations, the three existing competitors had
				turned their solutions to VR. The research showed that they all share
				some common features: name tags above the user&apos;s avatars,
				personalized avatar, 360 degrees of rotation, movements, document and
				presentation sharing, and real-time communication. Name tags and
				personalized avatar gives the users an identity in this virtual space
				that makes them feel personal and allow users to quickly identify each
				other.360 degrees of rotation and movements performed by the avatars are
				features designed to keep the participants engaged throughout their
				virtual meetings, as it creates an immersive experience. Functions such
				as documents and presentation distribution are vital to conduct an
				efficient meeting. Real-time communication with audio and sound systems
				is fundamental to ensure that the whole VR experience is engaging and
				immersive. Two out of the three solutions researched uses a combination
				of headset with VR lenses and handheld controllers to create the VR
				meeting experience. Microsoft HoloLens 2 on the contrary only uses a
				headset with built in cameras that capture the user&apos;s surroundings
				and preforms body language recognition.
			</p>
		</CardBody>
	</ContentCard>
);

export default RelatedSolutionsResearch;
