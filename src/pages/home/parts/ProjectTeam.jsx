import React from "react";

import { Card, CardBody, CardText } from "reactstrap";

import { AiOutlineMail } from "react-icons/ai";

import ContentCardHeader from "../../../components/content-card-header/ContentCardHeader";
import ContentCard from "../../../components/content-card/ContentCard";

const ProjectTeam = () => (
	<ContentCard className="theme-bg-base-d0-soft">
		<ContentCardHeader
			title="Project Team Members"
			className="theme-c-l-yellow"
		/>
		<CardBody className="text-center">
			<Card body className="theme-bd-l-yellow mb-2">
				<CardText>
					Jieyou Xu (Joe) <span className="theme-c-d-gray">&lt;</span>
					<span className="theme-c-l-yellow">Team Lead</span>
					<span className="theme-c-d-gray">&gt;</span>
				</CardText>
				<CardText>
					<AiOutlineMail />{" "}
					<a href="mailto:jieyou.xu.18@ucl.ac.uk">jieyou.xu.18@ucl.ac.uk</a>
				</CardText>
				<CardText>
					Roles: Researcher, Back-end Developer, Website Editor
				</CardText>
			</Card>
			<Card body className="theme-bd-l-yellow mb-2">
				<CardText>
					Yingming Luo <span className="theme-c-d-gray">&lt;</span>
					<span className="theme-c-l-yellow">Team Member</span>
					<span className="theme-c-d-gray">&gt;</span>
				</CardText>
				<CardText>
					<AiOutlineMail />{" "}
					<a href="mailto:yingming.luo.18@ucl.ac.uk">
						yingming.luo.18@ucl.ac.uk
					</a>
				</CardText>
				<CardText>Roles: Tester, Front-end Developer</CardText>
			</Card>
			<Card body className="theme-bd-l-yellow">
				<CardText>
					Wenxin Wang <span className="theme-c-d-gray">&lt;</span>
					<span className="theme-c-l-yellow">Team Member</span>
					<span className="theme-c-d-gray">&gt;</span>
				</CardText>
				<CardText>
					<AiOutlineMail />{" "}
					<a href="mailto:wenxin.wang.18@ucl.ac.uk">wenxin.wang.18@ucl.ac.uk</a>
				</CardText>
				<CardText>
					Roles: UI Designer, Front-end Developer, Report Editor
				</CardText>
			</Card>
		</CardBody>
	</ContentCard>
);

export default ProjectTeam;
