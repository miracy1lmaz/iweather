import { useState } from 'react';
import axios from 'axios';

const useWeatherFetch = (apiKey) => {
    const [loading, setLoading] = useState(false);
    const [suggestions, setSuggestions] = useState([]);


    const fetchWeatherData = async (location) => {
        setLoading(true);
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);
            return response.data;
        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const fetchSuggestions = async (query) => {
        if (query.length > 1) {
            setLoading(true);
            try {
                const data = await fetchWeatherData(query);
                const location = `${data.name}, ${data.sys.country}`;
                setSuggestions([location]);
            } catch (error) {
                setSuggestions([]);
            } finally {
                setLoading(false);
            }
        } else {
            setSuggestions([]);
        }
    };

    return { loading, suggestions, fetchWeatherData, fetchSuggestions };
};

export default useWeatherFetch;