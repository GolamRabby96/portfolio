import React from "react";
import "./Home.css";
import Hero from "../Hello/Hello";
import Experience from "../Experience/Experience";
import Skill from "../Skill/Skill";
import Projects from "../Projects/Projects"
import UserReviews from "../UserReviews/UserReviews";
import Contact from "../Contact/Contact"

const Home = () => {
	return (
		<div className="homeWrapper">
			<Hero />
			<Experience/>
			<Skill/>
			<Projects/>
			<UserReviews/>
			<Contact/>
		</div>
	);
};

export default Home;
