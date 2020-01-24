import React from "react";

import { CardBody, Table } from "reactstrap";

import ContentCard from "../../../components/content-card/ContentCard";
import ContentCardHeader from "../../../components/content-card-header/ContentCardHeader";

const IndividualContributions = () => (
	<ContentCard>
		<ContentCardHeader
			title="Individual Contributions"
			className="theme-c-l-blue"
		/>
		<CardBody>
			<Table responsive dark striped bordered>
				<thead>
					<tr>
						<th scope="col">Work Type</th>
						<th scope="col">Jieyou Xu</th>
						<th scope="col">Yingming Luo</th>
						<th scope="col">Wenxin Wang</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">Client liason</th>
						<td>100%</td>
						<td>0%</td>
						<td>0%</td>
					</tr>
					<tr>
						<th scope="row">Requirements analysis</th>
						<td>33%</td>
						<td>33%</td>
						<td>33%</td>
					</tr>
					<tr>
						<th scope="row">Research</th>
						<td>50%</td>
						<td>25%</td>
						<td>25%</td>
					</tr>
					<tr>
						<th scope="row">UI design</th>
						<td>20%</td>
						<td>20%</td>
						<td>60%</td>
					</tr>
					<tr>
						<th scope="row">Programming</th>
						<td>60%</td>
						<td>20%</td>
						<td>20%</td>
					</tr>
					<tr>
						<th scope="row">Testing</th>
						<td>30%</td>
						<td>60%</td>
						<td>10%</td>
					</tr>
					<tr>
						<th scope="row">Biweekly report</th>
						<td>33%</td>
						<td>33%</td>
						<td>33%</td>
					</tr>
					<tr>
						<th scope="row">Website editing</th>
						<td>50%</td>
						<td>10%</td>
						<td>40%</td>
					</tr>
					<tr>
						<th scope="row" className="theme-bg-d-blue">
							Overall contribution
						</th>
						<td className="theme-bg-l-blue theme-c-base-d0">40%</td>
						<td className="theme-bg-l-blue theme-c-base-d0">30%</td>
						<td className="theme-bg-l-blue theme-c-base-d0">30%</td>
					</tr>
					<tr>
						<th scope="row" className="theme-bg-d-blue">
							Roles
						</th>
						<td className="theme-bg-l-blue theme-c-base-d0">
							Researcher, Back-end developer, Website editor, Liason
						</td>
						<td className="theme-bg-l-blue theme-c-base-d0">
							Tester, Front-end developer
						</td>
						<td className="theme-bg-l-blue theme-c-base-d0">
							UI designer, Website editor
						</td>
					</tr>
				</tbody>
			</Table>
		</CardBody>
	</ContentCard>
);

export default IndividualContributions;
