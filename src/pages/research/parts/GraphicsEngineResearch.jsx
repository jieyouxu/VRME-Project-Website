import React from "react";

import {
	CardBody,
	CardDeck,
	Card,
	CardText,
	CardGroup,
	CardHeader
} from "reactstrap";

import ContentCard from "../../../components/content-card/ContentCard";
import ContentCardHeader from "../../../components/content-card-header/ContentCardHeader";

const GraphicsRenderingEngineResearch = () => (
	<ContentCard>
		<ContentCardHeader
			title="Graphics Rendering Engine Research"
			className="theme-c-l-purple"
		/>
		<CardBody>
			<h3 className="h3 text-center">Background</h3>
			<p>
				Oculus Go supports three types of graphics rendering options{" "}
				<a href="#ref-20">[20]</a>:
			</p>
			<CardDeck className="text-center mb-4">
				<Card body className="theme-bd-l-purple">
					<CardText>
						Native Engine Integration with VrApi <a href="#ref-21">[21]</a>.
					</CardText>
				</Card>
				<Card body className="theme-bd-l-purple">
					<CardText>Unity integration.</CardText>
				</Card>
				<Card body className="theme-bd-l-purple">
					<CardText>Unreal integration.</CardText>
				</Card>
			</CardDeck>
			<h3 className="h3 text-center">Relevant Data and Information</h3>
			<p>
				Each of the option inevitably bounds us to a programming language, or a
				particular graphics rendering engine, which may affect portability and
				extensibility.
			</p>
			<ol>
				<li>
					Native Engine Integration with VrApi requires native C++, which is
					particular to Oculus Go.
				</li>
				<li>Unity integration requires C#.</li>
				<li>
					Unreal integration requires C++. C++ is compiled, but Native Engine
					integration and Unreal integration each requires that we be bound to
					the particular API specific to Oculus Go, meaning that the code is
					difficult to use should additional platforms need to be supported. We
					likely need different build configurations for different platforms as
					well. C# is JIT compiled, similar to Java, where source files are
					compiled to a intermediate language and then executed by a JIT
					compiler on the target platform. This likely reduces the different
					build setup required, with the caveat that platforms need to implement
					C# JIT compiler run time <a href="#ref-22">[22]</a>.
				</li>
			</ol>
			<h3 className="h3 text-center">Evaluation</h3>
			<CardGroup className="mb-4">
				<Card className="theme-bd-l-purple">
					<CardHeader className="h4 theme-c-l-purple">VrApi</CardHeader>
					<CardBody>
						<p>
							Oculus Go&apos;s native SDK provides VrApi which utilizes
							Android-based custom graphics rendering engine{" "}
							<a href="#ref-23">[23]</a>.
						</p>
						<ul>
							<li>Not bound to external graphics engine.</li>
							<li>Minimal API.</li>
							<li>Has some examples.</li>
							<li>Limited graphics rendering capabilities.</li>
							<li>
								Likely needs to roll out custom graphics rendering algorithms.
							</li>
							<li>C++ has a high learning curve.</li>
							<li>Difficult to port to another platform.</li>
						</ul>
						<p>
							Estimated development cost:{" "}
							<span className="theme-c-l-red">high</span>.
						</p>
					</CardBody>
				</Card>
				<Card className="theme-bd-l-purple">
					<CardHeader className="h4 theme-c-l-purple">Unreal</CardHeader>
					<CardBody>
						<p>
							Oculus Go provides Unreal engine integration{" "}
							<a href="#ref-24">[24]</a>.
						</p>
						<ul>
							<li>High performance, engine written in C++ and optimized.</li>
							<li>Good community resources, documentation and examples.</li>
							<li>C++ has a high learning curve.</li>
							<li>Dependent on the game engine.</li>
							<li>May have unneeded features which can bloat binary size.</li>
							<li>May have compatibility problems.</li>
							<li>Payment scheme: 5% of revenue.</li>
						</ul>
						<p>
							Estimated development cost:{" "}
							<span className="theme-c-l-yellow">medium</span>.
						</p>
					</CardBody>
				</Card>
				<Card className="theme-bd-l-purple">
					<CardHeader className="h4 theme-c-l-purple">Unity</CardHeader>
					<CardBody>
						<p>
							Oculus Go provides Unity engine integration{" "}
							<a href="#ref-25">[25]</a>.
						</p>
						<ul>
							<li>Mature game engine, optimized.</li>
							<li>
								C# is similar to Java, which team members are familiar with.
							</li>
							<li>
								Very good community resources, documentation and examples.
							</li>
							<li>Lots of getting started tutorials exist.</li>
							<li>
								Target platforms need to implement C# JIT compiler run time.
							</li>
							<li>Game engine may have features which we don&apos;t need.</li>
							<li>Dependent on the game engine.</li>
							<li>Free.</li>
						</ul>
						<p>
							Estimated development cost:{" "}
							<span className="theme-c-l-yellow">medium</span>.
						</p>
					</CardBody>
				</Card>
			</CardGroup>
			<p>
				Given the development time constraint, it did not seem likely that we
				have enough time to roll out custom graphics rendering capabilities via
				the native VrApi, which is the first option we ruled out. We then needed
				to decide between Unreal vs Unity, based on the following
				considerations:
			</p>
			<ul>
				<li>
					Programming Language Unreal uses C++ whereas Unity uses C#. C# is
					similar to Java, which all three of the team members are familiar
					with, meaning that Unity will have a lower learning barrier in terms
					of host language. In this aspect, Unity is the better choice.
				</li>
				<li>
					Builds and Platform Portability C++ compilation occurs on the
					development machine, which means that codegen for different target
					platforms need only be implemented on the development machine&apos;s
					OS. However, different build configurations will need to be
					maintained. C# compilation occurs by JIT compilers on the target
					platform, where the development machine only produces intermediate
					code which is transferred to the target platform. In this case, if
					different VR head gears need to be supported, C++ (and hence Unreal)
					would be the better choice because not every VR head gear implements
					C# JIT compiler run time. However, as we decided to develop for only
					one target platform for the prototype given the time constraints, C#
					(and hence Unity) is sufficient.
				</li>
				<li>
					Learning Difficulty None of the team members have prior VR / C++ /
					Graphics Rendering / Game Engine experience, so we need to pick a game
					engine which is faster to learn. Based on discussions in{" "}
					<a href="#ref-26">[26]</a> and <a href="27">[27]</a>, Unreal is more
					suited for high-end, realistic-graphics-rendering 3D games which
					require high processing power, while Unity is more suited for
					lower-end, reasonable-graphics-rendering 3D or 2D games which are
					primarily deployed on mobile platforms. Unreal development usually
					requires a sophisticated team with graphics rendering specialists,
					while Unity is more suited towards less-experienced developers of a
					smaller team size. In this sense, Unity is more suitable for us.
				</li>
			</ul>
			<p>
				Based on programming language, building and platform portability, and
				mostly importantly, learning difficulty, we decide to use{" "}
				<span className="theme-c-l-purple">Unity</span> for the VR Meeting
				Environment.
			</p>
		</CardBody>
	</ContentCard>
);

export default GraphicsRenderingEngineResearch;
