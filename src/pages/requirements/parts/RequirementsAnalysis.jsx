import React from "react";

import {
	CardBody,
	Card,
	CardHeader,
	CardDeck,
	CardImg,
	Table
} from "reactstrap";

import ContentCard from "../../../components/content-card/ContentCard";
import ContentCardHeader from "../../../components/content-card-header/ContentCardHeader";

import ElenaWatersImg from "./personas/elena-waters.jpg";
import RichardJohnstonImg from "./personas/richard-johnston.jpg";

const RequirementAnalysis = () => (
	<ContentCard>
		<ContentCardHeader
			title="Requirements Analysis"
			className="theme-c-l-purple"
		/>
		<CardBody>
			<p>
				We utilize both
				<span className="theme-c-l-purple"> target user interviews</span> and
				<span className="theme-c-l-purple"> user personas</span> to further help
				us analyze the requirements.
			</p>
			<Card className="theme-bd-d-purple mb-4">
				<CardHeader className="theme-bg-l-purple theme-c-base-d0 text-center">
					<span className="h3">Target User Interview</span>
				</CardHeader>
				<CardBody>
					<p>We ask the target user several questions:</p>
					<ol>
						<li>
							What problems have you encountered with existing remote meeting
							platforms?
						</li>
						<li>
							What would you change to improve these existing remote platforms?
						</li>
						<li>What device do you use the remote platforms with?</li>
						<li>What would you expect from the VR meeting?</li>
						<li>
							With VR meeting, what improvements over existing remote meeting
							platforms would you expect?
						</li>
					</ol>
					<Card className="theme-bd-d-purple">
						<CardHeader className="theme-bg-d-purple">
							Excerpt from Interview
						</CardHeader>
						<CardBody>
							<p>
								<b>Interviewee</b>: Mr. Hu
							</p>
							<ol>
								<li>
									What problems have you encountered with existing remote
									meeting platforms?
								</li>
								<blockquote>
									<ul>
										<li>Connection problems</li>
										<li>Difficult to figure out speaker</li>
										<li>Skype mobile version difficult to use</li>
									</ul>
								</blockquote>
								<li>
									What would you change to improve these existing remote
									platforms?
								</li>
								<blockquote>
									<ul>
										<li>
											Change UI design to be more usable / affordable /
											intuitive
										</li>
										<li>
											Skype share link: difficult to know how to join meeting /
											meeting invites inconvenient
										</li>
									</ul>
								</blockquote>
								<li>What device do you use the remote platforms with?</li>
								<blockquote>
									<ul>
										<li>Mobile phone</li>
										<li>PC (because Phone can&apos;t load)</li>
									</ul>
								</blockquote>
								<li>What would you expect from the VR meeting?</li>
								<blockquote>
									<ul>
										<li>Nice modelling - emulates real person / realistic</li>
										<li>Low latency</li>
										<li>Interaction between attendees</li>
									</ul>
								</blockquote>
								<li>
									With VR meeting, what improvements over existing remote
									meeting platforms would you expect?
								</li>
								<blockquote>
									Better comprehend people&apos;s facial expressions / more
									meaning conveyed
								</blockquote>
							</ol>
						</CardBody>
					</Card>
				</CardBody>
			</Card>
			<Card className="theme-bd-d-purple">
				<CardHeader className="theme-bg-l-purple theme-c-base-d0 text-center">
					<span className="h3">User Personas</span>
				</CardHeader>
				<CardBody>
					<CardDeck>
						<Card className="theme-bd-d-purple">
							<CardHeader className="text-center">
								Persona (Attendee):{" "}
								<span className="font-weight-bold theme-c-l-purple">
									Elena Waters
								</span>
							</CardHeader>
							<CardImg
								top
								width="100%"
								src={ElenaWatersImg}
								alt="Card image cap"
							/>
							<CardBody>
								<h4>Basic Info</h4>
								<Table
									dark
									bordered
									responsive
									className="theme-c-base-l0 theme-bg-base-d0"
								>
									<tbody>
										<tr>
											<th>Name</th>
											<td>Elena Waters</td>
										</tr>
										<tr>
											<th>Role</th>
											<td>Software Developer</td>
										</tr>
										<tr>
											<th>Job description</th>
											<td>
												A software developer designs, writes and debugs code for
												computer systems and software.
											</td>
										</tr>
									</tbody>
								</Table>
								<h4>Company</h4>
								<Table
									dark
									bordered
									responsive
									className="theme-c-base-l0 theme-bg-base-d0"
								>
									<tbody>
										<tr>
											<th>Company name</th>
											<td>Ubisoft</td>
										</tr>
										<tr>
											<th>Company size</th>
											<td>Large (15k employees)</td>
										</tr>
										<tr>
											<th>Industry</th>
											<td>IT, game development</td>
										</tr>
									</tbody>
								</Table>
								<h4>Demographic Info</h4>
								<Table
									dark
									bordered
									responsive
									className="theme-c-base-l0 theme-bg-base-d0"
								>
									<tbody>
										<tr>
											<th>Age</th>
											<td>26</td>
										</tr>
										<tr>
											<th>Gender</th>
											<td>Female</td>
										</tr>
										<tr>
											<th>Income</th>
											<td>£20,000</td>
										</tr>
									</tbody>
								</Table>
								<h4>Other Info</h4>
								<Table
									dark
									bordered
									responsive
									className="theme-c-base-l0 theme-bg-base-d0"
								>
									<tbody>
										<tr>
											<th>Personal quote</th>
											<td>
												&quot;I find it difficult to stay focused when my boss
												is giving a video meeting, the web chat is too boring
												for me.&quot;
											</td>
										</tr>
										<tr>
											<th>Biography</th>
											<td>
												Elena started her career as a software developer two
												years ago. She recently joined Ubisoft and was allocated
												to a small group to develop a new feature on their new
												system. Some of her team members work from distance so
												they hold video meetings every week. The web-chat
												application they are currently using is out-dated and
												she is not satisfied with its quality. Elena finds it
												hard to stay focus as the graphics are low-resolution
												and retarded. However she doesn’t want to miss out any
												details. She is looking for a replacement that may meet
												her needs.
											</td>
										</tr>
										<tr>
											<th>Professional goals</th>
											<td>
												<ul>
													<li>Stay focused during video meetings.</li>
													<li>Have effective communication.</li>
												</ul>
											</td>
										</tr>
										<tr>
											<th>Motivators</th>
											<td>
												<ul>
													<li>Feeling of participation in the group.</li>
													<li>
														Have a sense of physical setting in the group chat.
													</li>
												</ul>
											</td>
										</tr>
										<tr>
											<th>Challenges</th>
											<td>
												<ul>
													<li>Hard to see slides clearly.</li>
													<li>
														Cannot see other group members&apos; actions and
														emotions.
													</li>
													<li>Get bored because the video quality is low.</li>
												</ul>
											</td>
										</tr>
										<tr>
											<th>Sources of information</th>
											<td>
												<ul>
													<li>Up-to-date technology magazines.</li>
													<li>Social media like Facebook and twitter.</li>
													<li>Technology websites.</li>
												</ul>
											</td>
										</tr>
									</tbody>
								</Table>
							</CardBody>
						</Card>
						<Card className="theme-bd-d-purple">
							<CardHeader className="text-center">
								Persona (Presenter):{" "}
								<span className="font-weight-bold theme-c-l-purple">
									Richard Johnston
								</span>
							</CardHeader>
							<CardImg
								top
								width="100%"
								src={RichardJohnstonImg}
								alt="Card image cap"
							/>
							<CardBody>
								<h4>Basic Info</h4>
								<Table
									dark
									bordered
									responsive
									className="theme-c-base-l0 theme-bg-base-d0"
								>
									<tbody>
										<tr>
											<th>Name</th>
											<td>Richard Johnston</td>
										</tr>
										<tr>
											<th>Role</th>
											<td>Senior Manager in an investment bank</td>
										</tr>
										<tr>
											<th>Job description</th>
											<td>
												Responsible for leading and directing a team of
												consulting specialists.
											</td>
										</tr>
									</tbody>
								</Table>
								<h4>Company</h4>
								<Table
									dark
									bordered
									responsive
									className="theme-c-base-l0 theme-bg-base-d0"
								>
									<tbody>
										<tr>
											<th>Company name</th>
											<td>J. P. Morgan</td>
										</tr>
										<tr>
											<th>Company size</th>
											<td>Very large (255k employees)</td>
										</tr>
										<tr>
											<th>Industry</th>
											<td>Investment Banking</td>
										</tr>
									</tbody>
								</Table>
								<h4>Demographic Info</h4>
								<Table
									dark
									bordered
									responsive
									className="theme-c-base-l0 theme-bg-base-d0"
								>
									<tbody>
										<tr>
											<th>Age</th>
											<td>40</td>
										</tr>
										<tr>
											<th>Gender</th>
											<td>Male</td>
										</tr>
										<tr>
											<th>Income</th>
											<td>£130,000</td>
										</tr>
									</tbody>
								</Table>
								<h4>Other Info</h4>
								<Table
									dark
									bordered
									responsive
									className="theme-c-base-l0 theme-bg-base-d0"
								>
									<tbody>
										<tr>
											<th>Personal quote</th>
											<td>
												&quot;It is a nuisance that accidents happen during
												online video meetings, I don’t want to be disturbed by
												unreliable cameras.&quot;
											</td>
										</tr>
										<tr>
											<th>Biography</th>
											<td>
												Richard has been working as a senior manager for 5
												years. He needs to hold regular meetings for his team
												members. When people are absent, he has to conduct
												online video meetings. However, Richard is not very
												happy with it: sometimes people complain about not able
												to see the slides, sometimes the camera cannot focus on
												the slides. And most of the time, he and his team
												members have to endure low resolution graphics and
												network delays.
											</td>
										</tr>
										<tr>
											<th>Professional goals</th>
											<td>
												<ul>
													<li>Become a better team leader.</li>
													<li>
														Present professional and efficient presentations.
													</li>
													<li>Have effective communication.</li>
												</ul>
											</td>
										</tr>
										<tr>
											<th>Motivators</th>
											<td>
												<ul>
													<li>
														Efficient and easy-to-use communication tools.
													</li>
													<li>A nice workspace for video meeting.</li>
													<li>
														New technology that boosts team members&apos;
														enthusiasm.
													</li>
												</ul>
											</td>
										</tr>
										<tr>
											<th>Challenges</th>
											<td>
												<ul>
													<li>
														Video meetings last too long because of accidents.
													</li>
													<li>Having trouble adjusting cameras.</li>
													<li>
														Bad graphics resolution and high network delay.
													</li>
												</ul>
											</td>
										</tr>
										<tr>
											<th>Sources of information</th>
											<td>
												<ul>
													<li>
														Richard reads Times in the tube on his way home.
													</li>
													<li>
														Richard reads twitter and BBC news on latest
														technology updates.
													</li>
													<li>Technology websites.</li>
												</ul>
											</td>
										</tr>
									</tbody>
								</Table>
							</CardBody>
						</Card>
					</CardDeck>
				</CardBody>
			</Card>
		</CardBody>
	</ContentCard>
);

export default RequirementAnalysis;
