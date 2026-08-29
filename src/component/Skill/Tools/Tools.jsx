import React from 'react';
import chrome from '../../image/tools/chorome.png'
import firebase from '../../image/tools/firebase.png'
import git from '../../image/tools/git.png'
import github from '../../image/tools/github.png'
import heroku from '../../image/tools/heroku.png'
import pyany from '../../image/tools/pyany.png'
import vs from '../../image/tools/vs.jpg'

const Tools = () => {
    return (
        <div className="rightExpert">
            <div className="rightExLogo shadow">
                <img src={chrome} alt="" />
                <p>chrome Dev</p>
            </div>
            <div className="rightExLogo">
                <img src={firebase} alt="" />
                <p>Firebase</p>
            </div>
            <div className="rightExLogo">
                <img src={git} alt="" />
                <p>Git</p>
            </div>
            <div className="rightExLogo">
                <img src={github} alt="" />
                <p>Github</p>
            </div>
            <div className="rightExLogo">
                <img src={heroku} alt="" />
                <p>Heroku</p>
            </div>
            <div className="rightExLogo">
                <img src={vs} alt="" />
                <p >Visual Studio</p>
            </div>
            <div  className="rightExLogo">
                <img src={pyany} alt="" />
                <p >PythonAnywhere</p>
            </div>
        </div>
    );
};

export default Tools;