import React from 'react';
import axios from 'axios';

class MusiControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            treble: '%',
            bass: '%',
            master: 0
        }
    }

    componentDidMount() {
        this.master()
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

    master = () => {
        axios.get('api/control/mpc/volume')
            .then(res => {
                const master = res.data;
                this.setState({ master })
            })
    }
    masterUp = () => {
        axios.get('api/control/mpc/volumeup')
            .then(res => {
                const master = res.data;
                this.setState({ master })
            })
    }
    masterDown = () => {
        axios.get('api/control/mpc/volumedown')
            .then(res => {
                const master = res.data;
                this.setState({ master })
            })
    }


    render() {
        return (
            <div className="musicontrol">
                Set the Controls for the Card of the Pi
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
                        <button className="down" onClick={this.masterDown}>
                            🔉
                        </button>
                    Master: {this.state.master}%
                        <button className="up" onClick={this.masterUp}>
                            🔊
                        </button>
                </div>

            </div>
        )
    }

}









export default MusiControl;