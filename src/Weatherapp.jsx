import { useState } from 'react';
import Search from "./SearchBox.jsx";
import InfoBox from './InfoBox.jsx';
import './Weatherapp.css'
export default function WeatherApp(){
    let [weather, setweather]=useState({
        City:"Delhi",
        feels:22.5,
        humidity:13,
        temp:22.3 ,
    });
    let updateInfo=(newinfo)=>{
       setweather(newinfo);
    }
    return(
        <div className='weather_container'>
            <div className='heading_content'>
                     <h2>Weather App</h2>
            </div>
            <Search updateInfo={updateInfo}/>
            <InfoBox Info={weather}/>
        </div>
    )
}