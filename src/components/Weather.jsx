import React, { useEffect, useState, useRef } from 'react'
import './Weather.css'

const Weather = () => {

  const inputRef = useRef()
    
  const [weatherData, setweatherData] = useState (false);

    const search= async (city)=>{
      try{
         const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
          const response= await fetch(url);
          const data= await response.json();
         console.log(data);
         setweatherData({
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          temperature: Math.floor(data.main.temp),
          location: data.name

         })
         }
      
       catch (error){}
    }
      useEffect(()=>{
        search();
      })
  return (
    <div className='weather'>
       <div className="searchbar">
        <input ref={inputRef} type="text" placeholder='Search' />
        <button onClick={()=>search(inputRef.current.value)} className='srcbtn' > 🔍 </button>


        <p className='temp'>{weatherData.temperature}°C</p>
        <p className='location'>{weatherData.location}</p>
        <div className="weatherdata">
            <div className="col">
                <div className='humidity'>
                <p className='per'>{weatherData.humidity}%</p>
                <span >Humidity</span>
                </div>
                <div className='wind'>
                <p className='speed'>{weatherData.windSpeed}km/h</p>
                <span>Wind Speed</span></div>
            </div>
        </div>
       </div>
        </div>
  )
}

export default Weather