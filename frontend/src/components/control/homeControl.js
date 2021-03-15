import React, { useState } from 'react';
import axios from 'axios';

const waves = () => {
    axios.get('api/control/waves')
}

const tvOff = () => {
    axios.get("/api/control/tv/off")
}
const tvOn = () => {
    axios.get("/api/control/tv/on")
}
const fogMe = () => {
    axios.get("/api/control/fog/me")
}
const reHome = () => {
    axios.get("/api/control/rehome")
}

function HomeControl(props) {
    return (
        <div className="home-control">
            <button onClick={waves}>
                🌊
            </button>

            <div id="buttons">
                <button id="off" onClick={tvOff}>
                    OFF
                </button>
            
                <button id="on" onClick={tvOn}>
                    ON
                </button>
            
                <button id="fog" onClick={fogMe}>
                    🌁
                </button>

                <button id="rehome" onClick={reHome}>
                    🏡
                </button>
	
            </div>
        </div>
    )
}

export default HomeControl;