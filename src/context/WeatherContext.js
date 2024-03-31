"use client"
import React, { createContext, useState } from 'react';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState(() => {
        const storedData = localStorage.getItem('weatherData');
        return storedData ? JSON.parse(storedData) : null;
    });

    const updateWeatherData = (newData) => {
        localStorage.setItem('weatherData', JSON.stringify(newData));
        setWeatherData(newData);
    };

    return (
        <WeatherContext.Provider value={{ weatherData, updateWeatherData }}>
            {children}
        </WeatherContext.Provider>
    );
};

export default WeatherContext;
