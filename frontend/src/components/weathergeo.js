import React from 'react';
import axios from 'axios';

class WeatherGeo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: {}
        }
    }

    componentDidMount() {
        axios.get(`api/weather/geo/${this.props.geo}`)
            .then(res => {
                const weather = res.data.data;
                this.setState({ weather });
            })
    }


    render() {
        let hourlies
        if (this.state.weather.hourly) {
            let key = 0
            hourlies = this.state.weather.hourly.data.map(hour => {
                let timestamp = new Date(0)
                timestamp.setUTCSeconds(hour.time)
                return (
                    <div className="hourly-item"
                        key={key++}
                    >
                        <span className="hour"> {timestamp.getHours()} </span> o'clock
        <br></br>
                        {hour.apparentTemperature}° but {hour.temperature}°.
        <br></br>
                        {hour.summary}{hour.precipProbability === 0 ?  '' :`, ${hour.precipProbability * 100}% chance of precipitation.`}
        <br></br>
      </div>
                )


            })
        }
        return (

            <div className="weather-tele">
                WEATHER-TELE:
                <br></br>
                <br></br>
                <div className="hourly-holder">
                    {hourlies}
                </div>

            </div>
        );
    }

}
export default WeatherGeo;
