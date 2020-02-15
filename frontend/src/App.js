import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import WeatherBox from './components/weatherbox'
import Transit from './components/transit'
import TransitStop from './components/transitstop'
import TransitAll from './components/transitall'

function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path="/weather" component={WeatherBox} />
      <Route exact path="/transit" component={Transit} />
      <Route exact path="/transitstop" component={TransitStop} />
      <Route exact path="/transitall" component={TransitAll} />
      {/* <i>powered by React</i> */}
      </Router>
    </div>
  );
}

export default App;
