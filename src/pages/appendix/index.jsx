import React from "react";

import PageContentContainer from "../../components/page-content-container/PageContentContainer";
import PageTitle from "../../components/page-title/PageTitle";
import InnerContentContainer from "../../components/inner-content-container/InnerContentContainer";

import BiweeklyReports from "./parts/BiweeklyReports";

const Appendix = () => (
	<PageContentContainer>
		<PageTitle title="Appendix" />
		<InnerContentContainer>
			<BiweeklyReports />
		</InnerContentContainer>
	</PageContentContainer>
);

export default Appendix;
