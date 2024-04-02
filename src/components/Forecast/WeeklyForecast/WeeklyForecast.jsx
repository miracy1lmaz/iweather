"use client"
import React, { useContext, useEffect, useState } from 'react';
import WeatherContext from '@/context/WeatherContext';
import Image from 'next/image';
import useWeatherForecast from '@/services/useWeatherForecast';
import config from '@/app/config';


const WeatherForecast = () => {
  const { weatherData } = useContext(WeatherContext);

  const dt = weatherData ? weatherData.dt : null;
  const timezone = weatherData ? weatherData.timezone : null
  const cityName = weatherData ? weatherData.name : null;

  const forecast = useWeatherForecast(cityName, dt, timezone, config.apiKey)


  if (!forecast || forecast.length === 0) {
    return <div>Loading forecast...</div>;
  }

  const isDaytime = (timestamp) => {
    const localTime = new Date((timestamp + timezone) * 1000);
    const hours = localTime.getUTCHours();
    return hours >= 7 && hours < 18;
  };

  return (
    <div className='w-full bg-gray-800 rounded-lg mt-2 p-2 flex justify-around'>
      {forecast.map((item, index) => {

        const temp = (item.temp_max - 273.15).toFixed(1);
        const temp_min = (item.temp_min - 273.15).toFixed(1);
        const weatherCondition = item.weather[0].main.replace(/\s+/g, '');
        const moment = isDaytime(item.dt) ? 'Day' : 'Night';
        const iconFileName = `/img/currenticons/Weather=${weatherCondition}, Moment=${moment}.svg`;
        const day = new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' });

        return (
          <div key={index} className="flex flex-col items-center">
            <p className='text-gray-200 text-xs'>{day}</p>
            <Image
              src={iconFileName}
              alt={item.weather[0].description}
              width={75}
              height={56}
            />
            <p className='text-gray-100 text-sm'>{temp}°C</p>
            <p className='text-gray-400 text-sm'>{temp_min}°C</p>
          </div>
        );
      })}
    </div>
  );
};

export default WeatherForecast;







//   const { weatherData } = useContext(WeatherContext);
//   const dt = weatherData.dt;
//   const timezone = weatherData.timezone;

//   console.log(dt, timezone);

//   const cityName = weatherData ? weatherData.name : null;
//   const forecast = useWeatherForecast(cityName, dt, timezone, config.apiKey);

//   if (!forecast || forecast.length === 0) {
//     return <div>Loading forecast...</div>;
//   }



//   return (
//     <div className='w-full bg-gray-800 rounded-lg mt-2 p-2 flex justify-around'>
//       {forecast.map((item, index) => {
//         const temp = (item.temp_max - 273.15).toFixed(1);
//         const temp_min = (item.temp_min - 273.15).toFixed(1);
//         const weatherCondition = item.weather[0].main.replace(/\s+/g, '');
//         const moment = isDaytime(item.dt) ? 'Day' : 'Night';
//         const iconFileName = /img/currenticons/Weather=${weatherCondition}, Moment=${moment}.svg;
//         const day = new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' });

//         return (
//           <div key={index} className="flex flex-col items-center">
//             <p className='text-gray-200 text-xs'>{day}</p>
//             <Image
//               src={iconFileName}
//               alt={item.weather[0].description}
//               width={75}
//               height={56}
//             />
//             <p className='text-gray-100 text-sm'>{temp}°C</p>
//             <p className='text-gray-400 text-sm'>{temp_min}°C</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
