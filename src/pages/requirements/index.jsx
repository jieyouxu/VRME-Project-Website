import React from "react";

import ScrollableAnchor from "react-scrollable-anchor";

import { Card, CardBody } from "reactstrap";

import PageContentContainer from "../../components/page-content-container/PageContentContainer";
import InnerContentContainer from "../../components/inner-content-container/InnerContentContainer";
import PageTitle from "../../components/page-title/PageTitle";

import ContentCardHeader from "../../components/content-card-header/ContentCardHeader";
import ReferenceListGroup from "../../components/reference-list-group/ReferenceListGroup";
import ReferenceOrderedList from "../../components/reference-ordered-list/ReferenceOrderedList";
import ReferenceListItem from "../../components/reference-list-item/ReferenceListItem";

import ProjectBackground from "./parts/ProjectBackground";

const Requirements = () => (
	<PageContentContainer>
		<PageTitle title="Requirements" />
		<InnerContentContainer>
			<ProjectBackground />
			<Card>
				<ContentCardHeader title="References" />
				<CardBody>
					<ReferenceListGroup>
						<ReferenceOrderedList>
							<ReferenceListItem>
								<ScrollableAnchor id="ref-1">
									<a href="https://www.skype.com/en/">
										https://www.skype.com/en/
									</a>
								</ScrollableAnchor>
							</ReferenceListItem>
						</ReferenceOrderedList>
					</ReferenceListGroup>
				</CardBody>
			</Card>
		</InnerContentContainer>
	</PageContentContainer>
);

export default Requirements;
