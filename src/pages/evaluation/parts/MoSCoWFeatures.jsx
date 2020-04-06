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
			<Table bordered dark responsive striped className="mb-4">
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
						<td className="theme-c-l-green">Done</td>
						<td>All</td>
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
						<td>All</td>
					</tr>
					<tr>
						<th scope="row">4</th>
						<td>Users must be represented by avatars</td>
						<td className="theme-c-l-red">Must</td>
						<td className="theme-c-l-green">Done</td>
						<td>All</td>
					</tr>
					<tr>
						<th scope="row">5</th>
						<td>Name tags</td>
						<td className="theme-c-l-red">Must</td>
						<td className="theme-c-l-green">Done</td>
						<td>All</td>
					</tr>
					<tr>
						<th scope="row">6</th>
						<td>Real-time communication</td>
						<td className="theme-c-l-red">Must</td>
						<td className="theme-c-l-green">Done</td>
						<td>Yingming Luo</td>
					</tr>
					<tr>
						<th scope="row">7</th>
						<td>Basic VR user interface</td>
						<td className="theme-c-l-red">Must</td>
						<td className="theme-c-l-green">Done</td>
						<td>Yingming Luo</td>
					</tr>
					<tr>
						<th scope="row">8</th>
						<td>Ability to present slides</td>
						<td className="theme-c-l-red">Must</td>
						<td className="theme-c-l-green">Done</td>
						<td>All</td>
					</tr>
					<tr>
						<th scope="row">9</th>
						<td>Field of vision</td>
						<td className="theme-c-l-red">Must</td>
						<td className="theme-c-l-green">Done</td>
						<td>Yingming Luo</td>
					</tr>
				</tbody>
			</Table>

			<Table bordered dark responsive striped className="mb-4">
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
						<th scope="row">10</th>
						<td>Protected meeting sessions</td>
						<td className="theme-c-l-yellow">Should</td>
						<td className="theme-c-l-green">Done</td>
						<td>All</td>
					</tr>
					<tr>
						<th scope="row">11</th>
						<td>External account and meeting session management website</td>
						<td className="theme-c-l-yellow">Should</td>
						<td className="theme-c-l-yellow">Partial</td>
						<td>Wenxin, Jieyou</td>
					</tr>
					<tr>
						<th scope="row">12</th>
						<td>Use of IBM Watson Personality Insight API</td>
						<td className="theme-c-l-yellow">Should</td>
						<td className="theme-c-l-gray">N/A</td>
						<td>All</td>
					</tr>
					<tr>
						<th scope="row">13</th>
						<td>Personalized avatars for users</td>
						<td className="theme-c-l-yellow">Should</td>
						<td className="theme-c-l-green">Done</td>
						<td>All</td>
					</tr>
					<tr>
						<th scope="row">14</th>
						<td>Movement of user models</td>
						<td className="theme-c-l-yellow">Should</td>
						<td className="theme-c-l-gray">N/A</td>
						<td>All</td>
					</tr>
					<tr>
						<th scope="row">15</th>
						<td>Zoom in and out</td>
						<td className="theme-c-l-yellow">Should</td>
						<td className="theme-c-l-gray">N/A</td>
						<td>All</td>
					</tr>
					<tr>
						<th scope="	row">16</th>
						<td>A chat box that enables users to send text messages</td>
						<td className="theme-c-l-yellow">Should</td>
						<td className="theme-c-l-gray">N/A</td>
						<td>All</td>
					</tr>
					<tr>
						<th scope="row">17</th>
						<td>Flexible presenter/listener arrangement</td>
						<td className="theme-c-l-yellow">Should</td>
						<td className="theme-c-l-gray">N/A</td>
						<td>All</td>
					</tr>
					<tr>
						<th scope="row">18</th>
						<td>File-sharing system</td>
						<td className="theme-c-l-yellow">Should</td>
						<td className="theme-c-l-gray">N/A</td>
						<td>All</td>
					</tr>
					<tr>
						<th scope="row">19</th>
						<td>
							Avatars with free movement, capable of changing gestures by
							detecting the users&apos; actual body movements
						</td>
						<td className="theme-c-l-yellow">Should</td>
						<td className="theme-c-l-gray">N/A</td>
						<td>All</td>
					</tr>
				</tbody>
			</Table>

			<Table bordered dark responsive striped className="mb-4">
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
						<th scope="row">20</th>
						<td>Realistic rendering of humanoid models of meeting attendees and presenters</td>
						<td className="theme-c-l-aqua">Could</td>
						<td className="theme-c-l-gray">N/A</td>
						<td>All</td>
					</tr>
					<tr>
						<th scope="row">21</th>
						<td>Selection of fictional background scenes</td>
						<td className="theme-c-l-aqua">Could</td>
						<td className="theme-c-l-gray">N/A</td>
						<td>All</td>
					</tr>
					<tr>
						<th scope="row">22</th>
						<td>Integration of multiple platforms</td>
						<td className="theme-c-l-aqua">Could</td>
						<td className="theme-c-l-gray">N/A</td>
						<td>All</td>
					</tr>
					<tr>
						<th scope="row">23</th>
						<td>Other forms of VR meeting environments, such as lecture hall</td>
						<td className="theme-c-l-aqua">Could</td>
						<td className="theme-c-l-gray">N/A</td>
						<td>All</td>
					</tr>
					<tr>
						<th scope="row">24</th>
						<td>Realistic immersive audio systems</td>
						<td className="theme-c-l-aqua">Could</td>
						<td className="theme-c-l-gray">N/A</td>
						<td>All</td>
					</tr>
					<tr>
						<th scope="row">25</th>
						<td>Dynamic avatars</td>
						<td className="theme-c-l-aqua">Could</td>
						<td className="theme-c-l-gray">N/A</td>
						<td>All</td>
					</tr>
					<tr>
						<th scope="row">26</th>
						<td>Interactive sketch board for participants to take notes</td>
						<td className="theme-c-l-aqua">Could</td>
						<td className="theme-c-l-gray">N/A</td>
						<td>All</td>
					</tr>
				</tbody>
			</Table>
		</CardBody>
	</ContentCard>
);

export default MoSCoWFeaturesProgress;
