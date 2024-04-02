"use client"
import React, { useContext, useEffect, useState } from 'react';
import WeatherContext from '@/context/WeatherContext';
import Image from 'next/image';
import useWeatherForecast from '@/services/useWeatherForecast';
import config from '@/app/config';



const WeatherForecast = () => {
  const { weatherData } = useContext(WeatherContext);
  const dt = weatherData ? weatherData.dt : null;
  const cityName = weatherData ? weatherData.name : null;
  const forecast = useWeatherForecast(cityName, config.apiKey)


  if (!forecast || forecast.length === 0) {
    return <div>Loading forecast...</div>;
  }

  const isDaytime = (timestamp, weatherData) => {
    const localTime = new Date(timestamp * 1000);
    const sunriseTime = new Date(weatherData.sys.sunrise * 1000);
    const sunsetTime = new Date(weatherData.sys.sunset * 1000);

    const isInDaytime = localTime >= sunriseTime && localTime < sunsetTime;

    return isInDaytime;
};



const moment = isDaytime(dt, weatherData) ? 'Day' : 'Night';

  return (
    <div className='w-full bg-gray-800 rounded-lg mt-2 p-2 flex justify-around'>
      {forecast.map((item, index) => {

        const temp = Math.round(item.temp_max - 273.15);
        const temp_min = Math.round(item.temp_min - 273.15);
        const weatherCondition = item.weather[0].main.replace(/\s+/g, '');
        const iconFileName = `/img/currenticons/Weather=${weatherCondition}, Moment=${moment}.svg`;
        const day = new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' });

        return (
          <div key={index} className="flex flex-col items-center">
            <p className='text-gray-200 text-sm font-bold'>{day}</p>
            <Image
              src={iconFileName}
              alt={item.weather[0].description}
              width={75}
              height={56}
            />
            <p className='text-gray-100 text-sm font-bold'>{temp}°C</p>
            <p className='text-gray-400 text-sm font-bold'>{temp_min}°C</p>
          </div>
        );
      })}
    </div>
  );
};

export default WeatherForecast;







