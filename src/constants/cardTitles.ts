import air_quality from "../common/img/air_quality.svg";
import wind from "../common/img/wind.svg";
import uv from "../common/img/uv.svg";
import sunrise from "../common/img/sunrise.svg";
import pressure from "../common/img/pressure.svg";
import feels_like from "../common/img/feels_like.svg";
import humidity from "../common/img/humidity.svg";
import five_day_logo from '../common/img/five_day_logo.svg';
import clock from "../common/img/clock.svg";

export const FIVE_DAY_FORECAST = '5-DAY FORECAST';
export const AIR_QUALITY = 'AIR QUALITY';
export const WIND = 'WIND';
export const UV = 'UV-INDEX';
export const SUNRISE = 'SUNRISE';
export const PRESSURE = 'PRESSURE';
export const FEELS_LIKE = 'FEELS LIKE';
export const HUMIDITY = 'HUMIDITY';
export const CLOUDY_CONDITIONS = 'Cloudy conditions from 1AM-9AM, with showers expected at 9AM.'
export const CLOCK = 'HOURLY FORECAST'

interface TImgBase {
    [key: string]: string;
    // [AIR_QUALITY]? : string
    // [WIND]? : string;
    // [UV]? : string;
    // [SUNRISE]? : string;
    // [RAINFALL]? : string;
    // [FEELS_LIKE]? : string;
    // [HUMIDITY]? : string;
    // [CLOUDY_CONDITIONS]? : string;
    // [CLOCK]? : string;
    // [FIVE_DAY_FORECAST]? : string;
}
export const imgBase: TImgBase = {}
imgBase[AIR_QUALITY] = air_quality;
imgBase[WIND] = wind;
imgBase[UV] = uv;
imgBase[SUNRISE] = sunrise;
imgBase[PRESSURE] = pressure;
imgBase[FEELS_LIKE] = feels_like;
imgBase[HUMIDITY] = humidity;
imgBase[FIVE_DAY_FORECAST] = five_day_logo;
imgBase[CLOCK] = clock;


// export const imbBase2 ={
//     'AIR QUALITY': air_quality,
// }

