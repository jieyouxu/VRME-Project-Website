import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/nav-bar/NavBar";
import Home from "./pages/home";
import Requirements from "./pages/requirements";
import Research from "./pages/research";
import HCI from "./pages/hci";

import "bootstrap/dist/css/bootstrap.min.css";
import "./shared.css";

const Main = () => (
	<Router>
		<NavBar />
		<Route exact path="/" component={Home} />
		<Route exact path="/requirements" component={Requirements} />
		<Route exact path="/research" component={Research} />
		<Route exact path="/hci" component={HCI} />
	</Router>
);

ReactDOM.render(<Main />, document.getElementById("root"));
