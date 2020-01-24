import React from "react";
import ReactDOM from "react-dom";

import { Route } from "react-router";
import { MemoryRouter as Router } from "react-router-dom";

import NavBar from "./components/nav-bar/NavBar";
import Home from "./pages/home";
import Requirements from "./pages/requirements";
import Research from "./pages/research";
import HCI from "./pages/hci";
import Prototype from "./pages/prototype";
import Achievement from "./pages/achievement";
import FuturePlan from "./pages/future-plan";
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
		<Route exact path="/prototype" component={Prototype} />
		<Route exact path="/achievement" component={Achievement} />
		<Route exact path="/future-plan" component={FuturePlan} />
		<Route exact path="/appendix" component={Appendix} />
	</Router>
);

ReactDOM.render(<Main />, document.getElementById("root"));
