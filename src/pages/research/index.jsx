import React from "react";

import PageContentContainer from "../../components/page-content-container/PageContentContainer";
import PageTitle from "../../components/page-title/PageTitle";
import InnerContentContainer from "../../components/inner-content-container/InnerContentContainer";
import TargetPlatformResearch from "./parts/TargetPlatformResearch";
import PageReferences from "./parts/PageReferences";
import AdditionalOculusGoResearch from "./parts/AdditionalOculusGoResearch";
import RelatedSolutionsResearch from "./parts/RelatedSolutionsResearch";
import GraphicsRenderingEngineResearch from "./parts/GraphicsEngineResearch";

const Research = () => (
	<PageContentContainer>
		<PageTitle title="Research" />
		<InnerContentContainer>
			<TargetPlatformResearch />
			<AdditionalOculusGoResearch />
			<RelatedSolutionsResearch />
			<GraphicsRenderingEngineResearch />
			<PageReferences />
		</InnerContentContainer>
	</PageContentContainer>
);

export default Research;
