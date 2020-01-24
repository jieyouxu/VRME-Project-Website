import React from "react";

import { CardBody, Row, Col } from "reactstrap";

import ReactPlayer from "react-player";

import ContentCard from "../../../components/content-card/ContentCard";
import ContentCardHeader from "../../../components/content-card-header/ContentCardHeader";

const videoUrl = `https://liveuclac-my.sharepoint.com/:v:/r/personal/zcabluo_ucl_ac_uk/Documents/Project_Video_Team11.mp4?csf=1&e=cFFdhZ`;

const ProjectVideo = () => (
	<ContentCard>
		<ContentCardHeader title="Project Video" className="theme-c-l-aqua" />
		<CardBody>
			<Row>
				<Col>
					<ReactPlayer
						url={videoUrl}
						controls
						className="embed-responsive embed-responsive-16by9"
						width="100%"
						height="100%"
					/>
				</Col>
			</Row>
		</CardBody>
	</ContentCard>
);

export default ProjectVideo;
