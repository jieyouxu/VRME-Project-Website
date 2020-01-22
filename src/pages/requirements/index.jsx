import React from "react";

import { Card, CardBody } from "reactstrap";

import PageContentContainer from "../../components/page-content-container/PageContentContainer";
import InnerContentContainer from "../../components/inner-content-container/InnerContentContainer";
import PageTitle from "../../components/page-title/PageTitle";
import ContentCard from "../../components/content-card/ContentCard";
import ContentCardHeader from "../../components/content-card-header/ContentCardHeader";
import ReferenceListGroup from "../../components/reference-list-group/ReferenceListGroup";
import ReferenceOrderedList from "../../components/reference-ordered-list/ReferenceOrderedList";
import ReferenceListItem from "../../components/reference-list-item/ReferenceListItem";

const Requirements = () => (
	<PageContentContainer>
		<PageTitle title="Requirements" />
		<InnerContentContainer>
			<ContentCard>
				<ContentCardHeader
					title="Project Background"
					className="theme-c-l-blue"
				/>
				<CardBody>
					<p>Our client laid out the initial problem of:</p>
					<blockquote className="blockquote">
						Employees need to attend meetings either by travelling, or to attend
						remote meeting sessions. Travelling can take a significant amount of
						time and thus hinder productivity. Remote meetings are possible, but
						they have their own set of problems.
					</blockquote>
					<p>
						Current remote meeting solutions, such as Skype [1], face the
						problems including but not limited to:
					</p>
				</CardBody>
			</ContentCard>
			<Card>
				<ContentCardHeader title="References" />
				<CardBody>
					<ReferenceListGroup>
						<ReferenceOrderedList>
							<ReferenceListItem>https://www.skype.com/en/</ReferenceListItem>
						</ReferenceOrderedList>
					</ReferenceListGroup>
				</CardBody>
			</Card>
		</InnerContentContainer>
	</PageContentContainer>
);

export default Requirements;
