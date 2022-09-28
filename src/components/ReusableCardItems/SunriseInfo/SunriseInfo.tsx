import React from 'react';
import { useAppSelector } from '../../../hooks/hooks';
import { sunriseSelector, sunsetSelector } from '../../../redux/openWeatherReducer';
const SunriseInfo:React.FC = () => {
    const sunrise = useAppSelector(sunriseSelector);
    const sunset = useAppSelector(sunsetSelector);
    return (

            <>
                <span className='medium_text'>{sunrise}am</span>
                <p className='small_text'>Sunset: {sunset}pm</p>
            </>

    );
}

export default React.memo(SunriseInfo);