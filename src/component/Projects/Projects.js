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
			<div className="container projectTitle headText">
				<h2>Projects_</h2>
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
							React and Express project_{" "}
							<a
								rel="noreferrer"
								href="https://github.com/GolamRabby96/sixty-ninth-street"
								target="_blank"
							>
								github
							</a>
							||
							<a
								rel="noreferrer"
								href="https://sixty-ninth-street.web.app/"
								target="_blank"
							>
								website
							</a>
						</h2>
						<h5>Project Name: sixty-ninth-street</h5>
						<p>
							This is bassically a property selling / rent web site where a user can sell or buy property ...
						</p>
						<p className="text-danger">
							--------  This site is under development ---------
						</p>
						<h4>used stacks_</h4>
						<div className="usedStack">
							<button className="projectButton">javascript</button>
							<button className="projectButton">react js</button>
							<button className="projectButton">Redux</button>
							<button className="projectButton">express js</button>
							<button className="projectButton">mongodb</button>
							<button className="projectButton">mongoose</button>
							<button className="projectButton">bootstrap</button>
							<button className="projectButton">heroku</button>
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
							React and Express project_{" "}
							<a
								rel="noreferrer"
								href="https://github.com/GolamRabby96/Bike-world-client"
								target="_blank"
							>
								github
							</a>
							||
							<a
								rel="noreferrer"
								href="https://bike-world-6731e.web.app/"
								target="_blank"
							>
								website
							</a>
						</h2>
						<h5>Project Name: Bike World</h5>
						<p>
							This is react base project where user can make crud operation
							.User can book service and give feedback for their service. it has
							an authentication system where a user can create a account and
							login their account . General user and admin authentication .admin
							can access all features but user have access limit
						</p>
						<h4>used stacks_</h4>
						<div className="usedStack">
							<button className="projectButton">html5</button>
							<button className="projectButton">css3</button>
							<button className="projectButton">javascript</button>
							<button className="projectButton">react js</button>
							<button className="projectButton">react router</button>
							<button className="projectButton">express js</button>
							<button className="projectButton">mongodb</button>
							<button className="projectButton">bootstrap</button>
							<button className="projectButton">heroku</button>
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
							React project_{" "}
							<a
								rel="noreferrer"
								href="https://github.com/GolamRabby96/dream-house-client"
								target="_blank"
							>
								github
							</a>
							||
							<a
								rel="noreferrer"
								href="https://golamrabby96.github.io/Shoes_store/"
								target="_blank"
							>
								website
							</a>
						</h2>
						<h5>Project Name: Penguin Fashion </h5>
						<p>A single page 100% responsive mobo friendly website</p>
						<h4>used stacks_</h4>
						<div className="usedStack">
							<button className="projectButton">html5</button>
							<button className="projectButton">css3</button>
							<button className="projectButton">javascript</button>
							<button className="projectButton">react js</button>
							<button className="projectButton">bootstrap</button>
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
							React and Express project_{" "}
							<a
								href="https://github.com/GolamRabby96/dream-house-client"
								rel="noreferrer"
								target="_blank"
							>
								github
							</a>
							||
							<a
								href="https://dream-house-ecbff.web.app/"
								rel="noreferrer"
								target="_blank"
							>
								website
							</a>
						</h2>
						<h4>Project Name: Dreams-House</h4>
						<p>
							A single page accessories website where user can select any
							product, add to cart product, and checkout with information.Also
							have user login option where user can login with his gmail account
						</p>
						<h4>used stacks_</h4>
						<div className="usedStack">
							<button className="projectButton">html5</button>
							<button className="projectButton">css3</button>
							<button className="projectButton">javascript</button>
							<button className="projectButton">react js</button>
							<button className="projectButton">react router</button>
							<button className="projectButton">node js</button>
							<button className="projectButton">express js</button>
							<button className="projectButton">mongodb</button>
							<button className="projectButton">bootstrap</button>
							<button className="projectButton">firebase authentication</button>
							<button className="projectButton">heroku</button>
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
							Python and Django project_ <a href="https://github.com/GolamRabby96/BlogBD-Django" rel="noreferrer"
								target="_blank">github</a>||
							<a href="http://golamrabby96.pythonanywhere.com/" rel="noreferrer"
								target="_blank">website</a>
						</h2>
						<h4>Project Name: blog bd</h4>
						<p>
							This is python base django project where user can create a account , create post , have post CRUD opportunity , also have post like comment option. user can update user profile. a user can create a group , add member or remove member opportunity, also a user can post on group.this project have blood donate section where user can register, then a user can donate blood if any on needed also user can post and find blood.this site also have django admin panel where admin have super power to do anything with this data.
						</p>
						<h4>used stacks_</h4>
						<div id="TESTIMONIALS" className="usedStack">
							<button className="projectButton">html5</button>
							<button className="projectButton">css3</button>
							<button className="projectButton">javascript</button>
							<button className="projectButton">python</button>
							<button className="projectButton">django</button>
							<button className="projectButton">sqlite</button>
							<button className="projectButton">bootstrap</button>
						</div>
					</div>
				</div>
			</div>
			{/* ......................................... */}
		</div>
	);
};

export default Projects;
