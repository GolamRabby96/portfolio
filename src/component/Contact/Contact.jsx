import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookSquare,
	faGithubSquare,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
	const facebook = <FontAwesomeIcon icon={faFacebookSquare} />;
	const github = <FontAwesomeIcon icon={faGithubSquare} />;
	const linkedin = <FontAwesomeIcon icon={faLinkedin} />;

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const message = form.message.value;

		const mailtoLink = `mailto:golamrabbynwu@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(email)}&body=${encodeURIComponent(message)}`;
		window.location.href = mailtoLink;
	};

	return (
		<div id="CONTACT" className="contactSection">
			<div className="container contacttitle headText">
				<h2>GET IN TOUCH</h2>
				<p className="contactSubtitle">Let's connect and create something amazing together</p>
			</div>
			<div className="container">
				<div className="row g-4">
					<div className="col-md-5">
						<div className="contactInfoCard shadow">
							<div className="infoIcon">
								<i className="bi bi-envelope"></i>
							</div>
							<h4>Don't be shy !</h4>
							<p>
								Feel free to get in touch with me. I am always open to
								discussing new projects, creative ideas or opportunities to be
								part of your visions.
							</p>
							<div className="socialLinks">
								<a
									className="socialIcon"
									rel="noreferrer"
									target="_blank"
									href="https://github.com/GolamRabby96"
								>
									{github}
								</a>
								<a
									className="socialIcon"
									rel="noreferrer"
									target="_blank"
									href="https://www.facebook.com/golamrabby07"
								>
									{facebook}
								</a>
								<a
									className="socialIcon"
									rel="noreferrer"
									target="_blank"
									href="https://www.linkedin.com/in/golam-rabby-10353a161/"
								>
									{linkedin}
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-7">
						<div className="contactFormCard shadow p-4">
							<form onSubmit={handleSubmit}>
								<div className="mb-3">
									<label htmlFor="foremail" className="form-label">
										Your email
									</label>
									<input
										className="form-control customInput"
										name="email"
										type="email"
										id="foremail"
										placeholder="Enter your email"
										required
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="forSubject" className="form-label">
										Your message
									</label>
									<textarea
										className="form-control customInput"
										name="message"
										placeholder="Write your message here..."
										required
										rows="5"
									/>
								</div>
								<div className="mb-3">
									<button
										className="btn submitButton"
										type="submit"
									>
										Send Message
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className="contactBottomSpace"></div>
		</div>
	);
};

export default Contact;
