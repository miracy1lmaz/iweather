const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(1);

const getWeatherDetails = (weatherData) => [
    {
        name: 'Thermal Sensation',
        value: `${kelvinToCelsius(weatherData.main.feels_like)}°C`,
        icon: '/img/WeatherDetailsIcon/Icons.svg'
    },
    {
        name: 'Probability of Rain',
        value: '0%',  //! Apıd yoktu...:()
        icon: '/img/WeatherDetailsIcon/Icons-1.svg'
    },
    {
        name: 'Wind Speed',
        value: `${weatherData.wind.speed.toFixed(1)} m/s`,
        icon: '/img/WeatherDetailsIcon/Icons-2.svg'
    },
    {
        name: 'Air Humidity',
        value: `${weatherData.main.humidity}%`,
        icon: '/img/WeatherDetailsIcon/Icons-3.svg'
    },
    {
        name: 'UV Index',
        value: '0%', //! APIde yoktu :()
        icon: '/img/WeatherDetailsIcon/Icons-4.svg'
    }
];

export default getWeatherDetails;
