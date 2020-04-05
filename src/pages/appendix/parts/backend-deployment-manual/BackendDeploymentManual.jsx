import React from "react";

import {
	CardBody,
	CardHeader,
	Card,
	Alert,
	ListGroup,
	ListGroupItem
} from "reactstrap";

import SyntaxHighlighter from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const BackendDeploymentManual = () => (
	<Card className="theme-bd-l-yellow">
		<CardHeader className="theme-c-l-yellow text-center">
			Server Deployment
		</CardHeader>
		<CardBody>
			<Alert color="warning">
				The backend requires a Unix / macOS system to run. Tested on macOS
				10.15.4.
			</Alert>

			<p>
				All instructions below assume that the working director is within{" "}
				<code>vrme-server/</code> and not the top-level project directory.
			</p>

			<Card className="theme-bd-d-yellow mb-4">
				<CardHeader className="theme-c-d-yellow text-center">
					Dependencies
				</CardHeader>
				<CardBody>
					<ListGroup>
						<ListGroupItem
							tag="a"
							href="https://github.com/rust-lang/rust"
							className="theme-bg-base-d1 theme-c-base-l0"
						>
							Rust: The <code>rustc</code> compiler (Edition 2018, v1.43.0+)
						</ListGroupItem>
						<ListGroupItem
							tag="a"
							href="https://github.com/rust-lang/cargo"
							className="theme-bg-base-d1 theme-c-base-l0"
						>
							Rust: The <code>cargo</code> package manager
						</ListGroupItem>
					</ListGroup>
				</CardBody>
			</Card>

			<ol>
				<li>
					<p>Create user</p>
					<SyntaxHighlighter language="bash" style={gruvboxDark}>
						{"createuser -P <USERNAME>"}
					</SyntaxHighlighter>
				</li>
				<li>
					<p>Create database</p>
					<SyntaxHighlighter language="bash" style={gruvboxDark}>
						{"createdb -O <USERNAME> <DATABASE_NAME>"}
					</SyntaxHighlighter>
				</li>
				<li>
					<p>Initialize tables</p>
					<SyntaxHighlighter language="bash" style={gruvboxDark}>
						{`psql -f src/database/setup/init_accounts.sql
psql -f src/database/setup/init_auth_sessions.sql
psql -f src/database/setup/init_meeting_sessions.sql`}
					</SyntaxHighlighter>
				</li>
				<li>
					Edit configuration under <code>config/</code>
				</li>
				<li>
					<p>
						Run the server via <code>cargo</code>
					</p>
					<SyntaxHighlighter language="bash" style={gruvboxDark}>
						cargo run --release
					</SyntaxHighlighter>
				</li>
			</ol>
		</CardBody>
	</Card>
);

export default BackendDeploymentManual;
