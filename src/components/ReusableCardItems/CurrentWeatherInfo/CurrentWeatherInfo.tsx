import React from 'react';
import Indicator from './Indicator/Indicator';
import { InfoContainer } from './currentWeatherInfoStyled';
import { useAppSelector } from '../../../hooks/hooks';
const CurrentWeatherInfo:React.FC = () => {
    const weatherForecast = useAppSelector(state => state.openWeather.weatherForecast);
    const statusForecast = useAppSelector(state => state.openWeather.statusForecast);
    return (
        <InfoContainer>
            {statusForecast==='success' && weatherForecast.map((item, index) => {
                return <Indicator key={index} time={item.time} temperature={item.temperature} icon={item.icon} />
            }
            )}
        </InfoContainer>
    );
}

export default React.memo(CurrentWeatherInfo);