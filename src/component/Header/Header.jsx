import React, { useState, useEffect } from "react";
import "./Header.css";
import NavBar from "../NavBar/NavBar";
import myphoto from "../image/gr.jpg";
import Typewriter from "typewriter-effect";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import {
	faFacebookSquare,
	faGithubSquare,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
	const facebook = <FontAwesomeIcon icon={faFacebookSquare} />;
	const github = <FontAwesomeIcon icon={faGithubSquare} />;
	const linkedin = <FontAwesomeIcon icon={faLinkedin} />;
	const [state, setstate] = useState({
		name: "MD. RABBY HASAN_",
		phone: "01624540092.",
		email: "golamrabbynwu@gmail.com.",
		address: "Meherpur,khulna,Bangladesh.",
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
	return (
		<div>
			<NavBar />
			<div className="container-fluid headerAll">
				<div className="seperator"></div>
				<div className="container headerBody">
					<div className="row">
						<div className=" col-sm-12 col-md-4   colfour">
							<div className="myphoto">
								<img className="profilePhoto shadow" src={myphoto} alt="" />
							</div>
						</div>
						<div className="col-sm-12 col-md-8 colEight">
							<div className="home">
								<div className="home-intro">
									<h2>
										<div className="title">{state.name}</div>
									</h2>
									<div className="text titleThree">
										<Typewriter
											options={{
												autoStart: true,
												loop: true,
												delay: 40,
												strings: [
													"I'm a MERN Developer",
													"I'm a Font-End React Developer",
													"I'm a Node Js Developer",
													"I'm a MongoDB Developer",
													"I'm a Express Developer",
													"I'm a Python Django Developer",
												],
											}}
										/>
									</div>
									<div>
									<p className="titleTwo">
										<span className="infoSpan titleThree">Age:</span>{" "}
										{age}
									</p>
										<p className="titleTwo">
											<span className="infoSpan titleThree">phone:</span>&nbsp;
											&nbsp;&nbsp;&nbsp;&nbsp;{state.phone}
										</p>
										<p className="titleTwo">
											<span className="infoSpan titleThree">email:</span>{" "}
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {state.email}
										</p>
										<p className="titleTwo">
											<span className="infoSpan titleThree">address:</span>{" "}
											&nbsp;&nbsp;{state.address}
										</p>
									</div>
									<div>
										<a className="linkicon" rel="noreferrer" target="_blank" href="https://github.com/GolamRabby96">
											{github}
										</a>
										<a className="linkicon" rel="noreferrer" target="_blank" href="https://www.facebook.com/golamrabby07">
											{facebook}
										</a>
										<a className="linkicon" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/golam-rabby-10353a161/">
											{linkedin}
										</a>
									</div>
								</div>
								<p id="HI"></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;