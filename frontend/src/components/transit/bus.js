import React from 'react';
import { Link } from 'react-router-dom';


function Bus(props) {
if (props.bus.MonitoredVehicleJourney.OperatorRef === "BA") {
    return (
            <div className="bus"><div>
    <span>{props.bus.MonitoredVehicleJourney.OriginName}</span>
    <span className="bold"> => {props.bus.MonitoredVehicleJourney.DestinationName}</span>
            </div>
        {props.bus.MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime
        ? <>
        <span className="gray">
{new Date(Date.parse(props.bus.MonitoredVehicleJourney.MonitoredCall.AimedArrivalTime)).toLocaleTimeString()}
        </span>
<span className="bold"> => {new Date(Date.parse(props.bus.MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime)).toLocaleTimeString()}
        </span>
        </>
        : <span className="bold">
{new Date(Date.parse(props.bus.MonitoredVehicleJourney.MonitoredCall.AimedArrivalTime)).toLocaleTimeString()}
        </span>}
    </div>
    )} else if (props.bus.MonitoredVehicleJourney.OperatorRef === "SF"){
        return(
        <div className="bus">
            <div><span className="bold">
            <Link to={{
                pathname: "/vehicular", 
                state: {
        vehicleNumber: props.bus.MonitoredVehicleJourney.VehicleRef
                        }
                }} >
        {props.bus.MonitoredVehicleJourney.LineRef}
                </Link> => </span> 
        {props.bus.MonitoredVehicleJourney.DestinationName} 
        </div>
        {props.bus.MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime
        ? <>
        <span className="gray">
{new Date(Date.parse(props.bus.MonitoredVehicleJourney.MonitoredCall.AimedArrivalTime)).toLocaleTimeString()}
        </span>
<span className="bold"> => {new Date(Date.parse(props.bus.MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime)).toLocaleTimeString()}
        </span>
        </>
        : <span className="bold">
{new Date(Date.parse(props.bus.MonitoredVehicleJourney.MonitoredCall.AimedArrivalTime)).toLocaleTimeString()}
        </span>}
    </div>
    )} else {
        return(
        <div className="bus">
            <div><span className="bold">
{props.bus.MonitoredVehicleJourney.LineRef} => </span> 
{props.bus.MonitoredVehicleJourney.DestinationName} 
        </div>
        {props.bus.MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime
        ? <>
        <span className="gray">
{new Date(Date.parse(props.bus.MonitoredVehicleJourney.MonitoredCall.AimedArrivalTime)).toLocaleTimeString()}
        </span>
<span className="bold"> => {new Date(Date.parse(props.bus.MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime)).toLocaleTimeString()}
        </span>
        </>
        : <span className="bold">
{new Date(Date.parse(props.bus.MonitoredVehicleJourney.MonitoredCall.AimedArrivalTime)).toLocaleTimeString()}
        </span>}
    </div>
    )}
}
export default Bus;

