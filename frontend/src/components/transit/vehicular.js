import React from 'react';
import axios from 'axios';

class Vehicular extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.location.state || {}
           
        
        this.loadVehicle = this.loadVehicle.bind(this)
        this.updateVehicleNumber = this.updateVehicleNumber.bind(this)
    }

    componentDidMount() {
        this.loadVehicle()
        document.title="transitYourself - Live Tracker"
    }
    loadVehicle() { 
        let vehicle = {}
        axios.get(`https://api.511.org/transit/VehicleMonitoring?api_key=72939361-85f9-4019-aa55-d62e4e7e2e59&agency=SF&format=json&vehicleID=${this.state.vehicleNumber}`)
            .then(res => {
                vehicle = res.data.Siri.ServiceDelivery.VehicleMonitoringDelivery.VehicleActivity
                ? res.data.Siri.ServiceDelivery.VehicleMonitoringDelivery.VehicleActivity[0].MonitoredVehicleJourney
                : {}
                this.setState({ vehicle });
            })
    }

    updateVehicleNumber() {
        return e => {
            let vehicleNumber = e.currentTarget.value
            this.setState({
                vehicleNumber
            })
        }
    }
    render() {
            let vehicleInfo = <div>no Tracked Vehicle</div>
            let key = 0
            if (this.state.vehicle && this.state.vehicle.Monitored) {
                let gmapsURL = `https://www.google.com/maps/search/?api=1&query=${this.state.vehicle.VehicleLocation.Latitude},${this.state.vehicle.VehicleLocation.Longitude}`
                vehicleInfo = <div className="vehicleInfo">
                        Vehicle <span className="bold">
                            #{this.state.vehicle.VehicleRef}
                        </span> is currently serving route  
                        <span className="bold"> {this.state.vehicle.LineRef}</span>, 
                        <br></br>
                        Final Destination <span className="bold"> {this.state.vehicle.DestinationName}
                        </span>.
                        <br></br>
                        <a href = {gmapsURL} target="_blank" rel="noopener noreferrer">
                            Last Reported GPS Coördinates
                        </a>
                        <br></br>
                        The NextStop is <span className="bold">
                            {this.state.vehicle.MonitoredCall.StopPointName}
                            </span>,
                        <br></br>
                        Scheduled for <span className="bold">
                            {new Date(Date.parse(this.state.vehicle.MonitoredCall.AimedArrivalTime)).toLocaleTimeString()} </span>
                        but Arriving at <span className="bold">
                            {new Date(Date.parse(this.state.vehicle.MonitoredCall.ExpectedArrivalTime)).toLocaleTimeString()}
                        </span>
                        <br></br>
                        Future Stops: 
                        <br></br>
                        {this.state.vehicle.OnwardCalls.OnwardCall.map(stop => {
                            return (
                        <div className="bus" key={key++}>
                            {stop.StopPointName}
                                <br></br>
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
            <div>
                <form onSubmit={this.loadVehicle}>
                <a href="https://www.sfmta.com/getting-around/muni/muni-feedback" target="_blank" rel="noopener noreferrer">
                Vehicle Number</a>:
            <input type="text"
                    id="vehicle-number"
                    placeholder="Vehicle Number"
                    value={this.state.vehicleNumber}
                    onChange={this.updateVehicleNumber()}
                />
                <input type="submit" value="Track Vehicle" />
            </form>
            {vehicleInfo}
            </div>
        );
    }
}
export default Vehicular;