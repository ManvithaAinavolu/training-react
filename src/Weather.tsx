import React, { useEffect, useState } from 'react'
import { getWeather,WeatherData } from './WeatherDataService'
function Weather() {
  const [location,setLocation]=useState<string>("Narasaraopet");
  const [weatherResponse,setWeatherResponse]=useState<WeatherData>();
  useEffect(()=>{
const fetch=async ()=>{
 const res=await getWeather(location)
 setWeatherResponse(res)
}
fetch()
  },[location])

  return (
    <div>
      <input type="text" placeholder='enter a location' onChange={(e)=>{setLocation(e.target.value)}}></input>
      <p>
        Location description:{weatherResponse?.description}
      </p>
      <p>
        Location temperature:{weatherResponse?.temp}
      </p>
      <p>
        Location Humidity:{weatherResponse?.humidity}
      </p>
      
    </div>
  )
}

export default Weather
