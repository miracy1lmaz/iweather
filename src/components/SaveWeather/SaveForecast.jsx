"use client"
import React, { useContext, useEffect, useState } from 'react';
import { IoBookmarksOutline, IoBookmarksSharp } from "react-icons/io5";
import WeatherContext from '@/context/WeatherContext';

const SaveForecast = () => {
    const { weatherData, savedForecasts, saveForecast, removeForecast } = useContext(WeatherContext);
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        if (weatherData) {
            setIsSaved(savedForecasts.some(forecast => forecast.name === weatherData.name));
        }
    }, [weatherData, savedForecasts]);

    const handleSave = () => {
        if (weatherData) {
            if (isSaved) {
                removeForecast(weatherData);
                setIsSaved(false);
            } else {
                saveForecast(weatherData);
                setIsSaved(true);
            }
        }
    };

    return (
        <div>
            <button onClick={handleSave} className="absolute right-4 top-9 text-white font-bold px-4 ">
                {isSaved ? <IoBookmarksSharp className="text-lg" /> : <IoBookmarksOutline className="text-lg" />}
            </button>
        </div>

    );
};

export default SaveForecast;
