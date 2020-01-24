import React from "react";

import PageContentContainer from "../../components/page-content-container/PageContentContainer";
import PageTitle from "../../components/page-title/PageTitle";
import InnerPageContentContainer from "../../components/inner-page-content-container/InnerPageContentContainer";

const Testing = () => (
	<PageContentContainer>
		<PageTitle title="Testing" />
		<InnerPageContentContainer />
	</PageContentContainer>
);

export default Testing;
