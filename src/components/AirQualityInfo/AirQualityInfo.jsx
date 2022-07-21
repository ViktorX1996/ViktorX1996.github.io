import React from 'react';
import { FancyLineAirQuality } from './airQualityInfoStyled';
function AirQualityInfo() {
    return (

        <>
            <span className='medium_text'>56 - Moderate</span>
            <p className='small_text'>Air quality is 56, which is the same as yesterday at about this time.</p>
            <FancyLineAirQuality>
                -------------------------------------
            </FancyLineAirQuality>
        </>

    );
}

export default AirQualityInfo;