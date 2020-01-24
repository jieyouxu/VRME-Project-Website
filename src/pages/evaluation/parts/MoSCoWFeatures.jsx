import React from "react";

import { CardBody, Table } from "reactstrap";

import ContentCard from "../../../components/content-card/ContentCard";
import ContentCardHeader from "../../../components/content-card-header/ContentCardHeader";

const MoSCoWFeaturesProgress = () => (
	<ContentCard>
		<ContentCardHeader
			title="MoSCoW Features Progress"
			className="theme-c-l-yellow"
		/>
		<CardBody>
			<Table bordered dark responsive striped>
				<thead>
					<tr>
						<th scope="col">ID</th>
						<th scope="col">Requirements</th>
						<th scope="col">Priority</th>
						<th scope="col">Status</th>
						<th scope="col">Contributor</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">1</th>
						<td>Initiate, join and leave a meeting session</td>
						<td className="theme-c-l-red">Must</td>
						<td className="theme-c-l-yellow">In Progress</td>
						<td>Jieyou</td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td>Simple emulated round table meeting</td>
						<td className="theme-c-l-red">Must</td>
						<td className="theme-c-l-green">Done</td>
						<td>Yingming, Wenxin</td>
					</tr>
					<tr>
						<th scope="row">3</th>
						<td>Attendees must be able to see the presentation slide</td>
						<td className="theme-c-l-red">Must</td>
						<td className="theme-c-l-green">Done</td>
						<td>Yingming, Wenxin</td>
					</tr>
					<tr>
						<th scope="row">4</th>
						<td>Users must be represented by avatars</td>
						<td className="theme-c-l-red">Must</td>
						<td className="theme-c-l-green">Done</td>
						<td>Wenxin</td>
					</tr>
					<tr>
						<th scope="row">5</th>
						<td>Name tags and speaking indication</td>
						<td className="theme-c-l-red">Must</td>
						<td className="theme-c-l-yellow">In Progress</td>
						<td>Yingming, Wenxin</td>
					</tr>
					<tr>
						<th scope="row">6</th>
						<td>Real-time communication</td>
						<td className="theme-c-l-red">Must</td>
						<td className="theme-c-l-yellow">In Progress</td>
						<td>Jieyou</td>
					</tr>
					<tr>
						<th scope="row">7</th>
						<td>Field of vision</td>
						<td className="theme-c-l-red">Must</td>
						<td className="theme-c-l-green">Done</td>
						<td>Wenxin</td>
					</tr>
					<tr>
						<th scope="row">8</th>
						<td>Basic VR user interface</td>
						<td className="theme-c-l-red">Must</td>
						<td className="theme-c-l-yellow">In Progress</td>
						<td>Wenxin, Yingming</td>
					</tr>
				</tbody>
			</Table>
		</CardBody>
	</ContentCard>
);

export default MoSCoWFeaturesProgress;
