import React, { useState } from 'react';
import Comfort from './Comfort/Comfort';
import Expert from './Expert/Expert';
import Familiar from './Familiar/Familiar';
import "./Skill.css"
import Tools from './Tools/Tools';
const Skill = () => {
    const [skill, setSkill] = useState({
        expert: true,
        comfort:false,
        familiar:false,
        tools:false
    })
    const handleSkill = (text) => {
        console.log(text)
        if(text === 'expert'){
            setSkill({
                expert: true,
                comfort:false,
                familiar:false,
                tools:false
            })
        }
        if(text === 'comfort'){
            setSkill({
                expert: false,
                comfort:true,
                familiar:false,
                tools:false
            })
        }
        if(text === 'familiar'){
            setSkill({
                expert: false,
                comfort:false,
                familiar:true,
                tools:false
            })
        }
        if(text === 'tools'){
            setSkill({
                expert: false,
                comfort:false,
                familiar:false,
                tools:true
            })
        }
    }
    return (
        <div id="SKILLS" className="container-fluid">
            <div className="container">
                <div className="row skillRow">
                    <div className="col-md-12 headText">
                        <h2>General Skill_</h2>
                    </div>
                    <div className="col-md-4 skillColFour ">
                        <div  className="skillSideBar ">
                            <div className="expert shadow">
                                <p onClick={()=>handleSkill("expert")}>Expert</p>
                            </div>
                            <div className="expert shadow">
                                <p onClick={()=>handleSkill("comfort")}>Comfort</p>
                            </div>
                            <div className="expert shadow">
                                <p onClick={()=>handleSkill("familiar")}>Familiar</p>
                            </div>
                            <div className="expert shadow">
                                <p onClick={()=>handleSkill("tools")}>Tools</p>
                            </div>
                        </div>
                    </div>
                    <div  className="col-md-8">
                        <div className="rightEight shadow">
                            {skill.expert && <Expert/> }
                            {skill.comfort && <Comfort/> }
                            {skill.familiar && <Familiar/> }
                            {skill.tools && <Tools/> }
                        </div>
                    </div>
                </div>
                <hr id="PORTFOLIO" />
            </div>
        </div>
    );
};

export default Skill;
