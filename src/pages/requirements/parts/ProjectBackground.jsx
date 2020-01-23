import React from "react";

import {
	Card,
	CardBody,
	CardDeck,
	CardHeader,
	CardImg,
	CardText
} from "reactstrap";

import { IconContext } from "react-icons";
import {
	AiOutlineTeam,
	AiOutlineHome,
	AiOutlineInteraction,
	AiOutlineCamera
} from "react-icons/ai";
import ContentCard from "../../../components/content-card/ContentCard";
import ContentCardHeader from "../../../components/content-card-header/ContentCardHeader";

const ProjectBackground = () => (
	<ContentCard>
		<ContentCardHeader title="Project Background" className="theme-c-l-blue" />
		<CardBody>
			<p>Our client laid out the initial problem of:</p>
			<blockquote className="blockquote">
				Employees need to attend meetings either by travelling, or to attend
				remote meeting sessions. Travelling can take a significant amount of
				time and thus hinder productivity. Remote meetings are possible, but
				they have their own set of problems.
			</blockquote>
			<p>
				Current remote meeting solutions, such as
				<a href="#ref-1"> Skype [1]</a>, face the problems including but not
				limited to:
			</p>
			<CardDeck className="mb-2 text-center">
				<Card outline className="theme-bd-d-red">
					<CardHeader className="font-weight-bold theme-c-d-red">
						Problem
					</CardHeader>
					<CardBody className="theme-bg-base-d0-soft">
						<CardImg top tag="div">
							<IconContext.Provider value={{ size: "5rem" }}>
								<AiOutlineHome />
							</IconContext.Provider>
						</CardImg>
						<CardText>
							Lack of sense of belonging, compromising team-building
						</CardText>
					</CardBody>
				</Card>
				<Card outline className="theme-bd-d-red">
					<CardHeader className="font-weight-bold theme-c-d-red">
						Problem
					</CardHeader>
					<CardBody className="theme-bg-base-d0-soft">
						<CardImg top tag="div">
							<IconContext.Provider value={{ size: "5rem" }}>
								<AiOutlineTeam />
							</IconContext.Provider>
						</CardImg>
						<CardText>Lack of feeling of participation from attendees</CardText>
					</CardBody>
				</Card>
				<Card outline className="theme-bd-d-red">
					<CardHeader className="font-weight-bold theme-c-d-red">
						Problem
					</CardHeader>
					<CardBody className="theme-bg-base-d0-soft">
						<CardImg top tag="div">
							<IconContext.Provider value={{ size: "5rem" }}>
								<AiOutlineInteraction />
							</IconContext.Provider>
						</CardImg>
						<CardText>
							Remote meeting may become dull if attendees are not able to
							interact or participate
						</CardText>
					</CardBody>
				</Card>
				<Card outline className="theme-bd-d-red">
					<CardHeader className="font-weight-bold theme-c-d-red">
						Problem
					</CardHeader>
					<CardBody className="theme-bg-base-d0-soft">
						<CardImg top tag="div">
							<IconContext.Provider value={{ size: "5rem" }}>
								<AiOutlineCamera />
							</IconContext.Provider>
						</CardImg>
						<CardText>Unreliable cameras and connection</CardText>
					</CardBody>
				</Card>
			</CardDeck>
			<p>
				Our client pointed out that large organizations wish to be able to host
				meetings, presentations and discussions that reflect the presence of a
				community or a team – to better reflect an organization&apos;s culture.
			</p>
		</CardBody>
	</ContentCard>
);

export default ProjectBackground;
