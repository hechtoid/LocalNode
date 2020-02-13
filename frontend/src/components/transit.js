import React from 'react';
import axios from 'axios';

class Busss extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Stockton: [],
            Union: [],
            Sansome: [],
            VanNess: []
        }
        this.dateParser=this.dateParser.bind(this)
    }

    componentDidMount() {
        axios.get(`http://api.511.org/transit/StopMonitoring?api_key=72939361-85f9-4019-aa55-d62e4e7e2e59&Format=JSON&agency=SF&stopCode=16513`)
            .then(res => {
                let Stockton = res.data.ServiceDelivery.StopMonitoringDelivery.MonitoredStopVisit;
                this.setState({ Stockton });
            })
        axios.get(`http://api.511.org/transit/StopMonitoring?api_key=72939361-85f9-4019-aa55-d62e4e7e2e59&Format=JSON&agency=SF&stopCode=16750`)
            .then(res => {
                let Union = res.data.ServiceDelivery.StopMonitoringDelivery.MonitoredStopVisit;
                this.setState({ Union });
            })
    //     axios.get(`http://api.511.org/transit/StopMonitoring?api_key=72939361-85f9-4019-aa55-d62e4e7e2e59&Format=JSON&agency=GG&stopCode=42006`)
    //         .then(res => {
    //             let Sansome = res.data.ServiceDelivery.StopMonitoringDelivery.MonitoredStopVisit;
    //             this.setState({ Sansome });
    //         })
    //     axios.get(`http://api.511.org/transit/StopMonitoring?api_key=72939361-85f9-4019-aa55-d62e4e7e2e59&Format=JSON&agency=GG&stopCode=40032`)
    //         .then(res => {
    //             let VanNess = res.data.ServiceDelivery.StopMonitoringDelivery.MonitoredStopVisit;
    //             this.setState({ VanNess });
    //         })
    }

    dateParser(zulu){
        return new Date(Date.parse(zulu)).toLocaleTimeString()
    }

    render() {
        let VanNessBusss
        if (this.state.VanNess){
            let key = 0
            VanNessBusss = this.state.VanNess.map(bus=>{
                return(
                    <div className="bus" key={key++}>
                        {bus.MonitoredVehicleJourney.LineRef} => {bus.MonitoredVehicleJourney.DestinationName}
                        <br></br>
                        {this.dateParser(bus.MonitoredVehicleJourney.MonitoredCall.AimedArrivalTime)} => {this.dateParser(bus.MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime)}
                    </div>
                )
            })    
        }

        let UnionBusss
        console.log(this.state.Union)
        if (this.state.Union){
            let key = 0 
            UnionBusss = this.state.Union.map(bus => {
                if (bus.MonitoredVehicleJourney.LineRef===45){
                return (
                    <div className="bus" key={key++}>
                        {this.dateParser(bus.MonitoredVehicleJourney.MonitoredCall.AimedArrivalTime)} => {this.dateParser(bus.MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime)}
                    </div>
                )
            }
            })   
        }


        return (
            <div className="Buss">
            <div className="Union">
                Union:
                {UnionBusss}
            </div>
            <div className="VanNess">
                Van Ness:
                {VanNessBusss}    
            </div>
            </div>
        );
    }

}
export default Busss;
