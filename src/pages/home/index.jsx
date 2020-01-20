import React from "react";

import NavBar from "../../components/nav-bar/NavBar";
import PageContentContainer from "../../components/page-content-container/PageContentContainer";
import ProjectSummary from "./parts/ProjectSummary";

const Home = () => {
	return (
		<>
			<NavBar />
			<PageContentContainer>
				<ProjectSummary />
			</PageContentContainer>
		</>
	);
};

export default Home;
