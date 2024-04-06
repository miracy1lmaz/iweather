"use client"
import React, { createContext, useState } from 'react';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {

    const [savedForecasts, setSavedForecasts] = useState([]);

    const [weatherData, setWeatherData] = useState(() => {
        if (typeof window !== 'undefined') {
            const storedData = localStorage.getItem('weatherData');
            return storedData ? JSON.parse(storedData) : null;
        }
        return null;
    });

    const updateWeatherData = (newData) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('weatherData', JSON.stringify(newData));
        }
        setWeatherData(newData);
    };

    const saveForecast = (forecast) => {
        setSavedForecasts([...savedForecasts, forecast]);
    };

    const removeForecast = (forecastToRemove) => {
        setSavedForecasts(currentForecasts =>
            currentForecasts.filter(forecast => forecast.name !== forecastToRemove.name)
        );
    };
    

    return (
        <WeatherContext.Provider value={{ weatherData, updateWeatherData,savedForecasts, saveForecast, removeForecast}}>
            {children}
        </WeatherContext.Provider>
    );
};

export default WeatherContext;
