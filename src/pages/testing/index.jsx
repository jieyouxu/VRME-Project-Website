import React from "react";

import { CardBody } from "reactstrap";

import PageContentContainer from "../../components/page-content-container/PageContentContainer";
import PageTitle from "../../components/page-title/PageTitle";
import InnerPageContentContainer from "../../components/inner-page-content-container/InnerPageContentContainer";
import ContentCard from "../../components/content-card/ContentCard";
import ContentCardHeader from "../../components/content-card-header/ContentCardHeader";

const Testing = () => (
	<PageContentContainer>
		<PageTitle title="Testing" />
		<InnerPageContentContainer>
			<ContentCard>
				<ContentCardHeader title="Unit Testing" />
				<CardBody>
					The server currently utilizes{" "}
					<a href="https://github.com/avajs/ava">ava</a> for running the unit
					tests.
				</CardBody>
			</ContentCard>
			<ContentCard>
				<ContentCardHeader title="Integration Testing" />
				<CardBody>
					We still need to investigate how to perform integration testing for
					Unity deployed to Oculus Go, as constrained by the deployment process.
				</CardBody>
			</ContentCard>
		</InnerPageContentContainer>
	</PageContentContainer>
);

export default Testing;
