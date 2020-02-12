import React from 'react';
import Weather from './weather.js';
import WeatherAdd from './weatheradd.js';


function WeatherBox() {



        return (
        <div className="weather-boxes">
                <WeatherAdd />
            <div className="weather-box-tele">
                <Weather geo='37.7998,-122.4063'/>
            </div>
        </div>
        )



}

export default WeatherBox;



// tele'https://api.forecast.io/forecast/cf20d2bc8131e875da42c2f5f85d7282/37.7998,-122.4063?exclude=[,minutely,flags,]`)';
 

// tam 'https://api.forecast.io/forecast/cf20d2bc8131e875da42c2f5f85d7282/37.9203,-122.5857?exclude=[,minutely,flags,]`)';
