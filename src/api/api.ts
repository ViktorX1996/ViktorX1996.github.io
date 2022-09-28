import  axios from 'axios';
import { TAxiosDataAQ } from '../redux/airQualityReducer';
import { IAxiosDataGetWeather } from '../redux/IAxiosDataGetWeather';
import { IAxiosGetForecastByCity } from './../redux/IAxiosGetForecastByCity';
import { IAxiosDataGetUvi } from './../redux/IAxiosDataGetUvi';

// export const WIND_API_KEY = 'wM8wB2E4cLGgHOhq2NoKwITjitTHqNDs';
const API_KEY = 'd2dbce17b6e5f35e0ddb09219ff9282a';
export const AIR_TOKEN = 'c16a7dd784d56c4a3159f96aa9fdb42bb801ee7e';

const UVI_TOKEN = '7efe21ee6886adb72a9588fb0c827989';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/';
const UVI_URL = 'https://api.openuv.io/api/v1/uv';
export const ICON_URL = `http://openweathermap.org/img/wn/`;
export const AIR_URL = `https://api.waqi.info/feed/`

const params = {
    appid: API_KEY,
    units: 'metric',
}
const headerUvi = {
    'x-access-token': UVI_TOKEN,
}
// const url = new URL(BASE_URL); // new URL это объект который позволяет преобразовать путь в адресную строку
// const urlAir = new URL(AIR_URL);

const weatherUrl = new URL(`${BASE_URL}weather?appid=${params.appid}&units=${params.units}`);
const forecastUrl = new URL(`${BASE_URL}forecast?appid=${params.appid}&units=${params.units}`);
const uviUrl = new URL(`${UVI_URL}`);
const instance = axios.create({ // Создаем объект который позволяет отправлять запросы на сервер
    // baseURL: url.href,
    // secondBaseURL: urlAir,
})

// export interface IGetWeatherApi {
//     data?: IAxiosDataGetWeather
// }

export const openWeatherApi = {
    getWeather: async (city:string) => {
        weatherUrl.searchParams.set('q', city);
        const response = await instance.get<IAxiosDataGetWeather>(weatherUrl.href);
        // console.log(response.data);
        return response.data
    },
    getForecast: async (city:string, cnt:number) => {
        forecastUrl.searchParams.set('q', city);
        forecastUrl.searchParams.set('cnt', String(cnt));
        const response = await instance.get<IAxiosGetForecastByCity>(forecastUrl.href);
        // console.log(response.data)
        return response.data
    },
    getUvi: async (lat:number, lng:number) => {
        uviUrl.searchParams.set('lat', String(lat));
        uviUrl.searchParams.set('lng', String(lng));
        const response = await instance.get<IAxiosDataGetUvi>(uviUrl.href, {headers: headerUvi});
        // console.log(response.data);
        return response.data
    },
}

export const airQualityApi = {
    getAirQuality: async (city:string) => {
        const airUrl = new URL(`${AIR_URL}${city}/`);
        airUrl.searchParams.set('token', AIR_TOKEN);
        const response = await instance.get<TAxiosDataAQ>(airUrl.href);
        // console.log(response.data, '============================')
        return response.data;
    }
}
