import React, { useState } from "react";
import "./Header.css";
import NavBar from "../NavBar/NavBar";
import myphoto from "../image/me1.jpg";
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
		age: "23.",
		phone: "01624540092.",
		email: "golamrabbynwu@gmail.com.",
		address: "Meherpur,khulna,Bangladesh.",
	});
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
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											{state.age}{" "}
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
										<a className="linkicon" rel="noreferrer" target="_blank" href="https://www.facebook.com/razznisi07">
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