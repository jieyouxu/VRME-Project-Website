import React from "react";

import { CardBody } from 'reactstrap';

import ContentCard from "../../../components/content-card/ContentCard";

const HCIExplanation = () => (
	<ContentCard>
		<CardBody>
			<p>
				The aim of the system is to make remote meetings more interactive and
				engaging to the users. To do that, we have created a UI that is accessible
				and easy to operate. The UI is a collection of functional buttons. The
				functionalities are clearly labelled and buttons are selectable from the
				raycast pointer, using the handheld controller. The UI itself takes
				precious space in user&apos;s vision, thus it can be toggled on and off as
				needed. Every user has a full view of the meeting environment, from any
				locations they sit. Built in gestures allows the user to express their
				opinions through the body language of their avatars.
			</p>
			<p>
				As our system is a replacement of the real face to face meetings,
				effective communication methods must be guaranteed. Real time voice char
				is possible using the Oculus Party API, where other Oculus Go users are
				connected through their facebook accounts, hence communicate when using
				our application.
			</p>
			<p>
				General settings of the user&apos;s account can be modified through the
				external management website, to ease the difficulties of doing everything
				by point and select, Oculus Go mainly handles the meeting session
				requests, such as initiate, join, and leave meeting, which can be achieved
				by selecting the appropriate buttons directly.
			</p>
			<p>
				The round table arrangement of meeting space puts the presenter in centre
				stage, which means other participants automatically focuses their
				attention on the presenter. Also it creates the feeling of being close to
				other participants, more immersive.
			</p>
		</CardBody>
	</ContentCard>
);

export default HCIExplanation;
