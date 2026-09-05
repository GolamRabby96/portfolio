import React, { useState } from 'react';
import Comfort from './Comfort/Comfort';
import Expert from './Expert/Expert';
import Familiar from './Familiar/Familiar';
import "./Skill.css"
import Tools from './Tools/Tools';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faThumbsUp, faEye, faWrench } from '@fortawesome/free-solid-svg-icons';

const Skill = () => {
    const [skill, setSkill] = useState({
        expert: true,
        comfort: false,
        familiar: false,
        tools: false
    })

    const handleSkill = (text) => {
        setSkill({
            expert: text === 'expert',
            comfort: text === 'comfort',
            familiar: text === 'familiar',
            tools: text === 'tools'
        })
    }

    return (
        <div id="SKILLS" className="container-fluid skillSection">
            <div className="container">
                <div className="row skillRow">
                    <div className="col-12 headText text-center">
                        <h2>General Skill</h2>
                    </div>
                    <div className="col-12 skillPillNav">
                        <button
                            className={`skillPill ${skill.expert ? 'active' : ''}`}
                            onClick={() => handleSkill("expert")}
                        >
                            <FontAwesomeIcon icon={faStar} /> Expert
                        </button>
                        <button
                            className={`skillPill ${skill.comfort ? 'active' : ''}`}
                            onClick={() => handleSkill("comfort")}
                        >
                            <FontAwesomeIcon icon={faThumbsUp} /> Comfort
                        </button>
                        <button
                            className={`skillPill ${skill.familiar ? 'active' : ''}`}
                            onClick={() => handleSkill("familiar")}
                        >
                            <FontAwesomeIcon icon={faEye} /> Familiar
                        </button>
                        <button
                            className={`skillPill ${skill.tools ? 'active' : ''}`}
                            onClick={() => handleSkill("tools")}
                        >
                            <FontAwesomeIcon icon={faWrench} /> Tools
                        </button>
                    </div>
                    <div className="col-12 mb-5 mt-4">
                        <div className="rightEight p-3">
                            {skill.expert && <Expert />}
                            {skill.comfort && <Comfort />}
                            {skill.familiar && <Familiar />}
                            {skill.tools && <Tools />}
                        </div>
                    </div>
                </div>
                <hr id="PORTFOLIO" />
            </div>
        </div>
    );
};

export default Skill;
