import React from "react";

import { CardBody, CardDeck, Card } from "reactstrap";

import ContentCard from "../../../components/content-card/ContentCard";
import ContentCardHeader from "../../../components/content-card-header/ContentCardHeader";

const AdditionalOculusGoResearch = () => (
	<ContentCard>
		<ContentCardHeader
			title="Additional Oculus Go Research"
			className="theme-c-l-green"
		/>
		<CardBody>
			<p>
				Oculus Go is a standalone VR headset, meaning that it does not require
				processing and rendering support from connected devices{" "}
				<a href="#ref-13">[13]</a>.
			</p>
			<p>
				Each Oculus Go set (minimum, 32 GB, GBP 199) contains{" "}
				<a href="#ref-13">[13]</a>:
			</p>
			<Card body className="theme-bd-d-green mb-4">
				<CardDeck className="text-center theme-c-base-d0">
					<Card body className="theme-bg-l-green">
						Oculus Go Headset (&times;1)
					</Card>
					<Card body className="theme-bg-l-green">
						Controller (&times;1)
					</Card>
					<Card body className="theme-bg-l-green">
						10W Power Adapter (&times;1)
					</Card>
					<Card body className="theme-bg-l-green">
						AA battery (&times;1)
					</Card>
					<Card body className="theme-bg-l-green">
						Frame Friendly Spacer (&times;1)
					</Card>
				</CardDeck>
			</Card>
			<h3 className="h3 text-center">Hardware Specification</h3>
			<p>
				From <a href="#ref-14">[14]</a>, <a href="#ref-15">[15]</a>:
			</p>
			<ol>
				<li>5.5-inch display</li>
				<li>2560 &times; 1440 resolution (1280 &times; 1440 per eye)</li>
				<li>
					Qualcomm's Snapdragon 821 processor <a href="#ref-16">[16]</a>
				</li>
				<li>$199 base model includes 32GB of storage</li>
				<li>3 GB of RAM</li>
				<li>802.11ac Wi-Fi</li>
				<li>60 – 72 Hz refresh rate (application dependent)</li>
				<li>
					3.5-mm audio jack, integrated spatial audio with speakers built-in
				</li>
				<li>
					3-degree-of-freedom tracking (3DoF) for the headset and the
					controller, but does not support positional tracking at all
				</li>
				<li>
					2600 mAh battery that provides up to two hours of gaming, or 2.5 hours
					of video playback
				</li>
			</ol>
		</CardBody>
	</ContentCard>
);

export default AdditionalOculusGoResearch;
