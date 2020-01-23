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
import { IoIosCreate, IoIosPerson, IoIosHand, IoIosBook } from "react-icons/io";
import ContentCard from "../../../components/content-card/ContentCard";
import ContentCardHeader from "../../../components/content-card-header/ContentCardHeader";

const ProposedSolution = () => (
	<ContentCard>
		<ContentCardHeader title="Proposed Solution" className="theme-c-l-green" />
		<CardBody>
			<p>
				To address the issues, the client proposed the direction of utilizing
				Virtual Reality technology to
				<span className="theme-c-l-green"> emulate a meeting environment</span>.
				The emulated meeting environment would allow a meeting&apos;s
				participants (or team members) to:
			</p>
			<CardDeck className="mb-2 text-center">
				<Card outline className="theme-bd-d-green">
					<CardHeader className="font-weight-bold theme-c-d-green">
						Feature
					</CardHeader>
					<CardBody className="theme-bg-base-d0-soft">
						<CardImg top tag="div">
							<IconContext.Provider value={{ size: "5rem" }}>
								<IoIosCreate />
							</IconContext.Provider>
						</CardImg>
						<CardText>Create, join and leave a meeting session</CardText>
					</CardBody>
				</Card>
				<Card outline className="theme-bd-d-green">
					<CardHeader className="font-weight-bold theme-c-d-green">
						Feature
					</CardHeader>
					<CardBody className="theme-bg-base-d0-soft">
						<CardImg top tag="div">
							<IconContext.Provider value={{ size: "5rem" }}>
								<IoIosPerson />
							</IconContext.Provider>
						</CardImg>
						<CardText>See each other&apos;s avatars</CardText>
					</CardBody>
				</Card>
				<Card outline className="theme-bd-d-green">
					<CardHeader className="font-weight-bold theme-c-d-green">
						Feature
					</CardHeader>
					<CardBody className="theme-bg-base-d0-soft">
						<CardImg top tag="div">
							<IconContext.Provider value={{ size: "5rem" }}>
								<IoIosHand />
							</IconContext.Provider>
						</CardImg>
						<CardText>Be able to perform gestures</CardText>
					</CardBody>
				</Card>
				<Card outline className="theme-bd-d-green">
					<CardHeader className="font-weight-bold theme-c-d-green">
						Feature
					</CardHeader>
					<CardBody className="theme-bg-base-d0-soft">
						<CardImg top tag="div">
							<IconContext.Provider value={{ size: "5rem" }}>
								<IoIosBook />
							</IconContext.Provider>
						</CardImg>
						<CardText>
							Watch the presentation be delivered in an emulated environment
							(such as an auditorium or lecture hall)
						</CardText>
					</CardBody>
				</Card>
			</CardDeck>
		</CardBody>
	</ContentCard>
);

export default ProposedSolution;
