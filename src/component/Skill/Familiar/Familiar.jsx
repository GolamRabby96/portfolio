import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSass, faPhp } from '@fortawesome/free-brands-svg-icons';
import tailwind from '../../image/familer/tail.jpg';
import redux from '../../image/familer/redux.jpg';
import nativ from '../../image/familer/native.png';
import cs from '../../image/familer/cs.png';

const Familiar = () => {
    const skills = [
        { name: 'Tailwind', icon: <img src={tailwind} alt="Tailwind" /> },
        { name: 'Sass', icon: <FontAwesomeIcon icon={faSass} /> },
        { name: 'Redux', icon: <img src={redux} alt="Redux" /> },
        { name: 'Php', icon: <FontAwesomeIcon icon={faPhp} /> },
        { name: 'React Native', icon: <img src={nativ} alt="React Native" /> },
        { name: 'C#', icon: <img src={cs} alt="C#" /> },
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

export default Familiar;
