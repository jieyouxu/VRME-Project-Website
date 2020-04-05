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
					The server has unit tests to check intended behaviour.
				</CardBody>
			</ContentCard>
		</InnerPageContentContainer>
	</PageContentContainer>
);

export default Testing;
