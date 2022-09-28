import React from 'react';
import { useAppSelector } from '../../../hooks/hooks';
import { humiditySelector } from '../../../redux/openWeatherReducer';
const HumidityInfo:React.FC = () => {
    const humidity = useAppSelector(humiditySelector);
    return (
            <>
                <p className='medium_text'>{humidity} %</p>
            </>

    );
}

export default HumidityInfo;