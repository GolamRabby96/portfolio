import React, { useState } from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Header from "../Header/Header";
import Hello from "../Hello/Hello";
import Experience from "../Experience/Experience";
import Skill from "../Skill/Skill";
import Projects from "../Projects/Projects"
import UserReviews from "../UserReviews/UserReviews";
import Contact from "../Contact/Contact"

const Home = () => {

	return (
		<div className="">
			<Header />
            <Hello/>
			<Experience/>
			<Skill/>
			<Projects/>
			<UserReviews/>
			<Contact/>
		</div>
	);
};

export default Home;
