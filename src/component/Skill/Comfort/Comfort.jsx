import React from 'react';
import java from '../../image/comfort/java.jpg';
import jq from '../../image/comfort/jq.png';
import meterial from '../../image/comfort/meterial.png';
import mysql from '../../image/comfort/mysql.png';

const Comfort = () => {
    return (
        <div className="rightExpert">
            <div className="rightExLogo shadow">
                <img src={java} alt="" />
                <p>Java</p>
            </div>
            <div className="rightExLogo">
                <img src={jq} alt="" />
                <p>Jquery</p>
            </div>
            <div className="rightExLogo">
                <img src={meterial} alt="" />
                <p>Meterial Ui</p>
            </div>
            <div className="rightExLogo">
                <img src={mysql} alt="" />
                <p>mysql</p>
            </div>
        </div>
    );
};

export default Comfort;