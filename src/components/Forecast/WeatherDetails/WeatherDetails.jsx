"use client"
import React, { useContext } from 'react';
import WeatherContext from '@/context/WeatherContext';
import getWeatherDetails from '@/utils/weatherdetails';

const WeatherDetails = () => {


    const { weatherData } = useContext(WeatherContext);

    if (!weatherData) return <div>Loading...</div>;

    const details = getWeatherDetails(weatherData);

    return (
        <div className='flex flex-col justify-center  px-4 py-4 bg-gray-800 rounded-lg mt-2'>
            {details.map((detail, index) => (

                <div key={index} className='flex items-center justify-between w-full border-b border-gray-700 py-4 '>
                    <div className='flex items-center space-x-4 '>
                        <img src={detail.icon} alt={`${detail.name} Icon`} width="24" height="24" />
                        <p className='text-gray-200 text-sm font-bold'>{detail.name}</p>
                    </div>
                    <p className='text-gray-100 text-md font-bold '>{detail.value}</p>
                </div>
            ))}
        </div>
    );
}

export default WeatherDetails;
