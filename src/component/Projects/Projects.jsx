import React from "react";
import "./Projects.css";
import projectsImg from "../image/projects/p.jpg";
import bike from "../image/website/bike.JPG";
import blog from "../image/website/blog.JPG";
import dream from "../image/website/dream.JPG";
import shoue from "../image/website/shoue.JPG";
import sixtynine from "../image/projects/69.JPG";

const Projects = () => {
	const projects = [
		{
			id: 1,
			title: "Full-Stack MERN Platform",
			name: "sixty-ninth-street",
			image: sixtynine,
			description: "A full-stack real estate platform built with React and Express. Users can list, browse, and manage property listings for sale or rent. Features include advanced search filters, property detail pages, and a responsive booking workflow.",
			techStack: ["JavaScript", "React", "Redux", "Express", "MongoDB", "Mongoose", "Bootstrap", "Heroku"],
			github: "https://github.com/GolamRabby96/sixty-ninth-street",
			live: "https://sixty-ninth-street.web.app/",
			status: "Work in Progress",
		},
		{
			id: 2,
			title: "Full-Stack Service Platform",
			name: "Bike World",
			image: bike,
			description: "A feature-rich bike service platform with complete CRUD operations. Users can book services, leave feedback, and manage their service history. The app includes role-based authentication for general users and admins.",
			techStack: ["HTML5", "CSS3", "JavaScript", "React", "React Router", "Express", "MongoDB", "Bootstrap", "Heroku"],
			github: "https://github.com/GolamRabby96/Bike-world-client",
			live: "https://bike-world-6731e.web.app/",
			status: null,
		},
		{
			id: 3,
			title: "Single Page E-Commerce",
			name: "Penguin Fashion",
			image: shoue,
			description: "A modern, fully responsive single-page e-commerce experience focused on footwear. Built with clean UI/UX principles, smooth animations, and mobile-first design for optimal shopping across all devices.",
			techStack: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap"],
			github: "https://github.com/GolamRabby96/dream-house-client",
			live: "https://golamrabby96.github.io/Shoes_store/",
			status: null,
		},
		{
			id: 4,
			title: "Full-Stack E-Commerce Platform",
			name: "Electro Hub",
			image: dream,
			description: "A complete e-commerce website where users can browse electronic products, add items to a shopping cart, and complete purchases. Includes secure Google authentication, user profiles, order management, and a streamlined checkout flow.",
			techStack: ["HTML5", "CSS3", "JavaScript", "React", "React Router", "Node", "Express", "MongoDB", "Bootstrap", "Firebase Auth", "Heroku"],
			github: "https://github.com/GolamRabby96/dream-house-client",
			live: "https://dream-house-ecbff.web.app/",
			status: null,
		},
		{
			id: 5,
			title: "Full-Stack Blogging Platform",
			name: "Blog BD",
			image: blog,
			description: "A Django-powered community platform where users can create accounts, publish blog posts, and engage through comments and likes. Includes group management, member roles, blood donation listings, and a full admin panel.",
			techStack: ["HTML5", "CSS3", "JavaScript", "Python", "Django", "SQLite", "Bootstrap"],
			github: "https://github.com/GolamRabby96/BlogBD-Django",
			live: "http://golamrabby96.pythonanywhere.com/",
			status: null,
		},
	];

	return (
		<div className="projectsSection">
			<div className="container">
				<div className="projectTitle headText text-center">
					<h2>Projects</h2>
				</div>
				<div className="projectsGrid">
					{projects.map((project) => (
						<div className="projectCard" key={project.id}>
							<div className="projectImageWrapper">
								<a href={project.live} target="_blank" rel="noreferrer">
									<img src={project.image} alt={project.name} />
								</a>
								<div className="projectImageOverlay">
									<a href={project.live} target="_blank" rel="noreferrer" className="projectOverlayBtn">
										Live Site
									</a>
								</div>
							</div>
							<div className="projectContent">
								<div className="projectHeader">
									<h3>{project.title}</h3>
									<div className="projectLinks">
										<a href={project.github} target="_blank" rel="noreferrer" className="projectLinkBtn">
											GitHub
										</a>
										<a href={project.live} target="_blank" rel="noreferrer" className="projectLinkBtn projectLinkBtnPrimary">
											Live Site
										</a>
									</div>
								</div>
								<h4 className="projectName">{project.name}</h4>
								<p className="projectDescription">{project.description}</p>
								{project.status && (
									<span className="projectStatusBadge">{project.status}</span>
								)}
								<div className="techStack">
									{project.techStack.map((tech, index) => (
										<span className="techBadge" key={index}>{tech}</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
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
	);
};

export default Projects;
