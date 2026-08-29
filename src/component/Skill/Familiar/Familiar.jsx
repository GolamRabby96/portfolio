import React from 'react';
import tailwind from '../../image/familer/tail.jpg';
import sass from '../../image/familer/sass.jpg';
import redux from '../../image/familer/redux.jpg';
import php from '../../image/familer/php.png';
import nativ from '../../image/familer/native.png';
import cs from '../../image/familer/cs.png';

const Familiar = () => {
    return (
        <div className="rightExpert">
            <div className="rightExLogo shadow">
                <img src={tailwind} alt="" />
                <p>Tailwind</p>
            </div>
            <div className="rightExLogo">
                <img src={sass} alt="" />
                <p>Sass</p>
            </div>
            <div className="rightExLogo">
                <img src={redux} alt="" />
                <p>Redux</p>
            </div>
            <div className="rightExLogo">
                <img src={php} alt="" />
                <p>Php</p>
            </div>
            <div className="rightExLogo">
                <img src={nativ} alt="" />
                <p>ReactNativ</p>
            </div>
            <div className="rightExLogo">
                <img src={cs} alt="" />
                <p>C#</p>
            </div>
        </div>
    );
};

export default Familiar;