import * as axios from 'axios';

const API_KEY =  'd2dbce17b6e5f35e0ddb09219ff9282a';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';
export const WIND_API_KEY = 'wM8wB2E4cLGgHOhq2NoKwITjitTHqNDs';

export const ICON_URL = `http://openweathermap.org/img/wn/`;
const params = {
    appid : API_KEY,
    units: 'metric',
}
const url = new URL(BASE_URL); // new URL это объект который позволяет преобразовать путь в адресную строку
// const image = new URL(ICON_URL);
// const imageUrl = new URL(`${ICON_URL}${icon}.png`);
const weatherUrl = new URL(`${BASE_URL}weather?appid=${params.appid}&units=${params.units}`);
const forecastUrl = new URL(`${BASE_URL}forecast?appid=${params.appid}&units=${params.units}&cnt=${5}`);


// console.log(weatherUrl)
// console.log(forecastUrl)


const instance = axios.create({
    baseURL: url,
})

export const openWeatherApi = {
    getWeather: async (city) => {
        weatherUrl.searchParams.set('q', city);
        const response = await instance.get( weatherUrl );
        console.log(response.data)
        return response.data;
    },
    getForecast: async (city) => {
        forecastUrl.searchParams.set('q', city);
        const response = await instance.get( forecastUrl );
        console.log(response.data)
        return response.data;
    }
}
