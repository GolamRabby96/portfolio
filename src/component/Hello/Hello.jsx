import React from "react";
import "./Hello.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import resume from './Resume.pdf';

const Hello = () => {
    const download = <FontAwesomeIcon icon={faDownload} />;
	return (
		<div className="HelloTop">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-12">
						<div className="helloContent">
							<div className="greeting">
								<span className="greetingText">Hello, I'm</span>
							</div>
							<h2 className="roleTitle">Full-Stack MERN & AI-Driven Developer</h2>
							<p className="description">
								I specialize in architecting modern web applications using the MERN stack (React, Node.js, Express, MongoDB) integrated with cutting-edge AI capabilities. From intuitive UI/UX design and responsive front-end layouts to scalable back-end architecture and SEO optimization, I build high-performance digital solutions from the ground up.
							</p>
							<p className="description">
								I write clean, testable, and efficient code following industry best practices—leveraging AI tools and modern web technologies to deliver smart, user-centric experiences.
							</p>
							<div className="ctaButton">
								<a href={resume} download="Resume.pdf">
									<button className="button">
										{download}&nbsp;DOWNLOAD CV
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<p id="Ex_Edu"></p>
		</div>
	);
};

export default Hello;
