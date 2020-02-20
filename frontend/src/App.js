import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import WeatherBox from './components/weather/weatherbox'
import Transit from './components/transit/transit'
import TransitStop from './components/transit/transitstop'
import AA from './components/transit/aa'
import AnyStopWildCard from './components/transit/anyStopWildCard'

function App() {
  document.title="react511"
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route exact path="/react/weather" component={WeatherBox} />
      <Route exact path="/react/transit" component={Transit} />
      <Route exact path="/react/transitstop" component={TransitStop} />
      <Route exact path="/react/aa" component={AA} />
      <Route exact path="/react/anystop/:agency/:stop" component={AnyStopWildCard} title='stop by URL' />

      </Switch>
      </Router>
    </div>
  );
}

export default App;
