import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faHtml5, faCss3, faPython, faBootstrap, faReact, faNode, faGitAlt, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';
import clanguage from '../../image/expert/c.png';
import cpp from '../../image/expert/cpp.png';
import es6 from '../../image/expert/es6.jpeg';
import reactRouter from '../../image/expert/react router.png';
import express from '../../image/expert/express.png';

const Expert = () => {
    const skills = [
        { name: 'C', icon: <img src={clanguage} alt="C" /> },
        { name: 'C++', icon: <img src={cpp} alt="C++" /> },
        { name: 'Python', icon: <FontAwesomeIcon icon={faPython} /> },
        { name: 'HTML5', icon: <FontAwesomeIcon icon={faHtml5} /> },
        { name: 'CSS3', icon: <FontAwesomeIcon icon={faCss3} /> },
        { name: 'JavaScript', icon: <FontAwesomeIcon icon={faJs} /> },
        { name: 'ES6', icon: <img src={es6} alt="ES6" /> },
        { name: 'Bootstrap', icon: <FontAwesomeIcon icon={faBootstrap} /> },
        { name: 'React js', icon: <FontAwesomeIcon icon={faReact} /> },
        { name: 'ReactRouter', icon: <img src={reactRouter} alt="ReactRouter" /> },
        { name: 'Node Js', icon: <FontAwesomeIcon icon={faNode} /> },
        { name: 'Express Js', icon: <img src={express} alt="Express" /> },
    ];

    return (
        <div className="skill-grid">
            {skills.map((skill, index) => (
                <div className="skill-card" key={index}>
                    <div className="skill-icon">{skill.icon}</div>
                    <span className="skill-name">{skill.name}</span>
                </div>
            ))}
        </div>
    );
};

export default Expert;
