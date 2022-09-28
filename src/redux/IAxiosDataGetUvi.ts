export interface IAxiosDataGetUvi {
    result: Result;
}

export interface Result {
    uv:                 number;
    uv_time:            Date;
    uv_max:             number;
    uv_max_time:        Date;
    ozone:              number;
    ozone_time:         Date;
    safe_exposure_time: { [key: string]: number };
    sun_info:           SunInfo;
}

export interface SunInfo {
    sun_times:    SunTimes;
    sun_position: SunPosition;
}

export interface SunPosition {
    azimuth:  number;
    altitude: number;
}

export interface SunTimes {
    solarNoon:     Date;
    nadir:         Date;
    sunrise:       Date;
    sunset:        Date;
    sunriseEnd:    Date;
    sunsetStart:   Date;
    dawn:          Date;
    dusk:          Date;
    nauticalDawn:  Date;
    nauticalDusk:  Date;
    nightEnd:      Date;
    night:         Date;
    goldenHourEnd: Date;
    goldenHour:    Date;
}
