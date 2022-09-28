import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { airQualityApi } from "../api/api";
import { numToColor } from "../components/helpers/AqiToColor";

export type TColors = {
  aqi?: string | null;
  pm10?: string | null;
  pm25?: string | null;
  ozone?: string | null;
  co?: string | null;
  so2?: string | null;
  no2?: string | null;
};
export type TData = {
  aqi?: number | null | undefined;
  pm10?: number | null;
  pm25?: number | null;
  ozone?: number | null;
  co?: number | null;
  so2?: number | null;
  no2?: number | null;
};
type TAirQualityState = {
  inputValue: string;
  lsCity: string | null;
  isScrolled: boolean;
  status: string;
  colors: TColors[];
  data: TData;
};
export type TAxiosDataAQ = {
  data: {
    aqi: number;
    iaqi: {
      pm10: { v: number };
      pm25: { v: number };
      co: { v: number };
      so2: { v: number };
      no2: { v: number };
      o3: { v: number };
    };
  };
};

const defaultState: TAirQualityState = {
  inputValue: "",
  lsCity: null,
  isScrolled: false,
  status: "",
  colors: [],
  data: {
    aqi: null,
    pm10: null,
    pm25: null,
    ozone: null,
    co: null,
    so2: null,
    no2: null,
  },
};

export const getAirQualityByCity = createAsyncThunk(
  "airQuality/getAirQualityByCity",
  async (city:string) => {
    try {
      const response = await airQualityApi.getAirQuality(city) as TAxiosDataAQ;
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

const airQualitySlice = createSlice({
  name: "airQualitySlice",
  initialState: defaultState,
  reducers: {
    setIsScrolledToRedux: (state, action: PayloadAction<boolean>) => {
      state.isScrolled = action.payload;
    },
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
    setLsCity: (state, action: PayloadAction<string>) => {
      state.lsCity = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAirQualityByCity.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getAirQualityByCity.fulfilled, (state, { payload  }) => {
      state.status = "success";
      // console.log(payload, '11111111111111111111');
      
      state.data.aqi = payload?.data?.aqi;
    
      state.data.pm10 = payload?.data?.iaqi.pm10?.v;
      state.data.pm25 = payload?.data?.iaqi.pm25?.v;
      state.data.ozone = payload?.data?.iaqi.o3?.v;
      state.data.co = payload?.data?.iaqi.co?.v;
      state.data.so2 = payload?.data?.iaqi.so2?.v;
      state.data.no2 = payload?.data?.iaqi.no2?.v;
      
      state.colors = numToColor(
        state.data.aqi,
        state.data.pm10,
        state.data.pm25,
        state.data.ozone,
        state.data.co,
        state.data.so2,
        state.data.no2
      );
    });
    builder.addCase(getAirQualityByCity.rejected, (state) => {
        state.status = "error";
    });
  },
});

export const airStatusSelector = (state: RootState) => state.airQuality.status;
export const airDataSelector = (state: RootState) => state.airQuality.data;
export const airColorsSelector = (state: RootState) => state.airQuality.colors;
export const isScrolledSelector = (state: RootState) => state.airQuality.isScrolled;
export const inputValueSelector = (state: RootState) => state.airQuality.inputValue;
export const lsCitySelector = (state: RootState) => state.airQuality.lsCity;

export const { setIsScrolledToRedux, setInputValue,setLsCity } = airQualitySlice.actions;
export default airQualitySlice.reducer;
