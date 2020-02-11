import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import WeatherBox from './components/weatherbox.js'

function App() {
  return (
    <div className="App">
      <HashRouter>
      <Route exact path="/weather" component={WeatherBox} />
      </HashRouter>
    </div>
  );
}

export default App;
