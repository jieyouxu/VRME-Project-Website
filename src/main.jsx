import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/nav-bar/NavBar";
import Home from "./pages/home";
import Requirements from "./pages/requirements";

import "bootstrap/dist/css/bootstrap.min.css";
import "./shared.css";

const Main = () => (
	<Router>
		<NavBar />
		<Route exact path="/requirements" component={Requirements} />
		<Route exact path="/" component={Home} />
	</Router>
);

ReactDOM.render(<Main />, document.getElementById("root"));
