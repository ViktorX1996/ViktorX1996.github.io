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
    <Provider store={store}>
        <App />
    </Provider>
);

