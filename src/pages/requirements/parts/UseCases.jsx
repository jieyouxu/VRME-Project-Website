import React from "react";

import { CardBody, Card, CardHeader, CardImg, Table } from "reactstrap";

import ContentCard from "../../../components/content-card/ContentCard";
import ContentCardHeader from "../../../components/content-card-header/ContentCardHeader";

import UseCaseDiagram from "./use-cases/use-cases.png";

const UseCases = () => (
	<ContentCard>
		<ContentCardHeader title="Use Cases" className="theme-c-l-yellow" />
		<CardBody>
			<Card className="theme-bd-d-yellow mb-4">
				<CardHeader className="h3 theme-c-l-yellow text-center">
					Use Case List
				</CardHeader>
				<CardBody>
					<Card className="theme-bd-l-yellow mb-4">
						<CardHeader className="h4 theme-bg-l-yellow theme-c-base-d0 text-center">
							Attendees
						</CardHeader>
						<CardBody>
							<Table responsive dark striped bordered>
								<thead>
									<tr>
										<th scope="col">ID</th>
										<th scope="col">Use case</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th scope="row">VRME1</th>
										<td>Make gestures</td>
									</tr>
									<tr>
										<th scope="row">VRME2</th>
										<td>Speaker control</td>
									</tr>
									<tr>
										<th scope="row">VRME3</th>
										<td>Session management</td>
									</tr>
									<tr>
										<th scope="row">VRME4</th>
										<td>Field of vision</td>
									</tr>
									<tr>
										<th scope="row">VRME5</th>
										<td>User avatars and representation</td>
									</tr>
								</tbody>
							</Table>
						</CardBody>
					</Card>
					<Card className="theme-bd-l-yellow">
						<CardHeader className="h4 theme-bg-l-yellow theme-c-base-d0 text-center">
							Presenter
						</CardHeader>
						<CardBody>
							<Table responsive dark striped bordered>
								<thead>
									<tr>
										<th scope="col">ID</th>
										<th scope="col">Use case</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th scope="row">VRME1</th>
										<td>Make gestures</td>
									</tr>
									<tr>
										<th scope="row">VRME2</th>
										<td>Speaker control</td>
									</tr>
									<tr>
										<th scope="row">VRME3</th>
										<td>Session management</td>
									</tr>
									<tr>
										<th scope="row">VRME4</th>
										<td>Field of vision</td>
									</tr>
									<tr>
										<th scope="row">VRME5</th>
										<td>User avatars and representation</td>
									</tr>
								</tbody>
							</Table>
						</CardBody>
					</Card>
				</CardBody>
			</Card>
			<Card className="theme-bd-d-yellow">
				<CardHeader className="h3 theme-c-l-yellow text-center">
					Use Case Diagram
				</CardHeader>
				<CardBody>
					<CardImg top src={UseCaseDiagram} />
				</CardBody>
			</Card>
		</CardBody>
	</ContentCard>
);

export default UseCases;
