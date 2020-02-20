import React from 'react';
import './App.css';
import { HashRouter as Router, withRouter, Route, Switch, Link } from 'react-router-dom';
import WeatherBox from './components/weather/weatherbox'
import Transit from './components/transit/transit'
import TransitStop from './components/transit/transitstop'
import AA from './components/transit/aa'
import AnyStopWildCard from './components/transit/anyStopWildCard'

function App() {
  document.title="🌩️🚌"
  return (
    <div className="App">
      <Switch>
      <Route exact path="/weather">
        <WeatherBox />
      </Route> 
      <Route path="/transit" component={Transit} />
      <Route exact path="/transitstop" component={TransitStop} />
      <Route exact path="/aa" component={AA} />
      <Route path="/anystop/:agency/:stop" render={(props) => (
        <AnyStopWildCard {...props} /> )}
      />
      </Switch>
    </div>
  );
}

export default App;
