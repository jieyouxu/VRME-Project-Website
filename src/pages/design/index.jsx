import React from "react";

import PageContentContainer from "../../components/page-content-container/PageContentContainer";
import PageTitle from "../../components/page-title/PageTitle";
import InnerContentContainer from "../../components/inner-content-container/InnerContentContainer";
import SystemsArchitecture from "./parts/SystemsArchitecture";

const Prototype = () => (
	<PageContentContainer>
		<PageTitle title="Design" />
		<InnerContentContainer>
			<SystemsArchitecture />
		</InnerContentContainer>
	</PageContentContainer>
);

export default Prototype;
