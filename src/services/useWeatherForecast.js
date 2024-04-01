import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '@/app/config';

const useWeatherForecast = (cityName) => {
    const [forecast, setForecast] = useState([]);
    useEffect(() => {
        if (cityName) {
            const fetchForecast = async () => {
                try {
                    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${config.apiKey}`;
                    const response = await axios.get(url);
                    const allForecasts = response.data.list;
                    const dailyForecasts = allForecasts.reduce((acc, item) => {
                        const date = new Date(item.dt * 1000).toDateString();
                        if (!acc[date]) {
                            acc[date] = { ...item, temp_max: item.main.temp_max, temp_min: item.main.temp_min };
                        } else {
                            acc[date].temp_max = Math.max(acc[date].temp_max, item.main.temp_max);
                            acc[date].temp_min = Math.min(acc[date].temp_min, item.main.temp_min);
                        }
                        return acc;
                    }, {});

                    setForecast(Object.values(dailyForecasts).slice(0, 5));
                } catch (error) {
                    console.error('Error fetching forecast data:', error);
                    setForecast([]);
                }
            };

            fetchForecast();
        }
    }, [cityName]);

    return forecast;
};

export default useWeatherForecast;
