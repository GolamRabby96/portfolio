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
        <div id="SKILLS" className="container-fluid py-5">
            <div className="container">
                <div className="row skillRow">
                    <div className="col-12 headText text-center">
                        <h2>General Skill_</h2>
                    </div>
                    <div className="col-12 col-md-4 skillColFour mb-4 mb-md-0">
                        <div className="skillSideBar">
                            <div className={`expert shadow ${skill.expert ? 'active' : ''}`}>
                                <p onClick={() => handleSkill("expert")}>
                                    <FontAwesomeIcon icon={faStar} /> Expert
                                </p>
                            </div>
                            <div className={`expert shadow ${skill.comfort ? 'active' : ''}`}>
                                <p onClick={() => handleSkill("comfort")}>
                                    <FontAwesomeIcon icon={faThumbsUp} /> Comfort
                                </p>
                            </div>
                            <div className={`expert shadow ${skill.familiar ? 'active' : ''}`}>
                                <p onClick={() => handleSkill("familiar")}>
                                    <FontAwesomeIcon icon={faEye} /> Familiar
                                </p>
                            </div>
                            <div className={`expert shadow ${skill.tools ? 'active' : ''}`}>
                                <p onClick={() => handleSkill("tools")}>
                                    <FontAwesomeIcon icon={faWrench} /> Tools
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 mb-5 mt-4">
                        <div className="rightEight  p-3">
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
