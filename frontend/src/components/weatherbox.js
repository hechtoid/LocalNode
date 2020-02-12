import React from 'react';
import WeatherGeo from './weathergeo.js';
import WeatherAdd from './weatheradd.js';
import WeatherTemps from './weathertemps.js';


function WeatherBox() {

    return (
    <div className="weather-box">
        <header>Weather Snippets</header> 
            <br></br>
            <WeatherAdd />
            <br></br>
        <div className="weather-boxes">
            {/* <WeatherGeo geo='37.7998,-122.4063'/> */}
            {/* <WeatherGeo /> */}
            <WeatherTemps />
        </div>

            <a href="https://darksky.net/poweredby/"> Powered by Dark Sky</a>
    
    </div>
    )



}

export default WeatherBox;



// tele'https://api.forecast.io/forecast/cf20d2bc8131e875da42c2f5f85d7282/37.7998,-122.4063?exclude=[,minutely,flags,]`)';
 

// tam 'https://api.forecast.io/forecast/cf20d2bc8131e875da42c2f5f85d7282/37.9203,-122.5857?exclude=[,minutely,flags,]`)';
