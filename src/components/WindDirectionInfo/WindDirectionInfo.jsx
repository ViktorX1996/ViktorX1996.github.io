import React from 'react';
import './wind.css'
function WindDirectionInfo({ windDirection }) {
    return (
        <div className='container_compass'>
            <div className="compass">
                <div className="direction">
                    <p>NE<span>10 mph</span></p>
                </div>
                <div className="arrow"></div>
            </div>
        </div>
    );
}

export default WindDirectionInfo;