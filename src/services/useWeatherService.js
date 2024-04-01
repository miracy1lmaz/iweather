import { useState,useCallback } from 'react';
import axios from 'axios';
import debounce from '@/hooks/debounce';
import { toast } from 'react-toastify'; 

const useWeatherFetch = (apiKey) => {
    const [loading, setLoading] = useState(false);
    const [suggestions, setSuggestions] = useState([]);

    const fetchWeatherData = async (location) => {
        setLoading(true);
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);
            return response.data;
        } catch (error) {
            // throw error;
        } finally {
            setLoading(false);
        }
    };

    const debouncedFetchSuggestions = useCallback(debounce(async (query) => {
        if (query.length <= 1) {
            setSuggestions([]);
            return;
        }
        setLoading(true);
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}`);
            const data = response.data;
            const location = `${data.name}, ${data.sys.country}`;
            setSuggestions([location]);
        } 
        catch (error) {
            if (error.response && error.response.status === 404) {
                toast.error('Location not found. Please try a different search.');
            } else {
                toast.error('An error occurred while fetching weather data.');
            }
            setSuggestions([]);
        } finally {
            setLoading(false);
        }

    }, 500), [apiKey]);

    const fetchSuggestions = async (query) => {
        debouncedFetchSuggestions(query);
    };

    return { loading, suggestions, fetchWeatherData, fetchSuggestions };
};

export default useWeatherFetch;