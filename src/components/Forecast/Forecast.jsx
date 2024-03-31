import React from 'react'
import CurrentWeahter from './CurrentWeather/CurrentWeahter'
import WeatherDetails from './WeatherDetails/WeatherDetails'
import WeeklyForecast from './WeeklyForecast/WeeklyForecast'

const Forecast = () => {
    return (
        <div className='container'>
            <div className="w-full">
                <CurrentWeahter  />
                <WeatherDetails />
                <WeeklyForecast/>
            </div>


        </div>
    )
}

export default Forecast
