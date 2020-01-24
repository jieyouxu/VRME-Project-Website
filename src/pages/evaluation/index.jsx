import React from "react";

import PageContentContainer from "../../components/page-content-container/PageContentContainer";
import PageTitle from "../../components/page-title/PageTitle";
import InnerPageContentContainer from "../../components/inner-page-content-container/InnerPageContentContainer";

import Achievements from "./parts/Achievements";
import MoSCoWFeaturesProgress from "./parts/MoSCoWFeatures";
import IndividualContributions from "./parts/IndividualContributions";
import FuturePlans from "./parts/FuturePlans";
import CriticalEvaluation from "./parts/CriticalEvaluation";

const Evaluation = () => (
	<PageContentContainer>
		<PageTitle title="Evaluation" />
		<InnerPageContentContainer>
			<Achievements />
			<MoSCoWFeaturesProgress />
			<IndividualContributions />
			<CriticalEvaluation />
			<FuturePlans />
		</InnerPageContentContainer>
	</PageContentContainer>
);

export default Evaluation;
