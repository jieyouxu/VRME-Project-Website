import React from "react";

import { CardBody, ListGroup, ListGroupItem } from "reactstrap";

import ContentCard from "../../../components/content-card/ContentCard";
import ContentCardHeader from "../../../components/content-card-header/ContentCardHeader";

import Report20191122 from "../../../resources/biweekly-reports/2019-11-22.pdf";
import Report20191206 from "../../../resources/biweekly-reports/2019-12-06.pdf";
import Report20200124 from "../../../resources/biweekly-reports/2020-01-24.pdf";
import Report20200207 from "../../../resources/biweekly-reports/2020-02-07.pdf";
import Report20200228 from "../../../resources/biweekly-reports/2020-02-28.pdf";

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
				<ListGroupItem className="theme-bg-base-d1">
					<a href={Report20200124} target="_blank" rel="noopener noreferrer">
						2020-01-24
					</a>
				</ListGroupItem>
				<ListGroupItem className="theme-bg-base-d1">
					<a href={Report20200207} target="_blank" rel="noopener noreferrer">
						2020-02-07
					</a>
				</ListGroupItem>
				<ListGroupItem className="theme-bg-base-d1">
					<a href={Report20200228} target="_blank" rel="noopener noreferrer">
						2020-02-28
					</a>
				</ListGroupItem>
			</ListGroup>
		</CardBody>
	</ContentCard>
);

export default BiweeklyReports;
