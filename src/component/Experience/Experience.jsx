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
					<div className="my_skill_text">
						<h1>EXPERIENCE</h1>
					</div>
					<br />
					<br />
					<div className="container testclass">
						<div className="row">
							<div className="col-12 col-md-6 mb-5">
								<div className="exprence_inside">
									<i>{Briefcase}</i>
									<span>Aug 2019-Continue</span>
									<h4>Sr. Engineer at ADN Telecom</h4>
									<div className="sidebar"></div>
									<div className="bottombar"></div>
								</div>
							</div>
							<div className="col-12 col-md-6 mb-5">
								<div className="exprence_inside">
									<i>{Briefcase}</i>
									<span>2018-Continue</span>
									<h4>
										MERN Developer at Fiverr</h4>
									<div className="sidebar"></div>
									<div className="bottombar"></div>
								</div>
							</div>
							<div className="col-12 col-md-6 mb-5">
								<div className="exprence_inside">
									<i>{Briefcase}</i>
									<span>2026</span>
									<h4>Sr. Software Engineer at Gogentik</h4>
									<div className="sidebar"></div>
									<div className="bottombar"></div>
								</div>
							</div>
						</div>
					</div>

					<div className="my_skill_text">
						<h1>EDUCATION </h1>
					</div>
					<br />
					<br />
					<div className="container testclass">
						<div className="row">
							<div className="col-12 col-md-6 mb-5">
								<div className="exprence_inside">
									<i>{cap}</i>
									<span>2019</span>
									<h4>BSC in CSE At North Western Univarsity</h4>
									<div className="sidebar"></div>
									<div className="bottombar"></div>
								</div>
							</div>
							<div className="col-12 col-md-6 mb-5">
								<div className="exprence_inside">
									<i>{graduation}</i>
									<span>Coming</span>
									<h4>Comming soon</h4>
									<div className="sidebar"></div>
									<div className="bottombar"></div>
								</div>
							</div>
						</div>
						<br /> <br />
						<div className="row">
							<div className="col-12 col-md-6 mb-5">
								<div className="exprence_inside">
									<i>{bookreader}</i>
									<span>2011</span>
									<h4>SSC At Gangni Pilot Schoot Collage</h4>
									<div className="sidebar"></div>
									<div className="bottombar"></div>
								</div>
							</div>
							<div className="col-12 col-md-6 mb-5">
								<div className="exprence_inside">
									<i>{BookOpen}</i>
									<span>2018-Continue</span>
									<h4>HSC At Khulna Model School Collage</h4>
									<div className="sidebar"></div>
									<div className="bottombar"></div>
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
