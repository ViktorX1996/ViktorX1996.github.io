import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { openWeatherApi } from './../api/api';
import { getDate, getTime } from '../components/helpers/DateAndTimeConverter';


const defaultState = {
    status: null,
    statusForecast: null,
    weatherForecast: {
        time: null,
        temperature: null,
        icon: null,
    },
    weather: {
        id: null,
        main: "", //Clear
        description: "", //clear sky
        iconMain: null // 01n
    }
    ,
    main: {
        temp_now: null,
        feels_like: null,
        temp_min: null, //17.56
        temp_max: null,
        pressure: null, //1006
        humidity: null
    },
    visibility: null,
    wind: {
        speed: null, //2.04
        deg: null, //278 degrees
        gust: null //gust 3.15
    },
    clouds: {
        all: null // 7
    },
    dt: null, //1658258038
    sys: {
        type: null,
        id: null,
        country: "", //UA
        sunrise: null, //1658196466
        sunset: null //1658253616
    },
    timezone: null, //10800
    id: null, //703448
    city_name: "", // Ukraine
    cod: null //200

}



export const getWeatherByCity = createAsyncThunk(
    'openWeather/getWeatherByCity',
    async (city) => {
        try {
            const response = await openWeatherApi.getWeather(city);
            return response;
        }
        catch (error) {
            console.log(error);
        }
    }
)
export const getForecastByCity = createAsyncThunk(
    'openWeather/getForecastByCity',
    async (city) => {
        try {
            const response = await openWeatherApi.getForecast(city);
            return response;
        }
        catch (error) {
            console.log(error);
        }
    }
)

const openWeatherSlice = createSlice({
    name: 'openWeatherSlice',
    initialState: defaultState,
    reducers: {
        setWeather: (state, action) => { }
    },
    extraReducers: {
        [getWeatherByCity.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getWeatherByCity.fulfilled]: (state, { payload }) => {
            state.status = 'success';

            state.sys.sunrise = getTime(payload.sys.sunrise);
            state.sys.sunset = getTime(payload.sys.sunset);

            //first block(main info)
            state.city_name = payload.name;
            state.main.temp_now = +payload.main.temp.toFixed(0)
            state.weather.description = payload.weather[0].description;
            state.main.temp_min = +payload.main.temp_min.toFixed(1);
            state.main.temp_max = +payload.main.temp_max.toFixed(1);
            state.weather.iconMain = payload.weather[0].icon;
        },
        [getWeatherByCity.rejected]: (state, action) => {
            state.status = 'rejected';
         },
         [getForecastByCity.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getForecastByCity.fulfilled]: (state, { payload }) => {
            state.statusForecast = 'success';
            //second block(forecast on every 3 hours today)
            state.weatherForecast = payload.list.map(item => {
                return {
                    time: +getTime(item.dt),
                    temperature: +item.main.temp.toFixed(0),
                    icon: item.weather[0].icon,
                }
            })
        },
        [getForecastByCity.rejected]: (state, action) => {
            state.status = 'rejected';
         },
    }
})

export const statusSelector = (state) => state.openWeather.status;
export const backgroundSelector = (state) => state.openWeather.weather.iconMain;



export const { setWeather } = openWeatherSlice.actions;
export default openWeatherSlice.reducer;