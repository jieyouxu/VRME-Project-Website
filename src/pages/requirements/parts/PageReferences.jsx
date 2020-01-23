import React from "react";

import { Card, CardBody } from "reactstrap";

import ScrollableAnchor from "react-scrollable-anchor";

import ContentCardHeader from "../../../components/content-card-header/ContentCardHeader";
import ReferenceListGroup from "../../../components/reference-list-group/ReferenceListGroup";
import ReferenceOrderedList from "../../../components/reference-ordered-list/ReferenceOrderedList";
import ReferenceListItem from "../../../components/reference-list-item/ReferenceListItem";

const PageReferences = () => (
	<Card>
		<ContentCardHeader title="References" />
		<CardBody>
			<ReferenceListGroup>
				<ReferenceOrderedList>
					<ReferenceListItem>
						<ScrollableAnchor id="ref-1">
							<a href="https://www.skype.com/en/">https://www.skype.com/en/</a>
						</ScrollableAnchor>
					</ReferenceListItem>
					<ReferenceListItem>
						<ScrollableAnchor id="ref-2">
							<a href="https://www.oculus.com/go/?locale=en_GB">
								https://www.oculus.com/go/?locale=en_GB
							</a>
						</ScrollableAnchor>
					</ReferenceListItem>
					<ReferenceListItem>
						<ScrollableAnchor id="ref-3">
							<a href="https://arvr.google.com/daydream/">
								https://arvr.google.com/daydream/
							</a>
						</ScrollableAnchor>
					</ReferenceListItem>
					<ReferenceListItem>
						<ScrollableAnchor id="ref-4">
							<a href="https://www.amazon.com/Case-Method-Fast-Track-Approach-Engineering/dp/020162432X">
								Clegg, Dai; Barker, Richard (1994).
								<em>Case Method Fast-Track: A RAD Approach</em>. Addison-Wesley.
								ISBN 978-0-201-62432-8.
							</a>
						</ScrollableAnchor>
					</ReferenceListItem>
					<ReferenceListItem>
						<ScrollableAnchor id="ref-5">
							<a href="https://www.ibm.com/watson/services/personality-insights/">
								https://www.ibm.com/watson/services/personality-insights/
							</a>
						</ScrollableAnchor>
					</ReferenceListItem>
				</ReferenceOrderedList>
			</ReferenceListGroup>
		</CardBody>
	</Card>
);

export default PageReferences;
