import React, { useState, useEffect } from "react";
import "./Hello.css";
import NavBar from "../NavBar/NavBar";
import myphoto from "../image/gr.jpg";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import {
	faFacebookSquare,
	faGithubSquare,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import resume from './Resume.pdf';

const Hero = () => {
	const [state, setstate] = useState({
		name: "MD. RABBY HASAN_",
		phone: "01624540092",
		email: "golamrabbynwu@gmail.com",
		address: "Meherpur, khulna, Bangladesh",
	});
	const [age, setAge] = useState("");

	useEffect(() => {
		const calculateAge = (birthDate) => {
			const [day, month, year] = birthDate.split("-").map(Number);
			const today = new Date();
			const birth = new Date(year, month - 1, day);
			let calculatedAge = today.getFullYear() - birth.getFullYear();
			const monthDiff = today.getMonth() - birth.getMonth();
			if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
				calculatedAge--;
			}
			return calculatedAge;
		};
		setAge(calculateAge("03-06-1996"));
	}, []);

	const download = <FontAwesomeIcon icon={faDownload} />;
	const facebook = <FontAwesomeIcon icon={faFacebookSquare} />;
	const github = <FontAwesomeIcon icon={faGithubSquare} />;
	const linkedin = <FontAwesomeIcon icon={faLinkedin} />;

	return (
		<div className="heroSection">
			<NavBar />
			<div className="container heroContainer">
				<div className="row align-items-center heroRow">
					<div className="col-lg-5 heroLeft">
						<div className="heroProfileCard">
							<div className="heroImageWrapper">
								<img className="heroImage" src={myphoto} alt="MD. Rabby Hasan" />
							</div>
							<div className="heroInfoCardInner">
								<div className="heroInfoItem">
									<span className="heroInfoLabel">Age:</span>
									<span className="heroInfoValue">{age}</span>
								</div>
								<div className="heroInfoItem">
									<span className="heroInfoLabel">phone:</span>
									<span className="heroInfoValue">{state.phone}</span>
								</div>
								<div className="heroInfoItem">
									<span className="heroInfoLabel">email:</span>
									<span className="heroInfoValue">{state.email}</span>
								</div>
								<div className="heroInfoItem">
									<span className="heroInfoLabel">address:</span>
									<span className="heroInfoValue">{state.address}</span>
								</div>
								<div className="heroSocials">
									<a className="heroSocialLink" rel="noreferrer" target="_blank" href="https://github.com/GolamRabby96">
										{github}
									</a>
									<a className="heroSocialLink" rel="noreferrer" target="_blank" href="https://www.facebook.com/golamrabby07">
										{facebook}
									</a>
									<a className="heroSocialLink" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/golam-rabby-10353a161/">
										{linkedin}
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-7 heroRight">
						<div className="heroGreeting">
							<span className="heroGreetingText">Hello, I'm</span>
						</div>
						<h1 className="heroTitle">{state.name}</h1>
						<div className="heroTypewriter">
							<Typewriter
								options={{
									autoStart: true,
									loop: true,
									delay: 40,
									strings: [
										"I'm a MERN Developer",
										"I'm a Front-End React Developer",
										"I'm a Node Js Developer",
										"I'm a MongoDB Developer",
										"I'm a Express Developer",
										"I'm a Python Django Developer",
									],
								}}
							/>
						</div>
						<p className="heroDescription">
							I specialize in architecting modern web applications using the MERN stack (React, Node.js, Express, MongoDB) integrated with cutting-edge AI capabilities. From intuitive UI/UX design and responsive front-end layouts to scalable back-end architecture and SEO optimization, I build high-performance digital solutions from the ground up.
						</p>
						<p className="heroDescription">
							I write clean, testable, and efficient code following industry best practices—leveraging AI tools and modern web technologies to deliver smart, user-centric experiences.
						</p>
						<div className="heroCtas">
							<a href={resume} download="Resume.pdf" className="heroCtaPrimary">
								{download}&nbsp;DOWNLOAD CV
							</a>
							<a href="#CONTACT" className="heroCtaSecondary">
								Contact Me
							</a>
						</div>
					</div>
				</div>
			</div>
			<p id="HI"></p>
		</div>
	);
};

export default Hero;
