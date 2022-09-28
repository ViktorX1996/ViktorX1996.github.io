import React from 'react';
import { useAppSelector } from '../../../hooks/hooks';
import { pressureSelector } from '../../../redux/openWeatherReducer';
const PressureInfo:React.FC = () => {
    const pressure = useAppSelector(pressureSelector);
    return (
        <>
            <p className='medium_text'>{pressure} hPa</p>
        </>

    );
}

export default React.memo(PressureInfo);