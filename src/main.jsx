import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import "./shared.css";

const Main = () => (
	<Router>
		<Switch>
			<Route path="/" component={Home} />
		</Switch>
	</Router>
);

ReactDOM.render(<Main />, document.getElementById("root"));
