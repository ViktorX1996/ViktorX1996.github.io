export interface IOpenWeatherState {
    reject: number | null;
    uviStatus: string | null;
    uvi: number | null;
    uvi_max: number | null;
    cod:                   number | null;
    status:                string | null;
    statusForecast:        string | null;
    fiveDayStatusForecast: string | null;
    location:              Location;
    fiveDayForecast:       FiveDayForecast[];
    weatherForecast:       WeatherForecast[];
    weather:               Weather[];
    main:                  Main;
    visibility:            number | null;
    wind:                  Wind;
    clouds:                Clouds;
    dt:                    number  | null;
    sys:                   Sys;
    timezone:              number | null;
    id:                    number | null;
    city_name:             string | undefined;

}


export interface FiveDayForecast {
    day: string;
    min: number;
    max: number;
    logo: string;
}
export interface Clouds {
    all: number | null;
}

export interface Location {
    lat?: number | null;
    lon?: number | null;
}

export interface Main {
    temp_now?:   number | null;
    feels_like: number | null;
    temp_min?:   number | null;
    temp_max?:   number | null;
    pressure:   number | null;
    humidity:   number | null;
}

export interface Sys {
    type:    number | null;
    id:      number | null;
    country: string | null;
    sunrise: string | null;
    sunset:  string | null;
}

export interface Weather {
    id:          null;
    main:        string;
    description?: string;
    iconMain?:    string | null;
}

export interface WeatherForecast {
    time?:        number | null;
    temperature?: number | null;
    icon?:        string | null;
}

export interface Wind {
    speed: number | null;
    deg:   number | null;
    gust:  number | null;
}