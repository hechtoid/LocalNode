import React from 'react';
import axios from 'axios';

class MusiControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            treble: '%',
            bass: '%',
            volume: 0,
            state: '',
            repeat: false,
            single: false,
        }
    }

    componentDidMount() {
        this.init()
        this.treble()
        this.bass()
        document.title='🔉 🎛️ 🔊'
    }
    treble = () => {
        axios.get('api/control/alsa/treble')
            .then(res => {
                const treble = res.data;
                this.setState({ treble });
            })
    }
    trebleUp = () => {
        axios.get('api/control/alsa/trebleup')
            .then(res => {
                const treble = res.data;
                this.setState({ treble });
            })
    }
    trebleDown = () => {
        axios.get('api/control/alsa/trebledown')
            .then(res => {
                const treble = res.data;
                this.setState({ treble });
            })
    }
    bass = () => {
        axios.get('api/control/alsa/bass')
            .then(res => {
                const bass = res.data;
                this.setState({ bass });
            })
    }
    bassUp = () => {
        axios.get('api/control/alsa/bassup')
            .then(res => {
                const bass = res.data;
                this.setState({ bass });
            })
    }
    bassDown = () => {
        axios.get('api/control/alsa/bassdown')
            .then(res => {
                const bass = res.data;
                this.setState({ bass });
            })
    }

    init = () => {
        axios.get('api/control/mpc/')
            .then(res => {
                const mpc = res.data;
                const state = mpc.match(/\[(.*?)\]/)[1]
                const volume = mpc.match(/volume:\ (.*?)%/)[1]
                const repeat = mpc.match(/repeat:\ (.*?)\ /)[1] === "on" ? true : false
                const single = mpc.match(/single:\ (.*?)\ /)[1] === "on" ? true : false
                this.setState({ state, volume, repeat, single })
            })
    }
    refresh = () => {
        this.init()
        this.bass()
        this.treble()
    }
    volumeUp = () => {
        axios.get('api/control/mpc/volumeup')
            .then(res => {
                const volume = res.data;
                this.setState({ volume })
            })
    }
    volumeDown = () => {
        axios.get('api/control/mpc/volumedown')
            .then(res => {
                const volume = res.data;
                this.setState({ volume })
            })
    }
    repeat = () => {
        axios.get('api/control/mpc/repeat')
            .then(res => {
                const repeat = res.data === "on" ? true : false
                this.setState({ repeat })
            })
    }
    toggle = () => {
        axios.get('api/control/mpc/toggle')
            .then(res => {
                const state = res.data
                this.setState({ state })
            })
    }
    single = () => {
        axios.get('api/control/mpc/single')
            .then(res => {
                const single = res.data === "on" ? true : false
                this.setState({ single })
            })
    }


    render() {
        return (
            <div className="musicontrol">
                <button id="refresh" onClick={this.refresh}> 
                    Set the Controls for the Card of the Pi
                </button> 
                <div className="mixer">
                    <div className="bass">
                        <button className="up" onClick={this.bassUp}>
                               🔊 <br></br> UP 
                        </button>
                        Bass: {this.state.bass} 🔊
                        <button className="down" onClick={this.bassDown}>
                            DOWN <br></br> 🔉 
                        </button>
                    </div>
                    <div className="treble">
                        <button className="up" onClick={this.trebleUp}>
                            🔊 <br></br> UP
                        </button>
                        Treble: {this.state.treble} 🔊
                        <button className="down" onClick={this.trebleDown}>
                            DOWN <br></br> 🔉
                        </button>
                    </div>
                </div>
                <div className="master-volume">
                        <button className="down" onClick={this.volumeDown}>
                            🔉
                        </button>
                    Master: {this.state.volume}%
                        <button className="up" onClick={this.volumeUp}>
                            🔊
                        </button>
                </div>
                <div className="singles">
                    <button className={this.state.repeat?'on':'off'} onClick={this.repeat}>
                        Repeat 
                    </button>
                    <button className={this.state.state==="playing"?'red':'on'} onClick={this.toggle}>
                        {this.state.state==="playing"?"Pause":"Play"}
                    </button>
                    <button className={this.state.single?'on':'off'} onClick={this.single}>
                        Single
                    </button>

                </div>

            </div>
        )
    }

}









export default MusiControl;