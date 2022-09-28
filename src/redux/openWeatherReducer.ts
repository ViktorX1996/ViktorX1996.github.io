import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { openWeatherApi } from "../api/api";
import { getDate, getTime } from "../components/helpers/DateAndTimeConverter";
import { ICityAndCnt, IUvi } from "./IAxiosGetForecastByCity";
import { IOpenWeatherState } from "./IOpenWeatherState";
import { IAxiosDataGetWeather } from "./IAxiosDataGetWeather";
import { IAxiosGetForecastByCity } from "./IAxiosGetForecastByCity";
import { RootState } from "..";
import { AxiosError } from "axios";
import { IAxiosDataGetUvi } from './IAxiosDataGetUvi';
import { getFullTime } from './../components/helpers/DateAndTimeConverter';

const defaultState: IOpenWeatherState = {
  cod: null,
  uviStatus: null,
  uvi: null,
  uvi_max: null,
  reject: null,
  status: null,
  statusForecast: null,
  fiveDayStatusForecast: null,
  location: {
    lat: null,
    lon: null,
  },
  fiveDayForecast: [],
  weatherForecast: [
    {
      time: null,
      temperature: null,
      icon: null,
    },
  ],
  weather: [
    {
      id: null,
      main: "", //Clear
      description: "", //clear sky
      iconMain: null, // 01n
    },
  ],
  main: {
    temp_now: null,
    feels_like: null,
    temp_min: null, //17.56
    temp_max: null,
    pressure: null, //1006
    humidity: null,
  },
  visibility: null,
  wind: {
    speed: null, //2.04
    deg: null, //278 degrees
    gust: null, //gust 3.15
  },
  clouds: {
    all: null, // 7
  },
  dt: null, //1658258038
  sys: {
    type: null,
    id: null,
    country: "", //UA
    sunrise: null, //1658196466
    sunset: null, //1658253616
  },
  timezone: null, //10800
  id: null, //703448
  city_name: "", // Ukraine
  
};

type TKnownError = {
  message?: string,
  cod?: string
}

export const getWeatherByCity = createAsyncThunk(
  "openWeather/getWeatherByCity",
  async (city: string, { rejectWithValue }) => {
    try {
      const response = (await openWeatherApi.getWeather(
        city
      )) as IAxiosDataGetWeather;
      return response;
    } catch (err) {
      const error = err as AxiosError<TKnownError>; 
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data.cod);
    }
  }
); // async (city, { cnt }) => {  так нельзя
export const getForecastByCity = createAsyncThunk(
  "openWeather/getForecastByCity", // Асинхронный тунель для получения данных из базы данных
  async (cityAndCnt: ICityAndCnt, { rejectWithValue }) => {
    const { city, cnt } = cityAndCnt; // разбиваем объект на переменные
    try {
      const response = (await openWeatherApi.getForecast(
        city,
        cnt
      )) as IAxiosGetForecastByCity;
      // console.log(response, 'getForecastByCity');
      return response;
    } catch (err) {
      const error = err as AxiosError<TKnownError>; 
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data.cod);
    }
  }
);
export const getForecastByCityFiveDays = createAsyncThunk(
  "openWeather/getForecastByCityFiveDays",
  async (cityAndCnt: ICityAndCnt, { rejectWithValue }) => {
    const { city, cnt } = cityAndCnt;
    try {
      const response = (await openWeatherApi.getForecast(
        city,
        cnt
      )) as IAxiosGetForecastByCity;
      return response;
    } catch (err) {
      const error = err as AxiosError<TKnownError>; 
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data.cod);
    }
  }
);
export const getUviByCoords = createAsyncThunk(
  "openWeather/getUviByCity",
  async (coord:IUvi, { rejectWithValue }) => {
    const { lat, lng } = coord;
    try {
      const response = (await openWeatherApi.getUvi(lat, lng)) as IAxiosDataGetUvi;
      return response;
    } catch (err) {
      const error = err as AxiosError<TKnownError>; 
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data.cod);
    }
  }
);

