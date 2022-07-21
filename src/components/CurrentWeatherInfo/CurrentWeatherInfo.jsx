import React from 'react';
import Indicator from './Indicator/Indicator';
import { InfoContainer } from './currentWeatherInfoStyled';
import { useSelector } from 'react-redux';
function CurrentWeatherInfo() {
    const weatherForecast = useSelector(state => state.openWeather.weatherForecast);
    const statusForecast = useSelector(state => state.openWeather.statusForecast);
    return (
        <InfoContainer>
            {statusForecast==='success' && weatherForecast.map((item, index) => {
                return <Indicator key={index} time={item.time} temperature={item.temperature} icon={item.icon} />
            }
            )}
        </InfoContainer>
    );
}

export default CurrentWeatherInfo;