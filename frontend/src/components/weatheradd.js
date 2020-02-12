import React from 'react';
import axios from 'axios';

class WeatherAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'null island',
            geocoords: '0,0'
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        let spot = {
            name: this.state.name,
            geocoords: this.state.geocoords
        }
        e.preventDefault();
        axios.post('api/weather/spots/', spot)
    }

    updateName() {
        return e => this.setState({
            name: e.currentTarget.value
        });
    }
    updateGeo() {
        return e => this.setState({
            geocoords: e.currentTarget.value
        });
    }

render() {
    return (
        <div className="weather-add">
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                value={this.state.name}
                onChange={this.updateName()}
                placeholder="name of the spot"
                />
                <input type="text"
                    value={this.state.geocoords}
                    onChange={this.updateGeo()}
                    placeholder="Lat,Long"
                />
                <input type="submit" value="Add Spot" />

            </form>

        </div>

    )
}


}

export default WeatherAdd