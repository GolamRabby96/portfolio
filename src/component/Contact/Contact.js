import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import {
	faFacebookSquare,
	faGithubSquare,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import emailjs from "emailjs-com";

const Contact = () => {
	const facebook = <FontAwesomeIcon icon={faFacebookSquare} />;
	const github = <FontAwesomeIcon icon={faGithubSquare} />;
	const linkedin = <FontAwesomeIcon icon={faLinkedin} />;

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_z1mbyro",
				"template_nw0gqwq",
				e.target,
				"user_gG4bd9HjAiplceoyYckaq"
			)
			.then(
				(result) => {
					window.alert("Thank you for mailing me.");
				},
				(error) => {
					//   console.log(error.text);
				}
			);
		e.target.reset();
	};

	return (
		<div id="CONTACT" className="">
			<div className="container contacttitle headText">
				<h2>GET IN TOUCH</h2>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md-6 pb-5">
						<div className="shadow p-5">
							<h4>Don't be shy !</h4>
							<p>
								Feel free to get in touch with me. I am always open to
								discussing new projects, creative ideas or opportunities to be
								part of your visions.
							</p>
							<div>
								<a
									className="linkiconContact"
									rel="noreferrer"
									target="_blank"
									href="https://github.com/GolamRabby96"
								>
									{github}
								</a>
								<a
									className="linkiconContact"
									rel="noreferrer"
									target="_blank"
									href="https://www.facebook.com/razznisi07"
								>
									{facebook}
								</a>
								<a
									className="linkiconContact"
									rel="noreferrer"
									target="_blank"
									href="https://www.linkedin.com/in/golam-rabby-10353a161/"
								>
									{linkedin}
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="contactForm">
							<form onSubmit={sendEmail}>
								<div class="mb-3">
									<label for="foremail" class="form-label">
										Email address
									</label>
									<input
										class="form-control"
										name="email"
										type="email"
										id="foremail"
										required
									/>
								</div>
								<div class="mb-3">
									<label for="forSubject" class="form-label">
										Your valuable words
									</label>
									<textarea
										class="form-control"
										name="message"
										type="textarea"
										required
									/>
								</div>
								<div class="mb-3">
									<button
										className="container btn btn-sm btn-info"
										type="submit"
									>
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
