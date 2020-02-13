import React from 'react';
import axios from 'axios';

class VanNess extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buss: []

        }
        this.dateParser=this.dateParser.bind(this)
    }

    componentDidMount() {
        axios.get(`http://api.511.org/transit/StopMonitoring?api_key=72939361-85f9-4019-aa55-d62e4e7e2e59&Format=JSON&agency=GG&stopCode=40032`)
        .then(res => {
            let buss = res.data.ServiceDelivery.StopMonitoringDelivery.MonitoredStopVisit;
            this.setState({ buss });
        })
    }

    dateParser(zulu){
        return new Date(Date.parse(zulu)).toLocaleTimeString()
    }

    render() {
        let busss
        if (this.state.VanNess){
            let key = 0
            busss = this.state.VanNess.map(bus=>{
                return(
                    <div className="bus" key={key++}>
                        {bus.MonitoredVehicleJourney.LineRef} => {bus.MonitoredVehicleJourney.DestinationName}
                        <br></br>
                        {this.dateParser(bus.MonitoredVehicleJourney.MonitoredCall.AimedArrivalTime)} => {this.dateParser(bus.MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime)}
                    </div>
                )
            })    
        }
        return (
            <div className="Buss">
                {busss}
            </div>
        );
    }

}
export default VanNess;
