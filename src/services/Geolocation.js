import { useEffect } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';
import config from '@/app/config';

const GeolocationComponent = ({ onLocationFetch }) => {
    const handleFetchLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const { latitude, longitude } = position.coords;
                try {
                    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${config.apiKey}`);
                    const { data } = response;
                    const location = `${data.name}, ${data.sys.country}`;
                    onLocationFetch(location);
                } catch (error) {
                    console.error('Error fetching weather data:', error);
                }
            });
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    };

    useEffect(() => {
        handleFetchLocation();
    }, []);

    return (
        <> 
        <button onClick={handleFetchLocation} className=" border border-slate-50 flex justify-center items-center  h-4 mt-4 p-2  text-product-default rounded-lg">
            <FaMapMarkerAlt className="text-2xl" />
        </button>
        </>
    );
};

export default GeolocationComponent;




