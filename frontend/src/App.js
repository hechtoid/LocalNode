import React from 'react';
import './App.css';
// import { HashRouter as Router, withRouter, Route, Switch, Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import MusiControl from './components/control/musiControl'
import WeatherBox from './components/weather/weatherbox'
import Transit from './components/transit/transit'
import TransitStop from './components/transit/transitstop'
import Vehicular from './components/transit/vehicular'
import AA from './components/transit/aa'
import AnyStopWildCard from './components/transit/anyStopWildCard'
import Woa from './components/woa/woa'

function App() {
  document.title="🌩️🚌"
  return (
    <div className="App">
      <Switch>
      <Route exact path="/weather">
        <WeatherBox />
      </Route> 
      <Route path="/musicontrol" component={MusiControl} />
      <Route path="/transit" component={Transit} />
      <Route exact path="/transitstop" component={TransitStop} />
      <Route exact path="/vehicular" component={Vehicular} />
      <Route exact path="/aa" component={AA} />
      <Route exact path="/woa" component={Woa} />
      <Route path="/anystop/:agency/:stop" render={(props) => (
        <AnyStopWildCard {...props} /> )}
      />
      </Switch>
    </div>
  );
}

export default App;
