import React from "react";
import "./Experience.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGraduationCap,
	faUserGraduate,
	faBookReader,
	faBookOpen,
	faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
// import {

// } from "@fortawesome/free-brands-svg-icons";

const Experience = () => {
	const cap = <FontAwesomeIcon icon={faGraduationCap} />;
	const graduation = <FontAwesomeIcon icon={faUserGraduate} />;
	const bookreader = <FontAwesomeIcon icon={faBookReader} />;
	const BookOpen = <FontAwesomeIcon icon={faBookOpen} />;
	const Briefcase = <FontAwesomeIcon icon={faBriefcase} />;
	return (
		<div className="eduExp shadow">
			<div className="container">
				<div className="row">
					<div class="my_skill_text">
						<h1>EXPERIENCE</h1>
					</div>
					<br />
					<br />
					<div class="container testclass">
						<div class="row">
							<div class="col">
								<div class="exprence_inside">
									<i>{Briefcase}</i>
									<span>Aug 2019-Continue</span>
									<h4>Netwoking Engineer at ADN Telecom</h4>
									<div class="sidebar"></div>
									<div class="bottombar"></div>
								</div>
							</div>
							<div class="col">
								<div class="exprence_inside">
									<i>{Briefcase}</i>
									<span>2018-Continue</span>
									<h4>Web Developer {'&'} Designer at Fiverr</h4>
									<div class="sidebar"></div>
									<div class="bottombar"></div>
								</div>
							</div>
						</div>
					</div>

					<div class="my_skill_text">
						<h1>EDUCATION </h1>
					</div>
					<br />
					<br />
					<div class="container testclass">
						<div class="row">
							<div class="col">
								<div class="exprence_inside">
									<i>{cap}</i>
									<span>2019</span>
									<h4>BSC in CSE At North Western Univarsity</h4>
									<div class="sidebar"></div>
									<div class="bottombar"></div>
								</div>
							</div>
							<div class="col">
								<div class="exprence_inside">
									<i>{graduation}</i>
									<span>Coming</span>
									<h4>Comming soon</h4>
									<div class="sidebar"></div>
									<div class="bottombar"></div>
								</div>
							</div>
						</div>
						<br /> <br />
						<div class="row">
							<div class="col">
								<div class="exprence_inside">
									<i>{bookreader}</i>
									<span>2011</span>
									<h4>SSC At Gangni Pilot Schoot Collage</h4>
									<div class="sidebar"></div>
									<div class="bottombar"></div>
								</div>
							</div>
							<div class="col">
								<div class="exprence_inside">
									<i>{BookOpen}</i>
									<span>2018-Continue</span>
									<h4>HSC At Khulna Model School Collage</h4>
									<div class="sidebar"></div>
									<div  class="bottombar"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
