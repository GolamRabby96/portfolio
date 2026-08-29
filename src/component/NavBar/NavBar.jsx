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
				{/* <a href="#" class="logo">
				Logo
			</a> */}
			</header>
			<div className="MobileNavBar">
				<nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
					<div class="container-fluid">
						<a class="navbar-brand" href="#">
							Navbar
						</a>
						<button
							class="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse" id="navbarSupportedContent">
							<ul class="navbar-nav me-auto mb-2 mb-lg-0">
								<li class="nav-item">
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a class="nav-link" href="#HI">HELLO</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#Ex_Edu">
										Ex_Edu
									</a>{" "}
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#skilltest">
										SKILLS
									</a>{" "}
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#PORTFOLIO">
										PORTFOLIO
									</a>{" "}
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#TESTIMONIALS">
										TESTIMONIALS
									</a>{" "}
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#CONTACT">
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
