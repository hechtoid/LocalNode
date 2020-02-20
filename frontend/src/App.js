import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import WeatherBox from './components/weather/weatherbox'
import Transit from './components/transit/transit'
import TransitStop from './components/transit/transitstop'
import TransitAll from './components/transit/transitall'
import AA from './components/transit/aa'

function App() {
  document.title="react511"
  return (
    <div className="App">
      <Router>
      <Route exact path="/weather" component={WeatherBox} />
      <Route exact path="/transit" component={Transit} />
      <Route exact path="/transitstop" component={TransitStop} />
      <Route exact path="/transitall" component={TransitAll} />
      <Route exact path="/aa" component={AA} />
      {/* <i>powered by React</i> */}
      </Router>
    </div>
  );
}

export default App;
