import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WeatherBox from './components/weatherbox.js'

function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path="/weather" component={WeatherBox} />
      </Router>
    </div>
  );
}

export default App;
