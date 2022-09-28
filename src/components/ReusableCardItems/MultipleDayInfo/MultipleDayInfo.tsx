import React, { useEffect, useState } from 'react';
import { ForecastContainer, ForecastDay, ForecastLogo, ForecastMin, ForecastMax } from './multipleDayInfoStyled';
import { fiveDaySelector } from '../../../redux/openWeatherReducer';
import { divideObjectsByDay } from '../../helpers/FiveDaysConverter';
import { ICON_URL } from '../../../api/api';
import { useAppSelector } from '../../../hooks/hooks';

type TDays = {
    day: string;
    min: number;
    max: number;
    logo: string;
}

const MultipleDayInfo:React.FC = () => {
    const [days, setDays] = useState<TDays[]>([]);
    const forecast = useAppSelector(fiveDaySelector)
    const fiveDayStatusForecast = useAppSelector(state => state.openWeather.fiveDayStatusForecast)
    const asyncDivideAndIterate = async () => {
        const days = await divideObjectsByDay(forecast)
        setDays(() => days)
    }
    useEffect(() => {
        if (fiveDayStatusForecast === 'success') {
            asyncDivideAndIterate()
        }
    }, [fiveDayStatusForecast]) // eslint-disable-line
    return (
        <>
            {days && days.map((item, index) => {
                return (
                    <ForecastContainer key={index}>
                        <ForecastDay>{(index === 0) ? 'Today' : 
                        (index === 1) ? 'Tomorrow' : item.day}</ForecastDay>
                        <ForecastLogo>
                            <img src={`${ICON_URL}${item.logo}@2x.png`} alt='logo' />
                        </ForecastLogo>
                        <ForecastMin>min. {item.min}<span className='celsius'></span></ForecastMin>
                        <ForecastMax>max. {item.max}<span className='celsius'></span></ForecastMax>
                    </ForecastContainer>
                )
            }
            )}
        </>
    );
}

export default React.memo(MultipleDayInfo);
