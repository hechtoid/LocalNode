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
      <Router >
      <Switch>

      <Route exact path="/weather">
        <WeatherBox />
      </Route> 
      <Route path="/transit" component={Transit} />
      <Route exact path="/transitstop" component={TransitStop} />
      <Route exact path="/aa" component={AA} />
      <Route exact path="/anystop/:agency/:stop" component={AnyStopWildCard} title='stop by URL' />

      </Switch>
      </Router>
    </div>
  );
}

export default App;
