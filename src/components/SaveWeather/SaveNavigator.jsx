"use client"
import React, { useContext, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'; // Açılır menü için ok ikonları
import WeatherContext from '@/context/WeatherContext';

const SavedCitiesNavigator = () => {
    const { savedForecasts, updateWeatherData } = useContext(WeatherContext);
    const [isOpen, setIsOpen] = useState(false); // Açılır-kapanır menü durumu

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleCitySelect = (cityData) => {
        if (updateWeatherData) {
            updateWeatherData(cityData);
        }
        setIsOpen(false);
    };

    return (
        <div className="saved-cities-navigator bg-gray-800 text-white pt-4 sm:pt-8 px-2 sm:px-4 rounded-lg shadow-md">
            <div>
                <button onClick={toggleDropdown} className="flex items-center justify-between w-full text-base sm:text-lg font-bold mb-1 sm:mb-2">
                    Kaydedilen Konumlar
                    {isOpen ? <IoIosArrowUp className="ml-2" /> : <IoIosArrowDown className="ml-2" />}
                </button>
            </div>

            {isOpen && (
                <ul className="list-none transition-all duration-500 ease-in-out">
                    {savedForecasts.map((forecast, index) => (
                        <li
                            key={index}
                            className="cursor-pointer font-bold hover:bg-gray-700 p-1 sm:p-2 rounded"
                            onClick={() => handleCitySelect(forecast)}
                        >
                            {forecast.name}
                        </li>
                    ))}
                </ul>
            )}
            {!isOpen && savedForecasts.length === 0 && (
                <p>Henüz kaydedilmiş şehir yok.</p>
            )}
        </div>

    );
};

export default SavedCitiesNavigator;
