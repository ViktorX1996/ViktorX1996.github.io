import { AIR_QUALITY, CLOUDY_CONDITIONS, FIVE_DAY_FORECAST, UV, WIND, SUNRISE, RAINFALL, FEELS_LIKE, HUMIDITY, CLOCK } from './cardTitles';
import CurrentWeatherInfo from './../components/CurrentWeatherInfo/CurrentWeatherInfo';
import MultipleDayInfo from './../components/MultipleDayInfo/MultipleDayInfo';
import AirQualityInfo from './../components/AirQualityInfo/AirQualityInfo';
import WindMapInfo from './../components/WindMapInfo/WindMapInfo';
import UvIndexInfo from './../components/UvIndexInfo/UvIndexInfo';
import SunriseInfo from './../components/SunriseInfo/SunriseInfo';
import WindDirectionInfo from './../components/WindDirectionInfo/WindDirectionInfo';
import RainFallInfo from './../components/RainFallInfo/RainFallInfo';
import FeelsLikeInfo from './../components/FeelsLikeInfo/FeelsLikeInfo';
import HumidityInfo from './../components/HumidityInfo/HumidityInfo';




export const cardsConfig = [
    {
        id: 1,
        title: [CLOCK],
        limit: 70,
        isImg: true,
        isTwoBlocks: false,
        content: [<CurrentWeatherInfo />]
    },
    {
        id: 2,
        title: [FIVE_DAY_FORECAST],
        limit: 260,
        isImg: true,
        isTwoBlocks: false,
        content:[ <MultipleDayInfo />]
    },
    {
        id: 3,
        title: [AIR_QUALITY],
        limit: 448,
        isImg: true,
        isTwoBlocks: false,
        content: [<AirQualityInfo />]
    },
    {
        id: 4,
        title: [WIND],
        limit: 635,
        isImg: true,
        isTwoBlocks: false,
        content:[ <WindMapInfo />]
    },
    {
        id: 5,
        title: [UV, SUNRISE],
        limit: 720,
        isImg: true,
        isTwoBlocks: true,
        content: [<UvIndexInfo />, <SunriseInfo />] 
    },
    {
        id: 6,
        title: [WIND,RAINFALL],
        limit: 720,
        isImg: true,
        isTwoBlocks: true,
        content: [<WindDirectionInfo />, <RainFallInfo />] 
    },
    {
        id: 7,
        title: [FEELS_LIKE,HUMIDITY],
        limit: 720,
        isImg: true,
        isTwoBlocks: true,
        content: [<FeelsLikeInfo />, <HumidityInfo />] 
    },
]