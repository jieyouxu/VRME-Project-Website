import React from "react";

import PageContentContainer from "../../components/page-content-container/PageContentContainer";
import PageTitle from "../../components/page-title/PageTitle";
import InnerContentContainer from "../../components/inner-content-container/InnerContentContainer";
import UISketches from "./parts/UISketches";

const HCI = () => (
	<PageContentContainer>
		<PageTitle title="Human-Computer Interaction (HCI)" />
		<InnerContentContainer>
			<UISketches />
		</InnerContentContainer>
	</PageContentContainer>
);

export default HCI;
