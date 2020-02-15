import React from 'react';
import axios from 'axios';

class TransitStop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stopCode: '16513',
            agency: 'SF',
            buss: []
        }
        this.dateParser=this.dateParser.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount() {
        axios.get(`http://api.511.org/transit/StopMonitoring?api_key=72939361-85f9-4019-aa55-d62e4e7e2e59&Format=JSON&agency=${this.state.agency}&stopCode=${this.state.stopCode}`)
        .then(res => {
            console.log(res.data)
            let buss = res.data.ServiceDelivery.StopMonitoringDelivery.MonitoredStopVisit;
            this.setState({ buss });
        })
    }

    handleSubmit(e) {
        axios.get(`http://api.511.org/transit/StopMonitoring?api_key=72939361-85f9-4019-aa55-d62e4e7e2e59&Format=JSON&agency=${this.state.agency}&stopCode=${this.state.stopCode}`)
            .then(res => {
                console.log(res.data)
                let buss = res.data.ServiceDelivery.StopMonitoringDelivery.MonitoredStopVisit;
                this.setState({ buss });
            })
    }

    dateParser(zulu){
        return new Date(Date.parse(zulu)).toLocaleTimeString()
    }

    updateStopCode() {
        return e => this.setState({
            stopCode: e.currentTarget.value
        })
    }
    updateAgency() {
        return e => this.setState({
            agency: e.currentTarget.value
        })
    }


    render() {
        let busss
        let stop
        if (this.state.buss){
            let key = 0 
            busss = this.state.buss.map(bus => {
                stop = bus.MonitoredVehicleJourney.MonitoredCall.StopPointName
                return (
                    <div className="bus" key={key++}>
                        <span className="line">{bus.MonitoredVehicleJourney.LineRef}</span> => {bus.MonitoredVehicleJourney.DestinationName}
                        <br></br>
                        <span className="aimed">{this.dateParser(bus.MonitoredVehicleJourney.MonitoredCall.AimedArrivalTime)}</span> => <span className="expected">{this.dateParser(bus.MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime)}</span>
                    </div>
                )
            })   
        }
        return (
            <div className = "stop" >
            <div className="stop-left">
                Agency Select:
                <br></br>
                <select
                    className="agency-select"
                    value={this.state.agency}
                    onChange={this.updateAgency()}
                >
                <option selected value="SF">SF Muni</option>
                <option selected value="GG">Golden Gate Transit</option>
                <option selected value="AC">AC Transit</option>
                <option selected value="MA">Marin Transit</option>
                <option selected value="SR">Santa Rosa Citybus</option>
                <option selected value="SO">Sonoma County Transit</option>
            </select>
            <form onSubmit={this.handleSubmit}>
                <br></br>
                <input type="text"
                    value={this.state.stopCode}
                    onChange={this.updateStopCode()}
                    placeholder="transit agency"
                />
                <br></br>
                <input type="submit" value="Update" />
                <br></br>
            </form>
            </div>
            <div className="stop-right">
                { stop }
                { busss }
            </div>
            </div>
        );
    }

}
export default TransitStop;
