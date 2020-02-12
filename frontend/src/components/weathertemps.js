import React from 'react';
import axios from 'axios';

class WeatherTemps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spots: [],
            spoots: []

        }
    }

    componentDidMount() {
        let spots = []
        axios.get('api/weather/spots')
            .then( res => {
                // res.data.map(element => {
                    // axios.get(`api/weather/geo/${element.geocoords}`).then(
                        // res => {
                            // spots.push({
                                // name: element.name,
                                // weather: res.data
                            // })
                        // }
                    // )
                // })  
        // this.setState({ spots })
        let spots = res.data   
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

render() {

    let weatherspots=this.state.spots.map((spot) => {
            let temp = 0
            this.getWeatherByGeo(spot.geocoords)
            .then(
                res => {
                    temp = res.data.currently.apparentTemperature
                    console.log(temp)
                    return(<div className="spot">{temp}@ {spot.name}</div>)
                })
                    }
                    )



    return (<div className="weather-spots">{weatherspots}</div>)       
}
}
export default WeatherTemps;
