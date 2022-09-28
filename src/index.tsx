import ReactDOM from "react-dom/client";
import "./index.css";
import "./reset.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import openWeatherReducer from "./redux/openWeatherReducer";
import airQualityReducer from "./redux/airQualityReducer";
import AppGlobal from './AppGlobal';
export const store = configureStore({
  reducer: {
    openWeather: openWeatherReducer,
    airQuality: airQualityReducer,
  },
});

//to correctly work with hooks useDispatch and useSelector
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// const city = localStorage.getItem("city");
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
); // or instead of as HTMLElement write! we sure that this element exists ALWAYS
// console.log(city, "city");
root.render(
  <>
    <Provider store={store}>
      <AppGlobal />
    </Provider>
  </>
);
