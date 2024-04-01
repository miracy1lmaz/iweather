"use client"
import React, { useContext } from 'react';
import Image from 'next/image';
import WeatherContext from '@/context/WeatherContext';

const CurrentWeather = () => {

    const { weatherData } = useContext(WeatherContext);

    if (!weatherData) {
        return <div>Loading weather data or data not available...</div>;
    }

    const { name, main, weather, sys } = weatherData;
    const sunrise = new Date(sys.sunrise * 1000);
    const sunset = new Date(sys.sunset * 1000);
    const now = new Date();
    const moment = now >= sunrise && now < sunset ? 'Day' : 'Night';

    const formattedDate = new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    }).format(now);

    const kelvinToCelsius = (kelvin) => {
        return (kelvin - 273.15).toFixed(1).replace(/\.0$/, '');
    };

    const tempCelsius = kelvinToCelsius(main.temp);
    const tempMin = kelvinToCelsius(main.temp_min);
    const tempMax = kelvinToCelsius(main.temp_max);
    const weatherCondition = weather[0].main.replace(' ', '');
    const CurrentBg = `/img/currentBG/Weather=${weatherCondition}, Moment=${moment}.svg`;
    const iconFileName = `/img/currenticons/Weather=${weatherCondition}, Moment=${moment}.svg`;

    return (
        <div className="flex items-center justify-center mt-4">
            <div className="relative border border-gray-800 p-2 rounded-lg bg-gray-800">
                <Image src={CurrentBg} alt="Current Weather" className="rounded-lg " height={600} width={600} />
                <div className="absolute top-4 left-4 p-4">
                    <p className="text-white text-md font-bold">{name}</p>
                    <p className="text-white text-xs mt-2">{formattedDate}</p>
                </div>
                <div className="absolute bottom-2 left-4 p-4">
                    <p className="text-white text-xl font-bold mb-3">{tempCelsius}°c</p>
                    <p className="text-white text-md">{tempMax}°c / {tempMin}°c</p>
                    <p className="text-white text-sm mb-2">
                        {weather[0].description.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ')}
                    </p>
                </div>
                <div className="absolute" style={{ bottom: `calc(25px - 5%)`, right: 0, width: '50%' }}>
                    <Image src={iconFileName} alt="Weather Icon" className="w-full max-w-[210px]" height={160} width={160} />
                </div>

            </div>
        </div>
    );
}

export default CurrentWeather;
