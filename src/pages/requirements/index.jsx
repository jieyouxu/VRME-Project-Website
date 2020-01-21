import React from "react";

import { Card, CardHeader, CardBody } from "reactstrap";

import PageContentContainer from "../../components/page-content-container/PageContentContainer";
import InnerContentContainer from "../../components/inner-content-container/InnerContentContainer";
import PageTitle from "../../components/page-title/PageTitle";

const Requirements = () => (
	<PageContentContainer>
		<PageTitle title="Requirements" />
		<InnerContentContainer>
			<Card>
				<CardHeader>Project Background</CardHeader>
				<CardBody>
					<p>Our client laid out the initial problem of:</p>
					<blockquote className="blockquote">
						Employees need to attend meetings either by travelling, or to attend
						remote meeting sessions. Travelling can take a significant amount of
						time and thus hinder productivity. Remote meetings are possible, but
						they have their own set of problems
					</blockquote>
				</CardBody>
			</Card>
		</InnerContentContainer>
	</PageContentContainer>
);

export default Requirements;
