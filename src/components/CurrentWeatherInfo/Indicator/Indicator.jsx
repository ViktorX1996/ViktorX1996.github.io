import React from 'react';
import "./indicator.css";
import { ICON_URL } from './../../../api/api';

function Indicator({ time, temperature, icon }) {
    return (
        <div className='container_indicator'>
            <div className='indicator_time'>{time > 10 ? `${time}pm` : `0${time}am`}</div>
            <div>
                <img className='indicator_img' src={`${ICON_URL}${icon}@2x.png`} alt="weather" />
            </div>
            <div className='indicator_temp'>{temperature}<span className='celsius'></span></div>
        </div>
    );
}

export default Indicator;