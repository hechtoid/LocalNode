import React from 'react';
import axios from 'axios';
import Bus from './bus'

class Stockton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           buss: []
        }
        this.dateParser=this.dateParser.bind(this)
    }

    componentDidMount() {
        axios.get(`https://api.511.org/transit/StopMonitoring?api_key=72939361-85f9-4019-aa55-d62e4e7e2e59&Format=JSON&agency=SF&stopCode=16513`)
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
        if (this.state.buss){
            let key = 0
            busss = this.state.buss.map(bus=>{
                if (bus.MonitoredVehicleJourney.LineRef === '30' 
                || bus.MonitoredVehicleJourney.LineRef === '45' 
                || bus.MonitoredVehicleJourney.LineRef ==='91'){
                return <Bus bus={bus} key={key++} />
                }
            })    
        }
        return (
            <div className="buss">
                Stockton
                {busss}
            </div>
        );
    }

}
export default Stockton;