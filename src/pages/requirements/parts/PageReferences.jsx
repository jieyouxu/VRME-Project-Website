import React from 'react';

import { Card, CardBody } from 'reactstrap';

import ScrollableAnchor from 'react-scrollable-anchor';

import ContentCardHeader
	from '../../../components/content-card-header/ContentCardHeader';
import ReferenceListGroup
	from '../../../components/reference-list-group/ReferenceListGroup';
import ReferenceOrderedList
	from '../../../components/reference-ordered-list/ReferenceOrderedList';
import ReferenceListItem
	from '../../../components/reference-list-item/ReferenceListItem';

const PageReferences = () => (
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
);

export default PageReferences;
