import React from "react";

import {
	CardBody,
	CardDeck,
	Card,
	CardTitle,
	CardText,
	CardImg,
	CardHeader
} from "reactstrap";

import ContentCard from "../../../components/content-card/ContentCard";
import ContentCardHeader from "../../../components/content-card-header/ContentCardHeader";

import OculusGoImg from "./vr-gears/oculus-go.jpg";
import GoogleCardboardImg from "./vr-gears/google-cardboard.jpg";

const TargetPlatformResearch = () => (
	<ContentCard>
		<ContentCardHeader
			title="Target Platform Research"
			className="theme-c-l-blue"
		/>
		<CardBody>
			<h3 className="h3 text-center">Introduction</h3>
			<p>
				There are two main classifications of VR gear for which we can develop
				as target platforms for:
			</p>
			<CardDeck className="mb-4">
				<Card className="theme-bd-l-blue">
					<CardImg top src={OculusGoImg} />
					<CardBody>
						<CardTitle className="h4 theme-c-l-blue">
							Standalone VR gear
						</CardTitle>
						<CardText>
							<a href="#ref-1">Oculus Go [1]</a>
						</CardText>
					</CardBody>
				</Card>
				<Card className="theme-bd-l-blue">
					<CardImg top src={GoogleCardboardImg} />
					<CardBody>
						<CardTitle className="h4 theme-c-l-blue">
							PC-based or Android/iOS-based (Connected) VR gear
						</CardTitle>
						<CardText>
							<a href="#ref-2">Google Cardboard [2]</a>
						</CardText>
					</CardBody>
				</Card>
			</CardDeck>
			<p>
				We consider Oculus Go and Google Cardboard to be the representative VR
				gear for each type respectively. We proceed to evaluate them with
				respect to several aspects.
			</p>
			<div className="content-skip" />
			<h3 className="h3 text-center">
				Platform-based Graphics Development Options
			</h3>
			<Card className="theme-bd-l-blue mb-3">
				<CardBody>
					<CardTitle className="h4 theme-c-l-blue">Oculus Go</CardTitle>
					<p>
						Oculus Go, as a standalone VR gear, has{" "}
						<a href="#ref-3">3 development possibilities [3]</a>:
					</p>
					<CardDeck>
						<Card className="theme-bd-d-blue">
							<CardHeader className="text-center">
								Native development via <a href="#ref-4">Native Platform [4]</a>
							</CardHeader>
							<CardBody className="theme-bg-base-d1">
								<p>
									The Mobile SDK / Native Platform for native development
									contains <a href="#ref-4">[4]</a>:
								</p>
								<ul>
									<li>
										<code>VrApi</code> for third-party engine integration (not
										required for Unity or Unreal).
									</li>
									<li>
										Native application framework for building high-performance
										VR applications from scratch.
									</li>
									<li>
										Additional libraries providing support for GUI, locale, and
										other functionality.
									</li>
									<li>
										Native project sample applications and source to provide
										reference model for creating your own VR applications.
									</li>
									<li>
										Tools and resources to assist with native development.
									</li>
									<li>
										Main development language is in <a href="#ref-4">C++ [4]</a>
										.
									</li>
								</ul>
							</CardBody>
						</Card>
						<Card className="theme-bd-d-blue">
							<CardHeader className="text-center">
								Unreal development via{" "}
								<a href="#ref-5">Unreal integration [5]</a>
							</CardHeader>
							<CardBody className="theme-bg-base-d1">
								<ul>
									<li>
										Unreal Engine 4 is a Graphics Engine developed by Epic
										Games, Inc <a href="#ref-5">[5]</a>.
									</li>
									<li>
										Oculus Go has support for Unreal integration{" "}
										<a href="#ref-6">[6]</a>.
									</li>
									<li>
										Main development language is in C++ <a href="#ref-6">[6]</a>
										.
									</li>
								</ul>
							</CardBody>
						</Card>
						<Card className="theme-bd-d-blue">
							<CardHeader className="text-center">
								Unity development via <a href="#ref-6">Unity integration [6]</a>
							</CardHeader>
							<CardBody className="theme-bg-base-d1">
								<ul>
									<li>
										Unity is a Graphics Engine developed by Unity Technologies{" "}
										<a href="#ref-7">[7]</a>.
									</li>
									<li>
										Oculus Go has support for Unity integration{" "}
										<a href="#ref-8">[8]</a>.
									</li>
									<li>
										Main development language is in C# or JavaScript{" "}
										<a href="#ref-8">[8]</a>.
									</li>
									<li>
										Cross-platform development support is available{" "}
										<a href="#ref-9">[9]</a>.
									</li>
								</ul>
							</CardBody>
						</Card>
					</CardDeck>
				</CardBody>
			</Card>
			<Card className="theme-bd-l-blue">
				<CardBody>
					<CardTitle className="h4 theme-c-l-blue">Google Cardboard</CardTitle>
					<p>
						Google Cardboard VR gear is a simple viewer, with the rendering and
						processing occuring on the connected mobile device{" "}
						<a href="#ref-2">[2]</a>.
					</p>
					<p>
						The supported mobile operating systems for the Cardboard SDK is{" "}
						<a href="#ref-10">[10]</a>:
					</p>
					<ul>
						<li>
							Android via Android NDK (in Java) <a href="#ref-11">[11]</a>.
						</li>
						<li>
							iOS SDK (in Objective-C) <a href="#ref-12">[12]</a>.
						</li>
					</ul>
				</CardBody>
			</Card>
			<div className="content-skip" />
			<h3 className="h3 text-center">Decision on Target Platform</h3>
			<p>
				We evaluated the two representative VR head gears in target platform
				research and considered two options:
			</p>
			<CardDeck className="mb-3">
				<Card className="theme-bd-d-blue">
					<CardHeader>Target only Oculus Go</CardHeader>
					<CardBody className="theme-bg-base-d1">
						<ul>
							<li>Less development time.</li>
							<li>Lower learning curve.</li>
							<li>
								Maybe too bound to the particular platform, making code reuses
								difficult.
							</li>
							<li>
								Estimated cost: <span className="theme-c-l-blue">low</span>.
							</li>
						</ul>
					</CardBody>
				</Card>
				<Card className="theme-bd-d-blue">
					<CardHeader>Target both Oculus Go and Google Cardboard</CardHeader>
					<CardBody className="theme-bg-base-d1">
						<ul>
							<li>
								Forces us to consider VR head gear abstractions - i.e.forces the
								incorporation of some HAL (hardware abstraction layer).
							</li>
							<li>Long development time (potentially double).</li>
							<li>
								Google Cardboard depends on Android or iOS phone, which are two
								additional environments that we may have to consider - an OSAL
								(operating system abstraction layer) will likely be needed in
								that case.
							</li>
							<li>
								Estimated cost: <span className="theme-c-l-blue">high</span>.
							</li>
						</ul>
					</CardBody>
				</Card>
			</CardDeck>
			<p>
				Based on the development time constraint, we initially decide to{" "}
				<span className="theme-c-l-blue">only develop for the Oculus Go</span>{" "}
				as the single target platform. We should keep in mind that other
				platforms may be necessary to port to, and that some abstractions may
				need to be put in place to facade over platform-specific details.
			</p>
		</CardBody>
	</ContentCard>
);

export default TargetPlatformResearch;
