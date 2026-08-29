import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faRobot, faCode } from '@fortawesome/free-solid-svg-icons';
import { faGit, faGithub } from '@fortawesome/free-brands-svg-icons';
import chrome from '../../image/tools/chorome.png'
import firebase from '../../image/tools/firebase.png'
import git from '../../image/tools/git.png'
import github from '../../image/tools/github.png'
import heroku from '../../image/tools/heroku.png'
import netlify from '../../image/tools/netlify.png'
import pyany from '../../image/tools/pyany.png'
import vs from '../../image/tools/vs.jpg'

const Tools = () => {
    const skills = [
        { name: 'Chrome Dev', icon: <img src={chrome} alt="Chrome Dev" /> },
        { name: 'Firebase', icon: <img src={firebase} alt="Firebase" /> },
        { name: 'Git', icon: <FontAwesomeIcon icon={faGit} /> },
        { name: 'Github', icon: <FontAwesomeIcon icon={faGithub} /> },
        { name: 'Heroku', icon: <img src={heroku} alt="Heroku" /> },
        { name: 'Netlify', icon: <img src={netlify} alt="Netlify" /> },
        { name: 'VS Code', icon: <img src={vs} alt="VS Code" /> },
        { name: 'PythonAnywhere', icon: <img src={pyany} alt="PythonAnywhere" /> },
        { name: 'Render', icon: <FontAwesomeIcon icon={faGlobe} /> },
        { name: 'AI', icon: <FontAwesomeIcon icon={faRobot} /> },
        { name: 'Cursor', icon: <FontAwesomeIcon icon={faCode} /> },
        { name: 'Copilot', icon: <FontAwesomeIcon icon={faCode} /> },
        { name: 'Kilo AI', icon: <FontAwesomeIcon icon={faRobot} /> },
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

export default Tools;