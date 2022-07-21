import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './reset.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import openWeatherReducer from './redux/openWeatherReducer';


export const store = configureStore(
    {
        reducer: {
            openWeather: openWeatherReducer,
        }
    }
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <script src="https://unpkg.com/leaflet@1.4.0/dist/leaflet.js"></script>
        <script src="https://api.windy.com/assets/map-forecast/libBoot.js"></script>
        <Provider store={store}>
            <App />
        </Provider>
    </>
);

