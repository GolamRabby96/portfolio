import React from 'react';
import java from '../../image/comfort/java.jpg';
import jq from '../../image/comfort/jq.png';
import meterial from '../../image/comfort/meterial.png';
import mysql from '../../image/comfort/mysql.png';
import django from '../../image/expert/django.png';
import mongoDb from '../../image/expert/mongodb.png';
import sqlite3 from '../../image/expert/sqlite.png';

const Comfort = () => {
    const skills = [
        { name: 'Java', icon: <img src={java} alt="Java" /> },
        { name: 'Jquery', icon: <img src={jq} alt="Jquery" /> },
        { name: 'Material Ui', icon: <img src={meterial} alt="Material Ui" /> },
        { name: 'MySQL', icon: <img src={mysql} alt="MySQL" /> },
        { name: 'Django', icon: <img src={django} alt="Django" /> },
        { name: 'MongoDb', icon: <img src={mongoDb} alt="MongoDb" /> },
        { name: 'Sqlite3', icon: <img src={sqlite3} alt="Sqlite3" /> },
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

export default Comfort;
