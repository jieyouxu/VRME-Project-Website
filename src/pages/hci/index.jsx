import React from "react";

import PageContentContainer from "../../components/page-content-container/PageContentContainer";
import PageTitle from "../../components/page-title/PageTitle";
import InnerPageContentContainer from "../../components/inner-page-content-container/InnerPageContentContainer";
import UISketches from "./parts/UISketches";

const HCI = () => (
	<PageContentContainer>
		<PageTitle title="Human-Computer Interaction (HCI)" />
		<InnerPageContentContainer>
			<UISketches />
		</InnerPageContentContainer>
	</PageContentContainer>
);

export default HCI;
