import React from "react";

import { Row, Col } from "reactstrap";

import PageContentContainer from "../../components/page-content-container/PageContentContainer";
import InnerPageContentContainer from "../../components/inner-page-content-container/InnerPageContentContainer";

import ProjectTitleJumbotron from "./parts/ProjectTitleJumbotron";
import ProjectAbstract from "./parts/ProjectAbstract";
import KeyFeatures from "./parts/KeyFeatures";
import ProjectPartner from "./parts/ProjectPartner";
import ProjectTeam from "./parts/ProjectTeam";
import ProjectVideo from "./parts/ProjectVideo";

import "./index.css";

const Home = () => {
	return (
		<PageContentContainer>
			<ProjectTitleJumbotron />
			<InnerPageContentContainer>
				<ProjectAbstract />
				<KeyFeatures />
				<ProjectVideo />
				<Row>
					<Col>
						<ProjectPartner />
					</Col>
					<Col>
						<ProjectTeam />
					</Col>
				</Row>
			</InnerPageContentContainer>
		</PageContentContainer>
	);
};

export default Home;
