import air_quality from "../common/img/air_quality.svg";
import wind from "../common/img/wind.svg";
import uv from "../common/img/uv.svg";
import sunrise from "../common/img/sunrise.svg";
import rainfall from "../common/img/rainfall.svg";
import feels_like from "../common/img/feels_like.svg";
import humidity from "../common/img/humidity.svg";
import five_day_logo from '../common/img/five_day_logo.svg';
import clock from "../common/img/clock.svg";

export const FIVE_DAY_FORECAST = '5-DAY FORECAST';
export const AIR_QUALITY = 'AIR QUALITY';
export const WIND = 'WIND';
export const UV = 'UV-INDEX';
export const SUNRISE = 'SUNRISE';
export const RAINFALL = 'RAINFALL';
export const FEELS_LIKE = 'FEELS LIKE';
export const HUMIDITY = 'HUMIDITY';
export const CLOUDY_CONDITIONS = 'Cloudy conditions from 1AM-9AM, with showers expected at 9AM.'
export const CLOCK = 'HOURLY FORECAST'

export const imgBase = {}
imgBase[AIR_QUALITY] = air_quality;
imgBase[WIND] = wind;
imgBase[UV] = uv;
imgBase[SUNRISE] = sunrise;
imgBase[RAINFALL] = rainfall;
imgBase[FEELS_LIKE] = feels_like;
imgBase[HUMIDITY] = humidity;
imgBase[FIVE_DAY_FORECAST] = five_day_logo;
imgBase[CLOCK] = clock;
