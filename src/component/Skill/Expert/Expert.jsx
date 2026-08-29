import React from 'react';
import clanguage from '../../image/expert/c.png';
import cpp from '../../image/expert/cpp.png';
import python from '../../image/expert/python.png';
import javascript from '../../image/expert/js.png';
import es6 from '../../image/expert/es6.jpeg';
import bootstrap from '../../image/expert/bootstrap.png';
import react from '../../image/expert/react.png';
import reactRouter from '../../image/expert/react router.png';
import express from '../../image/expert/express.png';
import mongoDb from '../../image/expert/mongodb.png';
import node from '../../image/expert/node.png';
import django from '../../image/expert/django.png';
import sqlite3 from '../../image/expert/sqlite.png';
import html from '../../image/expert/html.png';
import css from '../../image/expert/css.png';

const Expert = () => {
    return (
        <div className="rightExpert">
            <div className="rightExLogo shadow">
                <img src={clanguage} alt="" />
                <p>C</p>
            </div>
            <div className="rightExLogo">
                <img src={cpp} alt="" />
                <p>C++</p>
            </div>
            <div className="rightExLogo">
                <img src={python} alt="" />
                <p>python</p>
            </div>
            <div className="rightExLogo">
                <img src={html} alt="" />
                <p>Html5</p>
            </div>
            <div className="rightExLogo">
                <img src={css} alt="" />
                <p>Css3</p>
            </div>
            <div className="rightExLogo">
                <img src={django} alt="" />
                <p>Django</p>
            </div>
            <div className="rightExLogo">
                <img src={sqlite3} alt="" />
                <p>Sqlite3</p>
            </div>
            <div className="rightExLogo">
                <img src={javascript} alt="" />
                <p>JavaScript</p>
            </div>
            <div className="rightExLogo">
                <img src={es6} alt="" />
                <p>JS Es6</p>
            </div>
            <div className="rightExLogo">
                <img src={bootstrap} alt="" />
                <p>Bootstrap</p>
            </div>
            <div className="rightExLogo">
                <img src={react} alt="" />
                <p>React js</p>
            </div>
            <div className="rightExLogo">
                <img src={reactRouter} alt="" />
                <p>ReactRouter</p>
            </div>
            <div className="rightExLogo">
                <img src={node} alt="" />
                <p>Node Js</p>
            </div>
            <div className="rightExLogo">
                <img src={express} alt="" />
                <p>Express Js</p>
            </div>
            <div className="rightExLogo">
                <img src={mongoDb} alt="" />
                <p>MongoDb</p>
            </div>

        </div>
    );
};

export default Expert;