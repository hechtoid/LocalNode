import React from 'react';
import axios from 'axios';

class WeatherTemps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spots: [],
            spoots: [],
            weatherspots: []
        }
        this.getWeatherByGeo = this.getWeatherByGeo.bind(this)
    }

    componentDidMount() {
        let spots = []
        axios.get('api/weather/spots')
            .then( res => {
                spots = res.data   
            this.setState({spots})
        })
    }

    getWeatherByGeo (geo) {
        return axios.get('api/weather/geo/'+geo)
        .then(res => {
            this.res = res.data
            return this.res
        })
    }

addTempToSpots(){

}

render() {
    let weatherspots

    // this.state.spots.map((spot) => {
        // console.log(spot)
         if (this.state.spots[0]){
             axios.get('api/weather/geo/' + this.state.spots[0].geocoords).then(res =>{
            console.log(res.data)
        }).catch(
            console.log('wtf')
        )
         }
        // this.getWeatherByGeo(spot.geocoords).then(res => {
            // weatherspots.push({ 'name': spot.name, 'temp': res.data.currently.apparentTemperature})
            // })
        // console.log(spot)
        // })


return (<div className="weather-spots">{weatherspots}</div>)       
}
}
export default WeatherTemps;
