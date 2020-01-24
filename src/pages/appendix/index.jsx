import React from "react";

import PageContentContainer from "../../components/page-content-container/PageContentContainer";
import PageTitle from "../../components/page-title/PageTitle";
import InnerPageContentContainer from "../../components/inner-page-content-container/InnerPageContentContainer";

import BiweeklyReports from "./parts/BiweeklyReports";

const Appendix = () => (
	<PageContentContainer>
		<PageTitle title="Appendix" />
		<InnerPageContentContainer>
			<BiweeklyReports />
		</InnerPageContentContainer>
	</PageContentContainer>
);

export default Appendix;
