"use client"
import React, { useContext, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'; 
import WeatherContext from '@/context/WeatherContext';

const SavedCitiesNavigator = () => {
    const { savedForecasts, updateWeatherData } = useContext(WeatherContext);
    const [isOpen, setIsOpen] = useState(false); 

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleCitySelect = (cityData) => {
        if (updateWeatherData) {
            updateWeatherData(cityData);
        }
        setIsOpen(false);
    };

       if (savedForecasts.length === 0) {
        return null;
    }


    return (
        <div className="saved-cities-navigator bg-gray-800 text-white p-4 sm:pt-4 px-2 sm:px-4 rounded-lg shadow-md">
            <div>
                <button onClick={toggleDropdown} className="flex items-center justify-between w-full text-base sm:text-md font-bold mb-1 sm:mb-2">
                    Saved Locations
                    {isOpen ? <IoIosArrowUp className="ml-2" /> : <IoIosArrowDown className="ml-2" />}
                </button>
            </div>

            {isOpen && (
                <ul className="list-none transition-all duration-500 ease-in-out">
                    {savedForecasts.map((forecast, index) => (
                        <li
                            key={index}
                            className="cursor-pointer font-bold hover:bg-gray-700 text-gray-200 p-1 sm:p-2 rounded"
                            onClick={() => handleCitySelect(forecast)}
                        >
                            {forecast.name}
                        </li>
                    ))}
                </ul>
            )}
            {!isOpen && savedForecasts.length === 0 && (
                <p className='text-gray-200'>No cities saved yet.</p>
            )}
        </div>

    );
};

export default SavedCitiesNavigator;
