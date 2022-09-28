import { AIR_QUALITY, FIVE_DAY_FORECAST, UV, WIND, SUNRISE, PRESSURE, FEELS_LIKE, HUMIDITY, CLOCK } from './cardTitles';

// import {Clouds, Coord, Main, Sys, Weather, Wind} from "../redux/IAxiosDataGetWeather";
// @ts-ignore
// import React from "react";
export const CURRENT_WEATHER_INFO = 'CURRENT_WEATHER_INFO';

export enum CardsConfig {
    CURRENT_WEATHER_INFO = 'CURRENT_WEATHER_INFO',
    MULTIPLE_DAY_INFO = 'MULTIPLE_DAY_INFO',
    AIR_QUALITY_INFO = 'AIR_QUALITY_INFO',
    WIND_MAP_INFO = 'WIND_MAP_INFO',
    UV_INDEX_INFO = 'UV_INDEX_INFO',
    SUNRISE_INFO = 'SUNRISE_INFO',
    WIND_DIRECTION_INFO = 'WIND_DIRECTION_INFO',
    PRESSURE_INFO = 'PRESSURE_INFO',
    FEELS_LIKE_INFO = 'FEELS_LIKE_INFO',
    HUMIDITY_INFO = 'HUMIDITY_INFO',
}





export interface ICardsConfig {
        id: number,
        title: string[],
        limit: number,
        isImg: boolean,
        isTwoBlocks: boolean,
        content: string[],
}

export const cardsConfig:ICardsConfig[] = [
    {
        id: 1,
        title: [CLOCK],
        limit: 70,
        isImg: true,
        isTwoBlocks: false,
        content: [CardsConfig.CURRENT_WEATHER_INFO]
    },
    {
        id: 2,
        title: [FIVE_DAY_FORECAST],
        limit: 260,
        isImg: true,
        isTwoBlocks: false,
        content: [CardsConfig.MULTIPLE_DAY_INFO]
    },
    {
        id: 3,
        title: [AIR_QUALITY],
        limit: 448,
        isImg: true,
        isTwoBlocks: false,
        content: [CardsConfig.AIR_QUALITY_INFO]
    },
    {
        id: 4,
        title: [WIND],
        limit: 635,
        isImg: true,
        isTwoBlocks: false,
        content: [CardsConfig.WIND_MAP_INFO]
    },
    {
        id: 5,
        title: [UV, SUNRISE],
        limit: 720,
        isImg: true,
        isTwoBlocks: true,
        content: [CardsConfig.UV_INDEX_INFO, CardsConfig.SUNRISE_INFO]
    },
    {
        id: 6,
        title: [WIND,PRESSURE],
        limit: 720,
        isImg: true,
        isTwoBlocks: true,
        content: [CardsConfig.WIND_DIRECTION_INFO, CardsConfig.PRESSURE_INFO]
    },
    {
        id: 7,
        title: [FEELS_LIKE,HUMIDITY],
        limit: 720,
        isImg: true,
        isTwoBlocks: true,
        content: [CardsConfig.FEELS_LIKE_INFO, CardsConfig.HUMIDITY_INFO]
    },
]



// import CurrentWeatherInfo from '../components/CurrentWeatherInfo/CurrentWeatherInfo';
// import MultipleDayInfo from './../components/MultipleDayInfo/MultipleDayInfo';
// import AirQualityInfo from './../components/AirQualityInfo/AirQualityInfo';
// import WindMapInfo from './../components/WindMapInfo/WindMapInfo';
// import UvIndexInfo from './../components/UvIndexInfo/UvIndexInfo';
// import SunriseInfo from './../components/SunriseInfo/SunriseInfo';
// import WindDirectionInfo from './../components/WindDirectionInfo/WindDirectionInfo';
// import RainFallInfo from './../components/RainFallInfo/RainFallInfo';
// import FeelsLikeInfo from './../components/FeelsLikeInfo/FeelsLikeInfo';
// import HumidityInfo from './../components/HumidityInfo/HumidityInfo';