"use client"
import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import GeolocationComponent from '@/services/Geolocation';
import WeatherContext from '@/context/WeatherContext';
import { FaSpinner } from 'react-icons/fa';
import useWeatherFetch from '@/services/useWeatherService';
import { toast } from 'react-toastify';
import config from '@/app/config';


const Searchbar = () => {
    const [inputValue, setInputValue] = useState(() => localStorage.getItem('lastSearch') || '');
    const { updateWeatherData } = useContext(WeatherContext);
    const [loading, setLoading] = useState(false);
    const { suggestions, fetchWeatherData, fetchSuggestions } = useWeatherFetch(config.apiKey);

    useEffect(() => {
        localStorage.setItem('lastSearch', inputValue);
    }, [inputValue]);

    const handleLocationFetch = (location) => {
        if (inputValue.trim() === '') {
            setInputValue(location);
        }
    };


    const handleChange = async (event) => {
        const value = event.target.value;
        setInputValue(value);
        await fetchSuggestions(value);

    };

    const handleSelect = async (location) => {
        setLoading(true);
        const data = await fetchWeatherData(location);
        updateWeatherData(data);
        setLoading(false);
    };

    return (


        <>
            <div className="relative w-full">

                <input
                    className="w-full py-3 px-4 rounded-lg focus:outline-none focus:ring bg-gray-950 text-white"
                    type="text"
                    placeholder="Search location"
                    value={inputValue}
                    onChange={handleChange}
                />

                {loading && (
                    <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                        <FaSpinner className="animate-spin text-white" size={24} />
                    </div>
                )}



                {suggestions.length > 0 &&
                    (
                        <div className="absolute bg-gray-500 mt-1 rounded-lg shadow-lg w-full z-10">
                            {suggestions.map((suggestion, index) => (
                                <Link key={index} href="/Detail" passHref>
                                    <div className="text-white py-4 px-4 cursor-pointer" onClick={() => handleSelect(suggestion)}>
                                        {suggestion}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
            </div>
            <GeolocationComponent onLocationFetch={handleLocationFetch} />

        </>
    );
};

export default Searchbar;