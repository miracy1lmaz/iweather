import React from 'react'
import CurrentWeahter from './CurrentWeather/CurrentWeahter'
import WeatherDetails from './WeatherDetails/WeatherDetails'
import WeeklyForecast from './WeeklyForecast/WeeklyForecast'
import BackButton from '../backButton'
import SaveForecast from '../SaveWeather/SaveForecast'
import SavedCitiesNavigator from '../SaveWeather/SaveNavigator'

const Forecast = () => {
    return (
        <div className='container'>
            <BackButton />

            <div className="w-full">
                <SavedCitiesNavigator />
                <CurrentWeahter />
                <WeatherDetails />
                <WeeklyForecast />
            </div>


        </div>
    )
}

export default Forecast
