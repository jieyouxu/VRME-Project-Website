import React from "react";

import { CardBody, ListGroup, ListGroupItem } from "reactstrap";

import ContentCard from "../../../components/content-card/ContentCard";
import ContentCardHeader from "../../../components/content-card-header/ContentCardHeader";

import Report20191122 from "../../../resources/biweekly-reports/2019-11-22.pdf";
import Report20191206 from "../../../resources/biweekly-reports/2019-12-06.pdf";

const BiweeklyReports = () => (
	<ContentCard>
		<ContentCardHeader title="Biweekly Reports" />
		<CardBody>
			<ListGroup>
				<ListGroupItem className="theme-bg-base-d1">
					<a href={Report20191122} target="_blank" rel="noopener noreferrer">
						2019-11-22
					</a>
				</ListGroupItem>
				<ListGroupItem className="theme-bg-base-d1">
					<a href={Report20191206} target="_blank" rel="noopener noreferrer">
						2019-12-06
					</a>
				</ListGroupItem>
			</ListGroup>
		</CardBody>
	</ContentCard>
);

export default BiweeklyReports;