const openWeatherSlice = createSlice({
  name: "openWeatherSlice",
  initialState: defaultState,
  reducers: {
    setReject: (state, action) => {
      state.reject = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getWeatherByCity.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(getWeatherByCity.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.reject = null;
      state.cod = Number(payload?.cod);

      state.sys.sunrise = getTime(payload?.sys.sunrise);
      state.sys.sunset = getTime(payload?.sys.sunset);

      //first block(main info)
      state.city_name = payload?.name;

      state.main.temp_now = Number(payload?.main.temp.toFixed(0));
      state.weather[0].description = payload?.weather[0].description;
      state.main.temp_min = Number(payload?.main.temp_min.toFixed(1));
      state.main.temp_max = Number(payload?.main.temp_max.toFixed(1));
      state.main.pressure = payload?.main.pressure;
      state.main.feels_like = Number(payload?.main.feels_like.toFixed(1));
      state.main.humidity = payload?.main.humidity;
      state.weather[0].iconMain = payload?.weather[0].icon;
      state.location.lat = Number(payload?.coord.lat);
      state.location.lon = Number(payload?.coord.lon);
      state.wind.deg = payload?.wind.deg;
      state.wind.speed = Math.round(payload?.wind.speed*3.6);
      state.wind.gust = payload?.wind.gust;
      state.sys.sunrise = getFullTime(payload?.sys.sunrise);
      state.sys.sunset = getFullTime(payload?.sys.sunset);
    });
    builder.addCase(getWeatherByCity.rejected, (state, action) => {
      state.status = "rejected";
      state.reject = Number(action.payload);
    });
    builder.addCase(getForecastByCity.pending, (state, action) => {
      state.statusForecast = "loading";
    });
    builder.addCase(getForecastByCity.fulfilled, (state, { payload }) => {
      state.statusForecast = "success";
      state.reject = null;
      //second block(forecast on every 3 hours today)
      state.weatherForecast = payload!.list.map((item) => {
        return {
          time: Number(getTime(item.dt)),
          temperature: +item.main.temp.toFixed(0),
          icon: item.weather[0].icon,
        };
      });
    });
    builder.addCase(getForecastByCity.rejected, (state, action) => {
      state.statusForecast = "rejected";
      state.reject = Number(action.payload);
    });
    builder.addCase(getForecastByCityFiveDays.pending, (state, action) => {
      state.fiveDayStatusForecast = "loading";
    });
    builder.addCase(
      getForecastByCityFiveDays.fulfilled,
      (state, { payload }) => {
        state.fiveDayStatusForecast = "success";
        state.reject = null;
        // third block
        state.fiveDayForecast = payload!.list.map((item) => {
          return {
            day: getDate(item.dt),
            min: +item.main.temp_min.toFixed(0),
            max: +item.main.temp_max.toFixed(0),
            logo: item.weather.map((item) => item.icon).join(""),
          };
        });
      }
    );
    builder.addCase(getForecastByCityFiveDays.rejected, (state, action) => {
      state.fiveDayStatusForecast = "rejected";
      state.reject = Number(action.payload);
    });
    builder.addCase(getUviByCoords.pending, (state, action) => {
      state.uviStatus = "loading";
    });
    builder.addCase(getUviByCoords.fulfilled, (state, { payload }) => {
      state.uviStatus = "success";
      state.reject = null;
      state.uvi = Number(payload?.result.uv.toFixed(1))
      state.uvi_max = Number(payload?.result.uv_max.toFixed(1))
    });
    builder.addCase(getUviByCoords.rejected, (state, action) => {
      state.uviStatus = "rejected";
      state.reject = Number(action.payload);
    });
  },
});

export const statusSelector = (state: RootState) => state.openWeather.status;
export const codSelector = (state: RootState) => state.openWeather.cod;
export const rejectSelector = (state: RootState) => state.openWeather.reject;
export const backgroundSelector = (state: RootState) =>
  state.openWeather.weather[0].iconMain;
export const locationSelectorLat = (state: RootState) =>
  state.openWeather.location.lat;
export const locationSelectorLon = (state: RootState) =>
  state.openWeather.location.lon;
export const fiveDaySelector = (state: RootState) =>
  state.openWeather.fiveDayForecast;
export const uviSelector = (state: RootState) => state.openWeather.uvi
export const uviMaxSelector = (state: RootState) => state.openWeather.uvi_max
export const windSpeedSelector = (state: RootState) => state.openWeather.wind.speed;
export const windDegSelector = (state: RootState) => state.openWeather.wind.deg;
export const windGustSelector = (state: RootState) => state.openWeather.wind.gust;
export const sunriseSelector = (state: RootState) => state.openWeather.sys.sunrise;
export const sunsetSelector = (state: RootState) => state.openWeather.sys.sunset;
export const pressureSelector = (state: RootState) => state.openWeather.main.pressure;
export const feelsLikeSelector = (state: RootState) => state.openWeather.main.feels_like;
export const humiditySelector = (state: RootState) => state.openWeather.main.humidity;
export const cityNameSelector = (state: RootState) => state.openWeather.city_name;
export const mainSelector = (state: RootState) => state.openWeather.main;
export const descriptionSelector = (state: RootState) => state.openWeather.weather[0].description;
export const { setReject } = openWeatherSlice.actions;
export default openWeatherSlice.reducer;
