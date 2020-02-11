import React from 'react';
import axios from 'axios';

class weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: {},
        }
    }

    componentDidMount() {
       // axios.get(`https://cors-anywhere.herokuapp.com/https://api.forecast.io/forecast/cf20d2bc8131e875da42c2f5f85d7282/37.7998,-122.4063?exclude=[,minutely,flags,]`)
        axios.get(`/api/weather/tele`)
            .then(res => {
                const weather = res.data;
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

            <div className="App">
                <div className="hourly-holder">
                    {hourlies}
                </div>

            </div>
        );
    }

}
export default weather;
