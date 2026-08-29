import React from "react";
import "./Projects.css";
import projectsImg from "../image/projects/p.jpg";
import bike from "../image/website/bike.JPG";
import blog from "../image/website/blog.JPG";
import dream from "../image/website/dream.JPG";
import shoue from "../image/website/shoue.JPG";
import sixtynine from "../image/projects/69.JPG";

const Projects = () => {
	return (
		<div className="container">
			<div className="container projectTitle headText text-center">
				<h2>Projects</h2>
			</div>
			<div className="row shadow projectRow">
				<div className="col-md-4 ">
					<div className="projectImage shadow">
						<a
							rel="noreferrer"
							href="https://sixty-ninth-street.web.app/"
							target="_blank"
						>
							<img src={sixtynine} alt="" />
						</a>
						<div className="projectImageHover">
							<a
								rel="noreferrer"
								href="https://sixty-ninth-street.web.app/"
								target="_blank"
							>
								Live View
							</a>
						</div>
					</div>
				</div>
				<div className="col-md-8 ">
					<div className="projectDescription projectColEdit">
						<h2>
							Full-Stack MERN Platform_{" "}
							<a
								rel="noreferrer"
								href="https://github.com/GolamRabby96/sixty-ninth-street"
								target="_blank"
							>
								GitHub
							</a>
							{" / "}
							<a
								rel="noreferrer"
								href="https://sixty-ninth-street.web.app/"
								target="_blank"
							>
								Live Site
							</a>
						</h2>
						<h5>sixty-ninth-street</h5>
						<p>
							A full-stack real estate platform built with React and Express.
							Users can list, browse, and manage property listings for sale
							or rent. Features include advanced search filters, property
							detail pages, and a responsive booking workflow.
						</p>
						<p className="text-danger">
							<span className="badge bg-warning text-dark">Work in Progress</span>
						</p>
						<h4>Tech Stack</h4>
						<div className="usedStack">
							<button className="projectButton">JavaScript</button>
							<button className="projectButton">React</button>
							<button className="projectButton">Redux</button>
							<button className="projectButton">Express</button>
							<button className="projectButton">MongoDB</button>
							<button className="projectButton">Mongoose</button>
							<button className="projectButton">Bootstrap</button>
							<button className="projectButton">Heroku</button>
						</div>
					</div>
				</div>
			</div>
			<div className="row shadow projectRow">
				<div className="col-md-4 ">
					<div className="projectImage shadow">
						<a
							rel="noreferrer"
							href="https://bike-world-6731e.web.app/"
							target="_blank"
						>
							<img src={bike} alt="" />
						</a>
						<div className="projectImageHover">
							<a
								rel="noreferrer"
								href="https://bike-world-6731e.web.app/"
								target="_blank"
							>
								Live View
							</a>
						</div>
					</div>
				</div>
				<div className="col-md-8 ">
					<div className="projectDescription projectColEdit">
						<h2>
							Full-Stack Service Platform_{" "}
							<a
								rel="noreferrer"
								href="https://github.com/GolamRabby96/Bike-world-client"
								target="_blank"
							>
								GitHub
							</a>
							{" / "}
							<a
								rel="noreferrer"
								href="https://bike-world-6731e.web.app/"
								target="_blank"
							>
								Live Site
							</a>
						</h2>
						<h5>Bike World</h5>
						<p>
							A feature-rich bike service platform with complete CRUD operations.
							Users can book services, leave feedback, and manage their service
							history. The app includes role-based authentication for general users
							and admins, with admin privileges to manage all platform data.
						</p>
						<h4>Tech Stack</h4>
						<div className="usedStack">
							<button className="projectButton">HTML5</button>
							<button className="projectButton">CSS3</button>
							<button className="projectButton">JavaScript</button>
							<button className="projectButton">React</button>
							<button className="projectButton">React Router</button>
							<button className="projectButton">Express</button>
							<button className="projectButton">MongoDB</button>
							<button className="projectButton">Bootstrap</button>
							<button className="projectButton">Heroku</button>
						</div>
					</div>
				</div>
			</div>
			{/* ......................................... */}
			<div className="row shadow projectRow">
				<div className="col-md-4 ">
					<div className="projectImage shadow">
						<a href="">
							<img src={shoue} alt="" />
						</a>
						<div className="projectImageHover">
							<a
								rel="noreferrer"
								href="https://golamrabby96.github.io/Shoes_store/"
								target="_blank"
							>
								Live View
							</a>
						</div>
					</div>
				</div>
				<div className="col-md-8 ">
					<div className="projectDescription projectColEdit">
						<h2>
							Single Page E-Commerce_{" "}
							<a
								rel="noreferrer"
								href="https://github.com/GolamRabby96/dream-house-client"
								target="_blank"
							>
								GitHub
							</a>
							{" / "}
							<a
								rel="noreferrer"
								href="https://golamrabby96.github.io/Shoes_store/"
								target="_blank"
							>
								Live Site
							</a>
						</h2>
						<h5>Penguin Fashion</h5>
						<p>
							A modern, fully responsive single-page e-commerce experience focused
							on footwear. Built with clean UI/UX principles, smooth animations,
							and mobile-first design for optimal shopping across all devices.
						</p>
						<h4>Tech Stack</h4>
						<div className="usedStack">
							<button className="projectButton">HTML5</button>
							<button className="projectButton">CSS3</button>
							<button className="projectButton">JavaScript</button>
							<button className="projectButton">React</button>
							<button className="projectButton">Bootstrap</button>
						</div>
					</div>
				</div>
			</div>
			{/* ......................................... */}
			<div className="row shadow projectRow">
				<div className="col-md-4 ">
					<div className="projectImage shadow">
						<a href="">
							<img src={dream} alt="" />
						</a>
						<div className="projectImageHover">
							<a
								href="https://dream-house-ecbff.web.app/"
								rel="noreferrer"
								target="_blank"
							>
								Live View
							</a>
						</div>
					</div>
				</div>
				<div className="col-md-8 ">
					<div className="projectDescription projectColEdit">
						<h2>
							Full-Stack E-Commerce Platform_{" "}
							<a
								href="https://github.com/GolamRabby96/dream-house-client"
								rel="noreferrer"
								target="_blank"
							>
								GitHub
							</a>
							{" / "}
							<a
								href="https://dream-house-ecbff.web.app/"
								rel="noreferrer"
								target="_blank"
							>
								Live Site
							</a>
						</h2>
						<h4>Electro Hub</h4>
						<p>
							A complete e-commerce website where users can browse electronic products,
							add items to a shopping cart, and complete purchases. Includes secure
							Google authentication, user profiles, order management, and a
							streamlined checkout flow for a smooth shopping experience.
						</p>
						<h4>Tech Stack</h4>
						<div className="usedStack">
							<button className="projectButton">HTML5</button>
							<button className="projectButton">CSS3</button>
							<button className="projectButton">JavaScript</button>
							<button className="projectButton">React</button>
							<button className="projectButton">React Router</button>
							<button className="projectButton">Node</button>
							<button className="projectButton">Express</button>
							<button className="projectButton">MongoDB</button>
							<button className="projectButton">Bootstrap</button>
							<button className="projectButton">Firebase Auth</button>
							<button className="projectButton">Heroku</button>
						</div>
					</div>
				</div>
			</div>
			{/* ......................................... */}
			<div className="row shadow projectRow">
				<div className="col-md-4 ">
					<div className="projectImage shadow">
						<a href="">
							<img src={blog} alt="" />
						</a>
						<div className="projectImageHover">
							<a href="http://golamrabby96.pythonanywhere.com/" rel="noreferrer"
								target="_blank">Live View</a>
						</div>
					</div>
				</div>
				<div className="col-md-8 ">
					<div className="projectDescription projectColEdit">
						<h2>
							Full-Stack Blogging Platform_{" "}
							<a href="https://github.com/GolamRabby96/BlogBD-Django" rel="noreferrer"
								target="_blank">GitHub</a>
							{" / "}
							<a href="http://golamrabby96.pythonanywhere.com/" rel="noreferrer"
								target="_blank">Live Site</a>
						</h2>
						<h4>Blog BD</h4>
						<p>
							A Django-powered community platform where users can create accounts,
							publish blog posts, and engage through comments and likes. Includes
							group management, member roles, blood donation listings, and a full
							admin panel for content and user moderation.
						</p>
						<h4>Tech Stack</h4>
						<div id="TESTIMONIALS" className="usedStack">
							<button className="projectButton">HTML5</button>
							<button className="projectButton">CSS3</button>
							<button className="projectButton">JavaScript</button>
							<button className="projectButton">Python</button>
							<button className="projectButton">Django</button>
							<button className="projectButton">SQLite</button>
							<button className="projectButton">Bootstrap</button>
						</div>
					</div>
				</div>
			</div>
		{/* ......................................... */}
		<div className="row projectRow">
			<div className="col-12">
				<div className="projectsNote shadow">
					<p>
						<strong>Note:</strong> Some live demos may be temporarily unavailable or show errors.
						Hosting providers such as MongoDB, Render, and Heroku occasionally update their
						terms, pricing, or service policies, which can affect app availability.
						I am continuously working to migrate and maintain these projects on reliable platforms.
					</p>
				</div>
			</div>
		</div>
		{/* ......................................... */}
	</div>
	);
};

export default Projects;