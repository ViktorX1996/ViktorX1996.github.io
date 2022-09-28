import {
  getForecastByCity,
  getForecastByCityFiveDays,
  getUviByCoords,
  getWeatherByCity,
} from "../redux/openWeatherReducer";
import {
  getAirQualityByCity,
  setInputValue,
  setLsCity,
} from "../redux/airQualityReducer";
import { useAppDispatch, useAppSelector } from "./hooks";
import { useEffect } from "react";
import useDebounce from "./useDebounce";
import { useNavigate, useParams } from "react-router";

function useFetchAllAsyncData() {
  const inputValue = useAppSelector((state) => state.airQuality.inputValue);
  const debouncedValue = useDebounce<string>(inputValue, 1500);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const fetchAllAsyncData = async (value: string) => {
    try {
      if (!debouncedValue) return;
      // if(debouncedValue.length > 1) {
      //     console.log('CLEARED URL');
      //     //@ts-ignore
      //     window.history.replaceState(null, null, inputValue);
      // }
      const originalPromiseResult = await dispatch(
        getWeatherByCity(value)
      ).unwrap();
      if (originalPromiseResult.coord.lat) {
        dispatch(
          getUviByCoords({
            lat: originalPromiseResult.coord.lat,
            lng: originalPromiseResult.coord.lon,
          })
        ); //50 requests per day
        dispatch(getForecastByCity({ city: value, cnt: 5 }));
        dispatch(getForecastByCityFiveDays({ city: value, cnt: 40 }));
        dispatch(getAirQualityByCity(value));
      }
    } catch (rejectedValueOrSerializedError) {
      // handle error here
    }
  };

  useEffect(() => {
    // if (params.city && params.city === debouncedValue  ) {
    //       dispatch(setLsCity(""));
    //       console.log(params.city, 'params.city');
    //       dispatch(setInputValue(params.city));
    //       fetchAllAsyncData(params.city);
    //   } else {
    //     fetchAllAsyncData(debouncedValue);
    //     navigate(`/${debouncedValue}`);
    //   }

    if (params.city) {
      if (params.city === debouncedValue) {
        dispatch(setLsCity(""));
        dispatch(setInputValue(params.city));
        fetchAllAsyncData(params.city);
      } else {
        fetchAllAsyncData(debouncedValue);
        navigate(`/${debouncedValue}`);
      }
    } else {
      fetchAllAsyncData(debouncedValue);
    }
    navigate(`/${debouncedValue}`); //по умолчанию
  }, [debouncedValue]); //eslint-disable-line

  useEffect(() => {
    if(params.city){
        dispatch(setInputValue(params.city));
    }
  }, [])//eslint-disable-line
}

export default useFetchAllAsyncData;
