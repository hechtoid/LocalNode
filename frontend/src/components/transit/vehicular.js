import React from 'react';
import axios from 'axios';

class Vehicular extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.location.state || {busNumber: 8816}
           
        
        this.loadBus = this.loadBus.bind(this)
        this.updateBusNumber = this.updateBusNumber.bind(this)
    }

    componentDidMount() {
        this.loadBus()
    }
    loadBus() { 
        axios.get(`http://api.511.org/transit/VehicleMonitoring?api_key=72939361-85f9-4019-aa55-d62e4e7e2e59&agency=SF&format=json&vehicleID=${this.state.busNumber}`)
            .then(res => {
                let bus = res.data.Siri.ServiceDelivery.VehicleMonitoringDelivery.VehicleActivity[0].MonitoredVehicleJourney
                this.setState({ bus });
            })
    }

    updateBusNumber() {
        return e => {
            let busNumber = e.currentTarget.value
            this.setState({
                busNumber
            })
        }
    }
    render() {
            let busInfo = 'no Tracked Vehicle'
            if (this.state.bus) {
                let gmapsURL = `https://www.google.com/maps/search/?api=1&query=${this.state.bus.VehicleLocation.Latitude},${this.state.bus.VehicleLocation.Longitude}`
                busInfo = <div className="busInfo">
                        Bus <a href = {gmapsURL} target="_blank" rel="noopener noreferrer">
                        #{this.state.bus.VehicleRef}</a> is currently running the  
                        <span className="bold"> {this.state.bus.LineRef} </span> 
                        to <span className="bold"> {this.state.bus.DestinationName}</span>.
                        <br></br>
                        The NextStop is <span className="bold">{this.state.bus.MonitoredCall.StopPointName}</span>.
                        <br></br>
                        Future Stops are: 
                        <br></br>
                        {this.state.bus.OnwardCalls.OnwardCall.map(stop => {
                            return (
                                <div>
                                stop.StopPointName
                                <span className="gray">
{new Date(Date.parse(stop.AimedArrivalTime)).toLocaleTimeString()}
        </span>
<span className="bold"> => {new Date(Date.parse(stop.ExpectedArrivalTime)).toLocaleTimeString()}
        </span>
        </div>
                                )
                            })
                        }
                </div>
            }
        return (
            <div>foo
            <input type="text"
                    id="bus-number"
                    placeholder="Bus Number"
                    value={this.state.busNumber}
                    onChange={this.updateBusNumber()}
                />
            {busInfo}
            </div>
        );
    }
}
export default Vehicular;