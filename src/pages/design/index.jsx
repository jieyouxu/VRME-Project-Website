import React from "react";

import PageContentContainer from "../../components/page-content-container/PageContentContainer";
import PageTitle from "../../components/page-title/PageTitle";
import InnerPageContentContainer from "../../components/inner-page-content-container/InnerPageContentContainer";
import SystemsArchitecture from "./parts/SystemsArchitecture";
import BackendDesign from "./parts/BackendDesign";

const Prototype = () => (
	<PageContentContainer>
		<PageTitle title="Design" />
		<InnerPageContentContainer>
			<SystemsArchitecture />
			<BackendDesign />
		</InnerPageContentContainer>
	</PageContentContainer>
);

export default Prototype;
