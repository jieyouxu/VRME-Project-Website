import React from "react";

import { CardBody, CardHeader, Card, Alert } from "reactstrap";

import SyntaxHighlighter from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const OculusGoDeploymentManual = () => (
	<Card className="theme-bd-l-yellow">
		<CardHeader className="theme-c-l-yellow text-center">
			Oculus Go Client Deployment
		</CardHeader>
		<CardBody>
			<Alert color="warning">
				The Oculus Go client requires an Oculus Go and its accompanying
				controller.
			</Alert>

			<p>
				In order to see the program running, the{" "}
				<code>VRMeeting_Environment.apk</code> package must be side loaded onto
				Oculus Go (set in developer mode) using Android Debug Bridge (
				<code>adb</code>) tool.
			</p>

			<p>
				The user is expected to have ADB and Android File Transfer APIs to be
				installed in the machine. If not, there are links below to help with the
				downloading of these APIs.
				<ul>
					<li>
						ADB driver:{" "}
						<a href="https://stackoverflow.com/questions/31374085/installing-adb-on-macos">
							https://stackoverflow.com/questions/31374085/installing-adb-on-macos
						</a>
					</li>
					<li>
						Android File Transfer:{" "}
						<a href="https://www.android.com/filetransfer/">
							https://www.android.com/filetransfer/
						</a>
					</li>
				</ul>
			</p>

			<p>
				To begin, set directory to <code>table/</code>
			</p>
			<SyntaxHighlighter language="bash" style={gruvboxDark}>
				cd table
			</SyntaxHighlighter>

			<p>To initiate side loading:</p>
			<ol>
				<li>Connect Oculus Go to your machine via a USB port</li>
				<li>
					<p>To check whether your device is seen by the ADB driver:</p>
					<SyntaxHighlighter language="bash" style={gruvboxDark}>
						adb devices
					</SyntaxHighlighter>
					<p>
						Which will display any android devices that is connected to your
						computer.
					</p>
				</li>
				<li>
					<p>To side load / install package:</p>
					<SyntaxHighlighter language="bash" style={gruvboxDark}>
						adb install /table/VRMeeting_Environment.apk
					</SyntaxHighlighter>
					<p>
						A &quot;<code>Success</code>&quot; response will be displayed if
						program is uploaded successfully.
					</p>
				</li>
				<li>
					<p>To delete package:</p>
					<SyntaxHighlighter language="bash" style={gruvboxDark}>
						adb uninstall com.Team11.VRMeeting
					</SyntaxHighlighter>
					<p>
						A &quot;<code>Success</code>&quot; response will be displayed if
						program is deleted successfully.
					</p>
				</li>
			</ol>

			<p>
				Once the program has been side loaded successfully:
			</p>
			<ul>
				<li>On Oculus Go select <code>Library</code></li>
				<li>Select unknown sources</li>
				<li>Select the app named VRMeeting to enter it</li>
			</ul>
		</CardBody>
	</Card>
);

export default OculusGoDeploymentManual;
