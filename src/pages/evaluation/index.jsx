import React from "react";

import PageContentContainer from "../../components/page-content-container/PageContentContainer";
import PageTitle from "../../components/page-title/PageTitle";
import InnerPageContentContainer from "../../components/inner-page-content-container/InnerPageContentContainer";

import Achievements from "./parts/Achievements";
import MoSCoWFeaturesProgress from "./parts/MoSCoWFeatures";
import IndividualContributions from "./parts/IndividualContributions";

const Evaluation = () => (
	<PageContentContainer>
		<PageTitle title="Evaluation" />
		<InnerPageContentContainer>
			<Achievements />
			<MoSCoWFeaturesProgress />
			<IndividualContributions />
		</InnerPageContentContainer>
	</PageContentContainer>
);

export default Evaluation;
