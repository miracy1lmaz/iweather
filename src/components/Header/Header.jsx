import React from 'react'
import Image from 'next/image'
import Searchbar from './Searchbar/Searchbar'

const Header = () => {
    return (
        <div>
        <div className="flex justify-center mt-12">
          <Image src="/img/Logo.svg" alt="Logo" width={186} height={32} />
        </div>
        <div className="absolute top-1/3 w-full flex flex-col items-center px-5">
          <p className="text-md text-gray-100 mb-2 font-bold">
            Welcome to <span className="text-product-default">TypeWeather</span>
          </p>
          <p className="text-gray-200 text-sm text-center leading-5 font-normal">
            Choose a location to see the weather forecast
          </p>
          <div className="w-full max-w-md mt-6">
          <Searchbar/>
          </div>
        </div>
      </div>
      
    )
}

export default Header
