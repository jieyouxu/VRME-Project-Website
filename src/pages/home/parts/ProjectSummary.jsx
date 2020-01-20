import React from "react";

import {
	Container,
	Row,
	Col,
	Card,
	CardBody,
	CardText,
	ListGroup,
	ListGroupItem
} from "reactstrap";

import ProjectTitleJumbotron from "./ProjectTitleJumobotron";
import TodoAlert from "../../../components/todo-alert/TodoAlert";

import "./ProjectSummary.css";

const ProjectSummary = () => (
	<Container fluid className="project-summary-container">
		<ProjectTitleJumbotron />
		<Container fluid className="theme-bg-base-d0 p-3">
			<div className="content-skip" />
			<Container>
				<Row className="mb-3">
					<Col>
						<Card className="theme-bg-base-d0-soft">
							<div className="card-header text-center theme-c-l-red">
								<h5 className="mb-0">
									<b>Abstract</b>
								</h5>
							</div>
							<CardBody className="text-center p-3">
								<blockquote>
									Users are dissatisfied with existing VR Meeting platforms due
									to lack of engagement, participation and unreliable cameras.
									We devise a VR meeting platform emulating a physical meeting
									environment supporting real-time rendering and communication,
									allowing participants to see the presenter and as each other.
									We target inexpensive VR equipment for inclusiveness.
								</blockquote>
							</CardBody>
						</Card>
					</Col>
				</Row>
				<Row className="mb-3">
					<Col>
						<Card className="theme-bg-base-d0-soft">
							<div className="card-header text-center theme-c-l-green">
								<h5 className="mb-0">
									<b>Key Features</b>
								</h5>
							</div>
							<CardBody className="p-3 text-justify">
								<CardText>We propose a solution with the features:</CardText>
								{/* TODO */}
								<TodoAlert />
							</CardBody>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col>
						<Card className="theme-bg-base-d0-soft">
							<div className="card-header text-center theme-c-l-blue">
								<h5 className="mb-0">
									<b>Project Partner</b>
								</h5>
							</div>
							<CardBody className="text-center">
								<ListGroup>
									<ListGroupItem className="theme-bg-base-d1">
										John McNamara (IBM)
									</ListGroupItem>
								</ListGroup>
							</CardBody>
						</Card>
					</Col>
					<Col>
						<Card className="theme-bg-base-d0-soft">
							<div className="card-header text-center theme-c-l-yellow">
								<h5 className="mb-0">
									<b>Project Team Members</b>
								</h5>
							</div>
							<CardBody className="text-center">
								<ListGroup>
									<ListGroupItem className="theme-bg-base-d1">
										Jieyou Xu (Joe)
									</ListGroupItem>
									<ListGroupItem className="theme-bg-base-d1">
										Wenxin Wang
									</ListGroupItem>
									<ListGroupItem className="theme-bg-base-d1">
										Yingming Luo
									</ListGroupItem>
								</ListGroup>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</Container>
	</Container>
);

export default ProjectSummary;
