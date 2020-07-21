import React from 'react';
import axios from 'axios';

class AlsaControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            treble: '%%',
            bass: '%%',
        }
    }

    componentDidMount() {
        this.treble()
        this.bass()
    }
    treble = () => {
        axios.get('api/control/alsa/treble')
            .then(res => {
                const treble = res.data;
                console.log( treble )
                this.setState({ treble });
            })
    }
    trebleup = () => {
        axios.get('api/control/alsa/trebleup')
            .then(res => {
                const treble = res.data;
                console.log( treble )
                this.setState({ treble });
            })
    }
    trebledown = () => {
        axios.get('api/control/alsa/trebledown')
            .then(res => {
                const treble = res.data;
                console.log( treble )
                this.setState({ treble });
            })
    }
    bass = () => {
        axios.get('api/control/alsa/bass')
            .then(res => {
                const bass = res.data;
                console.log( bass )
                this.setState({ bass });
            })
    }
    bassup = () => {
        axios.get('api/control/alsa/bassup')
            .then(res => {
                const bass = res.data;
                console.log( bass )
                this.setState({ bass });
            })
    }
    bassdown = () => {
        axios.get('api/control/alsa/bassdown')
            .then(res => {
                const bass = res.data;
                console.log( bass )
                this.setState({ bass });
            })
    }






    render() {
        return (
            <div className="alsacontrol">
                Set the Controls for the Heart of the Pi
                <div className="mixer">
                    <div className="bass">
                        Bass
                        <button className="up" onClick={this.bassup}>
                            UP
                        </button>
                        {this.state.bass}
                        <button className="down" onClick={this.bassdown}>
                            DOWN
                        </button>

                    </div>
                    <div className="treble">
                        Treble
                        <button className="up" onClick={this.trebleup}>
                            UP
                        </button>
                        {this.state.treble}
                        <button className="down" onClick={this.trebledown}>
                            DOWN
                        </button>
                    </div>
                </div>

            </div>
        )
    }

}









export default AlsaControl;