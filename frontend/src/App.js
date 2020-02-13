import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import WeatherBox from './components/weatherbox'
import Busss from './components/transit'

function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path="/weather" component={WeatherBox} />
      <Route exact path="/busss" component={Busss} />
      {/* <i>powered by React</i> */}
      </Router>
    </div>
  );
}

export default App;
