import React from 'react'
import CurrentWeahter from './CurrentWeather/CurrentWeahter'
import WeatherDetails from './WeatherDetails/WeatherDetails'
import WeeklyForecast from './WeeklyForecast/WeeklyForecast'
import BackButton from '../backButton'

const Forecast = () => {
    return (
        <div className='container'>
            <BackButton/>
            <div className="w-full">
                <CurrentWeahter  />
                <WeatherDetails />
                <WeeklyForecast />
            </div>


        </div>
    )
}

export default Forecast
