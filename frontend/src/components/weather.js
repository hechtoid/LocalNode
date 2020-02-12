import React from 'react';
import axios from 'axios';

class Weather extends React.Component {
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
            hourlies = this.state.weather.hourly.data.map(hour => {
                let timestamp = new Date(0)
                timestamp.setUTCSeconds(hour.time)
                return (
                    <div className="hourly-item"
                        key={timestamp}
                    >
                        {timestamp.getHours()} o'clock
        <br></br>
                        {hour.apparentTemperature} but actually {hour.temperature}.
        <br></br>
                        {hour.summary}, {hour.precipProbability * 100}% chance of precipitation.
      </div>
                )


            })
        }
        console.log(this.state.weather)

        return (

            <div className="weather-tele">
                WEATHER-TELE:<br></br>
                <div className="hourly-holder">
                    {hourlies}
                </div>

            </div>
        );
    }

}
export default Weather;
