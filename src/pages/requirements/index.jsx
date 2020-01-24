import React from "react";

import PageContentContainer from "../../components/page-content-container/PageContentContainer";
import InnerContentContainer from "../../components/inner-content-container/InnerContentContainer";
import PageTitle from "../../components/page-title/PageTitle";

import ProjectBackground from "./parts/ProjectBackground";
import PageReferences from "./parts/PageReferences";
import ProposedSolution from "./parts/ProposedSolution";
import RequirementsGathering from "./parts/RequirementsGathering";
import MoSCoWList from "./parts/MoSCowList";
import RequirementAnalysis from "./parts/RequirementsAnalysis";
import UseCases from "./parts/UseCases";

const Requirements = () => (
	<PageContentContainer>
		<PageTitle title="Requirements" />
		<InnerContentContainer>
			<ProjectBackground />
			<ProposedSolution />
			<RequirementsGathering />
			<MoSCoWList />
			<RequirementAnalysis />
			<UseCases />
			<PageReferences />
		</InnerContentContainer>
	</PageContentContainer>
);

export default Requirements;
