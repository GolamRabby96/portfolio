import React from "react";
import "./NavBar.css";

const NavBar = () => {
	window.addEventListener("scroll", function () {
		let header = document.querySelector("header");
		header.classList.toggle("sticky", window.scrollY > 0);
	});

	return (
		<div>
			<header className="container-fluid navbarHeader">
				<ul>
					<li>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#HI">HELLO</a>
					</li>
					<li>
						<a href="#Ex_Edu">Ex_Edu</a>{" "}
					</li>
					<li>
						<a href="#SKILLS">SKILLS</a>{" "}
					</li>
					<li>
						<a href="#PORTFOLIO">PORTFOLIO</a>{" "}
					</li>
					<li>
						<a href="#TESTIMONIALS">TESTIMONIALS</a>{" "}
					</li>
					<li>
						<a href="#CONTACT">CONTACT</a>{" "}
					</li>
				</ul>
			{/* <a href="#" className="logo">
			Logo
		</a> */}
		</header>
		<div className="MobileNavBar">
			<nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						Navbar
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a className="nav-link" href="#HI">HELLO</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#Ex_Edu">
									Ex_Edu
								</a>{" "}
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#skilltest">
									SKILLS
								</a>{" "}
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#PORTFOLIO">
									PORTFOLIO
								</a>{" "}
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#TESTIMONIALS">
									TESTIMONIALS
								</a>{" "}
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#CONTACT">
									CONTACT
								</a>{" "}
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
		</div>
	);
};

export default NavBar;
