import React from 'react';
import {  ForecastContainer, ForecastDay, ForecastLogo, ForecastMin, ForecastMax } from './multipleDayInfoStyled';
import sun from "../../../src/common/img/weather_conditions/sun.svg";
function MultipleDayInfo() {
    return (
        <>
                <ForecastContainer>
                    <ForecastDay>Today</ForecastDay>
                    <ForecastLogo>
                        <img src={sun} alt='sun_logo' />
                    </ForecastLogo>
                    <ForecastMin>min. 15<span className='celsius'></span></ForecastMin>
                    <ForecastMax>max. 25<span className='celsius'></span></ForecastMax>
                </ForecastContainer>
                <ForecastContainer>
                    <ForecastDay>Today</ForecastDay>
                    <ForecastLogo>
                        <img src={sun} alt='sun_logo' />
                    </ForecastLogo>
                    <ForecastMin>min. 15<span className='celsius'></span></ForecastMin>
                    <ForecastMax>max. 25<span className='celsius'></span></ForecastMax>
                </ForecastContainer>
                <ForecastContainer>
                    <ForecastDay>Today</ForecastDay>
                    <ForecastLogo>
                        <img src={sun} alt='sun_logo' />
                    </ForecastLogo>
                    <ForecastMin>min. 15<span className='celsius'></span></ForecastMin>
                    <ForecastMax>max. 25<span className='celsius'></span></ForecastMax>
                </ForecastContainer>
        </>
    );
}

export default MultipleDayInfo;