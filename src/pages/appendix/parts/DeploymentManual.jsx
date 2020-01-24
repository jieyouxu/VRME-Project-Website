import React from "react";

import { CardBody, CardHeader, Card } from "reactstrap";

import SyntaxHighlighter from 'react-syntax-highlighter';
import { gruvboxDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import ContentCard from "../../../components/content-card/ContentCard";
import ContentCardHeader from "../../../components/content-card-header/ContentCardHeader";

const DeploymentManual = () => (
	<ContentCard>
		<ContentCardHeader title="Deployment Manual" />
		<CardBody>
			<Card className="theme-bd-l-yellow">
				<CardHeader className="theme-c-l-yellow text-center">
					Server Deployment
				</CardHeader>
				<CardBody>
					<p>
						The server requires an Unix/Linux distribution, or MacOS to run.
					</p>
					<p>
						<a href="https://nodejs.org/en/">Node.js</a> (version 13) and the
						package manager <a href="https://yarnpkg.com/">yarn</a> (version 1)
						is required.
					</p>
					<ol>
						<li>Install dependencies.</li>
						<SyntaxHighlighter language="bash" style={gruvboxDark}>
							{"yarn install"}
						</SyntaxHighlighter>
						<li>Run the server.</li>
						<SyntaxHighlighter language="bash" style={gruvboxDark}>
							{"yarn start"}
						</SyntaxHighlighter>
					</ol>
				</CardBody>
			</Card>
		</CardBody>
	</ContentCard>
);

export default DeploymentManual;
