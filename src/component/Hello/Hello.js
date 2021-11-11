import React from "react";
import "./Hello.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faDownload } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import resume from './Resume.pdf'

const Hello = () => {
    const download = <FontAwesomeIcon icon={faDownload} />;
	return (
		<div className="container HelloTop">
			<div className="row">
				<div className="col-md-10 offset-md-1 titleThree">
					<div className="helloHi">
						<h1>Hi_</h1>
						<p>
							I am Junior Web developer able to build a Web presence from the
							ground up - from concept, navigation, layout and programming to UX
							and SEO. Skilled at writing well-designed, testable and efficient
							code using current best practices in Web development. Fast
							learner, hard worker and team player who is proficient in an array
							of scripting languages and multimedia Web tools.
						</p>
						<div className="helloCv">
							<a href={resume} download="Resume.pdf"><button className="button"> {download}&nbsp;DOWNLOAD CV</button></a>
						</div>
					</div>
				</div>
			</div>
			<p id="Ex_Edu"></p>
		</div>
	);
};

export default Hello;
