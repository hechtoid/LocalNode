import React from 'react';
import axios from 'axios';

class Woa extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            results: [],
        }
        this.suggest = this.suggest.bind(this)
    }

    componentDidMount() {
        this.suggest()
    }
    suggest() {
        axios.get(`http://suggestqueries.google.com/complete/search?callback=?hl=en&ds=yt&q=foo+bar&client=youtube&jsonp=suggestCallBack`)
            .then(res => {
                console.log(res)
            })
    }

    render() {
        let results
        if (this.state.results[0]){
            let key = 0 
            results = this.state.results.map(result => {
                return <li key={key++}>
                    {result}  
                </li>
            })   
        }
        return (
            <ul>
                {results}
            </ul>
        );
    }
}
export default Woa;