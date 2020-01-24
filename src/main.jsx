import React from "react";
import ReactDOM from "react-dom";

import { Route } from "react-router";
import { MemoryRouter as Router } from "react-router-dom";

import NavBar from "./components/nav-bar/NavBar";
import Home from "./pages/home";
import Requirements from "./pages/requirements";
import Research from "./pages/research";
import HCI from "./pages/hci";
import Design from "./pages/design";
import Testing from "./pages/testing";
import Evaluation from "./pages/evaluation";
import Appendix from "./pages/appendix";

import "bootstrap/dist/css/bootstrap.min.css";
import "./shared.css";

const Main = () => (
	<Router>
		<NavBar />
		<Route exact path="/" component={Home} />
		<Route exact path="/requirements" component={Requirements} />
		<Route exact path="/research" component={Research} />
		<Route exact path="/hci" component={HCI} />
		<Route exact path="/design" component={Design} />
		<Route exact path="/testing" component={Testing} />
		<Route exact path="/evaluation" component={Evaluation} />
		<Route exact path="/appendix" component={Appendix} />
	</Router>
);

ReactDOM.render(<Main />, document.getElementById("root"));
